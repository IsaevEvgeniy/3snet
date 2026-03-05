import { Urls } from '../types/urls.types';

export const URLS = {
  // Главная страница
  HOME: '/',

  // Новости
  NEWS: '/news/',

  // Обзоры рынков
  MARKET_REVIEWS: '/reviews/',

  // Спорт календарь
  SPORT_EVENTS: '/sport-events-schedule/',

  // Конференции
  ACTIVITY: '/activity/',
  ADD_EVENT: '/add-event/',

  // Наши сервисы
  BLOCKED_SERVICES: '/spisok-zablokirovannykh-servisov/',
  SPORTSWIDGET: '/sportswidget/',
  EVENTSWIDGET: '/eventswidget/',

  // Промокоды
  PROMOCODES: '/promocodes/',
  PROMOCODES_OPERATORS: '/promocodes/operators/',
  PROMOCODES_AFFILIATES: '/promocodes/affiliates/',
  PROMOCODE_ADD: '/promocode-add/',

  // База знаний
  GLOSSARY: '/glossary/',

  // Работа в Igaming
  IGAMING_JOB: '/igaming-job/',
  ADD_VACANCY: '/add-igaming-job/',

  // iGaming компании
  COMPANIES: '/companies/',
  COMPANIES_ADD: '/companies-add/',
} as const satisfies Urls;
