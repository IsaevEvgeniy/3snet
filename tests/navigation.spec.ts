import { URLS } from '../src/constants';
import { expect, test } from '../src/fixtures/navigation.fixtures';

test.describe('US_01 Навигация', () => {
  test.describe.configure({ mode: 'parallel' });

  test.describe('Основные категории', () => {
    test('TC_01.001.01 Новости', async ({ navigation, page }) => {
      await navigation.clickCategory('NEWS');
      await expect(page).toHaveURL(URLS.NEWS);
    });

    test('TC_01.001.02 Обзоры рынков', async ({ navigation, page }) => {
      await navigation.clickCategory('REVIEWS');
      await expect(page).toHaveURL(URLS.MARKET_REVIEWS);
    });

    test('TC_01.001.03 Спорт календарь', async ({ navigation, page }) => {
      await navigation.clickCategory('SPORT_CALENDAR');
      await expect(page).toHaveURL(URLS.SPORT_EVENTS);
    });

    test('TC_01.001.04 База знаний', async ({ navigation, page }) => {
      await navigation.clickCategory('KNOWLEDGE_BASE');
      await expect(page).toHaveURL(URLS.GLOSSARY);
    });
  });

  test.describe('Подменю Конференции', () => {
    test('TC_01.002.01 Все конференции', async ({ navigation, page }) => {
      await navigation.clickConferenceItem('ALL');
      await expect(page).toHaveURL(URLS.ACTIVITY);
    });

    test('TC_01.002.02 Добавить конференцию', async ({ navigation, page }) => {
      await navigation.clickConferenceItem('ADD');
      await expect(page).toHaveURL(URLS.ADD_EVENT);
    });
  });

  test.describe('Подменю Наши сервисы', () => {
    test('TC_01.003.01 Заблокированные сервисы', async ({ navigation, page }) => {
      await navigation.clickServiceItem('BLOCKED');
      await expect(page).toHaveURL(URLS.BLOCKED_SERVICES);
    });

    test('TC_01.003.02 Конструктор спорт событий', async ({ navigation, page }) => {
      await navigation.clickServiceItem('SPORTS_WIDGET');
      await expect(page).toHaveURL(URLS.SPORTSWIDGET);
    });

    test('TC_01.003.03 Конструктор календаря мероприятий', async ({ navigation, page }) => {
      await navigation.clickServiceItem('EVENTS_WIDGET');
      await expect(page).toHaveURL(URLS.EVENTSWIDGET);
    });
  });

  test.describe('Подменю Промокоды', () => {
    test('TC_01.004.01 Промокоды для операторов', async ({ navigation, page }) => {
      await navigation.clickPromocodeItem('OPERATORS');
      await expect(page).toHaveURL(URLS.PROMOCODES_OPERATORS);
    });

    test('TC_01.004.02 Промокоды для аффилейтов', async ({ navigation, page }) => {
      await navigation.clickPromocodeItem('AFFILIATES');
      await expect(page).toHaveURL(URLS.PROMOCODES_AFFILIATES);
    });

    test('TC_01.004.03 Добавить промокод', async ({ navigation, page }) => {
      await navigation.clickPromocodeItem('ADD');
      await expect(page).toHaveURL(URLS.PROMOCODE_ADD);
    });
  });

  test.describe('Подменю Работа в iGaming', () => {
    test('TC_01.005.01 Все вакансии', async ({ navigation, page }) => {
      await navigation.clickJobItem('ALL');
      await expect(page).toHaveURL(URLS.IGAMING_JOB);
    });

    test('TC_01.005.02 Добавить вакансию', async ({ navigation, page }) => {
      await navigation.clickJobItem('ADD');
      await expect(page).toHaveURL(URLS.ADD_VACANCY);
    });
  });

  test.describe('Подменю iGaming компании', () => {
    test('TC_01.006.01 Все компании', async ({ navigation, page }) => {
      await navigation.clickCompanyItem('ALL');
      await expect(page).toHaveURL(URLS.COMPANIES);
    });

    test('TC_01.006.02 Добавить компанию', async ({ navigation, page }) => {
      await navigation.clickCompanyItem('ADD');
      await expect(page).toHaveURL(URLS.COMPANIES_ADD);
    });
  });
});
