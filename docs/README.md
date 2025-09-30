# Site Documentation

- Architecture
- Components
- Content structure

## Tech stack

- Angular 20 (standalone APIs, functional providers, signals)
- Angular Build (builder) + SCSS
- Routing: standalone `Routes` with lazy `loadComponent`
- i18n: `@ngx-translate/core` + JSON dictionaries (`src/assets/i18n`)
- Theming: CSS custom properties, light/dark with system preference and manual toggle
- Testing: Jest 30 + jest-preset-angular + ts-jest (ESM)
- Linting: ESLint v9 (flat config), simple-git-hooks + lint-staged (pre-commit fix)
- Deployment: GitHub Pages (`angular-cli-ghpages`), assets in `public/`
