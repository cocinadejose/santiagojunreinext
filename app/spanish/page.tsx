'use client';

import Link from 'next/link';

const lessons = [
  { id: 1, title: "レッスン 1: スペイン語の基本的なあいさつ", conversations: 5 },
  { id: 2, title: "レッスン 2: スペイン語の動詞と基本文法", conversations: 3 },
  { id: 3, title: "レッスン 3: 数字と時間の表現", conversations: 3 },
  { id: 4, title: "レッスン 4: 食べ物と飲み物の表現", conversations: 3 },
  { id: 5, title: "レッスン 5: 宿泊と交通の表現", conversations: 4 },
  { id: 6, title: "レッスン 6: 健康と緊急時の表現", conversations: 3 },
  { id: 7, title: "レッスン 7: 道案内と方向の表現", conversations: 4 },
  { id: 8, title: "レッスン 8: 天気と季節の表現", conversations: 4 },
  { id: 9, title: "レッスン 9: 文化と伝統の表現", conversations: 4 },
  { id: 10, title: "レッスン 10: 旅行と観光の表現", conversations: 7 },
  { id: 11, title: "レッスン 11: 巡礼者の会話表現", conversations: 4 },
  { id: 12, title: "レッスン 12: 巡礼の完了と振り返りの表現", conversations: 4 },
  { id: 13, title: "レッスン 13: 買い物と交渉の表現", conversations: 3 },
];

export default function SpanishPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="mb-12">
        <h1 className="text-4xl font-bold mb-4">✏️ スペイン語レッスン</h1>
        <p className="text-lg text-gray-600 mb-8">
          サンティアゴ巡礼のための日本語で学ぶスペイン語。初心者から中級者向けの13レッスンコース。
        </p>
      </div>

      {/* Quick Links */}
      <div className="grid md:grid-cols-3 gap-4 mb-12">
        <Link href="/spanish/pronunciation">
          <div className="bg-blue-50 p-4 rounded-lg border-l-4 border-blue-600 hover:shadow-md transition cursor-pointer">
            <h3 className="font-bold text-lg mb-2">🎤 発音ガイド</h3>
            <p className="text-sm text-gray-600">スペイン語の正しい発音を学びましょう</p>
          </div>
        </Link>
        <Link href="/spanish/vocabulary">
          <div className="bg-green-50 p-4 rounded-lg border-l-4 border-green-600 hover:shadow-md transition cursor-pointer">
            <h3 className="font-bold text-lg mb-2">📚 単語集</h3>
            <p className="text-sm text-gray-600">巡礼に関連する重要な単語を学びます</p>
          </div>
        </Link>
        <Link href="/spanish/phrases">
          <div className="bg-purple-50 p-4 rounded-lg border-l-4 border-purple-600 hover:shadow-md transition cursor-pointer">
            <h3 className="font-bold text-lg mb-2">💬 便利なフレーズ集</h3>
            <p className="text-sm text-gray-600">巡礼で役立つ実用的なフレーズ</p>
          </div>
        </Link>
      </div>

      {/* Lessons Grid */}
      <div className="mb-12">
        <h2 className="text-2xl font-bold mb-6">13レッスンコース</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {lessons.map((lesson) => (
            <Link key={lesson.id} href={`/spanish/lesson/${lesson.id}`}>
              <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow cursor-pointer h-full">
                <div className="text-3xl font-bold text-blue-600 mb-2">
                  レッスン {lesson.id}
                </div>
                <h3 className="text-lg font-bold mb-2">
                  {lesson.title}
                </h3>
                <div className="flex items-center justify-between text-sm text-gray-500">
                  <span>💬 {lesson.conversations} 会話</span>
                  <span className="text-blue-600 font-medium">詳しく見る →</span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>

      {/* Learning Tips */}
      <div className="bg-yellow-50 p-6 rounded-lg border-l-4 border-yellow-600 mb-12">
        <h3 className="font-bold text-lg mb-2">💡 学習のコツ</h3>
        <ul className="text-gray-700 space-y-2">
          <li>• 毎日少しずつ学習することが大切です</li>
          <li>• 発音を何度も練習して、自然な発音を身につけましょう</li>
          <li>• 会話例を暗記することで、実際の場面で使えるようになります</li>
          <li>• 他の巡礼者との交流で、学んだフレーズを実践しましょう</li>
        </ul>
      </div>
    </div>
  );
}
