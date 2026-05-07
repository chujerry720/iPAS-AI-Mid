// 概念卡 — 用 5 分鐘故事方式講解,按章節循序漸進
// 每張卡:title, intuition(故事), keyTerms(核心字詞), confusions(易混淆), examPattern(出題模式), prerequisites(前置卡)

const CHAPTERS = [
  // 科目1 — 各章節有獨特色彩
  { id: "s1c0", subject: 1, order: 0, name: "AI 基礎概念", desc: "建立 AI / ML / DL 的階層感", color: "#6366f1" },
  { id: "s1c1", subject: 1, order: 1, name: "NLP 基礎", desc: "電腦怎麼把文字變成數字", color: "#06b6d4" },
  { id: "s1c2", subject: 1, order: 2, name: "Transformer 家族", desc: "現代 NLP 的核心引擎", color: "#3b82f6" },
  { id: "s1c3", subject: 1, order: 3, name: "電腦視覺(CV)", desc: "讓機器看懂影像", color: "#a855f7" },
  { id: "s1c4", subject: 1, order: 4, name: "生成式 AI", desc: "GAN / VAE / Diffusion 怎麼選", color: "#ec4899" },
  { id: "s1c5", subject: 1, order: 5, name: "模型評估", desc: "Precision / Recall / F1 不再混", color: "#f59e0b" },
  { id: "s1c6", subject: 1, order: 6, name: "MLOps 部署", desc: "上線後怎麼盯模型", color: "#f97316" },
  { id: "s1c7", subject: 1, order: 7, name: "AI 風險治理", desc: "送分題的常識題", color: "#ef4444" },
  // 科目2
  { id: "s2c0", subject: 2, order: 0, name: "敘述性統計", desc: "看一筆資料的樣貌", color: "#10b981" },
  { id: "s2c1", subject: 2, order: 1, name: "機率分佈", desc: "三大必懂分佈", color: "#14b8a6" },
  { id: "s2c2", subject: 2, order: 2, name: "假設檢定", desc: "從樣本說真話", color: "#0891b2" },
  { id: "s2c3", subject: 2, order: 3, name: "資料前處理", desc: "編碼、標準化、不平衡", color: "#84cc16" },
  { id: "s2c4", subject: 2, order: 4, name: "資料庫與架構", desc: "ACID、Graph、大數據管線", color: "#eab308" },
  { id: "s2c5", subject: 2, order: 5, name: "分析方法", desc: "PCA、相關性、異常偵測", color: "#d97706" },
  { id: "s2c6", subject: 2, order: 6, name: "隱私安全", desc: "同態加密、匿名化、PDPA", color: "#f43f5e" },
  { id: "s2c7", subject: 2, order: 7, name: "Python 必殺技", desc: "考試最穩的撿分區", color: "#8b5cf6" },
];

