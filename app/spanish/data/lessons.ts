// app/spanish/data/lessons.ts

// --- INICIO DE LA SECCIÓN DE TIPOS (VERSIÓN FINAL Y COMPLETA) ---

// Tipos para contenido específico
type DialogueLine = {
  speaker: string;
  sentence: string;
  pronunciation: string;
};

type VocabularyCard = {
  spanish: string;
  japanese: string;
  context?: string; // El contexto es opcional
};

// Tipos para las diferentes secciones que puede tener una lección
type ConversationSection = {
  type: 'conversation';
  title: string;
  dialogue: DialogueLine[];
  explanation: string[];
};

type VocabularySection = {
  type: 'vocabulary';
  title: string;
  items: VocabularyCard[];
};

type GrammarSection = {
  type: 'grammar';
  title: string;
  introduction: string;
  conjugation: {
    verb: string;
    examples: string[];
  };
};

type ExerciseSection = {
  type: 'exercise';
  title: string;
  introduction: string;
  questions: string[];
};

type InfoSection = {
  type: 'note' | 'tip' | 'buen_camino';
  content: string;
};

// Unión de todos los tipos de sección posibles
type LessonSection = ConversationSection | VocabularySection | GrammarSection | ExerciseSection | InfoSection;

// El tipo 'Lesson' definitivo
export type Lesson = {
  id: number;
  title: string;
  description: string;
  filename: string;
  conversationCount: number;
  introduction: string;
  mainTip: string;
  sections: LessonSection[]; // El contenido principal de la lección
};

// --- FIN DE LA SECCIÓN DE TIPOS ---

