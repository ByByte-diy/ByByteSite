# GitHub Pages Setup

Цей документ описує налаштування GitHub Pages для проекту ByByteSite.

## Налаштування в GitHub

### 1. Увімкнення GitHub Pages

1. Перейдіть до **Settings** репозиторію
2. Знайдіть розділ **Pages** в лівому меню
3. В розділі **Source** виберіть **GitHub Actions**
4. Збережіть налаштування

### 2. Налаштування кастомного домену

1. В розділі **Pages** знайдіть **Custom domain**
2. Введіть `bybyte.diy`
3. Встановіть галочку **Enforce HTTPS**
4. Збережіть налаштування

### 3. Налаштування Environment

1. Перейдіть до **Settings** → **Environments**
2. Створіть новий environment з назвою `github-pages`
3. В налаштуваннях environment:
   - **Required reviewers**: Не потрібно
   - **Wait timer**: 0 minutes
   - **Prevent self-review**: Вимкнено

## Структура файлів

### CNAME файл
```
bybyte.diy
```

### GitHub Actions Workflows

1. **`.github/workflows/pages.yml`** - Основний workflow для GitHub Pages
2. **`.github/workflows/ci.yml`** - CI/CD pipeline
3. **`.github/workflows/preview.yml`** - Preview для PR

## Налаштування DNS

Для кастомного домену `bybyte.diy`:

### A Records
```
bybyte.diy.    IN    A    185.199.108.153
bybyte.diy.    IN    A    185.199.109.153
bybyte.diy.    IN    A    185.199.110.153
bybyte.diy.    IN    A    185.199.111.153
```

### CNAME Record
```
www.bybyte.diy.    IN    CNAME    bybyte.diy.
```

## Перевірка налаштування

### 1. Перевірка DNS
```bash
dig bybyte.diy
nslookup bybyte.diy
```

### 2. Перевірка SSL
```bash
curl -I https://bybyte.diy
```

### 3. Перевірка GitHub Pages
- Перейдіть до **Actions** в репозиторії
- Знайдіть workflow **GitHub Pages**
- Перевірте, що він успішно виконався

## Troubleshooting

### Помилка "Page not found"
1. Перевірте, що workflow виконався успішно
2. Переконайтеся, що файл `CNAME` існує
3. Перевірте налаштування DNS

### Помилка SSL
1. Встановіть галочку **Enforce HTTPS** в налаштуваннях Pages
2. Дочекайтеся активації SSL сертифікату (може зайняти до 24 годин)

### Помилка деплою
1. Перевірте логи в GitHub Actions
2. Переконайтеся, що build проходить успішно
3. Перевірте права доступу до репозиторію

## Моніторинг

### GitHub Actions
- **Status**: Зелений = успішно, червоний = помилка
- **Logs**: Детальні логи виконання
- **Artifacts**: Згенеровані файли

### GitHub Pages
- **URL**: https://bybyte.diy
- **Status**: Активний/Неактивний
- **Last deployment**: Час останнього деплою

## Автоматизація

### Щоденне оновлення контенту
- Workflow `update-content.yml` запускається щодня о 2:00 UTC
- Автоматично підвантажує новий контент з ByByteLessons
- Тригерить деплой на GitHub Pages

### Preview для PR
- Кожен PR автоматично отримує preview URL
- Preview оновлюється при нових комітах
- Автоматично видаляється при закритті PR

## Безпека

### Secrets
- `GITHUB_TOKEN` - автоматично надається GitHub
- Не потрібні додаткові secrets для базового функціоналу

### Permissions
- **Contents**: read
- **Pages**: write
- **ID-token**: write

## Оптимізація

### Кешування
- Node.js dependencies кешуються
- Build artifacts зберігаються між запусками

### Паралелізація
- Lint, test, build виконуються паралельно
- Деплой чекає завершення build

### Моніторинг продуктивності
- Час збірки: ~5-10 хвилин
- Час деплою: ~2-3 хвилини
- Загальний час: ~7-13 хвилин
