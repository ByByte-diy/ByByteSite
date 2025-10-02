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
## Testing

- Runner: Karma + Jasmine
- Browsers: FirefoxHeadless (default). Chrome can be used if available
- Config: `karma.conf.cjs` (CJS due to `type: module`)
- Builder: `@angular/build:karma` (see `angular.json`)

Commands:

```bash
npm test           # watch mode
```

Troubleshooting:
- "No binary for Chrome": use Firefox (`karma-firefox-launcher`) or set `CHROME_BIN`
- ESM error in karma config: ensure file is `karma.conf.cjs`

## UI Architecture updates

- Header
  - `HeaderComponent` uses a reusable `SocialLinks` component (`src/app/shared/social-links/`)
  - Desktop: socials on the right section; Mobile: socials rendered inside dropdown menu
  - Mobile layout swaps order: socials first (left), then theme/lang toggles (right)
- Hero Carousel
  - Feature icons via CSS masks (`mask-image` / `-webkit-mask-image`) for theme-aware coloring
  - Icon colors controlled via CSS variables (`--icon-bg`, `--icon-color`)
- Shared Components
  - **BenefitCard** (`src/app/shared/benefit-card/`) - colored cards with icons for community benefits
  - **InfoCard** (`src/app/shared/info-card/`) - universal info cards supporting features, used in about-section and why-important
  - **Button** (`src/app/shared/ui/button/`) - comprehensive button system with 8 variants, 4 sizes, and presets
- Button System
  - Variants: primary, secondary, accent, success, warning, danger, ghost, outline
  - Sizes: sm, md, lg, xl
  - Presets: cta, link, externalLink, submit, loading, disabled
  - Used throughout: community page, CTA section, carousel buttons
- Styling and overflow
  - Global `overflow-x: hidden` and safe image defaults to prevent horizontal scroll
  - Mobile adjustments for feature icon circle size
- Linting: ESLint v9 (flat config), simple-git-hooks + lint-staged (pre-commit fix)
- Deployment: GitHub Pages (`angular-cli-ghpages`), assets in `public/`
