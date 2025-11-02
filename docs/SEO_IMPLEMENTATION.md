# SEO Implementation Guide

## Overview

The project implements a comprehensive SEO system with multi-language support for prerendering. All meta tags are automatically translated based on the current language.

## Architecture

### Core Components

1. **SeoService** (`src/app/services/seo.service.ts`)
   - Central service for managing SEO meta tags
   - Supports translations via `@ngx-translate`
   - Works in both browser and SSR environments

2. **SEO Models** (`src/app/models/seo.model.ts`)
   - Type definitions for SEO metadata
   - `SeoMetaData` - complete meta information
   - `SeoPageConfig` - configuration for page-specific SEO

3. **Language Utils** (`src/app/utils/lang.utils.ts`)
   - Utilities for language extraction from URLs
   - Language validation

## Usage

### Basic Setup

```typescript
import { SeoService } from '../../services/seo.service';

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

### Advanced Setup with Image and Structured Data

```typescript
ngOnInit(): void {
  this.seoService.updateSeoFromConfig({
    titleKey: 'seo.home.title',
    descriptionKey: 'seo.home.description',
    keywordsKey: 'seo.home.keywords',
    imageKey: 'seo.home.image',
    structuredDataKey: 'seo.home.structuredData',
    type: 'website'
  }, {
    // Additional data for string interpolation
    siteName: 'ByByte.DIY'
  });
}
```

### Lesson Pages SEO

```typescript
// For lesson detail pages
private _updateSEOTags(lesson: Lesson): void {
  const platforms = lesson.platforms || [];
  const primaryPlatform = platforms[0] || 'arduino';
  
  this._seoService.updateLessonSeo(
    lesson,
    primaryPlatform,
    lesson.level,
    lesson.slug
  );
}
```

## Translation Structure

All SEO translations must be placed in `src/assets/i18n/{lang}.json`:

```json
{
  "seo": {
    "home": {
      "title": "Page Title",
      "description": "Page description for SEO",
      "keywords": "keyword1, keyword2, keyword3",
      "image": "/assets/img/og-image.png",
      "structuredData": {
        "@context": "https://schema.org",
        "@type": "Organization",
        "name": "ByByte.DIY",
        "url": "https://bybyte-diy.github.io"
      }
    },
    "learn": {
      "title": "Learn Robotics - ByByte Educational Platform",
      "description": "Master robotics and programming...",
      "keywords": "learn robotics, programming education..."
    }
  }
}
```

## Supported Meta Tags

### Standard Meta Tags
- `title` - Page title
- `description` - Meta description
- `keywords` - Meta keywords (optional)

### Open Graph Tags
- `og:title` - Open Graph title
- `og:description` - Open Graph description
- `og:image` - Open Graph image
- `og:url` - Open Graph URL
- `og:type` - Open Graph type (website/article/etc)
- `og:site_name` - Site name
- `og:locale` - Language locale

### Twitter Card Tags
- `twitter:card` - Card type (summary_large_image)
- `twitter:site` - Twitter handle
- `twitter:creator` - Creator handle
- `twitter:title` - Twitter title
- `twitter:description` - Twitter description
- `twitter:image` - Twitter image

### Structured Data (JSON-LD)
Automatically added to `<head>` in browser only (not during SSR for performance).

## How It Works

### Translation Loading

1. **Browser:**
   - Uses `translate.instant()` for synchronous translation
   - Falls back to default values if translation not found

2. **SSR/Prerendering:**
   - Loader factory loads translations synchronously from file system
   - Language detected from URL via `REQUEST` token
   - If `instant()` fails, directly accesses translation store
   - Fallback to English if translation file missing

### Meta Tag Updates

1. Component calls `updateSeoFromConfig()` in `ngOnInit()`
2. Service gets current language from URL
3. Translations retrieved using key paths
4. Meta tags updated via Angular `Meta` service
5. Tags appear in prerendered HTML

## Best Practices

### 1. Always Use Translation Keys

✅ **Good:**
```typescript
this.seoService.updateSeoFromConfig({
  titleKey: 'seo.home.title',
  descriptionKey: 'seo.home.description'
});
```

❌ **Bad:**
```typescript
this.seoService.updateSeoMeta({
  title: 'Home Page',
  description: 'Welcome to our site'
});
```

### 2. Provide All Required Keys

Ensure all translation keys exist in all language files:
- `title` (required)
- `description` (required)
- `keywords` (optional but recommended)
- `image` (optional)
- `structuredData` (optional)

### 3. Use Appropriate Types

```typescript
// For regular pages
type: 'website'

