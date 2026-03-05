export const TOPIC_OPTIONS = {
  ALL: 'Выбрать все',
  AFFILIATE: 'Affiliate',
  BLOCKCHAIN: 'Blockchain',
  DEVELOPMENT: 'Development',
  IGAMING: 'Igaming',
  INTERNET_MARKETING: 'Internet Marketing',
  SEO: 'SEO',
  FINTECH: 'Финтех',
} as const;

export const THEMES = {
  BLUE: 'Blue',
  GREEN: 'Green',
  TURQUOISE: 'Turquoise',
  PURPLE: 'Purple',
} as const;

export type ThemeValue = (typeof THEMES)[keyof typeof THEMES];
export type TopicValue = (typeof TOPIC_OPTIONS)[keyof typeof TOPIC_OPTIONS];
