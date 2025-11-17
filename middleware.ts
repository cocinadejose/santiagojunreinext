// middleware.ts
import createMiddleware from 'next-intl/middleware';

export default createMiddleware({
  // mismos que en tu i18n.ts
  locales: ['es', 'en', 'fr', 'it', 'pt', 'de', 'ja', 'ko', 'zh'],
  defaultLocale: 'es'
});

export const config = {
  // aplica el middleware a todas las rutas excepto recursos estáticos
  matcher: ['/((?!api|_next|.*\\..*).*)']
};