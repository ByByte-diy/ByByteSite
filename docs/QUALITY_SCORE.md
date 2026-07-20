# Quality Score

> **Purpose:** Document current quality metrics, test coverage, and linting status.
> **Last updated:** 2025-07-20

## Test Coverage

| Metric | Current | Target |
|---|---|---|
| Unit test runner | Karma + Jasmine | Jest (migration planned) |
| Browser | FirefoxHeadless | FirefoxHeadless |
| Coverage reporting | Not configured | > 80% |
| Pre-commit hook | lint-staged (ESLint) | lint-staged + tests |

### Spec Files

Spec files exist for key components:

| File | Tests |
|---|---|
| `src/app/app.spec.ts` | App smoke test |
| `src/app/components/about-section/about-section.spec.ts` | About section unit tests |
| `src/app/components/cta-section/cta-section.spec.ts` | CTA section unit tests |
| `src/app/components/hero-carousel/hero-carousel.spec.ts` | Carousel unit tests |

Coverage gaps: services (SeoService, RouterService, LessonsService, ThemeService), page components, shared UI components.

## Linting

| Tool | Config | Status |
|---|---|---|
| ESLint | `eslint.config.cjs` (flat config, v9) | ✅ Passing |
| Prettier | Config in package.json | Optional |

## CI Health

| Workflow | Typical Duration | Success Rate |
|---|---|---|
| CI (`ci.yml`) | ~8-12 min | ⬜ Mostly green |
| Pages deploy (`pages.yml`) | ~5-8 min | ✅ Green |
| Content update (`update-content.yml`) | ~3-5 min | ✅ Green |
| Preview (`preview.yml`) | ~5-8 min | ✅ Green |

## Performance

| Metric | Status |
|---|---|
| Lighthouse score | Not measured (CI integration pending) |
| Bundle size | Not tracked (CI integration pending) |
| First Contentful Paint | Excellent (pre-rendered static HTML) |
| Largest Contentful Paint | Excellent (pre-rendered static HTML) |

## Accessibility

| Metric | Status |
|---|---|
| Semantic HTML | ✅ Partial |
| ARIA labels | ⬜ Needs audit |
| Keyboard navigation | ✅ Core flows |
| Focus management | ⬜ Needs audit |
| Color contrast | ✅ (themed) |

## See Also

- [`exec-plans/tech-debt-tracker.md`](exec-plans/tech-debt-tracker.md) — Improvement items
- [`RELIABILITY.md`](RELIABILITY.md) — Testing strategy and reliability patterns
