// components/ActionButtons.tsx
'use client';

import { useState } from 'react';

interface ActionButtonsProps {
  className?: string;
  showSaveButton?: boolean;
}

export default function ActionButtons({ className = '', showSaveButton = false }: ActionButtonsProps) {
  const [copied, setCopied] = useState(false);

  const handleShare = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: document.title,
          url: window.location.href
        });
      } catch (error) {
        console.error('Error sharing:', error);
      }
    } else {
      // Fallback para navegadores que no soportan Web Share API
      navigator.clipboard.writeText(window.location.href);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  const handlePrint = () => {
    window.print();
  };

  const handleSave = () => {
    const htmlContent = document.documentElement.outerHTML;
    const blob = new Blob([htmlContent], { type: 'text/html' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `${document.title}.html`;
    a.click();
    URL.revokeObjectURL(url);
  };

  return (
    <div className={`share-buttons flex justify-center space-x-4 ${className}`}>
      <button 
        onClick={handleShare}
        className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors flex items-center space-x-2"
      >
        <span>📤</span>
        <span>{copied ? 'コピーしました!' : '共有する'}</span>
      </button>
      
      <button 
        onClick={handlePrint}
        className="bg-green-600 text-white px-6 py-2 rounded-lg hover:bg-green-700 transition-colors flex items-center space-x-2"
      >
        <span>🖨️</span>
        <span>印刷する</span>
      </button>

      {showSaveButton && (
        <button 
          onClick={handleSave}
          className="bg-purple-600 text-white px-6 py-2 rounded-lg hover:bg-purple-700 transition-colors flex items-center space-x-2"
        >
          <span>💾</span>
          <span>保存する</span>
        </button>
      )}
    </div>
  );
}