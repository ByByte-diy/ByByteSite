# i18n System Design

> **Purpose:** Document the multi-language routing, translation loading strategy, and language detection pipeline.
> **Last updated:** 2025-07-20

## Supported Languages

| Code | Language | Status |
|---|---|---|
| `en` | English | Default, always available |
| `uk` | Ukrainian | Full |
| `ru` | Russian | Full |

## Translation Files

Location: `src/assets/i18n/{lang}.json`

Key structure uses dot-notation grouped by feature area:

```json
{
  "nav": {
    "home": "Home",
    "build": "Build",
    "learn": "Learn"
  },
  "seo": {
    "home": {
      "title": "ByByte.DIY — STEM Robotics Platform",
      "description": "Learn robotics...",
      "keywords": "robotics, programming..."
    }
  }
}
```

## Translation Loading Strategy

### Browser Path

```
http.get('assets/i18n/{lang}.json')
  → 404? → http.get('assets/i18n/en.json')  (fallback)
  → TranslateService.use(lang)
```

### SSR/Prerender Path

```
fs.readFileSync('src/assets/i18n/{lang}.json')
  → language detected from REQUEST token in injector
  → translations loaded into TranslateService store synchronously
  → components render with translations immediately available
```

The custom loader (`src/modules/language/providers/i18n.providers.ts`) implements both paths via `isPlatformBrowser()` branching.

## Language Detection Pipeline

Priority order (first match wins):

1. **URL prefix** — `/en/...`, `/uk/...`, `/ru/...`
2. **localStorage** — `app-lang` key (set by `RouterService.switchLanguage()`)
3. **Browser language** — `navigator.language.split('-')[0]`
4. **Default** — `en`

## Routing Architecture

```
app.routes.ts
  ├── path: '' (no prefix)
  │     └── canMatch: defaultLanguageRedirectGuard
  │     └── RootPageComponent → redirect to /{defaultLang}
  │
  └── path: ':lang'
        └── canActivate: languageGuard  (validates against supportedLangs)
        └── component: LanguageWrapperComponent
              └── children: sharedRoutes
```

### Route Guards

- **`languageGuard`**: Validates the `:lang` route param is in `supportedLangs`. If invalid, redirects to default language.
- **`defaultLanguageRedirectGuard`**: On `/` (no lang prefix), checks if this is the default language route and redirects to `/{defaultLang}` for prerendering.

### RouterService

The `RouterService` (src/modules/language/services/router.service.ts) wraps Angular Router for language-aware navigation:

```typescript
navigateTo('/build')              → navigates to /{currentLang}/build
switchLanguage('uk')              → saves preference, navigates to /uk/{currentPath}
getLocalizedRoute('/build', 'uk') → returns 'uk/build'
```

## Prerendering

The script `scripts/generate-prerender-routes.cjs` generates a route list that includes language prefixes:

```
/
/en
/en/build
/en/learn
/uk
/uk/build
/uk/learn
...
```

The Angular build then prerenders **each route** with its language context, producing separate HTML files per language per route.

## Adding a New Language

1. Add language code to `environment.supportedLangs`
2. Create `src/assets/i18n/{lang}.json` with all required translation keys
3. Update `scripts/generate-prerender-routes.cjs` (currently hardcodes supportedLangs)
4. Regenerate prerender routes and rebuild

## See Also

- [`seo-system.md`](seo-system.md) — How translations feed into SEO meta tags during SSR
- [`content-architecture.md`](content-architecture.md) — How lesson content organizes by language
- `src/modules/language/` — All i18n source code
