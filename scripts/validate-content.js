import fs from 'fs';
import path from 'path';
import { createRequire } from 'module';
import { fileURLToPath } from 'url';
import yaml from 'js-yaml';

const require = createRequire(import.meta.url);
const { CONTENT_ROOT, assertContentRootExists } = require('./content-config.cjs');

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const contentDir = CONTENT_ROOT;

// Обов'язкові поля в frontmatter
const REQUIRED_FIELDS = ['title', 'slug', 'lang', 'platforms', 'level'];
const OPTIONAL_FIELDS = ['tags', 'published', 'version', 'description', 'duration', 'difficulty'];

// Валідні значення для полів
const VALID_LANGUAGES = ['en', 'uk', 'ru'];
const VALID_PLATFORMS = ['bybyte_nano', 'bybyte_mega', 'bybyte_nanoboy', 'arduino', 'raspberry', 'esp8266', 'esp32'];
const VALID_LEVELS = ['beginner', 'intermediate', 'advanced'];

// Функція для парсингу frontmatter
function parseFrontmatter(content) {
  const frontmatterMatch = content.match(/^---(?:\r?\n)([\s\S]*?)(?:\r?\n)---(?:\r?\n|$)/);
  if (!frontmatterMatch) return null;

  const frontmatter = frontmatterMatch[1];

  try {
    const metadata = yaml.load(frontmatter);
    return metadata ?? {};
  } catch (error) {
    console.error('Error parsing YAML frontmatter:', error.message);
    return null;
  }
}

const VALID_UNLOCK_MODES = ['immediate', 'next', 'timer'];
const STEP_MARKER_REGEX = /<!--\s*step:([\w-]+)(?:\s*\r?\n([\s\S]*?))?\s*-->/g;

function validateSteps(content, filePath) {
  const errors = [];
  const warnings = [];

  const frontmatterMatch = content.match(/^---(?:\r?\n)([\s\S]*?)(?:\r?\n)---(?:\r?\n|$)/);
  if (!frontmatterMatch) {
    return { errors, warnings };
  }

  let frontmatter;
  try {
    frontmatter = yaml.load(frontmatterMatch[1]) ?? {};
  } catch {
    return { errors, warnings };
  }

  const stepsConfig = frontmatter.steps;
  if (!stepsConfig || stepsConfig.mode !== 'stepped') {
    return { errors, warnings };
  }

  const body = content.substring(frontmatterMatch[0].length);
  const markers = [];
  let match;

  STEP_MARKER_REGEX.lastIndex = 0;
  while ((match = STEP_MARKER_REGEX.exec(body)) !== null) {
    markers.push({ id: match[1], metaYaml: match[2]?.trim() ?? '' });
  }

  const stepIds = markers.map((marker) => marker.id);
  const uniqueIds = new Set(stepIds);

  if (stepIds.length !== uniqueIds.size) {
    errors.push('Duplicate step ids found in step markers');
  }

  if (!stepIds.includes('intro')) {
    errors.push('Stepped lesson must include <!-- step:intro --> marker');
  }

  const taskSteps = markers.filter((marker) => marker.id !== 'intro');
  if (taskSteps.length === 0) {
    errors.push('Stepped lesson must include at least one task step (step:1, step:2, ...)');
  }

  taskSteps.forEach((marker) => {
    if (marker.metaYaml) {
      try {
        const meta = yaml.load(marker.metaYaml);
        if (meta?.timer !== undefined && (typeof meta.timer !== 'number' || meta.timer <= 0)) {
          errors.push(`Step "${marker.id}": timer must be a positive number`);
        }
        (meta?.actions ?? []).forEach((action, index) => {
          if (!action?.id) {
            errors.push(`Step "${marker.id}": action ${index + 1} missing id`);
          }
          if (action?.unlock && !VALID_UNLOCK_MODES.includes(action.unlock)) {
            errors.push(`Step "${marker.id}": invalid unlock mode "${action.unlock}"`);
          }
        });
      } catch {
        errors.push(`Step "${marker.id}": invalid YAML in step marker`);
      }
    }
  });

  if (stepIds.length === 0) {
    warnings.push('steps.mode is stepped but no step markers found — will render as linear');
  }

  return { errors, warnings };
}

