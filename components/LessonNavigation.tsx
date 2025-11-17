// components/LessonNavigation.tsx
import Link from 'next/link';

interface LessonNavigationProps {
  prevHref?: string;
  prevText?: string;
  nextHref?: string;
  nextText?: string;
  showHome?: boolean;
}

export default function LessonNavigation({ 
  prevHref = '/spanish', 
  prevText = 'レッスン一覧へ',
  nextHref = '/spanish/pronunciation',
  nextText = '発音ガイドへ',
  showHome = true
}: LessonNavigationProps) {
  return (
    <div className="lesson-navigation flex justify-between mt-12">
      <div className="flex space-x-4">
        {showHome && (
          <Link 
            href="/spanish" 
            className="bg-gray-600 text-white px-6 py-2 rounded-lg hover:bg-gray-700 transition-colors"
          >
            ← レッスン一覧
          </Link>
        )}
        {prevHref && (
          <Link 
            href={prevHref} 
            className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors"
          >
            ← {prevText}
          </Link>
        )}
      </div>
      
      {nextHref && (
        <Link 
          href={nextHref} 
          className="bg-green-600 text-white px-6 py-2 rounded-lg hover:bg-green-700 transition-colors"
        >
          {nextText} →
        </Link>
      )}
    </div>
  );
}