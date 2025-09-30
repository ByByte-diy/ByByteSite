# AI Docs

- Conventions: standalone components, signals API, functional providers.
- i18n via @ngx-translate, JSON in src/assets/i18n.
- No API yet; target: GitHub Pages.
- Environments in src/environments.
- Testing: Jest.

## Current technologies

- Framework: Angular 20 (standalone + signals). Router with lazy `loadComponent`.
- Build: `@angular/build` application builder, styles in SCSS, assets under `public/`.
- Internationalization: `@ngx-translate/core` with HTTP loader; languages: `en`, `uk`, `ru`.
- Theming: CSS variables + `.theme-light`/`.theme-dark` and `prefers-color-scheme`; `ThemeService` toggles `documentElement` class.
- Header UI: responsive with logo, nav (Build, Learning, Blog, Community), socials, `LangSwitcher`, `ThemeToggle`.
- Testing: Jest 30, `jest-preset-angular`, `ts-jest` (ESM), Babel for `.mjs`.
- Linting: ESLint v9 (flat config `eslint.config.cjs`), `simple-git-hooks` + `lint-staged` (pre-commit: eslint --fix on staged TS).
- Config: TypeScript `moduleResolution: bundler` for app; tests use `NodeNext`.
- Deployment: GitHub Pages via `angular-cli-ghpages` and build scripts.
