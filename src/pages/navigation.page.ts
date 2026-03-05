import { Locator, Page } from '@playwright/test';
import {
  CATEGORIES,
  COMPANY_ITEMS,
  CONFERENCE_ITEMS,
  JOB_ITEMS,
  PROMOCODE_ITEMS,
  SERVICE_ITEMS,
} from '../constants';

import type {
  CategoryKey,
  CompanyKey,
  ConferenceKey,
  JobKey,
  PromocodeKey,
  ServiceKey,
} from '../constants';

export class NavigationPage {
  readonly page: Page;

  // Основные категории
  readonly newsCategory: Locator;
  readonly reviewsCategory: Locator;
  readonly sportCalendarCategory: Locator;
  readonly conferencesCategory: Locator;
  readonly servicesCategory: Locator;
  readonly promocodesCategory: Locator;
  readonly knowledgeBaseCategory: Locator;
  readonly igamingJobsCategory: Locator;
  readonly igamingCompaniesCategory: Locator;

  // Подменю конференций
  readonly allConferences: Locator;
  readonly addConference: Locator;

  // Подменю сервисов
  readonly blockedService: Locator;
  readonly sportsWidget: Locator;
  readonly eventsWidget: Locator;

  // Подменю промокодов
  readonly operatorsPromocode: Locator;
  readonly affiliatesPromocode: Locator;
  readonly igamingCompaniesPromocode: Locator;
  readonly addPromocode: Locator;

  // Подменю вакансий
  readonly allJobs: Locator;
  readonly addJob: Locator;

  // Подменю компаний
  readonly allCompanies: Locator;
  readonly addCompany: Locator;

  constructor(page: Page) {
    this.page = page;

    // Основные категории
    this.newsCategory = page.locator('header a', { hasText: CATEGORIES.NEWS });
    this.reviewsCategory = page.locator('header a', { hasText: CATEGORIES.REVIEWS });
    this.sportCalendarCategory = page.locator('header a', { hasText: CATEGORIES.SPORT_CALENDAR });
    this.conferencesCategory = page.locator('header span.dropdown-toggle', { hasText: CATEGORIES.CONFERENCES });
    this.servicesCategory = page.locator('header span.dropdown-toggle', { hasText: CATEGORIES.SERVICES });
    this.promocodesCategory = page.locator('header span.dropdown-toggle', { hasText: CATEGORIES.PROMOCODES });
    this.knowledgeBaseCategory = page.locator('header a', { hasText: CATEGORIES.KNOWLEDGE_BASE });
    this.igamingJobsCategory = page.locator('header span.dropdown-toggle', { hasText: CATEGORIES.IGAMING_JOBS });
    this.igamingCompaniesCategory = page.locator('header span.dropdown-toggle', { hasText: CATEGORIES.IGAMING_COMPANIES });

    // Подменю конференций
    this.allConferences = page.locator('header a', { hasText: CONFERENCE_ITEMS.ALL });
    this.addConference = page.locator('header a', { hasText: CONFERENCE_ITEMS.ADD });

    // Подменю сервисов
    this.blockedService = page.locator('header a', { hasText: SERVICE_ITEMS.BLOCKED });
    this.sportsWidget = page.locator('header a', { hasText: SERVICE_ITEMS.SPORTS_WIDGET });
    this.eventsWidget = page.locator('header a', { hasText: SERVICE_ITEMS.EVENTS_WIDGET });

    // Подменю промокодов
    this.operatorsPromocode = page.locator('header a', { hasText: PROMOCODE_ITEMS.OPERATORS });
    this.affiliatesPromocode = page.locator('header a', { hasText: PROMOCODE_ITEMS.AFFILIATES });
    this.igamingCompaniesPromocode = page.locator('header .dropdown-menu a', { hasText: PROMOCODE_ITEMS.IGAMING_COMPANIES });
    this.addPromocode = page.locator('header a', { hasText: PROMOCODE_ITEMS.ADD });

    // Подменю вакансий
    this.allJobs = page.locator('header a', { hasText: JOB_ITEMS.ALL });
    this.addJob = page.locator('header a', { hasText: JOB_ITEMS.ADD });

    // Подменю компаний
    this.allCompanies = page.locator('header a', { hasText: COMPANY_ITEMS.ALL });
    this.addCompany = page.locator('header a', { hasText: COMPANY_ITEMS.ADD });
  }

  /**
   * Клик по категории верхнего уровня
   * @param category - ключ категории из CATEGORIES
   */
  async clickCategory(category: CategoryKey): Promise<void> {
    const categories: Record<CategoryKey, Locator> = {
      NEWS: this.newsCategory,
      REVIEWS: this.reviewsCategory,
      SPORT_CALENDAR: this.sportCalendarCategory,
      CONFERENCES: this.conferencesCategory,
      SERVICES: this.servicesCategory,
      PROMOCODES: this.promocodesCategory,
      KNOWLEDGE_BASE: this.knowledgeBaseCategory,
      IGAMING_JOBS: this.igamingJobsCategory,
      IGAMING_COMPANIES: this.igamingCompaniesCategory,
    };
    await categories[category].click();
  }

  /**
   * Открывает подменю Конференций и кликает по нужному пункту
   * @param item - ключ пункта из CONFERENCE_ITEMS
   */
  async clickConferenceItem(item: ConferenceKey): Promise<void> {
    const conferences: Record<ConferenceKey, Locator> = {
      ALL: this.allConferences,
      ADD: this.addConference,
    };
    await this.conferencesCategory.hover();
    await conferences[item].click();
  }

  /**
   * Открывает подменю Наших сервисов и кликает по нужному пункту
   * @param item - ключ пункта из SERVICE_ITEMS
   */
  async clickServiceItem(item: ServiceKey): Promise<void> {
    const services: Record<ServiceKey, Locator> = {
      BLOCKED: this.blockedService,
      SPORTS_WIDGET: this.sportsWidget,
      EVENTS_WIDGET: this.eventsWidget,
    };
    await this.servicesCategory.hover();
    await services[item].click();
  }

  /**
   * Открывает подменю Промокодов и кликает по нужному пункту
   * @param item - ключ пункта из PROMOCODE_ITEMS
   */
  async clickPromocodeItem(item: PromocodeKey): Promise<void> {
    const promocodes: Record<PromocodeKey, Locator> = {
      OPERATORS: this.operatorsPromocode,
      AFFILIATES: this.affiliatesPromocode,
      IGAMING_COMPANIES: this.igamingCompaniesPromocode,
      ADD: this.addPromocode,
    };
    await this.promocodesCategory.hover();
    await promocodes[item].click();
  }

  /**
   * Открывает подменю Работы в iGaming и кликает по нужному пункту
   * @param item - ключ пункта из JOB_ITEMS
   */
  async clickJobItem(item: JobKey): Promise<void> {
    const jobs: Record<JobKey, Locator> = {
      ALL: this.allJobs,
      ADD: this.addJob,
    };
    await this.igamingJobsCategory.hover();
    await jobs[item].click();
  }

  /**
   * Открывает подменю iGaming компаний и кликает по нужному пункту
   * @param item - ключ пункта из COMPANY_ITEMS
   */
  async clickCompanyItem(item: CompanyKey): Promise<void> {
    const companies: Record<CompanyKey, Locator> = {
      ALL: this.allCompanies,
      ADD: this.addCompany,
    };
    await this.igamingCompaniesCategory.hover();
    await companies[item].click();
  }

}
