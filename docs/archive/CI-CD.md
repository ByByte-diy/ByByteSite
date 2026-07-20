# CI/CD Documentation

Цей документ описує налаштування CI/CD для проекту ByByteSite.

## Огляд

Проект використовує GitHub Actions для автоматизації:
- Підвантаження уроків з репозиторію [ByByteLessons](https://github.com/ByByte-diy/ByByteLessons)
- Валідації контенту
- Збірки та тестування
- Деплою на GitHub Pages
- Preview для Pull Requests

## Workflows

### 1. CI/CD Pipeline (`.github/workflows/ci.yml`)

**Тригери:**
- Push до `main` або `develop`
- Pull Request до `main`
- Manual trigger

**Jobs:**
1. **content-validation** - Підвантажує та валідує контент
2. **build-and-test** - Збирає та тестує додаток
3. **deploy** - Деплоїть на GitHub Pages (тільки для `main`)
4. **preview-deploy** - Створює preview для PR

### 2. Update Content (`.github/workflows/update-content.yml`)

**Тригери:**
- Manual trigger (workflow_dispatch)
- Опція force_update для примусового оновлення

**Функції:**
- Перевіряє оновлення в репозиторії ByByteLessons
- Підвантажує новий контент
- Генерує індекс уроків
- Валідує контент
- Автоматично комітить зміни
- Тригерить CI/CD

### 3. Content Updated (`.github/workflows/content-updated.yml`)

**Тригери:**
- Repository dispatch від update-content workflow

**Функції:**
- Збирає та тестує додаток
- Деплоїть на GitHub Pages

### 4. Preview Deploy (`.github/workflows/preview.yml`)

**Тригери:**
- Pull Request events

**Функції:**
- Створює preview для кожного PR
- Коментує PR з посиланням на preview

## Скрипти

### `scripts/generate-index.js`
Генерує індекс уроків з метаданими:
- Парсить frontmatter з Markdown файлів
- Створює JSON індекс з уроками, платформами, рівнями, тегами
- Зберігає в `src/assets/content/index.json`

### `scripts/validate-content.js`
Валідує структуру контенту:
- Перевіряє обов'язкові поля в frontmatter
- Валідує формати даних
- Перевіряє унікальність slug
- Генерує звіт про помилки та попередження

## Налаштування

### Environment Variables

```yaml
NODE_VERSION: '22'
CONTENT_REPO: 'ByByte-diy/ByByteLessons'
CONTENT_BRANCH: 'main'
```

### Secrets

- `GITHUB_TOKEN` - Автоматично надається GitHub Actions

### GitHub Pages

- **Source:** GitHub Actions
- **Branch:** gh-pages (автоматично створюється)
- **Custom Domain:** bybyte.diy

## Структура контенту

Очікувана структура в репозиторії ByByteLessons:

```
content/
├── en/
│   ├── arduino/
│   │   ├── beginner/
│   │   │   └── lesson-name.md
│   │   └── intermediate/
│   └── raspberry/
├── uk/
│   └── arduino/
└── ru/
    └── arduino/
```

## Frontmatter Requirements

Кожен урок повинен мати frontmatter з обов'язковими полями:

```yaml
---
title: "Назва уроку"
slug: "lesson-slug"
lang: "uk"
platforms: ["arduino"]
level: "beginner"
tags: ["tag1", "tag2"]
published: true
version: "1.0.0"
description: "Опис уроку"
---
```

### Обов'язкові поля:
- `title` - Назва уроку
- `slug` - Унікальний ідентифікатор
- `lang` - Мова (en, uk, ru)
- `platforms` - Масив платформ
- `level` - Рівень складності (beginner, intermediate, advanced)

### Опціональні поля:
- `tags` - Масив тегів
- `published` - Чи опубліковано (true/false)
- `version` - Версія уроку
- `description` - Опис уроку
- `duration` - Тривалість
- `difficulty` - Складність

## Валідація

Система валідації перевіряє:

1. **Структуру файлів** - правильна організація директорій
2. **Frontmatter** - наявність та формат обов'язкових полів
3. **Унікальність** - унікальні slug в межах мови та платформи
4. **Формати даних** - правильні значення для enum полів
5. **Контент** - мінімальна довжина описів

## Деплой процес

1. **Оновлення контенту за вимогою** - через GitHub Actions
2. **Валідація контенту** - перевірка структури та frontmatter
3. **Збірка** - `npm run build`
4. **Тестування** - `npm run test`
5. **Деплой** - на GitHub Pages
6. **Повідомлення** - про успішний деплой

## Preview для PR

Кожен Pull Request автоматично отримує:
- Preview URL: `https://bybyte.diy/preview/pr-{number}/`
- Автоматичне оновлення при нових комітах
- Коментар з посиланням на preview

## Моніторинг

- **GitHub Actions** - статус всіх workflow
- **GitHub Pages** - статус деплою
- **Issues** - автоматичні створення при помилках

## Troubleshooting

### Помилки валідації
1. Перевірте frontmatter в уроках
2. Переконайтеся, що всі обов'язкові поля присутні
3. Перевірте формати даних

### Помилки деплою
1. Перевірте GitHub Pages налаштування
2. Переконайтеся, що CNAME файл правильний
3. Перевірте права доступу до репозиторію

### Проблеми з контентом
1. Перевірте доступність репозиторію ByByteLessons
2. Переконайтеся, що структура контенту правильна
3. Перевірте права доступу до репозиторію контенту
