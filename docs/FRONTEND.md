# Frontend Architecture

> **Purpose:** Document the component tree, shared UI library, routing map, and styling architecture.
> **Last updated:** 2025-07-20

## Component Tree

```
AppComponent
├── HeaderComponent
│   ├── SocialLinksComponent
│   └── LangSwitcherComponent
│
├── RouterOutlet (main content)
│   │
│   ├── HomePage
│   │   ├── HeroCarouselComponent
│   │   ├── AboutSectionComponent
│   │   ├── WhyImportantComponent
│   │   └── CtaSectionComponent
│   │
│   ├── BuildPage
│   ├── CommunityPage
│   ├── LessonsPage (lazy)
│   │   ├── LessonFilterComponent
│   │   └── LessonsListComponent
│   │       └── LessonCardComponent[]
│   ├── LessonDetailPage (lazy)
│   │   └── LessonViewComponent
│   ├── BlogComponent
│   ├── TermsComponent
│   ├── PrivacyComponent
│   └── NotFoundComponent
│
└── FooterComponent
```

## Shared Components

Located in `src/app/shared/`:

| Component | Path | Purpose |
|---|---|---|
| `ButtonComponent` | `shared/ui/button/` | 8 variants × 4 sizes + presets |
| `BenefitCardComponent` | `shared/benefit-card/` | Colorful cards for community benefits |
| `InfoCardComponent` | `shared/info-card/` | Universal info cards |
| `SocialLinksComponent` | `shared/social-links/` | Social media icon links |
| `ThemeToggleComponent` | `shared/theme-toggle/` | Light/dark toggle |
| `TextPageComponent` | `shared/text-page/` | Generic text layout (terms, privacy) |
| `VideoHeroComponent` | `shared/video-hero/` | Embedded video hero section |
| `DropdownButtonComponent` | `shared/ui/dropdown-button/` | Dropdown variant of button |
| `LangSwitcherComponent` | `modules/language/components/lang-switcher/` | Language selector |

## Routing Structure

See [`ARCHITECTURE.md`](ARCHITECTURE.md) for route definitions and [`design-docs/i18n-system.md`](design-docs/i18n-system.md) for language routing details.

## Styling Architecture

### Layer Stack

1. **Global reset** — `src/styles.scss` (normalize, box-sizing, global overrides)
2. **Theme variables** — CSS custom properties under `.theme-light` / `.theme-dark`
3. **Component styles** — Encapsulated SCSS per component (`styleUrls`)
4. **Utility classes** — Minimal, BEM-based

### Theme Variables

All themeable values use CSS custom properties defined in `src/app/app.scss`:

```scss
:root, .theme-light {
  --color-background: #ffffff;
  --color-surface: #f8fafc;
  --color-text: #1e293b;
  --color-primary: #2563eb;
  // ...
}

.theme-dark {
  --color-background: #0f172a;
  --color-surface: #1e293b;
  --color-text: #f1f5f9;
  --color-primary: #3b82f6;
  // ...
}
```

### Responsive Breakpoints

```scss
$bp-sm:  640px;
$bp-md:  768px;
$bp-lg:  1024px;
$bp-xl:  1280px;
```

### Image Handling

- Global `overflow-x: hidden` prevents horizontal scroll
- Images have safe max-width defaults
- Feature icons use CSS mask technique (not `<img>` or SVG inline) for theme-aware coloring

## Testing

- Framework: Karma + Jasmine
- Browser: FirefoxHeadless (default)
- Config: `karma.conf.cjs` (CJS due to `"type": "module"` in package.json)
- Spec files: co-located with components (`*.spec.ts`)
- Coverage: not yet configured

Commands:
```bash
npm test            # Watch mode
npm run test        # CI mode
```

## See Also

- [`references/design-system-llms.txt`](references/design-system-llms.txt) — CSS properties, buttons, icons
- [`references/angular-build-conventions-llms.txt`](references/angular-build-conventions-llms.txt) — Code patterns and conventions