// For articles/blog posts
type: 'article'

// For product pages
type: 'product'
```

### 4. Optimize Images

- Use absolute URLs for Open Graph images
- Recommended size: 1200x630px
- Format: PNG or JPG

## Adding SEO to New Pages

1. **Add translations** to all language files (`en.json`, `uk.json`, `ru.json`):

```json
{
  "seo": {
    "myNewPage": {
      "title": "My New Page Title",
      "description": "Description of my new page",
      "keywords": "relevant, keywords"
    }
  }
}
```

2. **Inject SeoService** in your component:

```typescript
export class MyNewPage implements OnInit {
  private readonly seoService = inject(SeoService);

  ngOnInit(): void {
    this.seoService.updateSeoFromConfig({
      titleKey: 'seo.myNewPage.title',
      descriptionKey: 'seo.myNewPage.description',
      keywordsKey: 'seo.myNewPage.keywords',
      type: 'website'
    });
  }
}
```

3. **Regenerate prerender routes** if needed:

```bash
npm run generate-prerender-routes
```

## Testing

### Local Development

1. Run dev server:
```bash
npm start
```

2. Navigate to page and inspect `<head>`:
```html
<title>Page Title</title>
<meta name="description" content="Page description">
<meta property="og:title" content="Page Title">
```

### Prerendering

1. Build with prerendering:
```bash
npm run build
```

2. Check generated HTML files:
```bash
cat dist/ByByteSite/browser/uk/learn/index.html | grep -A 5 "<head>"
```

3. Verify:
- All meta tags present
- Translations correct for language
- Open Graph tags populated
- Structured data included (if configured)

## Troubleshooting

### Meta tags missing in HTML

**Symptoms:** No meta tags in prerendered HTML

**Solutions:**
1. Ensure `updateSeoFromConfig()` called in `ngOnInit()`
2. Check translations exist for all languages
3. Verify language detection works during SSR
4. Check browser console for errors

### Wrong language in meta tags

**Symptoms:** Meta tags show wrong language

**Solutions:**
1. Verify `getCurrentLanguage()` returns correct language
2. Check URL has language prefix
3. Verify translation keys exist in language file
4. Check `getTranslationFromStore()` works during SSR

### Translation keys not found

**Symptoms:** Keys appear instead of translations

**Solutions:**
1. Verify keys exist in all language files
2. Check key paths match exactly (case-sensitive)
3. Verify `translate.instant()` works
4. Check SSR fallback to store works

## API Reference

### SeoService Methods

#### `updateSeoFromConfig(config, additionalData?)`

Updates SEO meta tags using translation keys.

**Parameters:**
- `config: SeoPageConfig` - SEO configuration
- `additionalData?: any` - Data for string interpolation (e.g., `{{variable}}`)

**Config options:**
```typescript
{
  titleKey?: string;           // Translation key for title
  descriptionKey?: string;      // Translation key for description
  keywordsKey?: string;         // Translation key for keywords
  imageKey?: string;            // Translation key for image URL
  structuredDataKey?: string;   // Translation key for structured data
  type?: string;                // Open Graph type (default: 'website')
}
```

#### `updateSeoMeta(metaData)`

Updates SEO meta tags directly (without translations).

**Use case:** When you need dynamic SEO data not from translations.

#### `updateLessonSeo(lesson, platform, level, slug)`

Updates SEO for lesson detail pages.

**Parameters:**
- `lesson: Lesson` - Lesson object
- `platform: string` - Platform name
- `level: string` - Difficulty level
- `slug: string` - Lesson slug

## See Also

- [SEO & Multilanguage Prerendering](./SEO_MULTILANG_PRERENDER.md) - Complete guide on multilanguage SEO
- [Router Service](../src/app/services/router.service.ts) - Language-aware routing
- [Language Utils](../src/app/utils/lang.utils.ts) - Language utilities

