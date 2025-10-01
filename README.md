# ByByteSite

Angular site for STEM robotic platform.

## Local dev
- npm start
- npm run test
- npm run build

## GitHub Pages
- npm run deploy:gh

## i18n
JSON files under src/assets/i18n (en, uk, ru).

## Testing
Karma + Jasmine (headless Firefox by default).

Run tests:

```bash
npm test
```

Notes:
- If Chrome is not installed, tests run with Firefox headless (`karma-firefox-launcher`).
- Config: `karma.conf.cjs` (CommonJS because `package.json` uses `type: "module"`).
- Angular builder: `@angular/build:karma` configured in `angular.json`.

## New UI features

- Header
  - Responsive mobile menu with burger button
  - Social links component reused in desktop and mobile (`app/shared/social-links/`)
  - In mobile, social icons render inside the menu; theme and language toggles stay on the right
- Hero carousel
  - Full-width slides with text overlay, dots navigation (if >1 slide)
  - Feature cards under the carousel (responsive grid)
  - Feature icons rendered via CSS masks with theme-driven colors
- Theming and icons
  - Icon background and glyph colors are controlled by CSS variables: `--icon-bg`, `--icon-color`
  - Dark theme uses `--icon-bg: var(--color-surface)`; light theme uses `--icon-bg: #fff`
  - External SVGs use `fill: var(--svg-fill)` for color via CSS variable

## Mobile specifics

- Prevented horizontal scroll globally; images constrained to container width
- Smaller feature icon circle on small screens (`@media (max-width: 640px)`)