const CONCEPTS = [
  // ============ 科目1 Ch0: AI 基礎 ============
  {
    id: "s1c0-1",
    chapter: "s1c0",
    order: 1,
    title: "AI / ML / DL 階層",
    prerequisites: [],
    diagram: `<svg viewBox="0 0 320 200" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="AI、ML、DL 同心圓">
  <circle cx="160" cy="100" r="90" fill="#6366f1" fill-opacity=".10" stroke="#6366f1" stroke-width="1.5"/>
  <circle cx="160" cy="100" r="60" fill="#6366f1" fill-opacity=".15" stroke="#6366f1" stroke-width="1.5"/>
  <circle cx="160" cy="100" r="30" fill="#6366f1" fill-opacity=".25" stroke="#6366f1" stroke-width="1.5"/>
  <text x="160" y="22" text-anchor="middle" font-size="13" font-weight="600" fill="currentColor">AI</text>
  <text x="160" y="55" text-anchor="middle" font-size="12" font-weight="600" fill="currentColor">ML</text>
  <text x="160" y="105" text-anchor="middle" font-size="11" font-weight="600" fill="currentColor">DL</text>
  <text x="160" y="180" text-anchor="middle" font-size="10" fill="#6b7280">DL ⊂ ML ⊂ AI</text>
</svg>`,
    intuition: `想像三個同心圓:最外圈 **AI(人工智慧)** 是「讓機器表現得像有智慧」的所有方法,包含寫死規則的專家系統。中間圈 **ML(機器學習)** 是 AI 的子集,特色是「不寫死規則,讓電腦從資料學」。最內圈 **DL(深度學習)** 是 ML 的子集,用「神經網路堆疊很多層」來學複雜模式。

簡單說:DL 是 ML 的一種,ML 是 AI 的一種。BERT、GPT、ChatGPT 都是 DL,DL 是 ML,ML 是 AI。`,
    keyTerms: [
      { term: "AI", def: "讓機器表現智慧的所有技術(廣)" },
      { term: "ML", def: "從資料學規則,不寫死(中)" },
      { term: "DL", def: "用多層神經網路的 ML(窄)" },
      { term: "監督式學習", def: "資料有標籤,如分類、迴歸" },
      { term: "非監督式學習", def: "資料無標籤,如分群、降維" },
    ],
    confusions: [
      "AI ⊃ ML ⊃ DL,不是並列關係",
      "並非所有 AI 都用 ML(規則式系統也算 AI)",
    ],
    examPattern: "考試常用 AI、ML、DL 名詞但不直接考定義。重點是看到題目要能判斷它在問哪一層的問題。",
    relatedTopics: [],
    relatedQids: [],
  },

  // ============ 科目1 Ch1: NLP 基礎 ============
  {
    id: "s1c1-1",
    chapter: "s1c1",
    order: 1,
    title: "TF-IDF — 經典文字權重",
    emoji: "📄",
    prerequisites: [],
    intuition: `想像你要從一堆文章中找關鍵字。直覺是「在這篇出現很多次的詞 = 重要」(TF, Term Frequency)。但問題是「的」「是」每篇都很多,並不重要。

所以再加一層:「**只有少數文章出現** 的詞才重要」(IDF, Inverse Document Frequency)。把 TF × IDF 相乘,既高又獨特的詞會浮上來。

公式直覺:**IDF = log(總文章數 / 出現該詞的文章數)**。如果某詞在 1000 篇中只有 10 篇出現,IDF = log(100) = 2(高)。每篇都有的詞,log(1) = 0(無價值)。`,
    keyTerms: [
      { term: "TF", def: "詞在這篇出現的頻率" },
      { term: "IDF", def: "log(總篇數 / 含該詞篇數),稀有詞分數高" },
      { term: "TF-IDF", def: "TF × IDF,衡量詞的重要程度" },
    ],
    confusions: [
      "長文本 TF-IDF 容易失準:詞頻偏高,常見詞權重被過度放大",
      "TF-IDF 無法處理同義詞、上下文(Word2Vec 才能)",
    ],
    examPattern: "題目愛用「長篇文本」「無法準確反映關鍵詞」這類描述,正解通常是「長文本詞頻偏高,常見詞被放大」。",
    relatedTopics: ["NLP"],
    relatedQids: ["s1q5"],
  },
  {
    id: "s1c1-2",
    chapter: "s1c1",
    order: 2,
    title: "詞向量:Word2Vec vs GloVe",
    prerequisites: ["s1c1-1"],
    diagram: `<svg viewBox="0 0 380 240" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="詞向量 2D 散佈圖">
  <!-- Axes -->
  <line x1="30" y1="210" x2="350" y2="210" stroke="#9ca3af"/>
  <line x1="30" y1="210" x2="30" y2="20" stroke="#9ca3af"/>
  <text x="190" y="232" text-anchor="middle" font-size="10" fill="#6b7280">維度 1(經訓練後產生的特徵軸,例如「動物性」)</text>
  <text x="18" y="120" font-size="10" fill="#6b7280" transform="rotate(-90, 18, 120)">維度 2</text>
  <!-- Animal cluster -->
  <g>
    <circle cx="80" cy="60" r="4" fill="#06b6d4"/>
    <text x="88" y="63" font-size="11" fill="currentColor">貓</text>
    <circle cx="105" cy="50" r="4" fill="#06b6d4"/>
    <text x="113" y="53" font-size="11" fill="currentColor">狗</text>
    <circle cx="90" cy="80" r="4" fill="#06b6d4"/>
    <text x="98" y="83" font-size="11" fill="currentColor">鳥</text>
    <ellipse cx="92" cy="65" rx="38" ry="28" fill="none" stroke="#06b6d4" stroke-dasharray="3,3" opacity=".6"/>
    <text x="92" y="115" text-anchor="middle" font-size="10" fill="#06b6d4" font-weight="600">動物群</text>
  </g>
  <!-- Fruit cluster -->
  <g>
    <circle cx="290" cy="60" r="4" fill="#ec4899"/>
    <text x="232" y="63" font-size="11" fill="currentColor">蘋果</text>
    <circle cx="310" cy="80" r="4" fill="#ec4899"/>
    <text x="245" y="83" font-size="11" fill="currentColor">香蕉</text>
    <ellipse cx="300" cy="70" rx="32" ry="22" fill="none" stroke="#ec4899" stroke-dasharray="3,3" opacity=".6"/>
    <text x="300" y="110" text-anchor="middle" font-size="10" fill="#ec4899" font-weight="600">水果群</text>
  </g>
  <!-- Verb cluster -->
  <g>
    <circle cx="180" cy="170" r="4" fill="#10b981"/>
    <text x="160" y="173" font-size="11" fill="currentColor">跑</text>
    <circle cx="200" cy="180" r="4" fill="#10b981"/>
    <text x="208" y="183" font-size="11" fill="currentColor">走</text>
    <circle cx="190" cy="155" r="4" fill="#10b981"/>
    <text x="198" y="158" font-size="11" fill="currentColor">跳</text>
    <ellipse cx="190" cy="170" rx="30" ry="20" fill="none" stroke="#10b981" stroke-dasharray="3,3" opacity=".6"/>
    <text x="190" y="200" text-anchor="middle" font-size="10" fill="#10b981" font-weight="600">動作群</text>
  </g>
  <text x="190" y="22" text-anchor="middle" font-size="11" fill="currentColor" font-weight="600">意思相近的詞 → 向量靠近</text>
</svg>`,
    intuition: `**TF-IDF 的死穴**:它把「貓」和「犬」當成完全無關的數字。模型分不出「貓 = 犬」「狗 ≠ 蘋果」。

詞向量解決這個 — **每個詞變成一串數字(通常 100~300 維)**,讓**意思相近的詞,在多維空間中位置也相近**(看上面的圖)。

例子(假設 3 維簡化):
- 「貓」 = [0.3, 0.8, 0.1]
- 「狗」 = [0.4, 0.7, 0.2]  ← 跟貓很像
- 「蘋果」 = [-0.5, 0.1, 0.9]  ← 跟貓差很多

怎麼算「靠不靠近」?用**餘弦相似度** — 兩個向量夾角越小、相似度越接近 1。

兩種訓練方式:

**① Word2Vec(Google,2013):基於「預測」**
給一句話「我 今天 想 吃 蘋果」,Word2Vec 設兩種任務:
- **Skip-gram**:給中心詞「吃」,**預測周圍**「我、今天、想、蘋果」
- **CBOW**:給周圍詞「我、今天、想、蘋果」,**預測中心**「吃」

訓練幾百萬句後,模型會把「吃」「蘋果」這類經常一起出現的詞向量拉近。

**② GloVe(Stanford,2014):基於「全局統計」**
不做預測,先把整個語料(幾億句)統計成「**共現矩陣**」 — 每個格子記錄「兩個詞一起出現過幾次」:

| | 吃 | 蘋果 | 跑步 |
|---|---|---|---|
| 吃 | – | 800 | 5 |
| 蘋果 | 800 | – | 3 |
| 跑步 | 5 | 3 | – |

然後用矩陣分解(類似 PCA)壓縮成低維向量。直接利用了「全文統計」的資訊。

📌 **怎麼記(名字本身就是線索)**

- **GloVe = Global Vectors 縮寫**(**Glo** + **Ve**)→ 一看名字就知道「**全局**統計」
- **Word2Vec = Word to Vector,Google 出品** → 想成 Google 搜尋會「預測下一字」→ **局部預測**

箭頭方向口訣:
- **Skip**-gram:Skip = 跳 → **中心跳出去找周圍**(中心 →→→ 周圍)→ 罕見詞每次當主角,訊號穩
- **C**BOW:**B**ag = 一袋 → **一袋周圍詞猜中心**(周圍 →·← 中心)→ 訓練快,但罕見詞被平均掉`,
    keyTerms: [
      { term: "詞向量(Word Embedding)", def: "把詞轉成一串數字(典型 100-300 維)" },
      { term: "餘弦相似度", def: "衡量兩向量夾角,值 ≈ 1 表示意思相近" },
      { term: "Skip-gram", def: "**中心 →→→ 周圍**(中心預測周圍)。Skip = 跳,從中心「跳出去」抓周圍。優點:**罕見詞每次都當主角訓練**,訊號穩。" },
      { term: "CBOW", def: "**周圍 →·← 中心**(周圍預測中心,Continuous **B**ag-of-Words = 一袋周圍詞)。優點:**訓練快**,缺點:罕見詞被一袋平均掉。" },
      { term: "Word2Vec", def: "Google 2013,**預測式**(看局部上下文)。聯想:Google 搜尋「預測」下一字。" },
      { term: "GloVe", def: "**Glo**bal **Ve**ctors 縮寫!Stanford 2014,**全局統計式**(用共現矩陣)。" },
      { term: "共現矩陣", def: "一張大表,row/col 都是詞,值是「兩個詞在同一視窗一起出現過幾次」" },
    ],
    confusions: [
      "**Word2Vec 預測式 vs GloVe 統計式** ← 最常考(記:GloVe = **Glo**bal)",
      "**Skip-gram 中心→周圍**(罕見詞穩) vs **CBOW 周圍→中心**(訓練快但罕見詞糊)",
      "兩者**結果**都是向量,差別只在**訓練哲學**",
    ],
    examPattern: `題目給情境選方法。常見:
• 「想學罕見詞 / 低資源語言 / 專業術語」 → **Skip-gram**
• 「訓練資料超大、求快」 → CBOW
• 「想用全文統計資訊」 → GloVe
• 題目區分「預測式 vs 統計式」 → Word2Vec 預測,GloVe 統計`,
    relatedTopics: ["NLP"],
    relatedQids: ["s1q4", "s1q33"],
  },
  {
    id: "s1c1-3",
    chapter: "s1c1",
    order: 3,
    title: "N-gram 語言模型",
    emoji: "🔗",
    prerequisites: [],
    intuition: `預測下一個詞最簡單的方法:看前 N-1 個詞。N=2 看一個前詞(bigram),N=3 看兩個前詞(trigram)。

問題是 **N 必須固定且很小**(通常 ≤ 5),不然要記的組合爆炸。所以 N-gram **只能看近處,看不到遠處** — 這是它的硬傷。

例子:「他從台北去高雄,然後再從那邊搭飛機到 ___」,要填「東京」,N-gram 看不到「他」「台北」「高雄」這些遠處資訊。Transformer 解決了這個。`,
    keyTerms: [
      { term: "N-gram", def: "用前 N-1 個詞預測下一個詞" },
      { term: "長距離依賴", def: "句子中遠處的詞之間的關聯" },
    ],
    confusions: [
      "N-gram 限制:**抓不到長距離依賴**(這就是為什麼後來有 Transformer)",
    ],
    examPattern: "題目愛問「N-gram 為什麼生成的句子片段合理但整體不連貫?」→ 因為它**只看固定長度前序詞,抓不到長距離依賴**。",
    relatedTopics: ["NLP"],
    relatedQids: ["s1q6"],
  },

  // ============ 科目1 Ch2: Transformer 家族 ============
  {
    id: "s1c2-1",
    chapter: "s1c2",
    order: 1,
    title: "Self-Attention 注意力機制",
    prerequisites: ["s1c1-2", "s1c1-3"],
    diagram: `<svg viewBox="0 0 360 200" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Self-Attention 詞語間關聯">
  <defs>
    <marker id="arrow-att" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto">
      <path d="M0,0 L10,5 L0,10 z" fill="#3b82f6"/>
    </marker>
  </defs>
  <text x="180" y="20" text-anchor="middle" font-size="11" fill="#6b7280">「銀行 旁邊 的 河流」</text>
  <g font-size="13" font-weight="600" text-anchor="middle">
    <rect x="20" y="40" width="60" height="34" rx="6" fill="#3b82f6" fill-opacity=".15" stroke="#3b82f6"/>
    <text x="50" y="62" fill="currentColor">銀行</text>
    <rect x="100" y="40" width="60" height="34" rx="6" fill="#3b82f6" fill-opacity=".05" stroke="#3b82f6" stroke-opacity=".4"/>
    <text x="130" y="62" fill="currentColor">旁邊</text>
    <rect x="180" y="40" width="40" height="34" rx="6" fill="#3b82f6" fill-opacity=".05" stroke="#3b82f6" stroke-opacity=".4"/>
    <text x="200" y="62" fill="currentColor">的</text>
    <rect x="240" y="40" width="60" height="34" rx="6" fill="#3b82f6" fill-opacity=".25" stroke="#3b82f6"/>
    <text x="270" y="62" fill="currentColor">河流</text>
  </g>
  <path d="M 50 80 Q 160 140 270 80" fill="none" stroke="#3b82f6" stroke-width="2.5" marker-end="url(#arrow-att)"/>
  <path d="M 270 80 Q 160 160 50 80" fill="none" stroke="#3b82f6" stroke-width="2.5" stroke-dasharray="3,3" opacity=".7" marker-end="url(#arrow-att)"/>
  <text x="180" y="170" text-anchor="middle" font-size="10" fill="#6b7280">每個詞同時跟其他詞「對眼神」,計算關聯權重</text>
  <text x="180" y="186" text-anchor="middle" font-size="10" fill="#3b82f6" font-weight="600">→ 抓得到任意距離依賴</text>
</svg>`,
    intuition: `N-gram 看不到遠處,RNN 一個字一個字看也容易忘記前面。Self-Attention 的點子很妙:**讓句子裡每個字直接跟其他字「對眼神」**,看誰跟誰最相關。

例子:「銀行旁邊的河流」 — 「銀行」這個詞同時跟「河流」對眼神(高相關)和「旁邊」對眼神。透過大量資料訓練,模型學到「銀行 + 河流」要解讀成「river bank」不是「金融銀行」。

整個句子全部詞同時看完,**並行運算**,還能抓任意距離的關聯。這就是 Transformer 的核心。`,
    keyTerms: [
      { term: "Self-Attention", def: "句中每個詞跟其他所有詞計算關聯權重" },
      { term: "Query/Key/Value", def: "每個詞同時扮演三種角色:查詢、鍵、值" },
      { term: "Multi-head Attention", def: "同時用多組 Q/K/V 從不同角度看,結果拼接" },
    ],
    confusions: [
      "Self-Attention 解決的是 N-gram / RNN **抓不到長距離依賴** 的問題",
      "Multi-head 的好處:從多個「子空間」同時捕捉不同關聯",
    ],
    examPattern: "題目愛問「Transformer 為何翻譯品質好?」→ 答案有「自注意力 + 長距離依賴」這兩個關鍵字組合。",
    relatedTopics: ["NLP"],
    relatedQids: ["s1q2", "s1q18"],
  },
  {
    id: "s1c2-2",
    chapter: "s1c2",
    order: 2,
    title: "BERT — 雙向理解模型",
    emoji: "🎭",
    prerequisites: ["s1c2-1"],
    intuition: `BERT 像玩「**填字遊戲**」訓練的:給一句話,隨機遮住幾個詞(用 [MASK]),讓模型根據**前後文同時看**,猜出被遮的詞是什麼。這叫 **MLM(Masked Language Model)**。

關鍵差異:**BERT 雙向看上下文**(前後都看),所以特別擅長「理解」一句話。
對比 GPT:GPT 只能從左到右看,擅長「生成」下一個詞,但理解有限。

BERT 的用途都是「理解類」:文字分類、情感分析、命名實體辨識(NER)、問答。`,
    keyTerms: [
      { term: "MLM", def: "Masked Language Model,遮罩語言模型" },
      { term: "雙向", def: "Bidirectional,同時看左右上下文" },
      { term: "預訓練", def: "先在大量無標註文字上學語言,再針對任務微調" },
    ],
    confusions: [
      "**BERT 雙向理解**,**GPT 單向生成** ← 最常考",
      "MLM 不是「依序遮罩句尾」,是「**隨機遮罩**」",
    ],
    examPattern: "題目給「MLM 訓練策略」,正解必須有「**隨機遮罩 + 雙向上下文預測**」的組合。",
    relatedTopics: ["NLP"],
    relatedQids: ["s1q3", "s1q19"],
  },
  {
    id: "s1c2-3",
    chapter: "s1c2",
    order: 3,
    title: "RAG — 檢索增強生成",
    emoji: "🔍",
    prerequisites: ["s1c2-2"],
    intuition: `語言模型有兩個痛點:**訓練資料會過時**(GPT-3 不知道 2024 的事)、**會編造(幻覺)**。

RAG 的解法很實用:當使用者問問題時,**先去資料庫檢索相關文件**(用語意相似度搜尋),把找到的內容塞進 prompt,再讓 LLM 根據這些「有依據的資料」回答。

兩階段:
1. **檢索階段**:用 embedding 在向量庫找最相似文件(挑戰:語意相似 ≠ 真的相關)
2. **生成階段**:LLM 看著文件回答,引用來源

最常見的應用:企業知識庫問答、客服系統。`,
    keyTerms: [
      { term: "Retrieval", def: "檢索 — 用 embedding 在向量庫找相似文件" },
      { term: "Generation", def: "生成 — LLM 根據檢索結果作答" },
      { term: "Vector DB", def: "向量資料庫,如 Faiss、ScaNN" },
    ],
    confusions: [
      "**檢索階段最常見的錯**:語意相似但與**查詢意圖無關** ← 必考",
      "RAG 不是讓模型重新訓練,是「外掛知識庫」",
    ],
    examPattern: "題目問 RAG 檢索階段最關鍵挑戰 → 答案是「**避免向量檢索結果僅具語意相似但與查詢意圖無實質關聯**」。",
    relatedTopics: ["NLP"],
    relatedQids: ["s1q17"],
  },

  // ============ 科目1 Ch3: 電腦視覺 ============
  {
    id: "s1c3-1",
    chapter: "s1c3",
    order: 1,
    title: "CV 三種分割 + 物件偵測",
    prerequisites: [],
    diagram: `<svg viewBox="0 0 400 200" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="CV 四種任務對比">
  <g font-size="9" text-anchor="middle">
    <!-- Object Detection: bounding boxes -->
    <g>
      <rect x="10" y="20" width="80" height="70" fill="#f3f4f6" stroke="#d1d5db"/>
      <rect x="20" y="40" width="22" height="30" fill="none" stroke="#a855f7" stroke-width="2"/>
      <rect x="50" y="35" width="22" height="35" fill="none" stroke="#a855f7" stroke-width="2"/>
      <rect x="60" y="55" width="20" height="25" fill="none" stroke="#a855f7" stroke-width="2"/>
      <text x="50" y="105" fill="currentColor" font-weight="600">Detection</text>
      <text x="50" y="118" fill="#6b7280">框 + 類別</text>
    </g>
    <!-- Semantic: pixel class -->
    <g>
      <rect x="105" y="20" width="80" height="70" fill="#f3f4f6" stroke="#d1d5db"/>
      <rect x="105" y="20" width="40" height="70" fill="#a855f7" fill-opacity=".5"/>
      <rect x="145" y="20" width="40" height="70" fill="#a855f7" fill-opacity=".25"/>
      <text x="145" y="105" fill="currentColor" font-weight="600">Semantic</text>
      <text x="145" y="118" fill="#6b7280">像素類別</text>
    </g>
    <!-- Instance: same class but separate -->
    <g>
      <rect x="200" y="20" width="80" height="70" fill="#f3f4f6" stroke="#d1d5db"/>
      <ellipse cx="220" cy="55" rx="16" ry="22" fill="#a855f7" fill-opacity=".55"/>
      <ellipse cx="252" cy="55" rx="14" ry="22" fill="#a855f7" fill-opacity=".25"/>
      <ellipse cx="270" cy="55" rx="10" ry="20" fill="#a855f7" fill-opacity=".75"/>
      <text x="240" y="105" fill="currentColor" font-weight="600">Instance</text>
      <text x="240" y="118" fill="#6b7280">區分個體</text>
    </g>
    <!-- Panoptic: everything -->
    <g>
      <rect x="295" y="20" width="80" height="70" fill="#f3f4f6" stroke="#d1d5db"/>
      <rect x="295" y="20" width="80" height="35" fill="#0ea5e9" fill-opacity=".25"/>
      <rect x="295" y="55" width="80" height="35" fill="#84cc16" fill-opacity=".25"/>
      <ellipse cx="320" cy="60" rx="12" ry="18" fill="#a855f7" fill-opacity=".75"/>
      <ellipse cx="350" cy="60" rx="10" ry="18" fill="#a855f7" fill-opacity=".5"/>
      <text x="335" y="105" fill="#a855f7" font-weight="700">Panoptic ★</text>
      <text x="335" y="118" fill="#6b7280">兩者合體</text>
    </g>
  </g>
  <text x="200" y="155" text-anchor="middle" font-size="11" fill="currentColor" font-weight="600">複雜度:Detection &lt; Semantic &lt; Instance &lt; Panoptic</text>
  <text x="200" y="175" text-anchor="middle" font-size="10" fill="#6b7280">「同時要像素類別且區分個體」 = Panoptic</text>
</svg>`,
    intuition: `電腦看影像,有四種「越來越細」的任務:

1. **物件偵測(Object Detection)**:框出物件 + 給類別。「這裡有 3 個人、1 台車」。
2. **語義分割(Semantic Segmentation)**:每個**像素**標類別,但**不分個體**。「這 50% 像素是人,30% 是路」。
3. **實例分割(Instance Segmentation)**:每個像素標類別 + **區分個體**。「這群像素是人 1,那群是人 2」。
4. **全景分割(Panoptic Segmentation)** ⭐:**同時做** Semantic 和 Instance。每個像素都有類別,**且**同類個體分得開。

從容易到難:Detection < Semantic < Instance < Panoptic。`,
    keyTerms: [
      { term: "Object Detection", def: "框 + 類別,評估用 mAP/IoU" },
      { term: "Semantic", def: "像素類別,不分個體" },
      { term: "Instance", def: "像素類別 + 區分個體" },
      { term: "Panoptic", def: "Semantic + Instance 合體" },
      { term: "IoU", def: "預測框與真實框重疊度,IoU 越高越精準" },
      { term: "mAP", def: "平均精確率,Object Detection 標準指標" },
    ],
    confusions: [
      "「同時辨識像素類別且區分個體」= **全景分割(Panoptic)**,不是 Instance",
      "IoU 閾值高 = 預測框跟真實框重疊度高 = 結果精準",
    ],
    examPattern: "情境會描述「同時要 X 又要 Y」,選最完整的那個(通常是 Panoptic)。",
    relatedTopics: ["CV"],
    relatedQids: ["s1q7", "s1q34"],
  },
  {
    id: "s1c3-2",
    chapter: "s1c3",
    order: 2,
    title: "CLIP — 跨模態對比學習",
    emoji: "🎨",
    prerequisites: ["s1c2-1"],
    intuition: `CLIP(OpenAI)的點子很美:**讓「圖」和「文字描述」映射到同一個向量空間**。訓練時給 4 億組「圖文配對」,讓配對的圖文向量靠近,不配對的拉遠。

訓練完後魔法發生:你可以用任何文字描述去搜圖、或反過來。最強的是「**零樣本分類(Zero-shot)**」 — 從沒看過「企鵝」這個類別,給 prompt「a photo of a penguin」,它就能正確分類。

這是現代多模態(文字+圖)應用的基礎,Stable Diffusion 也用 CLIP 來理解 prompt。`,
    keyTerms: [
      { term: "Contrastive Learning", def: "對比學習 — 拉近正樣本、推開負樣本" },
      { term: "Shared Embedding Space", def: "共同嵌入空間,圖文都對映到這" },
      { term: "Zero-shot", def: "零樣本 — 沒看過該類別也能分類" },
    ],
    confusions: [
      "CLIP 的核心是「**圖文映射到共同空間**」+「**對比式學習**」+「**零樣本分類**」",
      "如果 CLIP 結果不準:文字編碼器與影像編碼器在嵌入空間**對齊不夠**",
    ],
    examPattern: "題目問 CLIP 關鍵特性 → 「對比式學習 + 共同嵌入空間 + 零樣本分類」三件事。",
    relatedTopics: ["多模態"],
    relatedQids: ["s1q35", "s1q50"],
  },

  // ============ 科目1 Ch4: 生成式 AI ============
  {
    id: "s1c4-1",
    chapter: "s1c4",
    order: 1,
    title: "GAN / VAE / Diffusion 大對比",
    prerequisites: ["s1c2-1"],
    diagram: `<svg viewBox="0 0 360 220" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="GAN VAE Diffusion 對比">
  <g font-size="11" text-anchor="middle">
    <!-- GAN -->
    <g>
      <rect x="10" y="20" width="100" height="170" rx="8" fill="#ec4899" fill-opacity=".08" stroke="#ec4899"/>
      <text x="60" y="40" font-weight="700" font-size="13" fill="#ec4899">GAN</text>
      <text x="60" y="60" fill="currentColor">生成器 vs 鑑別器</text>
      <rect x="25" y="75" width="30" height="20" rx="3" fill="#fff" stroke="#ec4899"/>
      <text x="40" y="89" font-size="9" fill="currentColor">G</text>
      <rect x="65" y="75" width="30" height="20" rx="3" fill="#fff" stroke="#ec4899"/>
      <text x="80" y="89" font-size="9" fill="currentColor">D</text>
      <path d="M 40 100 L 80 105 L 40 110" fill="none" stroke="#ec4899"/>
      <text x="60" y="135" font-size="10" fill="currentColor">✓ 品質高</text>
      <text x="60" y="150" font-size="10" fill="currentColor">✗ 不穩</text>
      <text x="60" y="165" font-size="10" fill="currentColor">✗ Mode</text>
      <text x="60" y="178" font-size="10" fill="currentColor">  Collapse</text>
    </g>
    <!-- VAE -->
    <g>
      <rect x="125" y="20" width="100" height="170" rx="8" fill="#a855f7" fill-opacity=".08" stroke="#a855f7"/>
      <text x="175" y="40" font-weight="700" font-size="13" fill="#a855f7">VAE</text>
      <text x="175" y="60" fill="currentColor">機率潛在空間</text>
      <rect x="135" y="75" width="22" height="20" rx="3" fill="#fff" stroke="#a855f7"/>
      <text x="146" y="89" font-size="9" fill="currentColor">Enc</text>
      <ellipse cx="175" cy="85" rx="10" ry="8" fill="#a855f7" fill-opacity=".25" stroke="#a855f7"/>
      <text x="175" y="89" font-size="8" fill="currentColor">z</text>
      <rect x="195" y="75" width="22" height="20" rx="3" fill="#fff" stroke="#a855f7"/>
      <text x="206" y="89" font-size="9" fill="currentColor">Dec</text>
      <text x="175" y="135" font-size="10" fill="currentColor">✓ 結構好</text>
      <text x="175" y="150" font-size="10" fill="currentColor">  做變體佳</text>
      <text x="175" y="170" font-size="10" fill="currentColor">✗ 解析度</text>
      <text x="175" y="183" font-size="10" fill="currentColor">  有限</text>
    </g>
    <!-- Diffusion -->
    <g>
      <rect x="240" y="20" width="110" height="170" rx="8" fill="#3b82f6" fill-opacity=".08" stroke="#3b82f6"/>
      <text x="295" y="40" font-weight="700" font-size="13" fill="#3b82f6">Diffusion ★</text>
      <text x="295" y="60" fill="currentColor">逐步去噪</text>
      <g font-size="9">
        <rect x="252" y="75" width="20" height="20" fill="#94a3b8"/>
        <text x="262" y="89" fill="#fff">雜訊</text>
        <text x="277" y="89" fill="#3b82f6">→</text>
        <rect x="287" y="75" width="20" height="20" fill="#cbd5e1"/>
        <text x="297" y="89" fill="currentColor">...</text>
        <text x="312" y="89" fill="#3b82f6">→</text>
        <rect x="322" y="75" width="20" height="20" fill="#fff" stroke="#3b82f6"/>
        <text x="332" y="89" fill="currentColor">圖</text>
      </g>
      <text x="295" y="135" font-size="10" fill="currentColor">✓ 穩定</text>
      <text x="295" y="150" font-size="10" fill="currentColor">✓ 多樣</text>
      <text x="295" y="170" font-size="10" fill="currentColor">✗ 慢</text>
      <text x="295" y="183" font-size="10" fill="currentColor">  (取樣多)</text>
    </g>
  </g>
  <text x="180" y="210" text-anchor="middle" font-size="10" fill="#6b7280">情境選型:要穩定多樣 → Diffusion · 做變體 → VAE · 追求極致品質 → GAN</text>
</svg>`,
    intuition: `三種主流生成模型,各有各的個性:

**GAN(對抗生成)**:像「偽造者 vs 警察」對打。生成器造假,鑑別器抓假,互相訓練。
- 優點:**生成品質高**(尤其人臉)
- 缺點:**訓練不穩**,容易 **Mode Collapse**(只生成幾種樣式)
- 解法:WGAN(用 Wasserstein 距離,訓練更穩)

**VAE(變分自編碼器)**:把資料壓進「機率分佈」的潛在空間,再解碼還原。
- 優點:**潛在空間結構好**,適合做「同類但不同」的變體
- 缺點:**解析度有限**,圖會糊

**Diffusion(擴散模型)**:從純雜訊一步步「去噪」還原成圖。Stable Diffusion 就是這類。
- 優點:**穩定 + 多樣**,目前最強
- 缺點:**取樣步數多**,生成慢`,
    keyTerms: [
      { term: "GAN", def: "對抗式,品質高但不穩,易 Mode Collapse" },
      { term: "VAE", def: "顯式潛在變數,結構好但解析度有限" },
      { term: "Diffusion", def: "去噪過程,穩定多樣,目前主流" },
      { term: "Mode Collapse", def: "GAN 訓練問題:只產生少數樣式" },
      { term: "WGAN", def: "用 Wasserstein 距離取代原損失,穩定 GAN 訓練" },
    ],
    confusions: [
      "GAN 不穩 + Mode Collapse → 解法是 **WGAN(Wasserstein 距離)**",
      "Stable Diffusion 細節差 → 增加**取樣步數 + 高品質取樣器**",
    ],
    examPattern: "題目給情境選模型(要穩定多樣選 Diffusion、要做變體選 VAE、追求極致品質且能接受不穩用 GAN)。",
    relatedTopics: ["GenAI"],
    relatedQids: ["s1q20", "s1q38", "s1q40", "s1q44"],
  },

  // ============ 科目1 Ch5: 模型評估 ============
  {
    id: "s1c5-1",
    chapter: "s1c5",
    order: 1,
    title: "Precision / Recall / F1 — 混淆矩陣三兄弟",
    prerequisites: [],
    diagram: `<svg viewBox="0 0 380 240" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="混淆矩陣與 P/R/F1">
  <g font-size="11">
    <!-- Header -->
    <text x="100" y="22" font-weight="600" text-anchor="middle" fill="currentColor">預測結果</text>
    <text x="20" y="100" font-weight="600" text-anchor="middle" fill="currentColor" transform="rotate(-90, 20, 100)">真實情況</text>
    <!-- Column headers -->
    <text x="65" y="44" text-anchor="middle" fill="currentColor">陽性</text>
    <text x="135" y="44" text-anchor="middle" fill="currentColor">陰性</text>
    <!-- Row labels -->
    <text x="38" y="78" text-anchor="end" fill="currentColor">陽性</text>
    <text x="38" y="138" text-anchor="end" fill="currentColor">陰性</text>
    <!-- Cells -->
    <rect x="42" y="55" width="50" height="40" fill="#10b981" fill-opacity=".25" stroke="#10b981"/>
    <text x="67" y="76" text-anchor="middle" font-weight="700" fill="#10b981">TP</text>
    <text x="67" y="89" text-anchor="middle" font-size="8" fill="currentColor">真陽</text>
    <rect x="100" y="55" width="50" height="40" fill="#ef4444" fill-opacity=".15" stroke="#ef4444"/>
    <text x="125" y="76" text-anchor="middle" font-weight="700" fill="#ef4444">FN</text>
    <text x="125" y="89" text-anchor="middle" font-size="8" fill="currentColor">漏</text>
    <rect x="42" y="115" width="50" height="40" fill="#ef4444" fill-opacity=".15" stroke="#ef4444"/>
    <text x="67" y="136" text-anchor="middle" font-weight="700" fill="#ef4444">FP</text>
    <text x="67" y="149" text-anchor="middle" font-size="8" fill="currentColor">誤判</text>
    <rect x="100" y="115" width="50" height="40" fill="#10b981" fill-opacity=".25" stroke="#10b981"/>
    <text x="125" y="136" text-anchor="middle" font-weight="700" fill="#10b981">TN</text>
    <text x="125" y="149" text-anchor="middle" font-size="8" fill="currentColor">真陰</text>
    <!-- Formulas -->
    <g font-size="11">
      <text x="180" y="60" font-weight="600" fill="#3b82f6">Precision</text>
      <text x="180" y="78" fill="currentColor">= TP / (TP + FP)</text>
      <text x="180" y="92" font-size="9" fill="#6b7280">「我說有的人,真有的比例」</text>
      <text x="180" y="106" font-size="9" fill="#6b7280">→ 不冤枉好人</text>
      <text x="180" y="130" font-weight="600" fill="#a855f7">Recall</text>
      <text x="180" y="148" fill="currentColor">= TP / (TP + FN)</text>
      <text x="180" y="162" font-size="9" fill="#6b7280">「真有的人,我抓到的比例」</text>
      <text x="180" y="176" font-size="9" fill="#6b7280">→ 不漏掉病人</text>
    </g>
  </g>
  <line x1="20" y1="200" x2="360" y2="200" stroke="#e5e7eb"/>
  <g font-size="11">
    <text x="42" y="220" font-weight="600" fill="#f59e0b">F1 = 2PR / (P+R)</text>
    <text x="220" y="220" font-size="10" fill="currentColor">調和平均,兼顧 P 和 R</text>
  </g>
</svg>`,
    intuition: `想像你做一個「**癌症篩檢**」AI,結果有四種:

|  | 預測:有 | 預測:無 |
|---|---|---|
| **真實:有** | TP(真陽) | FN(假陰)❌ 漏掉病人 |
| **真實:無** | FP(假陽)❌ 嚇到健康人 | TN(真陰) |

兩個重要指標:
- **Precision = TP / (TP + FP)**:「**我說有的人中,真的有的比例**」 — 不冤枉好人
- **Recall = TP / (TP + FN)**:「**真的有的人中,我抓到的比例**」 — 不漏掉病人

醫療要 Recall(寧願多嚇幾個健康人,不能漏病人)。垃圾郵件要 Precision(寧願讓垃圾漏進收件夾,不能誤封正常信)。

兼顧兩者:**F1 = 2PR / (P+R)** — 調和平均,任一個低 F1 就低。`,
    keyTerms: [
      { term: "TP", def: "True Positive,真陽性(預測有 + 真有)" },
      { term: "FN", def: "False Negative,假陰性(預測無 + 真有)漏掉" },
      { term: "FP", def: "False Positive,假陽性(預測有 + 真無)誤判" },
      { term: "Precision", def: "TP / (TP + FP),不冤枉好人" },
      { term: "Recall", def: "TP / (TP + FN),不漏掉真的" },
      { term: "F1", def: "2PR/(P+R),Precision 與 Recall 的調和平均" },
    ],
    confusions: [
      "**Recall 公式 = TP/(TP+FN),不是 TP/(TP+FP)** ← 官方教材曾印錯,容易考",
      "F1 不是平均,是**調和平均**,任何一個低就會被拉下來",
    ],
    examPattern: "題目問「同時兼顧 Precision 和 Recall 用哪個指標?」 → **F1 Score**。",
    relatedTopics: ["評估"],
    relatedQids: ["s1q10"],
  },

  // ============ 科目1 Ch6: MLOps ============
  {
    id: "s1c6-1",
    chapter: "s1c6",
    order: 1,
    title: "Data Drift — 模型上線後最大威脅",
    emoji: "📉",
    prerequisites: ["s1c5-1"],
    intuition: `模型訓練好上線,過幾個月準確率掉了。為什麼?最常見原因是 **Data Drift(資料漂移)**:**生產環境輸入資料的分佈,跟訓練時不同了**。

例子:疫情前訓練的客戶流失模型,疫情中行為變了 — 模型還在用舊習慣判斷,當然不準。

**怎麼偵測?** 不要等準確率掉才發現,要主動監控:
- **KL Divergence(KL 散度)**:衡量兩個分佈差異
- **PSI(Population Stability Index)**:類似 KL,工業界更常用
- 監控**置信度分佈變化**

注意:題目常設陷阱選「重新訓練」 — **重新訓練是「應對」不是「偵測」**。要先偵測到才知道該不該重訓。`,
    keyTerms: [
      { term: "Data Drift", def: "輸入特徵分佈隨時間改變" },
      { term: "Concept Drift", def: "輸入和輸出的關係改變" },
      { term: "KL Divergence", def: "衡量兩分佈差異的數學工具" },
      { term: "PSI", def: "Population Stability Index,工業界常用漂移指標" },
    ],
    confusions: [
      "**「偵測」漂移用 KL/PSI**,**「應對」才是重新訓練**",
      "Data Drift = 輸入變了,Concept Drift = 輸入跟輸出的關係變了",
    ],
    examPattern: "題目問「如何**偵測**資料分佈變化」→ **計算 KL 散度** 或 **PSI**。問「如何**主動預警**」→ 同上 + 監控置信度分佈。",
    relatedTopics: ["MLOps"],
    relatedQids: ["s1q22", "s1q32", "s1q46"],
  },

  // ============ 科目2 Ch0: 敘述性統計 ============
  {
    id: "s2c0-1",
    chapter: "s2c0",
    order: 1,
    title: "Z-score 標準分數",
    prerequisites: [],
    diagram: `<svg viewBox="0 0 360 200" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Z-score 鐘型曲線">
  <!-- Bell curve -->
  <path d="M 30 160 C 80 160, 100 50, 180 50 C 260 50, 280 160, 330 160" fill="#10b981" fill-opacity=".15" stroke="#10b981" stroke-width="2"/>
  <line x1="30" y1="160" x2="330" y2="160" stroke="#9ca3af" stroke-width="1.5"/>
  <!-- Standard deviation markers -->
  <g font-size="10" text-anchor="middle">
    <line x1="180" y1="50" x2="180" y2="160" stroke="#9ca3af" stroke-dasharray="2,2"/>
    <text x="180" y="178" fill="currentColor" font-weight="600">μ (Z=0)</text>
    <line x1="130" y1="100" x2="130" y2="160" stroke="#9ca3af" stroke-dasharray="2,2"/>
    <text x="130" y="178" fill="currentColor">−1σ</text>
    <line x1="80" y1="140" x2="80" y2="160" stroke="#9ca3af" stroke-dasharray="2,2"/>
    <text x="80" y="178" fill="currentColor">−2σ</text>
    <line x1="230" y1="100" x2="230" y2="160" stroke="#9ca3af" stroke-dasharray="2,2"/>
    <text x="230" y="178" fill="currentColor">+1σ</text>
    <line x1="280" y1="140" x2="280" y2="160" stroke="#9ca3af" stroke-dasharray="2,2"/>
    <text x="280" y="178" fill="currentColor" font-weight="600">+2σ</text>
  </g>
  <!-- Marker for Z=2 example -->
  <circle cx="280" cy="140" r="5" fill="#ef4444"/>
  <text x="280" y="38" text-anchor="middle" font-size="11" font-weight="700" fill="#ef4444">Z = +2</text>
  <text x="280" y="22" text-anchor="middle" font-size="10" fill="#6b7280">比平均高 2 個標準差</text>
  <text x="180" y="195" text-anchor="middle" font-size="10" fill="#6b7280">|Z| ≥ 3 通常視為異常值</text>
</svg>`,
    intuition: `Z-score 回答一個問題:「這個值,**離平均值幾個標準差**?」

公式:**Z = (X - 平均) / 標準差**

例子:班級平均 70 分,標準差 10。
- 你考 90 → Z = (90-70)/10 = **+2** → 比平均高 **2 個標準差**(很猛)
- 你考 50 → Z = (50-70)/10 = **-2** → 比平均低 2 個標準差

實務上 **|Z| ≥ 3 視為異常值(Outlier)**。例如交易金額平均 2000、標準差 400,某筆 3200 → Z = 3 → 標記為異常。

Z-score 的好處是「**消除單位**」 — 不管原值多大多小,都變成「離平均幾倍標準差」這種比例。`,
    keyTerms: [
      { term: "Z-score", def: "(X - 平均) / 標準差" },
      { term: "標準化(Standardization)", def: "用 Z-score 把資料轉成平均 0、標準差 1" },
      { term: "|Z| ≥ 3", def: "工業常用異常值閾值" },
    ],
    confusions: [
      "Z = 2 表示「**比平均高 2 個標準差**」,不是「該值是 2」",
      "Z-score 不會把資料壓到 0~1(那是 Min-Max 正規化)",
    ],
    examPattern: "題目給 Z 值問意涵 → 答「比平均高/低 N 個標準差」。給異常值閾值 → 通常 |Z| ≥ 3。",
    relatedTopics: ["統計"],
    relatedQids: ["s2q1", "s2q16"],
  },
  {
    id: "s2c0-2",
    chapter: "s2c0",
    order: 2,
    title: "偏態(Skewness)— 資料左偏右偏",
    prerequisites: ["s2c0-1"],
    diagram: `<svg viewBox="0 0 380 180" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="左偏、對稱、右偏 三種分佈">
  <g font-size="11">
    <!-- Left skewed -->
    <g>
      <text x="60" y="20" text-anchor="middle" font-weight="600" fill="currentColor">左偏</text>
      <text x="60" y="36" text-anchor="middle" font-size="10" fill="#10b981">Skewness &lt; 0</text>
      <path d="M 15 130 C 30 130, 45 120, 60 90 C 75 50, 90 50, 105 50 L 105 130 Z" fill="#10b981" fill-opacity=".4" stroke="#10b981"/>
      <line x1="15" y1="130" x2="105" y2="130" stroke="#9ca3af"/>
      <text x="60" y="155" text-anchor="middle" font-size="10" fill="#6b7280">尾巴在左</text>
    </g>
    <!-- Symmetric -->
    <g>
      <text x="190" y="20" text-anchor="middle" font-weight="600" fill="currentColor">對稱</text>
      <text x="190" y="36" text-anchor="middle" font-size="10" fill="#3b82f6">Skewness = 0</text>
      <path d="M 145 130 C 165 130, 175 60, 190 50 C 205 60, 215 130, 235 130 Z" fill="#3b82f6" fill-opacity=".4" stroke="#3b82f6"/>
      <line x1="145" y1="130" x2="235" y2="130" stroke="#9ca3af"/>
      <text x="190" y="155" text-anchor="middle" font-size="10" fill="#6b7280">如常態分佈</text>
    </g>
    <!-- Right skewed -->
    <g>
      <text x="320" y="20" text-anchor="middle" font-weight="600" fill="currentColor">右偏</text>
      <text x="320" y="36" text-anchor="middle" font-size="10" fill="#ef4444">Skewness &gt; 0</text>
      <path d="M 275 130 L 275 50 C 290 50, 305 50, 320 90 C 335 120, 350 130, 365 130 Z" fill="#ef4444" fill-opacity=".4" stroke="#ef4444"/>
      <line x1="275" y1="130" x2="365" y2="130" stroke="#9ca3af"/>
      <text x="320" y="155" text-anchor="middle" font-size="10" fill="#6b7280">尾巴在右(如所得)</text>
    </g>
  </g>
  <text x="190" y="175" text-anchor="middle" font-size="10" fill="#6b7280" font-weight="600">口訣:尾巴朝哪邊偏哪邊</text>
</svg>`,
    intuition: `想像直方圖。如果資料分佈**左右對稱**(像鐘型),偏態 = 0。如果**尾巴拖到右邊**(右邊有少數很大的值),稱為「**右偏 / 正偏**」,Skewness > 0。反之是「左偏 / 負偏」,Skewness < 0。

口訣:**「尾巴朝哪邊偏哪邊」**。所得分佈通常右偏(少數富人拖長右尾)。

判別:看到題目給直方圖,主峰在右、長尾在左 → **左偏 (Skewness < 0)**。主峰在左、長尾在右 → 右偏(Skewness > 0)。`,
    keyTerms: [
      { term: "Skewness > 0", def: "右偏(尾巴在右)" },
      { term: "Skewness < 0", def: "左偏(尾巴在左)" },
      { term: "Skewness = 0", def: "對稱(如常態分佈)" },
    ],
    confusions: [
      "「**尾巴朝哪邊**」決定偏態,不是「主峰朝哪邊」",
      "右偏資料適合做 Box-Cox / log 轉換來「拉回對稱」",
    ],
    examPattern: "題目給直方圖,看尾巴方向。長尾在左 → Skewness < 0,長尾在右 → > 0。",
    relatedTopics: ["統計"],
    relatedQids: ["s2q3"],
  },

  // ============ 科目2 Ch1: 機率分佈 ============
  {
    id: "s2c1-1",
    chapter: "s2c1",
    order: 1,
    title: "三大必懂機率分佈",
    emoji: "📐",
    prerequisites: ["s2c0-1"],
    intuition: `**常態分佈 Normal**:鐘型,左右對稱。身高、考試分數、誤差…大量自然現象都接近常態。中央極限定理保證:**樣本平均值的分佈會趨近常態**。

**二項分佈 Binomial**:n 次獨立試驗(每次成功率 p),問「成功幾次」的機率。例如:推 5000 個廣告,點擊率 0.4,問點擊總數分佈。
- **二項常態近似條件**:**np 和 n(1-p) 都 > 5** ← 必考
- 樣本夠大時可用常態分佈近似計算

**Poisson 分佈**:單位時間/空間內,**獨立事件**發生的次數。例:客服每分鐘進來幾通電話、每平方公里多少件車禍。
- 條件:**事件獨立 + 平均率固定**
- 應用:來電預測、瑕疵率估計`,
    keyTerms: [
      { term: "Normal", def: "鐘型對稱,自然現象常見" },
      { term: "Binomial", def: "n 次獨立試驗中成功 k 次的機率" },
      { term: "Poisson", def: "單位時間內事件次數,平均率 λ" },
      { term: "二項常態近似", def: "n 大且 np、n(1-p) 都 > 5 時可用" },
      { term: "CDF", def: "累積分佈函數 = PDF 的積分" },
    ],
    confusions: [
      "**二項常態近似條件:np 和 n(1-p) 都 > 5**",
      "Poisson 的條件是「**獨立 + 平均率固定**」,不是「最多 N 個」",
      "CDF 是 PDF 的**積分**,不是平均、離散總和、或標準差",
    ],
    examPattern: "情境題:每分鐘來電 → Poisson;n 次試驗成功幾次 → Binomial;誤差/身高 → Normal。",
    relatedTopics: ["統計"],
    relatedQids: ["s2q4", "s2q15", "s2q31", "s2q42"],
  },

  // ============ 科目2 Ch2: 假設檢定 ============
  {
    id: "s2c2-1",
    chapter: "s2c2",
    order: 1,
    title: "假設檢定 5 步驟",
    emoji: "⚖️",
    prerequisites: ["s2c1-1"],
    intuition: `想知道「新生產線良率有沒有提升?」「行銷活動有沒有帶來效果?」 — 這些都是**假設檢定**問題。

5 步驟:
1. **建立假設**:虛無假設 H0(沒差)vs 對立假設 H1(有差)
2. **選檢定**:依資料類型選擇:
   - 比較**兩組平均** → t 檢定
   - 比較**兩組比例**(如良率 95% vs 97%) → **雙比例 Z 檢定**
   - 三組以上比較 → ANOVA
   - 類別變數獨立性 → 卡方
3. **設顯著水準**:常用 α = 0.05
4. **計算 p 值**
5. **判斷**:**p < α** 拒絕 H0(有顯著差異),反之不拒絕

**信賴區間判讀**:如果待檢驗的虛無假設值(如 100 萬)**落在信賴區間內**,代表「沒有強證據說它不是 100 萬」 → **無法拒絕 H0**。`,
    keyTerms: [
      { term: "H0 / H1", def: "虛無假設 / 對立假設" },
      { term: "p 值", def: "在 H0 為真時,看到目前結果的機率" },
      { term: "雙比例 Z 檢定", def: "比較兩組成功比例(如良率)" },
      { term: "信賴區間", def: "估計真實值的範圍" },
    ],
    confusions: [
      "**良率比較 95% vs 97% → 雙比例 Z 檢定**(不是 t 檢定)",
      "p 值 ≥ α → **不拒絕 H0**(不是「接受」H0,語意上不一樣)",
      "假設值落在信賴區間內 → **無法拒絕 H0**",
    ],
    examPattern: "題目給情境(兩組平均/兩組比例/三組以上),選對應檢定。給 p 值和信賴區間判斷拒不拒絕。",
    relatedTopics: ["統計", "假設檢定"],
    relatedQids: ["s2q23", "s2q38"],
  },

  // ============ 科目2 Ch3: 資料前處理 ============
  {
    id: "s2c3-1",
    chapter: "s2c3",
    order: 1,
    title: "三種編碼方法選擇",
    emoji: "🏷️",
    prerequisites: [],
    intuition: `類別資料(顏色、會員等級)要轉成數字才能餵給模型。選錯方法後果嚴重:

**One-Hot Encoding**:每個類別變成獨立欄位(0/1)。
- ✅ 適合**無序**類別(顏色)
- ❌ 高基數時**維度爆炸**(100 種顏色 → 100 欄)

**Label Encoding**:每個類別給一個整數(紅=1, 藍=2, 綠=3)。
- ✅ 省空間
- ❌ **會引入虛假順序**(模型誤以為「綠 > 藍 > 紅」)

**Target Encoding**:用該類別對應的目標變數平均值編碼。
- ✅ 高基數類別好用
- ❌ **容易過擬合**,需小心 leakage

**樹模型(XGBoost、Gradient Boosting)** 對 Label Encoding 較免疫(會自己分裂),但**仍可能誤判特徵重要性**。`,
    keyTerms: [
      { term: "One-Hot", def: "無序類別 + 維度可控時用" },
      { term: "Label Encoding", def: "省空間但**製造虛假順序**" },
      { term: "Target Encoding", def: "高基數類別、小心過擬合" },
    ],
    confusions: [
      "**Label Encoding 最大風險:虛假順序關係**",
      "高基數無序類別 → One-Hot 會維度爆炸,改用 Target Encoding",
    ],
    examPattern: "題目給情境(類別有序/無序、高/低基數、模型類型)選編碼。",
    relatedTopics: ["編碼"],
    relatedQids: ["s2q5", "s2q6", "s2q17"],
  },
  {
    id: "s2c3-2",
    chapter: "s2c3",
    order: 2,
    title: "三種標準化方法",
    emoji: "📐",
    prerequisites: ["s2c0-1"],
    intuition: `不同特徵單位差很大(年齡 20-80 vs 收入 30000-3000000),距離型模型(KNN、SVM、K-means)會被大數值主導。標準化把它們拉到同一尺度。

**Min-Max Scaling**:壓到 [0, 1] 區間。
- ✅ 範圍固定,適合圖像處理
- ❌ **對極端值敏感**(一個極大值會把其他全壓扁)

**Z-score Standardization**:平均 0、標準差 1(用前面學的 Z-score)。
- ✅ 多數演算法的預設選擇
- ❌ 仍受極端值影響

**Robust Scaling**:用**中位數和四分位距**取代平均和標準差。
- ✅ **抗極端值** ⭐ 有 outlier 時必選
- 常用於金融、感測器資料`,
    keyTerms: [
      { term: "Min-Max", def: "壓到 [0,1],對極端值敏感" },
      { term: "Z-score", def: "平均 0、標準差 1" },
      { term: "Robust Scaling", def: "中位數 + 四分位距,**抗極端值**" },
    ],
    confusions: [
      "**有極端值 → 用 Robust Scaling**(這幾乎是必考)",
      "Z-score 不是「壓到 0~1」(那是 Min-Max)",
      "PCA **必須先標準化**,否則大尺度欄位會主導主成分",
    ],
    examPattern: "題目提到「資料含極端值」、「outlier」→ 答案是 **Robust Scaling**。",
    relatedTopics: ["標準化"],
    relatedQids: ["s2q9", "s2q29"],
  },
  {
    id: "s2c3-3",
    chapter: "s2c3",
    order: 3,
    title: "不平衡資料 — SMOTE 與其他",
    emoji: "⚖️",
    prerequisites: [],
    intuition: `醫療診斷:陽性樣本只佔 3%。若直接訓練,模型可能全猜「陰性」就拿 97% 準確率,但**完全沒抓到病人**。

幾種對策:
- **隨機過採樣(Oversampling)**:把少數類複製。簡單但**容易過擬合**(模型死背)。
- **隨機欠採樣(Undersampling)**:把多數類丟掉。資訊損失。
- **SMOTE** ⭐:用 KNN 找少數類的鄰居,**合成新樣本**(不是複製)。最常用。
- **調整類別權重**:在損失函數對少數類加重。
- **調整決策閾值**:預設 0.5,降到 0.3 提高 Recall。

評估時**不能用 Accuracy**(會被多數類掩蓋),要用 **F1 / Precision / Recall** 或 **AUC-ROC**。`,
    keyTerms: [
      { term: "SMOTE", def: "Synthetic Minority Over-sampling,合成少數類" },
      { term: "過採樣風險", def: "簡單複製 → 過擬合" },
      { term: "類別權重", def: "在損失函數對少數類加重" },
    ],
    confusions: [
      "**少數類稀少且難取得 → SMOTE**(合成而非複製)",
      "不平衡資料**不能用 Accuracy** 評估,改用 F1",
    ],
    examPattern: "題目給「陽性 < 5%」「罕見疾病」→ SMOTE 或調整類別權重。評估指標選 F1。",
    relatedTopics: ["不平衡"],
    relatedQids: ["s2q12", "s2q37"],
  },

  // ============ 科目2 Ch5: 分析方法 ============
  {
    id: "s2c5-1",
    chapter: "s2c5",
    order: 1,
    title: "PCA 主成分分析",
    prerequisites: ["s2c3-2"],
    diagram: `<svg viewBox="0 0 360 200" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="PCA 主成分視覺化">
  <!-- Axes -->
  <line x1="40" y1="170" x2="280" y2="170" stroke="#9ca3af"/>
  <line x1="40" y1="170" x2="40" y2="30" stroke="#9ca3af"/>
  <text x="155" y="190" text-anchor="middle" font-size="10" fill="#6b7280">X1</text>
  <text x="25" y="100" text-anchor="middle" font-size="10" fill="#6b7280">X2</text>
  <!-- Data points (elongated cloud) -->
  <g fill="#9ca3af" opacity=".6">
    <circle cx="70" cy="155" r="3"/>
    <circle cx="85" cy="148" r="3"/>
    <circle cx="100" cy="142" r="3"/>
    <circle cx="120" cy="138" r="3"/>
    <circle cx="135" cy="125" r="3"/>
    <circle cx="155" cy="118" r="3"/>
    <circle cx="170" cy="108" r="3"/>
    <circle cx="190" cy="100" r="3"/>
    <circle cx="205" cy="88" r="3"/>
    <circle cx="225" cy="80" r="3"/>
    <circle cx="245" cy="68" r="3"/>
    <circle cx="60" cy="160" r="3"/>
    <circle cx="100" cy="155" r="3"/>
    <circle cx="155" cy="135" r="3"/>
    <circle cx="190" cy="115" r="3"/>
    <circle cx="220" cy="95" r="3"/>
    <circle cx="245" cy="80" r="3"/>
  </g>
  <!-- PC1: longest direction -->
  <line x1="55" y1="160" x2="255" y2="70" stroke="#d97706" stroke-width="3"/>
  <text x="265" y="65" font-size="11" fill="#d97706" font-weight="700">PC1</text>
  <text x="265" y="80" font-size="9" fill="#6b7280">變異最大方向</text>
  <!-- PC2: perpendicular -->
  <line x1="155" y1="93" x2="120" y2="155" stroke="#3b82f6" stroke-width="2"/>
  <text x="100" y="170" font-size="11" fill="#3b82f6" font-weight="700">PC2</text>
  <!-- Variance bars -->
  <g font-size="10">
    <text x="305" y="35" font-size="11" font-weight="600" fill="currentColor">變異量</text>
    <rect x="305" y="45" width="40" height="10" fill="#d97706"/>
    <text x="350" y="54" fill="currentColor">60%</text>
    <rect x="305" y="60" width="20" height="10" fill="#3b82f6"/>
    <text x="330" y="69" fill="currentColor">30%</text>
    <rect x="305" y="75" width="7" height="10" fill="#9ca3af"/>
    <text x="316" y="84" fill="currentColor">10%</text>
  </g>
</svg>`,
    intuition: `想像一團 3D 雲,但**大部分方差在某條軸線上**。PCA 找到這條「最重要的方向」當第 1 主成分(PC1),然後找與之垂直且第二重要的方向(PC2),依此類推。

用途:**降維**(從 1024 維壓到 100 維)、**去相關性**(主成分彼此正交)、**視覺化**(降到 2D)。

⚠️ **PCA 必須先標準化!** 如果一個欄位是金額(10⁵)、一個是次數(10¹),不標準化的話**金額欄位會主導 PC1**,結果失準。

判讀:特徵值 λ1=6, λ2=3, λ3=1 → 解釋變異比例 60%/30%/10%。前 2 個主成分解釋 90%,可降到 2 維。`,
    keyTerms: [
      { term: "主成分", def: "資料變異最大的方向(線性組合)" },
      { term: "特徵值 λ", def: "該主成分解釋的變異量大小" },
      { term: "解釋變異比例", def: "λᵢ / Σλ" },
    ],
    confusions: [
      "**PCA 之前必須標準化** ← 必考(否則大尺度欄位主導)",
      "PCA 不能讓 SVM 自動處理非線性(那是 Kernel)",
      "降維不一定提升準確率,但可降低過擬合與訓練時間",
    ],
    examPattern: "題目情境「不同欄位量級差很大,PCA 後第一主成分被某欄位主導」→ 答「**先標準化**」。",
    relatedTopics: ["PCA", "演算法"],
    relatedQids: ["s2q29", "s1q45"],
  },

  // ============ 科目2 Ch7: Python 必殺技 ============
  {
    id: "s2c7-1",
    chapter: "s2c7",
    order: 1,
    title: "pandas 必會語法",
    emoji: "🐼",
    prerequisites: [],
    intuition: `iPAS 中級 50 題裡有 ~10 題 Python,**全都是 pandas / sklearn / seaborn 操作**。這是您**最容易拿分**的地方。

\`\`\`python
# 敘述性統計 — 看資料樣貌
df.describe()              # ⭐ 一次給平均、std、4 分位數
df['col'].sum() / mean()
df.head()

# 缺失值
df.isna().sum()            # ⭐ 對的方法(不是 isnull/isnan/isNaN)
df['col'].fillna(0)        # 用 0 補
df['col'].fillna(df['col'].mean())

# 型態轉換(含 NaN)
df['Year'].astype('Int64') # ⭐ 大寫 I,可容納 NaN
df['Year'].astype(int)     # 小寫 i,有 NaN 會錯

# 分組聚合
df.groupby('Platform')['Sales'].sum()
df.groupby('Platform')['Sales'].sum().plot(kind='bar')

# 篩選
df.nlargest(5, 'Sales')    # ⭐ 取前 5 大
df[df['Sales'] > 100]
\`\`\``,
    keyTerms: [
      { term: "describe()", def: "敘述性統計" },
      { term: "isna()", def: "正確的缺失值偵測(不是 isnull、isnan、isNaN)" },
      { term: "Int64", def: "大寫 I,可容納 NaN 的整數型" },
      { term: "nlargest", def: "取前 N 大" },
    ],
    confusions: [
      "缺失值正確方法是 **isna()**(isnull 也行,但 isNaN/isnan 是錯的)",
      "**保留 NaN 的整數轉型用 'Int64'(大寫)**,不是 fillna(0).astype(int)",
    ],
    examPattern: "題目給程式碼選項,挑出語法正確的。注意大小寫、方法名、引號格式。",
    relatedTopics: ["Python"],
    relatedQids: ["s2q2", "s2q43", "s2q44", "s2q49"],
  },
  {
    id: "s2c7-2",
    chapter: "s2c7",
    order: 2,
    title: "sklearn / statsmodels 順序陷阱",
    emoji: "🧪",
    prerequisites: ["s2c7-1"],
    intuition: `迴歸分析有兩套常用工具,**API 順序剛好相反**,這是命題愛挖的坑:

\`\`\`python
# sklearn — X 在前,y 在後
from sklearn.linear_model import LinearRegression
reg = LinearRegression().fit(X, y)   # ⭐ fit(X, y)
reg.coef_         # 係數(不含截距)
reg.intercept_    # 截距項

# statsmodels — y 在前,X 在後 (跟 sklearn 反!)
import statsmodels.api as sm
X2 = sm.add_constant(X)               # ⭐ 加截距項
model = sm.OLS(y, X2).fit()           # ⭐ OLS(y, X)
print(model.summary())                # 完整統計報表(含 p 值)
\`\`\`

讀 OLS summary:
- **R-squared**:模型解釋變異的比例(0.85 = 85% 變異被解釋)
- **P>|t|**:每個係數的 p 值,< 0.05 才顯著
- **coef**:係數估計值;**const** 行 = 截距
`,
    keyTerms: [
      { term: "sklearn fit(X, y)", def: "X 在前" },
      { term: "statsmodels OLS(y, X)", def: "y 在前(相反!)" },
      { term: "add_constant", def: "幫 X 加截距項欄位" },
      { term: "R-squared", def: "解釋變異比例" },
    ],
    confusions: [
      "**sklearn fit(X, y)** vs **OLS(y, X)** 順序相反 ← 必考",
      "OLS 要先 add_constant 才有截距項",
      "R² = 0.85 表示「**85% 的變異被模型解釋**」,不是「準確率 85%」",
    ],
    examPattern: "情境題給程式碼,挑出正確的 fit 順序。讀 summary 表答數值問題。",
    relatedTopics: ["Python"],
    relatedQids: ["s2q50"],
  },
];
