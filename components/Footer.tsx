'use client';

import Link from 'next/link';
import {useTranslations} from 'next-intl';

export default function Footer() {
  const t = useTranslations('Footer');
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-50 border-t border-gray-200 py-6 mt-auto">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-gray-600">
          {/* Copyright */}
          <div>
            © {currentYear} Santiago Junrei. {t('rights')}
          </div>

          {/* Links */}
          <div className="flex gap-6">
            <Link href="/about" className="hover:text-blue-600 transition">
              {t('about')}
            </Link>
            <Link href="/privacy" className="hover:text-blue-600 transition">
              {t('privacy')}
            </Link>
            <Link href="/terms" className="hover:text-blue-600 transition">
              {t('terms')}
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
