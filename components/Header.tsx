'use client';

import { useState } from 'react';
import Link from 'next/link';
import {useTranslations} from 'next-intl';
import LanguageSwitcher from './LanguageSwitcher';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const t = useTranslations('Header');

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
            <LanguageSwitcher />
            <Link href="/" className="hover:text-blue-600 transition">
              {t('home')}
            </Link>

            {/* Guide Dropdown */}
            <div className="relative group">
              <button className="hover:text-blue-600 transition py-2">
                {t('guide')} ▼
              </button>
              <div className="absolute left-0 mt-0 w-48 bg-white shadow-lg rounded-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                <Link href="/guide/about" className="block px-4 py-2 hover:bg-gray-100">
                  {t('aboutCamino')}
                </Link>
                <Link href="/guide/tour" className="block px-4 py-2 hover:bg-gray-100">
                  {t('aboutTour')}
                </Link>
                <Link href="/guide/stages" className="block px-4 py-2 hover:bg-gray-100">
                  {t('stages')}
                </Link>
                <Link href="/guide/plans" className="block px-4 py-2 hover:bg-gray-100">
                  {t('planExamples')}
                </Link>
                <Link href="/calendar" className="block px-4 py-2 hover:bg-gray-100">
                  {t('calendar')}
                </Link>
              </div>
            </div>

            {/* Advice Dropdown */}
            <div className="relative group">
              <button className="hover:text-blue-600 transition py-2">
                {t('advice')} ▼
              </button>
              <div className="absolute left-0 mt-0 w-48 bg-white shadow-lg rounded-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                <Link href="/advice/route" className="block px-4 py-2 hover:bg-gray-100">
                  {t('routeAdvice')}
                </Link>
                <Link href="/advice/culture" className="block px-4 py-2 hover:bg-gray-100">
                  {t('culturalPoints')}
                </Link>
                <Link href="/advice/gastronomy" className="block px-4 py-2 hover:bg-gray-100">
                  {t('gastronomy')}
                </Link>
                <Link href="/advice/articles" className="block px-4 py-2 hover:bg-gray-100">
                  {t('articlesAdvice')}
                </Link>
              </div>
            </div>

            {/* Spanish Dropdown */}
            <div className="relative group">
              <button className="hover:text-blue-600 transition py-2">
                {t('spanish')} ▼
              </button>
              <div className="absolute left-0 mt-0 w-48 bg-white shadow-lg rounded-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                <Link href="/spanish" className="block px-4 py-2 hover:bg-gray-100">
                  {t('spanishLessons')}
                </Link>
                <Link href="/spanish/pronunciation" className="block px-4 py-2 hover:bg-gray-100">
                  {t('pronunciationGuide')}
                </Link>
                <Link href="/spanish/vocabulary" className="block px-4 py-2 hover:bg-gray-100">
                  {t('vocabulary')}
                </Link>
                <Link href="/spanish/phrases" className="block px-4 py-2 hover:bg-gray-100">
                  {t('usefulPhrases')}
                </Link>
              </div>
            </div>

            <Link href="/contact" className="hover:text-blue-600 transition">
              {t('contact')}
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
              {t('home')}
            </Link>

            {/* Guide Mobile */}
            <button
              onClick={() => setOpenDropdown(openDropdown === 'guide' ? null : 'guide')}
              className="w-full text-left px-4 py-2 hover:bg-gray-100 rounded flex justify-between items-center"
            >
              {t('guide')}
              <span>{openDropdown === 'guide' ? '▲' : '▼'}</span>
            </button>
            {openDropdown === 'guide' && (
              <div className="pl-4 space-y-1">
                <Link href="/guide/about" className="block px-4 py-2 hover:bg-gray-100 rounded">
                  {t('aboutCamino')}
                </Link>
                <Link href="/guide/tour" className="block px-4 py-2 hover:bg-gray-100 rounded">
                  {t('aboutTour')}
                </Link>
                <Link href="/guide/stages" className="block px-4 py-2 hover:bg-gray-100 rounded">
                  {t('stages')}
                </Link>
                <Link href="/guide/plans" className="block px-4 py-2 hover:bg-gray-100 rounded">
                  {t('planExamples')}
                </Link>
                <Link href="/calendar" className="block px-4 py-2 hover:bg-gray-100 rounded">
                  {t('calendar')}
                </Link>
              </div>
            )}

            {/* Advice Mobile */}
            <button
              onClick={() => setOpenDropdown(openDropdown === 'advice' ? null : 'advice')}
              className="w-full text-left px-4 py-2 hover:bg-gray-100 rounded flex justify-between items-center"
            >
              {t('advice')}
              <span>{openDropdown === 'advice' ? '▲' : '▼'}</span>
            </button>
            {openDropdown === 'advice' && (
              <div className="pl-4 space-y-1">
                <Link href="/advice/route" className="block px-4 py-2 hover:bg-gray-100 rounded">
                  {t('routeAdvice')}
                </Link>
                <Link href="/advice/culture" className="block px-4 py-2 hover:bg-gray-100 rounded">
                  {t('culturalPoints')}
                </Link>
                <Link href="/advice/gastronomy" className="block px-4 py-2 hover:bg-gray-100 rounded">
                  {t('gastronomy')}
                </Link>
                <Link href="/advice/articles" className="block px-4 py-2 hover:bg-gray-100 rounded">
                  {t('articlesAdvice')}
                </Link>
              </div>
            )}

            {/* Spanish Mobile */}
            <button
              onClick={() => setOpenDropdown(openDropdown === 'spanish' ? null : 'spanish')}
              className="w-full text-left px-4 py-2 hover:bg-gray-100 rounded flex justify-between items-center"
            >
              {t('spanish')}
              <span>{openDropdown === 'spanish' ? '▲' : '▼'}</span>
            </button>
            {openDropdown === 'spanish' && (
              <div className="pl-4 space-y-1">
                <Link href="/spanish" className="block px-4 py-2 hover:bg-gray-100 rounded">
                  {t('spanishLessons')}
                </Link>
                <Link href="/spanish/pronunciation" className="block px-4 py-2 hover:bg-gray-100 rounded">
                  {t('pronunciationGuide')}
                </Link>
                <Link href="/spanish/vocabulary" className="block px-4 py-2 hover:bg-gray-100 rounded">
                  {t('vocabulary')}
                </Link>
                <Link href="/spanish/phrases" className="block px-4 py-2 hover:bg-gray-100 rounded">
                  {t('usefulPhrases')}
                </Link>
              </div>
            )}

            <Link href="/contact" className="block px-4 py-2 hover:bg-gray-100 rounded">
              {t('contact')}
            </Link>
            
            {/* Language Switcher Mobile */}
            <div className="px-4 py-2">
              <LanguageSwitcher />
            </div>
          </nav>
        )}
      </div>
    </header>
  );
}
