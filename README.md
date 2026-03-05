## Структура проекта

```
3snet/
├── .github/
│   └── workflows/
│       └── playwright.yml
│
├── src/
│   ├── constants/
│   │   ├── index.ts
│   │   ├── navigation.constants.ts
│   │   ├── urls.constants.ts
│   │   └── calendar.constants.ts
│   │
│   ├── fixtures/
│   │   ├── navigation.fixtures.ts
│   │   └── calendar.fixtures.ts
│   │
│   ├── pages/
│   │   ├── navigation.page.ts
│   │   └── calendar.page.ts
│   │
│   └── types/
│       ├── navigation.types.ts
│       └── urls.types.ts
│
├── tests/
│   ├── navigation.spec.ts
│   └── calendar.spec.ts
│
├── .gitignore
├── package-lock.json
├── package.json
├── playwright.config.ts
└── README.md
```

## Набор тестов

- US_01 — Навигация
- Основные категории
- TC_01.001.01 Новости
- TC_01.001.02 Обзоры рынков
- TC_01.001.03 Спорт календарь
- TC_01.001.04 База знаний
- Конференции
- TC_01.002.01 Все конференции
- TC_01.002.02 Добавить конференцию
- Наши сервисы
- TC_01.003.01 Заблокированные сервисы
- TC_01.003.02 Конструктор спорт событий
- TC_01.003.03 Конструктор календаря мероприятий
- Промокоды
- TC_01.004.01 Промокоды для операторов
- TC_01.004.02 Промокоды для аффилейтов
- TC_01.004.03 Добавить промокод
- Работа в iGaming
- TC_01.005.01 Все вакансии
- TC_01.005.02 Добавить вакансию
- iGaming компании
- TC_01.006.01 Все компании
- TC_01.006.02 Добавить компанию

---

- US_02 — Конструктор календаря мероприятий
- TC_02.001.01 Хлебные крошки
- TC_02.001.02 Выбор тематик
- TC_02.001.03 Выбор стран
- TC_02.001.04 Темы оформления
- TC_02.001.05 Ширина виджета
- TC_02.001.06 Высота виджета
- TC_02.001.07 Генерация и копирование кода

---

## Инструкция по запуску

### 1. Установка зависимостей

```bash
npm install
```

### 2. Установить браузер Playwright

```bash
npx playwright install chromium
```

### 3. Установка Allure

```bash
npm install -D allure-commandline
```

### 4. Настройка окружения

Для пользовательской настройки создайте файл .env:

```bash
BASE_URL =
```

### 5. Запуск тестов

```bash
npx playwright test
```

#### С графическим интерфейсом

```bash
npx playwright test --ui
```

#### В режиме отладки

```bash
npx playwright test --debug
```

#### Конкретный файл

```bash
npx playwright test tests/navigation.spec.ts
npx playwright test tests/calendar.spec.ts
```

---

## 6. Просмотр результатов

### Playwright HTML Report

```bash
npx playwright show-report
```

### Allure Report

```bash
npx allure-commandline generate allure-results --clean -o allure-report
npx allure-commandline open allure-report
```

---
