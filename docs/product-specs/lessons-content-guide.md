# Lessons Content Guide

> **Purpose:** Author-facing guide for writing and structuring lesson content in the ByByteLessons repository.
> **Last updated:** 2025-07-20

## Repository

Lessons are stored in: [ByByte-diy/ByByteLessons](https://github.com/ByByte-diy/ByByteLessons)

## Directory Organization

```
content/
├── en/                      # English
│   ├── arduino/
│   │   ├── beginner/
│   │   │   └── my-lesson.md
│   │   └── intermediate/
│   └── raspberry/
├── uk/                      # Ukrainian
└── ru/                      # Russian
```

**Path pattern:** `content/{lang}/{platform}/{level}/{slug}.md`

## Frontmatter Reference

Every lesson requires YAML frontmatter at the top of the file:

```yaml
---
title: "Blinking LED"
slug: "blink"
lang: "en"
platforms: ["arduino"]
level: "beginner"
tags: ["LED", "digital outputs", "basics"]
published: true
version: "1.0.0"
description: "Learn how to make an LED blink with Arduino — the classic first project."
duration: "30 min"
difficulty: "easy"
author: "ByByte Team"
createdAt: "2025-01-15"
updatedAt: "2025-03-01"
---
```

### Field Reference

| Field | Required | Description |
|---|---|---|
| `title` | ✅ | Lesson title, displayed as heading and in SEO |
| `slug` | ✅ | URL-friendly identifier. Must be unique per language+platform. |
| `lang` | ✅ | Language code: `en`, `uk`, or `ru` |
| `platforms` | ✅ | Array: `arduino`, `raspberry`, `esp8266`, `esp32` |
| `level` | ✅ | `beginner`, `intermediate`, or `advanced` |
| `published` | ✅ | `true` or `false`. Unpublished lessons are not shown. |
| `version` | ✅ | Semantic version (e.g. `1.0.0`, `1.1.0`) |
| `tags` | ❌ | Array of keywords for filtering and search |
| `description` | ❌ | Short summary (1-2 sentences). Used in cards and meta description. |
| `duration` | ❌ | Estimated completion time (e.g. "30 min", "1 hour") |
| `difficulty` | ❌ | `easy`, `medium`, or `hard` |
| `author` | ❌ | Author name or team |
| `createdAt` | ❌ | ISO date of creation |
| `updatedAt` | ❌ | ISO date of last update |

## Content Guidelines

### Writing Style

- **Clear and concise** — Assume the reader is a beginner with no prior knowledge
- **Step-by-step** — Break down complex tasks into numbered steps
- **Code-first** — Include complete, working code examples
- **Visual** — Use diagrams and schematics where helpful

### Structure Recommendations

```markdown
# Lesson Title

Brief introduction (what the reader will learn).

## Required Components

- Component 1
- Component 2

## Step 1: [Step Title]

Explanation and instructions.

```code
// Code example
```

## Step 2: [Step Title]

...

## How It Works

Explanation of the code logic.

## Experiments

- Try changing X
- What happens if Y?

## Summary

Recap of what was learned.
```

### Code Examples

- Use fenced code blocks with language identifier: ```` ```arduino ````
- Always include complete, runnable code
- Comment key lines
- Use consistent naming conventions

### Images

- Place images in `assets/images/` or `assets/diagrams/` in the ByByteLessons repo
- Reference with relative paths: `![Circuit diagram](../assets/diagrams/blink-circuit.png)`
- Prefer SVG for diagrams, PNG for photos

## Validation

Before pushing, validate your content:

```bash
npm run validate-content
```

Checks performed:

- All required frontmatter fields present
- Enum fields have valid values
- Slug uniqueness within language+platform
- Description minimum length

## See Also

- [`design-docs/content-architecture.md`](../design-docs/content-architecture.md) — Technical content model and data types
- `scripts/validate-content.js` — Validation script source
- `scripts/generate-index.js` — Index generation script source
