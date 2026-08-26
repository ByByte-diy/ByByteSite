# ByByteLessons Repository Setup

Цей документ описує налаштування репозиторію [ByByteLessons](https://github.com/ByByte-diy/ByByteLessons) для автоматичного підвантаження контенту.

## Структура репозиторію

### Очікувана структура
```
ByByteLessons/
├── content/
│   ├── en/
│   │   ├── arduino/
│   │   │   ├── beginner/
│   │   │   │   ├── blink.md
│   │   │   │   └── intro.md
│   │   │   └── intermediate/
│   │   │       └── sensors.md
│   │   ├── raspberry/
│   │   │   └── beginner/
│   │   └── esp32/
│   │       └── advanced/
│   ├── uk/
│   │   ├── arduino/
│   │   │   ├── beginner/
│   │   │   │   ├── blink.md
│   │   │   │   └── intro.md
│   │   │   └── intermediate/
│   │   └── raspberry/
│   └── ru/
│       ├── arduino/
│       └── raspberry/
├── assets/
│   ├── images/
│   └── diagrams/
└── README.md
```

## Формат уроків

### Frontmatter Requirements

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
duration: "30 хвилин"
difficulty: "легко"
---
```

### Обов'язкові поля

| Поле | Тип | Опис | Приклад |
|------|-----|------|---------|
| `title` | string | Назва уроку | "Мигаючий світлодіод" |
| `slug` | string | Унікальний ідентифікатор | "blink" |
| `lang` | string | Мова уроку | "uk", "en", "ru" |
| `platforms` | array | Платформи | ["arduino", "esp32"] |
| `level` | string | Рівень складності | "beginner", "intermediate", "advanced" |

### Опціональні поля

| Поле | Тип | Опис | Приклад |
|------|-----|------|---------|
| `tags` | array | Теги для пошуку | ["світлодіод", "цифрові виходи"] |
| `published` | boolean | Чи опубліковано | true, false |
| `version` | string | Версія уроку | "1.0.0" |
| `description` | string | Короткий опис | "Класичний приклад з мигаючим світлодіодом" |
| `duration` | string | Тривалість | "30 хвилин" |
| `difficulty` | string | Складність | "легко", "середньо", "складно" |

## Валідні значення

### Мови (lang)
- `en` - English
- `uk` - Українська
- `ru` - Русский

### Платформи (platforms)
- `arduino` - Arduino
- `raspberry` - Raspberry Pi
- `esp8266` - ESP8266
- `esp32` - ESP32

### Рівні складності (level)
- `beginner` - Початківець
- `intermediate` - Середній
- `advanced` - Просунутий

## Приклад уроку

```markdown
---
title: "Мигаючий світлодіод"
slug: "blink"
lang: "uk"
platforms: ["arduino"]
level: "beginner"
tags: ["світлодіод", "цифрові виходи"]
published: true
version: "1.0.0"
description: "Класичний приклад з мигаючим світлодіодом для Arduino"
duration: "30 хвилин"
difficulty: "легко"
---

# Мигаючий світлодіод

Цей урок є класичним прикладом для початківців, які вивчають Arduino.

## Необхідні компоненти

- Arduino Uno
- Світлодіод
- Резистор 220 Ом
- Макетна плата
- З'єднувальні дроти

## Схема підключення

[Опис схеми підключення]

## Код програми

```arduino
const int ledPin = 13;

void setup() {
  pinMode(ledPin, OUTPUT);
}

void loop() {
  digitalWrite(ledPin, HIGH);
  delay(1000);
  digitalWrite(ledPin, LOW);
  delay(1000);
}
```

## Пояснення коду

1. `const int ledPin = 13;` - Визначаємо пін для світлодіода
2. `pinMode(ledPin, OUTPUT);` - Встановлюємо пін як вихід
3. `digitalWrite(ledPin, HIGH);` - Вмикаємо світлодіод
4. `delay(1000);` - Чекаємо 1 секунду

## Експерименти

- Змініть час затримки
- Додайте ще один світлодіод
- Створіть послідовність мигань

## Висновок

Вітаємо! Ви створили свій перший проект з Arduino.
```

## Налаштування репозиторію

### 1. Створення репозиторію

1. Створіть новий репозиторій на GitHub
2. Назвіть його `ByByteLessons`
3. Встановіть як публічний
4. Додайте опис: "Open educational lessons for the STEM Robotics Platform"

### 2. Створення структури

```bash
mkdir -p content/{en,uk,ru}/{arduino,raspberry,esp8266,esp32}/{beginner,intermediate,advanced}
mkdir -p assets/{images,diagrams}
```

### 3. Додавання контенту

1. Створіть уроки в відповідних директоріях
2. Дотримуйтеся структури frontmatter
3. Використовуйте унікальні slug
4. Перевіряйте валідність даних

### 4. Налаштування CI/CD

Створіть `.github/workflows/validate-content.yml`:

```yaml
name: Validate Content

on:
  push:
    branches: [ main ]
  pull_request:
    branches: [ main ]

jobs:
  validate:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - name: Validate frontmatter
        run: |
          # Скрипт валідації frontmatter
          node scripts/validate-frontmatter.js
```

## Інтеграція з ByByteSite

ByByteLessons підключений до ByByteSite як **git submodule** у `submodules/ByByteLessons`.

### Локальна розробка

```bash
# Клонування репозиторію з submodule
git clone --recurse-submodules https://github.com/ByByte-diy/ByByteSite.git

# Або ініціалізація submodule в існуючому клоні
git submodule update --init --recursive

# Генерація індексу уроків
npm run generate-index

# Запуск dev-сервера (prestart автоматично генерує індекс)
npm start
```

### Шляхи контенту

| Що | Де |
|----|-----|
| Markdown-уроки | `submodules/ByByteLessons/content/` |
| Generated index | `src/generated/content/index.json` (не в git) |
| Runtime URL | `assets/content/...` (через `angular.json` assets) |

### Оновлення контенту

1. Зміни вносяться в репозиторій **ByByteLessons**
2. В ByByteSite оновлюється pointer submodule:
   ```bash
   git submodule update --remote submodules/ByByteLessons
   git add submodules/ByByteLessons
   git commit -m "chore: bump ByByteLessons submodule"
   ```
3. Або через GitHub Actions workflow **Update Lessons Submodule** (`update-content.yml`)

### CI/CD

- Checkout з `submodules: recursive`
- `npm run generate-index` — сканує submodule, пише index у `src/generated/`
- `npm run validate-content` — валідує frontmatter у submodule
- Angular build підключає обидва asset sources до `assets/content/`

## Best Practices

### 1. Структура контенту
- Використовуйте чітку ієрархію директорій
- Дотримуйтеся конвенцій найменування
- Групуйте уроки за мовою та платформою

### 2. Frontmatter
- Завжди включайте обов'язкові поля
- Використовуйте унікальні slug
- Перевіряйте валідність даних

### 3. Контент
- Пишіть зрозуміло та структуровано
- Додавайте приклади коду
- Включайте схеми та діаграми

### 4. Версіонування
- Використовуйте семантичне версіонування
- Ведіть changelog
- Тегуйте релізи

## Troubleshooting

### Помилки валідації
1. Перевірте frontmatter
2. Переконайтеся, що всі обов'язкові поля присутні
3. Перевірте формати даних

### Помилки інтеграції
1. Перевірте доступність репозиторію
2. Переконайтеся, що структура правильна
3. Перевірте права доступу

### Помилки деплою
1. Перевірте логи в GitHub Actions
2. Переконайтеся, що валідація пройшла успішно
3. Перевірте налаштування GitHub Pages
