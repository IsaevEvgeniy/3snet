import { Locator, Page } from '@playwright/test';
import { ThemeValue, TopicValue } from '../constants';

export class CalendarPage {
  readonly page: Page;
  readonly breadcrumbs: Locator;
  readonly selectTopic: Locator;
  readonly resetTopicButton: Locator;
  readonly selectCountries: Locator;

  // Размера
  readonly selectSize: Locator;
  readonly selectWidthFull: Locator;
  readonly selectHeight: Locator;
  readonly selectHeightFull: Locator;

  // Темы
  readonly blueTheme: Locator;
  readonly greenTheme: Locator;
  readonly turquoiseTheme: Locator;
  readonly purpleTheme: Locator;

  // Кнопки
  readonly buttonCopyTheCode: Locator;
  readonly buttonGeneratePreview: Locator;

  constructor(page: Page) {
    this.page = page;
    this.breadcrumbs = page.locator('.breadcrumbs_title');
    this.selectTopic = page.locator('[data-select="Выбрать тематику"]');
    this.resetTopicButton = page.locator('.checkselect-clear.active');
    this.selectCountries = page.locator('[data-select="Все страны"]');

    // Размера
    this.selectSize = page.locator('#width-range');
    this.selectWidthFull = page.locator('.radio', { hasText: 'на всю ширину контейнера' });
    this.selectHeight = page.locator('#height-range');
    this.selectHeightFull = page.locator('.radio', { hasText: 'на всю высоту блока' });

    // Темы
    this.blueTheme = page.locator('label.radio:has(input[value="blue"])');
    this.greenTheme = page.locator('label.radio:has(input[value="green"])');
    this.turquoiseTheme = page.locator('label.radio:has(input[value="turquoise"])');
    this.purpleTheme = page.locator('label.radio:has(input[value="purple"])');

    // Кнопки
    this.buttonCopyTheCode = page.locator('#code-copy-button');
    this.buttonGeneratePreview = page.getByRole('button', { name: 'Сгенерировать превью' });
  }

  /**
   * Установка ширины
   * @param value - числовое значение или 'full' для всей ширины контейнера
   */
  async setSize(value: number | 'full'): Promise<void> {
    if (value === 'full') {
      await this.selectWidthFull.click();
    } else {
      await this.selectSize.fill(value.toString());
    }
  }

  /**
   * Установка высоты
   * @param value - числовое значение или 'full' для всей высоты блока
   */
  async setHeight(value: number | 'full'): Promise<void> {
    if (value === 'full') {
      await this.selectHeightFull.click();
    } else {
      await this.selectHeight.fill(value.toString());
    }
  }

  /**
   * Выбор одной или нескольких тематик за один открытый дропдаун
   * @param options - одна или несколько тематик
   */
  async selectTopics(...options: TopicValue[]): Promise<void> {
    await this.selectTopic.click();
    for (const option of options) {
      await this.selectTopic.locator('span').filter({ hasText: option }).click();
    }
    await this.breadcrumbs.click();
  }

  /**
   * Сброс выбранных тематик
   */
  async resetTopic(): Promise<void> {
    await this.resetTopicButton.click();
  }

  /**
   * Выбрать все страны
   */
  async selectAllCountries(): Promise<void> {
    await this.selectCountries.click();
    await this.selectCountries.locator('span').filter({ hasText: 'Выбрать все' }).click();
    await this.breadcrumbs.click();
  }

  /**
   * Выбор темы оформления
   * @param theme - название темы
   */
  async selectTheme(theme: ThemeValue): Promise<void> {
    const themes: Record<ThemeValue, Locator> = {
      Blue: this.blueTheme,
      Green: this.greenTheme,
      Turquoise: this.turquoiseTheme,
      Purple: this.purpleTheme,
    };

    await themes[theme].click();
  }

  /**
   * Возвращает локатор input для проверки состояния темы
   * @param theme - название темы
   */
  isThemeChecked(theme: ThemeValue): Locator {
    const themes: Record<ThemeValue, Locator> = {
      Blue: this.blueTheme,
      Green: this.greenTheme,
      Turquoise: this.turquoiseTheme,
      Purple: this.purpleTheme,
    };

    return themes[theme].locator('input');
  }

  /**
   * Возвращает локатор input для проверки полной ширины
   */
  isWidthFull(): Locator {
    return this.selectWidthFull.locator('input');
  }

  /**
   * Возвращает локатор input для проверки полной высоты
   */
  isHeightFull(): Locator {
    return this.selectHeightFull.locator('input');
  }

  /**
   * Клик по кнопке "Скопировать код"
   */
  async clickCopyTheCode(): Promise<void> {
    await this.buttonCopyTheCode.click();
  }

  /**
   * Клик по кнопке "Сгенерировать превью"
   */
  async clickGeneratePreview(): Promise<void> {
    await this.buttonGeneratePreview.click();
  }
}
