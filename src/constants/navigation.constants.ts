import {
  CategoryItems,
  CompanyItems,
  ConferenceItems,
  JobItems,
  PromocodeItems,
  ServiceItems,
} from '../types/navigation.types';

// Основные категории верхнего уровня
export const CATEGORIES = {
  NEWS: 'Новости',
  REVIEWS: 'Обзоры рынков',
  SPORT_CALENDAR: 'Спорт календарь',
  CONFERENCES: 'Конференции',
  SERVICES: 'Наши сервисы',
  PROMOCODES: 'Промокоды',
  KNOWLEDGE_BASE: 'База знаний',
  IGAMING_JOBS: 'Работа в Igaming',
  IGAMING_COMPANIES: 'iGaming компании',
} as const satisfies CategoryItems;

// Подменю для Конференций
export const CONFERENCE_ITEMS = {
  ALL: 'Все конференции',
  ADD: 'Добавить конференцию',
} as const satisfies ConferenceItems;

// Подменю для Наших сервисов
export const SERVICE_ITEMS = {
  BLOCKED: 'Заблокированные сервисы',
  SPORTS_WIDGET: 'Конструктор спорт событий',
  EVENTS_WIDGET: 'Конструктор календаря мероприятий',
} as const satisfies ServiceItems;

// Подменю для Промокодов
export const PROMOCODE_ITEMS = {
  OPERATORS: 'Промокоды для операторов',
  AFFILIATES: 'Промокоды для аффилейтов',
  IGAMING_COMPANIES: 'iGaming компании',
  ADD: 'Добавить промокод',
} as const satisfies PromocodeItems;

// Подменю для Работы в Igaming
export const JOB_ITEMS = {
  ALL: 'Все вакансии',
  ADD: 'Добавить вакансию',
} as const satisfies JobItems;

// Подменю для iGaming компаний
export const COMPANY_ITEMS = {
  ALL: 'Все компании',
  ADD: 'Добавить компанию',
} as const satisfies CompanyItems;

// Типы ключей для методов навигации
export type CategoryKey = keyof typeof CATEGORIES;
export type ConferenceKey = keyof typeof CONFERENCE_ITEMS;
export type ServiceKey = keyof typeof SERVICE_ITEMS;
export type PromocodeKey = keyof typeof PROMOCODE_ITEMS;
export type JobKey = keyof typeof JOB_ITEMS;
export type CompanyKey = keyof typeof COMPANY_ITEMS;
