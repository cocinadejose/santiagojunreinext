// Reemplaza TODO el contenido de app/spanish/phrases/page.tsx con este código

import Link from 'next/link';
import ActionButtons from '@/components/ActionButtons'; // ← Importar
import LessonNavigation from '@/components/LessonNavigation'; // ← Importar
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: {
    default: "便利なフレーズ集",
    template: "%s | サンティアゴ巡礼ガイド"
  },
  description: "サンティアゴ巡礼で実際に使えるスペイン語フレーズを会話形式で完全収録。アルベルゲ、レストラン、道案内、健康管理など、状況別の実践会話と発音ガイド付き。日本人巡礼者向けに厳選した必須フレーズ集。",
  keywords: ["スペイン語 フレーズ集", "サンティアゴ 巡礼 会話", "日本語 スペイン語 実践会話", "ペレグリノ 会話例", "アルベルゲ スペイン語", "道案内 スペイン語", "緊急時 スペイン語"],
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
    canonical: '/spanish/phrases',
    languages: {
      'ja': '/spanish/phrases',
    },
  },
  openGraph: {
    title: "便利なフレーズ集｜サンティアゴ巡礼で使える実践スペイン語会話",
    description: "サンティアゴ巡礼ですぐに使えるスペイン語フレーズ完全ガイド。状況別会話例と発音付きで、旅先ですぐに実践できる必須表現を厳選。",
    url: 'https://santiagojunrei.com/spanish/phrases',
    siteName: 'サンティアゴ巡礼ガイド',
    locale: 'ja_JP',
    type: 'article',
    publishedTime: '2025-01-20',
    modifiedTime: '2025-01-20',
    images: [
      {
        url: '/og/phrases-og.jpg',
        width: 1200,
        height: 630,
        alt: '便利なフレーズ集 - サンティアゴ巡礼ガイド',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: "便利なフレーズ集｜サンティアゴ巡礼で使える実践スペイン語会話",
    description: "サンティアゴ巡礼ですぐに使えるスペイン語フレーズ完全ガイド。状況別会話例と発音付きで、旅先ですぐに実践できる必須表現を厳選。",
    creator: '@santiagojunrei',
    images: ['/og/phrases-og.jpg'],
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
// Componente de datos estructurados para frases
function PhrasesStructuredData() {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: '便利なフレーズ集｜サンティアゴ巡礼で使える実践スペイン語会話',
    description: 'サンティアゴ巡礼ですぐに使えるスペイン語フレーズ完全ガイド。状況別会話例と発音付きで、旅先ですぐに実践できる必須表現を厳選。',
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
      '@id': 'https://santiagojunrei.com/spanish/phrases'
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
          name: '便利なフレーズ集',
          item: 'https://santiagojunrei.com/spanish/phrases'
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
type Phrase = { spanish: string; pronunciation: string; japanese: string; };
type DialogueLine = { speaker: string; spanish: string; pronunciation: string; japanese: string; };
type PhraseSectionProps = { id: string; title: string; conversationTitle: string; dialogue: DialogueLine[]; phrases: Phrase[]; tip: string; };

// --- DATOS DE LA PÁGINA ---
const phraseData: PhraseSectionProps[] = [
  {
    id: "basic",
    title: "基本的な会話",
    conversationTitle: "挨拶と自己紹介",
    dialogue: [
      { speaker: "スペイン人:", spanish: "¡Hola! ¿Cómo estás?", pronunciation: "オラ！ コモ エスタス？", japanese: "こんにちは！調子はどう？" },
      { speaker: "あなた:", spanish: "Bien, gracias. ¿Y tú?", pronunciation: "ビエン、グラシアス。イ トゥ？", japanese: "元気です、ありがとう。あなたは？" },
      { speaker: "スペイン人:", spanish: "Muy bien. ¿Cómo te llamas?", pronunciation: "ムイ ビエン。コモ テ ジャマス？", japanese: "とても元気です。お名前は？" },
      { speaker: "あなた:", spanish: "Me llamo [あなたの名前]. Soy de Japón.", pronunciation: "メ ジャモ [あなたの名前]。ソイ デ ハポン。", japanese: "私の名前は[あなたの名前]です。日本から来ました。" },
      { speaker: "スペイン人:", spanish: "¡Encantado/a de conocerte! ¿Estás haciendo el Camino?", pronunciation: "エンカンタド/ダ デ コノセルテ！エスタス アシエンド エル カミーノ？", japanese: "はじめまして！巡礼の道を歩いているの？" },
      { speaker: "あなた:", spanish: "Sí, estoy haciendo el Camino Francés.", pronunciation: "スィ、エストイ アシエンド エル カミーノ フランセス。", japanese: "はい、フランス人の道を歩いています。" },
    ],
    phrases: [
      { spanish: "Buenos días / Buenas tardes / Buenas noches", pronunciation: "ブエノス ディアス / ブエナス タルデス / ブエナス ノチェス", japanese: "おはようございます / こんにちは / こんばんは" },
      { spanish: "¡Buen Camino!", pronunciation: "ブエン カミーノ！", japanese: "良い旅を！（巡礼者の挨拶）" },
      { spanish: "Gracias / Muchas gracias", pronunciation: "グラシアス / ムチャス グラシアス", japanese: "ありがとう / どうもありがとう" },
      { spanish: "Por favor", pronunciation: "ポル ファボール", japanese: "お願いします" },
      { spanish: "Disculpe / Perdón", pronunciation: "ディスクルペ / ペルドン", japanese: "すみません / ごめんなさい" },
      { spanish: "No entiendo", pronunciation: "ノ エンティエンド", japanese: "わかりません" },
      { spanish: "¿Puede hablar más despacio, por favor?", pronunciation: "プエデ アブラル マス デスパシオ、ポル ファボール？", japanese: "もう少しゆっくり話していただけますか？" },
      { spanish: "¿Habla inglés?", pronunciation: "アブラ イングレス？", japanese: "英語を話しますか？" },
      { spanish: "Sí / No", pronunciation: "スィ / ノ", japanese: "はい / いいえ" },
      { spanish: "Hasta luego / Adiós", pronunciation: "アスタ ルエゴ / アディオス", japanese: "またね / さようなら" },
    ],
    tip: "「¡Buen Camino!」は巡礼路で最も頻繁に交わされる挨拶です。他の巡礼者やホスト、地元の人々と出会ったときに使いましょう。また、スペイン語が話せなくても、基本的な挨拶と「Gracias（ありがとう）」を覚えておくだけで、現地の人々との関係が格段に良くなります。"
  },
  {
    id: "albergue",
    title: "アルベルゲでの会話",
    conversationTitle: "アルベルゲでのチェックイン",
    dialogue: [
        { speaker: "あなた:", spanish: "Buenas tardes. ¿Hay plazas disponibles?", pronunciation: "ブエナス タルデス。アイ プラサス ディスポニブレス？", japanese: "こんにちは。空きはありますか？" },
        { speaker: "ホスピタレロ:", spanish: "Sí, tenemos camas disponibles. ¿Tienes credencial?", pronunciation: "スィ、テネモス カマス ディスポニブレス。ティエネス クレデンシアル？", japanese: "はい、ベッドの空きがあります。巡礼手帳を持っていますか？" },
        { speaker: "あなた:", spanish: "Sí, aquí está mi credencial.", pronunciation: "スィ、アキ エスタ ミ クレデンシアル。", japanese: "はい、こちらが私の巡礼手帳です。" },
        { speaker: "ホスピタレロ:", spanish: "Son 10 euros por persona. La cocina está disponible hasta las 22:00 y el desayuno es a las 7:00.", pronunciation: "ソン ディエス エウロス ポル ペルソナ。ラ コシーナ エスタ ディスポニブレ アスタ ラス ベインティドス イ エル デサユーノ エス ア ラス シエテ。", japanese: "一人10ユーロです。キッチンは22時まで使えて、朝食は7時からです。" },
        { speaker: "あなた:", spanish: "¿A qué hora cierra el albergue?", pronunciation: "ア ケ オラ シエラ エル アルベルゲ？", japanese: "アルベルゲは何時に閉まりますか？" },
        { speaker: "ホスピタレロ:", spanish: "El toque de queda es a las 22:30. Aquí tienes tu sello y las llaves de la taquilla.", pronunciation: "エル トケ デ ケダ エス ア ラス ベインティドス イ メディア。アキ ティエネス トゥ セージョ イ ラス ジャベス デ ラ タキージャ。", japanese: "門限は22時30分です。こちらがスタンプとロッカーの鍵です。" },
    ],
    phrases: [
        { spanish: "¿Cuánto cuesta la noche?", pronunciation: "クアント クエスタ ラ ノチェ？", japanese: "一泊いくらですか？" },
        { spanish: "¿Dónde están los baños/duchas?", pronunciation: "ドンデ エスタン ロス バニョス/ドゥチャス？", japanese: "トイレ/シャワーはどこですか？" },
        { spanish: "¿Hay lavadora/secadora?", pronunciation: "アイ ラバドーラ/セカドーラ？", japanese: "洗濯機/乾燥機はありますか？" },
        { spanish: "¿Cuánto cuesta lavar la ropa?", pronunciation: "クアント クエスタ ラバル ラ ロパ？", japanese: "洗濯はいくらですか？" },
        { spanish: "¿Hay WiFi? ¿Cuál es la contraseña?", pronunciation: "アイ ウィフィ？ クアル エス ラ コントラセーニャ？", japanese: "WiFiはありますか？パスワードは何ですか？" },
        { spanish: "¿A qué hora es el desayuno?", pronunciation: "ア ケ オラ エス エル デサユーノ？", japanese: "朝食は何時ですか？" },
        { spanish: "¿Puedo dejar mi mochila aquí?", pronunciation: "プエド デハル ミ モチラ アキ？", japanese: "バックパックをここに置いておいてもいいですか？" },
        { spanish: "¿Hay supermercado/farmacia cerca?", pronunciation: "アイ スペルメルカド/ファルマシア セルカ？", japanese: "近くにスーパー/薬局はありますか？" },
        { spanish: "¿Dónde puedo tender la ropa?", pronunciation: "ドンデ プエド テンデル ラ ロパ？", japanese: "どこで洗濯物を干せますか？" },
        { spanish: "¿Hay cocina para peregrinos?", pronunciation: "アイ コシーナ パラ ペレグリノス？", japanese: "巡礼者用のキッチンはありますか？" },
    ],
    tip: "多くのアルベルゲは先着順で、予約ができないことが一般的です。人気のある場所や繁忙期は早めに到着することをお勧めします。また、ほとんどのアルベルゲでは現金のみの支払いとなるため、十分な現金（ユーロ）を持っておきましょう。"
  },
  {
    id: "restaurant",
    title: "レストランでの会話",
    conversationTitle: "レストランでの注文",
    dialogue: [
        { speaker: "ウェイター:", spanish: "Buenas tardes. ¿Qué desean?", pronunciation: "ブエナス タルデス。ケ デセアン？", japanese: "こんにちは。何にしますか？" },
        { speaker: "あなた:", spanish: "Hola. ¿Tienen menú del peregrino?", pronunciation: "オラ。ティエネン メヌー デル ペレグリノ？", japanese: "こんにちは。巡礼者メニューはありますか？" },
        { speaker: "ウェイター:", spanish: "Sí, el menú del peregrino incluye primer plato, segundo plato, postre, pan, agua y vino por 12 euros.", pronunciation: "スィ、エル メヌー デル ペレグリノ インクルイェ プリメル プラト、セグンド プラト、ポストレ、パン、アグア イ ビノ ポル ドセ エウロス。", japanese: "はい、巡礼者メニューは前菜、メイン、デザート、パン、水とワインが12ユーロです。" },
        { speaker: "あなた:", spanish: "¿Qué opciones hay para el primer plato?", pronunciation: "ペルフェクト。ケ オプシオネス アイ パラ エル プリメル プラト？", japanese: "いいですね。前菜には何がありますか？" },
        { speaker: "ウェイター:", spanish: "Tenemos sopa de verduras, ensalada mixta o pasta.", pronunciation: "テネモス ソパ デ ベルドゥラス、エンサラダ ミクスタ オ パスタ。", japanese: "野菜スープ、ミックスサラダ、パスタがあります。" },
        { speaker: "あなた:", spanish: "Tomaré la ensalada mixta. Y para el segundo plato, ¿qué recomienda?", pronunciation: "トマレ ラ エンサラダ ミクスタ。イ パラ エル セグンド プラト、ケ レコミエンダ？", japanese: "ミックスサラダにします。メインは何がおすすめですか？" },
        { speaker: "ウェイター:", spanish: "Recomiendo el pulpo a la gallega, es una especialidad de Galicia.", pronunciation: "レコミエンド エル プルポ ア ラ ガジェガ、エス ウナ エスペシアリダッ デ ガリシア。", japanese: "ガリシア風タコ料理がおすすめです。ガリシア地方の名物です。" },
        { speaker: "あなた:", spanish: "Perfecto, probaré el pulpo. Y agua, por favor.", pronunciation: "ペルフェクト、プロバレ エル プルポ。イ アグア、ポル ファボール。", japanese: "いいですね、タコ料理にします。そして水をお願いします。" },
    ],
    phrases: [
        { spanish: "Una mesa para [número] personas, por favor", pronunciation: "ウナ メサ パラ [数字] ペルソナス、ポル ファボール", japanese: "[人数]人の席をお願いします" },
        { spanish: "¿Puedo ver el menú?", pronunciation: "プエド ベル エル メヌー？", japanese: "メニューを見せていただけますか？" },
        { spanish: "¿Qué me recomienda?", pronunciation: "ケ メ レコミエンダ？", japanese: "何がおすすめですか？" },
        { spanish: "Soy vegetariano/a", pronunciation: "ソイ ベヘタリアーノ/ナ", japanese: "ベジタリアンです" },
        { spanish: "Tengo alergia a [alimento]", pronunciation: "テンゴ アレルヒア ア [食品名]", japanese: "[食品名]にアレルギーがあります" },
        { spanish: "¿Está picante?", pronunciation: "エスタ ピカンテ？", japanese: "辛いですか？" },
        { spanish: "La cuenta, por favor", pronunciation: "ラ クエンタ、ポル ファボール", japanese: "お会計をお願いします" },
        { spanish: "¿Puedo pagar con tarjeta?", pronunciation: "プエド パガル コン タルヘタ？", japanese: "カードで支払えますか？" },
        { spanish: "¿Tienen platos típicos de esta región?", pronunciation: "ティエネン プラトス ティピコス デ エスタ レヒオン？", japanese: "この地域の郷土料理はありますか？" },
        { spanish: "Está muy rico/delicioso", pronunciation: "エスタ ムイ リコ/デリシオソ", japanese: "とても美味しいです" },
    ],
    tip: "「Menú del peregrino」（巡礼者メニュー）は多くのレストランで提供される固定価格のセットメニューで、通常は前菜、メイン、デザート、パン、ワイン/水が含まれます。10〜15ユーロ程度で栄養価の高い食事が取れるので、巡礼者に人気です。ガリシア地方では「プルポ・ア・ラ・ガジェガ」（ガリシア風タコ料理）や「カルド・ガジェゴ」（ガリシア風スープ）などの郷土料理を試してみることをお勧めします。"
  },
  {
    id: "shopping",
    title: "買い物での会話",
    conversationTitle: "スーパーマーケットでの買い物",
    dialogue: [
        { speaker: "あなた:", spanish: "Buenos días. ¿Dónde puedo encontrar agua y fruta?", pronunciation: "ブエノス ディアス。ドンデ プエド エンコントラル アグア イ フルタ？", japanese: "おはようございます。水とフルーツはどこで見つけられますか？" },
        { speaker: "店員:", spanish: "El agua está en el pasillo 2 y la fruta en el pasillo 5, al fondo.", pronunciation: "エル アグア エスタ エン エル パシージョ ドス イ ラ フルタ エン エル パシージョ シンコ、アル フォンド。", japanese: "水は2番通路に、フルーツは5番通路の奥にあります。" },
        { speaker: "あなた:", spanish: "Gracias. ¿Tienen pan fresco?", pronunciation: "グラシアス。ティエネン パン フレスコ？", japanese: "ありがとう。焼きたてのパンはありますか？" },
        { speaker: "店員:", spanish: "Sí, en la panadería, junto a la entrada.", pronunciation: "スィ、エン ラ パナデリア、フント ア ラ エントラダ。", japanese: "はい、入口近くのパン売り場にあります。" },
        { speaker: "あなた (レジで):", spanish: "¿Cuánto es en total?", pronunciation: "クアント エス エン トタル？", japanese: "合計でいくらですか？" },
        { speaker: "レジ係:", spanish: "Son 8 euros con 50 céntimos.", pronunciation: "ソン オチョ エウロス コン シンクエンタ センティモス。", japanese: "8ユーロ50セントです。" },
    ],
    phrases: [
        { spanish: "¿Cuánto cuesta esto?", pronunciation: "クアント クエスタ エスト？", japanese: "これはいくらですか？" },
        { spanish: "¿Tienen [producto]?", pronunciation: "ティエネン [製品名]？", japanese: "[製品名]はありますか？" },
        { spanish: "¿Dónde está la farmacia más cercana?", pronunciation: "ドンデ エスタ ラ ファルマシア マス セルカナ？", japanese: "最寄りの薬局はどこですか？" },
        { spanish: "Necesito [producto] para ampollas", pronunciation: "ネセシト [製品名] パラ アンポージャス", japanese: "水ぶくれ用の[製品名]が必要です" },
        { spanish: "¿A qué hora abren/cierran?", pronunciation: "ア ケ オラ アブレン/シエラン？", japanese: "何時に開店/閉店しますか？" },
        { spanish: "¿Hay algún cajero automático cerca?", pronunciation: "アイ アルグン カヘロ アウトマティコ セルカ？", japanese: "近くにATMはありますか？" },
        { spanish: "¿Puedo probarme esto?", pronunciation: "プエド プロバルメ エスト？", japanese: "これを試着できますか？" },
        { spanish: "¿Tienen una talla más grande/pequeña?", pronunciation: "ティエネン ウナ タージャ マス グランデ/ペケーニャ？", japanese: "もっと大きい/小さいサイズはありますか？" },
        { spanish: "Solo estoy mirando, gracias", pronunciation: "ソロ エストイ ミランド、グラシアス", japanese: "見ているだけです、ありがとう" },
        { spanish: "¿Me puede dar una bolsa, por favor?", pronunciation: "メ プエデ ダル ウナ ボルサ、ポル ファボール？", japanese: "袋をいただけますか？" },
    ],
    tip: "スペインの小さな村では、お店の営業時間が限られていることがあります。多くの店は昼休み（siesta）のために14:00〜17:00頃閉店します。また、日曜日は多くの店が休業するので、事前に必要なものを購入しておきましょう。薬局（farmacia）は緑の十字マークが目印で、水ぶくれや筋肉痛などの巡礼者によくある症状に対応する薬を扱っています。"
  },
  {
    id: "directions",
    title: "道案内と方向",
    conversationTitle: "道を尋ねる",
    dialogue: [
        { speaker: "あなた:", spanish: "Disculpe, ¿por dónde va el Camino?", pronunciation: "ディスクルペ、ポル ドンデ バ エル カミーノ？", japanese: "すみません、巡礼路はどちらですか？" },
        { speaker: "地元の人:", spanish: "Siga recto por esta calle, luego gire a la derecha en la iglesia. Verá las flechas amarillas.", pronunciation: "スィガ レクト ポル エスタ カジェ、ルエゴ ヒレ ア ラ デレチャ エン ラ イグレシア。ベラ ラス フレチャス アマリージャス。", japanese: "この通りをまっすぐ進んで、教会で右に曲がってください。黄色い矢印が見えるでしょう。" },
        { speaker: "あなた:", spanish: "¿Cuánto falta para llegar a [próximo pueblo]?", pronunciation: "クアント ファルタ パラ ジェガル ア [次の村の名前]？", japanese: "[次の村の名前]まであとどのくらいですか？" },
        { speaker: "地元の人:", spanish: "Unos 5 kilómetros. Hay una fuente de agua a mitad de camino.", pronunciation: "ウノス シンコ キロメトロス。アイ ウナ フエンテ デ アグア ア ミタッ デ カミーノ。", japanese: "約5キロメートルです。途中に水飲み場があります。" },
    ],
    phrases: [
        { spanish: "¿Dónde está...?", pronunciation: "ドンデ エスタ...？", japanese: "...はどこですか？" },
        { spanish: "¿Cómo llego a...?", pronunciation: "コモ ジェゴ ア...？", japanese: "...にはどうやって行きますか？" },
        { spanish: "¿Está lejos?", pronunciation: "エスタ レホス？", japanese: "遠いですか？" },
        { spanish: "¿Cuánto tiempo se tarda en llegar?", pronunciation: "クアント ティエンポ セ タルダ エン ジェガル？", japanese: "到着するのにどのくらい時間がかかりますか？" },
        { spanish: "Derecha / Izquierda", pronunciation: "デレチャ / イスキエルダ", japanese: "右 / 左" },
        { spanish: "Recto / Todo recto", pronunciation: "レクト / トド レクト", japanese: "まっすぐ / ずっとまっすぐ" },
        { spanish: "Cerca / Lejos", pronunciation: "セルカ / レホス", japanese: "近く / 遠く" },
        { spanish: "¿Hay alguna fuente de agua por el camino?", pronunciation: "アイ アルグナ フエンテ デ アグア ポル エル カミーノ？", japanese: "道中に水飲み場はありますか？" },
        { spanish: "¿Este camino lleva a Santiago?", pronunciation: "エステ カミーノ ジェバ ア サンティアゴ？", japanese: "この道はサンティアゴに続いていますか？" },
        { spanish: "Me he perdido", pronunciation: "メ エ ペルディド", japanese: "道に迷いました" },
    ],
    tip: "黄色い矢印（flecha amarilla）とホタテ貝のシンボル（concha）が巡礼路の主な道標です。迷った場合は「¿Por dónde va el Camino?」（巡礼路はどちらですか？）と地元の人に尋ねましょう。また、スマートフォンのGPSアプリも便利ですが、バッテリーの節約のため、伝統的な道標も確認する習慣をつけることをお勧めします。"
  },
  {
    id: "health",
    title: "健康と緊急時",
    conversationTitle: "薬局での会話",
    dialogue: [
        { speaker: "あなた:", spanish: "Buenos días. Tengo una ampolla en el pie. ¿Qué me recomienda?", pronunciation: "ブエノス ディアス。テンゴ ウナ アンポージャ エン エル ピエ。ケ メ レコミエンダ？", japanese: "おはようございます。足に水ぶくれがあります。何かおすすめはありますか？" },
        { speaker: "薬剤師:", spanish: "Le recomiendo estas tiritas especiales para ampollas y este antiséptico.", pronunciation: "レ レコミエンド エスタス ティリタス エスペシアレス パラ アンポージャス イ エステ アンティセプティコ。", japanese: "この水ぶくれ専用の絆創膏とこの消毒液をお勧めします。" },
        { speaker: "あなた:", spanish: "Gracias. También tengo dolor muscular en las piernas. ¿Tiene algo para eso?", pronunciation: "グラシアス。タンビエン テンゴ ドロール ムスクラル エン ラス ピエルナス。ティエネ アルゴ パラ エソ？", japanese: "ありがとうございます。脚の筋肉痛もあります。それに効くものはありますか？" },
        { speaker: "薬剤師:", spanish: "Sí, este gel es muy bueno para el dolor muscular. Aplíquelo dos veces al día.", pronunciation: "スィ、エステ ヘル エス ムイ ブエノ パラ エル ドロール ムスクラル。アプリケロ ドス ベセス アル ディア。", japanese: "はい、このジェルは筋肉痛に非常に効果的です。1日2回塗ってください。" },
    ],
    phrases: [
        { spanish: "No me siento bien", pronunciation: "ノ メ シエント ビエン", japanese: "具合が悪いです" },
        { spanish: "Me duele [parte del cuerpo]", pronunciation: "メ ドゥエレ [体の部位]", japanese: "[体の部位]が痛いです" },
        { spanish: "Tengo fiebre", pronunciation: "テンゴ フィエブレ", japanese: "熱があります" },
        { spanish: "Necesito un médico", pronunciation: "ネセシト ウン メディコ", japanese: "医者が必要です" },
        { spanish: "¿Dónde está el centro de salud más cercano?", pronunciation: "ドンデ エスタ エル セントロ デ サルー マス セルカノ？", japanese: "最寄りの診療所はどこですか？" },
        { spanish: "Tengo alergia a [medicamento]", pronunciation: "テンゴ アレルヒア ア [薬品名]", japanese: "[薬品名]にアレルギーがあります" },
        { spanish: "¿Tiene algo para el dolor de cabeza/estómago?", pronunciation: "ティエネ アルゴ パラ エル ドロール デ カベサ/エストマゴ？", japanese: "頭痛/胃痛に効くものはありますか？" },
        { spanish: "¿Cómo debo tomar este medicamento?", pronunciation: "コモ デボ トマル エステ メディカメント？", japanese: "この薬はどのように飲めばいいですか？" },
        { spanish: "Necesito ayuda", pronunciation: "ネセシト アユーダ", japanese: "助けが必要です" },
        { spanish: "Es una emergencia", pronunciation: "エス ウナ エメルヘンシア", japanese: "緊急事態です" },
    ],
    tip: "スペインの緊急電話番号は「112」です。緊急時には「Necesito ayuda」（助けが必要です）と言いましょう。多くのアルベルゲには応急処置キットがあり、水ぶくれ（ampolla）などの一般的な問題に対応できます。また、巡礼者保険に加入しておくと安心です。欧州健康保険証（EHIC）を持っているEU市民は、公立の医療機関で無料または割引料金で治療を受けられます。"
  },
  {
    id: "pilgrim",
    title: "巡礼者同士の会話",
    conversationTitle: "他の巡礼者との出会い",
    dialogue: [
        { speaker: "他の巡礼者:", spanish: "¡Hola! ¡Buen Camino! ¿De dónde eres?", pronunciation: "オラ！ブエン カミーノ！デ ドンデ エレス？", japanese: "こんにちは！良い旅を！どこから来たの？" },
        { speaker: "あなた:", spanish: "¡Buen Camino! Soy de Japón. ¿Y tú?", pronunciation: "ブエン カミーノ！ソイ デ ハポン。イ トゥ？", japanese: "良い旅を！日本から来ました。あなたは？" },
        { speaker: "他の巡礼者:", spanish: "Yo soy de Alemania. ¿Dónde empezaste el Camino?", pronunciation: "ヨ ソイ デ アレマニア。ドンデ エンペサステ エル カミーノ？", japanese: "私はドイツから来ました。どこから巡礼を始めたの？" },
        { speaker: "あなた:", spanish: "Empecé en Saint-Jean-Pied-de-Port. Llevo caminando 20 días.", pronunciation: "エンペセ エン サン ジャン ピエ デ ポール。ジェボ カミナンド ベインテ ディアス。", japanese: "サン・ジャン・ピエ・ド・ポーから始めました。20日間歩いています。" },
        { speaker: "他の巡礼者:", spanish: "¡Impresionante! Yo empecé en León hace una semana. ¿Hasta dónde planeas llegar hoy?", pronunciation: "インプレシオナンテ！ヨ エンペセ エン レオン アセ ウナ セマナ。アスタ ドンデ プラネアス ジェガル オイ？", japanese: "すごい！私は1週間前にレオンから始めました。今日はどこまで行く予定？" },
        { speaker: "あなた:", spanish: "Hoy quiero llegar a Portomarín. ¿Y tú?", pronunciation: "オイ キエロ ジェガル ア ポルトマリン。イ トゥ？", japanese: "今日はポルトマリンまで行きたいです。あなたは？" },
    ],
    phrases: [
        { spanish: "¿Cuánto tiempo llevas caminando?", pronunciation: "クアント ティエンポ ジェバス カミナンド？", japanese: "どのくらい歩いているの？" },
        { spanish: "¿Dónde empezaste el Camino?", pronunciation: "ドンデ エンペサステ エル カミーノ？", japanese: "どこから巡礼を始めたの？" },
        { spanish: "¿Es tu primer Camino?", pronunciation: "エス トゥ プリメル カミーノ？", japanese: "初めての巡礼？" },
        { spanish: "¿Qué etapa has disfrutado más?", pronunciation: "ケ エタパ アス ディスフルタド マス？", japanese: "どの区間が一番楽しかった？" },
        { spanish: "¿Has tenido problemas con las ampollas?", pronunciation: "アス テニド プロブレマス コン ラス アンポージャス？", japanese: "水ぶくれで問題があった？" },
        { spanish: "¿Conoces un buen albergue en [pueblo]?", pronunciation: "コノセス ウン ブエン アルベルゲ エン [村の名前]？", japanese: "[村の名前]の良いアルベルゲを知っている？" },
        { spanish: "¿Podemos caminar juntos?", pronunciation: "ポデモス カミナル フントス？", japanese: "一緒に歩きませんか？" },
        { spanish: "¿Cuál es tu motivación para hacer el Camino?", pronunciation: "クアル エス トゥ モティバシオン パラ アセル エル カミーノ？", japanese: "巡礼をする動機は何？" },
        { spanish: "¿Tienes planes para después de Santiago?", pronunciation: "ティエネス プラネス パラ デスプエス デ サンティアゴ？", japanese: "サンティアゴの後の予定は？" },
        { spanish: "¡Nos vemos en el camino!", pronunciation: "ノス ベモス エン エル カミーノ！", japanese: "道中でまた会いましょう！" },
    ],
    tip: "巡礼路では様々な国からの巡礼者と出会う機会があります。言語の壁を恐れずに積極的に交流することで、貴重な情報や友情を得ることができます。多くの巡礼者は英語を話しますが、簡単なスペイン語のフレーズを使うことで、より深いコミュニケーションが可能になります。また、「¡Buen Camino!」（良い旅を！）は巡礼者同士の挨拶として広く使われています。"
  },
  {
    id: "sightseeing",
    title: "観光と文化",
    conversationTitle: "観光スポットでの会話",
    dialogue: [
        { speaker: "あなた:", spanish: "Disculpe, ¿a qué hora abre la catedral?", pronunciation: "ディスクルペ、ア ケ オラ アブレ ラ カテドラル？", japanese: "すみません、大聖堂は何時に開きますか？" },
        { speaker: "案内人:", spanish: "La catedral abre de 7:00 a 20:30. La misa del peregrino es a las 12:00.", pronunciation: "ラ カテドラル アブレ デ シエテ ア ベインテ イ メディア。ラ ミサ デル ペレグリノ エス ア ラス ドセ。", japanese: "大聖堂は7時から20時30分まで開いています。巡礼者のミサは12時です。" },
        { speaker: "あなた:", spanish: "¿Se puede ver el Botafumeiro hoy?", pronunciation: "セ プエデ ベル エル ボタフメイロ オイ？", japanese: "今日はボタフメイロ（大香炉）を見ることができますか？" },
        { speaker: "案内人:", spanish: "El Botafumeiro funciona en la misa de los viernes a las 19:30 y en ocasiones especiales.", pronunciation: "エル ボタフメイロ フンシオナ エン ラ ミサ デ ロス ビエルネス ア ラス ディエシヌエベ イ メディア イ エン オカシオネス エスペシアレス。", japanese: "ボタフメイロは金曜日の19時30分のミサと特別な機会に動きます。" },
    ],
    phrases: [
        { spanish: "¿Qué lugares recomienda visitar?", pronunciation: "ケ ルガレス レコミエンダ ビシタル？", japanese: "おすすめの観光スポットは？" },
        { spanish: "¿Hay visitas guiadas en inglés/japonés?", pronunciation: "アイ ビシタス ギアダス エン イングレス/ハポネス？", japanese: "英語/日本語のガイドツアーはありますか？" },
        { spanish: "¿Cuánto cuesta la entrada?", pronunciation: "クアント クエスタ ラ エントラダ？", japanese: "入場料はいくらですか？" },
        { spanish: "¿Se puede tomar fotos?", pronunciation: "セ プエデ トマル フォトス？", japanese: "写真を撮ってもいいですか？" },
        { spanish: "¿Cuál es la historia de este lugar?", pronunciation: "クアル エス ラ イストリア デ エステ ルガル？", japanese: "この場所の歴史は？" },
        { spanish: "¿Hay algún festival local?", pronunciation: "アイ アルグン フェスティバル ロカル？", japanese: "地元のお祭りはありますか？" },
        { spanish: "¿Qué plato típico debo probar?", pronunciation: "ケ プラト ティピコ デボ プロバル？", japanese: "どんな郷土料理を試すべきですか？" },
        { spanish: "¿Dónde puedo comprar recuerdos?", pronunciation: "ドンデ プエド コンプラル レクエルドス？", japanese: "どこでお土産を買えますか？" },
        { spanish: "¿Qué significa esta tradición?", pronunciation: "ケ シグニフィカ エスタ トラディシオン？", japanese: "この伝統は何を意味しますか？" },
        { spanish: "¿Puedo participar en esta actividad?", pronunciation: "プエド パルティシパル エン エスタ アクティビダッ？", japanese: "このアクティビティに参加できますか？" },
    ],
    tip: "サンティアゴ・デ・コンポステーラの大聖堂では、巡礼者のミサが毎日12時に行われます。特に金曜日の夕方のミサでは、巨大な香炉「ボタフメイロ」が天井近くまで振り子のように揺れる様子を見ることができます。これは巡礼の最後を飾る素晴らしい体験となるでしょう。また、巡礼路沿いの多くの教会や修道院では、巡礼者向けの特別な祝福を行っていることがあります。"
  },
  {
    id: "arrival",
    title: "サンティアゴ到着時",
    conversationTitle: "巡礼事務所での会話",
    dialogue: [
        { speaker: "あなた:", spanish: "Buenos días. He llegado a Santiago y quiero obtener mi Compostela.", pronunciation: "ブエノス ディアス。エ ジェガド ア サンティアゴ イ キエロ オブテネル ミ コンポステラ。", japanese: "おはようございます。サンティアゴに到着し、コンポステラ（巡礼証明書）を取得したいです。" },
        { speaker: "事務所スタッフ:", spanish: "Bienvenido a Santiago. ¿Me permite ver su credencial?", pronunciation: "ビエンベニド ア サンティアゴ。メ ペルミテ ベル ス クレデンシアル？", japanese: "サンティアゴへようこそ。巡礼手帳を見せていただけますか？" },
        { speaker: "あなた:", spanish: "Sí, aquí está. Empecé en Sarria.", pronunciation: "スィ、アキ エスタ。エンペセ エン サリア。", japanese: "はい、こちらです。サリアから始めました。" },
        { speaker: "事務所スタッフ:", spanish: "¿Cuál fue su motivación para hacer el Camino? ¿Religiosa, espiritual o cultural?", pronunciation: "クアル フエ ス モティバシオン パラ アセル エル カミーノ？レリヒオサ、エスピリトゥアル オ クルトゥラル？", japanese: "巡礼の動機は何でしたか？宗教的、精神的、または文化的ですか？" },
        { speaker: "あなた:", spanish: "Mi motivación fue cultural y espiritual.", pronunciation: "ミ モティバシオン フエ クルトゥラル イ エスピリトゥアル。", japanese: "文化的および精神的な動機でした。" },
        { speaker: "事務所スタッフ:", spanish: "Perfecto. Aquí tiene su Compostela. ¡Felicidades por completar el Camino!", pronunciation: "ペルフェクト。アキ ティエネ ス コンポステラ。フェリシダデス ポル コンプレタル エル カミーノ！", japanese: "完璧です。こちらがあなたのコンポステラです。巡礼を完了おめでとうございます！" },
    ],
    phrases: [
        { spanish: "He completado el Camino", pronunciation: "エ コンプレタド エル カミーノ", japanese: "巡礼を完了しました" },
        { spanish: "Quiero obtener mi Compostela", pronunciation: "キエロ オブテネル ミ コンポステラ", japanese: "コンポステラを取得したいです" },
        { spanish: "¿Dónde está la Oficina del Peregrino?", pronunciation: "ドンデ エスタ ラ オフィシナ デル ペレグリノ？", japanese: "巡礼者事務所はどこですか？" },
        { spanish: "¿A qué hora es la misa del peregrino?", pronunciation: "ア ケ オラ エス ラ ミサ デル ペレグリノ？", japanese: "巡礼者のミサは何時ですか？" },
        { spanish: "¿Dónde puedo guardar mi mochila/bicicleta?", pronunciation: "ドンデ プエド グアルダル ミ モチラ/ビシクレタ？", japanese: "バックパック/自転車をどこに保管できますか？" },
        { spanish: "¿Hay algún hotel/albergue recomendado?", pronunciation: "アイ アルグン オテル/アルベルゲ レコメンダド？", japanese: "おすすめのホテル/アルベルゲはありますか？" },
        { spanish: "¿Cómo llego al aeropuerto?", pronunciation: "コモ ジェゴ アル アエロプエルト？", japanese: "空港にはどうやって行きますか？" },
        { spanish: "¿Dónde puedo enviar mi equipaje a Japón?", pronunciation: "ドンデ プエド エンビアル ミ エキパヘ ア ハポン？", japanese: "荷物を日本に送るにはどこで手続きできますか？" },
        { spanish: "¿Hay algún tour de la ciudad?", pronunciation: "アイ アルグン トゥール デ ラ シウダッ？", japanese: "市内ツアーはありますか？" },
        { spanish: "Ha sido una experiencia increíble", pronunciation: "ア シド ウナ エクスペリエンシア インクレイブレ", japanese: "素晴らしい経験でした" },
    ],
    tip: "サンティアゴに到着したら、巡礼者事務所（Oficina del Peregrino）でコンポステラ（巡礼証明書）を取得しましょう。混雑を避けるため、朝早くか夕方遅くに訪れることをお勧めします。コンポステラを取得するには、少なくとも最後の100kmを歩いた（または200kmを自転車で走った）証明として、巡礼手帳に十分なスタンプが必要です。また、サンティアゴでは数日滞在して、大聖堂や旧市街を探索する時間を取ることをお勧めします。"
  },
];

// --- COMPONENTES DE RENDERIZADO ---
const DialogueComponent = ({ dialogue }: { dialogue: DialogueLine[] }) => (
  <div className="dialogue space-y-4">
    {dialogue.map((line, index) => (
      <div key={index} className="flex flex-col sm:flex-row sm:items-start">
        <div className="speaker font-semibold text-gray-800 w-24 shrink-0 mb-1 sm:mb-0">{line.speaker}</div>
        <div className="speech bg-white p-3 rounded-lg shadow-sm grow">
          <p className="spanish font-medium text-gray-900">{line.spanish}</p>
          <p className="pronunciation text-sm text-blue-600 mt-1">{line.pronunciation}</p>
          <p className="japanese text-sm text-gray-600 mt-1">{line.japanese}</p>
        </div>
      </div>
    ))}
  </div>
);

const PhrasesComponent = ({ phrases }: { phrases: Phrase[] }) => (
  <div className="useful-phrases mt-8 space-y-4">
    <h3 className="text-2xl font-bold text-gray-800 border-b-2 border-blue-200 pb-2">便利なフレーズ</h3>
    {phrases.map((phrase, index) => (
      <div key={index} className="phrase-item bg-gray-50 p-4 rounded-lg">
        <p className="spanish font-semibold text-gray-900">{phrase.spanish}</p>
        <p className="pronunciation text-sm text-blue-600 mt-1">{phrase.pronunciation}</p>
        <p className="japanese text-sm text-gray-600 mt-1">{phrase.japanese}</p>
      </div>
    ))}
  </div>
);

const SectionComponent = ({ id, title, conversationTitle, dialogue, phrases, tip }: PhraseSectionProps) => (
  <section id={id} className="mb-16 scroll-mt-32">
    <h2 className="text-3xl font-bold text-gray-900 mb-6 border-l-4 border-blue-600 pl-4">{title}</h2>
    <div className="conversation-example bg-gray-100 p-6 rounded-lg shadow-md">
      <h3 className="conversation-title text-2xl font-semibold text-gray-800 mb-4">{conversationTitle}</h3>
      <DialogueComponent dialogue={dialogue} />
    </div>
    <PhrasesComponent phrases={phrases} />
    <div className="camino-tip bg-yellow-50 border-l-4 border-yellow-500 text-yellow-800 p-4 rounded-lg mt-8">
      <h4 className="font-bold">巡礼者へのアドバイス</h4>
      <p className="mt-2">{tip}</p>
    </div>
  </section>
);

// --- COMPONENTE PRINCIPAL DE LA PÁGINA ---
export default function PhrasesPage() {
  return (
    
     <>
      <PhrasesStructuredData />  {/* ← AÑADE ESTA LÍNEA */}
      <div className="container mx-auto px-4 py-12">
      {/* Breadcrumbs */}
      <div className="breadcrumbs-horizontal mb-8 text-sm text-gray-600">
        <ul className="flex space-x-2">
          <li><Link href="/" className="hover:text-blue-600">ホーム</Link></li>
          <li className="separator">&gt;</li>
          <li><Link href="/spanish" className="hover:text-blue-600">スペイン語レッスン</Link></li>
          <li className="separator">&gt;</li>
          <li className="current">便利なフレーズ集</li>
        </ul>
      </div>

      <header className="mb-12">
        <h1 className="text-4xl font-bold mb-4">💬 便利なフレーズ集</h1>
        <p className="text-lg text-gray-600">このページでは、サンティアゴ巡礼の旅で役立つスペイン語のフレーズを状況別にまとめています。実際の会話例と発音ガイド付きで、すぐに使えるフレーズを集めました。これらのフレーズを覚えておくことで、巡礼路での様々な状況に対応できるようになります。</p>
      </header>

      {/* Table of Contents */}
      <div className="bg-gray-50 p-6 rounded-lg mb-12 border border-gray-200">
        <h2 className="text-2xl font-bold mb-4">目次</h2>
        <ul className="space-y-2 text-blue-600">
          <li><a href="#basic" className="hover:underline">→ 基本的な会話</a></li>
          <li><a href="#albergue" className="hover:underline">→ アルベルゲでの会話</a></li>
          <li><a href="#restaurant" className="hover:underline">→ レストランでの会話</a></li>
          <li><a href="#shopping" className="hover:underline">→ 買い物での会話</a></li>
          <li><a href="#directions" className="hover:underline">→ 道案内と方向</a></li>
          <li><a href="#health" className="hover:underline">→ 健康と緊急時</a></li>
          <li><a href="#pilgrim" className="hover:underline">→ 巡礼者同士の会話</a></li>
          <li><a href="#sightseeing" className="hover:underline">→ 観光と文化</a></li>
          <li><a href="#arrival" className="hover:underline">→ サンティアゴ到着時</a></li>
        </ul>
      </div>

      <main>
        {phraseData.map(section => (
          <SectionComponent key={section.id} {...section} />
        ))}
      </main>

      {/* ✅ Action Buttons - COMPONENTE REUTILIZABLE */}
      <ActionButtons className="mt-8" />

      {/* ✅ Navigation - COMPONENTE REUTILIZABLE */}
      <LessonNavigation 
        prevHref="/spanish/vocabulary"
        prevText="単語集"
        nextHref="/spanish/pronunciation"
        nextText="発音ガイド"
      />
    </div>
    </>
  );
}