# Manual Content Update

Цей документ описує, як вручну оновити контент уроків з репозиторію ByByteLessons.

## Як оновити контент

### 1. Через GitHub Actions (Рекомендовано)

1. **Перейдіть до Actions**
   - Відкрийте репозиторій ByByteSite на GitHub
   - Натисніть на вкладку **Actions**

2. **Знайдіть workflow "Update Lessons Content"**
   - В лівому меню знайдіть **Update Lessons Content**
   - Натисніть на нього

3. **Запустіть workflow**
   - Натисніть **Run workflow**
   - Виберіть гілку (зазвичай `main`)
   - Опціонально встановіть **Force update** якщо хочете примусово оновити
   - Натисніть **Run workflow**

4. **Моніторинг виконання**
   - Переглядайте логи виконання
   - Перевірте, що всі кроки пройшли успішно
   - При помилках перевірте логи та виправте проблеми

### 2. Через локальну команду

```bash
# Клонування репозиторію (якщо ще не зроблено)
git clone https://github.com/ByByte-diy/ByByteSite.git
cd ByByteSite

# Встановлення залежностей
npm install

# Підвантаження контенту з ByByteLessons
curl -L -H "Accept: application/vnd.github.v3+json" \
  "https://api.github.com/repos/ByByte-diy/ByByteLessons/zipball/main" \
  -o lessons.zip
unzip lessons.zip -d temp-lessons
REPO_DIR=$(find temp-lessons -maxdepth 1 -type d -name "ByByte-diy-ByByteLessons-*" | head -1)
cp -r "$REPO_DIR/content"/* src/assets/content/
rm -rf temp-lessons lessons.zip

# Генерація індексу
npm run generate-index

# Валідація контенту
npm run validate-content

# Збірка та тестування
npm run build
npm run test

# Коміт змін
git add src/assets/content/
git commit -m "chore: update lessons content from ByByteLessons"
git push origin main
```

## Коли оновлювати контент

### Автоматичні тригери
- **Новий урок** додано в ByByteLessons
- **Оновлення існуючого уроку** в ByByteLessons
- **Зміни в структурі** репозиторію ByByteLessons

### Рекомендована частота
- **Після кожного нового уроку** в ByByteLessons
- **Щотижня** для перевірки оновлень
- **Перед важливими релізами** сайту

## Моніторинг оновлень

### 1. GitHub Actions
- **Status**: Зелений = успішно, червоний = помилка
- **Logs**: Детальні логи виконання
- **Duration**: Час виконання workflow

### 2. GitHub Pages
- **URL**: https://bybyte.diy
- **Last deployment**: Час останнього деплою
- **Status**: Активний/Неактивний

### 3. Контент
- **Кількість уроків**: Перевірте, що всі уроки відображаються
- **Мови**: Перевірте, що всі мови працюють
- **Платформи**: Перевірте, що всі платформи працюють

## Troubleshooting

### Помилки підвантаження контенту

1. **"Content directory not found"**
   - Перевірте, що репозиторій ByByteLessons існує
   - Переконайтеся, що структура контенту правильна
   - Перевірте права доступу до репозиторію

2. **"Failed to download content"**
   - Перевірте інтернет-з'єднання
   - Переконайтеся, що репозиторій ByByteLessons публічний
   - Спробуйте ще раз через кілька хвилин

### Помилки валідації

1. **"Missing required field"**
   - Перевірте frontmatter в уроках
   - Переконайтеся, що всі обов'язкові поля присутні
   - Виправте помилки в уроках

2. **"Invalid format"**
   - Перевірте формати даних в frontmatter
   - Переконайтеся, що значення відповідають вимогам
   - Виправте невалідні значення

### Помилки збірки

1. **"Build failed"**
   - Перевірте логи збірки
   - Переконайтеся, що всі залежності встановлені
   - Перевірте версію Node.js

2. **"Tests failed"**
   - Перевірте логи тестування
   - Переконайтеся, що тести проходять локально
   - Виправте помилки в коді

## Автоматизація (Опціонально)

Якщо хочете автоматизувати оновлення, можете налаштувати:

### 1. Webhook від ByByteLessons
- Налаштуйте webhook в репозиторії ByByteLessons
- Тригер workflow при нових комітах
- Автоматичне оновлення контенту

### 2. Scheduled workflow
- Додайте cron schedule в workflow
- Автоматичне оновлення за розкладом
- Моніторинг змін в репозиторії

### 3. GitHub App
- Створіть GitHub App для автоматизації
- Інтеграція між репозиторіями
- Автоматичні коміти та деплой

## Best Practices

### 1. Перед оновленням
- Перевірте, що репозиторій ByByteLessons стабільний
- Переконайтеся, що всі уроки валідні
- Створіть backup поточного контенту

### 2. Під час оновлення
- Моніторьте логи виконання
- Перевіряйте статус кожного кроку
- Не переривайте процес навмисно

### 3. Після оновлення
- Перевірте, що сайт працює
- Переконайтеся, що всі уроки відображаються
- Протестуйте функціональність

## Контакти та підтримка

### Документація
- [CI/CD Documentation](CI-CD.md)
- [GitHub Pages Setup](GITHUB-PAGES-SETUP.md)
- [ByByteLessons Setup](BYTEBYTELESSONS-SETUP.md)

### GitHub
- **Issues**: [ByByteSite Issues](https://github.com/ByByte-diy/ByByteSite/issues)
- **Discussions**: [ByByteSite Discussions](https://github.com/ByByte-diy/ByByteSite/discussions)
- **Actions**: [ByByteSite Actions](https://github.com/ByByte-diy/ByByteSite/actions)

### Допомога
- Перевірте логи в GitHub Actions
- Створіть issue з описом проблеми
- Додайте скріншоти та логи помилок
