# SEO System Design

> **Purpose:** Document how SEO meta tags are managed across languages in a prerendered Angular app.
> **Last updated:** 2025-07-20

## Problem

A static prerendered Angular site needs per-language meta tags (title, description, OG tags, structured data) in the generated HTML. Angular's `Meta` service normally runs in the browser — we need it to execute during prerendering with the correct translations.

## Solution Architecture

```
                   ┌─────────────────────────┐
                   │  SeoService             │
                   │  ────────────           │
                   │  updateSeoFromConfig()  │
                   │  updateLessonSeo()      │
                   │  updateSeoMeta()        │
                   └──────┬──────────────────┘
                          │ uses
              ┌───────────┼───────────┐
              ▼           ▼           ▼
         ┌────────┐ ┌──────────┐ ┌─────────┐
         │ Meta   │ │ Title    │ │JSON-LD  │
         │Service │ │ Service  │ │ (browser│
         └────────┘ └──────────┘ │  only)  │
                                 └─────────┘
              │           │
              ▼           ▼
         ┌─────────────────────────────┐
         │  TranslateService           │
         │  instant() / store fallback │
         └─────────────────────────────┘
```

## Key Mechanisms

### 1. Translation Key Pattern

All SEO values use translation keys, never hardcoded strings:

```typescript
this.seoService.updateSeoFromConfig({
  titleKey: 'seo.home.title',
  descriptionKey: 'seo.home.description',
  keywordsKey: 'seo.home.keywords',
  type: 'website',
});
```

### 2. SSR Translation Fallback

During prerendering, `TranslateService.instant()` may fail because translations load asynchronously. `SeoService` has a direct store access fallback:

```typescript
// If instant() returns the key itself (meaning no translation loaded):
const storeValue = this.getTranslationFromStore(key, currentLang);
if (storeValue !== null) {
  translation = storeValue;
}
```

This accesses `TranslateService.store.translations[lang]` directly, which is populated synchronously by the custom SSR loader.

### 3. Language Detection During SSR

`SeoService.getCurrentLanguage()` tries to extract the language from the request URL:

1. In SSR: reads `REQUEST` token from injector, extracts lang from path
2. In browser: reads `window.location.pathname`
3. Fallback: `TranslateService.getCurrentLang()` or `environment.defaultLang`

### 4. Lesson-Specific SEO

`updateLessonSeo()` generates dynamic SEO for lesson pages using lesson metadata directly (title, platforms, level, tags) rather than translation keys, since lessons are content from a separate repository.

### 5. Structured Data (JSON-LD)

JSON-LD structured data is **only injected in the browser** (not during prerendering), because the structured data needs to be dynamically rendered. However, the prerendered HTML still contains OG tags and meta descriptions.

## Meta Tag Inventory

| Tag | Source | SSR |
|---|---|---|
| `<title>` | `Title.setTitle()` | ✅ |
| `meta[name=description]` | `Meta.updateTag()` | ✅ |
| `meta[name=keywords]` | `Meta.updateTag()` | ✅ |
| `meta[property=og:*]` | `Meta.updateTag()` | ✅ |
| `meta[name=twitter:*]` | `Meta.updateTag()` | ✅ |
| `script[type=application/ld+json]` | DOM injection | ❌ (browser only) |

## Usage Requirements

Every page component **must** call `updateSeoFromConfig()` in `ngOnInit()`. The required translation keys must exist in **all three language files** (`en.json`, `uk.json`, `ru.json`).

## See Also

- [`i18n-system.md`](i18n-system.md) — Translation loading mechanism
- [`AGENTS.md`](../AGENTS.md) — Agent instructions for adding SEO to new pages
