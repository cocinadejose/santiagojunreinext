'use client';

import { useState, useEffect } from 'react';
import Carousel from '@/components/Carousel';
import Card from '@/components/Card';
import Link from 'next/link';
import {useTranslations} from 'next-intl';

export default function Home() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const t = useTranslations('Home');

  const images = [
    '/images/hero-1.avif',
    '/images/hero-2.avif',
    '/images/hero-3.avif',
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <div className="min-h-screen">
      {/* Hero Section with Carousel */}
      <Carousel images={images} currentIndex={currentIndex} />

      {/* Quick Access Section */}
      <section className="py-12 px-4 bg-gray-50">
        <div className="container mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <Link href="/guide/about" className="text-center p-4 hover:bg-white rounded-lg transition">
              <div className="text-3xl mb-2">📖</div>
              <p className="text-sm font-medium">{t('quickAccess.guideAbout')}</p>
            </Link>
            <Link href="/advice/gastronomy" className="text-center p-4 hover:bg-white rounded-lg transition">
              <div className="text-3xl mb-2">🍲</div>
              <p className="text-sm font-medium">{t('quickAccess.gastronomy')}</p>
            </Link>
            <Link href="/spanish" className="text-center p-4 hover:bg-white rounded-lg transition">
              <div className="text-3xl mb-2">✏️</div>
              <p className="text-sm font-medium">{t('quickAccess.spanish')}</p>
            </Link>
            <Link href="/faq" className="text-center p-4 hover:bg-white rounded-lg transition">
              <div className="text-3xl mb-2">❓</div>
              <p className="text-sm font-medium">{t('quickAccess.faq')}</p>
            </Link>
          </div>
        </div>
      </section>

      {/* Latest News Section */}
      <section className="py-12 px-4">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold mb-8 text-center">{t('latestNews.title')}</h2>
          <p className="text-center text-gray-600 mb-8">
            {t('latestNews.description')}
          </p>
        </div>
      </section>

      {/* Tools Section */}
      <section className="py-12 px-4 bg-gray-50">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold mb-8 text-center">{t('tools.title')}</h2>
          <p className="text-center text-gray-600 mb-8">
            {t('tools.description')}
          </p>
          <div className="grid md:grid-cols-3 gap-6">
            <Card
              title={t('tools.restaurant.title')}
              description={t('tools.restaurant.description')}
              icon="🍽️"
              link="/interactive/camino"
            />
            <Card
              title={t('tools.onTheWay.title')}
              description={t('tools.onTheWay.description')}
              icon="🛣️"
              link="/interactive/camino"
            />
            <Card
              title={t('tools.albergue.title')}
              description={t('tools.albergue.description')}
              icon="🏨"
              link="/interactive/camino"
            />
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-12 px-4">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold mb-8 text-center">{t('faq.title')}</h2>
          <p className="text-center text-gray-600 mb-8">
            {t('faq.description')}
          </p>
          <div className="text-center">
            <Link href="/faq" className="inline-block px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition">
              {t('faq.viewFaq')}
            </Link>
          </div>
        </div>
      </section>

      {/* Categories Section */}
      <section className="py-12 px-4 bg-gray-50">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold mb-8 text-center">{t('categories.title')}</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h3 className="font-bold mb-4">{t('categories.tourOverview')}</h3>
              <ul className="space-y-2 text-sm">
                <li><Link href="/guide/about" className="text-blue-600 hover:underline">{t('categories.tourOverview')}</Link></li>
                <li><Link href="/guide/stages" className="text-blue-600 hover:underline">{t('categories.routeDetails')}</Link></li>
                <li><Link href="/guide/plans" className="text-blue-600 hover:underline">{t('categories.travelPlans')}</Link></li>
                <li><Link href="/calendar" className="text-blue-600 hover:underline">Calendar</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold mb-4">{t('categories.spanishLessons')}</h3>
              <ul className="space-y-2 text-sm">
                <li><Link href="/spanish" className="text-blue-600 hover:underline">{t('categories.spanishLessons')}</Link></li>
                <li><Link href="/spanish/pronunciation" className="text-blue-600 hover:underline">Pronunciation</Link></li>
                <li><Link href="/spanish/vocabulary" className="text-blue-600 hover:underline">Vocabulary</Link></li>
                <li><Link href="/spanish/phrases" className="text-blue-600 hover:underline">Useful Phrases</Link></li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
