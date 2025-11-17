'use client';

import Link from 'next/link';
import { useParams } from 'next/navigation';
import { lessons, Lesson } from '../../data/lessons'; // Asegúrate que la ruta es correcta

// ===================================================================
// COMPONENTE PARA RENDERIZAR CADA SECCIÓN DE FORMA DINÁMICA
// ===================================================================
const LessonSectionRenderer = ({ section }: { section: any }) => {
  switch (section.type) {
    case 'conversation':
      return (
        <div className="bg-gray-50 p-6 rounded-lg shadow-sm">
          <h4 className="font-bold text-lg mb-4 text-gray-800">{section.title}</h4>
          <div className="space-y-4 mb-4">
            {section.dialogue.map((line: any, index: number) => (
              <div key={index}>
                <p className="font-semibold text-gray-900">{line.speaker}: <span className="font-normal">{line.sentence}</span></p>
                <p className="text-sm text-gray-500 mt-1">{line.pronunciation}</p>
              </div>
            ))}
          </div>
          <div className="mt-4 pt-4 border-t border-gray-200">
            <h5 className="font-bold text-sm mb-2 text-gray-600">解説:</h5>
            <ul className="list-disc list-inside space-y-2 text-gray-700 text-sm">
              {section.explanation.map((item: string, index: number) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          </div>
        </div>
      );

    case 'vocabulary':
      return (
        <div className="p-6 rounded-lg bg-indigo-50 border-l-4 border-indigo-500">
          <h4 className="font-bold text-lg mb-4 text-gray-800">{section.title}</h4>
          <div className="grid md:grid-cols-2 gap-4">
            {section.items.map((item: any, index: number) => (
              <div key={index} className="bg-white p-3 rounded-md shadow-sm">
                <p className="font-bold text-indigo-800">{item.spanish}</p>
                <p className="text-sm text-gray-600">{item.japanese}</p>
                {item.context && <p className="text-xs text-gray-500 mt-1 italic">({item.context})</p>}
              </div>
            ))}
          </div>
        </div>
      );

    case 'grammar':
      return (
        <div className="p-6 rounded-lg bg-green-50 border-l-4 border-green-500">
          <h4 className="font-bold text-lg mb-4 text-gray-800">{section.title}</h4>
          <p className="text-gray-700 mb-4">{section.introduction}</p>
          <div className="bg-white p-4 rounded-md shadow-sm">
            <h5 className="font-semibold mb-2">{section.conjugation.verb}</h5>
            <ul className="list-disc list-inside space-y-2 text-gray-700 text-sm">
              {section.conjugation.examples.map((ex: string, index: number) => (
                <li key={index}><em className="font-mono">{ex}</em></li>
              ))}
            </ul>
          </div>
        </div>
      );

    case 'exercise':
      return (
        <div className="p-6 rounded-lg bg-yellow-50 border-l-4 border-yellow-500">
          <h4 className="font-bold text-lg mb-4 text-gray-800">{section.title}</h4>
          <p className="text-gray-700 mb-4">{section.introduction}</p>
          <ol className="list-decimal list-inside space-y-2 text-gray-700">
            {section.questions.map((q: string, index: number) => (
              <li key={index}>{q}</li>
            ))}
          </ol>
        </div>
      );

    case 'note':
      return (
        <div className="p-4 rounded-lg bg-gray-100">
          <p className="text-gray-800" dangerouslySetInnerHTML={{ __html: section.content }}></p>
        </div>
      );

    case 'tip':
      return (
        <div className="p-4 rounded-lg bg-blue-50 border-l-4 border-blue-500">
          <p className="text-blue-800" dangerouslySetInnerHTML={{ __html: section.content }}></p>
        </div>
      );

    case 'buen_camino':
        return (
            <div className="text-center p-6 my-6 bg-purple-100 rounded-lg">
                <p className="font-bold text-2xl text-purple-800">{section.content}</p>
            </div>
        );

    default:
      return null;
  }
};


// ===================================================================
// COMPONENTE PRINCIPAL DE LA PÁGINA DE LECCIÓN
// ===================================================================
export default function LessonPage() {
  const params = useParams();
  const lessonId = parseInt(params.id as string);
  const lesson: Lesson | undefined = lessons.find(l => l.id === lessonId);

  if (!lesson) {
    return (
      <div className="container mx-auto px-4 py-12">
        <p className="text-center text-gray-600">レッスンが見つかりません</p>
      </div>
    );
  }

  const prevLesson = lessons.find(l => l.id === lessonId - 1);
  const nextLesson = lessons.find(l => l.id === lessonId + 1);

  return (
    <div className="container mx-auto px-4 py-12">
      {/* Breadcrumb */}
      <div className="mb-6 text-sm text-gray-600">
        <Link href="/spanish" className="hover:text-blue-600">
          スペイン語レッスン
        </Link>
        <span className="mx-2">/</span>
        <span>{lesson.title}</span>
      </div>

      {/* Lesson Header */}
      <div className="mb-8">
        <div className="text-blue-600 font-bold text-lg mb-2">
          レッスン {lesson.id}
        </div>
        <h1 className="text-4xl font-bold mb-4">{lesson.title}</h1>
        <div className="flex items-center gap-4 text-sm text-gray-500">
          <span>💬 {lesson.conversationCount} 会話</span>
          <span>⏱️ 約15分</span>
        </div>
      </div>

      {/* Progress Bar */}
      <div className="mb-8">
        <div className="w-full bg-gray-200 rounded-full h-2">
          <div
            className="bg-blue-600 h-2 rounded-full transition-all"
            style={{ width: `${(lessonId / lessons.length) * 100}%` }}
          ></div>
        </div>
        <p className="text-sm text-gray-600 mt-2">
          {lessonId} / {lessons.length} レッスン完了
        </p>
      </div>

      {/* Main Content */}
      <div className="bg-white rounded-lg shadow-md p-8 mb-12">
        <h2 className="text-2xl font-bold mb-4">レッスン内容</h2>
        <p className="text-gray-700 mb-6">{lesson.introduction}</p>

        <div className="bg-blue-50 p-4 rounded-lg border-l-4 border-blue-600 mb-8">
          <p className="text-gray-700">
            <strong>💡 ヒント:</strong> {lesson.mainTip}
          </p>
        </div>

        {/* Renderizador dinámico de secciones */}
        <div className="space-y-8">
          {lesson.sections && lesson.sections.length > 0 ? (
            lesson.sections.map((section, index) => (
              <LessonSectionRenderer key={index} section={section} />
            ))
          ) : (
            <p className="text-gray-600">このレッスンの内容は現在準備中です。</p>
          )}
        </div>

        <div className="bg-green-50 p-4 rounded-lg border-l-4 border-green-600 mt-8">
          <p className="text-gray-700">
            <strong>✅ 完了:</strong> このレッスンを完了しました。次のレッスンに進みましょう！
          </p>
        </div>
      </div>

      {/* Navigation */}
      <div className="flex justify-between items-center mb-12">
        {prevLesson ? (
          <Link href={`/spanish/lesson/${prevLesson.id}`}>
            <div className="bg-gray-100 hover:bg-gray-200 p-4 rounded-lg transition cursor-pointer">
              <p className="text-sm text-gray-600">← 前のレッスン</p>
              <p className="font-bold">レッスン {prevLesson.id}</p>
            </div>
          </Link>
        ) : (
          <div></div>
        )}

        <Link href="/spanish">
          <button className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition">
            レッスン一覧に戻る
          </button>
        </Link>

        {nextLesson ? (
          <Link href={`/spanish/lesson/${nextLesson.id}`}>
            <div className="bg-blue-600 text-white hover:bg-blue-700 p-4 rounded-lg transition cursor-pointer">
              <p className="text-sm">次のレッスン →</p>
              <p className="font-bold">レッスン {nextLesson.id}</p>
            </div>
          </Link>
        ) : (
          <div></div>
        )}
      </div>

      {/* Course Overview */}
      <div className="bg-purple-50 p-6 rounded-lg border-l-4 border-purple-600">
        <h3 className="font-bold text-lg mb-4">🎓 コース進捗</h3>
        <div className="grid md:grid-cols-4 gap-4">
          {lessons.map((l) => (
            <Link key={l.id} href={`/spanish/lesson/${l.id}`}>
              <div
                className={`p-3 rounded-lg text-center cursor-pointer transition ${
                  l.id === lessonId
                    ? 'bg-blue-600 text-white font-bold'
                    : 'bg-white text-gray-700 hover:bg-gray-100'
                }`}
              >
                <p className="text-sm">レッスン {l.id}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