export const lessons: Lesson[] = [
  // =================================
  // LECCIÓN 1 (VERSIÓN COMPLETA FINAL)
  // =================================
 
{
    "id": 1,
    "title": "レッスン 1: スペイン語の基本的なあいさつ",
    "description": "サンティアゴ巡礼のための日本語で学ぶスペイン語",
    "filename": "スペイン語レッスン１挨拶.html",
    "conversationCount": 5,
    "introduction": "この旅を一緒に始められることを嬉しく思います。この最初のレッスンでは、サンティアゴ巡礼の道中で役立つスペイン語での自己紹介と基本的な会話を学びます。巡礼者同士の交流に役立つフレーズを覚えましょう！",
    "mainTip": "サンティアゴ巡礼では、世界中からの巡礼者と出会う機会がたくさんあります。簡単なスペイン語の挨拶を覚えておくと、現地の人々や他の巡礼者との交流がより豊かになります。",
    "sections": [
      {
        "type": "conversation",
        "title": "会話 1: 巡礼者同士の初めてのあいさつ",
        "dialogue": [
          { "speaker": "Yuki", "sentence": "¡Hola! Me llamo Yuki. Soy peregrino de Japón. ¿Y tú?", "pronunciation": "ユキ: オラ！ メ リャモ ユキ。ソイ ペレグリノ デ ハポン。 イ トゥ？ (やあ！私の名前はユキです。日本からの巡礼者です。あなたは？)" },
          { "speaker": "Carlos", "sentence": "¡Hola, Yuki! Me llamo Carlos. Soy de España. ¡Buen Camino!", "pronunciation": "カルロス: オラ、ユキ！ メ リャモ カルロス。ソイ デ エスパーニャ。ブエン カミーノ！ (やあ、ユキ！私の名前はカルロスです。スペイン出身です。良い旅を！)" }
        ],
        "explanation": [
          "¡Hola!: 「やあ！」とか「こんにちは！」という意味です。元気よく言いましょう！",
          "Me llamo [名前]: 「私の名前は[名前]です。」という意味。自分の名前を言うときはこれ！",
          "Soy peregrino de Japón: 「私は日本からの巡礼者です」という意味。巡礼者同士の会話の始まりに最適です。",
          "¡Buen Camino!: 「良い旅を！」という意味。巡礼者同士の特別な挨拶で、道中でよく使われます。"
        ]
      },
      {
        "type": "conversation",
        "title": "会話 2: アルベルゲ（巡礼宿）での会話",
        "dialogue": [
          { "speaker": "Yuki", "sentence": "Soy de Japón. Camino desde Sarria. ¿Y tú?", "pronunciation": "ユキ: ソイ デ ハポン。カミノ デスデ サリア。イ トゥ？ (私は日本出身です。サリアから歩いています。あなたは？)" },
          { "speaker": "Carlos", "sentence": "Soy de España. Camino desde Saint-Jean. ¡Qué interesante!", "pronunciation": "カルロス: ソイ デ エスパーニャ。カミノ デスデ サン・ジャン。ケ インテレサンテ！ (私はスペイン出身です。サン・ジャンから歩いています。面白いですね！)" }
        ],
        "explanation": [
          "Camino desde [場所]: 「私は[場所]から歩いています」という意味。自分の出発地を言うときに使います。",
          "Sarria: サリア、サンティアゴ巡礼の最後の100kmの出発地点としてよく知られています。",
          "Saint-Jean: サン・ジャン・ピエ・ド・ポー、フランス側からの巡礼の主な出発地点です。"
        ]
      },
      {
        "type": "conversation",
        "title": "会話 3: 道中での会話",
        "dialogue": [
          { "speaker": "Yuki", "sentence": "Hablo un poco de español. ¿Cuántos kilómetros caminas hoy?", "pronunciation": "ユキ: アブロ ウン ポコ デ エスパニョール。クアントス キロメトロス カミナス オイ？ (私は少しだけスペイン語を話します。今日は何キロ歩きますか？)" },
          { "speaker": "Carlos", "sentence": "Hoy camino 20 kilómetros, hasta Portomarín. ¿Y tú?", "pronunciation": "カルロス: オイ カミノ ベインテ キロメトロス、アスタ ポルトマリン。イ トゥ？ (今日はポルトマリンまで20キロ歩きます。あなたは？)" }
        ],
        "explanation": [
          "Hablo un poco de español: 「私は少しだけスペイン語を話します」という意味。まだ勉強中だと言いたいときに使おう！",
          "¿Cuántos kilómetros caminas hoy?: 「今日は何キロ歩きますか？」という意味。巡礼者同士でよく交わされる質問です。",
          "Portomarín: ポルトマリン、サリアからサンティアゴへの道中にある町の名前です。"
        ]
      },
      {
        "type": "conversation",
        "title": "会話 4: 食事について話す",
        "dialogue": [
          { "speaker": "Yuki", "sentence": "Me gusta la tortilla española. ¿Y a ti?", "pronunciation": "ユキ: メ グスタ ラ トルティージャ エスパニョーラ。イ ア ティ？ (私はスペイン風オムレツが好きです。あなたは？)" },
          { "speaker": "Carlos", "sentence": "A mí me gusta el pulpo a la gallega. ¡Es delicioso!", "pronunciation": "カルロス: ア ミ メ グスタ エル プルポ ア ラ ガジェガ。エス デリシオソ！ (私はガリシア風タコ料理が好きです。とても美味しいです！)" }
        ],
        "explanation": [
          "Me gusta [食べ物]: 「私は[食べ物]が好きです」という意味。ガリシア地方の食べ物について話すときに便利です！",
          "Tortilla española: スペイン風オムレツ、ジャガイモと玉ねぎが入った伝統的なスペイン料理です。",
          "Pulpo a la gallega: ガリシア風タコ料理、サンティアゴ巡礼の道中で有名な郷土料理です。"
        ]
      },
      {
        "type": "conversation",
        "title": "会話 5: 別れ際のあいさつ",
        "dialogue": [
          { "speaker": "Yuki", "sentence": "¡Adiós, Carlos! Fue un placer conocerte. ¡Buen Camino!", "pronunciation": "ユキ: アディオス、カルロス！フエ ウン プラセール コノセルテ。ブエン カミーノ！ (さようなら、カルロス！会えて嬉しかったです。良い旅を！)" },
          { "speaker": "Carlos", "sentence": "¡Adiós, Yuki! Nos vemos en Santiago. ¡Buen Camino!", "pronunciation": "カルロス: アディオス、ユキ！ノス ベモス エン サンティアゴ。ブエン カミーノ！ (さようなら、ユキ！サンティアゴで会いましょう。良い旅を！)" }
        ],
        "explanation": [
          "¡Adiós!: 「さようなら！」という意味。別れるときに使います。",
          "Fue un placer conocerte: 「会えて嬉しかったです」という丁寧なフレーズ。初対面の人に使います！",
          "Nos vemos en Santiago: 「サンティアゴで会いましょう」という意味。巡礼者同士の別れ際によく使われます。",
          "¡Buen Camino!: 「良い旅を！」という意味。巡礼者同士の特別な挨拶で、別れ際にも使います。"
        ]
      },
      {
        "type": "exercise",
        "title": "練習問題",
        "introduction": "次の質問に日本語で答えてみましょう：",
        "questions": [
          "巡礼者同士の特別な挨拶は何ですか？",
          "「私は日本からの巡礼者です」をスペイン語で言うと？",
          "「今日は何キロ歩きますか？」をスペイン語で言うと？",
          "ガリシア地方の有名な料理は何ですか？"
        ]
      },
      {
        "type": "note",
        "content": "これらのフレーズは、サンティアゴ巡礼の道中で出会う人々との会話で非常に役立ちます。特に「¡Buen Camino!」は巡礼者同士の連帯感を表す大切な挨拶です。"
      },
      {
        "type": "tip",
        "content": "<strong>巡礼者へのアドバイス:</strong> アルベルゲ（巡礼宿）では、他の国からの巡礼者と交流する絶好の機会があります。簡単なスペイン語の挨拶を使って、国際的な友情を育みましょう！"
      },
      {
        "type": "buen_camino",
        "content": "¡Buen Camino! (ブエン・カミーノ！良い旅を！)"
      }
    ]
},
  // =================================
  // LECCIÓN 2 (VERSIÓN COMPLETA FINAL)
  // =================================
  {
    id: 2,
    title: "レッスン 2: スペイン語の動詞と基本文法",
    description: "サンティアゴ巡礼のための日本語で学ぶスペイン語",
    filename: "スペイン語レッスン２動詞.html",
    conversationCount: 2,
    introduction: "このレッスンでは、サンティアゴ巡礼の道中で役立つスペイン語の動詞と基本文法を学びます。巡礼者として必要な表現を身につけましょう。",
    mainTip: "サンティアゴ巡礼では、宿の予約や道の確認など、基本的な動詞を使った表現が非常に役立ちます。このレッスンで学ぶ表現は、巡礼路での日常会話に必須のものばかりです。",
    sections: [
      {
        type: 'vocabulary',
        title: "1. 巡礼に役立つ基本動詞",
        items: [
          { spanish: "Caminar", japanese: "歩く", context: "巡礼路を歩くときに使います" },
          { spanish: "Descansar", japanese: "休む", context: "休憩するときに使います" },
          { spanish: "Dormir", japanese: "寝る", context: "アルベルゲで宿泊するときに使います" },
          { spanish: "Comer", japanese: "食べる", context: "食事をするときに使います" },
          { spanish: "Reservar", japanese: "予約する", context: "アルベルゲを予約するときに使います" },
          { spanish: "Preguntar", japanese: "質問する", context: "道を尋ねるときに使います" }
        ]
      },
      {
        type: 'grammar',
        title: "2. 現在形の活用",
        introduction: "スペイン語の動詞は、主語によって形が変わります。巡礼中によく使う「歩く(Caminar)」を例に見てみましょう：",
        conjugation: {
          verb: "歩く(Caminar)",
          examples: [
            "Yo camino (私は歩きます) → Yo camino 20 kilómetros hoy. (私は今日20キロ歩きます)",
            "Tú caminas (あなたは歩きます) → ¿Tú caminas hasta Portomarín? (あなたはポルトマリンまで歩きますか？)",
            "Él/Ella camina (彼/彼女は歩きます) → Ella camina muy rápido. (彼女はとても速く歩きます)",
            "Nosotros caminamos (私たちは歩きます) → Nosotros caminamos juntos. (私たちは一緒に歩きます)",
            "Vosotros camináis (あなたたちは歩きます) → ¿Vosotros camináis desde Sarria? (あなたたちはサリアから歩いていますか？)",
            "Ellos/Ellas caminan (彼ら/彼女らは歩きます) → Ellos caminan desde Francia. (彼らはフランスから歩いています)"
          ]
        }
      },
      {
        type: 'tip',
        content: "<strong>巡礼者へのアドバイス:</strong> スペインでは地域によって「あなた」の言い方が異なります。ガリシア地方では主に「tú」が使われますが、他の巡礼者との会話では「vosotros」（あなたたち）もよく使います。"
      },
      {
        type: 'conversation',
        title: "アルベルゲ（巡礼宿）での会話",
        dialogue: [
          { speaker: "Peregrino", sentence: "¿Tienen camas libres para esta noche?", pronunciation: "ペレグリノ: ティエネン カマス リブレス パラ エスタ ノーチェ？ (今夜の空きベッドはありますか？)" },
          { speaker: "Hospitalero", sentence: "Sí, tenemos dos camas libres. ¿Cuántos sois?", pronunciation: "オスピタレロ: シ、テネモス ドス カマス リブレス。クアントス ソイス？ (はい、2つ空きがあります。何人ですか？)" },
          { speaker: "Peregrino", sentence: "Somos dos peregrinos de Japón.", pronunciation: "ペレグリノ: ソモス ドス ペレグリノス デ ハポン。(私たちは日本からの2人の巡礼者です)" }
        ],
        explanation: [
          "¿Tienen...?: 「～を持っていますか？」という質問形。「tener」(持つ)の活用形です。",
          "¿Cuántos sois?: 「何人ですか？」という質問。「ser」(～です)の活用形「sois」を使っています。",
          "Somos: 「私たちは～です」。「ser」の一人称複数形です。"
        ]
      },
      {
        type: 'conversation',
        title: "道を尋ねる会話",
        dialogue: [
          { speaker: "Peregrino japonés", sentence: "Perdón, ¿dónde está el camino a Santiago?", pronunciation: "ペレグリノ ハポネス: ペルドン、ドンデ エスタ エル カミノ ア サンティアゴ？ (すみません、サンティアゴへの道はどこですか？)" },
          { speaker: "Local", sentence: "Sigue las flechas amarillas. El camino está a la derecha.", pronunciation: "ロカル: シゲ ラス フレチャス アマリージャス。エル カミノ エスタ ア ラ デレチャ。(黄色い矢印に従ってください。道は右にあります)" }
        ],
        explanation: [
          "¿Dónde está...?: 「～はどこですか？」という質問形。「estar」(ある、いる)の活用形です。",
          "Sigue: 「従ってください」。「seguir」(従う)の命令形です。",
          "El camino está a la derecha: 「道は右にあります」。方向を示す基本表現です。"
        ]
      },
      {
        type: 'vocabulary',
        title: "4. 巡礼中に役立つ表現",
        items: [
          { spanish: "Necesito sellar mi credencial", japanese: "巡礼手帳にスタンプが必要です" },
          { spanish: "¿A qué hora abren?", japanese: "何時に開きますか？" },
          { spanish: "¿Cuánto cuesta la cama?", japanese: "ベッドはいくらですか？" },
          { spanish: "¿Dónde puedo lavar mi ropa?", japanese: "どこで服を洗えますか？" },
          { spanish: "Me duelen los pies", japanese: "足が痛いです" },
          { spanish: "¿Hay duchas calientes?", japanese: "温かいシャワーはありますか？" }
        ]
      },
      {
        type: 'exercise',
        title: "練習問題",
        introduction: "次の日本語をスペイン語に訳してみましょう：",
        questions: [
          "私は毎日20キロ歩きます。",
          "あなたはどこから歩いていますか？",
          "私たちは明日サンティアゴに到着します。",
          "アルベルゲはどこですか？",
          "巡礼手帳にスタンプが必要です。"
        ]
      },
      {
        type: 'note',
        content: "これらの表現は、サンティアゴ巡礼の道中で非常に役立ちます。特にアルベルゲでの宿泊や道の確認など、日常的な状況で使える基本的な文法と動詞を覚えておきましょう。"
      },
      {
        type: 'buen_camino',
        content: "¡Buen Camino! (ブエン・カミーノ！良い旅を！)"
      }
    ]
  },

// Pega este código en lugar del objeto con id: 3 en tu archivo lessons.ts

{
    id: 3,
    title: "レッスン 3: 数字と時間の表現",
    description: "サンティアゴ巡礼のための日本語で学ぶスペイン語",
    filename: "スペイン語レッスン３数字と時間.html",
    conversationCount: 3,
    introduction: "このレッスンでは、サンティアゴ巡礼の道中で必要な数字と時間の表現を学びます。距離、時間、値段などを表現できるようになりましょう。",
    mainTip: "サンティアゴ巡礼では、距離や時間、アルベルゲの料金などを理解し表現することが非常に重要です。このレッスンで学ぶ表現は、巡礼路での日常会話に必須のものばかりです。",
    sections: [
      {
        type: 'vocabulary',
        title: "1. 数字（1-100）",
        items: [
          { spanish: "1-10: uno, dos, tres, cuatro, cinco, seis, siete, ocho, nueve, diez", japanese: "1-10: ウノ、ドス、トレス、クアトロ、シンコ、セイス、シエテ、オチョ、ヌエベ、ディエス" },
          { spanish: "11-20: once, doce, trece, catorce, quince, dieciséis, diecisiete, dieciocho, diecinueve, veinte", japanese: "11-20: オンセ、ドセ、トレセ、カトルセ、キンセ、ディエシセイス、ディエシシエテ、ディエシオチョ、ディエシヌエベ、ベインテ" },
          { spanish: "10-100: diez, veinte, treinta, cuarenta, cincuenta, sesenta, setenta, ochenta, noventa, cien", japanese: "10-100: ディエス、ベインテ、トレインタ、クアレンタ、シンクエンタ、セセンタ、セテンタ、オチェンタ、ノベンタ、シエン" }
        ]
      },
      {
        type: 'tip',
        content: "<strong>巡礼者へのアドバイス:</strong> サンティアゴ巡礼の最後の100kmでは、各町の間の距離を知ることが重要です。例えば、サリアからポルトマリンまでは約22km、ポルトマリンからパラス・デ・レイまでは約25kmです。"
      },
      {
        type: 'conversation',
        title: "アルベルゲでの会話",
        dialogue: [
          { speaker: "Peregrino", sentence: "¿Cuánto cuesta una cama?", pronunciation: "ペレグリノ: クアント クエスタ ウナ カマ？ (ベッド1つはいくらですか？)" },
          { speaker: "Hospitalero", sentence: "Son diez euros por persona.", pronunciation: "オスピタレロ: ソン ディエス エウロス ポル ペルソナ。(一人10ユーロです)" },
          { speaker: "Peregrino", sentence: "Somos dos personas, así que son veinte euros en total.", pronunciation: "ペレグリノ: ソモス ドス ペルソナス、アシ ケ ソン ベインテ エウロス エン トタル。(私たちは2人なので、合計20ユーロです)" }
        ],
        explanation: [
          "¿Cuánto cuesta...?: 「～はいくらですか？」という質問形。値段を尋ねるときに使います。",
          "Son [数字] euros: 「[数字]ユーロです」という表現。値段を伝えるときに使います。",
          "En total: 「合計で」という表現。計算をするときに便利です。"
        ]
      },
      {
        type: 'conversation',
        title: "距離について尋ねる会話",
        dialogue: [
          { speaker: "Peregrino japonés", sentence: "¿Cuántos kilómetros hay hasta Santiago?", pronunciation: "ペレグリノ ハポネス: クアントス キロメトロス アイ アスタ サンティアゴ？ (サンティアゴまで何キロありますか？)" },
          { speaker: "Local", sentence: "Desde aquí hay unos cincuenta kilómetros hasta Santiago.", pronunciation: "ロカル: デスデ アキ アイ ウノス シンクエンタ キロメトロス アスタ サンティアゴ。(ここからサンティアゴまでは約50キロあります)" }
        ],
        explanation: [
          "¿Cuántos kilómetros hay...?: 「何キロありますか？」という質問形。距離を尋ねるときに使います。",
          "Hay [数字] kilómetros: 「[数字]キロあります」という表現。距離を伝えるときに使います。",
          "Unos/unas: 「約」という意味。正確でない数字を伝えるときに使います。"
        ]
      },
      {
        type: 'vocabulary',
        title: "3. 時間表現",
        items: [
          { spanish: "¿Qué hora es? - Son las [hora]", japanese: "何時ですか？ - [時間]です" },
          { spanish: "Es la una / Son las dos, tres...", japanese: "1時です / 2時、3時...です" },
          { spanish: "y cuarto (15分) / y media (30分) / menos cuarto (45分)", japanese: "15分 / 30分 / 45分" },
          { spanish: "de la mañana (午前) / de la tarde (午後) / de la noche (夜)", japanese: "午前 / 午後 / 夜" }
        ]
      },
      {
        type: 'conversation',
        title: "アルベルゲの時間について尋ねる会話",
        dialogue: [
          { speaker: "Peregrino", sentence: "¿A qué hora abren el albergue?", pronunciation: "ペレグリノ: ア ケ オラ アブレン エル アルベルゲ？ (アルベルゲは何時に開きますか？)" },
          { speaker: "Local", sentence: "Abren a las dos de la tarde.", pronunciation: "ロカル: アブレン ア ラス ドス デ ラ タルデ。(午後2時に開きます)" },
          { speaker: "Peregrino", sentence: "¿Y a qué hora cierran por la noche?", pronunciation: "ペレグリノ: イ ア ケ オラ シエラン ポル ラ ノチェ？ (夜は何時に閉まりますか？)" },
          { speaker: "Local", sentence: "Cierran a las diez menos cuarto.", pronunciation: "ロカル: シエラン ア ラス ディエス メノス クアルト。(9時45分に閉まります)" }
        ],
        explanation: [
          "¿A qué hora...?: 「何時に...？」という質問形。時間を尋ねるときに使います。",
          "A las [hora]: 「[時間]に」という表現。時間を伝えるときに使います。",
          "Por la noche: 「夜に」という表現。時間帯を指定するときに使います。"
        ]
      },
      {
        type: 'vocabulary',
        title: "4. 巡礼に役立つ時間表現",
        items: [
          { spanish: "¿Cuánto tiempo se tarda en llegar a...?", japanese: "...に着くのにどれくらい時間がかかりますか？" },
          { spanish: "Se tarda unas [número] horas en llegar.", japanese: "到着するのに約[数字]時間かかります。" },
          { spanish: "¿A qué hora sale/llega el autobús?", japanese: "バスは何時に出発/到着しますか？" },
          { spanish: "¿Está abierto/cerrado ahora?", japanese: "今開いていますか/閉まっていますか？" },
          { spanish: "Salimos temprano, a las seis de la mañana.", japanese: "朝6時に早く出発します。" },
          { spanish: "La misa del peregrino es a las doce.", japanese: "巡礼者のミサは12時です。" }
        ]
      },
      {
        type: 'exercise',
        title: "練習問題",
        introduction: "次の日本語をスペイン語に訳してみましょう：",
        questions: [
          "サンティアゴまで何キロありますか？",
          "アルベルゲは一人10ユーロです。",
          "今は午後3時30分です。",
          "朝7時に出発します。",
          "ここからポルトマリンまで約5時間かかります。"
        ]
      },
      {
        type: 'note',
        content: "これらの表現は、サンティアゴ巡礼の道中で非常に役立ちます。特に距離、時間、値段などの基本的な数字表現を覚えておくと、巡礼路での生活がスムーズになります。"
      },
      {
        type: 'buen_camino',
        content: "¡Buen Camino! (ブエン・カミーノ！良い旅を！)"
      }
    ]
  },

// Pega este código en lugar del objeto con id: 4 en tu archivo lessons.ts

{
    id: 4,
    title: "レッスン 4: スペイン語の食べ物と飲み物",
    description: "サンティアゴ巡礼のための日本語で学ぶスペイン語",
    filename: "スペイン語レッスン４食べ物と飲み物.html",
    conversationCount: 3,
    introduction: "このレッスンでは、サンティアゴ巡礼の道中で役立つ食べ物と飲み物に関するスペイン語表現を学びます。特にガリシア地方の伝統料理の注文方法や食事に関する会話を身につけましょう。",
    mainTip: "サンティアゴ巡礼では、地元の食文化を楽しむことも大切な体験の一つです。ガリシア地方には「プルポ・ア・ラ・ガジェガ（タコのガリシア風）」や「エンパナーダ（具入りパイ）」など、独特の料理があります。",
    sections: [
      {
        type: 'vocabulary',
        title: "1. ガリシア地方の代表的な料理",
        items: [
          { spanish: "Pulpo a la gallega", japanese: "タコのガリシア風", context: "ガリシア地方の代表的な料理。茹でたタコにオリーブオイル、パプリカ、塩をかけたもの。" },
          { spanish: "Empanada gallega", japanese: "ガリシア風エンパナーダ", context: "具入りのパイ。ツナやタコ、肉などが入っています。" },
          { spanish: "Caldo gallego", japanese: "ガリシア風スープ", context: "ケール、ジャガイモ、豆、豚肉などが入った具だくさんのスープ。" },
          { spanish: "Tarta de Santiago", japanese: "サンティアゴケーキ", context: "アーモンドパウダーを使ったケーキ。サンティアゴの十字架の形が表面に描かれています。" },
          { spanish: "Queso tetilla", japanese: "テティージャチーズ", context: "ガリシア地方の円錐形の柔らかいチーズ。" },
          { spanish: "Vino Albariño", japanese: "アルバリーニョワイン", context: "ガリシア地方の白ワイン。フルーティーで爽やかな味わい。" }
        ]
      },
      {
        type: 'tip',
        content: "<strong>巡礼者へのアドバイス:</strong> 巡礼路のレストランやバルでは、「メニュー・デル・ペレグリノ（巡礼者メニュー）」が提供されていることが多いです。これは前菜、メイン、デザート、飲み物がセットになった定食で、通常10〜12ユーロ程度です。"
      },
      {
        type: 'conversation',
        title: "レストランでの注文",
        dialogue: [
          { speaker: "Peregrino", sentence: "Buenos días. Una mesa para dos personas, por favor.", pronunciation: "ペレグリノ: ブエノス ディアス。ウナ メサ パラ ドス ペルソナス、ポル ファボール。(こんにちは。2人用のテーブルをお願いします。)" },
          { speaker: "Camarero", sentence: "¿Prefieren en la terraza o dentro?", pronunciation: "カマレロ: プレフィエレン エン ラ テラサ オ デントロ？(テラス席と店内、どちらがよろしいですか？)" },
          { speaker: "Peregrino", sentence: "En la terraza, por favor. ¿Tienen el menú del peregrino?", pronunciation: "ペレグリノ: エン ラ テラサ、ポル ファボール。ティエネン エル メヌー デル ペレグリノ？(テラス席でお願いします。巡礼者メニューはありますか？)" },
          { speaker: "Camarero", sentence: "Sí, aquí tienen la carta. El menú del peregrino cuesta 10 euros.", pronunciation: "カマレロ: シ、アキ ティエネン ラ カルタ。エル メヌー デル ペレグリノ クエスタ ディエス エウロス。(はい、こちらがメニューです。巡礼者メニューは10ユーロです。)" }
        ],
        explanation: [
          "Una mesa para [número] personas: 「[人数]人用のテーブル」という表現。レストランで席を予約するときに使います。",
          "¿Prefieren...?: 「～の方がいいですか？」という質問形。選択肢を提示するときに使います。",
          "La terraza: 「テラス席」という意味。スペインでは屋外席が人気です。",
          "La carta: 「メニュー表」という意味。"
        ]
      },
      {
        type: 'conversation',
        title: "料理の注文",
        dialogue: [
          { speaker: "Camarero", sentence: "¿Qué van a tomar?", pronunciation: "カマレロ: ケ バン ア トマール？(何にしますか？)" },
          { speaker: "Peregrino japonés", sentence: "Yo quiero el menú del peregrino con pulpo a la gallega de primero y pescado de segundo. ¿Y tú?", pronunciation: "ペレグリノ ハポネス: ヨ キエロ エル メヌー デル ペレグリノ コン プルポ ア ラ ガジェガ デ プリメロ イ ペスカド デ セグンド。イ トゥ？(私は巡礼者メニューで、前菜にタコのガリシア風、メインに魚料理にします。あなたは？)" },
          { speaker: "Amigo", sentence: "Para mí, el menú también, pero con caldo gallego y carne.", pronunciation: "アミーゴ: パラ ミ、エル メヌー タンビエン、ペロ コン カルド ガジェゴ イ カルネ。(私も巡礼者メニューで、ガリシア風スープと肉料理にします。)" },
          { speaker: "Camarero", sentence: "¿Y para beber?", pronunciation: "カマレロ: イ パラ ベベール？(飲み物は何にしますか？)" },
          { speaker: "Peregrino japonés", sentence: "Una botella de agua y un vino Albariño, por favor.", pronunciation: "ペレグリノ ハポネス: ウナ ボテージャ デ アグア イ ウン ビノ アルバリーニョ、ポル ファボール。(水のボトル1本とアルバリーニョワインをお願いします。)" }
        ],
        explanation: [
          "¿Qué van a tomar?: 「何にしますか？」という質問形。レストランでの注文時によく使われます。",
          "Yo quiero...: 「私は～が欲しいです」という表現。注文するときに使います。",
          "De primero / de segundo: 「前菜に / メインに」という表現。コース料理の順番を指定するときに使います。",
          "Para mí: 「私には」という表現。自分の注文を伝えるときに使います。",
          "¿Y para beber?: 「飲み物は何にしますか？」という質問。"
        ]
      },
      {
        type: 'vocabulary',
        title: "3. 食べ物と飲み物の基本表現",
        items: [
          { spanish: "Tengo hambre / Tengo sed", japanese: "お腹が空いています / 喉が渇いています" },
          { spanish: "¿Dónde hay un restaurante / un bar?", japanese: "レストラン / バーはどこにありますか？" },
          { spanish: "La cuenta, por favor", japanese: "お会計をお願いします" },
          { spanish: "Está muy rico / delicioso", japanese: "とても美味しいです" },
          { spanish: "¿Me puede recomendar algo típico?", japanese: "何か地元の料理をお勧めいただけますか？" },
          { spanish: "Soy vegetariano/a", japanese: "私はベジタリアンです" },
          { spanish: "Tengo alergia a...", japanese: "私は〜にアレルギーがあります" }
        ]
      },
      {
        type: 'conversation',
        title: "食事の後の会話",
        dialogue: [
          { speaker: "Peregrino", sentence: "Estaba todo muy rico. La cuenta, por favor.", pronunciation: "ペレグリノ: エスタバ トド ムイ リコ。ラ クエンタ、ポル ファボール。(すべてとても美味しかったです。お会計をお願いします。)" },
          { speaker: "Camarero", sentence: "Son 20 euros en total.", pronunciation: "カマレロ: ソン ベインテ エウロス エン トタル。(合計で20ユーロです。)" },
          { speaker: "Peregrino", sentence: "Aquí tiene. Muchas gracias y ¡buen día!", pronunciation: "ペレグリノ: アキ ティエネ。ムーチャス グラシアス イ ブエン ディア！(どうぞ。ありがとうございました、良い一日を！)" }
        ],
        explanation: [
          "Estaba todo muy rico: 「すべてとても美味しかったです」という表現。食事の感想を伝えるときに使います。",
          "La cuenta, por favor: 「お会計をお願いします」という表現。支払いを求めるときに使います。",
          "Aquí tiene: 「どうぞ」という表現。お金を渡すときなどに使います。"
        ]
      },
      {
        type: 'vocabulary',
        title: "4. 巡礼者向けの食事関連フレーズ",
        items: [
          { spanish: "¿A qué hora sirven el desayuno?", japanese: "朝食は何時に提供されますか？" },
          { spanish: "¿Hay cocina para peregrinos?", japanese: "巡礼者用のキッチンはありますか？" },
          { spanish: "¿Dónde puedo comprar comida para llevar?", japanese: "持ち帰り用の食べ物はどこで買えますか？" },
          { spanish: "Necesito agua para el camino", japanese: "道中用の水が必要です" },
          { spanish: "¿Hay alguna fuente de agua potable cerca?", japanese: "近くに飲料水の水飲み場はありますか？" }
        ]
      },
      {
        type: 'exercise',
        title: "練習問題",
        introduction: "次の日本語をスペイン語に訳してみましょう：",
        questions: [
          "2人用のテーブルをお願いします。",
          "巡礼者メニューはありますか？",
          "タコのガリシア風を食べたいです。",
          "水のボトル1本をお願いします。",
          "とても美味しかったです。お会計をお願いします。"
        ]
      },
      {
        type: 'note',
        content: "これらの表現は、サンティアゴ巡礼の道中で食事をするときに非常に役立ちます。特にガリシア地方の伝統料理を注文する際や、アルベルゲでの食事に関する質問をするときに使えるフレーズを覚えておきましょう。"
      },
      {
        type: 'buen_camino',
        content: "¡Buen Camino! (ブエン・カミーノ！良い旅を！)"
      }
    ]
  },
  // Pega este código en lugar del objeto con id: 5 en tu archivo lessons.ts

 {
    "id": 5,
    "title": "レッスン 5: 宿泊と交通の表現",
    "description": "サンティアゴ巡礼のための日本語で学ぶスペイン語",
    "filename": "スペイン語レッスン５宿泊と交通.html",
    "conversationCount": 4,
    "introduction": "このレッスンでは、サンティアゴ巡礼の道中で必要な宿泊と交通に関するスペイン語表現を学びます。アルベルゲ（巡礼宿）の予約方法やバス・タクシーの利用方法など、実用的なフレーズを身につけましょう。",
    "mainTip": "サンティアゴ巡礼では、アルベルゲと呼ばれる巡礼者専用の宿に泊まることが一般的です。多くのアルベルゲは先着順で、予約ができないところもありますが、特に繁忙期には予約できるアルベルゲを利用することをお勧めします。",
    "sections": [
      {
        "type": "vocabulary",
        "title": "1. アルベルゲでの宿泊",
        "items": [
          { "spanish": "Albergue de peregrinos", "japanese": "巡礼者用宿泊施設", "context": "巡礼者専用の宿泊施設。公営と私営があります。" },
          { "spanish": "Albergue público / privado", "japanese": "公営 / 私営アルベルゲ", "context": "公営は安価ですが基本的なサービスのみ。私営は少し高いですが設備が充実しています。" },
          { "spanish": "Credencial del peregrino", "japanese": "巡礼手帳", "context": "アルベルゲに泊まるために必要な巡礼者の証明書。スタンプを集めます。" },
          { "spanish": "Habitación compartida / privada", "japanese": "相部屋 / 個室", "context": "アルベルゲは基本的に相部屋ですが、一部の私営アルベルゲでは個室もあります。" },
          { "spanish": "Litera / cama", "japanese": "二段ベッド / ベッド", "context": "アルベルゲでは通常、二段ベッドが使われています。" },
          { "spanish": "Reservar", "japanese": "予約する", "context": "一部のアルベルゲでは事前予約が可能です。" }
        ]
      },
      {
        "type": "tip",
        "content": "<strong>巡礼者へのアドバイス:</strong> 繁忙期（7月、8月、祝日前後）は特に混雑するため、可能であれば前日までにアルベルゲを予約しておくことをお勧めします。予約ができない公営アルベルゲの場合は、早めに到着することが重要です（通常、午後1時〜2時頃から受付開始）。"
      },
      {
        "type": "conversation",
        "title": "アルベルゲでのチェックイン",
        "dialogue": [
          { "speaker": "Peregrino", "sentence": "Buenas tardes. Quisiera una cama para esta noche, por favor.", "pronunciation": "ペレグリノ: ブエナス タルデス。キシエラ ウナ カマ パラ エスタ ノーチェ、ポル ファボール。（こんにちは。今夜一泊分のベッドをお願いします。）" },
          { "speaker": "Hospitalero", "sentence": "Claro. ¿Tiene la credencial del peregrino?", "pronunciation": "オスピタレロ: クラロ。ティエネ ラ クレデンシアル デル ペレグリノ？（もちろん。巡礼手帳をお持ちですか？）" },
          { "speaker": "Peregrino", "sentence": "Sí, aquí está. Somos dos peregrinos de Japón.", "pronunciation": "ペレグリノ: シ、アキ エスタ。ソモス ドス ペレグリノス デ ハポン。（はい、ここにあります。私たちは日本からの2人の巡礼者です。）" },
          { "speaker": "Hospitalero", "sentence": "Perfecto. Son 10 euros por persona. El desayuno es a las 6:30 y hay que salir antes de las 8:00.", "pronunciation": "オスピタレロ: ペルフェクト。ソン ディエス エウロス ポル ペルソナ。エル デサユノ エス ア ラス セイス イ メディア イ アイ ケ サリール アンテス デ ラス オチョ。（完璧です。一人10ユーロです。朝食は6時30分で、8時までに出発する必要があります。）" }
        ],
        "explanation": [
          "Quisiera una cama: 「ベッドが欲しいです」という丁寧な表現。アルベルゲでの宿泊を申し込むときに使います。",
          "¿Tiene la credencial del peregrino?: 「巡礼手帳をお持ちですか？」という質問。アルベルゲに泊まるには巡礼手帳が必要です。",
          "Hay que salir antes de las [hora]: 「[時間]までに出発する必要があります」という表現。アルベルゲでは通常、午前中に退出する必要があります。"
        ]
      },
      {
        "type": "conversation",
        "title": "アルベルゲの設備について尋ねる",
        "dialogue": [
          { "speaker": "Peregrino japonés", "sentence": "¿Tienen duchas calientes?", "pronunciation": "ペレグリノ ハポネス: ティエネン ドゥチャス カリエンテス？（温かいシャワーはありますか？）" },
          { "speaker": "Hospitalero", "sentence": "Sí, tenemos duchas calientes y lavadora. La lavadora cuesta 3 euros.", "pronunciation": "オスピタレロ: シ、テネモス ドゥチャス カリエンテス イ ラバドーラ。ラ ラバドーラ クエスタ トレス エウロス。（はい、温かいシャワーと洗濯機があります。洗濯機は3ユーロです。）" },
          { "speaker": "Peregrino japonés", "sentence": "¿Hay WiFi gratis?", "pronunciation": "ペレグリノ ハポネス: アイ ウィフィ グラティス？（無料WiFiはありますか？）" },
          { "speaker": "Hospitalero", "sentence": "Sí, la contraseña está en la recepción.", "pronunciation": "オスピタレロ: シ、ラ コントラセーニャ エスタ エン ラ レセプシオン。（はい、パスワードは受付にあります。）" }
        ],
        "explanation": [
          "¿Tienen [設備]?: 「[設備]はありますか？」という質問形。アルベルゲの設備について尋ねるときに使います。",
          "Duchas calientes: 「温かいシャワー」という表現。巡礼後に重要な設備です。",
          "Lavadora: 「洗濯機」という意味。長期の巡礼では洗濯が重要です。",
          "WiFi gratis: 「無料WiFi」という表現。次の宿を予約したり、家族と連絡を取るのに便利です。",
          "La contraseña: 「パスワード」という意味。WiFiを使うために必要です。"
        ]
      },
      {
        "type": "vocabulary",
        "title": "3. 交通手段",
        "items": [
          { "spanish": "Autobús / Autocar", "japanese": "バス", "context": "町と町を結ぶ公共交通機関。" },
          { "spanish": "Taxi", "japanese": "タクシー", "context": "疲れたときや荷物を運ぶときに便利です。" },
          { "spanish": "Estación de autobuses", "japanese": "バスターミナル", "context": "バスの発着場所。" },
          { "spanish": "Billete / Pasaje", "japanese": "チケット", "context": "バスや電車のチケット。" },
          { "spanish": "Ida / Ida y vuelta", "japanese": "片道 / 往復", "context": "チケットの種類。" },
          { "spanish": "Horario", "japanese": "時刻表", "context": "バスや電車の発着時間。" }
        ]
      },
      {
        "type": "conversation",
        "title": "バスについて尋ねる",
        "dialogue": [
          { "speaker": "Peregrino", "sentence": "Disculpe, ¿hay algún autobús a Santiago mañana?", "pronunciation": "ペレグリノ: ディスクルペ、アイ アルグン アウトブス ア サンティアゴ マニャーナ？（すみません、明日サンティアゴ行きのバスはありますか？）" },
          { "speaker": "Local", "sentence": "Sí, hay autobuses cada hora desde las 7 de la mañana.", "pronunciation": "ロカル: シ、アイ アウトブセス カダ オラ デスデ ラス シエテ デ ラ マニャーナ。（はい、朝7時から1時間ごとにバスがあります。）" },
          { "speaker": "Peregrino", "sentence": "¿Dónde puedo comprar los billetes?", "pronunciation": "ペレグリノ: ドンデ プエド コンプラール ロス ビジェテス？（どこでチケットを買えますか？）" },
          { "speaker": "Local", "sentence": "En la estación de autobuses o en línea. Un billete cuesta unos 15 euros.", "pronunciation": "ロカル: エン ラ エスタシオン デ アウトブセス オ エン リネア。ウン ビジェテ クエスタ ウノス キンセ エウロス。（バスターミナルかオンラインで。チケット1枚は約15ユーロです。）" }
        ],
        "explanation": [
          "¿Hay algún [交通手段] a [場所]?: 「[場所]行きの[交通手段]はありますか？」という質問形。",
          "Cada hora: 「1時間ごとに」という表現。運行頻度を表します。",
          "¿Dónde puedo comprar los billetes?: 「どこでチケットを買えますか？」という質問。",
          "En línea: 「オンラインで」という表現。インターネットでの購入を指します。"
        ]
      },
      {
        "type": "conversation",
        "title": "タクシーを呼ぶ",
        "dialogue": [
          { "speaker": "Peregrino japonés", "sentence": "Necesito un taxi para ir a Sarria. ¿Puede llamar uno, por favor?", "pronunciation": "ペレグリノ ハポネス: ネセシト ウン タクシ パラ イル ア サリア。プエデ ジャマル ウノ、ポル ファボール？（サリアに行くためにタクシーが必要です。一台呼んでいただけますか？）" },
          { "speaker": "Recepcionista", "sentence": "Claro. ¿Para cuántas personas?", "pronunciation": "レセプシオニスタ: クラロ。パラ クアンタス ペルソナス？（もちろん。何人分ですか？）" },
          { "speaker": "Peregrino japonés", "sentence": "Para dos personas con mochilas.", "pronunciation": "ペレグリノ ハポネス: パラ ドス ペルソナス コン モチーラス。（バックパック付きの2人分です。）" },
          { "speaker": "Recepcionista", "sentence": "El taxi llegará en 10 minutos. Esperen en la entrada, por favor.", "pronunciation": "レセプシオニスタ: エル タクシ ジェガラ エン ディエス ミヌトス。エスペレン エン ラ エントラーダ、ポル ファボール。（タクシーは10分で到着します。入口でお待ちください。）" }
        ],
        "explanation": [
          "Necesito un taxi para ir a [場所]: 「[場所]に行くためにタクシーが必要です」という表現。",
          "¿Puede llamar uno?: 「一台呼んでいただけますか？」という丁寧な依頼表現。",
          "Para [数字] personas con mochilas: 「バックパック付きの[数字]人分」という表現。荷物の情報も伝えると適切なタクシーを手配してもらえます。",
          "El taxi llegará en [時間]: 「タクシーは[時間]で到着します」という表現。",
          "Esperen en [場所]: 「[場所]でお待ちください」という指示表現。"
        ]
      },
      {
        "type": "vocabulary",
        "title": "4. 巡礼者向けの宿泊・交通フレーズ",
        "items": [
          { "spanish": "¿Hay algún albergue cerca?", "japanese": "近くにアルベルゲはありますか？" },
          { "spanish": "¿A qué hora abren/cierran?", "japanese": "何時に開きますか/閉まりますか？" },
          { "spanish": "¿Puedo dejar mi mochila aquí?", "japanese": "ここにバックパックを置いておけますか？" },
          { "spanish": "¿Cuál es el camino a...?", "japanese": "...への道はどれですか？" },
          { "spanish": "¿Cuánto tiempo se tarda en llegar a...?", "japanese": "...に着くのにどれくらい時間がかかりますか？" },
          { "spanish": "¿Puede recomendarme un albergue en...?", "japanese": "...でお勧めのアルベルゲはありますか？" }
        ]
      },
      {
        "type": "exercise",
        "title": "練習問題",
        "introduction": "次の日本語をスペイン語に訳してみましょう：",
        "questions": [
          "今夜一泊分のベッドをお願いします。",
          "巡礼手帳はここにあります。",
          "温かいシャワーはありますか？",
          "サンティアゴ行きのバスはありますか？",
          "タクシーが必要です。呼んでいただけますか？"
        ]
      },
      {
        "type": "note",
        "content": "これらの表現は、サンティアゴ巡礼の道中で宿泊施設を探したり、交通手段を利用したりするときに非常に役立ちます。特にアルベルゲでのチェックインや設備についての質問、バスやタクシーの利用に関するフレーズを覚えておきましょう。"
      },
      {
        "type": "buen_camino",
        "content": "¡Buen Camino! (ブエン・カミーノ！良い旅を！)"
      }
    ]
},

// Pega este código en lugar del objeto con id: 6 en tu archivo lessons.ts

{
    "id": 6,
    "title": "レッスン 6: 健康と緊急時の表現",
    "description": "サンティアゴ巡礼のための日本語で学ぶスペイン語",
    "filename": "スペイン語レッスン６健康と緊急.html",
    "conversationCount": 3,
    "introduction": "このレッスンでは、サンティアゴ巡礼中に体調を崩したり、緊急事態が発生した場合に役立つスペイン語表現を学びます。医療機関での会話や症状の説明など、健康に関する重要なフレーズを身につけましょう。",
    "mainTip": "サンティアゴ巡礼では、長距離を歩くため足の問題（水ぶくれ、筋肉痛など）が発生しやすいです。また、気候の変化による風邪や、慣れない食事による胃腸の問題も起こりがちです。基本的な医療用語を知っておくと安心です。",
    "sections": [
      {
        "type": "vocabulary",
        "title": "1. 体の部位と症状",
        "items": [
          { "spanish": "La cabeza", "japanese": "頭" },
          { "spanish": "El estómago", "japanese": "胃" },
          { "spanish": "La garganta", "japanese": "喉" },
          { "spanish": "El pie / Los pies", "japanese": "足 / 両足" },
          { "spanish": "La rodilla / Las rodillas", "japanese": "膝 / 両膝" },
          { "spanish": "La espalda", "japanese": "背中" },
          { "spanish": "El tobillo", "japanese": "足首" },
          { "spanish": "La ampolla", "japanese": "水ぶくれ" },
          { "spanish": "El dolor", "japanese": "痛み" },
          { "spanish": "La fiebre", "japanese": "熱" },
          { "spanish": "El mareo", "japanese": "めまい" },
          { "spanish": "La alergia", "japanese": "アレルギー" }
        ]
      },
      {
        "type": "tip",
        "content": "<strong>巡礼者へのアドバイス:</strong> 巡礼路には多くの町に薬局（Farmacia）があり、緑の十字マークで識別できます。スペインの薬剤師は非常に知識が豊富で、軽度の問題であれば医師の診察なしで適切な薬を提供してくれることが多いです。"
      },
      {
        "type": "vocabulary",
        "title": "2. 症状を説明する",
        "items": [
          { "spanish": "Me duele la cabeza / el estómago / la garganta", "japanese": "頭が / 胃が / 喉が痛いです" },
          { "spanish": "Tengo fiebre / mareo / náuseas", "japanese": "熱が / めまいが / 吐き気があります" },
          { "spanish": "Estoy enfermo/a", "japanese": "具合が悪いです" },
          { "spanish": "Tengo una ampolla en el pie", "japanese": "足に水ぶくれがあります" },
          { "spanish": "Me he torcido el tobillo", "japanese": "足首をひねりました" },
          { "spanish": "Soy alérgico/a a...", "japanese": "私は〜にアレルギーがあります" }
        ]
      },
      {
        "type": "conversation",
        "title": "薬局での会話",
        "dialogue": [
          { "speaker": "Peregrino japonés", "sentence": "Buenos días. Tengo dolor en los pies y ampollas.", "pronunciation": "ペレグリノ ハポネス: ブエノス ディアス。テンゴ ドロール エン ロス ピエス イ アンポージャス。（おはようございます。足が痛くて水ぶくれがあります。）" },
          { "speaker": "Farmacéutico", "sentence": "Es muy común en el Camino. ¿Puede mostrarme dónde están las ampollas?", "pronunciation": "ファルマセウティコ: エス ムイ コムン エン エル カミーノ。プエデ モストラルメ ドンデ エスタン ラス アンポージャス？（巡礼路ではよくあることです。水ぶくれがどこにあるか見せていただけますか？）" },
          { "speaker": "Peregrino japonés", "sentence": "Aquí, en el talón y debajo de los dedos.", "pronunciation": "ペレグリノ ハポネス: アキ、エン エル タロン イ デバホ デ ロス デドス。（ここ、かかとと指の下です。）" },
          { "speaker": "Farmacéutico", "sentence": "Le recomiendo estas tiritas especiales para ampollas y este antiséptico. Aplíquelo dos veces al día.", "pronunciation": "ファルマセウティコ: レ レコミエンド エスタス ティリタス エスペシアレス パラ アンポージャス イ エステ アンティセプティコ。アプリケロ ドス ベセス アル ディア。（水ぶくれ用の特殊な絆創膏とこの消毒薬をお勧めします。1日2回塗ってください。）" }
        ],
        "explanation": [
          "Tengo dolor en [体の部位]: 「[体の部位]が痛いです」という表現。",
          "Es muy común en el Camino: 「巡礼路ではよくあることです」という表現。巡礼者の一般的な問題について言及するときに使います。",
          "¿Puede mostrarme...?: 「...を見せていただけますか？」という丁寧な質問形。",
          "Le recomiendo...: 「...をお勧めします」という表現。薬剤師や医師からの推奨事項を伝えるときに使います。",
          "Aplíquelo [頻度]: 「[頻度]で塗ってください」という指示表現。"
        ]
      },
      {
        "type": "vocabulary",
        "title": "3. 医療機関と緊急時",
        "items": [
          { "spanish": "La farmacia", "japanese": "薬局" },
          { "spanish": "El centro de salud", "japanese": "保健センター" },
          { "spanish": "El hospital", "japanese": "病院" },
          { "spanish": "El médico / La médica", "japanese": "医師（男性/女性）" },
          { "spanish": "La ambulancia", "japanese": "救急車" },
          { "spanish": "Emergencia", "japanese": "緊急事態" },
          { "spanish": "El seguro médico", "japanese": "医療保険" },
          { "spanish": "La receta", "japanese": "処方箋" },
          { "spanish": "El medicamento", "japanese": "薬" }
        ]
      },
      {
        "type": "tip",
        "content": "<strong>緊急時の電話番号:</strong> スペインの緊急電話番号は112です。これは警察、救急車、消防のための共通番号です。緊急時には「Necesito ayuda」（助けが必要です）と言い、できるだけ正確に場所を伝えましょう。"
      },
      {
        "type": "conversation",
        "title": "医師との会話",
        "dialogue": [
          { "speaker": "Médico", "sentence": "Buenos días. ¿Qué le pasa?", "pronunciation": "メディコ: ブエノス ディアス。ケ レ パサ？（おはようございます。どうしましたか？）" },
          { "speaker": "Peregrino japonés", "sentence": "Tengo fiebre y dolor de garganta desde ayer.", "pronunciation": "ペレグリノ ハポネス: テンゴ フィエブレ イ ドロール デ ガルガンタ デスデ アジェール。（昨日から熱と喉の痛みがあります。）" },
          { "speaker": "Médico", "sentence": "Voy a examinarle. Abra la boca, por favor. ¿Tiene tos también?", "pronunciation": "メディコ: ボイ ア エグザミナルレ。アブラ ラ ボカ、ポル ファボール。ティエネ トス タンビエン？（診察します。口を開けてください。咳も出ますか？）" },
          { "speaker": "Peregrino japonés", "sentence": "Sí, un poco. Y me duele la cabeza.", "pronunciation": "ペレグリノ ハポネス: シ、ウン ポコ。イ メ ドゥエレ ラ カベサ。（はい、少し。そして頭も痛いです。）" },
          { "speaker": "Médico", "sentence": "Parece una infección. Le voy a recetar antibióticos y algo para el dolor. Descanse un día o dos antes de continuar el Camino.", "pronunciation": "メディコ: パレセ ウナ インフェクシオン。レ ボイ ア レセタール アンティビオティコス イ アルゴ パラ エル ドロール。デスカンセ ウン ディア オ ドス アンテス デ コンティヌアール エル カミーノ。（感染症のようです。抗生物質と痛み止めを処方します。巡礼路を続ける前に1、2日休んでください。）" }
        ],
        "explanation": [
          "¿Qué le pasa?: 「どうしましたか？」という質問。医師がよく使う表現です。",
          "Tengo [症状] desde [時間]: 「[時間]から[症状]があります」という表現。症状の発症時期を伝えるときに使います。",
          "Voy a examinarle: 「診察します」という表現。",
          "Abra la boca: 「口を開けてください」という指示表現。",
          "¿Tiene [症状] también?: 「[症状]も出ますか？」という質問形。",
          "Parece una [診断]: 「[診断]のようです」という表現。",
          "Le voy a recetar...: 「...を処方します」という表現。",
          "Descanse [期間]: 「[期間]休んでください」という指示表現。"
        ]
      },
      {
        "type": "vocabulary",
        "title": "4. 緊急時のフレーズ",
        "items": [
          { "spanish": "¡Ayuda! / ¡Socorro!", "japanese": "助けて！" },
          { "spanish": "Necesito un médico", "japanese": "医師が必要です" },
          { "spanish": "Llame a una ambulancia, por favor", "japanese": "救急車を呼んでください" },
          { "spanish": "Es una emergencia", "japanese": "緊急事態です" },
          { "spanish": "Mi amigo/a está enfermo/a", "japanese": "友人が具合悪いです" },
          { "spanish": "¿Dónde está el hospital más cercano?", "japanese": "最寄りの病院はどこですか？" },
          { "spanish": "Tengo seguro médico", "japanese": "医療保険に入っています" }
        ]
      },
      {
        "type": "conversation",
        "title": "緊急時の会話",
        "dialogue": [
          { "speaker": "Peregrino japonés", "sentence": "¡Disculpe! Mi amiga se ha caído y no puede caminar. Necesitamos ayuda.", "pronunciation": "ペレグリノ ハポネス: ディスクルペ！ミ アミガ セ ア カイド イ ノ プエデ カミナール。ネセシタモス アユダ。（すみません！友人が転んで歩けません。助けが必要です。）" },
          { "speaker": "Local", "sentence": "¿Dónde está? ¿Qué ha pasado?", "pronunciation": "ロカル: ドンデ エスタ？ ケ ア パサド？（どこにいますか？何が起きましたか？）" },
          { "speaker": "Peregrino japonés", "sentence": "Está en el camino, a unos 500 metros de aquí. Se ha torcido el tobillo y tiene mucho dolor.", "pronunciation": "ペレグリノ ハポネス: エスタ エン エル カミーノ、ア ウノス キニエントス メトロス デ アキ。セ ア トルシド エル トビージョ イ ティエネ ムチョ ドロール。（道にいます、ここから約500メートルのところです。足首をひねって、とても痛がっています。）" },
          { "speaker": "Local", "sentence": "Voy a llamar al centro de salud. Espere aquí. ¿Puede mostrarme exactamente dónde está en este mapa?", "pronunciation": "ロカル: ボイ ア ジャマール アル セントロ デ サルー。エスペレ アキ。プエデ モストラルメ エグザクタメンテ ドンデ エスタ エン エステ マパ？（保健センターに電話します。ここで待っていてください。この地図で正確な場所を示していただけますか？）" }
        ],
        "explanation": [
          "Mi amigo/a se ha caído: 「友人が転びました」という表現。",
          "No puede caminar: 「歩けません」という表現。",
          "Necesitamos ayuda: 「助けが必要です」という表現。",
          "¿Qué ha pasado?: 「何が起きましたか？」という質問。",
          "A unos [数字] metros de aquí: 「ここから約[数字]メートルのところ」という表現。",
          "Se ha torcido el [体の部位]: 「[体の部位]をひねりました」という表現。",
          "Tiene mucho dolor: 「とても痛がっています」という表現。",
          "Voy a llamar al [場所]: 「[場所]に電話します」という表現。"
        ]
      },
      {
        "type": "exercise",
        "title": "練習問題",
        "introduction": "次の日本語をスペイン語に訳してみましょう：",
        "questions": [
          "頭が痛いです。",
          "足に水ぶくれがあります。",
          "昨日から熱があります。",
          "最寄りの薬局はどこですか？",
          "医師が必要です。"
        ]
      },
      {
        "type": "note",
        "content": "これらの表現は、サンティアゴ巡礼中に体調を崩したり、緊急事態が発生した場合に非常に役立ちます。特に水ぶくれや筋肉痛などの一般的な問題に関する表現や、医療機関での基本的な会話を覚えておきましょう。また、緊急電話番号（112）も忘れないようにしてください。"
      },
      {
        "type": "buen_camino",
        "content": "¡Buen Camino! (ブエン・カミーノ！良い旅を！)"
      }
    ]
  },

 // Pega este código en lugar del objeto con id: 7 en tu archivo lessons.ts

{
    "id": 7,
    "title": "レッスン 7: 道案内と方向の表現",
    "description": "サンティアゴ巡礼のための日本語で学ぶスペイン語",
    "filename": "スペイン語レッスン７道案内.html",
    "conversationCount": 4,
    "introduction": "このレッスンでは、サンティアゴ巡礼の道中で役立つ道案内と方向に関するスペイン語表現を学びます。巡礼路で迷わないための方向表現や、地元の人に道を尋ねる方法を身につけましょう。",
    "mainTip": "サンティアゴ巡礼路は黄色い矢印や貝殻のマークで示されていますが、時には迷うこともあります。そんなとき、地元の人に道を尋ねる表現を知っていると安心です。また、巡礼路には様々な分岐点があるため、方向を正確に理解することが重要です。",
    "sections": [
      {
        "type": "vocabulary",
        "title": "1. 方向と位置の表現",
        "items": [
          { "spanish": "Derecha / A la derecha", "japanese": "右 / 右に" },
          { "spanish": "Izquierda / A la izquierda", "japanese": "左 / 左に" },
          { "spanish": "Recto / Todo recto", "japanese": "まっすぐ / ずっとまっすぐ" },
          { "spanish": "Cerca / Lejos", "japanese": "近く / 遠く" },
          { "spanish": "Delante / Detrás", "japanese": "前 / 後ろ" },
          { "spanish": "Al lado de", "japanese": "〜の隣に" },
          { "spanish": "Entre", "japanese": "〜の間に" },
          { "spanish": "Enfrente de", "japanese": "〜の向かいに" },
          { "spanish": "En la esquina", "japanese": "角に" },
          { "spanish": "Al final de la calle", "japanese": "通りの終わりに" }
        ]
      },
      {
        "type": "tip",
        "content": "<strong>巡礼者へのアドバイス:</strong> 巡礼路では「Camino」（カミーノ）という言葉が重要です。「¿Es este el Camino?」（これが巡礼路ですか？）や「¿Dónde está el Camino?」（巡礼路はどこですか？）といった質問が非常に役立ちます。"
      },
      {
        "type": "conversation",
        "title": "巡礼路について尋ねる",
        "dialogue": [
          { "speaker": "Peregrino japonés", "sentence": "Disculpe, ¿es este el Camino de Santiago?", "pronunciation": "ペレグリノ ハポネス: ディスクルペ、エス エステ エル カミーノ デ サンティアゴ？（すみません、これがサンティアゴの巡礼路ですか？）" },
          { "speaker": "Local", "sentence": "No, el Camino está por allí. Tiene que girar a la derecha en la próxima calle.", "pronunciation": "ロカル: ノ、エル カミーノ エスタ ポル アジ。ティエネ ケ ヒラール ア ラ デレチャ エン ラ プロクシマ カジェ。（いいえ、巡礼路はあちらです。次の通りを右に曲がる必要があります。）" },
          { "speaker": "Peregrino japonés", "sentence": "¿Está lejos?", "pronunciation": "ペレグリノ ハポネス: エスタ レホス？（遠いですか？）" },
          { "speaker": "Local", "sentence": "No, está muy cerca. A unos 200 metros. Verá las flechas amarillas.", "pronunciation": "ロカル: ノ、エスタ ムイ セルカ。ア ウノス ドスシエントス メトロス。ベラ ラス フレチャス アマリージャス。（いいえ、とても近いです。約200メートルです。黄色い矢印が見えるでしょう。）" }
        ],
        "explanation": [
          "¿Es este el Camino de Santiago?: 「これがサンティアゴの巡礼路ですか？」という質問。巡礼路を確認するときに使います。",
          "El Camino está por allí: 「巡礼路はあちらです」という表現。方向を示すときに使います。",
          "Tiene que girar a la [方向]: 「[方向]に曲がる必要があります」という表現。",
          "¿Está lejos?: 「遠いですか？」という質問。距離を尋ねるときに使います。",
          "A unos [数字] metros: 「約[数字]メートルです」という表現。距離を示すときに使います。",
          "Verá las flechas amarillas: 「黄色い矢印が見えるでしょう」という表現。巡礼路の目印について説明するときに使います。"
        ]
      },
      {
        "type": "conversation",
        "title": "アルベルゲへの道を尋ねる",
        "dialogue": [
          { "speaker": "Peregrino japonés", "sentence": "Perdone, ¿dónde está el albergue de peregrinos?", "pronunciation": "ペレグリノ ハポネス: ペルドネ、ドンデ エスタ エル アルベルゲ デ ペレグリノス？（すみません、巡礼者用の宿泊施設はどこですか？）" },
          { "speaker": "Local", "sentence": "Siga todo recto hasta la plaza, luego gire a la izquierda. El albergue está enfrente de la iglesia.", "pronunciation": "ロカル: シガ トド レクト アスタ ラ プラサ、ルエゴ ヒレ ア ラ イスキエルダ。エル アルベルゲ エスタ エンフレンテ デ ラ イグレシア。（広場までまっすぐ進み、それから左に曲がってください。アルベルゲは教会の向かいにあります。）" },
          { "speaker": "Peregrino japonés", "sentence": "¿Hay algún albergue más cerca?", "pronunciation": "ペレグリノ ハポネス: アイ アルグン アルベルゲ マス セルカ？（もっと近くにアルベルゲはありますか？）" },
          { "speaker": "Local", "sentence": "Sí, hay uno privado al lado del supermercado, a unos 100 metros de aquí.", "pronunciation": "ロカル: シ、アイ ウノ プリバド アル ラド デル スーペルメルカド、ア ウノス シエン メトロス デ アキ。（はい、ここから約100メートルのスーパーマーケットの隣に私営のアルベルゲがあります。）" }
        ],
        "explanation": [
          "¿Dónde está el [場所]?: 「[場所]はどこですか？」という質問。場所を尋ねるときに使います。",
          "Siga todo recto hasta [場所]: 「[場所]までまっすぐ進んでください」という指示表現。",
          "Luego gire a la [方向]: 「それから[方向]に曲がってください」という指示表現。",
          "El [場所] está enfrente de [場所]: 「[場所]は[場所]の向かいにあります」という表現。",
          "¿Hay algún [場所] más cerca?: 「もっと近くに[場所]はありますか？」という質問。",
          "Hay uno [種類] al lado de [場所]: 「[場所]の隣に[種類]のものがあります」という表現。"
        ]
      },
      {
        "type": "vocabulary",
        "title": "3. 巡礼路の標識と目印",
        "items": [
          { "spanish": "La flecha amarilla", "japanese": "黄色い矢印", "context": "巡礼路を示す最も一般的な標識。" },
          { "spanish": "La concha / La vieira", "japanese": "貝殻", "context": "巡礼路のもう一つの象徴的な標識。" },
          { "spanish": "El mojón", "japanese": "石柱", "context": "距離を示す石柱。サンティアゴまでの残りの距離が記されています。" },
          { "spanish": "La señal", "japanese": "標識", "context": "巡礼路を示す標識全般。" },
          { "spanish": "El cruce", "japanese": "交差点", "context": "道が交差する場所。" },
          { "spanish": "La bifurcación", "japanese": "分岐点", "context": "道が二つに分かれる場所。" },
          { "spanish": "El desvío", "japanese": "迂回路", "context": "本来の道からの迂回路。" }
        ]
      },
      {
        "type": "tip",
        "content": "<strong>巡礼者へのアドバイス:</strong> 巡礼路では、黄色い矢印と貝殻のマークが主な目印です。特に分岐点では注意深く標識を探しましょう。また、スマートフォンのGPSアプリも役立ちますが、バッテリーの消耗に注意してください。"
      },
      {
        "type": "conversation",
        "title": "道に迷ったとき",
        "dialogue": [
          { "speaker": "Peregrino japonés", "sentence": "Creo que nos hemos perdido. No veo ninguna flecha amarilla.", "pronunciation": "ペレグリノ ハポネス: クレオ ケ ノス エモス ペルディド。ノ ベオ ニングナ フレチャ アマリージャ。（道に迷ったと思います。黄色い矢印が見えません。）" },
          { "speaker": "Otro peregrino", "sentence": "Vamos a preguntar en esa casa. Quizás nos puedan ayudar.", "pronunciation": "オトロ ペレグリノ: バモス ア プレグンタール エン エサ カサ。キサス ノス プエダン アユダール。（あの家で尋ねましょう。たぶん助けてくれるでしょう。）" },
          { "speaker": "Peregrino japonés", "sentence": "Disculpe, somos peregrinos y creo que nos hemos perdido. ¿Sabe dónde está el Camino?", "pronunciation": "ペレグリノ ハポネス: ディスクルペ、ソモス ペレグリノス イ クレオ ケ ノス エモス ペルディド。サベ ドンデ エスタ エル カミーノ？（すみません、私たちは巡礼者で、道に迷ったと思います。巡礼路がどこにあるかご存知ですか？）" },
          { "speaker": "Local", "sentence": "Sí, han tomado un desvío. Tienen que volver hasta el cruce y girar a la derecha. Verán un mojón con la concha.", "pronunciation": "ロカル: シ、アン トマド ウン デスビオ。ティエネン ケ ボルベール アスタ エル クルセ イ ヒラール ア ラ デレチャ。ベラン ウン モホン コン ラ コンチャ。（はい、迂回路に入ってしまいました。交差点まで戻って右に曲がる必要があります。貝殻のある石柱が見えるでしょう。）" }
        ],
        "explanation": [
          "Creo que nos hemos perdido: 「道に迷ったと思います」という表現。",
          "No veo ninguna [目印]: 「[目印]が見えません」という表現。",
          "Vamos a preguntar en [場所]: 「[場所]で尋ねましょう」という提案表現。",
          "Somos peregrinos: 「私たちは巡礼者です」という自己紹介。",
          "¿Sabe dónde está el Camino?: 「巡礼路がどこにあるかご存知ですか？」という質問。",
          "Han tomado un desvío: 「迂回路に入ってしまいました」という表現。",
          "Tienen que volver hasta [場所]: 「[場所]まで戻る必要があります」という指示表現。",
          "Verán un [目印]: 「[目印]が見えるでしょう」という表現。"
        ]
      },
      {
        "type": "vocabulary",
        "title": "4. 距離と時間の表現",
        "items": [
          { "spanish": "¿A cuántos kilómetros está...?", "japanese": "...は何キロメートルですか？" },
          { "spanish": "¿Cuánto tiempo se tarda en llegar a...?", "japanese": "...に着くのにどれくらい時間がかかりますか？" },
          { "spanish": "Está a [número] kilómetros", "japanese": "[数字]キロメートルです" },
          { "spanish": "Se tarda [tiempo] caminando", "japanese": "歩いて[時間]かかります" },
          { "spanish": "Cerca / Lejos", "japanese": "近い / 遠い" },
          { "spanish": "A una hora de aquí", "japanese": "ここから1時間" },
          { "spanish": "A medio camino", "japanese": "中間地点に" }
        ]
      },
      {
        "type": "conversation",
        "title": "次の町までの距離を尋ねる",
        "dialogue": [
          { "speaker": "Peregrino japonés", "sentence": "Perdone, ¿a cuántos kilómetros está Portomarín?", "pronunciation": "ペレグリノ ハポネス: ペルドネ、ア クアントス キロメトロス エスタ ポルトマリン？（すみません、ポルトマリンは何キロメートルですか？）" },
          { "speaker": "Local", "sentence": "Portomarín está a unos 12 kilómetros de aquí.", "pronunciation": "ロカル: ポルトマリン エスタ ア ウノス ドセ キロメトロス デ アキ。（ポルトマリンはここから約12キロメートルです。）" },
          { "speaker": "Peregrino japonés", "sentence": "¿Cuánto tiempo se tarda caminando?", "pronunciation": "ペレグリノ ハポネス: クアント ティエンポ セ タルダ カミナンド？（歩いてどれくらい時間がかかりますか？）" },
          { "speaker": "Local", "sentence": "Unas tres horas, dependiendo de su ritmo. Hay una fuente a medio camino donde puede descansar.", "pronunciation": "ロカル: ウナス トレス オラス、デペンディエンド デ ス リトモ。アイ ウナ フエンテ ア メディオ カミーノ ドンデ プエデ デスカンサール。（あなたのペースによりますが、約3時間です。中間地点に休憩できる水飲み場があります。）" }
        ],
        "explanation": [
          "¿A cuántos kilómetros está [場所]?: 「[場所]は何キロメートルですか？」という質問。",
          "[場所] está a unos [数字] kilómetros de aquí: 「[場所]はここから約[数字]キロメートルです」という表現。",
          "¿Cuánto tiempo se tarda caminando?: 「歩いてどれくらい時間がかかりますか？」という質問。",
          "Unas [数字] horas: 「約[数字]時間」という表現。",
          "Dependiendo de su ritmo: 「あなたのペースによります」という表現。",
          "Hay una [場所] a medio camino: 「中間地点に[場所]があります」という表現。",
          "Donde puede descansar: 「そこで休憩できます」という表現。"
        ]
      },
      {
        "type": "exercise",
        "title": "練習問題",
        "introduction": "次の日本語をスペイン語に訳してみましょう：",
        "questions": [
          "これがサンティアゴの巡礼路ですか？",
          "巡礼者用の宿泊施設はどこですか？",
          "まっすぐ進み、それから左に曲がってください。",
          "道に迷ったと思います。",
          "ポルトマリンは何キロメートルですか？"
        ]
      },
      {
        "type": "note",
        "content": "これらの表現は、サンティアゴ巡礼の道中で道を尋ねたり、方向を理解したりするときに非常に役立ちます。特に巡礼路の標識や目印に関する表現、距離や時間を尋ねる表現を覚えておきましょう。また、道に迷ったときの表現も重要です。"
      },
      {
        "type": "buen_camino",
        "content": "¡Buen Camino! (ブエン・カミーノ！良い旅を！)"
      }
    ]
  },

 // Pega este código en lugar del objeto con id: 8 en tu archivo lessons.ts

{
    "id": 8,
    "title": "レッスン 8: 天気と季節の表現",
    "description": "サンティアゴ巡礼のための日本語で学ぶスペイン語",
    "filename": "スペイン語レッスン８天気と季節.html",
    "conversationCount": 4,
    "introduction": "このレッスンでは、サンティアゴ巡礼の道中で役立つ天気と季節に関するスペイン語表現を学びます。ガリシア地方の気候は変わりやすいため、天気に関する表現を知っておくことは非常に重要です。",
    "mainTip": "サンティアゴ巡礼路のガリシア地方は「緑のスペイン」と呼ばれるほど雨が多い地域です。特に春と秋は天候が変わりやすく、一日の間に晴れと雨が何度も入れ替わることもあります。天気に関する表現を知っておくと、地元の人と会話したり、天気予報を理解したりするのに役立ちます。",
    "sections": [
      {
        "type": "vocabulary",
        "title": "1. 天気の基本表現",
        "items": [
          { "spanish": "¿Qué tiempo hace?", "japanese": "天気はどうですか？" },
          { "spanish": "Hace sol", "japanese": "晴れています" },
          { "spanish": "Está nublado", "japanese": "曇っています" },
          { "spanish": "Llueve / Está lloviendo", "japanese": "雨が降っています" },
          { "spanish": "Nieva / Está nevando", "japanese": "雪が降っています" },
          { "spanish": "Hace viento", "japanese": "風が吹いています" },
          { "spanish": "Hace calor", "japanese": "暑いです" },
          { "spanish": "Hace frío", "japanese": "寒いです" },
          { "spanish": "Hace buen tiempo", "japanese": "良い天気です" },
          { "spanish": "Hace mal tiempo", "japanese": "悪い天気です" }
        ]
      },
      {
        "type": "tip",
        "content": "<strong>巡礼者へのアドバイス:</strong> ガリシア地方では「Si no te gusta el tiempo, espera cinco minutos」（天気が気に入らなければ、5分待ちなさい）ということわざがあります。それほど天気が変わりやすい地域なので、雨具は常に携帯しておくことをお勧めします。"
      },
      {
        "type": "conversation",
        "title": "天気について尋ねる",
        "dialogue": [
          { "speaker": "Peregrino japonés", "sentence": "Buenos días. ¿Qué tiempo va a hacer hoy?", "pronunciation": "ペレグリノ ハポネス: ブエノス ディアス。ケ ティエンポ バ ア アセール オイ？（おはようございます。今日の天気はどうなりますか？）" },
          { "speaker": "Hospitalero", "sentence": "Buenos días. Según la previsión, por la mañana hará sol, pero por la tarde puede que llueva.", "pronunciation": "オスピタレロ: ブエノス ディアス。セグン ラ プレビシオン、ポル ラ マニャナ アラ ソル、ペロ ポル ラ タルデ プエデ ケ ジュエバ。（おはようございます。予報によると、午前中は晴れますが、午後は雨が降るかもしれません。）" },
          { "speaker": "Peregrino japonés", "sentence": "¿Lloverá mucho?", "pronunciation": "ペレグリノ ハポネス: ジョベラ ムチョ？（たくさん雨が降りますか？）" },
          { "speaker": "Hospitalero", "sentence": "No, serán chubascos cortos. Es típico en Galicia. Te recomiendo llevar un chubasquero en la mochila.", "pronunciation": "オスピタレロ: ノ、セラン チュバスコス コルトス。エス ティピコ エン ガリシア。テ レコミエンド ジェバル ウン チュバスケロ エン ラ モチーラ。（いいえ、短いにわか雨でしょう。ガリシアではよくあることです。リュックにレインコートを持っていくことをお勧めします。）" }
        ],
        "explanation": [
          "¿Qué tiempo va a hacer hoy?: 「今日の天気はどうなりますか？」という質問。未来の天気を尋ねるときに使います。",
          "Según la previsión: 「予報によると」という表現。",
          "Por la mañana / Por la tarde: 「午前中に / 午後に」という表現。",
          "Hará sol: 「晴れるでしょう」という表現。未来形を使っています。",
          "Puede que llueva: 「雨が降るかもしれません」という表現。可能性を示す表現です。",
          "¿Lloverá mucho?: 「たくさん雨が降りますか？」という質問。未来形を使っています。",
          "Serán chubascos cortos: 「短いにわか雨でしょう」という表現。",
          "Es típico en [場所]: 「[場所]ではよくあることです」という表現。",
          "Te recomiendo [動詞の原形]: 「〜することをお勧めします」という表現。"
        ]
      },
      {
        "type": "conversation",
        "title": "天気の変化について話す",
        "dialogue": [
          { "speaker": "Peregrino japonés", "sentence": "¡Vaya! Está empezando a llover.", "pronunciation": "ペレグリノ ハポネス: バヤ！エスタ エンペサンド ア ジョベール。（おや！雨が降り始めています。）" },
          { "speaker": "Otro peregrino", "sentence": "Sí, el cielo se ha nublado muy rápido. Parece que viene una tormenta.", "pronunciation": "オトロ ペレグリノ: シ、エル シエロ セ ア ヌブラド ムイ ラピド。パレセ ケ ビエネ ウナ トルメンタ。（はい、空がとても急に曇ってきました。嵐が来そうです。）" },
          { "speaker": "Peregrino japonés", "sentence": "¿Hay algún sitio donde podamos refugiarnos?", "pronunciation": "ペレグリノ ハポネス: アイ アルグン シティオ ドンデ ポダモス レフヒアルノス？（避難できる場所はありますか？）" },
          { "speaker": "Otro peregrino", "sentence": "Sí, hay una pequeña ermita a unos 500 metros. Podemos esperar allí hasta que escampe.", "pronunciation": "オトロ ペレグリノ: シ、アイ ウナ ペケーニャ エルミタ ア ウノス キニエントス メトロス。ポデモス エスペラール アジ アスタ ケ エスカンペ。（はい、約500メートル先に小さな礼拝堂があります。雨が止むまでそこで待つことができます。）" }
        ],
        "explanation": [
          "¡Vaya!: 「おや！」という感嘆詞。驚きを表します。",
          "Está empezando a [動詞の原形]: 「〜し始めています」という表現。",
          "El cielo se ha nublado: 「空が曇ってきました」という表現。現在完了形を使っています。",
          "Parece que viene [名詞]: 「[名詞]が来そうです」という表現。",
          "¿Hay algún sitio donde podamos [動詞の原形]?: 「〜できる場所はありますか？」という質問。",
          "Podemos esperar allí: 「そこで待つことができます」という表現。",
          "Hasta que escampe: 「雨が止むまで」という表現。escampar は「雨が止む」という意味の動詞です。"
        ]
      },
      {
        "type": "vocabulary",
        "title": "3. 季節と月の表現",
        "items": [
          { "spanish": "La primavera", "japanese": "春", "context": "3月、4月、5月" },
          { "spanish": "El verano", "japanese": "夏", "context": "6月、7月、8月" },
          { "spanish": "El otoño", "japanese": "秋", "context": "9月、10月、11月" },
          { "spanish": "El invierno", "japanese": "冬", "context": "12月、1月、2月" },
          { "spanish": "Enero", "japanese": "1月" },
          { "spanish": "Febrero", "japanese": "2月" },
          { "spanish": "Marzo", "japanese": "3月" },
          { "spanish": "Abril", "japanese": "4月" },
          { "spanish": "Mayo", "japanese": "5月" },
          { "spanish": "Junio", "japanese": "6月" },
          { "spanish": "Julio", "japanese": "7月" },
          { "spanish": "Agosto", "japanese": "8月" },
          { "spanish": "Septiembre", "japanese": "9月" },
          { "spanish": "Octubre", "japanese": "10月" },
          { "spanish": "Noviembre", "japanese": "11月" },
          { "spanish": "Diciembre", "japanese": "12月" }
        ]
      },
      {
        "type": "tip",
        "content": "<strong>巡礼者へのアドバイス:</strong> サンティアゴ巡礼の最適な時期は、一般的に5月から6月（春の終わりから夏の初め）と9月（夏の終わりから秋の初め）です。7月と8月は暑く、巡礼者も多いため混雑します。冬は寒く、一部のアルベルゲは閉鎖されることもあります。"
      },
      {
        "type": "conversation",
        "title": "季節について話す",
        "dialogue": [
          { "speaker": "Peregrino japonés", "sentence": "¿Cuál es la mejor época para hacer el Camino?", "pronunciation": "ペレグリノ ハポネス: クアル エス ラ メホール エポカ パラ アセール エル カミーノ？（巡礼路を歩くのに最適な時期はいつですか？）" },
          { "speaker": "Hospitalero", "sentence": "En primavera, entre mayo y junio, el tiempo es agradable y hay menos gente que en verano.", "pronunciation": "オスピタレロ: エン プリマベラ、エントレ マヨ イ フニオ、エル ティエンポ エス アグラダブレ イ アイ メノス ヘンテ ケ エン ベラノ。（春、5月から6月の間は、天気が良く、夏よりも人が少ないです。）" },
          { "speaker": "Peregrino japonés", "sentence": "¿Y en otoño?", "pronunciation": "ペレグリノ ハポネス: イ エン オトーニョ？（秋はどうですか？）" },
          { "speaker": "Hospitalero", "sentence": "Septiembre también es buena época. En octubre ya puede hacer frío y llueve más, pero los paisajes son preciosos con los colores del otoño.", "pronunciation": "オスピタレロ: セプティエンブレ タンビエン エス ブエナ エポカ。エン オクトゥブレ ヤ プエデ アセール フリオ イ ジュエベ マス、ペロ ロス パイサヘス ソン プレシオソス コン ロス コロレス デル オトーニョ。（9月も良い時期です。10月はすでに寒くなり、雨も多くなりますが、秋の色彩で風景は美しいです。）" }
        ],
        "explanation": [
          "¿Cuál es la mejor época para [動詞の原形]?: 「〜するのに最適な時期はいつですか？」という質問。",
          "En [季節]: 「[季節]に」という表現。",
          "Entre [月] y [月]: 「[月]から[月]の間」という表現。",
          "El tiempo es agradable: 「天気が良いです」という表現。",
          "Hay menos gente que en [季節/月]: 「[季節/月]よりも人が少ないです」という表現。",
          "¿Y en [季節/月]?: 「[季節/月]はどうですか？」という質問。",
          "[月] también es buena época: 「[月]も良い時期です」という表現。",
          "Ya puede hacer frío: 「すでに寒くなることがあります」という表現。",
          "Los paisajes son preciosos: 「風景は美しいです」という表現。",
          "Con los colores de [季節]: 「[季節]の色彩で」という表現。"
        ]
      },
      {
        "type": "vocabulary",
        "title": "4. 気温と天気予報",
        "items": [
          { "spanish": "La temperatura", "japanese": "気温" },
          { "spanish": "Grados", "japanese": "度" },
          { "spanish": "La previsión del tiempo", "japanese": "天気予報" },
          { "spanish": "La probabilidad de lluvia", "japanese": "降水確率" },
          { "spanish": "La tormenta", "japanese": "嵐" },
          { "spanish": "El relámpago / El rayo", "japanese": "稲妻 / 雷" },
          { "spanish": "El trueno", "japanese": "雷鳴" },
          { "spanish": "La niebla", "japanese": "霧" },
          { "spanish": "El arco iris", "japanese": "虹" }
        ]
      },
      {
        "type": "conversation",
        "title": "天気予報について話す",
        "dialogue": [
          { "speaker": "Peregrino japonés", "sentence": "¿Has visto la previsión del tiempo para mañana?", "pronunciation": "ペレグリノ ハポネス: アス ビスト ラ プレビシオン デル ティエンポ パラ マニャナ？（明日の天気予報を見ましたか？）" },
          { "speaker": "Otro peregrino", "sentence": "Sí, dicen que la temperatura máxima será de 22 grados y la mínima de 12. Hay un 30% de probabilidad de lluvia por la tarde.", "pronunciation": "オトロ ペレグリノ: シ、ディセン ケ ラ テンペラトゥラ マクシマ セラ デ ベインティドス グラドス イ ラ ミニマ デ ドセ。アイ ウン トレインタ ポル シエント デ プロバビリダ デ ジュビア ポル ラ タルデ。（はい、最高気温は22度、最低気温は12度になるそうです。午後は30%の降水確率があります。）" },
          { "speaker": "Peregrino japonés", "sentence": "¿Crees que habrá niebla por la mañana?", "pronunciation": "ペレグリノ ハポネス: クレエス ケ アブラ ニエブラ ポル ラ マニャナ？（朝は霧があると思いますか？）" },
          { "speaker": "Otro peregrino", "sentence": "Es posible. En esta zona suele haber niebla al amanecer, pero se disipa rápido cuando sale el sol.", "pronunciation": "オトロ ペレグリノ: エス ポシブレ。エン エスタ ソナ スエレ アベール ニエブラ アル アマネセール、ペロ セ ディシパ ラピド クアンド サレ エル ソル。（可能性はあります。この地域では夜明けに霧が出ることが多いですが、太陽が出るとすぐに消えます。）" }
        ],
        "explanation": [
          "¿Has visto la previsión del tiempo para [時間]?: 「[時間]の天気予報を見ましたか？」という質問。現在完了形を使っています。",
          "Dicen que [文]: 「[文]だそうです」という表現。",
          "La temperatura máxima/mínima: 「最高/最低気温」という表現。",
          "Será de [数字] grados: 「[数字]度になるでしょう」という表現。未来形を使っています。",
          "Hay un [数字]% de probabilidad de lluvia: 「[数字]%の降水確率があります」という表現。",
          "¿Crees que habrá [名詞]?: 「[名詞]があると思いますか？」という質問。",
          "Es posible: 「可能性はあります」という表現。",
          "En esta zona suele haber [名詞]: 「この地域では[名詞]があることが多いです」という表現。",
          "Al amanecer: 「夜明けに」という表現。",
          "Se disipa rápido: 「すぐに消えます」という表現。",
          "Cuando sale el sol: 「太陽が出るとき」という表現。"
        ]
      },
      {
        "type": "exercise",
        "title": "練習問題",
        "introduction": "次の日本語をスペイン語に訳してみましょう：",
        "questions": [
          "今日の天気はどうですか？",
          "雨が降り始めています。",
          "巡礼路を歩くのに最適な時期はいつですか？",
          "明日の天気予報を見ましたか？",
          "この地域では夜明けに霧があることが多いです。"
        ]
      },
      {
        "type": "note",
        "content": "これらの表現は、サンティアゴ巡礼の道中で天気について話したり、天気予報を理解したりするときに非常に役立ちます。特にガリシア地方は天候が変わりやすいため、天気に関する表現を知っておくことは重要です。また、巡礼の計画を立てる際に、季節や月に関する表現も役立ちます。"
      },
      {
        "type": "buen_camino",
        "content": "¡Buen Camino! (ブエン・カミーノ！良い旅を！)"
      }
    ]
  },
{
  "id": 9,
  "title": "レッスン 9: 文化と伝統の表現",
  "description": "サンティアゴ巡礼のための日本語で学ぶスペイン語",
  "filename": "スペイン語レッスン９文化と伝統.html",
  "conversationCount": 4,
  "introduction": "このレッスンでは、サンティアゴ巡礼の道中で役立つ文化と伝統に関するスペイン語表現を学びます。ガリシア地方の文化や伝統、食事のマナーなどについて理解を深めましょう。",
  "mainTip": "サンティアゴ巡礼路を歩く際、地元の文化や伝統に触れる機会が多くあります。特にガリシア地方は独自の文化を持ち、ケルト系の音楽や伝統的な祭りが今も息づいています。文化や伝統に関する表現を知っておくと、地元の人々との交流がより豊かになります。",
  "sections": [
    {
      "type": "vocabulary",
      "title": "1. ガリシア文化の基本表現",
      "items": [
        { "spanish": "La cultura gallega", "japanese": "ガリシア文化" },
        { "spanish": "Las tradiciones", "japanese": "伝統" },
        { "spanish": "La gaita", "japanese": "バグパイプ", "context": "ガリシアの伝統的な楽器" },
        { "spanish": "La muñeira", "japanese": "ムニェイラ", "context": "ガリシアの伝統的な踊り" },
        { "spanish": "El idioma gallego", "japanese": "ガリシア語", "context": "ガリシア地方の公用語の一つ" },
        { "spanish": "La queimada", "japanese": "ケイマーダ", "context": "ガリシアの伝統的な蒸留酒と儀式" },
        { "spanish": "El hórreo", "japanese": "オレオ", "context": "ガリシアの伝統的な穀物倉庫" },
        { "spanish": "La fiesta", "japanese": "祭り" },
        { "spanish": "Las costumbres", "japanese": "習慣" },
        { "spanish": "El patrimonio", "japanese": "遺産" }
      ]
    },
    {
      "type": "tip",
      "content": "<strong>巡礼者へのアドバイス:</strong> ガリシア地方では、スペイン語とガリシア語の両方が話されています。道標や看板にはガリシア語が使われていることもあります。例えば、「Camiño de Santiago」（ガリシア語）と「Camino de Santiago」（スペイン語）は同じ意味です。"
    },
    {
      "type": "conversation",
      "title": "ガリシア文化について尋ねる",
      "dialogue": [
        { "speaker": "Peregrino japonés", "sentence": "Disculpe, ¿me podría hablar un poco sobre la cultura gallega?", "pronunciation": "ペレグリノ ハポネス: ディスクルペ、メ ポドリア アブラール ウン ポコ ソブレ ラ クルトゥラ ガジェガ？（すみません、ガリシア文化について少し教えていただけますか？）" },
        { "speaker": "Local", "sentence": "Claro. Galicia tiene una cultura muy rica con influencias celtas. Tenemos nuestra propia lengua, el gallego, y música tradicional con gaita.", "pronunciation": "ロカル: クラロ。ガリシア ティエネ ウナ クルトゥラ ムイ リカ コン インフルエンシアス セルタス。テネモス ヌエストラ プロピア レングア、エル ガジェゴ、イ ムシカ トラディシオナル コン ガイタ。（もちろんです。ガリシアはケルト系の影響を受けた非常に豊かな文化を持っています。私たちは独自の言語であるガリシア語と、バグパイプを使った伝統音楽を持っています。）" },
        { "speaker": "Peregrino japonés", "sentence": "¿Hay alguna tradición especial que deba conocer como peregrino?", "pronunciation": "ペレグリノ ハポネス: アイ アルグナ トラディシオン エスペシアル ケ デバ コノセール コモ ペレグリノ？（巡礼者として知っておくべき特別な伝統はありますか？）" },
        { "speaker": "Local", "sentence": "Sí, cuando llegues a Santiago, debes abrazar la estatua del Apóstol y visitar su tumba en la catedral. También es tradición ver el Botafumeiro, un gran incensario que se balancea por la catedral.", "pronunciation": "ロカル: シ、クアンド ジェゲス ア サンティアゴ、デベス アブラサール ラ エスタトゥア デル アポストル イ ビシタール ス トゥンバ エン ラ カテドラル。タンビエン エス トラディシオン ベール エル ボタフメイロ、ウン グラン インセンサリオ ケ セ バランセア ポル ラ カテドラル。（はい、サンティアゴに到着したら、使徒の像を抱きしめ、大聖堂にある彼の墓を訪れるべきです。また、大聖堂を揺れ動く大きな香炉であるボタフメイロを見るのも伝統です。）" }
      ],
      "explanation": [
        "¿Me podría hablar un poco sobre [トピック]?: 「[トピック]について少し教えていただけますか？」という丁寧な質問。",
        "[場所] tiene una cultura muy rica: 「[場所]は非常に豊かな文化を持っています」という表現。",
        "Con influencias [種類]: 「[種類]の影響を受けた」という表現。",
        "Tenemos nuestra propia [名詞]: 「私たちは独自の[名詞]を持っています」という表現。",
        "¿Hay alguna tradición especial que deba conocer como [役割]?: 「[役割]として知っておくべき特別な伝統はありますか？」という質問。",
        "Cuando llegues a [場所], debes [動詞の原形]: 「[場所]に到着したら、〜するべきです」という表現。",
        "También es tradición [動詞の原形]: 「〜するのも伝統です」という表現。"
      ]
    },
    {
      "type": "conversation",
      "title": "地元の祭りについて尋ねる",
      "dialogue": [
        { "speaker": "Peregrino japonés", "sentence": "¿Hay alguna fiesta tradicional en esta época del año?", "pronunciation": "ペレグリノ ハポネス: アイ アルグナ フィエスタ トラディシオナル エン エスタ エポカ デル アニョ？（この時期に何か伝統的な祭りはありますか？）" },
        { "speaker": "Local", "sentence": "Depende de la fecha exacta. En julio tenemos las fiestas del Apóstol Santiago, que son muy importantes. En cada pueblo hay fiestas patronales diferentes a lo largo del año.", "pronunciation": "ロカル: デペンデ デ ラ フェチャ エグザクタ。エン フリオ テネモス ラス フィエスタス デル アポストル サンティアゴ、ケ ソン ムイ インポルタンテス。エン カダ プエブロ アイ フィエスタス パトロナレス ディフェレンテス ア ロ ラルゴ デル アニョ。（正確な日付によります。7月には非常に重要なサンティアゴ使徒の祭りがあります。年間を通じて、各町には異なる守護聖人の祭りがあります。）" },
        { "speaker": "Peregrino japonés", "sentence": "¿En qué consisten estas fiestas?", "pronunciation": "ペレグリノ ハポネス: エン ケ コンシステン エスタス フィエスタス？（これらの祭りはどのようなものですか？）" },
        { "speaker": "Local", "sentence": "Suele haber procesiones religiosas, música tradicional con gaitas, bailes como la muñeira, fuegos artificiales y, por supuesto, mucha comida y bebida típica como el pulpo a la gallega y el vino Albariño.", "pronunciation": "ロカル: スエレ アベール プロセシオネス レリヒオサス、ムシカ トラディシオナル コン ガイタス、バイレス コモ ラ ムニェイラ、フエゴス アルティフィシアレス イ、ポル スプエスト、ムチャ コミダ イ ベビダ ティピカ コモ エル プルポ ア ラ ガジェガ イ エル ビノ アルバリーニョ。（通常、宗教的な行列、バグパイプによる伝統音楽、ムニェイラのような踊り、花火、そしてもちろん、ガリシア風タコやアルバリーニョワインなどの典型的な食べ物や飲み物がたくさんあります。）" }
      ],
      "explanation": [
        "¿Hay alguna fiesta tradicional en esta época del año?: 「この時期に何か伝統的な祭りはありますか？」という質問。",
        "Depende de [名詞]: 「[名詞]によります」という表現。",
        "En [月] tenemos [名詞]: 「[月]には[名詞]があります」という表現。",
        "Que son muy importantes: 「それらは非常に重要です」という表現。",
        "En cada [場所] hay [名詞]: 「各[場所]には[名詞]があります」という表現。",
        "A lo largo del año: 「年間を通じて」という表現。",
        "¿En qué consisten [名詞]?: 「[名詞]はどのようなものですか？」という質問。",
        "Suele haber [名詞]: 「通常、[名詞]があります」という表現。",
        "Como [例]: 「[例]のような」という表現。",
        "Por supuesto: 「もちろん」という表現。"
      ]
    },
    {
      "type": "vocabulary",
      "title": "3. 食事のマナーと習慣",
      "items": [
        { "spanish": "La hora de comer", "japanese": "食事の時間" },
        { "spanish": "El desayuno", "japanese": "朝食", "context": "通常8時〜10時" },
        { "spanish": "La comida / El almuerzo", "japanese": "昼食", "context": "通常14時〜16時" },
        { "spanish": "La cena", "japanese": "夕食", "context": "通常21時〜23時" },
        { "spanish": "Las tapas", "japanese": "タパス", "context": "小皿料理" },
        { "spanish": "El menú del día", "japanese": "日替わりメニュー" },
        { "spanish": "El menú del peregrino", "japanese": "巡礼者メニュー" },
        { "spanish": "¡Que aproveche!", "japanese": "召し上がれ！", "context": "食事前の挨拶" },
        { "spanish": "¡Salud!", "japanese": "乾杯！" },
        { "spanish": "La propina", "japanese": "チップ" }
      ]
    },
    {
      "type": "tip",
      "content": "<strong>巡礼者へのアドバイス:</strong> スペインの食事時間は日本より遅いです。特に夕食は21時以降に食べるのが一般的です。多くのアルベルゲやレストランでは「メニュー・デル・ペレグリノ」（巡礼者メニュー）を提供しており、手頃な価格で前菜、メイン、デザート、ドリンクがセットになっています。"
    },
    {
      "type": "conversation",
      "title": "食事のマナーについて尋ねる",
      "dialogue": [
        { "speaker": "Peregrino japonés", "sentence": "¿A qué hora suelen cenar en España?", "pronunciation": "ペレグリノ ハポネス: ア ケ オラ スエレン セナール エン エスパーニャ？（スペインでは通常何時に夕食を食べますか？）" },
        { "speaker": "Hospitalero", "sentence": "En España cenamos tarde, normalmente entre las 9 y las 10 de la noche. Pero en los albergues la cena suele ser más temprano, sobre las 7 o las 8, para que los peregrinos puedan descansar.", "pronunciation": "オスピタレロ: エン エスパーニャ セナモス タルデ、ノルマルメンテ エントレ ラス ヌエベ イ ラス ディエス デ ラ ノチェ。ペロ エン ロス アルベルゲス ラ セナ スエレ セール マス テンプラノ、ソブレ ラス シエテ オ ラス オチョ、パラ ケ ロス ペレグリノス プエダン デスカンサール。（スペインでは夕食は遅く、通常夜9時から10時の間に食べます。しかし、アルベルゲでは巡礼者が休めるように、夕食は通常7時か8時頃と早めです。）" },
        { "speaker": "Peregrino japonés", "sentence": "¿Hay alguna costumbre especial durante las comidas?", "pronunciation": "ペレグリノ ハポネス: アイ アルグナ コストゥンブレ エスペシアル ドゥランテ ラス コミダス？（食事中に何か特別な習慣はありますか？）" },
        { "speaker": "Hospitalero", "sentence": "Sí, es común decir \"¡Que aproveche!\" antes de empezar a comer, como desear buen provecho. Y cuando brindamos con bebidas, decimos \"¡Salud!\". Además, en Galicia es habitual compartir la comida y comer todos del mismo plato, especialmente el pulpo o las empanadas.", "pronunciation": "オスピタレロ: シ、エス コムン デシール \"¡ケ アプロベチェ！\" アンテス デ エンペサール ア コメール、コモ デセアール ブエン プロベチョ。イ クアンド ブリンダモス コン ベビダス、デシモス \"¡サルード！\"。アデマス、エン ガリシア エス アビトゥアル コンパルティール ラ コミダ イ コメール トドス デル ミスモ プラト、エスペシアルメンテ エル プルポ オ ラス エンパナーダス。（はい、食べ始める前に「召し上がれ！」と言うのが一般的です。また、飲み物で乾杯するときは「乾杯！」と言います。さらに、ガリシアでは食べ物を共有し、特にタコやエンパナーダなどは同じ皿から全員で食べるのが習慣です。）" }
      ],
      "explanation": [
        "¿A qué hora suelen [動詞の原形] en [場所]?: 「[場所]では通常何時に〜しますか？」という質問。",
        "En [場所] [動詞の現在形] [副詞]: 「[場所]では[副詞]〜します」という表現。",
        "Normalmente entre las [数字] y las [数字]: 「通常[数字]時から[数字]時の間」という表現。",
        "Pero en [場所] [名詞] suele ser más [形容詞]: 「しかし、[場所]では[名詞]は通常より[形容詞]です」という表現。",
        "Para que [主語] puedan [動詞の原形]: 「[主語]が〜できるように」という表現。",
        "¿Hay alguna costumbre especial durante [名詞]?: 「[名詞]中に何か特別な習慣はありますか？」という質問。",
        "Es común [動詞の原形]: 「〜するのが一般的です」という表現。",
        "Antes de empezar a [動詞の原形]: 「〜し始める前に」という表現。",
        "Como [動詞の原形]: 「〜するように」という表現。",
        "Cuando [動詞の現在形]: 「〜するとき」という表現。",
        "Es habitual [動詞の原形]: 「〜するのが習慣です」という表現。",
        "Especialmente [名詞]: 「特に[名詞]」という表現。"
      ]
    },
    {
      "type": "vocabulary",
      "title": "4. 文化的な違いと礼儀",
      "items": [
        { "spanish": "La diferencia cultural", "japanese": "文化的な違い" },
        { "spanish": "La cortesía", "japanese": "礼儀" },
        { "spanish": "El saludo", "japanese": "挨拶" },
        { "spanish": "Dar dos besos", "japanese": "両頬にキスをする", "context": "スペインの一般的な挨拶" },
        { "spanish": "El espacio personal", "japanese": "パーソナルスペース" },
        { "spanish": "El contacto físico", "japanese": "身体的接触" },
        { "spanish": "La puntualidad", "japanese": "時間厳守" },
        { "spanish": "El volumen de la voz", "japanese": "声の大きさ" },
        { "spanish": "La siesta", "japanese": "昼寝", "context": "スペインの伝統的な習慣" }
      ]
    },
    {
      "type": "conversation",
      "title": "文化的な違いについて話す",
      "dialogue": [
        { "speaker": "Peregrino japonés", "sentence": "He notado que los españoles hablan muy alto. En Japón solemos hablar más bajo.", "pronunciation": "ペレグリノ ハポネス: エ ノタド ケ ロス エスパニョレス アブラン ムイ アルト。エン ハポン ソレモス アブラール マス バホ。（スペイン人はとても大きな声で話すことに気づきました。日本ではもっと小さな声で話すのが普通です。）" },
        { "speaker": "Otro peregrino", "sentence": "Sí, es una diferencia cultural. Los españoles son muy expresivos y les gusta gesticular y hablar alto. No es falta de respeto, es su forma de ser.", "pronunciation": "オトロ ペレグリノ: シ、エス ウナ ディフェレンシア クルトゥラル。ロス エスパニョレス ソン ムイ エクスプレシーボス イ レス グスタ ヘスティクラール イ アブラール アルト。ノ エス ファルタ デ レスペト、エス ス フォルマ デ セール。（はい、それは文化的な違いです。スペイン人は非常に表現豊かで、ジェスチャーをしたり大きな声で話したりするのが好きです。それは無礼ではなく、彼らの在り方なのです。）" },
        { "speaker": "Peregrino japonés", "sentence": "También me sorprende que la gente se salude con besos en las mejillas. En Japón nos inclinamos.", "pronunciation": "ペレグリノ ハポネス: タンビエン メ ソルプレンデ ケ ラ ヘンテ セ サルデ コン ベソス エン ラス メヒージャス。エン ハポン ノス インクリナモス。（また、人々が頬にキスをして挨拶することにも驚いています。日本では、お辞儀をします。）" },
        { "speaker": "Otro peregrino", "sentence": "Es cierto. En España es normal dar dos besos, uno en cada mejilla, cuando te presentan a alguien o te encuentras con amigos. Pero no te preocupes, la mayoría entiende que hay diferencias culturales y respetan tu forma de saludar.", "pronunciation": "オトロ ペレグリノ: エス シエルト。エン エスパーニャ エス ノルマル ダール ドス ベソス、ウノ エン カダ メヒージャ、クアンド テ プレセンタン ア アルギエン オ テ エンクエントラス コン アミーゴス。ペロ ノ テ プレオクペス、ラ マヨリーア エンティエンデ ケ アイ ディフェレンシアス クルトゥラレス イ レスペタン トゥ フォルマ デ サルダール。（その通りです。スペインでは、誰かを紹介されたり友人に会ったりするとき、両頬に1回ずつ、2回キスをするのが普通です。でも心配しないでください、ほとんどの人は文化的な違いがあることを理解し、あなたの挨拶の仕方を尊重します。）" }
      ],
      "explanation": [
        "He notado que [文]: 「[文]ということに気づきました」という表現。現在完了形を使っています。",
        "En [場所] solemos [動詞の原形]: 「[場所]では通常〜します」という表現。",
        "Es una diferencia cultural: 「それは文化的な違いです」という表現。",
        "[国籍] son muy [形容詞]: 「[国籍]の人々は非常に[形容詞]です」という表現。",
        "Les gusta [動詞の原形]: 「彼らは〜するのが好きです」という表現。",
        "No es falta de respeto: 「それは無礼ではありません」という表現。",
        "Es su forma de ser: 「それは彼らの在り方です」という表現。",
        "Me sorprende que [接続法]: 「[接続法]ということに驚いています」という表現。",
        "En [場所] es normal [動詞の原形]: 「[場所]では〜するのが普通です」という表現。",
        "Cuando te [動詞の現在形]: 「あなたが〜するとき」という表現。",
        "No te preocupes: 「心配しないでください」という表現。",
        "La mayoría entiende que [文]: 「ほとんどの人は[文]ということを理解しています」という表現。",
        "Respetan tu forma de [動詞の原形]: 「あなたの〜する方法を尊重します」という表現。"
      ]
    },
    {
      "type": "exercise",
      "title": "練習問題",
      "introduction": "次の日本語をスペイン語に訳してみましょう：",
      "questions": [
        "ガリシア文化について少し教えていただけますか？",
        "この時期に何か伝統的な祭りはありますか？",
        "スペインでは通常何時に夕食を食べますか？",
        "食事中に何か特別な習慣はありますか？",
        "それは文化的な違いです。"
      ]
    },
    {
      "type": "note",
      "content": "これらの表現は、サンティアゴ巡礼の道中で地元の文化や伝統について話したり、理解したりするときに非常に役立ちます。特にガリシア地方の文化的特徴や食事のマナー、文化的な違いに関する表現を知っておくことで、地元の人々との交流がより豊かになります。"
    },
    {
      "type": "buen_camino",
      "content": "¡Buen Camino! (ブエン・カミーノ！良い旅を！)"
    }
  ]
},

{
  "id": 10,
  "title": "レッスン 10: 旅行と観光の表現",
  "description": "サンティアゴ巡礼のための日本語で学ぶスペイン語",
  "filename": "スペイン語レッスン１０旅行と観光.html",
  "conversationCount": 7,
  "introduction": "このレッスンでは、サンティアゴ巡礼の道中や目的地での観光に役立つスペイン語表現を学びます。観光スポットについて尋ねる方法、道の尋ね方、写真撮影の許可を求める表現など、巡礼者に役立つ実用的な会話を練習しましょう。",
  "mainTip": "サンティアゴ巡礼の道中には、多くの歴史的な教会や修道院、美しい景観があります。また、サンティアゴ・デ・コンポステーラに到着した後は、大聖堂だけでなく、旧市街の観光も楽しめます。このレッスンで学ぶ表現を使って、地元の人々と交流しながら、より充実した巡礼と観光体験をしましょう。",
  "sections": [
    {
      "type": "vocabulary",
      "title": "1. 観光スポットについて尋ねる",
      "items": [
        { "spanish": "El lugar turístico", "japanese": "観光スポット" },
        { "spanish": "La catedral", "japanese": "大聖堂" },
        { "spanish": "El monasterio", "japanese": "修道院" },
        { "spanish": "La iglesia", "japanese": "教会" },
        { "spanish": "El museo", "japanese": "博物館" },
        { "spanish": "El casco antiguo", "japanese": "旧市街" },
        { "spanish": "El horario de visita", "japanese": "開館時間" },
        { "spanish": "La entrada", "japanese": "入場料" },
        { "spanish": "El descuento para peregrinos", "japanese": "巡礼者割引" },
        { "spanish": "La visita guiada", "japanese": "ガイド付きツアー" }
      ]
    },
    {
      "type": "tip",
      "content": "<strong>巡礼者へのアドバイス:</strong> サンティアゴ・デ・コンポステーラの大聖堂や多くの博物館では、巡礼者証（クレデンシャル）を提示すると割引が受けられることがあります。また、大聖堂では毎日12時に「ボタフメイロ」と呼ばれる巨大な香炉が振られる儀式が行われます（ミサの時間によって変更あり）。これは見逃せない光景です。"
    },
    {
      "type": "conversation",
      "title": "観光スポットについて尋ねる",
      "dialogue": [
        { "speaker": "Peregrino japonés", "sentence": "Disculpe, ¿cuáles son los lugares más importantes para visitar en Santiago?", "pronunciation": "ペレグリノ ハポネス: ディスクルペ、クアレス ソン ロス ルガレス マス インポルタンテス パラ ビシタール エン サンティアゴ？(すみません、サンティアゴで訪れるべき最も重要な場所はどこですか？)" },
        { "speaker": "Oficina de turismo", "sentence": "Sin duda, lo más importante es la Catedral de Santiago. También recomiendo visitar la Plaza del Obradoiro, el Monasterio de San Martín Pinario y el Museo de las Peregrinaciones.", "pronunciation": "オフィシナ デ トゥリスモ: シン ドゥダ、ロ マス インポルタンテ エス ラ カテドラル デ サンティアゴ。タンビエン レコミエンド ビシタール ラ プラサ デル オブラドイロ、エル モナステリオ デ サン マルティン ピナリオ イ エル ムセオ デ ラス ペレグリナシオネス。(間違いなく、最も重要なのはサンティアゴ大聖堂です。また、オブラドイロ広場、サン・マルティン・ピナリオ修道院、巡礼博物館も訪れることをお勧めします。)" },
        { "speaker": "Peregrino japonés", "sentence": "¿Cuál es el horario de visita de la catedral?", "pronunciation": "ペレグリノ ハポネス: クアル エス エル オラリオ デ ビシタ デ ラ カテドラル？(大聖堂の開館時間は何時ですか？)" },
        { "speaker": "Oficina de turismo", "sentence": "La catedral está abierta todos los días de 7:00 a 20:30. La entrada es gratuita, pero si quieres visitar el museo de la catedral o subir a la azotea, hay que pagar entrada. Con la credencial de peregrino tienes descuento.", "pronunciation": "オフィシナ デ トゥリスモ: ラ カテドラル エスタ アビエルタ トドス ロス ディアス デ シエテ ア ベインテ イ トレインタ。ラ エントラダ エス グラトゥイタ、ペロ シ キエレス ビシタール エル ムセオ デ ラ カテドラル オ スビール ア ラ アソテア、アイ ケ パガール エントラダ。コン ラ クレデンシアル デ ペレグリノ ティエネス デスクエント。(大聖堂は毎日7:00から20:30まで開いています。入場は無料ですが、大聖堂の博物館を訪れたり屋上に上がったりする場合は、入場料を支払う必要があります。巡礼者証があれば割引があります。)" }
      ],
      "explanation": [
        "¿Cuáles son los lugares más importantes para visitar en [場所]?: 「[場所]で訪れるべき最も重要な場所はどこですか？」という質問。",
        "Sin duda: 「間違いなく」という表現。",
        "Lo más importante es [名詞]: 「最も重要なのは[名詞]です」という表現。",
        "También recomiendo visitar [名詞]: 「また、[名詞]を訪れることもお勧めします」という表現。",
        "¿Cuál es el horario de visita de [場所]?: 「[場所]の開館時間は何時ですか？」という質問。",
        "[場所] está abierto/a [時間帯]: 「[場所]は[時間帯]開いています」という表現。",
        "Todos los días: 「毎日」という表現。",
        "La entrada es gratuita: 「入場は無料です」という表現。",
        "Pero si quieres [動詞の原形], hay que [動詞の原形]: 「しかし、もし〜したいなら、〜する必要があります」という表現。",
        "Con [名詞] tienes [名詞]: 「[名詞]があれば、[名詞]があります」という表現。"
      ]
    },
    {
      "type": "conversation",
      "title": "ガイド付きツアーについて尋ねる",
      "dialogue": [
        { "speaker": "Peregrino japonés", "sentence": "¿Hay visitas guiadas en inglés o japonés?", "pronunciation": "ペレグリノ ハポネス: アイ ビシタス ギアダス エン イングレス オ ハポネス？(英語や日本語のガイド付きツアーはありますか？)" },
        { "speaker": "Oficina de turismo", "sentence": "Sí, hay visitas guiadas en inglés varias veces al día. En japonés es más difícil, pero podemos reservarte una visita privada con un guía que habla japonés para mañana. Cuesta 50 euros por persona.", "pronunciation": "オフィシナ デ トゥリスモ: シ、アイ ビシタス ギアダス エン イングレス バリアス ベセス アル ディア。エン ハポネス エス マス ディフィシル、ペロ ポデモス レセルバルテ ウナ ビシタ プリバダ コン ウン ギア ケ アブラ ハポネス パラ マニャナ。クエスタ シンクエンタ エウロス ポル ペルソナ。(はい、英語のガイド付きツアーは一日に何回かあります。日本語は難しいですが、明日のために日本語を話すガイドとのプライベートツアーを予約することができます。一人50ユーロです。)" },
        { "speaker": "Peregrino japonés", "sentence": "¿Cuánto tiempo dura la visita guiada?", "pronunciation": "ペレグリノ ハポネス: クアント ティエンポ ドゥラ ラ ビシタ ギアダ？(ガイド付きツアーはどのくらいの時間がかかりますか？)" },
        { "speaker": "Oficina de turismo", "sentence": "La visita guiada dura aproximadamente dos horas y recorre los principales monumentos del casco antiguo, incluida la catedral.", "pronunciation": "オフィシナ デ トゥリスモ: ラ ビシタ ギアダ ドゥラ アプロクシマダメンテ ドス オラス イ レコレ ロス プリンシパレス モヌメントス デル カスコ アンティグオ、インクルイダ ラ カテドラル。(ガイド付きツアーは約2時間かかり、大聖堂を含む旧市街の主要な建造物を巡ります。)" }
      ],
      "explanation": [
        "¿Hay [名詞] en [言語]?: 「[言語]の[名詞]はありますか？」という質問。",
        "Varias veces al día: 「一日に何回か」という表現。",
        "En [言語] es más difícil: 「[言語]は難しいです」という表現。",
        "Podemos reservarte [名詞]: 「あなたのために[名詞]を予約することができます」という表現。",
        "Con un guía que habla [言語]: 「[言語]を話すガイドと」という表現。",
        "Para mañana: 「明日のために」という表現。",
        "Cuesta [金額] por persona: 「一人[金額]です」という表現。",
        "¿Cuánto tiempo dura [名詞]?: 「[名詞]はどのくらいの時間がかかりますか？」という質問。",
        "[名詞] dura aproximadamente [時間]: 「[名詞]は約[時間]かかります」という表現。",
        "Recorre los principales [名詞]: 「主要な[名詞]を巡ります」という表現。",
        "Incluida/o [名詞]: 「[名詞]を含む」という表現。"
      ]
    },
    {
      "type": "vocabulary",
      "title": "2. 道を尋ねる",
      "items": [
        { "spanish": "¿Cómo llego a...?", "japanese": "...にはどうやって行きますか？" },
        { "spanish": "¿Dónde está...?", "japanese": "...はどこですか？" },
        { "spanish": "Cerca / Lejos", "japanese": "近い / 遠い" },
        { "spanish": "A la derecha", "japanese": "右に" },
        { "spanish": "A la izquierda", "japanese": "左に" },
        { "spanish": "Todo recto", "japanese": "まっすぐ" },
        { "spanish": "En la esquina", "japanese": "角に" },
        { "spanish": "Al final de la calle", "japanese": "通りの終わりに" },
        { "spanish": "La primera / segunda calle", "japanese": "最初の / 2番目の通り" },
        { "spanish": "El camino / La ruta", "japanese": "道 / ルート" }
      ]
    },
    {
      "type": "tip",
      "content": "<strong>巡礼者へのアドバイス:</strong> サンティアゴ巡礼路では、黄色い矢印やホタテ貝のマークが道標として使われています。道に迷った場合は、地元の人に「¿Dónde está el Camino de Santiago?」（サンティアゴの道はどこですか？）と尋ねましょう。ほとんどの地元の人々は巡礼者に親切で、喜んで道を教えてくれます。"
    },
    {
      "type": "conversation",
      "title": "道を尋ねる",
      "dialogue": [
        { "speaker": "Peregrino japonés", "sentence": "Perdone, ¿cómo llego a la Plaza del Obradoiro?", "pronunciation": "ペレグリノ ハポネス: ペルドネ、コモ ジェゴ ア ラ プラサ デル オブラドイロ？(すみません、オブラドイロ広場にはどうやって行きますか？)" },
        { "speaker": "Local", "sentence": "Es muy fácil. Siga todo recto por esta calle, después gire a la derecha en la segunda calle y verá la plaza al final. La catedral está justo allí.", "pronunciation": "ロカル: エス ムイ ファシル。シガ トド レクト ポル エスタ カジェ、デスプエス ヒレ ア ラ デレチャ エン ラ セグンダ カジェ イ ベラ ラ プラサ アル フィナル。ラ カテドラル エスタ フсто アジ。(とても簡単です。この通りをまっすぐ進み、2番目の通りを右に曲がると、最後に広場が見えます。大聖堂はちょうどそこにあります。)" },
        { "speaker": "Peregrino japonés", "sentence": "¿Está lejos? ¿Cuánto tiempo se tarda caminando?", "pronunciation": "ペレグリノ ハポネス: エスタ レホス？ クアント ティエンポ セ タルダ カミナンド？(遠いですか？歩いてどのくらいの時間がかかりますか？)" },
        { "speaker": "Local", "sentence": "No, no está lejos. Está a unos 5 minutos caminando. Es imposible perderse, hay muchos peregrinos que van en esa dirección.", "pronunciation": "ロカル: ノ、ノ エスタ レホス。エスタ ア ウノス シンко ミヌтос カミナンド。エス インポсибле ペルデルセ、アイ ムチョс ペレグリノс ケ バン エン エса ディレクシオン。(いいえ、遠くありません。歩いて約5分です。迷うことは不可能です、その方向に行く巡礼者がたくさんいます。)" }
      ],
      "explanation": [
        "Perdone: 「すみません」という丁寧な呼びかけ。",
        "¿Cómo llego a [場所]?: 「[場所]にはどうやって行きますか？」という質問。",
        "Es muy fácil: 「とても簡単です」という表現。",
        "Siga todo recto por esta calle: 「この通りをまっすぐ進んでください」という表現。命令形を使っています。",
        "Después gire a la derecha/izquierda: 「その後、右/左に曲がってください」という表現。命令形を使っています。",
        "En la segunda calle: 「2番目の通りで」という表現。",
        "Verá [名詞] al final: 「最後に[名詞]が見えるでしょう」という表現。未来形を使っています。",
        "[名詞] está justo allí: 「[名詞]はちょうどそこにあります」という表現。",
        "¿Está lejos?: 「遠いですか？」という質問。",
        "¿Cuánto tiempo se tarda [動詞のgerundio]?: 「[動詞のgerundio]してどのくらいの時間がかかりますか？」という質問。",
        "No está lejos: 「遠くありません」という表現。",
        "Está a unos [数字] minutos [動詞のgerundio]: 「[動詞のgerundio]して約[数字]分です」という表現。",
        "Es imposible perderse: 「迷うことは不可能です」という表現。",
        "Hay muchos [名詞] que van en esa dirección: 「その方向に行く[名詞]がたくさんいます」という表現。"
      ]
    },
    {
      "type": "conversation",
      "title": "巡礼路で道を尋ねる",
      "dialogue": [
        { "speaker": "Peregrino japonés", "sentence": "Disculpe, ¿estoy en el camino correcto hacia Arzúa?", "pronunciation": "ペレグリノ ハポネス: ディスクルペ、エストイ エン エル カミノ コレクト アシア アルスーア？(すみません、アルスーアへの正しい道にいますか？)" },
        { "speaker": "Campesino", "sentence": "No, se ha desviado del Camino. Tiene que volver atrás unos 500 metros hasta el cruce y girar a la izquierda. Allí verá las flechas amarillas que indican el Camino.", "pronunciation": "カンпесино: ノ、セ ア デсビアド デル Камино。Тиене ケ ボルベル アトラス Унос Киниентос Метрос Аста Эль Крусе И Хирар А Ла Искиерда。Ахи Бера Лас Флечас Амарильяс Ке Индикан Эль Камино。(いいえ、あなたは道から外れています。交差点まで約500メートル戻って、左に曲がる必要があります。そこで道を示す黄色い矢印が見えるでしょう。)" },
        { "speaker": "Peregrino japonés", "sentence": "¿Cuánto falta para llegar a Arzúa desde allí?", "pronunciation": "ペレグリノ ハポネス: クアント ファルタ Пара ジェガール ア アルスーア デсде Ахи？(そこからアルスーアに到着するまでどのくらいありますか？)" },
        { "speaker": "Campesino", "sentence": "Desde el cruce hasta Arzúa hay unos 5 kilómetros. A buen ritmo, tardará una hora y media aproximadamente.", "pronunciation": "カンпесино: Десде Эль Крусе Аста Арсу́а Ай Унос Синко Километрос。А Буэн Ритмо、Тардара Уна Ора И Медиа Апроксимадаменте。(交差点からアルスーアまでは約5キロメートルあります。良いペースで歩くと、約1時間半かかるでしょう。)" }
      ],
      "explanation": [
        "¿Estoy en el camino correcto hacia [場所]?: 「[場所]への正しい道にいますか？」という質問。",
        "Se ha desviado del Camino: 「あなたは道から外れています」という表現。現在完了形を使っています。",
        "Tiene que volver atrás: 「戻る必要があります」という表現。",
        "Unos [数字] metros: 「約[数字]メートル」という表現。",
        "Hasta el cruce: 「交差点まで」という表現。",
        "Girar a la izquierda: 「左に曲がる」という表現。",
        "Allí verá [名詞]: 「そこで[名詞]が見えるでしょう」という表現。未来形を使っています。",
        "Que indican el Camino: 「道を示す」という表現。",
        "¿Cuánto falta para llegar a [場所]?: 「[場所]に到着するまでどのくらいありますか？」という質問。",
        "Desde [場所] hasta [場所] hay [距離]: 「[場所]から[場所]までは[距離]あります」という表現。",
        "A buen ritmo: 「良いペースで」という表現。",
        "Tardará [時間] aproximadamente: 「約[時間]かかるでしょう」という表現。未来形を使っています。"
      ]
    },
    {
      "type": "vocabulary",
      "title": "3. 写真撮影と許可を求める",
      "items": [
        { "spanish": "Sacar una foto", "japanese": "写真を撮る" },
        { "spanish": "¿Puedo sacar fotos?", "japanese": "写真を撮ってもいいですか？" },
        { "spanish": "Está prohibido", "japanese": "禁止されています" },
        { "spanish": "Sin flash", "japanese": "フラッシュなしで" },
        { "spanish": "¿Me puede sacar una foto?", "japanese": "写真を撮ってもらえますか？" },
        { "spanish": "¿Podría hacernos una foto?", "japanese": "写真を撮っていただけますか？" },
        { "spanish": "El recuerdo", "japanese": "記念品" },
        { "spanish": "El paisaje", "japanese": "風景" },
        { "spanish": "El monumento", "japanese": "記念碑" },
        { "spanish": "La vista", "japanese": "眺め" }
      ]
    },
    {
      "type": "tip",
      "content": "<strong>巡礼者へのアドバイス:</strong> 多くの教会や博物館では、フラッシュを使った写真撮影が禁止されています。また、ミサや宗教的な儀式の最中は写真撮影を控えるのがマナーです。不確かな場合は、必ず「¿Puedo sacar fotos?」（写真を撮ってもいいですか？）と尋ねましょう。"
    },
    {
      "type": "conversation",
      "title": "写真撮影の許可を求める",
      "dialogue": [
        { "speaker": "Peregrino japonés", "sentence": "Perdone, ¿se pueden sacar fotos dentro de la catedral?", "pronunciation": "ペレグリノ ハポネス: ペルドネ、セ プエデン サカール Фотос デントロ デ ラ カテдраль？(すみません、大聖堂の中で写真を撮ることはできますか？)" },
        { "speaker": "Guía", "sentence": "Sí, se pueden sacar fotos en la mayoría de las zonas, pero sin flash. En algunas capillas está prohibido. Hay carteles que lo indican.", "pronunciation": "ギア: シ、セ プエデン サカール Фотос Эн Ла Майория Де Лас Сонас、Перо Син Флаш。Эн Альгунас Капильяс Эста Проибидо。Ай Картелес Ке Ло Индикан。(はい、ほとんどの場所で写真を撮ることができますが、フラッシュなしでお願いします。いくつかの礼拝堂では禁止されています。それを示す看板があります。)" },
        { "speaker": "Peregrino japonés", "sentence": "¿Y se puede fotografiar el Botafumeiro cuando está en funcionamiento?", "pronunciation": "ペレグリノ ハポネス: イ セ プエデ Фотографиар Эль Ботафумейро Куандо Эста Эн Фунсионамиенто？(そして、ボタフメイロが動いているときに撮影することはできますか？)" },
        { "speaker": "Guía", "sentence": "Sí, puedes fotografiar el Botafumeiro, pero te recomiendo que primero disfrutes del espectáculo y luego hagas las fotos. Es una experiencia única.", "pronunciation": "ギア: シ、プエデス Фотографиар Эль Ботафумейро、Перо Те Рекомиендо Ке Примеро Дисфрутес Дель Эспектакуло И Луэго Агас Фотос。Эс Уна Эксперьенсия Уника。(はい、ボタフメイロを撮影することができますが、まず光景を楽しんでから写真を撮ることをお勧めします。それはユニークな体験です。)" }
      ],
      "explanation": [
        "¿Se pueden sacar fotos dentro de [場所]?: 「[場所]の中で写真を撮ることはできますか？」という質問。",
        "Sí, se pueden sacar fotos: 「はい、写真を撮ることができます」という表現。",
        "En la mayoría de las zonas: 「ほとんどの場所で」という表現。",
        "Pero sin flash: 「しかし、フラッシュなしで」という表現。",
        "En algunas [場所] está prohibido: 「いくつかの[場所]では禁止されています」という表現。",
        "Hay carteles que lo indican: 「それを示す看板があります」という表現。",
        "¿Se puede fotografiar [名詞] cuando está en funcionamiento?: 「[名詞]が動いているときに撮影することはできますか？」という質問。",
        "Te recomiendo que [接続法]: 「あなたが〜することをお勧めします」という表現。",
        "Primero [動詞の原形] y luego [動詞の原形]: 「まず〜してから〜する」という表現。",
        "Es una experiencia única: 「それはユニークな体験です」という表現。"
      ]
    },
    {
      "type": "conversation",
      "title": "写真を撮ってもらう",
      "dialogue": [
        { "speaker": "Peregrino japonés", "sentence": "Disculpe, ¿podría hacernos una foto delante de la catedral, por favor?", "pronunciation": "ペレグリノ ハポネス: ディスクルペ、подриа Асернос Уна Фото Деланте Де Ла Катедраль、Пор Фавор？(すみません、大聖堂の前で写真を撮っていただけますか？)" },
        { "speaker": "Otro peregrino", "sentence": "Claro, con mucho gusto. ¿Con su móvil o su cámara?", "pronunciation": "オトロ ペレグリノ: クラロ、кон Мучо Густо。Кон Су Мобиль О Су Камара？(もちろん、喜んで。あなたのスマホですか、それともカメラですか？)" },
        { "speaker": "Peregrino japonés", "sentence": "Con mi móvil, por favor. Ya está desbloqueado y listo para hacer la foto. Solo tiene que pulsar aquí.", "pronunciation": "ペレグリノ ハポネス: Кон Ми Мобиль、Пор Фавор。Я Эста Десблокеадо И Листо Пара Асер Ла Фото。Соло Тиене Ке Пульсар Аки。(私のスマホでお願いします。すでにロック解除されていて、写真を撮る準備ができています。ここを押すだけです。)" },
        { "speaker": "Otro peregrino", "sentence": "Perfecto. Sonrían... ¡Ya está! Les he hecho varias, para que puedan elegir la mejor.", "pronunciation": "オトロ ペレグリノ: Перфекто。Сонриан... ¡Я Эста! Лес Э Эчо Бариас、Пара Ке Пуэдан Элехир Ла Мехор。(完璧です。笑顔で...はい、できました！いくつか撮りましたので、最高のものを選ぶことができます。)" }
      ],
      "explanation": [
        "¿Podría hacernos una foto delante de [場所]?: 「[場所]の前で写真を撮っていただけますか？」という丁寧な質問。",
        "Claro, con mucho gusto: 「もちろん、喜んで」という表現。",
        "¿Con su [名詞] o su [名詞]?: 「あなたの[名詞]ですか、それとも[名詞]ですか？」という質問。",
        "Con mi [名詞], por favor: 「私の[名詞]でお願いします」という表現。",
        "Ya está desbloqueado y listo para [動詞の原形]: 「すでにロック解除されていて、〜する準備ができています」という表現。",
        "Solo tiene que [動詞の原形]: 「〜するだけです」という表現。",
        "Sonrían: 「笑顔で」という命令形。",
        "¡Ya está!: 「はい、できました！」という表現。",
        "Les he hecho varias: 「いくつか撮りました」という表現。現在完了形を使っています。",
        "Para que puedan [動詞の原形]: 「〜できるように」という表現。"
      ]
    },
    {
      "type": "vocabulary",
      "title": "4. 観光情報を求める",
      "items": [
        { "spanish": "La oficina de turismo", "japanese": "観光案内所" },
        { "spanish": "El mapa", "japanese": "地図" },
        { "spanish": "El folleto", "japanese": "パンフレット" },
        { "spanish": "La información", "japanese": "情報" },
        { "spanish": "El transporte público", "japanese": "公共交通機関" },
        { "spanish": "El autobús / El bus", "japanese": "バス" },
        { "spanish": "El tren", "japanese": "電車" },
        { "spanish": "El taxi", "japanese": "タクシー" },
        { "spanish": "El aeropuerto", "japanese": "空港" },
        { "spanish": "La estación", "japanese": "駅" }
      ]
    },
    {
      "type": "conversation",
      "title": "観光情報を求める",
      "dialogue": [
        { "speaker": "Peregrino japonés", "sentence": "Buenos días. Acabo de llegar a Santiago y me gustaría saber qué otros lugares puedo visitar en Galicia.", "pronunciation": "ペレグリノ ハポネス: ブエノс ディアс。Акабо Де Льегар А Сантьяго И Ме Густариа Сабер Ке Отрос Лугарес Пуэдо Биситар Эн Галисия。(おはようございます。サンティアゴに到着したばかりで、ガリシアで他にどんな場所を訪れることができるか知りたいです。)" },
        { "speaker": "Oficina de turismo", "sentence": "Bienvenido a Santiago. Hay muchos lugares interesantes en Galicia. Le recomiendo visitar Finisterre, que muchos peregrinos consideran el verdadero final del Camino. También son muy bonitas las Rías Baixas y la ciudad de A Coruña.", "pronunciation": "オフィシナ デ トゥリスモ: ビエンベнидо А Сантьяго。Ай Мучос Лугарес Интересантес Эн Галисия。Ле Рекомиендо Биситар Финистерре、Ке Мучос Перегринос Консидеран Эль Бердадеро Финаль Дель Камино。Тамбиен Сон Муи Бонитас Лас Риас Байшас И Ла Сьюдад Де А Корунья。(サンティアゴへようこそ。ガリシアには多くの興味深い場所があります。フィニステレをお勧めします。多くの巡礼者がそこを本当の巡礼路の終点と考えています。また、リアス・バイシャスとア・コルーニャの街もとても美しいです。)" },
        { "speaker": "Peregrino japonés", "sentence": "¿Cómo puedo llegar a Finisterre desde aquí?", "pronunciation": "ペレグリノ ハポネス: Комо Пуэдо Льегар А Финистерре Десде Аки？(ここからフィニステレにはどうやって行けますか？)" },
        { "speaker": "Oficina de turismo", "sentence": "Hay autobuses directos desde la estación de autobuses de Santiago. El viaje dura aproximadamente 2 horas y media. También puede ir en taxi, pero es bastante más caro. Si prefiere seguir caminando, hay una ruta de peregrinación que lleva 3 o 4 días.", "pronunciation": "オフィシナ デ トゥリスモ: Ай Аутобусес Директос Десде Ла Эстасион Де Аутобусес Де Сантьяго。Эль Биахе Дура Апроксимадаменте Дос Орас И Медиа。Тамбиен Пуэде Ир Эн Такси、Перо Эс Бастанте Мас Каро。Си Префиере Сегир Каминандо、Ай Уна Рута Де Перегринасион Ке Льеба Трес О Куатро Диас。(サンティアゴのバスターミナルから直行バスがあります。所要時間は約2時間半です。タクシーでも行けますが、かなり高価です。歩き続けることを好むなら、3〜4日かかる巡礼ルートもあります。)" }
      ],
      "explanation": [
        "Acabo de [動詞の原形]: 「〜したばかりです」という表現。",
        "Me gustaría saber [疑問詞] [動詞の現在形]: 「[疑問詞][動詞の現在形]か知りたいです」という表現。",
        "Bienvenido a [場所]: 「[場所]へようこそ」という表現。",
        "Hay muchos lugares interesantes en [場所]: 「[場所]には多くの興味深い場所があります」という表現。",
        "Le recomiendo visitar [場所]: 「[場所]を訪れることをお勧めします」という表現。",
        "Que muchos [名詞] consideran [名詞]: 「多くの[名詞]が[名詞]と考えている」という表現。",
        "También son muy [形容詞] [名詞]: 「また、[名詞]もとても[形容詞]です」という表現。",
        "¿Cómo puedo llegar a [場所] desde aquí?: 「ここから[場所]にはどうやって行けますか？」という質問。",
        "Hay [交通手段] directos desde [場所]: 「[場所]から直行[交通手段]があります」という表現。",
        "El viaje dura aproximadamente [時間]: 「所要時間は約[時間]です」という表現。",
        "También puede ir en [交通手段]: 「[交通手段]でも行けます」という表現。",
        "Pero es bastante más caro: 「しかし、かなり高価です」という表現。",
        "Si prefiere [動詞の原形]: 「もし〜することを好むなら」という表現。",
        "Hay una ruta que lleva [時間]: 「[時間]かかるルートがあります」という表現。"
      ]
    },
    {
      "type": "exercise",
      "title": "練習問題",
      "introduction": "次の日本語をスペイン語に訳してみましょう：",
      "questions": [
        "サンティアゴで訪れるべき最も重要な場所はどこですか？",
        "大聖堂の開館時間は何時ですか？",
        "オブラドイロ広場にはどうやって行きますか？",
        "歩いてどのくらいの時間がかかりますか？",
        "大聖堂の前で写真を撮っていただけますか？"
      ]
    },
    {
      "type": "note",
      "content": "これらの表現は、サンティアゴ巡礼の道中や目的地での観光に非常に役立ちます。観光スポットについて尋ねる、道を尋ねる、写真撮影の許可を求める、観光情報を求めるなど、様々な状況で使える表現を覚えておきましょう。"
    },
    {
      "type": "buen_camino",
      "content": "¡Buen Camino! (ブエン・カミーノ！良い旅を！)"
    }
  ]
},

  {
    "id": 11,
    "title": "レッスン 11: 巡礼者の会話表現",
    "description": "サンティアゴ巡礼のための日本語で学ぶスペイン語",
    "filename": "スペイン語レッスン１１巡礼者の会話.html",
    "conversationCount": 4,
    "introduction": "このレッスンでは、サンティアゴ巡礼の道中で他の巡礼者と交流するための会話表現を学びます。出会いの挨拶から経験の共有、情報交換まで、巡礼路での人間関係を豊かにする表現を身につけましょう。",
    "mainTip": "サンティアゴ巡礼の魅力の一つは、世界中から集まる多様な巡礼者との出会いです。共に歩き、食事をし、宿泊施設で過ごす中で生まれる交流は、巡礼体験を一層深めてくれます。言語や文化の壁を越えて交流するためのスペイン語表現を学び、巡礼路での出会いを大切にしましょう。",
    "sections": [
      {
        "type": "vocabulary",
        "title": "1. 巡礼者との出会いと自己紹介",
        "items": [
          { "spanish": "El peregrino / La peregrina", "japanese": "巡礼者（男性/女性）" },
          { "spanish": "¡Buen Camino!", "japanese": "良い巡礼を！", "context": "巡礼者同士の挨拶" },
          { "spanish": "¿De dónde vienes?", "japanese": "どこから来ましたか？" },
          { "spanish": "¿Dónde empezaste el Camino?", "japanese": "どこから巡礼を始めましたか？" },
          { "spanish": "¿Cuántos días llevas caminando?", "japanese": "何日間歩いていますか？" },
          { "spanish": "Es mi primera vez / segunda vez", "japanese": "初めて / 2回目です" },
          { "spanish": "Encantado/a de conocerte", "japanese": "お会いできて嬉しいです" },
          { "spanish": "¿Puedo caminar contigo?", "japanese": "一緒に歩いてもいいですか？" },
          { "spanish": "¿Vas a [lugar] hoy?", "japanese": "今日は[場所]に行きますか？" },
          { "spanish": "¿En qué albergue te quedas?", "japanese": "どのアルベルゲに泊まりますか？" }
        ]
      },
      {
        "type": "tip",
        "content": "<strong>巡礼者へのアドバイス:</strong> 「¡Buen Camino!」（良い巡礼を！）は巡礼路で最も頻繁に交わされる挨拶です。すれ違う巡礼者や地元の人からこの言葉をかけられたら、同じ言葉で返すのが習慣です。この短い挨拶が、巡礼者同士の連帯感を生み出します。"
      },
      {
        "type": "conversation",
        "title": "巡礼者との初めての会話",
        "dialogue": [
          { "speaker": "Peregrino japonés", "sentence": "¡Hola! ¡Buen Camino!", "pronunciation": "ペレグリノ ハポネス: オラ！ブエン カミーノ！（こんにちは！良い巡礼を！）" },
          { "speaker": "Otro peregrino", "sentence": "¡Buen Camino! ¿De dónde eres?", "pronunciation": "オトロ ペレグリノ: ブエン カミーノ！デ ドンデ エレス？（良い巡礼を！どこの出身ですか？）" },
          { "speaker": "Peregrino japonés", "sentence": "Soy de Japón. ¿Y tú?", "pronunciation": "ペレグリノ ハポネス: ソイ デ ハポン。イ トゥ？（日本出身です。あなたは？）" },
          { "speaker": "Otro peregrino", "sentence": "Yo soy de Alemania. ¿Dónde empezaste el Camino?", "pronunciation": "オトロ ペレグリノ: ヨ ソイ デ アレマニア。ドンデ エンペサステ エル カミーノ？（私はドイツ出身です。どこから巡礼を始めましたか？）" },
          { "speaker": "Peregrino japonés", "sentence": "Empecé en Sarria. Es mi primera vez en el Camino. ¿Y tú?", "pronunciation": "ペレグリノ ハポネス: エンペセ エン サリア。エス ミ プリメラ ベス エン エル カミーノ。イ トゥ？（サリアから始めました。巡礼は初めてです。あなたは？）" },
          { "speaker": "Otro peregrino", "sentence": "Yo empecé en Saint-Jean-Pied-de-Port. Llevo caminando casi un mes. ¿Vas a Portomarín hoy?", "pronunciation": "オトロ ペレグリノ: ヨ エンペセ エン サン ジャン ピエ デ ポール。ジェボ カミナンド カシ ウン メス。バス ア ポルトマリン オイ？（私はサン・ジャン・ピエ・ド・ポールから始めました。ほぼ1ヶ月歩いています。今日はポルトマリンに行きますか？）" }
        ],
        "explanation": [
          "¡Buen Camino!: 「良い巡礼を！」という巡礼者同士の挨拶。",
          "¿De dónde eres?: 「どこの出身ですか？」という質問。",
          "Soy de [国]: 「[国]出身です」という表現。",
          "¿Y tú?: 「あなたは？」という質問。会話を返す時に使います。",
          "¿Dónde empezaste el Camino?: 「どこから巡礼を始めましたか？」という質問。",
          "Empecé en [場所]: 「[場所]から始めました」という表現。",
          "Es mi primera vez: 「初めてです」という表現。",
          "Llevo caminando [期間]: 「[期間]歩いています」という表現。",
          "¿Vas a [場所] hoy?: 「今日は[場所]に行きますか？」という質問。"
        ]
      },
      {
        "type": "vocabulary",
        "title": "2. 巡礼体験の共有",
        "items": [
          { "spanish": "La experiencia", "japanese": "経験" },
          { "spanish": "El motivo / La razón", "japanese": "動機 / 理由" },
          { "spanish": "¿Por qué haces el Camino?", "japanese": "なぜ巡礼をしているのですか？" },
          { "spanish": "Lo más difícil / Lo más bonito", "japanese": "最も難しいこと / 最も美しいこと" },
          { "spanish": "Me gusta / Me encanta", "japanese": "好きです / 大好きです" },
          { "spanish": "Es increíble / impresionante", "japanese": "信じられないほどです / 印象的です" },
          { "spanish": "¿Qué te ha sorprendido?", "japanese": "何に驚きましたか？" },
          { "spanish": "La gente / El paisaje / La comida", "japanese": "人々 / 風景 / 食べ物" },
          { "spanish": "Compartir experiencias", "japanese": "経験を共有する" },
          { "spanish": "¿Cómo te sientes?", "japanese": "どう感じていますか？" }
        ]
      },
      {
        "type": "conversation",
        "title": "巡礼体験について話す",
        "dialogue": [
          { "speaker": "Peregrino japonés", "sentence": "¿Por qué decidiste hacer el Camino de Santiago?", "pronunciation": "ペレグリノ ハポネス: ポル ケ デシディステ アセール エル カミーノ デ サンティアゴ？（なぜサンティアゴ巡礼をすることに決めたのですか？）" },
          { "speaker": "Otro peregrino", "sentence": "Necesitaba tiempo para reflexionar sobre mi vida. ¿Y tú?", "pronunciation": "オトロ ペレグリノ: ネセシタバ ティエンポ パラ レフレクシオナール ソブレ ミ ビダ。イ トゥ？（人生について考える時間が必要でした。あなたは？）" },
          { "speaker": "Peregrino japonés", "sentence": "Yo siempre he estado interesado en la cultura española y quería conocer el Camino por su historia.", "pronunciation": "ペレグリノ ハポネス: ヨ シエンプレ エ エスタド インテレサド エン ラ クルトゥラ エスパニョーラ イ ケリア コノセール エル カミーノ ポル ス イストリア。（私はいつもスペイン文化に興味があり、その歴史から巡礼路を知りたいと思っていました。）" },
          { "speaker": "Otro peregrino", "sentence": "¿Qué es lo que más te ha gustado hasta ahora?", "pronunciation": "オトロ ペレグリノ: ケ エス ロ ケ マス テ ア グスタド アスタ アオラ？（今までで何が一番気に入っていますか？）" },
          { "speaker": "Peregrino japonés", "sentence": "Me encanta el paisaje, especialmente los campos de Galicia. Y la hospitalidad de la gente es increíble. ¿Y a ti?", "pronunciation": "ペレグリノ ハポネス: メ エンカンタ エル パイサヘ、エスペシアルメンテ ロス カンポス デ ガリシア。イ ラ オスピタリダ デ ラ ヘンテ エス インクレイブレ。イ ア ティ？（風景が大好きです、特にガリシアの田園地帯が。そして人々のおもてなしは信じられないほどです。あなたは？）" },
          { "speaker": "Otro peregrino", "sentence": "Para mí, lo mejor son las personas que he conocido. Cada día conozco a alguien interesante con una historia única.", "pronunciation": "オトロ ペレグリノ: パラ ミ、ロ メホール ソン ラス ペルソナス ケ エ コノシド。カダ ディア コノスコ ア アルギエン インテレサンテ コン ウナ イストリア ウニカ。（私にとって、最高なのは出会った人々です。毎日、ユニークな物語を持つ興味深い人に出会います。）" }
        ],
        "explanation": [
          "¿Por qué decidiste hacer [名詞]?: 「なぜ[名詞]をすることに決めたのですか？」という質問。",
          "Necesitaba [名詞] para [動詞の原形]: 「[動詞]するために[名詞]が必要でした」という表現。",
          "Siempre he estado interesado/a en [名詞]: 「いつも[名詞]に興味がありました」という表現。",
          "Quería [動詞の原形]: 「[動詞]したいと思っていました」という表現。",
          "¿Qué es lo que más te ha gustado?: 「何が一番気に入っていますか？」という質問。",
          "Me encanta [名詞]: 「[名詞]が大好きです」という表現。",
          "Especialmente [名詞]: 「特に[名詞]」という表現。",
          "Es increíble: 「信じられないほどです」という表現。",
          "Para mí, lo mejor son [名詞]: 「私にとって、最高なのは[名詞]です」という表現。",
          "Cada día [動詞の現在形]: 「毎日[動詞]します」という表現。"
        ]
      },
      {
        "type": "vocabulary",
        "title": "3. 情報交換と助け合い",
        "items": [
          { "spanish": "¿Has estado en...?", "japanese": "...に行ったことがありますか？" },
          { "spanish": "¿Conoces un buen albergue en...?", "japanese": "...の良いアルベルゲを知っていますか？" },
          { "spanish": "Te recomiendo...", "japanese": "...をお勧めします" },
          { "spanish": "¿Tienes información sobre...?", "japanese": "...についての情報を持っていますか？" },
          { "spanish": "¿Me puedes ayudar con...?", "japanese": "...を手伝ってもらえますか？" },
          { "spanish": "¿Tienes [objeto]?", "japanese": "[物]を持っていますか？" },
          { "spanish": "Te lo presto", "japanese": "貸してあげます" },
          { "spanish": "Gracias por tu ayuda", "japanese": "助けてくれてありがとう" },
          { "spanish": "Podemos compartir...", "japanese": "...を共有できます" },
          { "spanish": "¿Quieres...?", "japanese": "...が欲しいですか？" }
        ]
      },
      {
        "type": "tip",
        "content": "<strong>巡礼者へのアドバイス:</strong> 巡礼路では、情報交換が非常に重要です。先に進んだ巡礼者からの情報は、宿泊施設の選択や道中の困難への準備に役立ちます。また、物資の共有や助け合いも巡礼文化の重要な一部です。必要なものを持っていない場合は、遠慮せずに他の巡礼者に尋ねてみましょう。"
      },
      {
        "type": "conversation",
        "title": "情報交換と助け合いの会話",
        "dialogue": [
          { "speaker": "Peregrino japonés", "sentence": "¿Conoces un buen albergue en Palas de Rei?", "pronunciation": "ペレグリノ ハポネス: コノセス ウン ブエン アルベルゲ エン パラス デ レイ？（パラス・デ・レイの良いアルベルゲを知っていますか？）" },
          { "speaker": "Otro peregrino", "sentence": "Sí, te recomiendo el albergue San Marcos. Está limpio y tiene buenas duchas. Además, ofrecen cena comunitaria.", "pronunciation": "オトロ ペレグリノ: シ、テ レコミエンド エル アルベルゲ サン マルコス。エスタ リンピオ イ ティエネ ブエナス ドゥチャス。アデマス、オフレセン セナ コムニタリア。（はい、サン・マルコス・アルベルゲをお勧めします。清潔でシャワーも良いです。さらに、共同夕食も提供しています。）" },
          { "speaker": "Peregrino japonés", "sentence": "Gracias por la información. ¿Sabes si hay que reservar con antelación?", "pronunciation": "ペレグリノ ハポネス: グラシアス ポル ラ インフォルマシオン。サベス シ アイ ケ レセルバル コン アンテラシオン？（情報をありがとう。事前に予約する必要があるか知っていますか？）" },
          { "speaker": "Otro peregrino", "sentence": "No es necesario, pero si quieres puedes llamar. Tengo el número en mi guía. ¿Quieres que te lo dé?", "pronunciation": "オトロ ペレグリノ: ノ エス ネセサリオ、ペロ シ キエレス プエデス ジャマール。テンゴ エル ヌメロ エン ミ ギア。キエレス ケ テ ロ デ？（必要ありませんが、もし望むなら電話できます。ガイドブックに番号があります。教えましょうか？）" },
          { "speaker": "Peregrino japonés", "sentence": "Sí, por favor. Por cierto, ¿tienes una tirita? Tengo una pequeña ampolla.", "pronunciation": "ペレグリノ ハポネス: シ、ポル ファボール。ポル シエルト、ティエネス ウナ ティリタ？テンゴ ウナ ペケーニャ アンポージャ。（はい、お願いします。ところで、絆創膏を持っていますか？小さな水ぶくれがあります。）" },
          { "speaker": "Otro peregrino", "sentence": "Claro, tengo un botiquín completo. Te puedo dar también un poco de crema especial para ampollas. Me ha funcionado muy bien.", "pronunciation": "オトロ ペレグリノ: クラロ、テンゴ ウン ボティキン コンプレト。テ プエド ダール タンビエン ウン ポコ デ クレマ エスペシアル パラ アンポージャス。メ ア フンシオナド ムイ ビエン。（もちろん、完全な救急キットを持っています。水ぶくれ用の特別なクリームも少し差し上げられます。私にはとても効果がありました。）" }
        ],
        "explanation": [
          "¿Conoces un buen [場所] en [地名]?: 「[地名]の良い[場所]を知っていますか？」という質問。",
          "Te recomiendo [名詞]: 「[名詞]をお勧めします」という表現。",
          "Está [形容詞] y tiene [名詞]: 「[形容詞]で[名詞]があります」という表現。",
          "Además: 「さらに」という表現。",
          "Gracias por la información: 「情報をありがとう」という表現。",
          "¿Sabes si [動詞の現在形]?: 「[動詞]かどうか知っていますか？」という質問。",
          "No es necesario, pero...: 「必要ありませんが...」という表現。",
          "Tengo [名詞] en [場所]: 「[場所]に[名詞]があります」という表現。",
          "¿Quieres que te lo dé?: 「教えましょうか？」という質問。",
          "Por cierto: 「ところで」という表現。",
          "¿Tienes [物]?: 「[物]を持っていますか？」という質問。",
          "Te puedo dar también [名詞]: 「[名詞]も差し上げられます」という表現。",
          "Me ha funcionado muy bien: 「私にはとても効果がありました」という表現。"
        ]
      },
      {
        "type": "vocabulary",
        "title": "4. 別れと再会の表現",
        "items": [
          { "spanish": "Hasta luego / Hasta mañana", "japanese": "またね / また明日" },
          { "spanish": "Nos vemos en...", "japanese": "...で会いましょう" },
          { "spanish": "¿Podemos intercambiar contactos?", "japanese": "連絡先を交換できますか？" },
          { "spanish": "Mi correo electrónico es...", "japanese": "私のメールアドレスは...です" },
          { "spanish": "Estoy en Instagram/Facebook", "japanese": "Instagram/Facebookをやっています" },
          { "spanish": "Ha sido un placer conocerte", "japanese": "あなたに会えて良かったです" },
          { "spanish": "Espero verte de nuevo", "japanese": "またお会いできることを願っています" },
          { "spanish": "¡Qué alegría verte otra vez!", "japanese": "また会えて嬉しいです！" },
          { "spanish": "¿Cómo ha ido tu Camino?", "japanese": "巡礼はどうでしたか？" },
          { "spanish": "Te echaré de menos", "japanese": "あなたがいなくて寂しくなります" }
        ]
      },
      {
        "type": "conversation",
        "title": "別れと再会の会話",
        "dialogue": [
          { "speaker": "Peregrino japonés", "sentence": "Mañana saldré muy temprano porque quiero llegar a Arzúa antes del mediodía.", "pronunciation": "ペレグリノ ハポネス: マニャナ サルドレ ムイ テンプラノ ポルケ キエロ ジェガール ア アルスーア アンテス デル メディオディア。（明日は早く出発します。正午前にアルスーアに到着したいからです。）" },
          { "speaker": "Otro peregrino", "sentence": "Entiendo. Yo iré más despacio. ¿Podemos intercambiar contactos? Me gustaría saber cómo termina tu Camino.", "pronunciation": "オトロ ペレグリノ: エンティエンド。ヨ イレ マス デスパシオ。ポデモス インテルカンビアール コンタクトス？メ グスタリア サベール コモ テルミナ トゥ カミーノ。（わかりました。私はもっとゆっくり行きます。連絡先を交換できますか？あなたの巡礼がどう終わるか知りたいです。）" },
          { "speaker": "Peregrino japonés", "sentence": "Claro. Mi correo es [correo@ejemplo.com]. También estoy en Instagram como @peregrino_japones.", "pronunciation": "ペレグリノ ハポネス: クラロ。ミ コレオ エス [correo@ejemplo.com]。タンビエン エストイ エン インスタグラム コモ @peregrino_japones。（もちろん。私のメールは[correo@ejemplo.com]です。Instagramもやっていて、@peregrino_japonesです。）" },
          { "speaker": "Otro peregrino", "sentence": "Perfecto, te agregaré. Ha sido un placer conocerte. Espero que nos veamos en Santiago.", "pronunciation": "オトロ ペレグリノ: ペルフェクト、テ アグレガレ。ア シド ウン プラセール コノセルテ。エスペロ ケ ノス ベアモス エン サンティアゴ。（完璧です、追加します。あなたに会えて良かったです。サンティアゴでまた会えることを願っています。）" },
          { "speaker": "Peregrino japonés", "sentence": "Seguro que sí. ¡Buen Camino y hasta Santiago!", "pronunciation": "ペレグリノ ハポネス: セグロ ケ シ。ブエン カミーノ イ アスタ サンティアゴ！（きっとそうなるでしょう。良い巡礼を、サンティアゴで！）" }
        ],
        "explanation": [
          "Saldré muy temprano: 「早く出発します」という表現。未来形を使っています。",
          "Porque quiero [動詞の原形]: 「〜したいからです」という表現。",
          "Antes del mediodía: 「正午前に」という表現。",
          "Yo iré más despacio: 「私はもっとゆっくり行きます」という表現。未来形を使っています。",
          "¿Podemos intercambiar contactos?: 「連絡先を交換できますか？」という質問。",
          "Me gustaría saber [疑問詞] [動詞の現在形]: 「〜を知りたいです」という表現。",
          "Mi correo es [メールアドレス]: 「私のメールは[メールアドレス]です」という表現。",
          "También estoy en [SNS]: 「[SNS]もやっています」という表現。",
          "Te agregaré: 「追加します」という表現。未来形を使っています。",
          "Ha sido un placer conocerte: 「あなたに会えて良かったです」という表現。",
          "Espero que nos veamos en [場所]: 「[場所]でまた会えることを願っています」という表現。",
          "Seguro que sí: 「きっとそうなるでしょう」という表現。",
          "¡Buen Camino y hasta [場所]!: 「良い巡礼を、[場所]で！」という別れの挨拶。"
        ]
      },
      {
        "type": "tip",
        "content": "<strong>巡礼者へのアドバイス:</strong> 巡礼路で出会った人々との絆は、巡礼体験の大切な一部です。連絡先を交換することで、巡礼後も友情を続けることができます。また、巡礼路では「追い越し、追い抜かれ」が頻繁に起こります。自分のペースで歩きながらも、再会を楽しみにする気持ちを持つことで、巡礼体験がより豊かになるでしょう。"
      }
    ]
  },
  {
  id: 12,
  title: "レッスン 12: 巡礼の完了と振り返りの表現",
  description: "サンティアゴ巡礼のための日本語で学ぶスペイン語",
  filename: "スペイン語レッスン１２巡礼の完了と振り返り.html",
  conversationCount: 4,
    "introduction": "このレッスンでは、サンティアゴ・デ・コンポステーラに到着した後に役立つスペイン語表現を学びます。巡礼証明書（コンポステーラ）の受け取り方、巡礼の感想を共有する表現、帰国の準備に関する会話など、巡礼の締めくくりに必要な表現を身につけましょう。",
    "mainTip": "サンティアゴ・デ・コンポステーラへの到着は、巡礼の旅の大きな達成感をもたらします。しかし、それは終わりではなく、新たな始まりでもあります。巡礼を通じて得た経験や気づきを振り返り、他の巡礼者と共有することで、巡礼の意味がより深まります。このレッスンで学ぶ表現を使って、巡礼の旅を意義深く締めくくりましょう。",
    "sections": [
      {
        "type": "vocabulary",
        "title": "1. サンティアゴ到着と巡礼証明書",
        "items": [
          { "spanish": "¡Lo he conseguido!", "japanese": "やり遂げました！" },
          { "spanish": "La Oficina del Peregrino", "japanese": "巡礼者事務所", "context": "巡礼証明書を発行する場所" },
          { "spanish": "La Compostela", "japanese": "コンポステーラ", "context": "巡礼証明書" },
          { "spanish": "La credencial / El pasaporte del peregrino", "japanese": "クレデンシャル / 巡礼者パスポート" },
          { "spanish": "Los sellos", "japanese": "スタンプ" },
          { "spanish": "El certificado de distancia", "japanese": "距離証明書" },
          { "spanish": "La Misa del Peregrino", "japanese": "巡礼者ミサ" },
          { "spanish": "El Botafumeiro", "japanese": "ボタフメイロ", "context": "大聖堂の巨大な香炉" },
          { "spanish": "Abrazar al Apóstol", "japanese": "使徒を抱きしめる", "context": "大聖堂での伝統的な行為" },
          { "spanish": "La tumba del Apóstol", "japanese": "使徒の墓" }
        ]
      },
      {
        "type": "tip",
        "content": "<strong>巡礼者へのアドバイス:</strong> 巡礼者事務所は混雑することが多いので、早めに訪れることをお勧めします。コンポステーラを受け取るには、少なくとも最後の100kmを歩いたことを証明するスタンプが必要です。また、巡礼の動機（宗教的、文化的、スポーツ的）によって証明書の種類が異なります。宗教的または文化的な理由で巡礼した場合は伝統的なラテン語のコンポステーラが発行されます。"
      },
      {
        "type": "conversation",
        "title": "巡礼者事務所での会話",
        "dialogue": [
          { "speaker": "Peregrino japonés", "sentence": "Buenos días. He completado el Camino y quisiera recibir la Compostela.", "pronunciation": "ペレグリノ ハポネス: ブエノス ディアス。エ コンプレタド エル カミーノ イ キシエラ レシビール ラ コンポステラ。（おはようございます。巡礼を完了し、コンポステーラを受け取りたいです。）" },
          { "speaker": "Oficina del Peregrino", "sentence": "¿Me puede mostrar su credencial con los sellos, por favor?", "pronunciation": "オフィシナ デル ペレグリノ: メ プエデ モストラール ス クレデンシアル コン ロス セジョス、ポル ファボール？（スタンプ付きのクレデンシャルを見せていただけますか？）" },
          { "speaker": "Peregrino japonés", "sentence": "Sí, aquí está. Empecé en Sarria y he recogido sellos en todos los pueblos.", "pronunciation": "ペレグリノ ハポネス: シ、アキ エスタ。エンペセ エン サリア イ エ レコヒド セジョス エン トドス ロス プエブロス。（はい、ここです。サリアから始めて、すべての町でスタンプを集めました。）" },
          { "speaker": "Oficina del Peregrino", "sentence": "Perfecto. ¿Cuál fue el motivo de su peregrinación: religioso, espiritual o cultural?", "pronunciation": "オフィシナ デル ペレグリノ: ペルフェクト。クアル フエ エル モティボ デ ス ペレグリナシオン: レリヒオソ、エスピリトゥアル オ クルトゥラル？（完璧です。あなたの巡礼の動機は何でしたか：宗教的、精神的、または文化的ですか？）" },
          { "speaker": "Peregrino japonés", "sentence": "Cultural y espiritual. Me interesa la historia del Camino y también quería tiempo para reflexionar.", "pronunciation": "ペレグリノ ハポネス: クルトゥラル イ エスピリトゥアル。メ インテレサ ラ イストリア デル カミーノ イ タンビエン ケリア ティエンポ パラ レフレクシオナール。（文化的かつ精神的です。巡礼路の歴史に興味があり、また考える時間も欲しかったです。）" },
          { "speaker": "Oficina del Peregrino", "sentence": "Muy bien. ¿Podría completar este formulario con sus datos personales? También necesito su pasaporte para verificar su identidad.", "pronunciation": "オフィシナ デル ペレグリノ: ムイ ビエン。ポドリア コンプレタール エステ フォルムラリオ コン スス ダトス ペルソナレス？タンビエン ネセシト ス パサポルテ パラ ベリフィカール ス イデンティダ。（とても良いです。この用紙に個人情報を記入していただけますか？また、身元確認のためにパスポートも必要です。）" }
        ],
        "explanation": [
          "He completado el Camino: 「巡礼を完了しました」という表現。現在完了形を使っています。",
          "Quisiera [動詞の原形]: 「〜したいです」という丁寧な表現。",
          "¿Me puede mostrar [名詞]?: 「[名詞]を見せていただけますか？」という丁寧な質問。",
          "Aquí está: 「ここです」という表現。物を渡すときに使います。",
          "Empecé en [場所]: 「[場所]から始めました」という表現。",
          "He recogido [名詞]: 「[名詞]を集めました」という表現。現在完了形を使っています。",
          "¿Cuál fue el motivo de [名詞]?: 「[名詞]の動機は何でしたか？」という質問。",
          "Me interesa [名詞]: 「[名詞]に興味があります」という表現。",
          "Quería [動詞の原形]: 「〜したかったです」という表現。過去形を使っています。",
          "¿Podría completar [名詞]?: 「[名詞]を記入していただけますか？」という丁寧な質問。",
          "Necesito [名詞] para [動詞の原形]: 「[動詞]するために[名詞]が必要です」という表現。"
        ]
      },
      {
        "type": "vocabulary",
        "title": "2. 巡礼の感想と振り返り",
        "items": [
          { "spanish": "La experiencia", "japanese": "経験" },
          { "spanish": "El momento más difícil", "japanese": "最も難しい瞬間" },
          { "spanish": "El momento más bonito", "japanese": "最も美しい瞬間" },
          { "spanish": "Lo que más me ha gustado", "japanese": "最も気に入ったこと" },
          { "spanish": "Lo que he aprendido", "japanese": "学んだこと" },
          { "spanish": "Ha cambiado mi perspectiva", "japanese": "私の視点が変わりました" },
          { "spanish": "Me ha hecho reflexionar sobre...", "japanese": "...について考えさせられました" },
          { "spanish": "Volvería a hacer el Camino", "japanese": "また巡礼をしたいです" },
          { "spanish": "Recomendaría esta experiencia", "japanese": "この経験をお勧めします" },
          { "spanish": "Ha sido transformador", "japanese": "変革的でした" }
        ]
      },
      {
        "type": "conversation",
        "title": "巡礼の感想を共有する会話",
        "dialogue": [
          { "speaker": "Peregrino japonés", "sentence": "¡Por fin en Santiago! ¿Qué te ha parecido la experiencia del Camino?", "pronunciation": "ペレグリノ ハポネス: ポル フィン エン サンティアゴ！ケ テ ア パレシド ラ エクスペリエンシア デル カミーノ？（ついにサンティアゴに！巡礼の経験はどうでしたか？）" },
          { "speaker": "Otro peregrino", "sentence": "Ha sido increíble, mucho mejor de lo que esperaba. El paisaje de Galicia es espectacular y la gente muy amable. ¿Y para ti?", "pronunciation": "オトロ ペレグリノ: ア シド インクレイブレ、ムチョ メホール デ ロ ケ エスペラバ。エル パイサヘ デ ガリシア エス エスペクタクラール イ ラ ヘンテ ムイ アマブレ。イ パラ ティ？（信じられないほど素晴らしかったです、期待していたよりずっと良かったです。ガリシアの風景は壮観で、人々はとても親切です。あなたはどうでしたか？）" },
          { "speaker": "Peregrino japonés", "sentence": "Para mí ha sido una experiencia transformadora. Al principio fue difícil físicamente, pero después empecé a disfrutar cada momento. Lo que más me ha gustado es la sensación de comunidad entre los peregrinos.", "pronunciation": "ペレグリノ ハポネス: パラ ミ ア シド ウナ エクスペリエンシア トランスフォルマドラ。アル プリンシピオ フエ ディフィシル フィシカメンテ、ペロ デスプエス エンペセ ア ディスフルタール カダ モメント。ロ ケ マス メ ア グスタド エス ラ センサシオン デ コムニダ エントレ ロス ペレグリノス。（私にとっては変革的な経験でした。最初は身体的に大変でしたが、その後は一瞬一瞬を楽しむようになりました。最も気に入ったのは、巡礼者間のコミュニティ感覚です。）" },
          { "speaker": "Otro peregrino", "sentence": "Sí, eso es especial. ¿Cuál fue tu momento más difícil en el Camino?", "pronunciation": "オトロ ペレグリノ: シ、エソ エス エスペシアル。クアル フエ トゥ モメント マス ディフィシル エン エル カミーノ？（はい、それは特別です。巡礼路での最も難しい瞬間は何でしたか？）" },
          { "speaker": "Peregrino japonés", "sentence": "Creo que la subida a O Cebreiro. Estaba lloviendo y el camino estaba muy embarrado. Pero cuando llegué arriba y vi las vistas, todo mereció la pena. ¿Y tú? ¿Qué has aprendido de esta experiencia?", "pronunciation": "ペレグリノ ハポネス: クレオ ケ ラ スビダ ア オ セブレイロ。エスタバ ジョビエンド イ エル カミーノ エスタバ ムイ エンバラド。ペロ クアンド ジェゲ アリバ イ ビ ラス ビスタス、トド メレシオ ラ ペナ。イ トゥ？ケ アス アプレンディド デ エスタ エクスペリエンシア？（オ・セブレイロへの上り坂だと思います。雨が降っていて、道はとても泥だらけでした。しかし、頂上に着いて景色を見たとき、すべては価値がありました。あなたは？この経験から何を学びましたか？）" },
          { "speaker": "Otro peregrino", "sentence": "He aprendido a vivir con menos, a apreciar las cosas simples como una ducha caliente o una buena comida. Y también he aprendido que somos más fuertes de lo que pensamos. Creo que esta experiencia ha cambiado mi perspectiva sobre muchas cosas.", "pronunciation": "オトロ ペレグリノ: エ アプレンディド ア ビビール コン メノス、ア アプレシアール ラス コサス シンプレス コモ ウナ ドゥチャ カリエンテ オ ウナ ブエナ コミダ。イ タンビエン エ アプレンディド ケ ソモス マス フエルテス デ ロ ケ ペンサモス。クレオ ケ エスタ エクスペリエンシア ア カンビアド ミ ペルスペクティバ ソブレ ムチャス コサス。（より少ないもので生きること、温かいシャワーや美味しい食事などのシンプルなものを大切にすることを学びました。また、私たちが思っているよりも強いということも学びました。この経験は多くのことに対する私の視点を変えたと思います。）" }
        ],
        "explanation": [
          "¡Por fin en [場所]!: 「ついに[場所]に！」という表現。",
          "¿Qué te ha parecido [名詞]?: 「[名詞]はどうでしたか？」という質問。",
          "Ha sido [形容詞]: 「[形容詞]でした」という表現。現在完了形を使っています。",
          "Mejor de lo que esperaba: 「期待していたよりも良かった」という表現。",
          "Para mí ha sido [名詞]: 「私にとっては[名詞]でした」という表現。",
          "Al principio: 「最初は」という表現。",
          "Empecé a [動詞の原形]: 「[動詞]し始めました」という表現。",
          "Lo que más me ha gustado es [名詞]: 「最も気に入ったのは[名詞]です」という表現。",
          "¿Cuál fue tu momento más [形容詞]?: 「あなたの最も[形容詞]な瞬間は何でしたか？」という質問。",
          "Creo que [名詞]: 「[名詞]だと思います」という表現。",
          "Cuando [動詞の過去形], todo mereció la pena: 「[動詞]したとき、すべては価値がありました」という表現。",
          "¿Qué has aprendido de [名詞]?: 「[名詞]から何を学びましたか？」という質問。",
          "He aprendido a [動詞の原形]: 「[動詞]することを学びました」という表現。",
          "Ha cambiado mi perspectiva sobre [名詞]: 「[名詞]に対する私の視点が変わりました」という表現。"
        ]
      },
      {
        "type": "vocabulary",
        "title": "3. 帰国準備と別れの挨拶",
        "items": [
          { "spanish": "El vuelo de regreso", "japanese": "帰りのフライト" },
          { "spanish": "La estación de autobuses/trenes", "japanese": "バス/電車駅" },
          { "spanish": "¿Cuándo vuelves a tu país?", "japanese": "いつ国に帰りますか？" },
          { "spanish": "Vuelvo mañana/pasado mañana", "japanese": "明日/明後日帰ります" },
          { "spanish": "Me quedaré unos días más", "japanese": "もう数日滞在します" },
          { "spanish": "Voy a visitar...", "japanese": "...を訪れる予定です" },
          { "spanish": "Ha sido un placer conocerte", "japanese": "あなたに会えて良かったです" },
          { "spanish": "Espero volver algún día", "japanese": "いつか戻ってくることを願っています" },
          { "spanish": "Mantengamos el contacto", "japanese": "連絡を取り合いましょう" },
          { "spanish": "Buen viaje de regreso", "japanese": "良い帰り道を" }
        ]
      },
      {
        "type": "tip",
        "content": "<strong>巡礼者へのアドバイス:</strong> サンティアゴからの交通手段は複数あります。サンティアゴ空港（Lavacolla）は市内から約10kmの場所にあり、ヨーロッパの主要都市への直行便があります。また、マドリッドやバルセロナへの長距離バスや電車もあります。帰国前に数日間、サンティアゴやガリシア地方の他の場所（フィステーラなど）を観光するのもおすすめです。"
      },
      {
        "type": "conversation",
        "title": "帰国準備と別れの会話",
        "dialogue": [
          { "speaker": "Peregrino japonés", "sentence": "¿Cuándo vuelves a tu país?", "pronunciation": "ペレグリノ ハポネス: クアンド ブエルベス ア トゥ パイス？（いつ国に帰りますか？）" },
          { "speaker": "Otro peregrino", "sentence": "Tengo un vuelo pasado mañana desde Santiago a Madrid, y luego a Berlín. ¿Y tú?", "pronunciation": "オトロ ペレグリノ: テンゴ ウン ブエロ パサド マニャナ デスデ サンティアゴ ア マドリー、イ ルエゴ ア ベルリン。イ トゥ？（明後日、サンティアゴからマドリッド経由でベルリンへのフライトがあります。あなたは？）" },
          { "speaker": "Peregrino japonés", "sentence": "Me quedaré unos días más. Quiero visitar Finisterre y luego voy a Barcelona antes de volver a Japón.", "pronunciation": "ペレグリノ ハポネス: メ ケダレ ウノス ディアス マス。キエロ ビシタール フィニステレ イ ルエゴ ボイ ア バルセロナ アンテス デ ボルベール ア ハポン。（もう数日滞在します。フィニステーレを訪れて、それから日本に帰る前にバルセロナに行く予定です。）" },
          { "speaker": "Otro peregrino", "sentence": "Buena idea. Finisterre es precioso, especialmente la puesta de sol. ¿Cómo vas a ir hasta allí?", "pronunciation": "オトロ ペレグリノ: ブエナ イデア。フィニステレ エス プレシオソ、エスペシアルメンテ ラ プエスタ デ ソル。コモ バス ア イール アスタ アジ？（良いアイデアです。フィニステーレは美しいです、特に夕日が。そこまでどうやって行きますか？）" },
          { "speaker": "Peregrino japonés", "sentence": "Hay un autobús directo desde Santiago. Lo tomaré mañana por la mañana.", "pronunciation": "ペレグリノ ハポネス: アイ ウン アウトブス ディレクト デスデ サンティアゴ。ロ トマレ マニャナ ポル ラ マニャナ。（サンティアゴからの直行バスがあります。明日の朝それに乗ります。）" },
          { "speaker": "Otro peregrino", "sentence": "Bueno, entonces supongo que es una despedida. Ha sido un placer conocerte y compartir parte del Camino contigo.", "pronunciation": "オトロ ペレグリノ: ブエノ、エントンセス スポンゴ ケ エス ウナ デスペディダ。ア シド ウン プラセール コノセルテ イ コンパルティール パルテ デル カミノ コンティゴ。（では、これはお別れですね。あなたに会えて、巡礼の一部を共有できて良かったです。）" },
          { "speaker": "Peregrino japonés", "sentence": "Igualmente. Espero volver a hacer el Camino algún día, quizás por otra ruta. Mantengamos el contacto.", "pronunciation": "ペレグリノ ハポネス: イグアルメンテ。エスペロ ボルベール ア アセール エル カミノ アルグン ディア、キサス ポル オトラ ルタ。マンテンガモス エル コンタクト。（同じく。いつか、おそらく別のルートで、また巡礼をしたいと思います。連絡を取り合いましょう。）" },
          { "speaker": "Otro peregrino", "sentence": "Por supuesto. Buen viaje y ¡hasta la próxima!", "pronunciation": "オトロ ペレグリノ: ポル スプエスト。ブエン ビアヘ イ アスタ ラ プロクシマ！（もちろんです。良い旅を、また次回まで！）" }
        ],
        "explanation": [
          "¿Cuándo vuelves a [場所]?: 「いつ[場所]に帰りますか？」という質問。",
          "Tengo un vuelo [時間表現]: 「[時間表現]にフライトがあります」という表現。",
          "Desde [場所] a [場所]: 「[場所]から[場所]へ」という表現。",
          "Me quedaré [期間]: 「[期間]滞在します」という表現。未来形を使っています。",
          "Quiero visitar [場所]: 「[場所]を訪れたいです」という表現。",
          "Antes de volver a [場所]: 「[場所]に帰る前に」という表現。",
          "Buena idea: 「良いアイデアです」という表現。",
          "¿Cómo vas a ir hasta allí?: 「そこまでどうやって行きますか？」という質問。",
          "Hay un [交通手段] directo: 「直行の[交通手段]があります」という表現。",
          "Lo tomaré [時間表現]: 「[時間表現]にそれに乗ります」という表現。未来形を使っています。",
          "Es una despedida: 「これはお別れです」という表現。",
          "Ha sido un placer conocerte: 「あなたに会えて良かったです」という表現。",
          "Espero volver a hacer [名詞] algún día: 「いつか再び[名詞]をすることを願っています」という表現。",
          "Mantengamos el contacto: 「連絡を取り合いましょう」という表現。命令形を使っています。",
          "Buen viaje: 「良い旅を」という表現。",
          "¡Hasta la próxima!: 「また次回まで！」という別れの挨拶。"
        ]
      },
      {
        "type": "vocabulary",
        "title": "4. 巡礼後の生活と思い出の共有",
        "items": [
          { "spanish": "Los recuerdos", "japanese": "思い出" },
          { "spanish": "Las fotos / Las imágenes", "japanese": "写真 / 画像" },
          { "spanish": "Compartir experiencias", "japanese": "経験を共有する" },
          { "spanish": "Escribir un diario / blog", "japanese": "日記/ブログを書く" },
          { "spanish": "Recomendar el Camino", "japanese": "巡礼を勧める" },
          { "spanish": "Dar consejos", "japanese": "アドバイスを与える" },
          { "spanish": "La vida después del Camino", "japanese": "巡礼後の生活" },
          { "spanish": "Aplicar lo aprendido", "japanese": "学んだことを活かす" },
          { "spanish": "Extrañar el Camino", "japanese": "巡礼路を懐かしむ" },
          { "spanish": "Planear otro Camino", "japanese": "別の巡礼を計画する" }
        ]
      },
      {
        "type": "conversation",
        "title": "巡礼後の思い出を共有する会話",
        "dialogue": [
          { "speaker": "Peregrino japonés", "sentence": "Cuando vuelva a Japón, quiero compartir mi experiencia del Camino con mis amigos y familia. ¿Tú qué harás con tus recuerdos?", "pronunciation": "ペレグリノ ハポネス: クアンド ブエルバ ア ハポン、キエロ コンパルティール ミ エクスペリエンシア デル カミノ コン ミス アミゴス イ ファミリア。トゥ ケ アラス コン トゥス レクエルドス？（日本に帰ったら、友人や家族と巡礼の経験を共有したいです。あなたは思い出をどうしますか？）" },
          { "speaker": "Otro peregrino", "sentence": "Estoy escribiendo un diario durante todo el Camino. Cuando regrese, quiero organizarlo con fotos y quizás publicarlo en un blog. También pienso dar charlas en mi ciudad para animar a otros a hacer el Camino.", "pronunciation": "オトロ ペレグリノ: エストイ エスクリビエンド ウン ディアリオ ドゥランテ トド エル カミノ。クアンド レグレセ、キエロ オルガニサルロ コン フォトス イ キサス プブリカルロ エン ウン ブログ。タンビエン ピエンソ ダール チャルラス エン ミ シウダ パラ アニマール ア オトロス ア アセール エル カミノ。（巡礼の間ずっと日記を書いています。帰ったら、写真と一緒に整理して、おそらくブログに公開したいと思います。また、他の人が巡礼をするよう励ますために、私の街で講演をすることも考えています。）" },
          { "speaker": "Peregrino japonés", "sentence": "Eso suena muy bien. Yo he tomado muchas fotos y también he grabado algunos vídeos cortos. Creo que la experiencia del Camino cambiará algo en mi vida diaria.", "pronunciation": "ペレグリノ ハポネス: エソ スエナ ムイ ビエン。ヨ エ トマド ムチャス フォトス イ タンビエン エ グラバド アルグノス ビデオス コルトス。クレオ ケ ラ エクスペリエンシア デル カミノ カンビアラ アルゴ エン ミ ビダ ディアリア。（それはとても良いですね。私はたくさんの写真を撮り、いくつかの短いビデオも録画しました。巡礼の経験が日常生活の何かを変えると思います。）" },
          { "speaker": "Otro peregrino", "sentence": "Seguro que sí. Yo ya noto que valoro más las cosas simples y que tengo más paciencia. ¿Crees que volverás a hacer el Camino en el futuro?", "pronunciation": "オトロ ペレグリノ: セグロ ケ シ。ヨ ヤ ノト ケ バロロ マス ラス コサス シンプレス イ ケ テンゴ マス パシエンシア。クレエス ケ ボルベラス ア アセール エル カミノ エン エル フトゥロ？（きっとそうでしょう。私はすでに、シンプルなものをより大切にし、より忍耐強くなっていることに気づいています。将来また巡礼をすると思いますか？）" },
          { "speaker": "Peregrino japonés", "sentence": "Me gustaría mucho. Quizás el Camino del Norte o el Camino Portugués. Hay tantas rutas por descubrir... ¿Y qué consejos darías a alguien que quiere hacer el Camino por primera vez?", "pronunciation": "ペレグリノ ハポネス: メ グスタリア ムチョ。キサス エル カミノ デル ノルテ オ エル カミノ ポルトゥゲス。アイ タンタス ルタス ポル デスクブリール... イ ケ コンセホス ダリアス ア アルギエン ケ キエレ アセール エル カミノ ポル プリメラ ベス？（とても行きたいです。おそらく北の道やポルトガルの道を。発見すべきルートがたくさんあります...初めて巡礼をしたい人にどんなアドバイスをしますか？）" },
          { "speaker": "Otro peregrino", "sentence": "Les diría que no se preocupen demasiado por la preparación, que lleven lo mínimo necesario y que estén abiertos a la experiencia. El Camino te da lo que necesitas en cada momento. Y sobre todo, que disfruten del viaje, no solo del destino.", "pronunciation": "オトロ ペレグリノ: レス ディリア ケ ノ セ プレオクペン デマシアド ポル ラ プレパラシオン、ケ ジェベン ロ ミニモ ネセサリオ イ ケ エステン アビエルトス ア ラ エクスペリエンシア。エル カミノ テ ダ ロ ケ ネセシタス エン カダ モメント。イ ソブレ トド、ケ ディスフルテン デル ビアヘ、ノ ソロ デル デスティノ。（準備について心配しすぎないこと、必要最小限のものを持っていくこと、そして経験に対してオープンであることを伝えるでしょう。巡礼路はそれぞれの瞬間に必要なものを与えてくれます。そして何よりも、目的地だけでなく、旅を楽しむことです。）" }
        ],
        "explanation": [
          "Cuando vuelva a [場所]: 「[場所]に帰ったら」という表現。接続法を使っています。",
          "Quiero compartir [名詞] con [人]: 「[人]と[名詞]を共有したいです」という表現。",
          "¿Qué harás con [名詞]?: 「[名詞]をどうしますか？」という質問。未来形を使っています。",
          "Estoy escribiendo [名詞]: 「[名詞]を書いています」という表現。現在進行形を使っています。",
          "Durante todo el Camino: 「巡礼の間ずっと」という表現。",
          "Cuando regrese: 「帰ったら」という表現。接続法を使っています。",
          "Pienso [動詞の原形]: 「[動詞]することを考えています」という表現。",
          "Para animar a otros a [動詞の原形]: 「他の人が[動詞]するよう励ますために」という表現。",
          "Eso suena muy bien: 「それはとても良いですね」という表現。",
          "He tomado muchas fotos: 「たくさんの写真を撮りました」という表現。現在完了形を使っています。",
          "Creo que [名詞] cambiará [名詞]: 「[名詞]が[名詞]を変えると思います」という表現。",
          "Ya noto que [動詞の現在形]: 「すでに[動詞]していることに気づいています」という表現。",
          "¿Crees que volverás a hacer [名詞]?: 「また[名詞]をすると思いますか？」という質問。",
          "Me gustaría mucho: 「とても行きたいです」という表現。",
          "Hay tantas [名詞] por [動詞の原形]: 「[動詞]すべき[名詞]がたくさんあります」という表現。",
          "¿Qué consejos darías a alguien que quiere [動詞の原形]?: 「[動詞]したい人にどんなアドバイスをしますか？」という質問。",
          "Les diría que [接続法]: 「彼らに[接続法]と伝えるでしょう」という表現。",
          "El Camino te da lo que necesitas: 「巡礼路はあなたが必要とするものを与えてくれます」という表現。",
          "Sobre todo: 「何よりも」という表現。",
          "Que disfruten del viaje, no solo del destino: 「目的地だけでなく、旅を楽しむこと」という表現。"
        ]
      },
      {
        "type": "tip",
        "content": "<strong>巡礼者へのアドバイス:</strong> 巡礼後の「巡礼ブルー」（巡礼が終わった後の喪失感や寂しさ）を経験する人も多いです。巡礼中の写真や日記を整理したり、巡礼で出会った人々と連絡を取り合ったり、巡礼で学んだことを日常生活に取り入れたりすることで、巡礼の精神を保ち続けることができます。また、地元の巡礼者の会に参加したり、将来の巡礼を計画したりすることも、巡礼との繋がりを維持する良い方法です。"
      }
    ]
  },

// Pega este código en lugar del objeto con id: 13 en tu archivo lessons.ts

{
    "id": 13,
    "title": "レッスン 13: 買い物と交渉の表現",
    "description": "サンティアゴ巡礼のための日本語で学ぶスペイン語",
    "filename": "スペイン語レッスン１３買い物と交渉.html",
    "conversationCount": 3,
    "introduction": "このレッスンでは、巡礼路での買い物や市場での交渉に役立つスペイン語表現を学びます。お土産の購入、地元の市場での食材の買い物、価格交渉など、旅行中の買い物シーンで使える実用的な表現を身につけましょう。",
    "mainTip": "スペインの市場や小さな店では、地元の人々との交流が旅の楽しみの一つになります。基本的な買い物フレーズを知っておくことで、より豊かな体験ができるでしょう。また、巡礼路の小さな村では、英語が通じないことも多いため、スペイン語での買い物表現は特に役立ちます。",
    "sections": [
      {
        "type": "vocabulary",
        "title": "1. 基本的な買い物表現",
        "items": [
          { "spanish": "¿Cuánto cuesta esto?", "japanese": "これはいくらですか？" },
          { "spanish": "¿Tiene...?", "japanese": "〜はありますか？" },
          { "spanish": "Me gustaría comprar...", "japanese": "〜を買いたいです" },
          { "spanish": "¿Acepta tarjeta de crédito?", "japanese": "クレジットカードは使えますか？" },
          { "spanish": "¿Tiene cambio de...?", "japanese": "〜のおつりはありますか？" },
          { "spanish": "¿Me puede dar un recibo?", "japanese": "レシートをいただけますか？" },
          { "spanish": "¿Está en oferta?", "japanese": "セール中ですか？" },
          { "spanish": "¿Puedo probarlo?", "japanese": "試着/試用できますか？" },
          { "spanish": "Solo estoy mirando", "japanese": "見ているだけです" },
          { "spanish": "Me lo/la llevo", "japanese": "これを買います" }
        ]
      },
      {
        "type": "tip",
        "content": "<strong>巡礼者へのアドバイス:</strong> スペインの小さな町では、特に午後2時から5時頃までは多くの店が昼休みで閉まっていることがあります。また、日曜日は多くの店が休業するため、必要なものは前もって購入しておくことをお勧めします。巡礼路の小さな村では現金のみの店も多いので、十分な現金を持っておくと安心です。"
      },
      {
        "type": "conversation",
        "title": "お土産店での会話",
        "dialogue": [
          { "speaker": "Peregrino japonés", "sentence": "Buenos días. ¿Tiene recuerdos del Camino de Santiago?", "pronunciation": "ペレグリノ ハポネス: ブエノス ディアス。ティエネ レクエルドス デル カミーノ デ サンティアゴ？（おはようございます。サンティアゴ巡礼のお土産はありますか？）" },
          { "speaker": "Vendedor", "sentence": "Buenos días. Sí, tenemos muchos. Hay conchas, camisetas, llaveros y figuras del Apóstol. ¿Qué le interesa?", "pronunciation": "ベンデドール: ブエノス ディアス。シ、テネモス ムーチョス。アイ コンチャス、カミセタス、ジャベロス イ フィグラス デル アポストル。ケ レ インテレサ？（おはようございます。はい、たくさんあります。貝殻、Tシャツ、キーホルダー、使徒の像などがあります。何にご興味がありますか？）" },
          { "speaker": "Peregrino japonés", "sentence": "Me gustaría comprar una concha y quizás un llavero. ¿Cuánto cuesta esta concha?", "pronunciation": "ペレグリノ ハポネス: メ グスタリア コンプラール ウナ コンチャ イ キサス ウン ジャベロ。クアント クエスタ エスタ コンチャ？（貝殻と、できればキーホルダーを買いたいです。この貝殻はいくらですか？）" },
          { "speaker": "Vendedor", "sentence": "Esta concha cuesta 5 euros. Los llaveros están a 3 euros cada uno, pero si compra dos, le puedo hacer un precio especial de 5 euros por los dos.", "pronunciation": "ベンデドール: エスタ コンチャ クエスタ シンコ エウロス。ロス ジャベロス エスタン ア トレス エウロス カダ ウノ、ペロ シ コンプラ ドス、レ プエド アセール ウン プレシオ エスペシアル デ シンコ エウロス ポル ロス ドス。（この貝殻は5ユーロです。キーホルダーは1つ3ユーロですが、2つ買うなら、2つで5ユーロの特別価格にできます。）" },
          { "speaker": "Peregrino japonés", "sentence": "Perfecto, me llevaré la concha y dos llaveros entonces. ¿Acepta tarjeta de crédito o necesito efectivo?", "pronunciation": "ペレグリノ ハポネス: ペルフェクト、メ ジェバレ ラ コンチャ イ ドス ジャベロス エントンセス。アセプタ タルヘタ デ クレディト オ ネセシト エフェクティボ？（完璧です、では貝殻と2つのキーホルダーを買います。クレジットカードは使えますか、それとも現金が必要ですか？）" },
          { "speaker": "Vendedor", "sentence": "Para cantidades pequeñas preferimos efectivo, pero también aceptamos tarjeta. Son 10 euros en total.", "pronunciation": "ベンデドール: パラ カンティダデス ペケーニャス プレフェリモス エフェクティボ、ペロ タンビエン アセプタモス タルヘタ。ソン ディエス エウロス エン トタル。（少額の場合は現金が望ましいですが、カードも受け付けています。合計10ユーロです。）" },
          { "speaker": "Peregrino japonés", "sentence": "Aquí tiene 10 euros. ¿Me puede dar un recibo, por favor?", "pronunciation": "ペレグリノ ハポネス: アキ ティエネ ディエス エウロス。メ プエデ ダル ウン レシーボ、ポル ファボール？（はい、10ユーロです。レシートをいただけますか？）" },
          { "speaker": "Vendedor", "sentence": "Claro, aquí tiene su recibo y sus compras. Gracias y buen Camino.", "pronunciation": "ベンデドール: クラロ、アキ ティエネ ス レシーボ イ スス コンプラス。グラシアス イ ブエン カミノ。（もちろん、こちらがレシートとお買い物です。ありがとうございます、良い巡礼を。）" }
        ],
        "explanation": [
          "¿Tiene [名詞]?: 「[名詞]はありますか？」という質問。",
          "Me gustaría comprar [名詞]: 「[名詞]を買いたいです」という丁寧な表現。",
          "¿Cuánto cuesta [名詞]?: 「[名詞]はいくらですか？」という質問。",
          "[名詞] cuesta [金額]: 「[名詞]は[金額]です」という表現。",
          "[名詞] están a [金額] cada uno: 「[名詞]は1つ[金額]です」という表現。",
          "Si compra [数], le puedo hacer un precio especial: 「[数]買うなら、特別価格にできます」という表現。",
          "Me llevaré [名詞]: 「[名詞]を買います」という表現。",
          "¿Acepta [支払い方法]?: 「[支払い方法]は使えますか？」という質問。",
          "Son [金額] en total: 「合計[金額]です」という表現。",
          "Aquí tiene [名詞]: 「はい、[名詞]です」という表現。物を渡すときに使います。",
          "¿Me puede dar [名詞]?: 「[名詞]をいただけますか？」という丁寧な質問。",
          "Buen Camino: 「良い巡礼を」という巡礼者への挨拶。"
        ]
      },
      {
        "type": "vocabulary",
        "title": "2. 市場での食材の買い物",
        "items": [
          { "spanish": "El mercado", "japanese": "市場" },
          { "spanish": "El puesto", "japanese": "屋台、売店" },
          { "spanish": "Fruta fresca", "japanese": "新鮮な果物" },
          { "spanish": "Verduras", "japanese": "野菜" },
          { "spanish": "Queso", "japanese": "チーズ" },
          { "spanish": "Embutidos", "japanese": "ハム・ソーセージ類" },
          { "spanish": "Pan", "japanese": "パン" },
          { "spanish": "Un kilo / Medio kilo", "japanese": "1キロ / 半キロ" },
          { "spanish": "Una docena", "japanese": "1ダース" },
          { "spanish": "Productos locales", "japanese": "地元の産物" }
        ]
      },
      {
        "type": "conversation",
        "title": "地元の市場での会話",
        "dialogue": [
          { "speaker": "Peregrino japonés", "sentence": "Buenos días. Quisiera comprar algo de fruta para el Camino. ¿Qué me recomienda?", "pronunciation": "ペレグリノ ハポネス: ブエノス ディアス。キシエラ コンプラール アルゴ デ フルタ パラ エル カミーノ。ケ メ レコメンダ？（おはようございます。巡礼のために果物を買いたいです。何かおすすめはありますか？）" },
          { "speaker": "Vendedor del mercado", "sentence": "Buenos días, peregrino. Las manzanas y los plátanos son perfectos para el Camino porque aguantan bien en la mochila. También tenemos fresas locales muy dulces.", "pronunciation": "ベンデドール デル メルカド: ブエノス ディアス、ペレグリノ。ラス マンサナス イ ロス プラタノス ソン ペルフェクトス パラ エル カミーノ ポルケ アグアンタン ビエン エン ラ モチーラ。タンビエン テネモス フレサス ロカレス ムイ ドゥルセス。（おはようございます、巡礼者さん。リンゴとバナナはバックパックの中でも持ちがよいので、巡礼には最適です。また、とても甘い地元のイチゴもあります。）" },
          { "speaker": "Peregrino japonés", "sentence": "Me llevaré dos manzanas y un plátano. ¿Cuánto es?", "pronunciation": "ペレグリノ ハポネス: メ ジェバレ ドス マンサナス イ ウン プラタノ。クアント エス？（リンゴ2つとバナナ1本を買います。いくらですか？）" },
          { "speaker": "Vendedor del mercado", "sentence": "Las manzanas están a 50 céntimos cada una y el plátano a 30 céntimos. En total son 1 euro y 30 céntimos.", "pronunciation": "ベンデドール デル メルカド: ラス マンサナス エスタン ア シンクエンタ センティモス カダ ウナ イ エル プラタノ ア トレインタ センティモス。エン トタル ソン ウン エウロ イ トレインタ センティモス。（リンゴは1つ50セント、バナナは30セントです。合計1ユーロ30セントです。）" },
          { "speaker": "Peregrino japonés", "sentence": "Perfecto. ¿También vende queso? Me gustaría probar algún queso local.", "pronunciation": "ペレグリノ ハポネス: ペルフェクト。タンビエン ベンデ ケソ？メ グスタリア プロバール アルグン ケソ ロカル。（完璧です。チーズも売っていますか？地元のチーズを試してみたいです。）" },
          { "speaker": "Vendedor del mercado", "sentence": "Yo no, pero en el puesto de enfrente tienen quesos artesanales muy buenos. Le recomiendo el queso de Arzúa, es típico de Galicia.", "pronunciation": "ベンデドール デル メルカド: ヨ ノ、ペロ エン エル プエスト デ エンフレンテ ティエネン ケソス アルテサナレス ムイ ブエノス。レ レコメンド エル ケソ デ アルスア、エス ティピコ デ ガリシア。（私は扱っていませんが、向かいの店に非常に良い手作りチーズがあります。アルスーアチーズをお勧めします。ガリシア地方の名物です。）" },
          { "speaker": "Peregrino japonés", "sentence": "Muchas gracias por la información. Aquí tiene el dinero por la fruta.", "pronunciation": "ペレグリノ ハポネス: ムチャス グラシアス ポル ラ インフォルマシオン。アキ ティエネ エル ディネロ ポル ラ フルタ。（情報をありがとうございます。果物の代金です。）" },
          { "speaker": "Vendedor del mercado", "sentence": "Gracias a usted. ¡Buen Camino!", "pronunciation": "ベンデドール デル メルカド: グラシアス ア ウステド。ブエン カミノ！（こちらこそありがとうございます。良い巡礼を！）" }
        ],
        "explanation": [
          "Quisiera comprar [名詞]: 「[名詞]を買いたいです」という丁寧な表現。",
          "¿Qué me recomienda?: 「何かおすすめはありますか？」という質問。",
          "[名詞] son perfectos para [名詞] porque [理由]: 「[名詞]は[理由]なので[名詞]に最適です」という表現。",
          "Me llevaré [数] [名詞]: 「[数][名詞]を買います」という表現。",
          "¿Cuánto es?: 「いくらですか？」という質問。",
          "[名詞] están a [金額] cada una/uno: 「[名詞]は1つ[金額]です」という表現。",
          "En total son [金額]: 「合計[金額]です」という表現。",
          "¿También vende [名詞]?: 「[名詞]も売っていますか？」という質問。",
          "Me gustaría probar [名詞]: 「[名詞]を試してみたいです」という表現。",
          "Le recomiendo [名詞]: 「[名詞]をお勧めします」という表現。",
          "Es típico de [地名]: 「[地名]の名物です」という表現。",
          "Gracias por [名詞]: 「[名詞]をありがとうございます」という表現。",
          "Aquí tiene [名詞]: 「はい、[名詞]です」という表現。物を渡すときに使います。"
        ]
      },
      {
        "type": "vocabulary",
        "title": "3. 価格交渉と特別リクエスト",
        "items": [
          { "spanish": "¿Me puede hacer un descuento?", "japanese": "値引きしていただけますか？" },
          { "spanish": "Es un poco caro", "japanese": "少し高いです" },
          { "spanish": "¿Cuál es su mejor precio?", "japanese": "最良の価格はいくらですか？" },
          { "spanish": "Si compro más, ¿me hace descuento?", "japanese": "もっと買えば、値引きしてもらえますか？" },
          { "spanish": "¿Tiene algo más barato?", "japanese": "もっと安いものはありますか？" },
          { "spanish": "¿Podría envolverlo para regalo?", "japanese": "ギフト包装していただけますか？" },
          { "spanish": "¿Tiene esto en otro color/tamaño?", "japanese": "これは他の色/サイズがありますか？" },
          { "spanish": "¿Puede enviarlo a mi país?", "japanese": "私の国に送っていただけますか？" },
          { "spanish": "Me lo voy a pensar", "japanese": "考えてみます" },
          { "spanish": "Volveré más tarde", "japanese": "後で戻ってきます" }
        ]
      },
      {
        "type": "tip",
        "content": "<strong>巡礼者へのアドバイス:</strong> スペインでは、特に観光地や市場では、適度な価格交渉は一般的です。ただし、スーパーマーケットやデパートなどの大型店では価格は固定されています。交渉する際は、常に礼儀正しく、笑顔で行うことが大切です。また、巡礼者であることを伝えると、特別な配慮をしてくれることもあります。"
      },
      {
        "type": "conversation",
        "title": "工芸品店での価格交渉",
        "dialogue": [
          { "speaker": "Peregrino japonés", "sentence": "Buenas tardes. Me gusta mucho esta figura de cerámica. ¿Cuánto cuesta?", "pronunciation": "ペレグリノ ハポネス: ブエナス タルデス。メ グスタ ムチョ エスタ フィグラ デ セラミカ。クアント クエスタ？（こんにちは。この陶器の置物がとても気に入りました。いくらですか？）" },
          { "speaker": "Vendedor de artesanía", "sentence": "Buenas tardes. Esta pieza es artesanal, hecha a mano por artistas locales. Cuesta 45 euros.", "pronunciation": "ベンデドール デ アルテサニア: ブエナス タルデス。エスタ ピエサ エス アルテサナル、エチャ ア マノ ポル アルティスタス ロカレス。クエスタ クアレンタ イ シンコ エウロス。（こんにちは。この作品は地元の職人による手作りの工芸品です。45ユーロです。）" },
          { "speaker": "Peregrino japonés", "sentence": "Es muy bonita, pero es un poco cara para mí. ¿Me puede hacer un descuento? Soy peregrino y tengo un presupuesto limitado.", "pronunciation": "ペレグリノ ハポネス: エス ムイ ボニタ、ペロ エス ウン ポコ カラ パラ ミ。メ プエデ アセール ウン デスクエント？ソイ ペレグリノ イ テンゴ ウン プレスプエスト リミタド。（とても素敵ですが、私には少し高いです。値引きしていただけますか？私は巡礼者で、予算が限られています。）" },
          { "speaker": "Vendedor de artesanía", "sentence": "Entiendo. Para los peregrinos podemos hacer un precio especial. ¿Qué le parece 38 euros?", "pronunciation": "ベンデドール デ アルテサニア: エンティエンド。パラ ロス ペレグリノス ポデモス アセール ウン プレシオ エスペシアル。ケ レ パレセ トレインタ イ オチョ エウロス？（わかりました。巡礼者の方には特別価格にできます。38ユーロはいかがでしょうか？）" },
          { "speaker": "Peregrino japonés", "sentence": "Gracias, pero sigue siendo un poco alto. ¿Cuál sería su mejor precio? También me interesan esos pequeños llaveros de cerámica.", "pronunciation": "ペレグリノ ハポネス: グラシアス、ペロ シゲ シエンド ウン ポコ アルト。クアル セリア ス メホル プレシオ？タンビエン メ インテレサン エソス ペケーニョス ジャベロス デ セラミカ。（ありがとうございます、でもまだ少し高いです。最良の価格はいくらですか？また、あの小さな陶器のキーホルダーにも興味があります。）" },
          { "speaker": "Vendedor de artesanía", "sentence": "Si compra la figura y dos llaveros, que cuestan 5 euros cada uno, le puedo dejar todo por 40 euros. Es mi mejor oferta.", "pronunciation": "ベンデドール デ アルテサニア: シ コンプラ ラ フィグラ イ ドス ジャベロス、ケ クエスタン シンコ エウロス カダ ウノ、レ プエド デハル トド ポル クアレンタ エウロス。エス ミ メホル オフェルタ。（置物と、1つ5ユーロのキーホルダーを2つ買うなら、全部で40ユーロにできます。これが最良の提案です。）" },
          { "speaker": "Peregrino japonés", "sentence": "De acuerdo, me parece justo. ¿Podría envolverlos para regalo? Son para mi familia en Japón.", "pronunciation": "ペレグリノ ハポネス: デ アクエルド、メ パレセ フスト。ポドリア エンボルベルロス パラ レガロ？ソン パラ ミ ファミリア エン ハポン。（わかりました、それは公平だと思います。ギフト包装していただけますか？日本の家族へのプレゼントです。）" },
          { "speaker": "Vendedor de artesanía", "sentence": "Por supuesto, sin problema. ¿Prefiere papel rojo o azul?", "pronunciation": "ベンデドール デ アルテサニア: ポル スプエスト、シン プロブレマ。プレフィエレ パペル ロホ オ アスル？（もちろん、問題ありません。赤い紙と青い紙、どちらがよろしいですか？）" },
          { "speaker": "Peregrino japonés", "sentence": "Azul, por favor. ¿Sabe si se puede enviar esto a Japón desde alguna oficina de correos cercana?", "pronunciation": "ペレグリノ ハポネス: アスル、ポル ファボール。サベ シ セ プエデ エンビアル エスト ア ハポン デスデ アルグナ オフィシナ デ コレオス セルカナ？（青でお願いします。近くの郵便局からこれを日本に送ることはできますか？）" },
          { "speaker": "Vendedor de artesanía", "sentence": "Sí, hay una oficina de correos a dos calles de aquí. Abren hasta las 2 de la tarde. También podemos enviarlo nosotros con un coste adicional si lo prefiere.", "pronunciation": "ベンデドール デ アルテサニア: シ、アイ ウナ オフィシナ デ コレオス ア ドス カジェス デ アキ。アブレン アスタ ラス ドス デ ラ タルデ。タンビエン ポデモス エンビアルロ ノソトロス コン ウン コステ アディシオナル シ ロ プレフィエレ。（はい、ここから2ブロック先に郵便局があります。午後2時まで開いています。ご希望であれば、追加料金で私たちが発送することもできます。）" },
          { "speaker": "Peregrino japonés", "sentence": "Gracias por la información. Iré yo mismo a la oficina de correos. Aquí tiene los 40 euros.", "pronunciation": "ペレグリノ ハポネス: グラシアス ポル ラ インフォルマシオン。イレ ヨ ミスモ ア ラ オフィシナ デ コレオス。アキ ティエネ ロス クアレンタ エウロス。（情報をありがとうございます。自分で郵便局に行きます。はい、40ユーロです。）" }
        ],
        "explanation": [
          "Me gusta mucho [名詞]: 「[名詞]がとても気に入りました」という表現。",
          "[名詞] es artesanal: 「[名詞]は手作りです」という表現。",
          "Es un poco cara/caro: 「少し高いです」という表現。",
          "¿Me puede hacer un descuento?: 「値引きしていただけますか？」という丁寧な質問。",
          "Tengo un presupuesto limitado: 「予算が限られています」という表現。",
          "Para [名詞] podemos hacer un precio especial: 「[名詞]には特別価格にできます」という表現。",
          "¿Qué le parece [金額]?: 「[金額]はいかがでしょうか？」という質問。",
          "Sigue siendo un poco alto: 「まだ少し高いです」という表現。",
          "¿Cuál sería su mejor precio?: 「最良の価格はいくらですか？」という質問。",
          "Si compra [名詞], le puedo dejar todo por [金額]: 「[名詞]を買うなら、全部で[金額]にできます」という表現。",
          "Es mi mejor oferta: 「これが最良の提案です」という表現。",
          "Me parece justo: 「それは公平だと思います」という表現。",
          "¿Podría [動詞の原形]?: 「[動詞]していただけますか？」という丁寧な質問。",
          "Son para [名詞]: 「[名詞]へのものです」という表現。",
          "¿Prefiere [名詞] o [名詞]?: 「[名詞]と[名詞]、どちらがよろしいですか？」という質問。",
          "¿Sabe si se puede [動詞の原形]?: 「[動詞]できるかご存知ですか？」という質問。",
          "Hay [名詞] a [場所]: 「[場所]に[名詞]があります」という表現。",
          "Con un coste adicional: 「追加料金で」という表現。",
          "Si lo prefiere: 「ご希望であれば」という表現。"
        ]
      },
      {
        "type": "exercise",
        "title": "練習問題",
        "introduction": "このレッスンには、単語マッチング、会話の穴埋め、状況別表現の3つの練習問題が含まれています。HTMLから直接内容を確認してください。",
        "questions": [
          "単語マッチング: El mercado, Cuánto cuesta, Descuento, Tarjeta de crédito, Recibo",
          "会話の穴埋め: Me gustaría, caro, descuento, Acepta, recibo",
          "状況別表現: お土産の価格を尋ねたい時, もっと安いものがあるか尋ねたい時, 複数買うと値引きがあるか尋ねたい時, ギフト包装をお願いしたい時, 後で戻ってくると伝えたい時"
        ]
      },
      {
        "type": "note",
        "content": "このレッスンでは、巡礼路での買い物や交渉に役立つスペイン語表現を学びました。基本的な買い物フレーズ、市場での食材の買い方、価格交渉の方法など、旅行中の様々な買い物シーンで使える実用的な表現を身につけました。これらの表現を使うことで、地元の人々とのコミュニケーションがより豊かになり、巡礼の旅がさらに充実したものになるでしょう。"
      }
    ]
  }
]