import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import yaml from 'js-yaml';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const contentDir = path.join(__dirname, '../src/assets/content');

// Обов'язкові поля в frontmatter
const REQUIRED_FIELDS = ['title', 'slug', 'lang', 'platforms', 'level'];
const OPTIONAL_FIELDS = ['tags', 'published', 'version', 'description', 'duration', 'difficulty'];

// Валідні значення для полів
const VALID_LANGUAGES = ['en', 'uk', 'ru'];
const VALID_PLATFORMS = ['bybyte_nano', 'bybyte_mega', 'bybyte_nanoboy', 'arduino', 'raspberry', 'esp8266', 'esp32'];
const VALID_LEVELS = ['beginner', 'intermediate', 'advanced'];

// Функція для парсингу frontmatter
function parseFrontmatter(content) {
  const frontmatterMatch = content.match(/^---\n([\s\S]*?)\n---/);
  if (!frontmatterMatch) return null;

  const frontmatter = frontmatterMatch[1];

  try {
    const metadata = yaml.load(frontmatter);
    return metadata || {};
  } catch (error) {
    console.error('Error parsing YAML frontmatter:', error.message);
    return null;
  }
}

// Функція для валідації уроку
function validateLesson(filePath, metadata) {
  const errors = [];
  const warnings = [];

  // Перевіряємо обов'язкові поля
  REQUIRED_FIELDS.forEach(field => {
    if (!metadata[field]) {
      errors.push(`Missing required field: ${field}`);
    }
  });

  // Перевіряємо мову
  if (metadata.lang && !VALID_LANGUAGES.includes(metadata.lang)) {
    errors.push(`Invalid language: ${metadata.lang}. Valid languages: ${VALID_LANGUAGES.join(', ')}`);
  }

  // Перевіряємо платформи
  if (metadata.platforms) {
    metadata.platforms.forEach(platform => {
      if (!VALID_PLATFORMS.includes(platform)) {
        errors.push(`Invalid platform: ${platform}. Valid platforms: ${VALID_PLATFORMS.join(', ')}`);
      }
    });
  }

  // Перевіряємо рівень
  if (metadata.level && !VALID_LEVELS.includes(metadata.level)) {
    errors.push(`Invalid level: ${metadata.level}. Valid levels: ${VALID_LEVELS.join(', ')}`);
  }

  // Перевіряємо slug (має бути унікальним)
  if (metadata.slug) {
    const slugPattern = /^[a-z0-9-]+$/;
    if (!slugPattern.test(metadata.slug)) {
      errors.push(`Invalid slug format: ${metadata.slug}. Use lowercase letters, numbers, and hyphens only.`);
    }
  }

  // Перевіряємо версію
  if (metadata.version) {
    const versionPattern = /^\d+\.\d+\.\d+$/;
    if (!versionPattern.test(metadata.version)) {
      warnings.push(`Version should follow semantic versioning: ${metadata.version}`);
    }
  }

  // Перевіряємо опис
  if (metadata.description && metadata.description.length < 10) {
    warnings.push(`Description is too short: ${metadata.description.length} characters`);
  }

  return { errors, warnings };
}

// Функція для рекурсивного обходу директорій
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

      const validation = validateLesson(fullPath, metadata);

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
