'use client';

import { usePathname, useRouter } from 'next/navigation';
import { useState } from 'react';

const languages = [
  { code: 'ja', name: '日本語', flag: '🇯🇵' },
  { code: 'en', name: 'English', flag: '🇬🇧' },
  { code: 'es', name: 'Español', flag: '🇪🇸' },
  { code: 'pt', name: 'Português', flag: '🇵🇹' },
  { code: 'fr', name: 'Français', flag: '🇫🇷' },
  { code: 'it', name: 'Italiano', flag: '🇮🇹' },
  { code: 'de', name: 'Deutsch', flag: '🇩🇪' },
  { code: 'ko', name: '한국어', flag: '🇰🇷' },
  { code: 'zh', name: '中文', flag: '🇨🇳' },
];

export default function LanguageSwitcher() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();
  const router = useRouter();

  // Obtener el idioma actual de la URL
  const currentLocale = pathname.split('/')[1] || 'ja';
  const currentLanguage = languages.find(lang => lang.code === currentLocale) || languages[0];

  const switchLanguage = (newLocale: string) => {
    // Reemplazar el locale en la URL actual
    const segments = pathname.split('/');
    segments[1] = newLocale;
    const newPath = segments.join('/');
    
    router.push(newPath);
    setIsOpen(false);
  };

  return (
    <div className="relative">
      {/* Botón del selector */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-2 px-3 py-2 rounded-lg hover:bg-gray-100 transition"
        aria-label="Cambiar idioma"
      >
        <span className="text-xl">{currentLanguage.flag}</span>
        <span className="hidden sm:inline text-sm font-medium">{currentLanguage.name}</span>
        <svg 
          className={`w-4 h-4 transition-transform ${isOpen ? 'rotate-180' : ''}`} 
          fill="none" 
          stroke="currentColor" 
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </button>

      {/* Menú desplegable */}
      {isOpen && (
        <>
          {/* Overlay para cerrar al hacer clic fuera */}
          <div 
            className="fixed inset-0 z-10" 
            onClick={() => setIsOpen(false)}
          />
          
          {/* Lista de idiomas */}
          <div className="absolute right-0 mt-2 w-48 bg-white rounded-lg shadow-lg border border-gray-200 py-2 z-20">
            {languages.map((lang) => (
              <button
                key={lang.code}
                onClick={() => switchLanguage(lang.code)}
                className={`w-full flex items-center gap-3 px-4 py-2 hover:bg-gray-100 transition ${
                  lang.code === currentLocale ? 'bg-blue-50 text-blue-600' : ''
                }`}
              >
                <span className="text-xl">{lang.flag}</span>
                <span className="text-sm font-medium">{lang.name}</span>
                {lang.code === currentLocale && (
                  <svg className="w-4 h-4 ml-auto" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                )}
              </button>
            ))}
          </div>
        </>
      )}
    </div>
  );
}
