// app/spanish/vocabulary/page.tsx
import { type Metadata } from 'next';
import Link from 'next/link';
import ActionButtons from '@/components/ActionButtons';
import LessonNavigation from '@/components/LessonNavigation';
export const metadata: Metadata = {
  title: {
    default: "スペイン語単語集",
    template: "%s | サンティアゴ巡礼ガイド"
  },
  description: "サンティアゴ巡礼中に出会う基本的なスペイン語の単語と表現を一覧で学びます。日本人巡礼者向けに分類別にまとめた初心者向け単語集。",
  keywords: ["スペイン語 単語集", "サンティアゴ 巡礼 語彙", "日本語 スペイン語 学習", "ペレグリノ 基本文型", "スペイン語 発音 レッスン"],
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
    canonical: '/spanish/vocabulary',
    languages: {
      'ja': '/spanish/vocabulary',
    },
  },
  openGraph: {
    title: "スペイン語単語集｜サンティアゴ巡礼に役立つ基本語彙",
    description: "サンティアゴ巡礼中に出会う基本的なスペイン語の単語と表現を一覧で学びます。日本人巡礼者向けに分類別にまとめた初心者向け単語集。",
    url: 'https://santiagojunrei.com/spanish/vocabulary',
    siteName: 'サンティアゴ巡礼ガイド',
    locale: 'ja_JP',
    type: 'article',
    publishedTime: '2025-01-20',
    modifiedTime: '2025-01-20',
    images: [
      {
        url: '/og/vocabulary-og.jpg',
        width: 1200,
        height: 630,
        alt: 'スペイン語単語集 - サンティアゴ巡礼ガイド',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: "スペイン語単語集｜サンティアゴ巡礼に役立つ基本語彙",
    description: "サンティアゴ巡礼中に出会う基本的なスペイン語の単語と表現を一覧で学びます。",
    creator: '@santiagojunrei',
    images: ['/og/vocabulary-og.jpg'],
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
// --- DATOS ESTRUCTURADOS ---
function VocabularyStructuredData() {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: 'スペイン語単語集｜サンティアゴ巡礼に役立つ基本語彙',
    description: 'サンティアゴ巡礼中に出会う基本的なスペイン語の単語と表現を一覧で学びます。',
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
      '@id': 'https://santiagojunrei.com/spanish/vocabulary'
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
          name: 'スペイン語単語集',
          item: 'https://santiagojunrei.com/spanish/vocabulary'
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

// --- TIPOS DE DATOS ---
type VocabularyCategory = {
  id: string;
  title: string;
  words: {
    spanish: string;
    japanese: string;
    pronunciation: string;
  }[];
  tip: string;
};

// --- DATOS DE VOCABULARIO ---
const vocabularyData: VocabularyCategory[] = [
  {
    id: "greetings",
    title: "挨拶と基本表現",
    words: [
      { spanish: "Hola", japanese: "こんにちは", pronunciation: "オラ" },
      { spanish: "Buenos días", japanese: "おはようございます", pronunciation: "ブエノス ディアス" },
      { spanish: "Buenas tardes", japanese: "こんにちは（午後）", pronunciation: "ブエナス タルデス" },
      { spanish: "Buenas noches", japanese: "こんばんは/おやすみなさい", pronunciation: "ブエナス ノチェス" },
      { spanish: "Adiós", japanese: "さようなら", pronunciation: "アディオス" },
      { spanish: "Hasta luego", japanese: "またね", pronunciation: "アスタ ルエゴ" },
      { spanish: "Por favor", japanese: "お願いします", pronunciation: "ポル ファボール" },
      { spanish: "Gracias", japanese: "ありがとう", pronunciation: "グラシアス" },
      { spanish: "De nada", japanese: "どういたしまして", pronunciation: "デ ナダ" },
      { spanish: "Disculpe / Perdón", japanese: "すみません", pronunciation: "ディスクルペ / ペルドン" },
      { spanish: "Sí", japanese: "はい", pronunciation: "スィ" },
      { spanish: "No", japanese: "いいえ", pronunciation: "ノ" },
      { spanish: "¿Cómo estás?", japanese: "調子はどう？", pronunciation: "コモ エスタス" },
      { spanish: "Bien, gracias", japanese: "元気です、ありがとう", pronunciation: "ビエン グラシアス" },
      { spanish: "¡Buen Camino!", japanese: "良い旅を！（巡礼者の挨拶）", pronunciation: "ブエン カミーノ" }
    ],
    tip: "「¡Buen Camino!」は巡礼路で最も頻繁に交わされる挨拶です。他の巡礼者やホスト、地元の人々と出会ったときに使いましょう。この一言で巡礼者同士の連帯感が生まれます。"
  },
  {
    id: "albergue",
    title: "アルベルゲと宿泊",
    words: [
      { spanish: "Albergue", japanese: "アルベルゲ（巡礼者用宿）", pronunciation: "アルベルゲ" },
      { spanish: "Hospitalero/a", japanese: "アルベルゲの管理人", pronunciation: "オスピタレロ/ラ" },
      { spanish: "Credencial", japanese: "巡礼手帳", pronunciation: "クレデンシアル" },
      { spanish: "Sello", japanese: "スタンプ", pronunciation: "セージョ" },
      { spanish: "Cama", japanese: "ベッド", pronunciation: "カマ" },
      { spanish: "Litera", japanese: "二段ベッド", pronunciation: "リテラ" },
      { spanish: "Sábana", japanese: "シーツ", pronunciation: "サバナ" },
      { spanish: "Manta", japanese: "毛布", pronunciation: "マンタ" },
      { spanish: "Almohada", japanese: "枕", pronunciation: "アルモアダ" },
      { spanish: "Ducha", japanese: "シャワー", pronunciation: "ドゥチャ" },
      { spanish: "Baño", japanese: "トイレ/バスルーム", pronunciation: "バーニョ" },
      { spanish: "Lavadora", japanese: "洗濯機", pronunciation: "ラバドーラ" },
      { spanish: "Secadora", japanese: "乾燥機", pronunciation: "セカドーラ" },
      { spanish: "Cocina", japanese: "キッチン", pronunciation: "コシーナ" },
      { spanish: "Taquilla", japanese: "ロッカー", pronunciation: "タキージャ" },
      { spanish: "Completo", japanese: "満室", pronunciation: "コンプレト" },
      { spanish: "Reserva", japanese: "予約", pronunciation: "レセルバ" },
      { spanish: "¿Hay plazas?", japanese: "空きはありますか？", pronunciation: "アイ プラサス" },
      { spanish: "¿Cuánto cuesta?", japanese: "いくらですか？", pronunciation: "クアント クエスタ" }
    ],
    tip: "多くのアルベルゲは先着順で、予約ができないことが一般的です。人気のある場所や繁忙期は早めに到着することをお勧めします。「¿Hay plazas?」（空きはありますか？）は最初に尋ねるべき重要なフレーズです。"
  },
  {
    id: "food",
    title: "食事と飲み物",
    words: [
      { spanish: "Desayuno", japanese: "朝食", pronunciation: "デサユーノ" },
      { spanish: "Comida", japanese: "昼食", pronunciation: "コミーダ" },
      { spanish: "Cena", japanese: "夕食", pronunciation: "セナ" },
      { spanish: "Menú del peregrino", japanese: "巡礼者メニュー", pronunciation: "メヌー デル ペレグリーノ" },
      { spanish: "Agua", japanese: "水", pronunciation: "アグア" },
      { spanish: "Vino", japanese: "ワイン", pronunciation: "ビーノ" },
      { spanish: "Cerveza", japanese: "ビール", pronunciation: "セルベサ" },
      { spanish: "Café", japanese: "コーヒー", pronunciation: "カフェ" },
      { spanish: "Té", japanese: "お茶", pronunciation: "テ" },
      { spanish: "Pan", japanese: "パン", pronunciation: "パン" },
      { spanish: "Tortilla", japanese: "スペイン風オムレツ", pronunciation: "トルティージャ" },
      { spanish: "Paella", japanese: "パエリア", pronunciation: "パエージャ" },
      { spanish: "Pulpo", japanese: "タコ", pronunciation: "プルポ" },
      { spanish: "Carne", japanese: "肉", pronunciation: "カルネ" },
      { spanish: "Pescado", japanese: "魚", pronunciation: "ペスカド" },
      { spanish: "Vegetariano", japanese: "ベジタリアン", pronunciation: "ベヘタリアーノ" },
      { spanish: "Sin gluten", japanese: "グルテンフリー", pronunciation: "シン グルテン" },
      { spanish: "Alérgico/a", japanese: "アレルギーがある", pronunciation: "アレルヒコ/カ" },
      { spanish: "La cuenta, por favor", japanese: "お会計をお願いします", pronunciation: "ラ クエンタ ポル ファボール" }
    ],
    tip: "「Menú del peregrino」（巡礼者メニュー）は多くのレストランで提供される固定価格のセットメニューで、通常は前菜、メイン、デザート、パン、ワイン/水が含まれます。リーズナブルな価格で栄養価の高い食事が取れるので、巡礼者に人気です。"
  },
  {
    id: "camino",
    title: "巡礼路と道案内",
    words: [
      { spanish: "El Camino", japanese: "巡礼路", pronunciation: "エル カミーノ" },
      { spanish: "Flecha amarilla", japanese: "黄色い矢印", pronunciation: "フレチャ アマリージャ" },
      { spanish: "Concha", japanese: "ホタテ貝（巡礼のシンボル）", pronunciation: "コンチャ" },
      { spanish: "Etapa", japanese: "区間", pronunciation: "エタパ" },
      { spanish: "Kilómetro", japanese: "キロメートル", pronunciation: "キロメトロ" },
      { spanish: "Mochila", japanese: "バックパック", pronunciation: "モチラ" },
      { spanish: "Bastón", japanese: "杖", pronunciation: "バストン" },
      { spanish: "Peregrino/a", japanese: "巡礼者", pronunciation: "ペレグリーノ/ナ" },
      { spanish: "Caminar", japanese: "歩く", pronunciation: "カミナール" },
      { spanish: "Descansar", japanese: "休む", pronunciation: "デスカンサール" },
      { spanish: "Subida", japanese: "上り坂", pronunciation: "スビーダ" },
      { spanish: "Bajada", japanese: "下り坂", pronunciation: "バハーダ" },
      { spanish: "Puente", japanese: "橋", pronunciation: "プエンテ" },
      { spanish: "Fuente", japanese: "水飲み場", pronunciation: "フエンテ" },
      { spanish: "Pueblo", japanese: "村", pronunciation: "プエブロ" },
      { spanish: "Ciudad", japanese: "都市", pronunciation: "シウダッ" },
      { spanish: "¿Por dónde va el Camino?", japanese: "巡礼路はどちらですか？", pronunciation: "ポル ドンデ バ エル カミーノ" },
      { spanish: "¿Cuánto falta para...?", japanese: "...まであとどのくらい？", pronunciation: "クアント ファルタ パラ" }
    ],
    tip: "黄色い矢印（flecha amarilla）とホタテ貝のシンボル（concha）が巡礼路の主な道標です。迷った場合は「¿Por dónde va el Camino?」（巡礼路はどちらですか？）と地元の人に尋ねましょう。"
  },
  {
    id: "health",
    title: "健康と緊急時",
    words: [
      { spanish: "Farmacia", japanese: "薬局", pronunciation: "ファルマシア" },
      { spanish: "Centro de salud", japanese: "診療所", pronunciation: "セントロ デ サルー" },
      { spanish: "Hospital", japanese: "病院", pronunciation: "オスピタル" },
      { spanish: "Médico", japanese: "医師", pronunciation: "メディコ" },
      { spanish: "Enfermero/a", japanese: "看護師", pronunciation: "エンフェルメロ/ラ" },
      { spanish: "Dolor", japanese: "痛み", pronunciation: "ドロール" },
      { spanish: "Ampolla", japanese: "水ぶくれ", pronunciation: "アンポージャ" },
      { spanish: "Rodilla", japanese: "膝", pronunciation: "ロディージャ" },
      { spanish: "Tobillo", japanese: "足首", pronunciation: "トビージョ" },
      { spanish: "Pie", japanese: "足", pronunciation: "ピエ" },
      { spanish: "Espalda", japanese: "背中", pronunciation: "エスパルダ" },
      { spanish: "Cabeza", japanese: "頭", pronunciation: "カベサ" },
      { spanish: "Estómago", japanese: "胃", pronunciation: "エストマゴ" },
      { spanish: "Fiebre", japanese: "熱", pronunciation: "フィエブレ" },
      { spanish: "Medicamento", japanese: "薬", pronunciation: "メディカメント" },
      { spanish: "Tirita / Curita", japanese: "絆創膏", pronunciation: "ティリタ / クリタ" },
      { spanish: "Emergencia", japanese: "緊急", pronunciation: "エメルヘンシア" },
      { spanish: "Ayuda", japanese: "助け", pronunciation: "アユーダ" },
      { spanish: "Necesito ayuda", japanese: "助けが必要です", pronunciation: "ネセシト アユーダ" },
      { spanish: "112", japanese: "緊急電話番号（日本の110/119に相当）", pronunciation: "ウノ ウノ ドス" }
    ],
    tip: "スペインの緊急電話番号は「112」です。緊急時には「Necesito ayuda」（助けが必要です）と言いましょう。多くのアルベルゲには応急処置キットがあり、水ぶくれ（ampolla）などの一般的な問題に対応できます。"
  },
  {
    id: "numbers",
    title: "数字と時間",
    words: [
      { spanish: "Uno", japanese: "1", pronunciation: "ウノ" },
      { spanish: "Dos", japanese: "2", pronunciation: "ドス" },
      { spanish: "Tres", japanese: "3", pronunciation: "トレス" },
      { spanish: "Cuatro", japanese: "4", pronunciation: "クアトロ" },
      { spanish: "Cinco", japanese: "5", pronunciation: "シンコ" },
      { spanish: "Seis", japanese: "6", pronunciation: "セイス" },
      { spanish: "Siete", japanese: "7", pronunciation: "シエテ" },
      { spanish: "Ocho", japanese: "8", pronunciation: "オチョ" },
      { spanish: "Nueve", japanese: "9", pronunciation: "ヌエベ" },
      { spanish: "Diez", japanese: "10", pronunciation: "ディエス" },
      { spanish: "Veinte", japanese: "20", pronunciation: "ベインテ" },
      { spanish: "Cincuenta", japanese: "50", pronunciation: "シンクエンタ" },
      { spanish: "Cien", japanese: "100", pronunciation: "シエン" },
      { spanish: "Hora", japanese: "時間", pronunciation: "オラ" },
      { spanish: "Minuto", japanese: "分", pronunciation: "ミヌト" },
      { spanish: "¿Qué hora es?", japanese: "何時ですか？", pronunciation: "ケ オラ エス" },
      { spanish: "Mañana", japanese: "朝/明日", pronunciation: "マニャーナ" },
      { spanish: "Tarde", japanese: "午後", pronunciation: "タルデ" },
      { spanish: "Noche", japanese: "夜", pronunciation: "ノチェ" },
      { spanish: "Hoy", japanese: "今日", pronunciation: "オイ" },
      { spanish: "Ayer", japanese: "昨日", pronunciation: "アジェール" },
      { spanish: "Semana", japanese: "週", pronunciation: "セマナ" },
      { spanish: "Mes", japanese: "月", pronunciation: "メス" }
    ],
    tip: "スペインでは24時間制が一般的です。また、「mañana」は「朝」と「明日」の両方の意味があるので、文脈に注意しましょう。アルベルゲの門限（toque de queda）は通常20:00〜22:00頃なので、時間を把握しておくことが重要です。"
  },
  {
    id: "shopping",
    title: "買い物と支払い",
    words: [
      { spanish: "Tienda", japanese: "店", pronunciation: "ティエンダ" },
      { spanish: "Supermercado", japanese: "スーパーマーケット", pronunciation: "スペルメルカド" },
      { spanish: "Mercado", japanese: "市場", pronunciation: "メルカド" },
      { spanish: "Banco", japanese: "銀行", pronunciation: "バンコ" },
      { spanish: "Cajero automático", japanese: "ATM", pronunciation: "カヘロ アウトマティコ" },
      { spanish: "Euro", japanese: "ユーロ", pronunciation: "エウロ" },
      { spanish: "Céntimo", japanese: "セント（ユーロの補助通貨）", pronunciation: "センティモ" },
      { spanish: "Efectivo", japanese: "現金", pronunciation: "エフェクティボ" },
      { spanish: "Tarjeta", japanese: "カード", pronunciation: "タルヘタ" },
      { spanish: "¿Cuánto cuesta?", japanese: "いくらですか？", pronunciation: "クアント クエスタ" },
      { spanish: "Caro", japanese: "高い", pronunciation: "カロ" },
      { spanish: "Barato", japanese: "安い", pronunciation: "バラト" },
      { spanish: "Abierto", japanese: "営業中", pronunciation: "アビエルト" },
      { spanish: "Cerrado", japanese: "閉店", pronunciation: "セラド" },
      { spanish: "Horario", japanese: "営業時間", pronunciation: "オラリオ" },
      { spanish: "Recuerdo", japanese: "お土産", pronunciation: "レクエルド" },
      { spanish: "Compostela", japanese: "巡礼証明書", pronunciation: "コンポステラ" }
    ],
    tip: "スペインの小さな村では、お店の営業時間が限られていることがあります。多くの店は昼休み（siesta）のために14:00〜17:00頃閉店します。また、日曜日は多くの店が休業するので、事前に必要なものを購入しておきましょう。"
  },
  {
    id: "weather",
    title: "天気と季節",
    words: [
      { spanish: "Tiempo", japanese: "天気", pronunciation: "ティエンポ" },
      { spanish: "Sol", japanese: "太陽", pronunciation: "ソル" },
      { spanish: "Lluvia", japanese: "雨", pronunciation: "ジュビア" },
      { spanish: "Nube", japanese: "雲", pronunciation: "ヌベ" },
      { spanish: "Viento", japanese: "風", pronunciation: "ビエント" },
      { spanish: "Nieve", japanese: "雪", pronunciation: "ニエベ" },
      { spanish: "Calor", japanese: "暑さ", pronunciation: "カロール" },
      { spanish: "Frío", japanese: "寒さ", pronunciation: "フリオ" },
      { spanish: "Temperatura", japanese: "気温", pronunciation: "テンペラトゥーラ" },
      { spanish: "Grado", japanese: "度（温度）", pronunciation: "グラド" },
      { spanish: "Primavera", japanese: "春", pronunciation: "プリマベラ" },
      { spanish: "Verano", japanese: "夏", pronunciation: "ベラノ" },
      { spanish: "Otoño", japanese: "秋", pronunciation: "オトーニョ" },
      { spanish: "Invierno", japanese: "冬", pronunciation: "インビエルノ" },
      { spanish: "¿Qué tiempo hace?", japanese: "天気はどうですか？", pronunciation: "ケ ティエンポ アセ" },
      { spanish: "Hace sol", japanese: "晴れています", pronunciation: "アセ ソル" },
      { spanish: "Está lloviendo", japanese: "雨が降っています", pronunciation: "エスタ ジョビエンド" },
      { spanish: "Hace frío", japanese: "寒いです", pronunciation: "アセ フリオ" },
      { spanish: "Hace calor", japanese: "暑いです", pronunciation: "アセ カロール" }
    ],
    tip: "ガリシア地方は「緑のスペイン」と呼ばれ、他のスペイン地域よりも雨が多い傾向があります。特に秋から春にかけては雨具を常に携帯することをお勧めします。天気は一日の間でも急変することがあるので、重ね着できる服装が理想的です。"
  },
  {
    id: "culture",
    title: "文化と伝統",
    words: [
      { spanish: "Catedral", japanese: "大聖堂", pronunciation: "カテドラル" },
      { spanish: "Iglesia", japanese: "教会", pronunciation: "イグレシア" },
      { spanish: "Monasterio", japanese: "修道院", pronunciation: "モナステリオ" },
      { spanish: "Capilla", japanese: "礼拝堂", pronunciation: "カピージャ" },
      { spanish: "Misa", japanese: "ミサ", pronunciation: "ミサ" },
      { spanish: "Bendición", japanese: "祝福", pronunciation: "ベンディシオン" },
      { spanish: "Botafumeiro", japanese: "ボタフメイロ（サンティアゴ大聖堂の大香炉）", pronunciation: "ボタフメイロ" },
      { spanish: "Fiesta", japanese: "祭り", pronunciation: "フィエスタ" },
      { spanish: "Tradición", japanese: "伝統", pronunciation: "トラディシオン" },
      { spanish: "Música", japanese: "音楽", pronunciation: "ムシカ" },
      { spanish: "Baile", japanese: "ダンス", pronunciation: "バイレ" },
      { spanish: "Gaita", japanese: "バグパイプ", pronunciation: "ガイタ" },
      { spanish: "Historia", japanese: "歴史", pronunciation: "イストリア" },
      { spanish: "Leyenda", japanese: "伝説", pronunciation: "レジェンダ" },
      { spanish: "Santiago", japanese: "サンティアゴ（聖ヤコブ）", pronunciation: "サンティアゴ" },
      { spanish: "Apóstol", japanese: "使徒", pronunciation: "アポストル" },
      { spanish: "Galicia", japanese: "ガリシア（スペイン北西部の自治州）", pronunciation: "ガリシア" },
      { spanish: "Gallego", japanese: "ガリシア語/ガリシア人", pronunciation: "ガジェゴ" }
    ],
    tip: "ガリシア地方には独自の言語（gallego/ガリシア語）があり、道標や看板に使われていることがあります。また、ボタフメイロ（Botafumeiro）は通常、金曜日の夕方のミサでサンティアゴ大聖堂で見ることができます。巡礼の最後に見逃さないようにしましょう。"
  }
];

// --- COMPONENTES ---
const VocabularyCard = ({ word }: { word: { spanish: string; japanese: string; pronunciation: string } }) => (
  <div className="vocab-card bg-white p-4 rounded-lg shadow-sm border border-gray-200 hover:shadow-md transition-shadow">
    <div className="spanish font-bold text-lg text-gray-900">{word.spanish}</div>
    <div className="japanese text-sm text-gray-600 mt-1">{word.japanese}</div>
    <div className="pronunciation text-sm text-blue-600 mt-1">{word.pronunciation}</div>
  </div>
);

const CategorySection = ({ category }: { category: VocabularyCategory }) => (
  <section id={category.id} className="mb-12 scroll-mt-32">
    <h2 className="text-3xl font-bold text-gray-900 mb-6 border-l-4 border-blue-600 pl-4">
      {category.title}
    </h2>
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-6">
      {category.words.map((word, index) => (
        <VocabularyCard key={index} word={word} />
      ))}
    </div>
    <div className="camino-tip bg-yellow-50 border-l-4 border-yellow-500 text-yellow-800 p-4 rounded-lg">
      <h4 className="font-bold">巡礼者へのアドバイス</h4>
      <p className="mt-2">{category.tip}</p>
    </div>
  </section>
);
// --- COMPONENTE PRINCIPAL ---
export default function VocabularyPage() {
  return (
    <>
      <VocabularyStructuredData />
      <div className="container mx-auto px-4 py-12">
        {/* Breadcrumbs */}
        <div className="breadcrumbs-horizontal mb-8 text-sm text-gray-600">
          <ul className="flex space-x-2">
            <li><Link href="/" className="hover:text-blue-600">ホーム</Link></li>
            <li className="separator">&gt;</li>
            <li><Link href="/spanish" className="hover:text-blue-600">スペイン語レッスン</Link></li>
            <li className="separator">&gt;</li>
            <li className="current">スペイン語単語集</li>
          </ul>
        </div>

        {/* Header */}
        <div className="mb-12">
          <h1 className="text-4xl font-bold mb-4">📚 スペイン語単語集</h1>
          <p className="text-lg text-gray-600 mb-8">サンティアゴ巡礼の旅で役立つスペイン語の単語をカテゴリー別にまとめています。発音ガイド付きで、実際の状況ですぐに使える単語を集めました。</p>
        </div>

        {/* Table of Contents */}
        <div className="bg-gray-50 p-6 rounded-lg mb-12 border border-gray-200">
          <h2 className="text-2xl font-bold mb-4">目次</h2>
          <ul className="space-y-2 text-blue-600">
            {vocabularyData.map(category => (
              <li key={category.id}>
                <a href={`#${category.id}`} className="hover:underline">
                  → {category.title}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Main Content */}
        <main>
          {vocabularyData.map(category => (
            <CategorySection key={category.id} category={category} />
          ))}

          {/* Final Note */}
          <div className="note bg-blue-50 p-6 rounded-lg border-l-4 border-blue-600 mt-12">
            <p className="text-gray-700">
              これらの単語とフレーズは、サンティアゴ巡礼の旅で最も頻繁に使われるものです。基本的な単語を覚えておくだけでも、現地での体験が格段に豊かになります。発音ガイドを参考に、実際に声に出して練習してみましょう。
            </p>
          </div>

          {/* Buen Camino */}
          <div className="buen-camino bg-green-50 p-6 rounded-lg border-l-4 border-green-600 mt-6 text-center">
            <p className="text-lg font-semibold text-gray-800">
              ¡Buen Camino! (ブエン・カミーノ！良い旅を！)
            </p>
          </div>
        </main>

        {/* ✅ Action Buttons - COMPONENTE REUTILIZABLE (SIN guardar) */}
        <ActionButtons className="mt-8" />

        {/* ✅ Navigation - COMPONENTE REUTILIZABLE */}
        <LessonNavigation 
          prevHref="/spanish/phrases"
          prevText="便利なフレーズ集"
          nextHref="/spanish/pronunciation"
          nextText="発音ガイド"
        />
      </div>
    </>
  );
}