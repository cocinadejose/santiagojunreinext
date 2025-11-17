// middleware.ts
import createMiddleware from 'next-intl/middleware';

export default createMiddleware({
  locales: ['ja', 'en', 'es', 'fr', 'it', 'pt', 'de', 'ko', 'zh'],
  defaultLocale: 'ja',
  localePrefix: 'always'
});

export const config = {
  // Match only internationalized pathnames
  matcher: ['/((?!api|_next/static|_next/image|favicon.ico).*)']
};
