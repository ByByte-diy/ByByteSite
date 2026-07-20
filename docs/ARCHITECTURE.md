# ByByte.DIY — Architecture

> **Audience:** Engineers and agents needing a deep understanding of how the system fits together.
> **Last updated:** 2025-07-20

## System Overview

```
┌──────────────────────────────────────────────────────────────┐
│                    GitHub Pages (CDN)                        │
│  ┌──────────────────────────────────────────────────────┐    │
│  │  dist/ByByteSite/browser/                            │    │
│  │    index.html (en)           /uk/index.html          │    │
│  │    /en/index.html            /ru/index.html          │    │
│  │    /en/build/index.html      /uk/build/index.html    │    │
│  │    /en/learn/...             /uk/learn/...           │    │
│  │    ... static HTML per route                         │    │
│  └──────────────────────────────────────────────────────┘    │
└──────────────────────────────────────────────────────────────┘
         ▲
         │ npm run build (prerenders all routes)
         │
┌──────────────────────────────────────────────────────────────┐
│                    Build Pipeline                            │
│  GitHub Actions → checkout → npm ci → generate-prerender-    │
│  routes → ng build (prerender) → deploy-to-gh-pages          │
└──────────────────────────────────────────────────────────────┘
```

The site is **fully static**. There is no running SSR server in production. Prerendering happens at build time.

## Module Dependency Graph

```
app.config.ts
  ├── provideRouter(routes)
  │     └── app.routes.ts
  │           ├── / → RootPageComponent (redirect guard)
  │           └── /:lang → LanguageWrapperComponent (languageGuard)
  │                 └── sharedRoutes
  │                       ├── / → Home
  │                       ├── /build → BuildPage
  │                       ├── /learn → lessons.routes (lazy)
  │                       ├── /community → Community
  │                       ├── /blog → BlogComponent
  │                       ├── /terms → TermsComponent
  │                       ├── /privacy → PrivacyComponent
  │                       └── /** → NotFoundComponent
  ├── provideCore()
  │     └── ThemeService (root)
  ├── provideI18n()
  │     └── TranslateModule (fallback: en)
  │           └── httpTranslateLoaderFactory
  │                 ├── browser: HttpClient → assets/i18n/{lang}.json
  │                 └── server: fs.readFileSync → src/assets/i18n/{lang}.json
  ├── provideMarkdown()
  ├── provideHttpClient(withFetch())
  └── provideClientHydration(withEventReplay())
```

## Data Flow

### Translation Loading

```
Request /uk/build
  → languageGuard validates 'uk'
  → LanguageWrapperComponent sets lang
  → i18n provider loads translations:
      SSR: fs.readFileSync('src/assets/i18n/uk.json')
      Browser: http.get('assets/i18n/uk.json') → 404 fallback to en.json
  → TranslateService.use('uk')
  → Child component renders translated strings
```

### SEO Meta Tag Flow

```
Component.ngOnInit()
  → seoService.updateSeoFromConfig({ titleKey, descriptionKey, ... })
  → translate.instant('seo.page.title')
  → Fallback: direct translation store access (SSR only)
  → title.setTitle(result)
  → meta.updateTag(...) for OG, Twitter, description, keywords
  → JSON-LD script injected (browser only)
```

### Content Pipeline

```
ByByteLessons repo
  → GitHub Actions (update-content.yml)
  → clone & copy to src/assets/content/
  → scripts/generate-index.js → src/assets/content/index.json
  → scripts/validate-content.js
  → commit & push → triggers ci.yml → ng build → deploy
```

## Key Architectural Decisions

### Why standalone components only?

All components, pipes, and directives are standalone (no NgModules except for the TranslateModule root import). This keeps the dependency graph flat and improves tree-shaking.

### Why @ngx-translate instead of Angular i18n?

`@ngx-translate` allows runtime language switching without rebuilding. The site needs instant language toggle for users without a page reload. Angular i18n (`$localize`) would require separate builds per language.

### Why static prerendering instead of live SSR?

- GitHub Pages cannot run a Node.js server
- The content changes infrequently (triggered by lesson updates)
- Static HTML provides the fastest possible load time
- Prerendering gives full SEO benefits (meta tags, structured data in HTML)

### Why Karma+Jasmine instead of Jest?

The project was initialized before Jest became the Angular ecosystem standard. Migration is tracked as tech debt.

## Security Boundaries

| Concern | Mitigation |
|---|---|
| CSP | Not yet configured (tech debt) |
| XSS | Angular template sanitization; no `innerHTML` without `DomSanitizer` |
| Dependency CVEs | `npm audit` in CI; regular updates |
| GitHub token | GITHUB_TOKEN is auto-scoped; no write access to other repos |
| Form submission | No user data collected (static site, no backend) |
