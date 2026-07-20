# SEO та Багатомовний Пререндеринг: Реалізація

## Огляд

Проект використовує **гібридний підхід** для багатомовного SEO з підтримкою пререндерингу:
- `@ngx-translate` для runtime перекладів
- Спеціальний SSR loader для правильних перекладів під час пререндерингу
- Окремі prerender routes для кожної мови
- SEO метатеги з правильними перекладами на сервері

## Архітектура

### 1. Мовна підтримка

**Підтримувані мови:**
- `en` (за замовчуванням)
- `uk` 
- `ru`

**Файли перекладів:** `src/assets/i18n/{lang}.json`

**Визначення мови:**
- З URL (префікс `/en`, `/uk`, `/ru`)
- З localStorage (`app-lang`)
- З браузерної мови
- Fallback до `en`

### 2. Роутинг

**Структура роутів:**
```
/                    → default language (en)
/:lang               → specific language (en, uk, ru)
/:lang/build         → build page with language
/:lang/learn         → lessons page with language
...
```

**Компоненти:**
- `LanguageWrapperComponent` - обгортка для роутів з мовним префіксом
- `RouterService` - централізований сервіс для генерації локалізованих роутів

### 3. SEO Service

**Основний сервіс:** `src/app/services/seo.service.ts`

**Методи:**
- `updateSeoFromConfig(config)` - оновлює SEO метатеги з перекладами
- `updateSeoMeta(metaData)` - оновлює метатеги напряму
- `updateLessonSeo(lesson, platform, level, slug)` - SEO для сторінок уроків

**Підтримувані метатеги:**
- Title, Description, Keywords
- Open Graph (og:title, og:description, og:image, og:url, og:type, og:locale)
- Twitter Card
- Structured Data (JSON-LD)

### 4. Завантаження перекладів під час SSR

**Loader Factory:** `src/app/i18n/i18n.providers.ts`

**Як працює:**
1. Під час SSR визначає мову з URL через `REQUEST` token
2. Завантажує переклади синхронно з файлової системи
3. Встановлює мову через `translate.use()` перед ініціалізацією компонентів

**Fallback механізм:**
- Якщо `translate.instant()` не знаходить переклад, використовується прямий доступ до store
- Метод `getTranslationFromStore()` отримує переклади зі store під час SSR

## Використання

### Налаштування SEO на сторінці

```typescript
// src/app/pages/home/home.ts
export class Home implements OnInit {
  private readonly seoService = inject(SeoService);

  ngOnInit(): void {
    this.seoService.updateSeoFromConfig({
      titleKey: 'seo.home.title',
      descriptionKey: 'seo.home.description',
      keywordsKey: 'seo.home.keywords',
      imageKey: 'seo.home.image',
      structuredDataKey: 'seo.home.structuredData',
      type: 'website'
    });
  }
}
```

### Структура перекладів для SEO

```json
{
  "seo": {
    "home": {
      "title": "ByByte.DIY - STEM Robotics Platform",
      "description": "Learn robotics...",
      "keywords": "robotics, programming...",
      "image": "/assets/img/logo.png",
      "structuredData": {
        "@context": "https://schema.org",
        "@type": "Organization",
        "name": "ByByte.DIY"
      }
    }
  }
}
```

### Генерація prerender routes

**Скрипт:** `scripts/generate-prerender-routes.cjs`

```bash
npm run generate-prerender-routes
```

Генерує файл `prerendered-routes.txt` з локалізованими роутами:
```
/
/en
/uk
/ru
/en/build
/uk/build
...
```

## Пререндеринг

### Процес

1. Запускається `npm run build`
2. Виконується `generate-prerender-routes.cjs`
3. Angular робить пререндеринг для кожного роуту з `prerendered-routes.txt`
4. Для кожного роуту:
   - Визначається мова з URL
   - Завантажуються переклади через SSR loader
   - Компоненти ініціалізуються з правильною мовою
   - SEO метатеги встановлюються з перекладами
   - Генерується статичний HTML

### Результат

Кожен локалізований роут має свій HTML файл з правильними:
- Метатегами (title, description, keywords)
- Open Graph тегами
- Twitter Card тегами
- Structured Data (якщо налаштовано)
- Контентом відповідної мови

## Утиліти

### `lang.utils.ts`

**Функції:**
- `getLangFromPath(path)` - витягує мову з URL
- `isValidLanguage(lang)` - перевіряє чи мова підтримується

### `RouterService`

**Методи:**
- `getLocalizedRoute(path, lang?)` - генерує локалізований роут
- `navigateTo(path, lang?)` - навігація з мовним префіксом
- `switchLanguage(lang)` - зміна мови з навігацією
- `getCurrentLang()` - поточна мова

## Налаштування нової сторінки

1. Додайте переклади SEO в `src/assets/i18n/{lang}.json`:
```json
{
  "seo": {
    "newPage": {
      "title": "Page Title",
      "description": "Page description",
      "keywords": "keyword1, keyword2"
    }
  }
}
```

2. Використайте `SeoService` в компоненті:
```typescript
ngOnInit(): void {
  this.seoService.updateSeoFromConfig({
    titleKey: 'seo.newPage.title',
    descriptionKey: 'seo.newPage.description',
    keywordsKey: 'seo.newPage.keywords',
    type: 'website'
  });
}
```

3. Додайте роут в `app.routes.ts` (якщо потрібно)

4. Перегенеруйте prerender routes:
```bash
npm run generate-prerender-routes
```

## Перевірка

### Локальна перевірка

1. Побудуйте проект:
```bash
npm run build
```

2. Перевірте згенеровані HTML файли:
```bash
ls -la dist/ByByteSite/browser/{lang}/
```

3. Відкрийте HTML і перевірте:
- `<title>` містить перекладений title
- `<meta name="description">` містить перекладений опис
- `<meta property="og:title">` містить перекладений title
- Контент сторінки відповідає мові

### Перевірка під час розробки

```bash
npm run serve:ssr
```

Перевіряйте URL з різними мовними префіксами.

## Troubleshooting

### Метатеги не з'являються в HTML

**Причина:** Переклади не встигають завантажитись під час пререндерингу.

**Рішення:**
1. Перевірте, чи мова визначається правильно з URL
2. Перевірте, чи файли перекладів існують і містять ключі SEO
3. Перевірте, чи `SeoService.updateSeoFromConfig()` викликається в `ngOnInit()`

### Неправильна мова в метатегах

**Причина:** Мова не визначається правильно з URL під час SSR.

**Рішення:**
1. Перевірте `getLangFromPath()` в `lang.utils.ts`
2. Перевірте `getCurrentLanguage()` в `SeoService`
3. Перевірте логіку в `i18n.providers.ts`

### Помилки з перекладами

**Причина:** Ключі перекладів відсутні в JSON файлах.

**Рішення:**
1. Перевірте, чи всі ключі SEO присутні в усіх мовних файлах
2. Використовуйте fallback значення в `getTranslationValue()`

## Майбутні покращення

- [ ] Додати автоматичну валідацію перекладів SEO під час збірки
- [ ] Оптимізувати розмір bundle (lazy loading перекладів)
- [ ] Додати підтримку hreflang тегів
- [ ] Додати інструменти для автоматичного генерування SEO перекладів
