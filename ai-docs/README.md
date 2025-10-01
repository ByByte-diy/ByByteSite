# AI Docs

- Conventions: standalone components, signals API, functional providers.
- i18n via @ngx-translate, JSON in src/assets/i18n.
- No API yet; target: GitHub Pages.
- Environments in src/environments.
## Testing

- Framework: Karma + Jasmine
- Headless browser: Firefox (via `karma-firefox-launcher`)
- Config file: `karma.conf.cjs`
- Test command: `npm test`

Rationale:
- Angular 20 + ESM works reliably with Karma; Jest ESM setup was removed.

## Recent UI additions

- Reusable Social Links component (standalone) at `src/app/shared/social-links/`.
- Header mobile: socials moved into menu; theme/lang toggles remain right-aligned.
- Hero carousel feature icons switched to CSS mask approach; color via CSS variables.
- Global overflow fixes to prevent horizontal scroll; responsive icon sizes on mobile.

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
