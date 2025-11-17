// i18n.ts
import {getRequestConfig} from 'next-intl/server';

const locales = ['en', 'es', 'fr', 'it', 'pt', 'de', 'ja', 'ko', 'zh'] as const;
export type Locale = typeof locales[number];

export default getRequestConfig(async ({locale}) => {
  if (!locales.includes(locale as Locale)) {
    throw new Error(`Unsupported locale: ${locale}`);
  }

  return {
    locale,                       // ← añade esto
    messages: (await import(`./messages/${locale}.json`)).default
  };
});