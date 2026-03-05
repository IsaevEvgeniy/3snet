import { test as base, expect } from '@playwright/test';
import { URLS } from '../constants';
import { CalendarPage } from '../pages/calendar.page';
import { NavigationPage } from '../pages/navigation.page';

export type Fixtures = {
  calendarPage: CalendarPage;
};

export const test = base.extend<Fixtures>({
  calendarPage: async ({ page }, use) => {
    const navigation = new NavigationPage(page);
    await page.goto(URLS.HOME, { waitUntil: 'domcontentloaded' });
    await navigation.clickServiceItem('EVENTS_WIDGET');
    await use(new CalendarPage(page));
  },
});

export { expect };
