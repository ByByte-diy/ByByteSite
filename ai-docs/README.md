# AI Documentation - ByByte.DIY Site

This document provides comprehensive information for AI assistants working on this codebase.

## Project Overview

**ByByte.DIY** - Educational STEM robotics platform website built with Angular 20.

## Tech Stack

### Core
- **Framework:** Angular 20 (standalone components, signals API, functional providers)
- **Build:** `@angular/build` application builder
- **Routing:** Standalone `Routes` with lazy `loadComponent`
- **Styles:** SCSS with CSS custom properties

### Internationalization
- **Library:** `@ngx-translate/core` with HTTP loader
- **Languages:** `en` (default), `uk`, `ru`
- **Translation files:** JSON in `src/assets/i18n/{lang}.json`
- **SSR Support:** Custom loader factory for server-side translation loading
- **Language detection:** From URL prefix (`/en`, `/uk`, `/ru`), localStorage, or browser

### SEO & Prerendering
- **SEO Service:** `src/app/services/seo.service.ts` - centralized SEO management
- **Prerendering:** Full SSR support with language-specific routes
- **Meta tags:** Automatically translated based on current language
- **Routes generation:** `scripts/generate-prerender-routes.cjs` generates localized routes

### Styling
- **Theming:** CSS custom properties + `.theme-light`/`.theme-dark` classes
- **System preference:** Respects `prefers-color-scheme`
- **Theme service:** `ThemeService` toggles `documentElement` class
- **Icons:** CSS mask approach for theme-aware coloring

### Testing
- **Framework:** Karma + Jasmine
- **Headless browser:** Firefox (via `karma-firefox-launcher`)
- **Config:** `karma.conf.cjs`
- **Command:** `npm test`

### Linting & Code Quality
- **ESLint:** v9 (flat config `eslint.config.cjs`)
- **Hooks:** `simple-git-hooks` + `lint-staged`
- **Pre-commit:** ESLint --fix on staged TypeScript files

### Deployment
- **Target:** GitHub Pages
- **Tool:** `angular-cli-ghpages`
- **Assets:** Under `public/` directory

## Architecture Patterns

### Standalone Components
All components are standalone - no NgModules.

### Functional Providers
Using `provide*` functions instead of NgModules:
- `provideRouter()`
- `provideHttpClient()`
- `provideI18n()` - custom provider for i18n setup
- `provideCore()` - core application providers

### Signals API
Using Angular signals for reactive state management where appropriate.

### Service-Based Architecture
- `SeoService` - SEO and meta tags management
- `RouterService` - Language-aware routing
- `LessonsService` - Lessons data management
- `ThemeService` - Theme management

## Key Features

### Multi-language Support

**File Structure:**
```
src/assets/i18n/
  ├── en.json
  ├── uk.json
  └── ru.json
```

**Translation Keys Structure:**
```json
{
  "nav": { ... },
  "hero": { ... },
  "seo": {
    "home": {
      "title": "...",
      "description": "...",
      "keywords": "..."
    }
  }
}
```

**Language Detection:**
1. From URL path (`/en/`, `/uk/`, `/ru/`)
2. From localStorage (`app-lang`)
3. From browser language
4. Fallback to `en`

**Routing:**
- Routes with language prefix: `/:lang/*`
- Routes without prefix use default language
- `LanguageWrapperComponent` handles language detection from route params

### SEO Implementation

**Service:** `src/app/services/seo.service.ts`

**Usage:**
```typescript
this.seoService.updateSeoFromConfig({
  titleKey: 'seo.home.title',
  descriptionKey: 'seo.home.description',
  keywordsKey: 'seo.home.keywords',
  imageKey: 'seo.home.image',
  structuredDataKey: 'seo.home.structuredData',
  type: 'website'
});
```

**Features:**
- Automatic translation of meta tags
- SSR support with translation store fallback
- Open Graph tags
- Twitter Card tags
- Structured Data (JSON-LD)

### Prerendering

**Process:**
1. `generate-prerender-routes.cjs` generates localized routes
2. Angular prerenders each route
3. For each route:
   - Language detected from URL
   - Translations loaded via SSR loader
   - SEO meta tags set with translations
   - Static HTML generated

**Routes File:** `prerendered-routes.txt`

**Generated Structure:**
```
dist/ByByteSite/browser/
  ├── index.html (default language)
  ├── en/
  │   ├── index.html
  │   ├── build/
  │   └── learn/
  ├── uk/
  │   ├── index.html
  │   ├── build/
  │   └── learn/
  └── ru/
      ├── index.html
      ├── build/
      └── learn/
```

## File Structure

### Services
- `src/app/services/seo.service.ts` - SEO management
- `src/app/services/router.service.ts` - Language-aware routing
- `src/app/services/lessons.service.ts` - Lessons data

### Utilities
- `src/app/utils/lang.utils.ts` - Language utilities
  - `getLangFromPath(path)` - Extract language from URL
  - `isValidLanguage(lang)` - Validate language code

