'use client';

import { useState, useEffect } from 'react';
import Carousel from '@/components/Carousel';
import Card from '@/components/Card';
import Link from 'next/link';

export default function Home() {
  const [currentIndex, setCurrentIndex] = useState(0);

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
              <p className="text-sm font-medium">ガイドについて</p>
            </Link>
            <Link href="/advice/gastronomy" className="text-center p-4 hover:bg-white rounded-lg transition">
              <div className="text-3xl mb-2">🍲</div>
              <p className="text-sm font-medium">グルメ</p>
            </Link>
            <Link href="/spanish" className="text-center p-4 hover:bg-white rounded-lg transition">
              <div className="text-3xl mb-2">✏️</div>
              <p className="text-sm font-medium">スペイン語</p>
            </Link>
            <Link href="/faq" className="text-center p-4 hover:bg-white rounded-lg transition">
              <div className="text-3xl mb-2">❓</div>
              <p className="text-sm font-medium">FAQ</p>
            </Link>
          </div>
        </div>
      </section>

      {/* Latest News Section */}
      <section className="py-12 px-4">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold mb-8 text-center">最新記事</h2>
          <p className="text-center text-gray-600 mb-8">
            このセクションには、最新のニュース、スペイン巡礼に関するイベント情報、その他のコンテンツを紹介します。
          </p>
        </div>
      </section>

      {/* Tools Section */}
      <section className="py-12 px-4 bg-gray-50">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold mb-8 text-center">チェックツール</h2>
          <p className="text-center text-gray-600 mb-8">
            巡礼の道中で役立つスペイン語フレーズの基本的なレッスン。
          </p>
          <div className="grid md:grid-cols-3 gap-6">
            <Card
              title="レストランで"
              description="レストランで役立つスペイン語フレーズを学びます。"
              icon="🍽️"
              link="/interactive/camino"
            />
            <Card
              title="巡礼の途中で"
              description="巡礼中に役立つスペイン語フレーズを学びます。"
              icon="🛣️"
              link="/interactive/camino"
            />
            <Card
              title="アルベルゲで"
              description="アルベルゲで役立つスペイン語フレーズを学びます。"
              icon="🏨"
              link="/interactive/camino"
            />
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-12 px-4">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold mb-8 text-center">よくある質問</h2>
          <p className="text-center text-gray-600 mb-8">
            サンティアゴ巡礼に関するよくある質問を、カテゴリー別にまとめました。詳細はFAQページをご覧ください。
          </p>
          <div className="text-center">
            <Link href="/faq" className="inline-block px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition">
              FAQを見る
            </Link>
          </div>
        </div>
      </section>

      {/* Categories Section */}
      <section className="py-12 px-4 bg-gray-50">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold mb-8 text-center">主な類別</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h3 className="font-bold mb-4">ツアー概要</h3>
              <ul className="space-y-2 text-sm">
                <li><Link href="/guide/about" className="text-blue-600 hover:underline">ツアー概要</Link></li>
                <li><Link href="/guide/stages" className="text-blue-600 hover:underline">ルートと詳細</Link></li>
                <li><Link href="/guide/plans" className="text-blue-600 hover:underline">旅のプラン</Link></li>
                <li><Link href="/calendar" className="text-blue-600 hover:underline">カレンダー</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold mb-4">スペイン語レッスン</h3>
              <ul className="space-y-2 text-sm">
                <li><Link href="/spanish" className="text-blue-600 hover:underline">スペイン語レッスン</Link></li>
                <li><Link href="/spanish/pronunciation" className="text-blue-600 hover:underline">発音ガイド</Link></li>
                <li><Link href="/spanish/vocabulary" className="text-blue-600 hover:underline">スペイン語単語集</Link></li>
                <li><Link href="/spanish/phrases" className="text-blue-600 hover:underline">便利なフレーズ集</Link></li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
