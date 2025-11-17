// i18n.ts
import {getRequestConfig} from 'next-intl/server';

const locales = ['ja', 'en', 'es', 'fr', 'it', 'pt', 'de', 'ko', 'zh'] as const;
export type Locale = typeof locales[number];

export default getRequestConfig(async ({locale}) => {
  // Temporalmente, usar 'ja' si locale es undefined
  const validLocale = locale && locales.includes(locale as Locale) ? locale : 'ja';
  
  return {
    locale: validLocale,
    messages: (await import(`./messages/${validLocale}.json`)).default
  };
});
