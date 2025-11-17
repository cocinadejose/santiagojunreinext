// Reemplaza todo el contenido de app/spanish/pronunciation/page.tsx con este código

import Link from 'next/link';
import ActionButtons from '@/components/ActionButtons'; // ← Importar
import LessonNavigation from '@/components/LessonNavigation'; // ← Importar
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: {
    default: "スペイン語発音ガイド",
    template: "%s | サンティアゴ巡礼ガイド"
  },
  description: "サンティアゴ巡礼に役立つスペイン語の発音を日本語話者向けに詳細解説。アルファベット、母音、子音、アクセント規則から地域別の発音の違いまで、実際の会話で使える発音テクニックを学びます。",
  keywords: ["スペイン語 発音", "サンティアゴ 巡礼 会話", "日本語話者 スペイン語 発音", "スペイン語 アルファベット", "ガリシア 発音", "スペイン語 アクセント", "ペレグリノ 会話"],
  authors: [{ name: "Santiago Junrei" }],
  creator: "Santiago Junrei",
  publisher: "Santiago Junrei",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://santiagojunrei.com'),
  alternates: {
    canonical: '/spanish/pronunciation',
    languages: {
      'ja': '/spanish/pronunciation',
    },
  },
  openGraph: {
    title: "スペイン語発音ガイド｜サンティアゴ巡礼で通じる発音テクニック",
    description: "日本人巡礼者向けスペイン語発音完全ガイド。アルファベットから実践フレーズまで、現地で確実に通じる発音をマスター。",
    url: 'https://santiagojunrei.com/spanish/pronunciation',
    siteName: 'サンティアゴ巡礼ガイド',
    locale: 'ja_JP',
    type: 'article',
    publishedTime: '2025-01-20',
    modifiedTime: '2025-01-20',
    images: [
      {
        url: '/og/pronunciation-og.jpg',
        width: 1200,
        height: 630,
        alt: 'スペイン語発音ガイド - サンティアゴ巡礼ガイド',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: "スペイン語発音ガイド｜サンティアゴ巡礼で通じる発音テクニック",
    description: "日本人巡礼者向けスペイン語発音完全ガイド。アルファベットから実践フレーズまで、現地で確実に通じる発音をマスター。",
    creator: '@santiagojunrei',
    images: ['/og/pronunciation-og.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};
// Componente de datos estructurados para pronunciación
function PronunciationStructuredData() {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: 'スペイン語発音ガイド｜サンティアゴ巡礼で通じる発音テクニック',
    description: '日本人巡礼者向けスペイン語発音完全ガイド。アルファベットから実践フレーズまで、現地で確実に通じる発音をマスター。',
    datePublished: '2025-01-20T00:00:00+09:00',
    dateModified: '2025-01-20T00:00:00+09:00',
    author: {
      '@type': 'Organization',
      name: 'Santiago Junrei',
      url: 'https://santiagojunrei.com'
    },
    publisher: {
      '@type': 'Organization',
      name: 'Santiago Junrei',
      logo: {
        '@type': 'ImageObject',
        url: 'https://santiagojunrei.com/logo.png'
      }
    },
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': 'https://santiagojunrei.com/spanish/pronunciation'
    },
    breadcrumb: {
      '@type': 'BreadcrumbList',
      itemListElement: [
        {
          '@type': 'ListItem',
          position: 1,
          name: 'ホーム',
          item: 'https://santiagojunrei.com'
        },
        {
          '@type': 'ListItem',
          position: 2,
          name: 'スペイン語レッスン',
          item: 'https://santiagojunrei.com/spanish'
        },
        {
          '@type': 'ListItem',
          position: 3,
          name: 'スペイン語発音ガイド',
          item: 'https://santiagojunrei.com/spanish/pronunciation'
        }
      ]
    }
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

// --- DATOS PARA LAS TABLAS (PARA UN CÓDIGO MÁS LIMPIO) ---

const alphabetData = [
  { letter: 'A', name: 'a', pronunciation: 'ア', description: '日本語の「ア」とほぼ同じ' },
  { letter: 'B', name: 'be', pronunciation: 'ベ', description: '単語の始めでは「ベ」、母音の間では「ブ」に近い柔らかい音' },
  { letter: 'C', name: 'ce', pronunciation: 'セ', description: 'a, o, u の前では「カ、コ、ク」、e, i の前では「セ、シ」' },
  { letter: 'D', name: 'de', pronunciation: 'デ', description: '単語の始めでは「デ」、母音の間では「ズ」に近い柔らかい音' },
  { letter: 'E', name: 'e', pronunciation: 'エ', description: '日本語の「エ」とほぼ同じ' },
  { letter: 'F', name: 'efe', pronunciation: 'エフェ', description: '日本語の「フ」より唇を強く閉じる' },
  { letter: 'G', name: 'ge', pronunciation: 'ヘ', description: 'a, o, u の前では「ガ、ゴ、グ」、e, i の前では喉から出す「ヘ」' },
  { letter: 'H', name: 'hache', pronunciation: 'アチェ', description: '発音しない（無音）' },
  { letter: 'I', name: 'i', pronunciation: 'イ', description: '日本語の「イ」とほぼ同じ' },
  { letter: 'J', name: 'jota', pronunciation: 'ホタ', description: '喉から出す「ホ」の音（ドイツ語の ch に近い）' },
  { letter: 'K', name: 'ka', pronunciation: 'カ', description: '外来語にのみ使用、「カ」と発音' },
  { letter: 'L', name: 'ele', pronunciation: 'エレ', description: '日本語の「ル」より舌先を歯茎につける' },
  { letter: 'M', name: 'eme', pronunciation: 'エメ', description: '日本語の「ム」と同様' },
  { letter: 'N', name: 'ene', pronunciation: 'エネ', description: '日本語の「ン」と同様' },
  { letter: 'Ñ', name: 'eñe', pronunciation: 'エニェ', description: '「ニャ行」の子音に近い（「ニ」と「ヤ」の中間）' },
  { letter: 'O', name: 'o', pronunciation: 'オ', description: '日本語の「オ」とほぼ同じ' },
  { letter: 'P', name: 'pe', pronunciation: 'ペ', description: '日本語の「プ」より破裂音が強い' },
  { letter: 'Q', name: 'cu', pronunciation: 'ク', description: '常に u と共に使われ、「ク」と発音' },
  { letter: 'R', name: 'ere', pronunciation: 'エレ', description: '舌先を振動させる（単巻き舌）' },
  { letter: 'S', name: 'ese', pronunciation: 'エセ', description: '日本語の「ス」より摩擦が強い' },
  { letter: 'T', name: 'te', pronunciation: 'テ', description: '日本語の「ト」より破裂音が強い' },
  { letter: 'U', name: 'u', pronunciation: 'ウ', description: '日本語の「ウ」より唇を丸める' },
  { letter: 'V', name: 'uve', pronunciation: 'ウベ', description: 'B とほぼ同じ発音（スペインでは区別しない）' },
  { letter: 'W', name: 'uve doble', pronunciation: 'ウベ ドブレ', description: '外来語にのみ使用、「ウ」と発音' },
  { letter: 'X', name: 'equis', pronunciation: 'エキス', description: '「クス」または「ス」と発音' },
  { letter: 'Y', name: 'ye', pronunciation: 'イェ', description: '子音として使うと「ヤ行」の子音、単独では「イ」' },
  { letter: 'Z', name: 'zeta', pronunciation: 'セタ', description: 'スペインでは「サ行」の子音より前歯で発音、ラテンアメリカでは「サ行」と同じ' },
];

const vowelData = [
    { vowel: 'A', pronunciation: 'ア', description: '日本語の「ア」とほぼ同じ', example: 'casa（カサ：家）' },
    { vowel: 'E', pronunciation: 'エ', description: '日本語の「エ」とほぼ同じ', example: 'peregrino（ペレグリノ：巡礼者）' },
    { vowel: 'I', pronunciation: 'イ', description: '日本語の「イ」とほぼ同じ', example: 'camino（カミノ：道）' },
    { vowel: 'O', pronunciation: 'オ', description: '日本語の「オ」とほぼ同じ', example: 'hola（オラ：こんにちは）' },
    { vowel: 'U', pronunciation: 'ウ', description: '日本語の「ウ」より唇を丸める', example: 'uno（ウノ：1）' },
];

const diphthongData = [
    { diphthong: 'ai, ay', pronunciation: 'アイ', example: 'baile（バイレ：ダンス）' },
    { diphthong: 'ei, ey', pronunciation: 'エイ', example: 'reina（レイナ：女王）' },
    { diphthong: 'oi, oy', pronunciation: 'オイ', example: 'hoy（オイ：今日）' },
    { diphthong: 'au', pronunciation: 'アウ', example: 'causa（カウサ：原因）' },
    { diphthong: 'eu', pronunciation: 'エウ', example: 'Europa（エウロパ：ヨーロッパ）' },
    { diphthong: 'ia', pronunciation: 'イア', example: 'familia（ファミリア：家族）' },
    { diphthong: 'ie', pronunciation: 'イエ', example: 'tiempo（ティエンポ：時間）' },
    { diphthong: 'io', pronunciation: 'イオ', example: 'adios（アディオス：さようなら）' },
    { diphthong: 'iu', pronunciation: 'イウ', example: 'ciudad（シウダッ：都市）' },
    { diphthong: 'ua', pronunciation: 'ウア', example: 'agua（アグア：水）' },
    { diphthong: 'ue', pronunciation: 'ウエ', example: 'bueno（ブエノ：良い）' },
    { diphthong: 'ui, uy', pronunciation: 'ウイ', example: 'muy（ムイ：とても）' },
    { diphthong: 'uo', pronunciation: 'ウオ', example: 'cuota（クオタ：割当）' },
];

const consonantData = [
    { consonant: 'B / V', description: 'スペイン語では B と V は同じ発音。単語の始めでは「ベ」、母音の間では唇を軽く閉じる柔らかい音（「ブ」に近い）', example: 'buen（ブエン：良い）、vino（ビノ：ワイン）' },
    { consonant: 'C', description: 'a, o, u の前では「カ、コ、ク」、e, i の前では「セ、シ」（スペインでは「th」に近い音）', example: 'casa（カサ：家）、centro（セントロ/スペインではthentro：中心）' },
    { consonant: 'CH', description: '日本語の「チ」に近い音', example: 'mucho（ムチョ：多い）' },
    { consonant: 'D', description: '単語の始めでは「デ」、母音の間では「ズ」に近い柔らかい音', example: 'día（ディア：日）、nada（ナザ：何も〜ない）' },
    { consonant: 'G', description: 'a, o, u の前では「ガ、ゴ、グ」、e, i の前では喉から出す「ヘ」（J と同じ発音）', example: 'gato（ガト：猫）、gente（ヘンテ：人々）' },
    { consonant: 'GU', description: 'e, i の前で「グ」と発音するために使用', example: 'guerra（ゲラ：戦争）、guía（ギア：ガイド）' },
    { consonant: 'H', description: '常に無音（発音しない）', example: 'hola（オラ：こんにちは）、hora（オラ：時間）' },
    { consonant: 'J', description: '喉から出す「ホ」の音（ドイツ語の ch に近い）', example: 'trabajo（トラバホ：仕事）' },
    { consonant: 'LL', description: '「イ」または「ヤ行」の子音に近い音（地域によって異なる）', example: 'llamar（ヤマール/イャマール：呼ぶ）' },
    { consonant: 'Ñ', description: '「ニャ行」の子音に近い（「ニ」と「ヤ」の中間）', example: 'España（エスパーニャ：スペイン）' },
    { consonant: 'QU', description: '常に「ク」と発音（u は発音しない）', example: 'que（ケ：〜が）、quién（キエン：誰）' },
    { consonant: 'R', description: '単語の中では軽い巻き舌、単語の始めや rr では強い巻き舌', example: 'pero（ペロ：しかし）、perro（ペッロ：犬）' },
    { consonant: 'RR', description: '強い巻き舌（舌先を長く振動させる）', example: 'carro（カッロ：車）' },
    { consonant: 'Z', description: 'スペインでは「th」に近い音、ラテンアメリカでは「サ行」と同じ', example: 'zapato（サパト/スペインではthapato：靴）' },
];

const practicePhrases = [
    { spanish: "¡Buen Camino!", pronunciation: "ブエン カミーノ", meaning: "良い旅を！（巡礼者の挨拶）" },
    { spanish: "¿Dónde está el albergue?", pronunciation: "ドンデ エスタ エル アルベルゲ", meaning: "アルベルゲはどこですか？" },
    { spanish: "Necesito un sello, por favor.", pronunciation: "ネセシト ウン セージョ ポル ファボール", meaning: "スタンプをお願いします。" },
    { spanish: "¿Cuánto cuesta la habitación?", pronunciation: "クアント クエスタ ラ アビタシオン", meaning: "部屋はいくらですか？" },
    { spanish: "Soy peregrino japonés.", pronunciation: "ソイ ペレグリノ ハポネス", meaning: "私は日本人の巡礼者です。" },
    { spanish: "¿Dónde puedo comer?", pronunciation: "ドンデ プエド コメール", meaning: "どこで食事ができますか？" },
    { spanish: "Tengo una ampolla en el pie.", pronunciation: "テンゴ ウナ アンポージャ エン エル ピエ", meaning: "足に水ぶくれがあります。" },
    { spanish: "¿Cuántos kilómetros faltan para Santiago?", pronunciation: "クアントス キロメトロス ファルタン パラ サンティアゴ", meaning: "サンティアゴまであとどれくらいの距離がありますか？" },
    { spanish: "Gracias por su ayuda.", pronunciation: "グラシアス ポル ス アユーダ", meaning: "ご協力ありがとうございます。" },
    { spanish: "¿Podría hablar más despacio, por favor?", pronunciation: "ポドリア アブラール マス デスパシオ ポル ファボール", meaning: "もう少しゆっくり話していただけますか？" },
];

// --- COMPONENTE PRINCIPAL ---
export default function PronunciationPage() {
  return (
    <>
      <PronunciationStructuredData />
      <div className="container mx-auto px-4 py-12">
        {/* Breadcrumbs */} {/* ← CORREGIR INDENTACIÓN */}
        <div className="breadcrumbs-horizontal mb-8 text-sm text-gray-600">
          <ul className="flex space-x-2">
            <li><Link href="/" className="hover:text-blue-600">ホーム</Link></li>
            <li className="separator">&gt;</li>
            <li><Link href="/spanish" className="hover:text-blue-600">スペイン語レッスン</Link></li>
            <li className="separator">&gt;</li>
            <li className="current">発音ガイド</li>
          </ul>
        </div>

        {/* Header */}
        <div className="mb-12"> {/* ← TODOS LOS ELEMENTOS DEBEN ESTAR INDENTADOS */}
          <h1 className="text-4xl font-bold mb-4">🎤 スペイン語発音ガイド</h1>
          <p className="text-lg text-gray-600">サンティアゴ巡礼で役立つ発音のコツ</p>
        </div>

      {/* Main Content */}
      <div className="bg-white rounded-lg shadow-md p-8">
        <p className="text-gray-700 mb-8">
          このページでは、スペイン語の発音を日本語話者向けに解説します。スペイン語は基本的に「書かれた通りに発音する」言語ですが、いくつかの特殊な発音規則があります。正しい発音を身につけることで、現地の人々とのコミュニケーションがよりスムーズになるでしょう。
        </p>

        {/* Table of Contents */}
        <div className="bg-gray-50 p-6 rounded-lg mb-12 border border-gray-200">
          <h2 className="text-2xl font-bold mb-4">目次</h2>
          <ul className="space-y-2 text-blue-600">
            <li><a href="#alphabet" className="hover:underline">→ スペイン語のアルファベット</a></li>
            <li><a href="#vowels" className="hover:underline">→ 母音の発音</a></li>
            <li><a href="#consonants" className="hover:underline">→ 子音の発音</a></li>
            <li><a href="#special" className="hover:underline">→ 特殊な発音規則</a></li>
            <li><a href="#accent" className="hover:underline">→ アクセントとイントネーション</a></li>
            <li><a href="#practice" className="hover:underline">→ 発音練習フレーズ</a></li>
            <li><a href="#regional" className="hover:underline">→ 地域による発音の違い</a></li>
          </ul>
        </div>

        {/* Alphabet Section */}
        <section id="alphabet" className="mb-12 scroll-mt-20">
          <h2 className="text-3xl font-bold mb-6 border-b-2 pb-2">スペイン語のアルファベット</h2>
          <p className="text-gray-700 mb-6">スペイン語のアルファベットは27文字あります。以下に各文字の名前と発音を示します。</p>
          <div className="overflow-x-auto">
            <table className="min-w-full bg-white border">
              <thead className="bg-gray-100">
                <tr>
                  <th className="py-2 px-4 border-b text-left">文字</th>
                  <th className="py-2 px-4 border-b text-left">名称</th>
                  <th className="py-2 px-4 border-b text-left">カタカナ</th>
                  <th className="py-2 px-4 border-b text-left">発音の特徴</th>
                </tr>
              </thead>
              <tbody>
                {alphabetData.map((item, index) => (
                  <tr key={index} className="hover:bg-gray-50">
                    <td className="py-2 px-4 border-b font-bold">{item.letter}</td>
                    <td className="py-2 px-4 border-b">{item.name}</td>
                    <td className="py-2 px-4 border-b">{item.pronunciation}</td>
                    <td className="py-2 px-4 border-b text-sm">{item.description}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
           <div className="bg-yellow-50 p-4 rounded-lg border-l-4 border-yellow-500 mt-6">
            <p><strong>巡礼者へのアドバイス:</strong> スペイン語の発音は地域によって異なります。サンティアゴ巡礼路があるスペイン北部では、「z」と「c」（e, i の前）は「サ行」ではなく「th」に近い音で発音されることが多いです。</p>
          </div>
        </section>

        {/* Vowels Section */}
        <section id="vowels" className="mb-12 scroll-mt-20">
            <h2 className="text-3xl font-bold mb-6 border-b-2 pb-2">母音の発音</h2>
            <p className="text-gray-700 mb-6">スペイン語の母音は5つあり、常に一定の発音をします。日本語の母音と似ていますが、より明確に発音します。</p>
            <div className="overflow-x-auto">
                <table className="min-w-full bg-white border">
                    <thead className="bg-gray-100">
                        <tr>
                            <th className="py-2 px-4 border-b text-left">母音</th>
                            <th className="py-2 px-4 border-b text-left">カタカナ</th>
                            <th className="py-2 px-4 border-b text-left">発音の特徴</th>
                            <th className="py-2 px-4 border-b text-left">例</th>
                        </tr>
                    </thead>
                    <tbody>
                        {vowelData.map((item, index) => (
                            <tr key={index} className="hover:bg-gray-50">
                                <td className="py-2 px-4 border-b font-bold">{item.vowel}</td>
                                <td className="py-2 px-4 border-b">{item.pronunciation}</td>
                                <td className="py-2 px-4 border-b text-sm">{item.description}</td>
                                <td className="py-2 px-4 border-b text-sm">{item.example}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
            <div className="bg-blue-50 p-4 rounded-lg border-l-4 border-blue-500 mt-6">
                <p>スペイン語の母音は常に同じ発音をします。英語のように母音が曖昧になることはありません。また、母音の組み合わせ（二重母音）は、二つの母音を素早くつなげて発音します。</p>
            </div>
            <h3 className="text-2xl font-semibold my-6">二重母音の発音</h3>
            <div className="overflow-x-auto">
                <table className="min-w-full bg-white border">
                    <thead className="bg-gray-100">
                        <tr>
                            <th className="py-2 px-4 border-b text-left">二重母音</th>
                            <th className="py-2 px-4 border-b text-left">カタカナ</th>
                            <th className="py-2 px-4 border-b text-left">例</th>
                        </tr>
                    </thead>
                    <tbody>
                        {diphthongData.map((item, index) => (
                            <tr key={index} className="hover:bg-gray-50">
                                <td className="py-2 px-4 border-b font-bold">{item.diphthong}</td>
                                <td className="py-2 px-4 border-b">{item.pronunciation}</td>
                                <td className="py-2 px-4 border-b text-sm">{item.example}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </section>

        {/* Consonants Section */}
        <section id="consonants" className="mb-12 scroll-mt-20">
            <h2 className="text-3xl font-bold mb-6 border-b-2 pb-2">子音の発音</h2>
            <p className="text-gray-700 mb-6">スペイン語の子音のうち、日本語と異なる発音や特殊な規則を持つものを解説します。</p>
            <div className="overflow-x-auto">
                <table className="min-w-full bg-white border">
                    <thead className="bg-gray-100">
                        <tr>
                            <th className="py-2 px-4 border-b text-left">子音</th>
                            <th className="py-2 px-4 border-b text-left">発音の特徴</th>
                            <th className="py-2 px-4 border-b text-left">例</th>
                        </tr>
                    </thead>
                    <tbody>
                        {consonantData.map((item, index) => (
                            <tr key={index} className="hover:bg-gray-50">
                                <td className="py-2 px-4 border-b font-bold">{item.consonant}</td>
                                <td className="py-2 px-4 border-b text-sm">{item.description}</td>
                                <td className="py-2 px-4 border-b text-sm">{item.example}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
            <div className="bg-yellow-50 p-4 rounded-lg border-l-4 border-yellow-500 mt-6">
                <p><strong>巡礼者へのアドバイス:</strong> 巻き舌の発音が難しい場合は、舌先を上の歯茎に軽く当てて「ド」と「ラ」の中間のような音を出すと近くなります。完璧な発音でなくても、コミュニケーションは十分に取れますので安心してください。</p>
            </div>
        </section>

        {/* Special Rules Section */}
        <section id="special" className="mb-12 scroll-mt-20">
            <h2 className="text-3xl font-bold mb-6 border-b-2 pb-2">特殊な発音規則</h2>
            <div className="space-y-6">
                <div>
                    <h3 className="text-2xl font-semibold mb-2">1. 黙字（発音しない文字）</h3>
                    <ul className="list-disc list-inside space-y-1 text-gray-700">
                        <li><strong>H</strong>：常に発音しません。例：<span className="font-mono">hola</span>（オラ）</li>
                        <li><strong>U</strong>：<span className="font-mono">gue, gui, que, qui</span> の中では発音しません。例：<span className="font-mono">guerra</span>（ゲラ）、<span className="font-mono">quiero</span>（キエロ）</li>
                    </ul>
                </div>
                <div>
                    <h3 className="text-2xl font-semibold mb-2">2. 特殊な文字の組み合わせ</h3>
                    <ul className="list-disc list-inside space-y-1 text-gray-700">
                        <li><strong>CH</strong>：「チ」に近い音。例：<span className="font-mono">mucho</span>（ムチョ）</li>
                        <li><strong>LL</strong>：「イ」または「ヤ行」の子音。例：<span className="font-mono">llamar</span>（ヤマール/イャマール）</li>
                        <li><strong>RR</strong>：強い巻き舌。例：<span className="font-mono">perro</span>（ペッロ）</li>
                        <li><strong>GU + e/i</strong>：「グエ/グイ」と発音。例：<span className="font-mono">guerra</span>（ゲラ）</li>
                        <li><strong>GÜ + e/i</strong>：「グエ/グイ」と発音（ü の上の点は u を発音することを示す）。例：<span className="font-mono">pingüino</span>（ピングイノ）</li>
                    </ul>
                </div>
                <div>
                    <h3 className="text-2xl font-semibold mb-2">3. 語末の子音</h3>
                    <p className="text-gray-700">スペイン語では、語末の子音は弱く発音される傾向があります。特に <span className="font-mono">-d</span> で終わる単語は、「ス」に近い音になることがあります。例：<span className="font-mono">Madrid</span>（マドリス）、<span className="font-mono">usted</span>（ウステス）</p>
                </div>
            </div>
        </section>

        {/* Accent Section */}
        <section id="accent" className="mb-12 scroll-mt-20">
            <h2 className="text-3xl font-bold mb-6 border-b-2 pb-2">アクセントとイントネーション</h2>
            <div className="space-y-6">
                <div>
                    <h3 className="text-2xl font-semibold mb-2">アクセント規則</h3>
                    <p className="text-gray-700 mb-4">スペイン語のアクセント（強勢）は以下の規則に従います：</p>
                    <ol className="list-decimal list-inside space-y-2 text-gray-700">
                        <li>アクセント記号（´）がある母音にアクセントが置かれます。例：<span className="font-mono">café</span>（カフェ）</li>
                        <li>アクセント記号がない場合：
                            <ul className="list-disc list-inside ml-6 mt-2 space-y-1">
                                <li>n または s 以外の子音で終わる単語は、最後の音節にアクセント。例：<span className="font-mono">Madrid</span>（マドリード）</li>
                                <li>母音、n または s で終わる単語は、最後から2番目の音節にアクセント。例：<span className="font-mono">casa</span>（カーサ）</li>
                            </ul>
                        </li>
                    </ol>
                </div>
                <div>
                    <h3 className="text-2xl font-semibold mb-2">アクセント記号の役割</h3>
                    <p className="text-gray-700 mb-4">アクセント記号は以下の目的で使用されます：</p>
                    <ol className="list-decimal list-inside space-y-2 text-gray-700">
                        <li>通常の規則と異なる位置にアクセントがある場合。例：<span className="font-mono">café</span>（カフェ）</li>
                        <li>疑問詞や感嘆詞を示す場合。例：<span className="font-mono">¿Qué?</span>（ケ：何？）</li>
                        <li>同じ綴りで異なる意味を持つ単語を区別する場合。例：<span className="font-mono">si</span>（シ：もし）vs. <span className="font-mono">sí</span>（スィ：はい）</li>
                    </ol>
                </div>
            </div>
            <div className="bg-yellow-50 p-4 rounded-lg border-l-4 border-yellow-500 mt-6">
                <p><strong>巡礼者へのアドバイス:</strong> スペイン語のアクセントを正確に置くことで、より自然な発音になります。特に地名や重要な単語のアクセントに注意しましょう。例えば、「Santiago」は「サンティアーゴ」と、2番目の「ア」にアクセントがあります。</p>
            </div>
        </section>

        {/* Practice Phrases Section */}
        <section id="practice" className="mb-12 scroll-mt-20">
            <h2 className="text-3xl font-bold mb-6 border-b-2 pb-2">発音練習フレーズ</h2>
            <p className="text-gray-700 mb-6">以下のフレーズを使って、スペイン語の発音を練習しましょう。特に巡礼路で役立つフレーズを選びました。</p>
            <div className="space-y-6">
                {practicePhrases.map((phrase, index) => (
                    <div key={index} className="bg-blue-50 p-4 rounded-lg border-l-4 border-blue-500">
                        <p className="text-lg font-bold text-gray-800">{phrase.spanish}</p>
                        <p className="text-md text-blue-700">{phrase.pronunciation}</p>
                        <p className="text-sm text-gray-600 mt-1">{phrase.meaning}</p>
                    </div>
                ))}
            </div>
             <div className="bg-blue-50 p-4 rounded-lg border-l-4 border-blue-500 mt-6">
                <p>これらのフレーズを繰り返し練習することで、スペイン語の発音感覚が身につきます。可能であれば、スペイン語のネイティブスピーカーの発音を聞いて真似てみることをお勧めします。</p>
            </div>
        </section>

        {/* Regional Differences Section */}
        <section id="regional" className="mb-12 scroll-mt-20">
            <h2 className="text-3xl font-bold mb-6 border-b-2 pb-2">地域による発音の違い</h2>
            <p className="text-gray-700 mb-6">スペイン語は広い地域で話されているため、地域によって発音に違いがあります。サンティアゴ巡礼路があるスペイン北部の発音の特徴を理解しておくと役立ちます。</p>
            <div className="space-y-6">
                <div>
                    <h3 className="text-2xl font-semibold mb-2">スペイン北部（ガリシア、アストゥリアス、カンタブリア、バスク地方など）の発音の特徴</h3>
                    <ul className="list-disc list-inside space-y-1 text-gray-700">
                        <li><strong>Z と C（e, i の前）</strong>：「th」に近い音で発音（セセオ：ceceo）。例：<span className="font-mono">gracias</span>（グラthィアス）</li>
                        <li><strong>J と G（e, i の前）</strong>：喉の奥から出す強い「ホ」の音。例：<span className="font-mono">trabajo</span>（トラバホ）</li>
                        <li><strong>語末の -d</strong>：弱く発音されるか、「th」に近い音になる。例：<span className="font-mono">Madrid</span>（マドリth）</li>
                        <li><strong>S</strong>：はっきりと発音される。例：<span className="font-mono">hasta</span>（アスタ）</li>
                    </ul>
                </div>
                <div>
                    <h3 className="text-2xl font-semibold mb-2">ガリシア地方の特殊性</h3>
                    <p className="text-gray-700 mb-4">サンティアゴ・デ・コンポステーラがあるガリシア地方では、ガリシア語（gallego）も話されています。地名や看板にガリシア語が使われていることがあるので、以下の特徴を知っておくと便利です：</p>
                    <ul className="list-disc list-inside space-y-1 text-gray-700">
                        <li>ガリシア語の「x」は「シュ」に近い音で発音されます。例：<span className="font-mono">Xunta</span>（シュンタ）</li>
                        <li>地名が2つの言語で表記されていることがあります。例：<span className="font-mono">A Coruña</span>（ガリシア語）/ <span className="font-mono">La Coruña</span>（スペイン語）</li>
                    </ul>
                </div>
            </div>
            <div className="bg-yellow-50 p-4 rounded-lg border-l-4 border-yellow-500 mt-6">
                <p><strong>巡礼者へのアドバイス:</strong> 発音の違いを気にしすぎる必要はありません。スペイン人は外国人のアクセントに慣れています。基本的な発音規則を理解し、ゆっくり明確に話すことを心がければ、十分にコミュニケーションが取れます。</p>
            </div>
        </section>

        {/* Final Note */}
        <div className="bg-green-50 p-6 rounded-lg border-l-4 border-green-600 mt-12">
          <p className="text-gray-700">
            <strong>✅ 学習完了:</strong> スペイン語の発音は一度に完璧にマスターする必要はありません。巡礼路で実際に使いながら徐々に上達させていきましょう。間違いを恐れずに積極的に話すことが上達の近道です。¡Buen Camino!
          </p>
        </div>
      </div>

      {/* ✅ Action Buttons - COMPONENTE REUTILIZABLE */}
      <ActionButtons className="mt-8" />

      {/* ✅ Navigation - COMPONENTE REUTILIZABLE */}
    <LessonNavigation 
        prevHref="/spanish/phrases"
        prevText="便利なフレーズ集"
        nextHref="/spanish"
        nextText="レッスン一覧"
      />
      </div>
    </>
  );
}