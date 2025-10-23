# Setup Instructions

Цей документ містить покрокові інструкції для налаштування CI/CD та інтеграції з репозиторієм ByByteLessons.

## Швидкий старт

### 1. Оновлення контенту уроків

**Ручне оновлення через GitHub Actions:**
1. Перейдіть до **Actions** в репозиторії
2. Знайдіть **Update Lessons Content**
3. Натисніть **Run workflow**
4. Моніторьте виконання

**Детальні інструкції:** [Manual Content Update](MANUAL-CONTENT-UPDATE.md)

### 2. Налаштування GitHub Pages

1. **Увімкнення GitHub Pages**
   - Перейдіть до **Settings** → **Pages**
   - Виберіть **Source**: GitHub Actions
   - Збережіть налаштування

2. **Налаштування кастомного домену**
   - В розділі **Custom domain** введіть `bybyte.diy`
   - Встановіть галочку **Enforce HTTPS**
   - Збережіть налаштування

3. **Налаштування Environment**
   - Перейдіть до **Settings** → **Environments**
   - Створіть environment `github-pages`
   - Налаштування за замовчуванням

### 2. Налаштування репозиторію ByByteLessons

1. **Створення репозиторію**
   ```bash
   # Клонування репозиторію
   git clone https://github.com/ByByte-diy/ByByteLessons.git
   cd ByByteLessons
   ```

2. **Створення структури**
   ```bash
   mkdir -p content/{en,uk,ru}/{arduino,raspberry,esp8266,esp32}/{beginner,intermediate,advanced}
   mkdir -p assets/{images,diagrams}
   ```

3. **Додавання першого уроку**
   ```bash
   # Створення файлу уроку
   cat > content/uk/arduino/beginner/blink.md << 'EOF'
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
   ---
   
   # Мигаючий світлодіод
   
   Цей урок є класичним прикладом для початківців, які вивчають Arduino.
   
   ## Необхідні компоненти
   
   - Arduino Uno
   - Світлодіод
   - Резистор 220 Ом
   - Макетна плата
   - З'єднувальні дроти
   
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
   EOF
   ```

4. **Коміт та пуш**
   ```bash
   git add .
   git commit -m "Add first lesson: blinking LED"
   git push origin main
   ```

### 3. Тестування інтеграції

1. **Ручне тестування**
   ```bash
   # В ByByteSite репозиторії
   npm run generate-index
   npm run validate-content
   npm run build
   ```

2. **Автоматичне тестування**
   - Створіть Pull Request
   - Перевірте, що створився preview
   - Перевірте, що контент підвантажився

### 4. Оновлення контенту

1. **Ручне оновлення через GitHub Actions**
   - Перейдіть до **Actions** → **Update Lessons Content**
   - Натисніть **Run workflow**
   - Моніторьте виконання

2. **Моніторинг**
   - **GitHub Actions**: статус workflow
   - **GitHub Pages**: https://bybyte.diy
   - **Контент**: перевірка відображення уроків

Детальні інструкції: [Manual Content Update](MANUAL-CONTENT-UPDATE.md)

## Детальні інструкції

### Налаштування CI/CD

1. **Файли workflow** вже створені:
   - `.github/workflows/ci.yml` - основний CI/CD
   - `.github/workflows/update-content.yml` - оновлення контенту
   - `.github/workflows/preview.yml` - preview для PR
   - `.github/workflows/pages.yml` - деплой на GitHub Pages

2. **Скрипти** вже створені:
   - `scripts/generate-index.js` - генерація індексу
   - `scripts/validate-content.js` - валідація контенту

3. **Налаштування** вже додані:
   - `package.json` - нові скрипти
   - `CNAME` - кастомний домен

### Налаштування контенту

1. **Структура репозиторію ByByteLessons**
   ```
   ByByteLessons/
   ├── content/
   │   ├── en/
   │   │   ├── arduino/
   │   │   │   ├── beginner/
   │   │   │   └── intermediate/
   │   │   └── raspberry/
   │   ├── uk/
   │   └── ru/
   └── assets/
   ```

2. **Формат уроків**
   - Frontmatter з обов'язковими полями
   - Markdown контент
   - Приклади коду
   - Схеми та діаграми

### Налаштування деплою

1. **GitHub Pages**
   - Source: GitHub Actions
   - Custom domain: bybyte.diy
   - HTTPS: Enabled

2. **Environment**
   - Name: github-pages
   - Protection rules: None
   - Secrets: Not needed

## Перевірка налаштування

### 1. Перевірка GitHub Pages

```bash
# Перевірка DNS
dig bybyte.diy
nslookup bybyte.diy

# Перевірка SSL
curl -I https://bybyte.diy

# Перевірка контенту
curl -s https://bybyte.diy | grep -i "bybyte"
```

### 2. Перевірка CI/CD

1. **GitHub Actions**
   - Всі workflow повинні бути зеленими
   - Логи не повинні містити помилок
   - Артефакти повинні створюватися

2. **Preview**
   - Створіть Pull Request
   - Перевірте, що створився preview
   - Перевірте, що контент відображається

### 3. Перевірка контенту

1. **Валідація**
   ```bash
   npm run validate-content
   ```

2. **Генерація індексу**
   ```bash
   npm run generate-index
   ```

3. **Збірка**
   ```bash
   npm run build
   ```

## Troubleshooting

### Помилки GitHub Pages

1. **"Page not found"**
   - Перевірте, що workflow виконався успішно
   - Переконайтеся, що файл `CNAME` існує
   - Перевірте налаштування DNS

2. **Помилка SSL**
   - Встановіть галочку **Enforce HTTPS**
   - Дочекайтеся активації SSL сертифікату

3. **Помилка деплою**
   - Перевірте логи в GitHub Actions
   - Переконайтеся, що build проходить успішно

### Помилки контенту

1. **Помилки валідації**
   - Перевірте frontmatter в уроках
   - Переконайтеся, що всі обов'язкові поля присутні
   - Перевірте формати даних

2. **Помилки інтеграції**
   - Перевірте доступність репозиторію ByByteLessons
   - Переконайтеся, що структура контенту правильна
   - Перевірте права доступу

### Помилки CI/CD

1. **Помилки збірки**
   - Перевірте логи в GitHub Actions
   - Переконайтеся, що всі залежності встановлені
   - Перевірте версію Node.js

2. **Помилки тестування**
   - Перевірте, що тести проходять локально
   - Переконайтеся, що браузер налаштований правильно
   - Перевірте конфігурацію Karma

## Підтримка

### Документація
- [CI/CD Documentation](CI-CD.md)
- [GitHub Pages Setup](GITHUB-PAGES-SETUP.md)
- [ByByteLessons Setup](BYTEBYTELESSONS-SETUP.md)

### Контакти
- GitHub Issues: [ByByteSite Issues](https://github.com/ByByte-diy/ByByteSite/issues)
- GitHub Discussions: [ByByteSite Discussions](https://github.com/ByByte-diy/ByByteSite/discussions)

### Оновлення
- Регулярно оновлюйте залежності
- Слідкуйте за оновленнями GitHub Actions
- Перевіряйте статус workflow
