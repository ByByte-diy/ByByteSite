# Reliability

> **Purpose:** Document testing strategy, error handling, SSR/prerendering guarantees, and failure modes.
> **Last updated:** 2025-07-20

## Uptime & Availability

The site is hosted on **GitHub Pages**, which provides:

- 99.9%+ uptime SLA (infrastructure)
- Global CDN (Fastly)
- No single point of failure for static assets
- Zero maintenance operations (no servers, no databases)

**Downside:** No control over server configuration (CSP headers, redirect rules, caching policy).

## Prerendering Guarantees

Every user-visible route is prerendered at build time:

| Route Category | Guarantee |
|---|---|
| Top-level pages (home, build, community, blog, terms, privacy) | ✅ Always prerendered |
| Language variants (en, uk, ru) | ✅ All languages prerendered |
| Lesson listing per platform/level | ✅ Dynamic from index.json |
| Lesson detail pages | ✅ Dynamic from index.json |
| 404 fallback | ✅ 404.html copies index.html |

**Failure mode:** If `scripts/generate-prerender-routes.cjs` fails (e.g. missing `index.json`), fallback routes are generated covering base pages only. Lessons are not prerendered in this case, but the site still works (client-side rendering).

## Error Handling

### Build-time Errors

| Scenario | Behavior |
|---|---|
| Lesson frontmatter invalid | `validate-content.js` fails CI → deploy blocked |
| Translation key missing | Falls back to default language (en) or shows the key name |
| `index.json` missing | `generate-prerender-routes.cjs` uses fallback routes; `LessonsService` shows empty state |
| Build fails | CI deploy step skipped; previous deployment remains live |

### Runtime Errors

| Scenario | Behavior |
|---|---|
| Translation file 404 (browser) | HTTP loader falls back to `en.json` |
| `translate.instant()` fails | Returns key name or fallback value |
| Content file missing | Lesson detail shows "not found" state |
| Image missing | Falls back to placeholder/default image |
| JavaScript disabled | Static HTML renders with all meta tags; no interactive features |

## Testing Strategy

| Layer | Tool | Scope |
|---|---|---|
| Unit tests | Karma + Jasmine | Component logic, service methods |
| Manual | Developer | Visual regression, responsive layout, language switching |
| CI | GitHub Actions | Tests run on every push |
| Build validation | `ng build` | TypeScript compilation, template type-checking |

### What Is Not Tested (Gaps)

- E2E / integration tests
- Visual regression tests
- Performance budget tests
- Accessibility audit in CI

## Content Pipeline Reliability

The content update workflow (`update-content.yml`) handles:

1. **ByByteLessons repo unavailable** → workflow fails, no content update, existing content stays
2. **Content validation errors** → CI reports errors, push is blocked, site not deployed
3. **Index generation failure** → Build continues with existing index

## Dependency Management

- `npm audit` runs in CI (not yet configured to fail builds on critical CVEs)
- Dependencies updated manually via `npm update` or Dependabot (not yet configured)
- Angular updates follow LTS schedule

## See Also

- [`QUALITY_SCORE.md`](QUALITY_SCORE.md) — Quality metrics
- [`ARCHITECTURE.md`](ARCHITECTURE.md) — Build pipeline architecture
- [`exec-plans/tech-debt-tracker.md`](exec-plans/tech-debt-tracker.md) — Known reliability debt
