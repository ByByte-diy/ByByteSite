# ByByte Lessons Module

Модуль для відображення та управління уроками з робототехніки для проекту ByByte.

## Структура модуля

### Моделі даних
- `LessonMeta` - метадані уроку (frontmatter)
- `Lesson` - повний урок з контентом
- `LessonIndex` - індекс усіх уроків з метаданими

### Сервіси
- `LessonsService` - завантаження та фільтрація уроків

### Компоненти
- `LessonsListComponent` - відображення списку уроків
- `LessonFilterComponent` - фільтрація уроків
- `LessonCardComponent` - картка уроку в списку
- `LessonViewComponent` - відображення окремого уроку

### Сторінки
- `LessonsPageComponent` - сторінка зі списком уроків
- `LessonDetailPageComponent` - сторінка з окремим уроком

## Структура контенту

```
/content
  /uk
    /arduino
      /beginner
        blink.md
  /en
    /arduino
      /beginner
        blink.md
  /ru/...
  /assets
```

## Frontmatter уроків

```yaml
---
title: Назва уроку
slug: унікальний-ідентифікатор
lang: uk
platforms: 
  - arduino
level: beginner
tags: 
  - світлодіод
  - цифрові виходи
published: true
version: 1.0.0
description: Короткий опис уроку.
---
```

## JSON-індекс

Під час CI генерується `index.json` з метаданими всіх уроків, який використовується для швидкої фільтрації та пошуку.

## Фільтрація

Уроки можна фільтрувати за:
- Платформою (Arduino, Raspberry Pi, ESP8266, ESP32)
- Рівнем складності (початковий, середній, просунутий)
- Мовою (українська, англійська, російська)
- Тегами
- Пошуковим запитом

## Встановлення залежностей

```bash
npm install ngx-markdown marked --save
```

## Інтеграція в проект

1. Додати модуль уроків до маршрутизації:

```typescript
{ 
  path: 'learn',
  loadChildren: () => import('./modules/lessons/lessons.routes.js').then((m) => m.lessonsRoutes),
}
```

2. Налаштувати шлях до контенту в `environment.ts`:

```typescript
contentBasePath: '/assets/content'
```

3. Додати переклади для інтерфейсу уроків в `i18n` файли.

## CI/CD

Для автоматичного оновлення уроків з окремого репозиторію використовується GitHub Actions:

1. Клонування репозиторію з уроками
2. Копіювання уроків у папку `/content`
3. Генерація `index.json` з метаданими
4. Збірка проекту

## Додаткові можливості для розширення

- Пагінація для великої кількості уроків
- Пошук за вмістом уроків
- Коментарі та обговорення
- Система оцінювання уроків
- Відстеження прогресу користувача