# Roadmap & Plans

> **Purpose:** High-level roadmap, milestones, and feature backlog.
> **Last updated:** 2025-07-20

## Current Status

The platform is **live** at [bybyte.diy](https://www.bybyte.diy) with core features operational:

- ✅ Multi-language lesson catalog (en, uk, ru)
- ✅ Prerendered SEO
- ✅ CI/CD with GitHub Actions
- ✅ Light/dark theme
- ✅ Build guides and community pages
- ✅ Blog

## Short-term (Next)

| Item | Priority | Notes |
|---|---|---|
| Migrate Karma+Jasmine → Jest | High | Faster tests, better DX |
| Add CSP headers | High | Security hardening |
| Add automated SEO translation key validation | Medium | CI check for missing keys |
| Add hreflang tags | Medium | Multi-language SEO improvement |

## Medium-term (Next Quarter)

| Item | Notes |
|---|---|
| Lesson search by content | Full-text search across lesson markdown |
| Lesson reading progress | LocalStorage-based, no backend needed |
| Interactive code examples | Embedded simulators (Wokwi, etc.) |
| PDF export for lessons | Print-friendly lesson format |
| RSS feed for new lessons | SEO and subscriber growth |

## Long-term (Future)

| Item | Notes |
|---|---|
| Community-contributed lessons | Review workflow for PR-based lesson submissions |
| Interactive quizzes at end of lessons | Multiple choice, drag-and-drop |
| Certificate generation | Completion certificates for course tracks |
| Mobile app (PWA) | Offline lesson access |
| Analytics | Privacy-focused, minimal tracking |
| Translations for more languages | German, Spanish, French, Polish |

## Completed Milestones

- ✅ Initial site launch (Angular 19)
- ✅ Multi-language support (en, uk, ru)
- ✅ SEO system with prerendered meta tags
- ✅ GitHub Pages deployment with custom domain
- ✅ Automatic lesson content sync from ByByteLessons
- ✅ Upgrade to Angular 20
- ✅ Button component system (8 variants, 4 sizes)
- ✅ CSS theme system (light/dark/system)

## See Also

- [`exec-plans/tech-debt-tracker.md`](exec-plans/tech-debt-tracker.md) — Known technical debt
- [`QUALITY_SCORE.md`](QUALITY_SCORE.md) — Quality metrics and targets