function validateLesson(filePath, metadata, content) {
  const errors = [];
  const warnings = [];

  REQUIRED_FIELDS.forEach((field) => {
    if (!metadata[field]) {
      errors.push(`Missing required field: ${field}`);
    }
  });

  if (metadata.lang && !VALID_LANGUAGES.includes(metadata.lang)) {
    errors.push(`Invalid language: ${metadata.lang}. Valid languages: ${VALID_LANGUAGES.join(', ')}`);
  }

  if (metadata.platforms) {
    metadata.platforms.forEach((platform) => {
      if (!VALID_PLATFORMS.includes(platform)) {
        errors.push(`Invalid platform: ${platform}. Valid platforms: ${VALID_PLATFORMS.join(', ')}`);
      }
    });
  }

  if (metadata.level && !VALID_LEVELS.includes(metadata.level)) {
    errors.push(`Invalid level: ${metadata.level}. Valid levels: ${VALID_LEVELS.join(', ')}`);
  }

  if (metadata.slug) {
    const slugPattern = /^[a-z0-9_-]+$/;
    if (typeof metadata.slug !== 'string' || !slugPattern.test(metadata.slug)) {
      errors.push(
        `Invalid slug format: ${metadata.slug}. Use lowercase letters, numbers, underscores, and hyphens only.`,
      );
    }
  }

  if (metadata.version) {
    const versionPattern = /^\d+\.\d+\.\d+$/;
    if (!versionPattern.test(metadata.version)) {
      warnings.push(`Version should follow semantic versioning: ${metadata.version}`);
    }
  }

  if (metadata.description && metadata.description.length < 10) {
    warnings.push(`Description is too short: ${metadata.description.length} characters`);
  }

  const stepValidation = validateSteps(content, filePath);
  errors.push(...stepValidation.errors);
  warnings.push(...stepValidation.warnings);

  return { errors, warnings };
}

function validateDirectory(dir, relativePath = '') {
  const items = fs.readdirSync(dir);
  let totalErrors = 0;
  let totalWarnings = 0;
  let totalLessons = 0;

  items.forEach(item => {
    const fullPath = path.join(dir, item);
    const stat = fs.statSync(fullPath);

    if (stat.isDirectory()) {
      const subPath = path.join(relativePath, item);
      const subResult = validateDirectory(fullPath, subPath);
      totalErrors += subResult.errors;
      totalWarnings += subResult.warnings;
      totalLessons += subResult.lessons;
    } else if (item.endsWith('.md')) {
      totalLessons++;
      const content = fs.readFileSync(fullPath, 'utf8');
      const metadata = parseFrontmatter(content);

      if (!metadata) {
        console.error(`❌ ${fullPath}: No frontmatter found`);
        totalErrors++;
        return;
      }

      const validation = validateLesson(fullPath, metadata, content);

      if (validation.errors.length > 0) {
        console.error(`❌ ${fullPath}:`);
        validation.errors.forEach(error => console.error(`  - ${error}`));
        totalErrors += validation.errors.length;
      }

      if (validation.warnings.length > 0) {
        console.warn(`⚠️  ${fullPath}:`);
        validation.warnings.forEach(warning => console.warn(`  - ${warning}`));
        totalWarnings += validation.warnings.length;
      }

      if (validation.errors.length === 0 && validation.warnings.length === 0) {
        console.log(`✅ ${fullPath}: Valid`);
      }
    }
  });

  return { errors: totalErrors, warnings: totalWarnings, lessons: totalLessons };
}

// Головна функція валідації
function validateContent() {
  console.log('Validating content structure...');
  console.log('Content source:', contentDir);

  assertContentRootExists();

  if (!fs.existsSync(contentDir)) {
    console.error('Content directory not found:', contentDir);
    process.exit(1);
  }

  const result = validateDirectory(contentDir);

  console.log('\n📊 Validation Summary:');
  console.log(`- Total lessons: ${result.lessons}`);
  console.log(`- Errors: ${result.errors}`);
  console.log(`- Warnings: ${result.warnings}`);

  if (result.errors > 0) {
    console.error('\n❌ Validation failed! Please fix the errors above.');
    process.exit(1);
  } else if (result.warnings > 0) {
    console.warn('\n⚠️  Validation passed with warnings.');
  } else {
    console.log('\n✅ All content is valid!');
  }
}

// Запускаємо валідацію
validateContent();
