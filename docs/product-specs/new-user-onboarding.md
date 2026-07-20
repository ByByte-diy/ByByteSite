# New User Onboarding

> **Purpose:** Describe the user journey from first visit to completing a lesson.
> **Last updated:** 2025-07-20

## Entry Points

| Source | Landing Page | Notes |
|---|---|---|
| Google/organic search | `/en/learn/arduino/beginner/blink` | Deep-linked to specific lesson |
| Social media link | `/en` | Home page |
| ByByte kit QR code | `/en/build` | Assembly guide |
| Direct URL | `/en/learn` | Lesson catalog |

## First Visit Flow

```
Landing (Home)
  │
  ├── Language detection (auto: URL / browser / saved)
  │
  ├── Hero carousel → Learn more → /{lang}/learn
  │
  ├── Hero carousel → Build a robot → /{lang}/build
  │
  ├── Community CTA → /{lang}/community
  │
  └── Theme toggle (light/dark system preference respected)
```

## Lesson Discovery Flow

```
Lesson Catalog (/learn)
  │
  ├── Filter by platform (Arduino / Raspberry Pi / ESP32 / ESP8266)
  ├── Filter by level (Beginner / Intermediate / Advanced)
  ├── Filter by language
  ├── Search by keyword
  │
  └── Click lesson card
        │
        ▼
      Lesson Detail Page
        ├── Title, description, metadata
        ├── Markdown content with code blocks
        ├── Schematics and diagrams
        └── Related lessons
```

## Language Switching

Users can switch language at any time via the language toggle in the header:

1. Click language icon/selector
2. Select language (en / uk / ru)
3. Page reloads in selected language, preserving current route
4. Preference saved to localStorage for future visits

## Theme Preference

- Default: respects system `prefers-color-scheme`
- Manual toggle: light ↔ dark
- Preference persisted in localStorage

## See Also

- [`product-specs/lessons-content-guide.md`](lessons-content-guide.md) — How lesson content is structured
- [`design-docs/i18n-system.md`](../design-docs/i18n-system.md) — Language detection technical details
