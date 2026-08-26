const fs = require('fs');
const path = require('path');

const PROJECT_ROOT = path.join(__dirname, '..');
const CONTENT_ROOT = path.join(PROJECT_ROOT, 'submodules/ByByteLessons/content');
const GENERATED_CONTENT_DIR = path.join(PROJECT_ROOT, 'src/generated/content');
const GENERATED_INDEX_PATH = path.join(GENERATED_CONTENT_DIR, 'index.json');

function assertContentRootExists() {
  if (!fs.existsSync(CONTENT_ROOT)) {
    console.error('Lessons content directory not found:', CONTENT_ROOT);
    console.error('');
    console.error('Initialize the submodule:');
    console.error('  git submodule update --init --recursive');
    process.exit(1);
  }
}

function ensureGeneratedContentDir() {
  fs.mkdirSync(GENERATED_CONTENT_DIR, { recursive: true });
}

module.exports = {
  PROJECT_ROOT,
  CONTENT_ROOT,
  GENERATED_CONTENT_DIR,
  GENERATED_INDEX_PATH,
  assertContentRootExists,
  ensureGeneratedContentDir,
};
