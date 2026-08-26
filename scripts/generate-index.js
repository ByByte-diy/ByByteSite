import fs from 'fs';
import path from 'path';
import { createRequire } from 'module';
import yaml from 'js-yaml';

const require = createRequire(import.meta.url);
const {
  CONTENT_ROOT,
  GENERATED_INDEX_PATH,
  assertContentRootExists,
  ensureGeneratedContentDir,
} = require('./content-config.cjs');

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

// Функція для рекурсивного обходу директорій
function processDirectory(dir, relativePath = '') {
  const items = fs.readdirSync(dir);
  const lessons = [];
  const platforms = new Set();
  const levels = new Set();
  const tags = new Set();
  const languages = new Set();

  items.forEach((item) => {
    const fullPath = path.join(dir, item);
    const stat = fs.statSync(fullPath);

    if (stat.isDirectory()) {
      const subPath = path.join(relativePath, item);
      const subResult = processDirectory(fullPath, subPath);
      lessons.push(...subResult.lessons);
      subResult.platforms.forEach((p) => platforms.add(p));
      subResult.levels.forEach((l) => levels.add(l));
      subResult.tags.forEach((t) => tags.add(t));
      subResult.languages.forEach((l) => languages.add(l));
    } else if (item.endsWith('.md')) {
      const content = fs.readFileSync(fullPath, 'utf8');
      const metadata = parseFrontmatter(content);

      if (metadata && metadata.published !== false) {
        const pathParts = relativePath.split(path.sep);
        const lang = pathParts[0] || 'en';

        const lesson = {
          title: metadata.title || 'Untitled',
          slug: metadata.slug || path.basename(item, '.md'),
          lang: metadata.lang || lang,
          platforms: metadata.platforms || [],
          level: metadata.level || 'beginner',
          tags: metadata.tags || [],
          published: metadata.published !== false,
          version: metadata.version || '1.0.0',
          description: metadata.description || '',
          duration: metadata.duration || null,
          difficulty: metadata.difficulty || null,
        };

        lessons.push(lesson);

        lesson.platforms.forEach((p) => platforms.add(p));
        levels.add(lesson.level);
        lesson.tags.forEach((t) => tags.add(t));
        languages.add(lesson.lang);
      }
    }
  });

  return {
    lessons,
    platforms: Array.from(platforms),
    levels: Array.from(levels),
    tags: Array.from(tags),
    languages: Array.from(languages),
  };
}

function generateIndex() {
  console.log('Generating lessons index...');
  console.log('Content source:', CONTENT_ROOT);

  assertContentRootExists();
  ensureGeneratedContentDir();

  const result = processDirectory(CONTENT_ROOT);

  const index = {
    lessons: result.lessons,
    platforms: result.platforms.sort(),
    levels: result.levels.sort(),
    tags: result.tags.sort(),
    languages: result.languages.sort(),
    generatedAt: new Date().toISOString(),
    totalLessons: result.lessons.length,
  };

  fs.writeFileSync(GENERATED_INDEX_PATH, JSON.stringify(index, null, 2), 'utf8');

  console.log('Index generated successfully!');
  console.log(`- Total lessons: ${index.totalLessons}`);
  console.log(`- Platforms: ${index.platforms.join(', ')}`);
  console.log(`- Levels: ${index.levels.join(', ')}`);
  console.log(`- Languages: ${index.languages.join(', ')}`);
  console.log(`- Tags: ${index.tags.length} unique tags`);
  console.log(`- Index saved to: ${GENERATED_INDEX_PATH}`);
}

generateIndex();
