import type { NextConfig } from 'next';
import createNextIntlPlugin from 'next-intl/plugin';

const withNextIntl = createNextIntlPlugin('./i18n.ts');

const nextConfig: NextConfig = {
  images: { formats: ['image/avif', 'image/webp'] },
  // ❌ NO pongas la clave i18n aquí
};

export default withNextIntl(nextConfig);