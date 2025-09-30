module.exports = {
  root: true,
  parser: '@typescript-eslint/parser',
  parserOptions: {
    project: ['./tsconfig.json', './tsconfig.spec.json'],
    sourceType: 'module'
  },
  plugins: ['@typescript-eslint', 'import', 'jsdoc', 'prettier'],
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:import/recommended',
    'plugin:jsdoc/recommended',
    'plugin:prettier/recommended'
  ],
  env: {
    es2023: true,
    browser: true,
    node: true,
    jest: true
  },
  ignorePatterns: ['dist/', 'node_modules/', '*.config.*', 'jest.config.*'],
  rules: {
    'prettier/prettier': 'warn',
    'import/no-unresolved': 'off',
    '@typescript-eslint/no-explicit-any': 'off'
  }
};


