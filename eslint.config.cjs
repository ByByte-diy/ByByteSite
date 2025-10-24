// ESLint flat config for ESLint v9+
const tsParser = require('@typescript-eslint/parser');
const tsPlugin = require('@typescript-eslint/eslint-plugin');
const importPlugin = require('eslint-plugin-import');
const jsdocPlugin = require('eslint-plugin-jsdoc');
const prettierPlugin = require('eslint-plugin-prettier');

module.exports = [
  {
    ignores: ['dist/**', 'node_modules/**', 'coverage/**']
  },
  {
    files: ['**/*.ts'],
    languageOptions: {
      parser: tsParser,
      parserOptions: {
        project: ['./tsconfig.json', './tsconfig.spec.json'],
        sourceType: 'module'
      }
    },
    plugins: {
      '@typescript-eslint': tsPlugin,
      import: importPlugin,
      jsdoc: jsdocPlugin,
      prettier: prettierPlugin
    },
    rules: {
      // TypeScript
      '@typescript-eslint/no-explicit-any': 'off',

      // Import
      'import/no-unresolved': 'off',

      // JSDoc
      'jsdoc/require-param-description': 'off',
      'jsdoc/require-returns-description': 'off',

      // Prettier
      'prettier/prettier': 'warn'
    }
  },
  {
    files: ['**/*.html'],
    rules: {}
  }
];


