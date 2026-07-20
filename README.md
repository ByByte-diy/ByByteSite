<div align="center">

# ByByte.DIY — STEM Robotics Platform

**Learn robotics and programming through hands-on lessons. In your language. For free.**

[![Deploy](https://img.shields.io/github/deployments/ByByte-diy/ByByteSite/github-pages?logo=github&label=deploy&color=%232563eb)](https://github.com/ByByte-diy/ByByteSite/deployments)
[![CI](https://img.shields.io/github/actions/workflow/status/ByByte-diy/ByByteSite/ci.yml?logo=github&label=CI&color=%232563eb)](https://github.com/ByByte-diy/ByByteSite/actions)
[![Angular](https://img.shields.io/badge/Angular-20-red?logo=angular&logoColor=white)](https://angular.dev)
[![License: GPL v3](https://img.shields.io/badge/License-GPL%20v3-blue.svg)](LICENSE)
[![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg)](https://github.com/ByByte-diy/.github/blob/main/CONTRIBUTING.md)
[![ByByte.DIY](https://img.shields.io/badge/live-bybyte.diy-10b981?logo=githubpages)](https://www.bybyte.diy)

</div>

---

ByByte.DIY is an **open-source educational platform** dedicated to making robotics and programming education accessible to everyone, regardless of language or background. The site provides a structured, project-based curriculum covering Arduino, ESP32, Raspberry Pi, and custom ByByte hardware — from blinking your first LED to building advanced robotic systems.

Built as a **fully static Angular 20 application** with multi-language prerendering, the site delivers instant-loading, SEO-optimized lesson content in English, Ukrainian, and Russian. Content is automatically synchronized from the [ByByteLessons](https://github.com/ByByte-diy/ByByteLessons) repository, keeping lessons fresh without touching the codebase.

## Quick Start

```bash
npm install
npm start              # Dev server at http://localhost:4200
npm test               # Karma + Jasmine (Firefox headless)
npm run build          # Production build with prerendering
```

## Documentation

The [`docs/`](docs/) directory contains structured documentation for AI agents and collaborators:

| File | Purpose |
|---|---|
| [`AGENTS.md`](docs/AGENTS.md) | Entry point for AI agents: tech stack, source map, patterns |
| [`ARCHITECTURE.md`](docs/ARCHITECTURE.md) | System architecture, module graph, data flow |
| [`FRONTEND.md`](docs/FRONTEND.md) | Component tree, shared UI, styling |
| [`PRODUCT_SENSE.md`](docs/PRODUCT_SENSE.md) | Domain knowledge (STEM education, hardware) |
| [`PLANS.md`](docs/PLANS.md) | Roadmap and feature backlog |
| [`QUALITY_SCORE.md`](docs/QUALITY_SCORE.md) | Test coverage, linting, CI health |
| [`RELIABILITY.md`](docs/RELIABILITY.md) | SSR guarantees, error handling, failure modes |
| [`SECURITY.md`](docs/SECURITY.md) | Security posture and known gaps |

### Subdirectories

- [**`design-docs/`**](docs/design-docs/) — Architecture decisions (SEO, i18n, content architecture)
- [**`exec-plans/`**](docs/exec-plans/) — Active work streams and tech debt tracker
- [**`generated/`**](docs/generated/) — Auto-generated schema references (lesson index, prerender routes)
- [**`product-specs/`**](docs/product-specs/) — Product requirements, onboarding, content guide
- [**`references/`**](docs/references/) — Dense llms.txt-style references (design system, workflows, conventions)

## Tech Stack

| Layer | Choice |
|---|---|
| Framework | Angular 20 (standalone, signals, functional providers) |
| Build | `@angular/build` application builder |
| i18n | `@ngx-translate/core` (en, uk, ru) |
| Styling | SCSS + CSS custom properties, light/dark themes |
| Testing | Karma + Jasmine (Firefox headless) |
| Linting | ESLint v9 (flat config), lint-staged |
| Deployment | GitHub Pages + GitHub Actions |

## Key Features

- **Multi-language** — English, Ukrainian, Russian; runtime language switching with per-language prerendered SEO
- **Prerendered SEO** — Every page has language-specific meta tags, Open Graph, Twitter Cards, and JSON-LD structured data
- **Lesson catalog** — Filter lessons by platform (Arduino, ESP32, Raspberry Pi), difficulty level (beginner → advanced), language, and tags; search by keyword
- **Content pipeline** — Auto-sync from the [ByByteLessons](https://github.com/ByByte-diy/ByByteLessons) content repository via GitHub Actions
- **Theming** — Light, dark, and system-preference themes with CSS custom properties and zero-JS SSR compatibility
- **Static-first** — Fully prerendered at build time, zero server dependencies, instant global load via GitHub Pages CDN
- **Button system** — 8 visual variants × 4 sizes with preset configurations for common use cases
- **Accessible** — Semantic HTML, keyboard navigation, focus management, theme-aware contrast

## Contributing

Contributions are welcome! Whether it's lesson content, code improvements, translations, or documentation:

- Read the [Contributing Guide](https://github.com/ByByte-diy/.github/blob/main/CONTRIBUTING.md)
- Check the [open issues](https://github.com/ByByte-diy/ByByteSite/issues)
- Review the [Roadmap](docs/PLANS.md)

For AI agents working on this codebase, start at [`docs/AGENTS.md`](docs/AGENTS.md).

---

<div align="center">

**ByByte.DIY** — [bybyte.diy](https://www.bybyte.diy) · [GitHub](https://github.com/ByByte-diy/ByByteSite) · [Community](https://discord.gg/NcfTybwYWq)

Copyright © 2025 ByByte.DIY · Built with ❤️ for STEM education

</div>
