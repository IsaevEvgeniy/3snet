import { test as base, expect } from '@playwright/test';
import { URLS } from '../constants';
import { NavigationPage } from '../pages/navigation.page';

export type Fixtures = {
  navigation: NavigationPage;
};

export const test = base.extend<Fixtures>({
  navigation: async ({ page }, use) => {
    await page.goto(URLS.HOME, { waitUntil: 'domcontentloaded' });
    await use(new NavigationPage(page));
  },
});

export { expect };
