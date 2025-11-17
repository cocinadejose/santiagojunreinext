'use client';

import Link from 'next/link';

interface CardProps {
  title: string;
  description: string;
  icon?: string;
  link: string;
}

export default function Card({ title, description, icon, link }: CardProps) {
  return (
    <Link href={link}>
      <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow cursor-pointer h-full">
        {icon && <div className="text-4xl mb-4">{icon}</div>}
        <h3 className="text-xl font-bold mb-2">{title}</h3>
        <p className="text-gray-600 text-sm">{description}</p>
        <div className="mt-4 text-blue-600 font-medium text-sm">
          詳しく見る →
        </div>
      </div>
    </Link>
  );
}
