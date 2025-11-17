'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);

  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2">
            <div className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold">
              SJ
            </div>
            <span className="font-bold text-lg hidden sm:inline">Santiago Junrei</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-6">
            <Link href="/" className="hover:text-blue-600 transition">
              ホーム
            </Link>

            {/* Guide Dropdown */}
            <div className="relative group">
              <button className="hover:text-blue-600 transition py-2">
                ガイド ▼
              </button>
              <div className="absolute left-0 mt-0 w-48 bg-white shadow-lg rounded-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                <Link href="/guide/about" className="block px-4 py-2 hover:bg-gray-100">
                  カミーノについて
                </Link>
                <Link href="/guide/tour" className="block px-4 py-2 hover:bg-gray-100">
                  このツアーについて
                </Link>
                <Link href="/guide/stages" className="block px-4 py-2 hover:bg-gray-100">
                  各エタパ
                </Link>
                <Link href="/guide/plans" className="block px-4 py-2 hover:bg-gray-100">
                  プラン例
                </Link>
                <Link href="/calendar" className="block px-4 py-2 hover:bg-gray-100">
                  カレンダー
                </Link>
              </div>
            </div>

            {/* Advice Dropdown */}
            <div className="relative group">
              <button className="hover:text-blue-600 transition py-2">
                アドバイス ▼
              </button>
              <div className="absolute left-0 mt-0 w-48 bg-white shadow-lg rounded-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                <Link href="/advice/route" className="block px-4 py-2 hover:bg-gray-100">
                  ルートアドバイス
                </Link>
                <Link href="/advice/culture" className="block px-4 py-2 hover:bg-gray-100">
                  文化的ポイント
                </Link>
                <Link href="/advice/gastronomy" className="block px-4 py-2 hover:bg-gray-100">
                  巡礼グルメ
                </Link>
                <Link href="/advice/articles" className="block px-4 py-2 hover:bg-gray-100">
                  アドバイスと記事
                </Link>
              </div>
            </div>

            {/* Spanish Dropdown */}
            <div className="relative group">
              <button className="hover:text-blue-600 transition py-2">
                スペイン語 ▼
              </button>
              <div className="absolute left-0 mt-0 w-48 bg-white shadow-lg rounded-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                <Link href="/spanish" className="block px-4 py-2 hover:bg-gray-100">
                  スペイン語レッスン
                </Link>
                <Link href="/spanish/pronunciation" className="block px-4 py-2 hover:bg-gray-100">
                  発音ガイド
                </Link>
                <Link href="/spanish/vocabulary" className="block px-4 py-2 hover:bg-gray-100">
                  単語集
                </Link>
                <Link href="/spanish/phrases" className="block px-4 py-2 hover:bg-gray-100">
                  便利なフレーズ集
                </Link>
              </div>
            </div>

            <Link href="/contact" className="hover:text-blue-600 transition">
              お問い合わせ
            </Link>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2"
            onClick={() => setIsOpen(!isOpen)}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <nav className="md:hidden pb-4 space-y-2">
            <Link href="/" className="block px-4 py-2 hover:bg-gray-100 rounded">
              ホーム
            </Link>

            {/* Guide Mobile */}
            <button
              onClick={() => setOpenDropdown(openDropdown === 'guide' ? null : 'guide')}
              className="w-full text-left px-4 py-2 hover:bg-gray-100 rounded flex justify-between items-center"
            >
              ガイド
              <span>{openDropdown === 'guide' ? '▲' : '▼'}</span>
            </button>
            {openDropdown === 'guide' && (
              <div className="pl-4 space-y-1">
                <Link href="/guide/about" className="block px-4 py-2 hover:bg-gray-100 rounded">
                  カミーノについて
                </Link>
                <Link href="/guide/tour" className="block px-4 py-2 hover:bg-gray-100 rounded">
                  このツアーについて
                </Link>
                <Link href="/guide/stages" className="block px-4 py-2 hover:bg-gray-100 rounded">
                  各エタパ
                </Link>
                <Link href="/guide/plans" className="block px-4 py-2 hover:bg-gray-100 rounded">
                  プラン例
                </Link>
                <Link href="/calendar" className="block px-4 py-2 hover:bg-gray-100 rounded">
                  カレンダー
                </Link>
              </div>
            )}

            {/* Advice Mobile */}
            <button
              onClick={() => setOpenDropdown(openDropdown === 'advice' ? null : 'advice')}
              className="w-full text-left px-4 py-2 hover:bg-gray-100 rounded flex justify-between items-center"
            >
              アドバイス
              <span>{openDropdown === 'advice' ? '▲' : '▼'}</span>
            </button>
            {openDropdown === 'advice' && (
              <div className="pl-4 space-y-1">
                <Link href="/advice/route" className="block px-4 py-2 hover:bg-gray-100 rounded">
                  ルートアドバイス
                </Link>
                <Link href="/advice/culture" className="block px-4 py-2 hover:bg-gray-100 rounded">
                  文化的ポイント
                </Link>
                <Link href="/advice/gastronomy" className="block px-4 py-2 hover:bg-gray-100 rounded">
                  巡礼グルメ
                </Link>
                <Link href="/advice/articles" className="block px-4 py-2 hover:bg-gray-100 rounded">
                  アドバイスと記事
                </Link>
              </div>
            )}

            {/* Spanish Mobile */}
            <button
              onClick={() => setOpenDropdown(openDropdown === 'spanish' ? null : 'spanish')}
              className="w-full text-left px-4 py-2 hover:bg-gray-100 rounded flex justify-between items-center"
            >
              スペイン語
              <span>{openDropdown === 'spanish' ? '▲' : '▼'}</span>
            </button>
            {openDropdown === 'spanish' && (
              <div className="pl-4 space-y-1">
                <Link href="/spanish" className="block px-4 py-2 hover:bg-gray-100 rounded">
                  スペイン語レッスン
                </Link>
                <Link href="/spanish/pronunciation" className="block px-4 py-2 hover:bg-gray-100 rounded">
                  発音ガイド
                </Link>
                <Link href="/spanish/vocabulary" className="block px-4 py-2 hover:bg-gray-100 rounded">
                  単語集
                </Link>
                <Link href="/spanish/phrases" className="block px-4 py-2 hover:bg-gray-100 rounded">
                  便利なフレーズ集
                </Link>
              </div>
            )}

            <Link href="/contact" className="block px-4 py-2 hover:bg-gray-100 rounded">
              お問い合わせ
            </Link>
          </nav>
        )}
      </div>
    </header>
  );
}