### Models
- `src/app/models/seo.model.ts` - SEO type definitions
  - `SeoMetaData` - Complete SEO metadata
  - `SeoPageConfig` - Page SEO configuration

### Components
- `src/app/components/language-wrapper/` - Language route wrapper
- `src/app/shared/lang-switcher/` - Language switcher UI
- `src/app/shared/social-links/` - Social media links
- `src/app/shared/ui/button/` - Button component system

### Providers
- `src/app/i18n/i18n.providers.ts` - i18n configuration
  - `httpTranslateLoaderFactory` - Custom loader for SSR
  - `provideI18n()` - Main i18n provider function

### Scripts
- `scripts/generate-prerender-routes.cjs` - Generates prerender routes with languages

## Conventions

### Translation Keys

**Naming:**
- Use dot notation: `section.subsection.key`
- SEO keys: `seo.{page}.{property}`

**Examples:**
- `nav.build`
- `hero.slide1.title`
- `seo.home.title`
- `seo.learn.description`

### Component SEO Setup

Always call SEO in `ngOnInit()`:

```typescript
export class MyPage implements OnInit {
  private readonly seoService = inject(SeoService);

  ngOnInit(): void {
    this.seoService.updateSeoFromConfig({
      titleKey: 'seo.myPage.title',
      descriptionKey: 'seo.myPage.description',
      keywordsKey: 'seo.myPage.keywords',
      type: 'website'
    });
  }
}
```

### Routing

Use `RouterService` for language-aware navigation:

```typescript
// Instead of:
this.router.navigate(['/build']);

// Use:
this.routerService.navigateTo('/build');
```

## Important Notes for AI

### Translation Loading

**During SSR/Prerendering:**
- Translations loaded synchronously from file system
- Language detected from `REQUEST` token
- Store access fallback if `instant()` fails

**During Browser:**
- Translations loaded via HTTP
- `instant()` works normally

### SEO Meta Tags

**Always:**
- Use translation keys (not hardcoded strings)
- Call `updateSeoFromConfig()` in `ngOnInit()`
- Provide all required keys in all language files

**Never:**
- Hardcode meta tag values
- Call SEO setup in constructor
- Skip translation keys

### Language Detection

**Priority:**
1. URL path prefix (`/en`, `/uk`, `/ru`)
2. localStorage (`app-lang`)
3. Browser language
4. Default (`en`)

**Utils:**
- `getLangFromPath(path)` - Extract from URL
- `isValidLanguage(lang)` - Validate language

### Adding New Pages

1. Add route to `app.routes.ts`
2. Add translations to all language files
3. Add SEO setup in component `ngOnInit()`
4. Regenerate prerender routes: `npm run generate-prerender-routes`

### Testing

**Unit Tests:**
- Karma + Jasmine
- Firefox headless
- `npm test`

**E2E/Integration:**
- Build with prerendering: `npm run build`
- Check generated HTML files for meta tags
- Verify translations in HTML

## Common Patterns

### Injecting Services

```typescript
export class MyComponent {
  private readonly seoService = inject(SeoService);
  private readonly routerService = inject(RouterService);
  private readonly translate = inject(TranslateService);
}
```

### Language-Aware Navigation

```typescript
// Navigate with current language
this.routerService.navigateTo('/build');

// Navigate with specific language
this.routerService.navigateTo('/build', 'uk');

// Switch language and navigate
this.routerService.switchLanguage('uk');
```

### Translation in Templates

```html
<h1>{{ 'hero.slide1.title' | translate }}</h1>
<p>{{ 'hero.slide1.description' | translate }}</p>
```

### Translation in Code

```typescript
const title = this.translate.instant('seo.home.title');
```

## Environment

**Files:**
- `src/environments/environment.ts` - Development
- `src/environments/environment.prod.ts` - Production

**Variables:**
- `supportedLangs: string[]` - Supported languages
- `defaultLang: string` - Default language
- `siteName: string` - Site name
- `siteUrl: string` - Site URL

## Dependencies

**Key Packages:**
- `@angular/core` - Angular framework
- `@angular/platform-browser` - Browser platform
- `@ngx-translate/core` - i18n
- `@angular/router` - Routing
- `@angular/platform-server` - SSR support

**Build:**
- `@angular/build` - Application builder
- `typescript` - TypeScript compiler

## Scripts

```bash
npm start              # Development server
npm run build          # Production build with prerendering
npm test               # Run tests
npm run generate-prerender-routes  # Generate prerender routes
```

## Recent Changes

- ✅ Implemented comprehensive SEO system with translations
- ✅ Multi-language prerendering support
- ✅ Language-aware routing with `RouterService`
- ✅ SSR translation loading
- ✅ Optimized SEO service (removed code duplication)
- ✅ Shared language utilities

## References

- [SEO Implementation Guide](../docs/SEO_IMPLEMENTATION.md)
- [SEO & Multilanguage Prerendering](../docs/SEO_MULTILANG_PRERENDER.md)
- [Setup Instructions](../docs/SETUP-INSTRUCTIONS.md)
