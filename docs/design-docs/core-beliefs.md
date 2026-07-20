# Core Beliefs

> **Purpose:** Articulate the project's philosophy and design principles so contributors make aligned decisions.
> **Last updated:** 2025-07-20

## Mission

Make **robotics and programming education accessible** to everyone, regardless of language or economic background.

## Principles

### 1. Language Should Never Be a Barrier

Every lesson is available in English, Ukrainian, and Russian. Adding a new language should take minimal effort. Translation keys are centralized, and the i18n system is decoupled from business logic.

### 2. Static by Default

The site serves static HTML. No server-side rendering at runtime, no database, no user accounts. This keeps the site fast, secure, and zero-maintenance. Dynamic features must justify their complexity.

### 3. Content Over Code

The lessons are the product. The Angular app is just a delivery mechanism. The content repository (`ByByteLessons`) is independent of the site codebase. Lesson authors should never need to touch TypeScript.

### 4. Offline-First Content Pipeline

Content updates are pull-based (GitHub Actions fetches from ByByteLessons). The site rebuilds when content changes. This avoids tight coupling between content authors and site deployment.

### 5. AI-Friendly Codebase

The codebase is structured for AI comprehension:
- Flat directory trees where practical
- Explicit typing (no `any` unless unavoidable)
- Services with narrow responsibilities
- Self-contained standalone components
- This documentation

### 6. Progressive Enhancement

The site works without JavaScript (static HTML with meta tags for SEO). JavaScript enhances the experience (language switching, theme toggle, lesson filtering). Core content is always accessible.

### 7. Theming Is a Feature, Not an Afterthought

Light and dark themes are first-class. CSS custom properties make theming systematic. System preference is respected by default, with manual override.

## Non-Goals

- User authentication or accounts
- Comments, ratings, or social features
- Real-time collaboration
- E-commerce or payments
- Native mobile apps
