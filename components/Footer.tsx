'use client';

import Link from 'next/link';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-800 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* About Section */}
          <div>
            <h3 className="font-bold text-lg mb-4">Santiago Junrei</h3>
            <p className="text-gray-300 text-sm">
              サンティアゴ巡礼のプライベートツアーガイド。スペイン、ガリシア地方での忘れられない体験をお手伝いします。
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-bold text-lg mb-4">メニュー</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/" className="text-gray-300 hover:text-white transition">
                  ホーム
                </Link>
              </li>
              <li>
                <Link href="/guide/about" className="text-gray-300 hover:text-white transition">
                  ガイドについて
                </Link>
              </li>
              <li>
                <Link href="/spanish" className="text-gray-300 hover:text-white transition">
                  スペイン語レッスン
                </Link>
              </li>
              <li>
                <Link href="/faq" className="text-gray-300 hover:text-white transition">
                  よくある質問
                </Link>
              </li>
            </ul>
          </div>

          {/* Legal Links */}
          <div>
            <h3 className="font-bold text-lg mb-4">法的情報</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/contact" className="text-gray-300 hover:text-white transition">
                  お問い合わせ
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-gray-300 hover:text-white transition">
                  ガイドについて
                </Link>
              </li>
              <li>
                <Link href="/terms" className="text-gray-300 hover:text-white transition">
                  利用規約
                </Link>
              </li>
              <li>
                <Link href="/privacy" className="text-gray-300 hover:text-white transition">
                  プライバシーポリシー
                </Link>
              </li>
              <li>
                <Link href="/cancellation" className="text-gray-300 hover:text-white transition">
                  キャンセルポリシー
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-700 pt-8">
          <p className="text-center text-gray-400 text-sm">
            © {currentYear} santiagojunrei.com - プライバシーポリシー・すべての利用規約に基づいています。
          </p>
        </div>
      </div>
    </footer>
  );
}
