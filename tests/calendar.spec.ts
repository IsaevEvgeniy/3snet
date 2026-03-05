import { SERVICE_ITEMS, THEMES, TOPIC_OPTIONS } from '../src/constants';
import { expect, test } from '../src/fixtures/calendar.fixtures';

test.describe('US_02 Конструктор календаря мероприятий', () => {
  test('TC_02.001.01 Хлебные крошки', async ({ calendarPage }) => {
    await expect(calendarPage.breadcrumbs).toBeVisible();
    await expect(calendarPage.breadcrumbs).toHaveText(SERVICE_ITEMS.EVENTS_WIDGET);
  });

  test('TC_02.001.02 Выбор тематик', async ({ calendarPage }) => {
    await calendarPage.selectTopics(
      TOPIC_OPTIONS.SEO,
      TOPIC_OPTIONS.IGAMING,
      TOPIC_OPTIONS.AFFILIATE
    );
    await expect(calendarPage.selectTopic).toContainText('Выбрано: 3');

    await calendarPage.resetTopic();
    await expect(calendarPage.selectTopic).toContainText('Выбрать тематику');
  });

  test('TC_02.001.03 Выбор стран', async ({ calendarPage }) => {
    await calendarPage.selectAllCountries();
    await expect(calendarPage.selectCountries).toContainText('Выбрано: 46');
  });

  test('TC_02.001.04 Темы оформления', async ({ calendarPage }) => {
    const themes = [THEMES.BLUE, THEMES.GREEN, THEMES.TURQUOISE, THEMES.PURPLE];

    for (const theme of themes) {
      await calendarPage.selectTheme(theme);
      await expect(calendarPage.isThemeChecked(theme)).toBeChecked();
    }
  });

  test('TC_02.001.05 Ширина виджета', async ({ calendarPage }) => {
    await calendarPage.setSize(400);
    await expect(calendarPage.selectSize).toHaveValue('400');
    await expect(calendarPage.isWidthFull()).not.toBeChecked();

    await calendarPage.setSize('full');
    await expect(calendarPage.isWidthFull()).toBeChecked();
  });

  test('TC_02.001.06 Высота виджета', async ({ calendarPage }) => {
    await calendarPage.setHeight(500);
    await expect(calendarPage.selectHeight).toHaveValue('500');
    await expect(calendarPage.isHeightFull()).not.toBeChecked();

    await calendarPage.setHeight('full');
    await expect(calendarPage.isHeightFull()).toBeChecked();
  });

  test('TC_02.001.07 Генерация и копирование кода', async ({ calendarPage }) => {
    await calendarPage.selectTopics(TOPIC_OPTIONS.SEO, TOPIC_OPTIONS.IGAMING);
    await calendarPage.selectAllCountries();
    await calendarPage.selectTheme(THEMES.GREEN);
    await calendarPage.setSize(400);
    await calendarPage.setHeight(500);
    await calendarPage.clickGeneratePreview();
    await calendarPage.clickCopyTheCode();
    await expect(calendarPage.buttonCopyTheCode).toHaveText('Скопировано');
  });
});
