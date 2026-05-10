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
  { id: "s1c8", subject: 1, order: 8, name: "訓練實務", desc: "防過擬合 + 超參數調校", color: "#dc2626" },
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
    diagram: `<svg viewBox="0 0 380 220" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="TF-IDF:常見詞 vs 稀有詞權重">
  <g font-size="11">
    <text x="190" y="18" text-anchor="middle" font-weight="600" fill="currentColor">TF × IDF:常見詞被壓低、稀有詞被放大</text>
    <text x="95" y="40" text-anchor="middle" font-weight="600" fill="currentColor">常見詞「的」</text>
    <line x1="20" y1="180" x2="170" y2="180" stroke="#9ca3af"/>
    <rect x="35" y="60" width="30" height="120" fill="#06b6d4" fill-opacity=".5" stroke="#06b6d4"/>
    <text x="50" y="195" text-anchor="middle" font-size="10" fill="#6b7280">TF 高</text>
    <rect x="80" y="170" width="30" height="10" fill="#a855f7" fill-opacity=".5" stroke="#a855f7"/>
    <text x="95" y="195" text-anchor="middle" font-size="10" fill="#6b7280">IDF≈0</text>
    <rect x="125" y="160" width="30" height="20" fill="#ef4444" fill-opacity=".5" stroke="#ef4444"/>
    <text x="140" y="195" text-anchor="middle" font-size="10" fill="#6b7280">TF·IDF 低</text>
    <text x="285" y="40" text-anchor="middle" font-weight="600" fill="currentColor">稀有詞「AI」</text>
    <line x1="210" y1="180" x2="360" y2="180" stroke="#9ca3af"/>
    <rect x="225" y="120" width="30" height="60" fill="#06b6d4" fill-opacity=".5" stroke="#06b6d4"/>
    <text x="240" y="195" text-anchor="middle" font-size="10" fill="#6b7280">TF 中</text>
    <rect x="270" y="60" width="30" height="120" fill="#a855f7" fill-opacity=".5" stroke="#a855f7"/>
    <text x="285" y="195" text-anchor="middle" font-size="10" fill="#6b7280">IDF 高</text>
    <rect x="315" y="70" width="30" height="110" fill="#ef4444" fill-opacity=".5" stroke="#ef4444"/>
    <text x="330" y="195" text-anchor="middle" font-size="10" fill="#6b7280">TF·IDF 高</text>
    <text x="190" y="215" text-anchor="middle" font-size="10" fill="#6b7280">公式:IDF = log(總文章數 / 含該詞文章數),稀有詞分數高</text>
  </g>
</svg>`,
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
    diagram: `<svg viewBox="0 0 380 200" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="N-gram 滑動視窗">
  <g font-size="11">
    <text x="190" y="18" text-anchor="middle" font-weight="600" fill="currentColor">N-gram 滑動視窗:只看前 N-1 個詞</text>
    <text x="190" y="34" text-anchor="middle" font-size="10" fill="#6b7280">硬傷:抓不到長距離依賴</text>
    <text x="20" y="78" font-size="10" fill="#06b6d4" font-weight="600">N=2</text>
    <g font-size="13" text-anchor="middle">
      <text x="60" y="80" fill="#9ca3af">他</text>
      <text x="100" y="80" fill="#9ca3af">從</text>
      <text x="145" y="80" fill="#9ca3af">台北</text>
      <text x="190" y="80" fill="#9ca3af">飛</text>
      <text x="225" y="80" fill="currentColor">到</text>
      <text x="280" y="80" fill="#ef4444">___</text>
    </g>
    <rect x="208" y="65" width="42" height="20" fill="none" stroke="#06b6d4" stroke-width="2" rx="3"/>
    <text x="20" y="138" font-size="10" fill="#3b82f6" font-weight="600">N=3</text>
    <g font-size="13" text-anchor="middle">
      <text x="60" y="140" fill="#9ca3af">他</text>
      <text x="100" y="140" fill="#9ca3af">從</text>
      <text x="145" y="140" fill="#9ca3af">台北</text>
      <text x="190" y="140" fill="currentColor">飛</text>
      <text x="225" y="140" fill="currentColor">到</text>
      <text x="280" y="140" fill="#ef4444">___</text>
    </g>
    <rect x="172" y="125" width="78" height="20" fill="none" stroke="#3b82f6" stroke-width="2" rx="3"/>
    <text x="190" y="180" text-anchor="middle" font-size="10" fill="#6b7280">「他、從、台北」這些遠處資訊都看不到 → Transformer 才能解</text>
  </g>
</svg>`,
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
    diagram: `<svg viewBox="0 0 380 200" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="BERT 雙向 vs GPT 單向">
  <defs>
    <marker id="bert-arr" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto">
      <path d="M 0 0 L 10 5 L 0 10 z" fill="#3b82f6"/>
    </marker>
    <marker id="gpt-arr" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto">
      <path d="M 0 0 L 10 5 L 0 10 z" fill="#f97316"/>
    </marker>
  </defs>
  <g font-size="11">
    <text x="190" y="18" text-anchor="middle" font-weight="600" fill="currentColor">BERT 雙向理解 vs GPT 單向生成</text>
    <text x="95" y="50" text-anchor="middle" font-weight="600" fill="#f97316">GPT(單向 →)</text>
    <g font-size="13" text-anchor="middle">
      <text x="30" y="90" fill="currentColor">我</text>
      <text x="65" y="90" fill="currentColor">今天</text>
      <text x="110" y="90" fill="currentColor">想</text>
      <text x="155" y="90" fill="#ef4444">?</text>
    </g>
    <line x1="38" y1="100" x2="148" y2="100" stroke="#f97316" stroke-width="1.5" marker-end="url(#gpt-arr)"/>
    <text x="95" y="120" text-anchor="middle" font-size="10" fill="#6b7280">只能由左看到右</text>
    <text x="95" y="135" text-anchor="middle" font-size="10" fill="#6b7280">擅長「生成」下一字</text>
    <line x1="190" y1="55" x2="190" y2="180" stroke="#9ca3af" stroke-dasharray="3,3"/>
    <text x="285" y="50" text-anchor="middle" font-weight="600" fill="#3b82f6">BERT(雙向 ↔)</text>
    <g font-size="13" text-anchor="middle">
      <text x="220" y="90" fill="currentColor">我</text>
      <text x="255" y="90" fill="currentColor">今天</text>
      <text x="297" y="90" fill="#ef4444">[MASK]</text>
      <text x="345" y="90" fill="currentColor">蘋果</text>
    </g>
    <line x1="290" y1="100" x2="240" y2="100" stroke="#3b82f6" stroke-width="1.5" marker-end="url(#bert-arr)"/>
    <line x1="305" y1="100" x2="335" y2="100" stroke="#3b82f6" stroke-width="1.5" marker-end="url(#bert-arr)"/>
    <text x="285" y="120" text-anchor="middle" font-size="10" fill="#6b7280">前後文同時看 → 猜 [MASK]</text>
    <text x="285" y="135" text-anchor="middle" font-size="10" fill="#6b7280">擅長「理解」整句</text>
    <text x="190" y="180" text-anchor="middle" font-size="10" fill="#6b7280" font-style="italic">MLM:隨機遮罩 + 雙向預測 ← 必考</text>
  </g>
</svg>`,
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
    diagram: `<svg viewBox="0 0 400 180" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="RAG 流程:檢索 + 生成">
  <defs>
    <marker id="rag-arr" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto">
      <path d="M 0 0 L 10 5 L 0 10 z" fill="#6b7280"/>
    </marker>
  </defs>
  <g font-size="11">
    <text x="200" y="18" text-anchor="middle" font-weight="600" fill="currentColor">RAG = 先檢索 → 再讓 LLM 看文件作答</text>
    <text x="200" y="32" text-anchor="middle" font-size="10" fill="#6b7280">解決「知識過時」與「模型幻覺」</text>
    <rect x="10" y="60" width="60" height="40" rx="6" fill="#3b82f6" fill-opacity=".15" stroke="#3b82f6"/>
    <text x="40" y="78" text-anchor="middle" font-weight="600" fill="currentColor">使用者</text>
    <text x="40" y="92" text-anchor="middle" font-size="10" fill="currentColor">問題</text>
    <line x1="72" y1="80" x2="98" y2="80" stroke="#6b7280" stroke-width="1.5" marker-end="url(#rag-arr)"/>
    <rect x="100" y="60" width="80" height="40" rx="6" fill="#06b6d4" fill-opacity=".15" stroke="#06b6d4"/>
    <text x="140" y="76" text-anchor="middle" font-weight="600" fill="currentColor">① 檢索</text>
    <text x="140" y="92" text-anchor="middle" font-size="10" fill="#6b7280">向量相似度</text>
    <ellipse cx="140" cy="135" rx="22" ry="6" fill="#06b6d4" fill-opacity=".25" stroke="#06b6d4"/>
    <path d="M 118 135 L 118 155 A 22 6 0 0 0 162 155 L 162 135 Z" fill="#06b6d4" fill-opacity=".15" stroke="#06b6d4"/>
    <ellipse cx="140" cy="135" rx="22" ry="6" fill="#06b6d4" fill-opacity=".40" stroke="#06b6d4"/>
    <line x1="140" y1="100" x2="140" y2="129" stroke="#06b6d4" stroke-dasharray="3,3"/>
    <text x="140" y="172" text-anchor="middle" font-size="10" fill="#6b7280">企業文件 / 知識庫</text>
    <line x1="182" y1="80" x2="208" y2="80" stroke="#6b7280" stroke-width="1.5" marker-end="url(#rag-arr)"/>
    <rect x="210" y="60" width="80" height="40" rx="6" fill="#a855f7" fill-opacity=".15" stroke="#a855f7"/>
    <text x="250" y="76" text-anchor="middle" font-weight="600" fill="currentColor">② LLM</text>
    <text x="250" y="92" text-anchor="middle" font-size="10" fill="#6b7280">看文件作答</text>
    <line x1="292" y1="80" x2="318" y2="80" stroke="#6b7280" stroke-width="1.5" marker-end="url(#rag-arr)"/>
    <rect x="320" y="60" width="70" height="40" rx="6" fill="#10b981" fill-opacity=".15" stroke="#10b981"/>
    <text x="355" y="78" text-anchor="middle" font-weight="600" fill="currentColor">答案</text>
    <text x="355" y="92" text-anchor="middle" font-size="10" fill="#6b7280">+ 引用</text>
  </g>
</svg>`,
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
    diagram: `<svg viewBox="0 0 380 240" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="CLIP 圖文對比學習矩陣">
  <g font-size="11">
    <text x="190" y="18" text-anchor="middle" font-weight="600" fill="currentColor">CLIP:配對的「圖×文」向量靠近,不配對的拉遠</text>
    <g font-size="10" text-anchor="middle" fill="currentColor">
      <text x="120" y="50">a cat</text>
      <text x="170" y="50">a dog</text>
      <text x="220" y="50">a car</text>
      <text x="270" y="50">a tree</text>
    </g>
    <g font-size="18" text-anchor="middle">
      <text x="80" y="82">🐈</text>
      <text x="80" y="122">🐕</text>
      <text x="80" y="162">🚗</text>
      <text x="80" y="202">🌳</text>
    </g>
    <rect x="100" y="60" width="40" height="30" fill="#10b981" fill-opacity=".55" stroke="#10b981"/>
    <rect x="150" y="60" width="40" height="30" fill="#9ca3af" fill-opacity=".15" stroke="#9ca3af"/>
    <rect x="200" y="60" width="40" height="30" fill="#9ca3af" fill-opacity=".15" stroke="#9ca3af"/>
    <rect x="250" y="60" width="40" height="30" fill="#9ca3af" fill-opacity=".15" stroke="#9ca3af"/>
    <rect x="100" y="100" width="40" height="30" fill="#9ca3af" fill-opacity=".15" stroke="#9ca3af"/>
    <rect x="150" y="100" width="40" height="30" fill="#10b981" fill-opacity=".55" stroke="#10b981"/>
    <rect x="200" y="100" width="40" height="30" fill="#9ca3af" fill-opacity=".15" stroke="#9ca3af"/>
    <rect x="250" y="100" width="40" height="30" fill="#9ca3af" fill-opacity=".15" stroke="#9ca3af"/>
    <rect x="100" y="140" width="40" height="30" fill="#9ca3af" fill-opacity=".15" stroke="#9ca3af"/>
    <rect x="150" y="140" width="40" height="30" fill="#9ca3af" fill-opacity=".15" stroke="#9ca3af"/>
    <rect x="200" y="140" width="40" height="30" fill="#10b981" fill-opacity=".55" stroke="#10b981"/>
    <rect x="250" y="140" width="40" height="30" fill="#9ca3af" fill-opacity=".15" stroke="#9ca3af"/>
    <rect x="100" y="180" width="40" height="30" fill="#9ca3af" fill-opacity=".15" stroke="#9ca3af"/>
    <rect x="150" y="180" width="40" height="30" fill="#9ca3af" fill-opacity=".15" stroke="#9ca3af"/>
    <rect x="200" y="180" width="40" height="30" fill="#9ca3af" fill-opacity=".15" stroke="#9ca3af"/>
    <rect x="250" y="180" width="40" height="30" fill="#10b981" fill-opacity=".55" stroke="#10b981"/>
    <rect x="305" y="70" width="14" height="14" fill="#10b981" fill-opacity=".55" stroke="#10b981"/>
    <text x="323" y="82" font-size="10" fill="currentColor">配對(拉近)</text>
    <rect x="305" y="94" width="14" height="14" fill="#9ca3af" fill-opacity=".15" stroke="#9ca3af"/>
    <text x="323" y="106" font-size="10" fill="currentColor">不配對(推開)</text>
    <text x="190" y="232" text-anchor="middle" font-size="10" fill="#6b7280">對角線=正樣本,訓練後可零樣本分類(任何文字 → 找最相似的圖)</text>
  </g>
</svg>`,
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
    diagram: `<svg viewBox="0 0 380 200" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Data Drift:訓練分佈 vs 上線後分佈">
  <defs>
    <marker id="drift-arr" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto">
      <path d="M 0 0 L 10 5 L 0 10 z" fill="#ef4444"/>
    </marker>
  </defs>
  <g font-size="11">
    <text x="190" y="18" text-anchor="middle" font-weight="600" fill="currentColor">輸入分佈隨時間變了 → 模型準確率下滑</text>
    <line x1="135" y1="48" x2="245" y2="48" stroke="#ef4444" stroke-width="1.5" stroke-dasharray="4,3" marker-end="url(#drift-arr)"/>
    <text x="190" y="42" text-anchor="middle" font-size="10" font-weight="600" fill="#ef4444">分佈漂移!</text>
    <line x1="20" y1="170" x2="360" y2="170" stroke="#9ca3af"/>
    <text x="190" y="190" text-anchor="middle" font-size="10" fill="#6b7280">特徵值</text>
    <path d="M 30 170 C 70 170, 95 90, 135 75 C 175 90, 200 170, 240 170 Z" fill="#3b82f6" fill-opacity=".30" stroke="#3b82f6" stroke-width="1.5"/>
    <text x="135" y="65" text-anchor="middle" font-weight="600" fill="#3b82f6">訓練時</text>
    <path d="M 140 170 C 180 170, 205 90, 245 75 C 285 90, 310 170, 350 170 Z" fill="#f97316" fill-opacity=".30" stroke="#f97316" stroke-width="1.5"/>
    <text x="245" y="65" text-anchor="middle" font-weight="600" fill="#f97316">上線後</text>
    <text x="190" y="158" text-anchor="middle" font-size="9" fill="#6b7280" font-style="italic">用 KL 散度 / PSI 量化兩分佈差距</text>
  </g>
</svg>`,
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

  {
    id: "s1c6-2",
    chapter: "s1c6",
    order: 2,
    title: "上線架構 — 容器化 × Kubernetes × CI/CD × 水平擴展",
    prerequisites: ["s1c6-1"],
    diagram: `<svg viewBox="0 0 380 240" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="容器化 + Kubernetes 編排 + 水平自動擴展示意">
  <!-- CI/CD pipeline strip -->
  <g transform="translate(10,15)">
    <text x="180" y="0" text-anchor="middle" font-size="11" font-weight="600" fill="currentColor">CI/CD 流水線</text>
    <g transform="translate(0,8)" font-size="9" text-anchor="middle">
      <rect x="0"   y="0" width="68" height="24" fill="#3b82f6" fill-opacity=".15" stroke="#3b82f6"/>
      <text x="34"  y="16" fill="currentColor">Commit</text>
      <text x="78"  y="16" fill="#9ca3af">→</text>
      <rect x="86"  y="0" width="68" height="24" fill="#3b82f6" fill-opacity=".15" stroke="#3b82f6"/>
      <text x="120" y="16" fill="currentColor">Build+Test</text>
      <text x="164" y="16" fill="#9ca3af">→</text>
      <rect x="172" y="0" width="68" height="24" fill="#10b981" fill-opacity=".15" stroke="#10b981"/>
      <text x="206" y="16" fill="currentColor">Container</text>
      <text x="250" y="16" fill="#9ca3af">→</text>
      <rect x="258" y="0" width="100" height="24" fill="#f59e0b" fill-opacity=".15" stroke="#f59e0b"/>
      <text x="308" y="16" fill="currentColor">K8s 部署</text>
    </g>
    <text x="180" y="48" text-anchor="middle" font-size="9" fill="currentColor">每次 Commit 自動觸發 Build → 測試 → 打 image → 上線</text>
  </g>
  <!-- Kubernetes orchestration -->
  <g transform="translate(10,90)">
    <text x="180" y="0" text-anchor="middle" font-size="11" font-weight="600" fill="currentColor">Kubernetes 水平擴展(同一服務多副本)</text>
    <!-- Load balancer -->
    <g transform="translate(150,15)">
      <rect x="0" y="0" width="60" height="22" fill="#6366f1" fill-opacity=".2" stroke="#6366f1"/>
      <text x="30" y="15" text-anchor="middle" font-size="10" fill="currentColor">Load LB</text>
    </g>
    <text x="180" y="50" text-anchor="middle" font-size="9" fill="currentColor">10,000 RPS 流量</text>
    <!-- Pods -->
    <g transform="translate(0,60)" font-size="9" text-anchor="middle">
      <line x1="180" y1="-5" x2="40"  y2="10" stroke="#9ca3af"/>
      <line x1="180" y1="-5" x2="115" y2="10" stroke="#9ca3af"/>
      <line x1="180" y1="-5" x2="190" y2="10" stroke="#9ca3af"/>
      <line x1="180" y1="-5" x2="265" y2="10" stroke="#9ca3af"/>
      <line x1="180" y1="-5" x2="340" y2="10" stroke="#9ca3af"/>
      <g fill="#10b981" fill-opacity=".2" stroke="#10b981">
        <rect x="14"  y="10" width="52" height="34"/>
        <rect x="89"  y="10" width="52" height="34"/>
        <rect x="164" y="10" width="52" height="34"/>
        <rect x="239" y="10" width="52" height="34"/>
        <rect x="314" y="10" width="52" height="34"/>
      </g>
      <g fill="currentColor">
        <text x="40"  y="32">Pod 1</text>
        <text x="115" y="32">Pod 2</text>
        <text x="190" y="32">Pod 3</text>
        <text x="265" y="32">Pod 4</text>
        <text x="340" y="32">Pod 5</text>
      </g>
    </g>
    <!-- Auto-scale arrow -->
    <g transform="translate(0,118)">
      <text x="180" y="0" text-anchor="middle" font-size="9" fill="#f59e0b" font-weight="600">↑ CPU&gt;70% → Auto Scaling 自動加 Pod ↑</text>
    </g>
  </g>
</svg>`,
    intuition: `**問題**:AI 模型訓練完了,**怎麼把它變成「能撐 10,000 次/秒、不會掛掉、能持續更新」的線上服務?**

答案是 4 件事的組合:**容器化 → CI/CD → Kubernetes → 水平擴展**。

---

**① 容器化(Containerization)— 把模型+環境打包成一個「即裝即用」的盒子**

> 沒容器:「我電腦跑得起來啊!」(各種依賴版本問題)
> 有容器(Docker):**整個運行環境**(Python、CUDA、模型權重)封裝成 image,**搬到哪台機器都跑得起來**

---

**② CI/CD — 程式一改就自動測試 + 自動部署**

| 縮寫 | 全名 | 做什麼 |
|---|---|---|
| **CI** | Continuous Integration | **每次 Commit** 都自動觸發:Build → 跑單元測試 → 靜態分析 |
| **CD** | Continuous Delivery/Deployment | 通過測試的 image **自動推到測試環境**(或正式環境) |

> 反例(s1q29 陷阱):「每天**固定時間手動合併**」「**等訓練完才合併**」 → 都不是 CI,因為不是「每次 Commit 觸發」

---

**③ Kubernetes(K8s)— 容器的「總指揮」**

K8s **不是訓練平台、不是儲存系統、不是 GPU 加速器**(s1q13 陷阱選項全錯)。
它的核心職責:**部署、擴展、運行環境的協調管理**。

> 想像:K8s 是航空塔台,每個容器是飛機 — 塔台告訴你哪台起飛、哪台降落、哪台需要備援

---

**④ 水平擴展(Horizontal Scaling)+ Auto Scaling — 流量大就多開幾份**

| 擴展方式 | 做法 | 缺點 |
|---|---|---|
| **垂直(Vertical)** | 換更強的單機 | **單點失效、成本爆炸、有上限** |
| **水平(Horizontal)** | 多開幾份服務副本(Pod) | 需要 LB 分流,但**沒上限、有冗餘** |

**Auto Scaling**:設條件(如 CPU > 70%)→ K8s 自動多開 Pod,流量降下去就回收。**這是高 RPS + 高可用的標準解**(s1q31)。

---

**🚨 高 RPS 場景的 4 個陷阱選項**(s1q31)

| 陷阱 | 為什麼錯 |
|---|---|
| 「依賴**單台**超強伺服器(垂直擴展)」 | **單點失效、成本爆炸** |
| 「**限制最大連線數**避免過載」 | 沒解決問題,只是把使用者擋在外面 |
| 「**增加 Batch 一次處理上千筆**」 | 提高**延遲**(每筆要等湊滿才處理),不適合即時推論 |`,
    keyTerms: [
      { term: "容器(Container)", def: "把**程式碼+依賴+作業系統環境**打包成一個輕量盒子,**到哪台機器都能跑**。代表工具:Docker。對比:VM 較重(整套 OS),容器只共用 Kernel。" },
      { term: "Image vs Container", def: "**Image = 食譜+材料**(靜態的盒子模板);**Container = 照食譜做出來的菜**(運行中的實例)。一個 Image 可以開出 N 個 Container。" },
      { term: "Kubernetes(K8s)", def: "**容器編排**平台 — 自動處理「哪台機器跑哪個容器、掛了自動重啟、流量大自動擴展」。**不是**訓練平台、不是 GPU 加速器、不是儲存系統(s1q13 陷阱)。" },
      { term: "Pod", def: "K8s 最小部署單位,**一個 Pod 包 1 個或多個容器**(通常 1 個)。水平擴展就是「同一個服務開多個 Pod」。" },
      { term: "CI(Continuous Integration)", def: "**Continuous = 持續、Integration = 整合**。每次 Commit **自動觸發** Build + 測試 + 程式碼分析,目的:讓問題**早被發現**。關鍵字「**每次提交**」「**自動**」。" },
      { term: "CD(Continuous Delivery / Deployment)", def: "**Delivery**:自動把通過測試的版本推到「準正式」環境,等人按鈕上線;**Deployment**:**直接**自動上正式環境。CD 是 CI 的延伸。" },
      { term: "水平擴展(Horizontal Scaling)", def: "**橫向加機器** — 1 台變 5 台、5 台變 50 台。對比 **垂直擴展(Vertical)**:把單機升級成更強(換 CPU、加記憶體)。水平擴展**沒上限+有冗餘**,垂直**有上限+單點失效**。" },
      { term: "Auto Scaling(自動彈性伸縮)", def: "依照指標(如 CPU > 70%、RPS > 5000)**自動加減 Pod 數量**。流量峰值來就擴、過了就縮 → 省成本 + 不會掛。是高 RPS + 高可用的**標準解**。" },
      { term: "Load Balancer(負載平衡器)", def: "**把流量分散到多個 Pod**。沒有它,水平擴展沒意義 — 流量還是全擠到第一個。" },
    ],
    confusions: [
      "**Kubernetes 不是訓練平台、不是儲存、不是 GPU 加速器** — 它是**容器編排器**(s1q13 ABCD 全是常見陷阱)",
      "**CI 的關鍵是「每次提交自動觸發」** — 「每天定時手動合併」「等訓練完才合併」都不是 CI(s1q29)",
      "**水平擴展才是高 RPS 解,垂直擴展是陷阱** — 垂直= 換更強單機,有上限+單點失效(s1q31)",
      "**「限制連線數」「加大 Batch」不是高可用解法** — 前者擋使用者,後者增延遲(s1q31)",
      "Image ≠ Container:Image 是模板,Container 是運行中的實例",
      "**CD 兩種解讀:Delivery(到 staging 等人按)vs Deployment(直接上 prod)** — 前者較常見,後者較激進",
    ],
    examPattern: `**3 種考法**:

**① Kubernetes 核心職責是?** → 「**部署、擴展、運行環境協調**」(s1q13)
- 陷阱:訓練、儲存、GPU 加速 — **都不是 K8s 做的**

**② CI 最佳實踐?** → 「**每次 Commit 自動觸發 Build + 測試**」(s1q29)
- 陷阱:每日定時手動、等訓練完合併、定時批次部署

**③ 高 RPS 服務架構?** → 「**容器化 + 水平擴展 + Auto Scaling**」(s1q31)
- 陷阱:垂直擴展、限連線數、加大 Batch`,
    relatedTopics: ["MLOps"],
    relatedQids: ["s1q13", "s1q29", "s1q31"],
  },

  {
    id: "s1c6-3",
    chapter: "s1c6",
    order: 3,
    title: "模型治理 — Model Registry × 不可否認性 × 進階監控",
    prerequisites: ["s1c6-2"],
    diagram: `<svg viewBox="0 0 380 250" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Model Registry 版本樹 + 不可否認性雜湊鏈">
  <!-- Model Registry -->
  <g transform="translate(10,15)">
    <text x="180" y="0" text-anchor="middle" font-size="11" font-weight="600" fill="currentColor">Model Registry — 集中管理模型版本</text>
    <g transform="translate(0,12)" font-size="10">
      <!-- v1 -->
      <rect x="10"  y="0" width="100" height="50" fill="#9ca3af" fill-opacity=".15" stroke="#9ca3af"/>
      <text x="60"  y="16" text-anchor="middle" fill="currentColor" font-weight="600">v1.0</text>
      <text x="60"  y="30" text-anchor="middle" font-size="9" fill="currentColor">F1=0.82</text>
      <text x="60"  y="42" text-anchor="middle" font-size="9" fill="#9ca3af">archived</text>
      <!-- arrow -->
      <text x="118" y="28" font-size="14" fill="#9ca3af">→</text>
      <!-- v2 -->
      <rect x="135" y="0" width="100" height="50" fill="#9ca3af" fill-opacity=".15" stroke="#9ca3af"/>
      <text x="185" y="16" text-anchor="middle" fill="currentColor" font-weight="600">v1.1</text>
      <text x="185" y="30" text-anchor="middle" font-size="9" fill="currentColor">F1=0.85</text>
      <text x="185" y="42" text-anchor="middle" font-size="9" fill="#9ca3af">staging</text>
      <text x="243" y="28" font-size="14" fill="#9ca3af">→</text>
      <!-- v3 production -->
      <rect x="260" y="0" width="100" height="50" fill="#10b981" fill-opacity=".25" stroke="#10b981" stroke-width="2"/>
      <text x="310" y="16" text-anchor="middle" fill="currentColor" font-weight="700">v2.0</text>
      <text x="310" y="30" text-anchor="middle" font-size="9" fill="currentColor">F1=0.91</text>
      <text x="310" y="42" text-anchor="middle" font-size="9" fill="#10b981" font-weight="600">production ✓</text>
    </g>
    <text x="180" y="78" text-anchor="middle" font-size="9" fill="currentColor">每版記錄:訓練資料、超參數、metric、部署狀態 — 出事可秒回退</text>
  </g>
  <!-- Non-repudiation chain -->
  <g transform="translate(10,108)">
    <text x="180" y="0" text-anchor="middle" font-size="11" font-weight="600" fill="currentColor">不可否認性 — 每筆推論留 Hash + 數位簽章</text>
    <g transform="translate(0,12)" font-size="10">
      <!-- request -->
      <rect x="10" y="0" width="80" height="60" fill="#3b82f6" fill-opacity=".15" stroke="#3b82f6"/>
      <text x="50" y="16" text-anchor="middle" fill="currentColor" font-weight="600">推論請求</text>
      <text x="50" y="32" text-anchor="middle" font-size="9" fill="currentColor">Input: X</text>
      <text x="50" y="46" text-anchor="middle" font-size="9" fill="currentColor">Output: Y</text>
      <text x="98" y="34" font-size="14" fill="#9ca3af">→</text>
      <!-- hash -->
      <rect x="115" y="0" width="100" height="60" fill="#f59e0b" fill-opacity=".15" stroke="#f59e0b"/>
      <text x="165" y="16" text-anchor="middle" fill="currentColor" font-weight="600">SHA-256</text>
      <text x="165" y="30" text-anchor="middle" font-size="9" fill="currentColor">Hash(X+Y)</text>
      <text x="165" y="46" text-anchor="middle" font-size="9" fill="#f59e0b">a3f7c9...</text>
      <text x="223" y="34" font-size="14" fill="#9ca3af">→</text>
      <!-- sign -->
      <rect x="240" y="0" width="120" height="60" fill="#ef4444" fill-opacity=".15" stroke="#ef4444"/>
      <text x="300" y="16" text-anchor="middle" fill="currentColor" font-weight="600">數位簽章</text>
      <text x="300" y="30" text-anchor="middle" font-size="9" fill="currentColor">私鑰簽 Hash</text>
      <text x="300" y="46" text-anchor="middle" font-size="9" fill="#ef4444">事後不可否認</text>
    </g>
    <text x="180" y="80" text-anchor="middle" font-size="9" fill="currentColor">日後稽核:用公鑰驗章 → 確認此推論「確實由本系統產生、未被竄改」</text>
  </g>
</svg>`,
    intuition: `**模型上線後的「治理」三件事**:版本管得清、稽核留得住、漂移看得見。

---

**① Model Registry — 模型的「Git」**

集中管理**所有模型版本**:每版記錄訓練資料、超參數、評估指標、部署狀態(staging / production / archived)。

**為什麼要 Registry?**
- 出事可**秒回退**到上一版(不用重訓)
- 多人協作不會把對方的模型蓋掉
- 稽核知道「何時用了哪一版」

**🚨 別搞混(s1q15)**:
| 你以為是它做的 | 其實是別的工具做的 |
|---|---|
| 設定運算資源 / 環境 | **基礎設施(K8s、Terraform)** |
| 管理資料/特徵版本 | **Feature Store**(如 Feast) |
| 監控上線後表現 | **Monitoring(Prometheus、Grafana)** |
| ✅ **集中管理模型版本、訓練紀錄、部署狀態** | **Model Registry**(MLflow、SageMaker Registry) |

---

**② 不可否認性(Non-repudiation)— 金融/醫療必考**

**意思**:**事後不能賴帳**。AI 在某時間點用某模型對某輸入做了某預測 → 之後被告或被審查時,**有證據**可以證明「這推論真的是本系統做的、沒被偷改」。

**怎麼做?(s1q30 正解 = A)**
1. 每筆推論記錄 **Input + Output**
2. 算 **SHA-256 雜湊**(把資料壓成固定長度指紋)
3. 用機構**私鑰做數位簽章** → 日後拿**公鑰**就能驗

**❌ 陷阱選項**(全部跟「不可否認性」無關):
| 陷阱 | 它解決的其實是 |
|---|---|
| 「降低延遲到 100ms」 | **效能**問題 |
| 「增加備援」 | **可用性** |
| 「導入 LB」 | **負載平衡** |

---

**③ 進階漂移監控 — VAE 監控潛在空間(s1q42)**

當鑑別式模型(如 Transformer Classifier)上線後分類錯誤率上升,且發現是**輸入資料分佈變了**:
- 直接看原始輸入很難判斷是否漂移(高維)
- 用 **VAE** 把輸入壓到**低維潛在空間**,監控潛在分佈的變化 → 比單看 KL 散度更敏銳

> 為什麼不選「換 LR / 加模型容量 / 用 GAN 補資料」?
> 那些是**改模型架構**,不是**偵測漂移**。題目問的是「**應對**輸入分佈偏移」,先要**偵測到**才知道該不該動。`,
    keyTerms: [
      { term: "Model Registry(模型登記)", def: "**集中管理模型版本+元資料**的服務。每版記錄訓練資料來源、超參數、F1/AUC、部署狀態、誰建的。代表工具:**MLflow Registry、SageMaker Registry、Vertex AI Registry**。" },
      { term: "Feature Store(特徵庫)", def: "**集中管理「特徵」版本**(不是模型版本!)。例:把「使用者過去 30 天購買次數」這個特徵存起來,訓練+推論用同一份避免不一致。代表工具:**Feast、Tecton**。" },
      { term: "不可否認性(Non-repudiation)", def: "**Repudiate = 否認、賴帳**;**Non-repudiation = 不能賴帳**。資安四大要求之一(機密、完整、可用、不可否認)。AI 場景:每筆推論留**雜湊+簽章**,事後可證明此推論「確實由本系統做、沒被改」。" },
      { term: "雜湊(Hash)", def: "把任意長度資料**壓縮成固定長度指紋**(如 SHA-256 = 256 位元)。特性:輸入動一個字元,Hash 完全變;**單向不可逆**(知 Hash 無法回推原文)。" },
      { term: "數位簽章(Digital Signature)", def: "用**私鑰**對 Hash 加密 → 任何人用對應**公鑰**都能驗。能證明「**真的是本人簽的**(因為只有本人有私鑰)+ **內容沒被改**(因 Hash 對得上)」。" },
      { term: "VAE 監控潛在空間漂移", def: "把高維輸入用 **VAE 壓到低維潛在空間**,監控**該空間的分佈變化** → 比直接在原始輸入上算 KL 散度更敏銳,適合鑑別式模型(如 Transformer)上線後的漂移偵測。" },
      { term: "MLOps", def: "**Machine Learning Operations** = 把 DevOps 觀念套用到 ML 的整套實務。涵蓋:資料版本、模型版本、CI/CD、部署、監控、再訓練觸發。" },
    ],
    confusions: [
      "**Model Registry 只管「模型版本」**,不是設環境(K8s 才是)、不是管資料(Feature Store 才是)、不是監控(Prometheus 才是)(s1q15)",
      "**不可否認性 = Hash + 數位簽章**,**不是**「降低延遲」「加備援」「導入 LB」(s1q30)",
      "**Non-repudiation 是資安四要素之一**(C-I-A-N:機密 Confidentiality、完整 Integrity、可用 Availability、不可否認 Non-repudiation),AI 進金融/醫療必考",
      "**VAE 在 MLOps 裡的另一個用途 = 監控潛在空間漂移**(s1q42),不只是生成模型",
      "Model Registry vs Feature Store:**模型** vs **特徵**,別搞混",
      "雜湊**單向不可逆** — 知 SHA-256 結果不可能回推原文(密碼學基礎)",
    ],
    examPattern: `**3 種考法**:

**① Model Registry 用途?** → 「**集中管理模型版本、訓練紀錄、部署狀態**」(s1q15)
- 陷阱:管環境(K8s)、管特徵(Feature Store)、上線後監控(Monitoring)

**② 金融 AI 滿足「不可否認性」?** → 「**Hash + 數位簽章**」(s1q30)
- 陷阱:降延遲、備援、LB — 全是別的需求

**③ 鑑別式模型上線後分類錯誤率升 + 輸入分佈偏移?** → 「**用 VAE 監控潛在空間分佈**」(s1q42)
- 陷阱:加模型容量、換邏輯迴歸、用 GAN 生資料`,
    relatedTopics: ["MLOps"],
    relatedQids: ["s1q15", "s1q30", "s1q42"],
  },

  // ============ 科目1 Ch7: AI 風險治理 ============
  {
    id: "s1c7-1",
    chapter: "s1c7",
    order: 1,
    title: "漸進式部署 — 從單一場景擴展到全範圍",
    prerequisites: ["s1c6-1"],
    diagram: `<svg viewBox="0 0 380 220" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="漸進式部署三階段:單點 → 同類擴展 → 全範圍">
  <!-- Phase 1: 單點起步 -->
  <g transform="translate(60,110)">
    <circle r="14" fill="#10b981" fill-opacity=".25" stroke="#10b981" stroke-width="2"/>
    <circle r="4" fill="#10b981"/>
    <text y="42" text-anchor="middle" font-size="11" fill="currentColor" font-weight="600">Phase 1</text>
    <text y="56" text-anchor="middle" font-size="10" fill="currentColor">放射科</text>
    <text y="70" text-anchor="middle" font-size="10" fill="#10b981" font-weight="600">8% 影響面</text>
    <text y="-30" text-anchor="middle" font-size="10" fill="currentColor">單點起步</text>
  </g>
  <!-- Arrow 1 -->
  <g transform="translate(110,110)">
    <line x1="0" y1="0" x2="38" y2="0" stroke="#9ca3af" stroke-width="1.5"/>
    <polygon points="38,0 32,-4 32,4" fill="#9ca3af"/>
    <text x="19" y="-6" text-anchor="middle" font-size="9" fill="currentColor">穩定</text>
  </g>
  <!-- Phase 2: 同類擴展 -->
  <g transform="translate(180,110)">
    <circle r="32" fill="#3b82f6" fill-opacity=".15" stroke="#3b82f6" stroke-width="2"/>
    <circle cx="-12" cy="-8" r="4" fill="#3b82f6"/>
    <circle cx="12" cy="-8" r="4" fill="#3b82f6"/>
    <circle cx="0" cy="12" r="4" fill="#3b82f6"/>
    <text y="56" text-anchor="middle" font-size="11" fill="currentColor" font-weight="600">Phase 2</text>
    <text y="70" text-anchor="middle" font-size="10" fill="currentColor">+影像+病理</text>
    <text y="84" text-anchor="middle" font-size="10" fill="#3b82f6" font-weight="600">25% 影響面</text>
    <text y="-46" text-anchor="middle" font-size="10" fill="currentColor">同類擴展</text>
  </g>
  <!-- Arrow 2 -->
  <g transform="translate(228,110)">
    <line x1="0" y1="0" x2="38" y2="0" stroke="#9ca3af" stroke-width="1.5"/>
    <polygon points="38,0 32,-4 32,4" fill="#9ca3af"/>
    <text x="19" y="-6" text-anchor="middle" font-size="9" fill="currentColor">穩定</text>
  </g>
  <!-- Phase 3: 全範圍 -->
  <g transform="translate(310,110)">
    <circle r="50" fill="#f59e0b" fill-opacity=".15" stroke="#f59e0b" stroke-width="2"/>
    <g fill="#f59e0b">
      <circle cx="-22" cy="-18" r="3"/><circle cx="0" cy="-26" r="3"/><circle cx="22" cy="-18" r="3"/>
      <circle cx="-30" cy="0" r="3"/><circle cx="-10" cy="-4" r="3"/><circle cx="10" cy="-4" r="3"/><circle cx="30" cy="0" r="3"/>
      <circle cx="-22" cy="14" r="3"/><circle cx="0" cy="20" r="3"/><circle cx="22" cy="14" r="3"/>
      <circle cx="-10" cy="28" r="3"/><circle cx="10" cy="28" r="3"/>
    </g>
    <text y="74" text-anchor="middle" font-size="11" fill="currentColor" font-weight="600">Phase 3</text>
    <text y="88" text-anchor="middle" font-size="10" fill="currentColor">全院 12 科</text>
    <text y="102" text-anchor="middle" font-size="10" fill="#f59e0b" font-weight="600">100% 影響面</text>
    <text y="-64" text-anchor="middle" font-size="10" fill="currentColor">全範圍</text>
  </g>
  <!-- Bottom rule -->
  <g transform="translate(0,200)" font-size="10" fill="currentColor" text-anchor="middle">
    <text x="190">原則:每階段 = 風險可控 + 回饋可收斂 → 確認穩定才往下推</text>
  </g>
</svg>`,
    intuition: `**為什麼不能一次全推?**
新 AI 系統上線就像**新藥上市** — 你不會直接給所有病人吃,要先小範圍試一陣子,確認沒事才推全部。

**漸進式部署(Phased Rollout)= 風險可控 + 回饋可收斂**

兩個原則,缺一不可:

**① 風險可控(Risk Containment)**
- 先小範圍試,出事影響面小、能立刻回退
- 例:醫院 → 從**單一專科(放射科)**開始,而不是全院全科同時用

**② 回饋可收斂(Feedback Convergence)**
- 同一場景的回饋集中、可比對 → 知道該怎麼修
- 例:放射科都看胸腔片 → 醫師回饋有焦點 → 模型迭代有方向
- 反例:全院散開用 → 收到「腫瘤、骨折、心電圖、皮膚病」各種回饋 → 根本沒辦法歸納

---

**❌ 歷屆題愛挖的 3 個陷阱選項**

| 看起來合理的錯誤策略 | 為什麼錯 |
|---|---|
| 「先選病例量最高的單位(急診)」 | 急診情境太雜,**回饋無法收斂**(違反原則 ②) |
| 「只在夜班 / 離峰時段啟用」 | 樣本量不足、且夜班不代表整體 → **代表性不足** |
| 「全範圍都用,但設成提示模式」 | 看似低風險,**但沒人實際用 = 收不到真實回饋** |

---

**🔑 漸進部署四步驟口訣**

1. **單**(Single)— 一個科室、一個地區、一群人
2. **比**(Comparable)— 同類型場景內可比對
3. **退**(Reversible)— 出事能立刻關掉
4. **擴**(Scale)— 確認穩定後逐步推

---

**💡 軟體界對應做法 — Canary Release(金絲雀部署)**

> 礦工帶金絲雀下礦坑探瓦斯 — 鳥死了人快撤
> 軟體部署:先放 **1% 流量**試 → 沒事再 **5% → 10% → 50% → 100%**

跟漸進部署是同一個哲學,只是領域不同(軟體 vs 業務場景)。`,
    keyTerms: [
      { term: "漸進式部署(Phased Rollout)", def: "**Phase = 階段、Rollout = 推開**(像把地毯一段一段攤開)。新系統上線**不一次推全範圍**,先選小規模試,穩定再擴。類比:**新藥分期臨床試驗** — Ⅰ期幾十人 → Ⅱ期幾百人 → Ⅲ期幾千人。" },
      { term: "風險可控(Risk Containment)", def: "**Containment = 把風險「關住」**。出事時影響面小到可承受 + 能立刻回退。例:全院 12 科,先試 1 科 = 最壞情況只影響 **8%** 病人,不是 100%。" },
      { term: "回饋可收斂(Feedback Convergence)", def: "**Convergence = 收向同一點**(像幾條河匯成一條)。同類場景的回饋**集中、可比對**,才知道模型該怎麼修。例:都是「胸腔 X 光誤判」 = 一個方向修;若是「腫瘤+骨折+心電圖」混在一起 = 沒辦法歸納。" },
      { term: "金絲雀部署(Canary Release)", def: "**典故**:礦工帶金絲雀下礦坑,鳥對瓦斯敏感 — **鳥死了人快撤**。軟體做法:先放 **1%** 流量試 → 沒事再 **5% → 10% → 50% → 100%**。跟漸進部署同一哲學,差在「軟體領域用流量分」。" },
      { term: "A/B 測試 vs 漸進部署", def: "**A/B**:同時跑 A、B 兩版做對照(目的:**比較**哪版好);**漸進部署**:同一版逐步擴大覆蓋面(目的:**控風險**)。常一起用 — 先 A/B 證明 B 比較好,再用漸進式把 B 推到全範圍。" },
      { term: "代表性樣本(Representative Sample)", def: "試點族群的特徵分佈要**接近全體**,結論才能外推。反例:只在**夜班**測 = 樣本只代表夜班族群,推到日班會出事(因日班量大、急性病例多)。" },
    ],
    confusions: [
      "**「病例量高 = 適合先試」是錯的** ← 急診情境雜(內科+外科+兒科+精神…),**回饋無法收斂**(歷屆 s1q23 陷阱)",
      "**「離峰時段 = 安全」是錯的** ← 夜班樣本**不代表**全天,推到日班反而會出事",
      "**「全範圍體驗模式 = 漸進」是錯的** ← 看似低風險,但**沒人實際用 = 收不到真實回饋**(自編 #2 陷阱)",
      "「**收斂**」不是數學裡的「函數收斂」 — 這裡指**變因被收成同一類**(同科室、同病種、同流程),才能歸納出修改方向。",
      "漸進部署的核心是「**收斂**」不是「**多樣**」 — 先選同質場景,後期才擴多樣性。",
    ],
    examPattern: `題目固定情境:某機構(醫院、銀行、電商、製造)要部署 AI,問怎麼推最穩。

**關鍵字判斷**:
• 看到「衝擊降到最低 + 回饋可收斂」 → 永遠選**「從單一場景/科室/地區開始」**
• 看到「先選最忙 / 病例最多」「只在離峰」「全範圍體驗」 → **錯**(都是迷惑選項)
• 漸進部署本質 = **小範圍 → 證明 → 擴展**(不是「先選大量資料」)

**三個層次題型**:
1. **直接題**:給情境選正確策略 → 選「同質、小範圍」
2. **反向題**:問「並非漸進部署原則的是」 → 選「最大化樣本」「全範圍體驗」
3. **診斷題**:給一個方案,問「最大問題是什麼」 → 看哪個違反「風險可控」或「回饋可收斂」`,
    relatedTopics: ["AI風險"],
    relatedQids: ["s1q23", "s1q-a1", "s1q-a2", "s1q-a3", "s1q-a4", "s1q-a5", "s1q-a6", "s1q-a7"],
  },

  // ============ 科目1 Ch8: 訓練實務 ============
  {
    id: "s1c8-1",
    chapter: "s1c8",
    order: 1,
    title: "防過擬合三件套 — Cross-Validation × Early Stopping × Regularization",
    prerequisites: ["s1c5-1"],
    diagram: `<svg viewBox="0 0 380 240" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="訓練/驗證誤差曲線與早停點 + K-Fold 折分示意">
  <!-- Loss curves -->
  <g transform="translate(20,20)">
    <text x="120" y="0" text-anchor="middle" font-size="11" font-weight="600" fill="currentColor">訓練 vs 驗證 誤差曲線</text>
    <!-- axes -->
    <line x1="0" y1="140" x2="240" y2="140" stroke="#9ca3af" stroke-width="1.5"/>
    <line x1="0" y1="20" x2="0" y2="140" stroke="#9ca3af" stroke-width="1.5"/>
    <text x="-4" y="30" text-anchor="end" font-size="9" fill="currentColor">高</text>
    <text x="-4" y="138" text-anchor="end" font-size="9" fill="currentColor">低</text>
    <text x="240" y="156" text-anchor="end" font-size="9" fill="currentColor">epoch →</text>
    <text x="-14" y="80" font-size="9" fill="currentColor" transform="rotate(-90,-14,80)">Loss</text>
    <!-- Training loss: monotonic decrease -->
    <path d="M 0 40 Q 60 70, 120 95 T 240 130" fill="none" stroke="#10b981" stroke-width="2"/>
    <text x="200" y="125" font-size="10" fill="#10b981" font-weight="600">訓練誤差 ↓</text>
    <!-- Validation loss: U-shape -->
    <path d="M 0 55 Q 60 75, 120 80 Q 180 90, 240 115" fill="none" stroke="#3b82f6" stroke-width="2"/>
    <path d="M 120 80 Q 180 75, 240 60" fill="none" stroke="#3b82f6" stroke-width="2" stroke-dasharray="4,3"/>
    <text x="160" y="50" font-size="10" fill="#3b82f6" font-weight="600">驗證誤差(虛線=過擬合區)</text>
    <!-- Early stopping marker -->
    <line x1="120" y1="20" x2="120" y2="140" stroke="#ef4444" stroke-width="1.5" stroke-dasharray="3,3"/>
    <circle cx="120" cy="80" r="5" fill="#ef4444"/>
    <text x="120" y="14" text-anchor="middle" font-size="10" fill="#ef4444" font-weight="700">⚑ Early Stop</text>
  </g>
  <!-- K-Fold strip -->
  <g transform="translate(20,190)">
    <text x="0" y="0" font-size="11" font-weight="600" fill="currentColor">K-Fold 交叉驗證(K=5):每折輪流當驗證集</text>
    <g transform="translate(0,8)">
      <rect x="0"   y="0" width="68" height="20" fill="#3b82f6" fill-opacity=".25" stroke="#3b82f6"/>
      <rect x="68"  y="0" width="68" height="20" fill="#10b981" fill-opacity=".15" stroke="#10b981"/>
      <rect x="136" y="0" width="68" height="20" fill="#10b981" fill-opacity=".15" stroke="#10b981"/>
      <rect x="204" y="0" width="68" height="20" fill="#10b981" fill-opacity=".15" stroke="#10b981"/>
      <rect x="272" y="0" width="68" height="20" fill="#10b981" fill-opacity=".15" stroke="#10b981"/>
      <text x="34"  y="14" text-anchor="middle" font-size="9" fill="#3b82f6" font-weight="700">驗證</text>
      <text x="102" y="14" text-anchor="middle" font-size="9" fill="currentColor">訓練</text>
      <text x="170" y="14" text-anchor="middle" font-size="9" fill="currentColor">訓練</text>
      <text x="238" y="14" text-anchor="middle" font-size="9" fill="currentColor">訓練</text>
      <text x="306" y="14" text-anchor="middle" font-size="9" fill="currentColor">訓練</text>
    </g>
    <text x="0" y="38" font-size="9" fill="currentColor">↑ 第 1 折當驗證,其餘 4 折訓練。下一輪換第 2 折當驗證,共跑 5 次取平均。</text>
  </g>
</svg>`,
    intuition: `**過擬合 = 模型把訓練資料「背起來」了,換新資料就傻眼。**

打敗過擬合不是靠單招,是**三件套組合拳**:

---

**① Cross-Validation(交叉驗證)— 換評委驗收**

你訓練模型像考生練題,**只用同一份模擬考評分**很容易高估自己。
**K-Fold** 把資料切 K 份,輪流抽 1 份當「驗證」、其他 K-1 份當「訓練」,跑 K 次取平均 — 等於請 **5 個不同評委**輪流評分,結果才穩。

> 例:5-Fold,每次 80% 訓練 + 20% 驗證,跑 5 次取平均 F1。

---

**② Early Stopping(早期停止)— 看驗證誤差,不是訓練誤差**

訓練誤差永遠會繼續往下掉(因為一直在背題目),**但驗證誤差會先降後升** — 那個轉折點就是**過擬合起點**,要在那邊停。

> 看訓練誤差 = 永遠停不下來(送分題陷阱)
> 看**驗證誤差** = 看到連續 N 個 epoch 沒進步就停(N 通常設 5-10)

---

**③ Regularization(正則化)— 在 Loss 加「複雜度罰款」**

直接在優化目標裡加一項「模型越複雜罰越多」,逼模型挑簡單路徑。
- **L1(Lasso)**:把不重要的權重壓到 0(順便做特徵選擇)
- **L2(Ridge)**:把所有權重壓小(但不歸零)
- **Dropout**(神經網路專屬):訓練時隨機把一部分神經元「關掉」,逼整體不依賴單一神經元

---

**🚨 歷屆陷阱:超參數調校也要 Cross-Validation,但不能「同一份資料同時調參+評估」**

否則驗證資料間接參與了參數選擇 = **資料洩漏(Data Leakage)**,評估結果**過度樂觀**(歷屆 s1q41)。
正解:**Nested CV(巢狀交叉驗證)** — 外層評估、內層調參,兩層資料分離。`,
    keyTerms: [
      { term: "過擬合(Overfitting)", def: "**Over = 過頭、Fit = 配合**。模型把訓練資料的雜訊也當成規律學進去,換新資料就崩。徵兆:**訓練準確率高、驗證準確率低**(差距大)。" },
      { term: "交叉驗證(Cross-Validation)", def: "**Cross = 交叉輪換、Validate = 驗證**。把資料切 K 份輪流當驗證集,跑 K 次取平均。例:**5-Fold** = 切 5 份、跑 5 次,每次用 80% 訓練 + 20% 驗證。比單一切分更穩。" },
      { term: "早期停止(Early Stopping)", def: "看**驗證誤差**(不是訓練誤差!)若連續 N 個 epoch 沒下降就停,避免繼續訓練導致過擬合。N 通常設 5-10,稱為 **patience**。" },
      { term: "正則化(Regularization)", def: "**Regular = 規律、化 = 強制變得**。在 Loss 加上「複雜度懲罰項」,逼模型用較簡單的權重組合。L1 / L2 / Dropout 都是手段。" },
      { term: "L1 vs L2 正則化", def: "**L1(Lasso)**:罰權重的「絕對值」→ 把不重要的壓成 **0**(順便選特徵);**L2(Ridge)**:罰權重的「平方」→ 把所有權重壓小但**不歸零**。考試常考差異。" },
      { term: "Dropout(隨機失活)", def: "訓練時**隨機關掉**(設為 0)一部分神經元(例 20%),強迫網路不依賴特定神經元。**只在訓練時關**,推論時全部打開。" },
      { term: "資料洩漏(Data Leakage)", def: "**Leak = 漏出去**。本該只在「評估」階段使用的資料,提前在「調參」階段被偷看到 → 評估結果**過度樂觀**(看起來很準,實際上線就崩)。" },
      { term: "巢狀交叉驗證(Nested CV)", def: "**雙層 CV**:外層切分用來**評估**模型、內層切分用來**調參**,兩層資料嚴格分離。防止「同一份資料同時調參+評估」造成的洩漏。" },
    ],
    confusions: [
      "**Early Stopping 看的是「驗證誤差」不是「訓練誤差」** — 訓練誤差永遠會繼續下降,看它根本停不下來(s1q14 陷阱選 B 描述錯,應看 val loss)",
      "**「標準化特徵」不是防過擬合的方法** — 標準化是**訓練前處理**,讓不同尺度特徵公平,跟過擬合沒直接關係(s1q14 陷阱 C)",
      "**「提高模型複雜度+擴大搜尋範圍」反而**加劇過擬合(s1q14 陷阱 D)",
      "**「在 K-Fold 上同時調參+評估」= 資料洩漏** ← 必須用 **Nested CV** 把「調參」與「評估」分開(s1q41)",
      "L1 = 稀疏(會把權重變 0),L2 = 平滑(只把權重壓小)— 別倒過來記",
      "Dropout 只在**訓練**時關神經元,**推論**時全部打開(否則結果不穩)",
    ],
    examPattern: `**3 種題型固定考法**:

**① 「如何最有效防過擬合 / 提升泛化」** → 永遠選 **Cross-Validation** 或 **Early Stopping**(s1q14)
- 陷阱:「標準化特徵」「提高模型複雜度+擴搜尋」 ← 都不對

**② 「同時調參+評估造成什麼問題?」** → 選 **資料洩漏(Data Leakage) / 過度樂觀偏差**(s1q41)
- 解法是 **Nested CV**

**③ L1 vs L2 / Dropout 機制差異** → 字面記:L1 變 0、L2 變小、Dropout 是訓練時關神經元`,
    relatedTopics: ["訓練"],
    relatedQids: ["s1q14", "s1q41", "s1q-a8", "s1q-a9", "s1q-a13"],
  },

  {
    id: "s1c8-2",
    chapter: "s1c8",
    order: 2,
    title: "超參數調校 + GPU 記憶體實務",
    prerequisites: ["s1c8-1"],
    diagram: `<svg viewBox="0 0 380 250" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="三種超參數搜尋策略對比 + Batch Size 拆分示意">
  <!-- Three search strategies -->
  <g transform="translate(10,10)">
    <text x="180" y="0" text-anchor="middle" font-size="11" font-weight="600" fill="currentColor">三種超參數搜尋策略(2D 參數空間)</text>
    <!-- Grid Search -->
    <g transform="translate(0,12)">
      <rect x="0" y="0" width="110" height="110" fill="none" stroke="#9ca3af" stroke-width="1"/>
      <text x="55" y="-2" text-anchor="middle" font-size="10" font-weight="600" fill="#10b981">Grid 網格</text>
      <g fill="#10b981">
        <circle cx="22" cy="22" r="3"/><circle cx="55" cy="22" r="3"/><circle cx="88" cy="22" r="3"/>
        <circle cx="22" cy="55" r="3"/><circle cx="55" cy="55" r="3"/><circle cx="88" cy="55" r="3"/>
        <circle cx="22" cy="88" r="3"/><circle cx="55" cy="88" r="3"/><circle cx="88" cy="88" r="3"/>
      </g>
      <text x="55" y="125" text-anchor="middle" font-size="9" fill="currentColor">系統化、保證掃完</text>
    </g>
    <!-- Random Search -->
    <g transform="translate(125,12)">
      <rect x="0" y="0" width="110" height="110" fill="none" stroke="#9ca3af" stroke-width="1"/>
      <text x="55" y="-2" text-anchor="middle" font-size="10" font-weight="600" fill="#3b82f6">Random 隨機</text>
      <g fill="#3b82f6">
        <circle cx="18" cy="34" r="3"/><circle cx="42" cy="78" r="3"/><circle cx="61" cy="20" r="3"/>
        <circle cx="74" cy="55" r="3"/><circle cx="92" cy="88" r="3"/><circle cx="32" cy="62" r="3"/>
        <circle cx="86" cy="38" r="3"/><circle cx="55" cy="98" r="3"/><circle cx="100" cy="68" r="3"/>
      </g>
      <text x="55" y="125" text-anchor="middle" font-size="9" fill="currentColor">高維時更有效率</text>
    </g>
    <!-- Bayesian -->
    <g transform="translate(250,12)">
      <rect x="0" y="0" width="110" height="110" fill="none" stroke="#9ca3af" stroke-width="1"/>
      <text x="55" y="-2" text-anchor="middle" font-size="10" font-weight="600" fill="#f59e0b">Bayesian 貝葉斯</text>
      <!-- contour suggesting optimum -->
      <ellipse cx="70" cy="60" rx="32" ry="22" fill="#f59e0b" fill-opacity=".08" stroke="#f59e0b" stroke-opacity=".4" stroke-dasharray="2,2"/>
      <ellipse cx="70" cy="60" rx="18" ry="12" fill="#f59e0b" fill-opacity=".15" stroke="#f59e0b" stroke-opacity=".4" stroke-dasharray="2,2"/>
      <g fill="#f59e0b">
        <circle cx="20" cy="20" r="3" opacity=".5"/>
        <circle cx="90" cy="30" r="3" opacity=".5"/>
        <circle cx="40" cy="80" r="3" opacity=".7"/>
        <circle cx="65" cy="55" r="3"/><circle cx="72" cy="62" r="3"/><circle cx="68" cy="68" r="3"/>
        <circle cx="78" cy="58" r="3"/>
      </g>
      <text x="55" y="125" text-anchor="middle" font-size="9" fill="currentColor">用歷次結果引導</text>
    </g>
  </g>
  <!-- GPU memory strategy -->
  <g transform="translate(10,165)">
    <text x="0" y="0" font-size="11" font-weight="600" fill="currentColor">GPU 記憶體不夠時 — 縮 Batch + Data Sharding</text>
    <!-- Big batch -->
    <g transform="translate(0,10)">
      <rect x="0" y="0" width="160" height="32" fill="#ef4444" fill-opacity=".15" stroke="#ef4444" stroke-width="1.5"/>
      <text x="80" y="20" text-anchor="middle" font-size="10" fill="currentColor">Batch=128 → 1 張 GPU 爆 OOM ✗</text>
    </g>
    <!-- Arrow -->
    <text x="195" y="32" text-anchor="middle" font-size="14" fill="#9ca3af">↓ 拆</text>
    <!-- Sharded -->
    <g transform="translate(220,10)">
      <rect x="0"  y="0" width="38" height="32" fill="#10b981" fill-opacity=".2" stroke="#10b981" stroke-width="1.5"/>
      <rect x="40" y="0" width="38" height="32" fill="#10b981" fill-opacity=".2" stroke="#10b981" stroke-width="1.5"/>
      <rect x="80" y="0" width="38" height="32" fill="#10b981" fill-opacity=".2" stroke="#10b981" stroke-width="1.5"/>
      <rect x="120" y="0" width="38" height="32" fill="#10b981" fill-opacity=".2" stroke="#10b981" stroke-width="1.5"/>
      <text x="79" y="20" text-anchor="middle" font-size="9" fill="currentColor">B=32 × 4 GPU ✓</text>
    </g>
    <text x="0" y="60" font-size="9" fill="currentColor">縮小 Batch Size + Data Sharding 把資料分散到多張 GPU,單張記憶體壓力 ↓</text>
  </g>
</svg>`,
    intuition: `**超參數 = 訓練前要先決定的「設定值」**(學習率、樹深度、Batch Size、正則化強度…),不是模型自己學的。要怎麼找到最佳組合?

---

**🔍 三種搜尋策略**

| 策略 | 怎麼挑點 | 適合 | 弱點 |
|---|---|---|---|
| **Grid 網格** | 把每個參數切等距,**全部組合都試** | 參數少(2-3 個)、有把握範圍 | 參數一多就**指數爆炸**(5 個參數 × 各 5 值 = 3125 組) |
| **Random 隨機** | 在範圍內**隨機抽**固定組數 | 參數多時比 Grid 強(因不重要參數不會浪費算力) | 沒有方向感,純運氣 |
| **Bayesian 貝葉斯** | 用**歷次結果**建一個「哪裡可能比較好」的機率模型,引導下一次試哪 | 評估很貴(訓練很久)時最划算 | 實作複雜、early 階段不一定比 Random 好 |

> **關鍵觀念**:Random Search 在**高維**反而比 Grid 好 — 因為若有些參數其實不重要,Grid 會在那些維度浪費掉一堆組合,Random 不會。

---

**💾 GPU 記憶體爆掉怎麼辦?(模型架構/硬體都不能換的情況)**

訓練時記憶體 = **模型權重 + 啟動值(activations) + 梯度 + 優化器狀態**,跟 **Batch Size 成正比**。

✅ **正解:縮小 Batch Size + Data Sharding**(s1q37)
- Batch Size 從 128 → 32 → 單張 GPU 壓力 ↓ 4 倍
- Data Sharding = 把資料**切碎片**分散到多張 GPU(資料並行)
- 額外技巧:**Gradient Accumulation** — 跑 4 個小 batch 才更新 1 次,效果接近大 batch

❌ 陷阱選項
- 「減少訓練資料量」 → 影響模型品質,**犧牲收斂**
- 「增加學習率加快收斂」 → 跟記憶體無關,反而可能不收斂
- 「改用 Test Set 訓練」 → **嚴重資料洩漏**

---

**🧪 設計實驗比較兩個模型的「資料效率」要怎麼設?**

題目情境(歷屆 s1q43):VAE+分類器 vs BERT 分類器,2000 筆標註,公平比兩者**資料利用效率**。

✅ 正解:**低資源情境設計** — 把標註逐步減(100% → 50% → 10%),看哪個在資料少時還撐得住 → F1 曲線斜率反映資料效率
❌ 陷阱:「在完整資料集比 accuracy + 推論時間」 → 看不出**資料效率**差異(都用 100%,當然差不多)`,
    keyTerms: [
      { term: "超參數(Hyperparameter)", def: "**Hyper = 上層、Parameter = 參數**。訓練**前**人工決定的設定(學習率、Batch Size、樹深度、L2 強度…),**模型不會自己學**。對比:Parameter 是模型訓練中學到的權重。" },
      { term: "Grid Search(網格搜尋)", def: "**Grid = 網格**。把每個超參數切等距、**所有組合都跑一遍**。例:學習率 [0.01, 0.001, 0.0001] × 樹深度 [3, 5, 7] = 9 組。**參數一多就爆炸**。" },
      { term: "Random Search(隨機搜尋)", def: "在參數範圍內**隨機抽 N 組**試。**高維時比 Grid 更有效率**,因為若有不重要的參數,Grid 會在它身上浪費組合,Random 不會。" },
      { term: "Bayesian Optimization(貝葉斯優化)", def: "**用歷次結果**建一個「哪邊可能比較好」的代理模型,**動態挑下一個試的點**。適合:每次訓練很貴(GPT 那種),不能盲試。" },
      { term: "Batch Size(批次大小)", def: "**一次餵給模型多少筆資料更新一次權重**。大 batch:梯度穩、但吃記憶體;小 batch:省記憶體、但梯度雜。例:Batch=32 表示 32 筆算一次 loss 反向傳播。" },
      { term: "Data Sharding(資料分片)", def: "**Shard = 碎片**(玻璃碎片那種)。把訓練資料**切碎分到多張 GPU**,每張 GPU 各算自己那塊,梯度合併再更新 → 單張壓力 ↓。也叫**資料並行(Data Parallelism)**。" },
      { term: "Gradient Accumulation(梯度累積)", def: "**跑 N 個小 batch、累積梯度,第 N 次才更新權重**。效果≈大 batch,但記憶體只要小 batch 的量。例:想 batch=128 但只能跑 32,那就累積 4 次再更新。" },
      { term: "低資源實驗(Low-resource Setting)", def: "**故意把標註資料減少**(100% → 50% → 10% → 5%),看模型在資料少時還撐多好。是比較**資料效率**的標準設計。F1 隨資料下降的斜率越平緩 = 資料效率越高。" },
    ],
    confusions: [
      "**「降低 Batch Size」省記憶體,「增加學習率」跟記憶體無關** — 別搞混(s1q37 陷阱 C)",
      "**減少訓練資料**會犧牲模型品質,不是省記憶體的好方法(s1q37 陷阱 A)",
      "**「拿 Test Set 來訓練」** = **資料洩漏** — 永遠錯,別被「節省空間」的話術騙(s1q37 陷阱 D)",
      "**Random Search > Grid Search 在「高維」場景** — 因為 Grid 會在不重要的參數上浪費(s1q36 為何選 Grid 是因題目強調**系統化測試**,要排查所有組合)",
      "**Hyperparameter ≠ Parameter** — 前者人工設、後者模型學",
      "**Gradient Accumulation 不是縮資料**,是「分批算梯度、合併才更新」",
      "**比較資料效率必須用低資源設計**,不能在 100% 資料上比(s1q43 陷阱 A)",
    ],
    examPattern: `**4 種考法**:

**① 「系統化測試多組超參數」找最佳組** → **Grid Search**(s1q36) — 關鍵字:**系統化、所有組合**
**② 「快速探索高維空間」** → **Random Search**;**「每次訓練很貴」** → **Bayesian**
**③ GPU OOM 怎麼辦** → **縮 Batch Size + Data Sharding**(s1q37);陷阱:減資料、加學習率、用 test set
**④ 公平比較兩模型的資料效率** → **低資源設計(逐步減標註)+ F1 比較**(s1q43);陷阱:用完整資料比 Accuracy`,
    relatedTopics: ["訓練"],
    relatedQids: ["s1q36", "s1q37", "s1q43", "s1q-a10", "s1q-a11", "s1q-a12"],
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
    diagram: `<svg viewBox="0 0 380 220" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="三大機率分佈對比">
  <g font-size="11">
    <text x="190" y="18" text-anchor="middle" font-weight="600" fill="currentColor">三大必懂分佈:Normal / Binomial / Poisson</text>
    <text x="65" y="42" text-anchor="middle" font-weight="600" fill="#3b82f6">Normal</text>
    <text x="65" y="56" text-anchor="middle" font-size="9" fill="#6b7280">連續・對稱</text>
    <line x1="15" y1="160" x2="115" y2="160" stroke="#9ca3af"/>
    <path d="M 20 160 C 35 160, 50 80, 65 70 C 80 80, 95 160, 110 160 Z" fill="#3b82f6" fill-opacity=".30" stroke="#3b82f6"/>
    <text x="65" y="178" text-anchor="middle" font-size="10" fill="#6b7280">身高、誤差</text>
    <text x="65" y="194" text-anchor="middle" font-size="9" fill="#6b7280">CLT 樣本均值</text>
    <text x="190" y="42" text-anchor="middle" font-weight="600" fill="#10b981">Binomial</text>
    <text x="190" y="56" text-anchor="middle" font-size="9" fill="#6b7280">離散・n 試驗成功 k 次</text>
    <line x1="140" y1="160" x2="240" y2="160" stroke="#9ca3af"/>
    <g fill="#10b981" fill-opacity=".55" stroke="#10b981">
      <rect x="148" y="148" width="10" height="12"/>
      <rect x="162" y="130" width="10" height="30"/>
      <rect x="176" y="100" width="10" height="60"/>
      <rect x="190" y="80" width="10" height="80"/>
      <rect x="204" y="100" width="10" height="60"/>
      <rect x="218" y="130" width="10" height="30"/>
      <rect x="232" y="148" width="10" height="12"/>
    </g>
    <text x="190" y="178" text-anchor="middle" font-size="10" fill="#6b7280">投擲、廣告點擊</text>
    <text x="190" y="194" text-anchor="middle" font-size="9" fill="#6b7280">np &amp; n(1-p) &gt; 5 → 近常態</text>
    <text x="315" y="42" text-anchor="middle" font-weight="600" fill="#a855f7">Poisson</text>
    <text x="315" y="56" text-anchor="middle" font-size="9" fill="#6b7280">離散・單位時間發生數</text>
    <line x1="265" y1="160" x2="365" y2="160" stroke="#9ca3af"/>
    <g fill="#a855f7" fill-opacity=".55" stroke="#a855f7">
      <rect x="273" y="115" width="10" height="45"/>
      <rect x="287" y="80" width="10" height="80"/>
      <rect x="301" y="90" width="10" height="70"/>
      <rect x="315" y="115" width="10" height="45"/>
      <rect x="329" y="135" width="10" height="25"/>
      <rect x="343" y="148" width="10" height="12"/>
      <rect x="357" y="155" width="10" height="5"/>
    </g>
    <text x="315" y="178" text-anchor="middle" font-size="10" fill="#6b7280">客服來電、車禍件數</text>
    <text x="315" y="194" text-anchor="middle" font-size="9" fill="#6b7280">獨立 + 平均率固定</text>
    <text x="190" y="214" text-anchor="middle" font-size="9" fill="#6b7280" font-style="italic">情境題:來電 → Poisson;n 試驗成功 → Binomial;誤差 → Normal</text>
  </g>
</svg>`,
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
    diagram: `<svg viewBox="0 0 380 200" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="雙尾檢定:拒絕區與接受區">
  <g font-size="11">
    <text x="190" y="18" text-anchor="middle" font-weight="600" fill="currentColor">雙尾檢定:p &lt; α 落入紅色拒絕區 → 拒絕 H0</text>
    <line x1="20" y1="160" x2="360" y2="160" stroke="#9ca3af"/>
    <path d="M 30 160 Q 70 156, 90 148 Q 120 105, 165 75 Q 195 65, 225 75 Q 270 105, 290 148 Q 320 156, 350 160 Z" fill="#3b82f6" fill-opacity=".18" stroke="#3b82f6"/>
    <path d="M 30 160 Q 55 158, 80 152 L 80 160 Z" fill="#ef4444" fill-opacity=".60" stroke="#ef4444"/>
    <path d="M 300 152 Q 325 158, 350 160 L 300 160 Z" fill="#ef4444" fill-opacity=".60" stroke="#ef4444"/>
    <line x1="80" y1="65" x2="80" y2="160" stroke="#ef4444" stroke-dasharray="3,3" stroke-width="1"/>
    <line x1="300" y1="65" x2="300" y2="160" stroke="#ef4444" stroke-dasharray="3,3" stroke-width="1"/>
    <line x1="190" y1="65" x2="190" y2="160" stroke="#3b82f6" stroke-dasharray="2,2"/>
    <text x="55" y="135" text-anchor="middle" font-size="10" font-weight="600" fill="#ef4444">拒絕區</text>
    <text x="55" y="148" text-anchor="middle" font-size="9" fill="#ef4444">α/2</text>
    <text x="325" y="135" text-anchor="middle" font-size="10" font-weight="600" fill="#ef4444">拒絕區</text>
    <text x="325" y="148" text-anchor="middle" font-size="9" fill="#ef4444">α/2</text>
    <text x="190" y="100" text-anchor="middle" font-size="11" font-weight="600" fill="#3b82f6">接受 H0(1-α)</text>
    <text x="190" y="115" text-anchor="middle" font-size="9" fill="#6b7280">即「信賴區間」</text>
    <text x="80" y="180" text-anchor="middle" font-size="9" fill="#6b7280">−臨界值</text>
    <text x="300" y="180" text-anchor="middle" font-size="9" fill="#6b7280">+臨界值</text>
    <text x="190" y="195" text-anchor="middle" font-size="9" fill="#6b7280" font-style="italic">假設值落在接受區內 → 無法拒絕 H0</text>
  </g>
</svg>`,
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
    diagram: `<svg viewBox="0 0 380 230" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="三種編碼方法對照">
  <g font-size="11">
    <text x="190" y="18" text-anchor="middle" font-weight="600" fill="currentColor">原始類別 → 三種編碼結果</text>
    <text x="50" y="42" text-anchor="middle" font-weight="600" fill="currentColor">原始</text>
    <g text-anchor="middle">
      <rect x="20" y="50" width="60" height="22" fill="#9ca3af" fill-opacity=".15" stroke="#9ca3af"/>
      <text x="50" y="66" fill="currentColor">紅</text>
      <rect x="20" y="74" width="60" height="22" fill="#9ca3af" fill-opacity=".15" stroke="#9ca3af"/>
      <text x="50" y="90" fill="currentColor">藍</text>
      <rect x="20" y="98" width="60" height="22" fill="#9ca3af" fill-opacity=".15" stroke="#9ca3af"/>
      <text x="50" y="114" fill="currentColor">綠</text>
      <rect x="20" y="122" width="60" height="22" fill="#9ca3af" fill-opacity=".15" stroke="#9ca3af"/>
      <text x="50" y="138" fill="currentColor">紅</text>
    </g>
    <text x="155" y="42" text-anchor="middle" font-weight="600" fill="#06b6d4">One-Hot</text>
    <g text-anchor="middle" font-size="10">
      <rect x="115" y="50" width="80" height="22" fill="#06b6d4" fill-opacity=".15" stroke="#06b6d4"/>
      <text x="155" y="66" fill="currentColor">[1, 0, 0]</text>
      <rect x="115" y="74" width="80" height="22" fill="#06b6d4" fill-opacity=".15" stroke="#06b6d4"/>
      <text x="155" y="90" fill="currentColor">[0, 1, 0]</text>
      <rect x="115" y="98" width="80" height="22" fill="#06b6d4" fill-opacity=".15" stroke="#06b6d4"/>
      <text x="155" y="114" fill="currentColor">[0, 0, 1]</text>
      <rect x="115" y="122" width="80" height="22" fill="#06b6d4" fill-opacity=".15" stroke="#06b6d4"/>
      <text x="155" y="138" fill="currentColor">[1, 0, 0]</text>
    </g>
    <text x="155" y="160" text-anchor="middle" font-size="9" fill="#10b981">✓ 無序適用</text>
    <text x="155" y="172" text-anchor="middle" font-size="9" fill="#ef4444">✗ 高基數爆維</text>
    <text x="240" y="42" text-anchor="middle" font-weight="600" fill="#a855f7">Label</text>
    <g text-anchor="middle">
      <rect x="210" y="50" width="60" height="22" fill="#a855f7" fill-opacity=".15" stroke="#a855f7"/>
      <text x="240" y="66" fill="currentColor">1</text>
      <rect x="210" y="74" width="60" height="22" fill="#a855f7" fill-opacity=".15" stroke="#a855f7"/>
      <text x="240" y="90" fill="currentColor">2</text>
      <rect x="210" y="98" width="60" height="22" fill="#a855f7" fill-opacity=".15" stroke="#a855f7"/>
      <text x="240" y="114" fill="currentColor">3</text>
      <rect x="210" y="122" width="60" height="22" fill="#a855f7" fill-opacity=".15" stroke="#a855f7"/>
      <text x="240" y="138" fill="currentColor">1</text>
    </g>
    <text x="240" y="160" text-anchor="middle" font-size="9" fill="#10b981">✓ 省空間</text>
    <text x="240" y="172" text-anchor="middle" font-size="9" fill="#ef4444">✗ 假順序 3&gt;2&gt;1</text>
    <text x="325" y="42" text-anchor="middle" font-weight="600" fill="#f97316">Target</text>
    <g text-anchor="middle">
      <rect x="285" y="50" width="80" height="22" fill="#f97316" fill-opacity=".15" stroke="#f97316"/>
      <text x="325" y="66" fill="currentColor">0.42</text>
      <rect x="285" y="74" width="80" height="22" fill="#f97316" fill-opacity=".15" stroke="#f97316"/>
      <text x="325" y="90" fill="currentColor">0.71</text>
      <rect x="285" y="98" width="80" height="22" fill="#f97316" fill-opacity=".15" stroke="#f97316"/>
      <text x="325" y="114" fill="currentColor">0.18</text>
      <rect x="285" y="122" width="80" height="22" fill="#f97316" fill-opacity=".15" stroke="#f97316"/>
      <text x="325" y="138" fill="currentColor">0.42</text>
    </g>
    <text x="325" y="160" text-anchor="middle" font-size="9" fill="#10b981">✓ 高基數穩</text>
    <text x="325" y="172" text-anchor="middle" font-size="9" fill="#ef4444">✗ 易過擬合</text>
    <text x="190" y="200" text-anchor="middle" font-size="10" fill="#6b7280" font-style="italic">Target = 該類別對應目標變數的「平均值」(如轉換率)</text>
    <text x="190" y="218" text-anchor="middle" font-size="9" fill="#6b7280">高基數無序 → 不要 One-Hot,改用 Target Encoding</text>
  </g>
</svg>`,
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
