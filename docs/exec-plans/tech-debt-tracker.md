# Technical Debt Tracker

> **Purpose:** Track known technical debt and improvement opportunities.
> **Last updated:** 2025-07-20

## High Priority

| Item | Area | Impact | Notes |
|---|---|---|---|
| Migrate from Karma+Jasmine to Jest | Testing | Modern tooling, faster runs, better DX | Jest preset already partially configured (`setup-jest.ts`, `tsconfig.spec.json` references jest types) |
| Add Content Security Policy headers | Security | XSS mitigation | Requires GitHub Pages headers config or CDN proxy |
| Audit dependencies for unused packages | Maintenance | Reduce bundle size, attack surface | Check `ngx-markdown`, unused scripts |
| Standardize `prerendered-routes.txt` languages | Build | The route generation script hardcodes `['en','uk','ru']` instead of reading from `environment.ts` | Causes drift if languages change |

## Medium Priority

| Item | Area | Impact | Notes |
|---|---|---|---|
| Replace `@ngx-translate` with Angular 20+ `$localize` + i18n | i18n | Remove dependency, smaller bundle | Blocked by need for runtime language switching; evaluate if Angular i18n now supports it |
| Lazy-load translation files | Performance | Smaller initial bundle | Currently all translations loaded upfront per language |
| Add automated SEO translation validation in CI | SEO | Catch missing translations early | CI step to check `seo.*` keys exist in all language files |
| Add hreflang tags for multi-language SEO | SEO | Better search engine language targeting | |

## Low Priority

| Item | Area | Impact | Notes |
|---|---|---|---|
| Add pagination for large lesson catalogs | Lessons UX | Future-proofing | Currently < 50 lessons |
| Add lesson search by content | Lessons UX | Improved discoverability | Requires Fuse.js or similar |
| Add lesson rating/feedback | Lessons UX | Community engagement | Requires backend; violates static-first principle |
| Migrate to Angular's new `@let` syntax (v20) | DX | Modern pattern | Wait for stable release |
