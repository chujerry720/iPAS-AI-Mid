// Auto-generated. Total: 129 questions.
const QUESTIONS = [
  {
    "id": "s1q1",
    "subject": 1,
    "number": 1,
    "question": "某電商企業希望利用自然語言處理（NLP）技術，分析顧客在社群平 台與商品評論中的文字內容，以即時掌握顧客對產品的滿意度變化。 若採用情感分析（Sentiment Analysis）模型，其主要目的為何？",
    "options": {
      "A": "預測顧客使用的語言風格與語氣",
      "B": "判斷文本中所表達的情感傾向",
      "C": "將顧客留言自動翻譯成企業內部指定語言",
      "D": "產生顧客評論的自動化摘要內容"
    },
    "answer": "B",
    "topic": "NLP"
  },
  {
    "id": "s1q2",
    "subject": 1,
    "number": 2,
    "question": "某跨國金融科技公司導入Transformer 架構開發多語客服系統，以提 升長篇金融文件的自動翻譯品質。下列何者為該模型能顯著改善翻譯 準確度的主要原因？",
    "options": {
      "A": "透過自注意力機制（Self-Attention Mechanism）捕捉長距離語 境依賴關係",
      "B": "透過卷積運算（Convolution Operation）加速訓練過程",
      "C": "透過強化學習（Reinforcement Learning）自動調整語句生成策 略",
      "D": "透過資料增強（Data Augmentation）平衡多語語料比例"
    },
    "answer": "A",
    "topic": "NLP"
  },
  {
    "id": "s1q3",
    "subject": 1,
    "number": 3,
    "question": "某企業計畫應用BERT（Bidirectional Encoder Representations from Transformers）模型分析大量顧客意見，以強化客服自動回覆 系統。在BERT 的預訓練過程中，「遮罩語言模型（Masked Language Model, MLM）」的主要訓練策略為何？",
    "options": {
      "A": "依序遮罩句尾詞語，讓模型從左到右逐步生成完整句子",
      "B": "隨機遮罩部分詞語，並讓模型根據雙向上下文（Bidirectional Context）預測被遮罩的詞",
      "C": "透過對抗訓練（Adversarial Training）生成語意相似的擾動樣 本以提升泛化性",
      "D": "以未遮罩的詞為條件，使用解碼器（Decoder）結構重建整句內容"
    },
    "answer": "B",
    "topic": "NLP"
  },
  {
    "id": "s1q4",
    "subject": 1,
    "number": 4,
    "question": "在詞向量（Word Embedding）訓練方法中，GloVe（Global Vectors for Word Representation）與Word2Vec 的主要差異為何？",
    "options": {
      "A": "Word2Vec 以詞頻權重訓練詞向量，而GloVe 以隨機初始化向量進 行學習",
      "B": "Word2Vec 以全局統計矩陣為基礎，而GloVe 採用神經網路進行上 下文預測",
      "C": "Word2Vec 為基於預測的模型，而GloVe 為基於共現統計的模型",
      "D": "Word2Vec 僅能用於靜態文本語料，而GloVe 可應用於即時語料更 新"
    },
    "answer": "C",
    "topic": "NLP"
  },
  {
    "id": "s1q5",
    "subject": 1,
    "number": 5,
    "question": "某企業以詞頻–逆文件頻率（Term Frequency–Inverse Document Frequency, TF-IDF）方法分析顧客意見內容，但發現模型在處理篇 幅較長的回饋文本時，無法準確反映關鍵詞的重要性。下列何者為造 成此現象的主要原因？",
    "options": {
      "A": "長文本中的詞頻偏高，導致常見詞權重被過度放大",
      "B": "長文本中缺乏明確句子邊界，造成 TF-IDF 無法計算詞頻",
      "C": "TF-IDF 無法同時處理多份文件",
      "D": "長文本會改變IDF（Inverse Document Frequency）的計算，使所 有詞權重趨於相近"
    },
    "answer": "A",
    "topic": "NLP"
  },
  {
    "id": "s1q6",
    "subject": 1,
    "number": 6,
    "question": "某企業嘗試以N-gram 語言模型（N-gram Language Model）建立客服 自動回覆系統，但發現模型生成的句子雖在片段上合理，卻缺乏整體 語意連貫性。此問題最可能源自N-gram 模型的哪一項限制？",
    "options": {
      "A": "N-gram 模型在訓練過程中需要龐大計算量，導致長句無法收斂",
      "B": "N-gram 模型僅根據固定長度的前序詞建立機率估計，難以捕捉長 距離依賴關係（Long-range Dependencies）",
      "C": "N-gram 模型缺乏語意嵌入（Semantic Embedding）層，因此無法 表徵詞語間的語意相似度",
      "D": "N-gram 模型假設詞與詞之間相互獨立，導致無法建構上下文語意 關聯"
    },
    "answer": "B",
    "topic": "NLP"
  },
  {
    "id": "s1q7",
    "subject": 1,
    "number": 7,
    "question": "在企業導入的智慧監控系統中，模型以物件偵測（Object Detection）方式自動辨識影像中的人物與車輛。若評估指標採用平 均精確率（Mean Average Precision, mAP），其中 IoU （Intersection over Union）閾值設定較高時，代表下列哪一項意 義？",
    "options": {
      "A": "預測邊界框與真實邊界框的重疊程度越高，模型偵測結果越精 準",
      "B": "預測邊界框與真實邊界框的誤差越大，導致mAP 數值上升",
      "C": "模型整體精確率（Precision）降低，但召回率（Recall）上升",
      "D": "預測邊界框的評估結果不受真實框大小影響"
    },
    "answer": "A",
    "topic": "CV"
  },
  {
    "id": "s1q8",
    "subject": 1,
    "number": 8,
    "question": "關於Softmax 與Max-Pooling，下列敘述何者正確？",
    "options": {
      "A": "Softmax 與Max-Pooling 都會將特徵張量壓縮為單一最大值",
      "B": "Max-Pooling 會對輸入進行機率分佈的轉換",
      "C": "Softmax 會保留所有輸入資訊，但以比例表示；Max-Pooling 只保 留區域最大值",
      "D": "Softmax 主要用於特徵降維，而Max-Pooling 用於分類輸出"
    },
    "answer": "C",
    "topic": "DL基礎"
  },
  {
    "id": "s1q9",
    "subject": 1,
    "number": 9,
    "question": "某企業在訓練生成式AI 模型時，導入資料增強（Data Augmentation）技術以擴充訓練資料，但觀察到模型效能反而下降。 下列哪一項最可能的原因與對應改善策略最為正確？",
    "options": {
      "A": "增強樣本未經隨機初始化，導致模型梯度更新不穩定，應重新設 計訓練啟動流程",
      "B": "增強後資料的特徵分佈與原始資料不一致，影響模型的泛化能 力，應檢查並調整增強策略以維持語意一致性",
      "C": "增強樣本的比例過高，造成模型對特定資料產生偏好，應適度提 高增強比例並調整學習率",
      "D": "增強後資料的標註可信度下降，導致訓練訊號偏差，應以半監督 學習方式重新校正資料"
    },
    "answer": "B",
    "topic": "GenAI"
  },
  {
    "id": "s1q10",
    "subject": 1,
    "number": 10,
    "question": "如果希望同時兼顧「精確率（Precision）」和「召回率（Recall）」， 下列哪一個指標可以作為綜合評估的標準？",
    "options": {
      "A": "準確率（Accuracy）",
      "B": "均方根誤差（RMSE）",
      "C": "均方誤差（MSE）",
      "D": "F1 分數（F1 Score）"
    },
    "answer": "D",
    "topic": "評估"
  },
  {
    "id": "s1q11",
    "subject": 1,
    "number": 11,
    "question": "企業資料分析團隊使用DBSCAN（Density-Based Spatial Clustering of Applications with Noise）演算法進行顧客行為分群，並希望模 型能自動區分主要群集與雜訊資料。 在此演算法中，決定聚類結果的兩個主要超參數為下列何者？",
    "options": {
      "A": "特徵數與學習率",
      "B": "K 值與距離閾值",
      "C": "鄰域半徑（Epsilon ε）與最小點數（MinPts）",
      "D": "交叉熵（Cross Entropy）與權重初始化"
    },
    "answer": "C",
    "topic": "演算法"
  },
  {
    "id": "s1q12",
    "subject": 1,
    "number": 12,
    "question": "某金融科技公司建立房價預測模型，使用多項特徵（如建坪、房齡、 樓層、總價等）進行線性迴歸分析（Linear Regression Analysis）。資料分析師發現多個特徵之間存在高度相關性，導致模 型係數不穩定、預測誤差上升。為解決此問題，下列哪一種方法最適 合？",
    "options": {
      "A": "繼續保留所有特徵，不進行任何處理",
      "B": "使用主成分分析（PCA）將相關特徵轉換為彼此獨立的主成分",
      "C": "新增更多原始變數以提升模型表現",
      "D": "改用分類模型進行預測"
    },
    "answer": "B",
    "topic": "統計"
  },
  {
    "id": "s1q13",
    "subject": 1,
    "number": 13,
    "question": "下列何者為Kubernetes 在AI 模型部署與運行中的核心功能？",
    "options": {
      "A": "自動化管理模型的訓練流程與參數調校",
      "B": "管理與協調模型服務的部署、擴展與運行環境",
      "C": "提供AI 模型的資料儲存與版本控管功能",
      "D": "負責深度學習推論的 GPU 加速運算"
    },
    "answer": "B",
    "topic": "MLOps"
  },
  {
    "id": "s1q14",
    "subject": 1,
    "number": 14,
    "question": "在調整模型超參數（Hyperparameters）時，若希望避免因過度調整 參數而導致過擬合，下列哪一種做法最有效提升模型的泛化能力？",
    "options": {
      "A": "採用交叉驗證（Cross-Validation）於多組參數組合間反覆評 估，選擇在驗證資料上表現最穩定的設定",
      "B": "使用早期停止機制（Early Stopping）監控訓練誤差並在收斂前 停止訓練，以防模型學習過度",
      "C": "對輸入特徵進行標準化以減少特徵值差異帶來的過擬合風險",
      "D": "提高模型複雜度並使用更多超參數搜尋範圍，以確保模型能充分 學習資料特徵"
    },
    "answer": "A",
    "topic": "訓練"
  },
  {
    "id": "s1q15",
    "subject": 1,
    "number": 15,
    "question": "在企業導入的MLOps（Machine Learning Operations）流程中， Model Registry 最常用於哪一個階段？",
    "options": {
      "A": "用於設定運算資源與執行環境以確保訓練穩定",
      "B": "用於建立可重複使用的資料與特徵版本",
      "C": "用於集中管理模型版本、訓練紀錄與部署狀態",
      "D": "用於追蹤模型上線後的表現與漂移情況"
    },
    "answer": "C",
    "topic": "MLOps"
  },
  {
    "id": "s1q16",
    "subject": 1,
    "number": 16,
    "question": "下列哪一種情境中最適合使用「序列到序列（Seq2Seq）」模型？",
    "options": {
      "A": "預測銷售趨勢曲線，輸出未來數值序列",
      "B": "辨識文本中出現的人名、地名與組織名稱等實體資訊",
      "C": "對輸入文本中的關鍵字進行頻率統計與可視化",
      "D": "將輸入文字轉換成語意等價的另一段文字，如自動翻譯或摘要生 成"
    },
    "answer": "D",
    "topic": "NLP"
  },
  {
    "id": "s1q17",
    "subject": 1,
    "number": 17,
    "question": "在自然語言處理中，檢索增強生成（Retrieval-Augmented Generation, RAG）是一種結合語言模型與向量搜尋的技術，可有效 減少模型知識過時與產生幻覺的問題。若要建立一套高效能的RAG 系 統，下列何者為在「檢索階段」最關鍵的挑戰？",
    "options": {
      "A": "確保檢索到的文件能被完整納入語言模型的上下文視窗（Context Window）中進行生成",
      "B": "選擇使用Faiss 或ScaNN 等近似最近鄰搜尋函式庫",
      "C": "降低嵌入模型（Embedding Model）在高維空間中的計算成本與記 憶體占用",
      "D": "避免向量檢索結果僅具語意相似但與查詢意圖無實質關聯的情況"
    },
    "answer": "D",
    "topic": "NLP"
  },
  {
    "id": "s1q18",
    "subject": 1,
    "number": 18,
    "question": "當Transformer 模型發生「注意力分布過於平均（Attention Collapse）」的情形時，導致模型無法有效聚焦於關鍵資訊，下列哪 一項策略可有效改善此問題？",
    "options": {
      "A": "提高Query-Key 點積（Dot Product）的縮放常數",
      "B": "在Softmax 前加入高斯雜訊（Gaussian Noise）",
      "C": "使用 ReLU 函數取代 Softmax",
      "D": "對注意力權重施加稀疏化約束（Sparsity Constraint）"
    },
    "answer": "D",
    "topic": "NLP"
  },
  {
    "id": "s1q19",
    "subject": 1,
    "number": 19,
    "question": "某研究團隊正在訓練一個針對低資源語言（如少數民族語言）的語言 模型，但該語言僅有約1 萬筆語料可用。在訓練過程中出現明顯的過 擬合現象，若希望在不新增真實語料的前提下提升模型的泛化能力， 採用下列哪一種方法最為適合？",
    "options": {
      "A": "將Transformer 的隱藏層維度擴增至1024，以提升表徵能力",
      "B": "採用反向翻譯（Back-Translation）技術，以生成額外目標語句 的偽平行語料（Pseudo‑Parallel Corpus）",
      "C": "對詞嵌入矩陣（Embedding Matrix），施加L1 正則化以壓縮模型 參數",
      "D": "將多語言BERT（mBERT）中所有Transformer 層全部凍結以保留預 訓練知識"
    },
    "answer": "B",
    "topic": "NLP"
  },
  {
    "id": "s1q20",
    "subject": 1,
    "number": 20,
    "question": "在使用生成對抗網路（GAN）進行人臉影像生成時，若出現「模式崩 潰」（Mode Collapse）現象，下列哪一種方法最常被用來有效解決此 問題？",
    "options": {
      "A": "在鑑別器中加入梯度懲罰（Gradient Penalty）以穩定訓練過 程",
      "B": "採用 Wasserstein 距離（WGAN 損失）替代原始的 GAN 損失函 數",
      "C": "對生成器輸入的潛在向量加入隨機擾動",
      "D": "使用多尺度鑑別器架構以提高對多樣性的判別能力"
    },
    "answer": "B",
    "topic": "GenAI"
  },
  {
    "id": "s1q21",
    "subject": 1,
    "number": 21,
    "question": "在多模態 AI 模型訓練或推論過程中，遇到某一模態資料缺失（例如 僅有影像資料但缺少文本說明），下列哪一種策略最有效維持模型效 能？",
    "options": {
      "A": "以零向量或固定向量填充缺失模態輸入",
      "B": "訓練具備模態缺失感知能力的模型，使其適應缺失狀況",
      "C": "利用生成模型（如 GAN 或自迴歸模型）預測並補全缺失模態資 料",
      "D": "直接捨棄缺少模態的樣本，避免干擾訓練或推論"
    },
    "answer": "B",
    "topic": "多模態"
  },
  {
    "id": "s1q22",
    "subject": 1,
    "number": 22,
    "question": "某電商平台開發的顧客流失預測模型在上線數月後，預測準確率明顯 下降。專案團隊懷疑顧客行為模式改變，導致模型輸入特徵的分佈與 原始訓練資料不同，出現典型的資料漂移（Data Drift）問題。為了 偵測並確認資料分佈是否發生變化，下列哪一種作法最合適？",
    "options": {
      "A": "定期重新訓練模型以應對外部變化",
      "B": "提升模型複雜度以捕捉更多資料變異性",
      "C": "增加測試資料量以提高評估準確度",
      "D": "計算輸入特徵分佈間的KL 散度（KL Divergence）"
    },
    "answer": "D",
    "topic": "MLOps"
  },
  {
    "id": "s1q23",
    "subject": 1,
    "number": 23,
    "question": "某大型醫院即將部署一套輔助診斷的AI 系統，為降低對臨床流程的 衝擊，同時確保風險可控與回饋可收斂，應採取何種『漸進式部署』 （Phased Rollout）策略最為合適？",
    "options": {
      "A": "從單一專科（如放射科）或特定病房開始啟用，逐步擴展至全 院",
      "B": "先部署於病例量較高的急診單位，加速收集高頻使用回饋",
      "C": "僅在夜班或離峰時段啟用，避免影響主要臨床工作負載",
      "D": "在使用者界面啟用提示模式，讓全院同步體驗但不影響診斷流程"
    },
    "answer": "A",
    "topic": "AI風險"
  },
  {
    "id": "s1q24",
    "subject": 1,
    "number": 24,
    "question": "某金融機構的AI 風控系統遭受對抗性攻擊，駭客透過對輸入特徵進 行微小但惡意的擾動，成功欺騙了模型。為了從根本上解決模型自身 對這類攻擊的脆弱性，下列何者並非針對此種攻擊型態的技術手段？",
    "options": {
      "A": "強化資料前處理，用以過濾掉格式不符或數值極端異常的輸入",
      "B": "在模型訓練階段導入對抗樣本訓練，以提升模型對惡意特徵擾動 的辨識與防禦能力",
      "C": "於推論後階段使用規則引擎，以確保模型的預測結果不違反既有 的業務硬性規定",
      "D": "在模型部署環境中強化網路防火牆，以阻擋來自未授權來源的網 路連線"
    },
    "answer": "D",
    "topic": "AI風險"
  },
  {
    "id": "s1q25",
    "subject": 1,
    "number": 25,
    "question": "某企業部署生成式AI 系統協助行銷與內容產出，但近期遭質疑部分 生成內容可能涉及著作權侵權。為降低企業在法律層面的潛在責任與 風險，下列哪一項策略最能有效預防侵權問題產生？",
    "options": {
      "A": "對生成內容進行語意相似度比對，自動標註可能涉及既有著作的 輸出結果，以降低侵權風險",
      "B": "建立訓練資料篩選與授權驗證機制，排除未授權或高風險資料來 源",
      "C": "在訓練與微調過程中採用差分隱私技術，避免模型記憶特定受著 作權保護的樣本",
      "D": "在模型輸出端嵌入浮水印（Watermarking）或數位指紋（Digital Fingerprint）技術，以確保生成內容可追溯"
    },
    "answer": "B",
    "topic": "AI風險"
  },
  {
    "id": "s1q26",
    "subject": 1,
    "number": 26,
    "question": "在房價預測任務中，若發現特徵如「房間數」與「坪數」存在高度多 重共線性（Multicollinearity），為降低共線性對模型參數估計的負 面影響，應優先選擇下列哪種模型？",
    "options": {
      "A": "不受多重共線性影響的決策樹模型",
      "B": "傳統線性迴歸模型，不含正則化項",
      "C": "支持向量機搭配線性核函數",
      "D": "含L1 正則化的LASSO 迴歸模型"
    },
    "answer": "D",
    "topic": "統計"
  },
  {
    "id": "s1q27",
    "subject": 1,
    "number": 27,
    "question": "某企業需分析半結構化的系統日誌（JSON 格式），以提取關鍵的時序 特徵供故障預測模型使用。考量日誌結構複雜且包含巢狀欄位 （Nested Fields），下列哪一種策略最有效且實務可行？",
    "options": {
      "A": "先將JSON 資料扁平化轉成CSV，再對欄位計算統計量（如均值、 次數）作為特徵",
      "B": "使用遞歸神經網路（RNN）直接輸入原始JSON 字串進行時序特徵 抽取",
      "C": "設計遞迴函式展開巢狀欄位，並基於時間窗口（Time Window）進 行聚合與特徵萃取",
      "D": "只保留時間戳記欄位，忽略其他巢狀內容以簡化特徵工程"
    },
    "answer": "C",
    "topic": "特徵工程"
  },
  {
    "id": "s1q28",
    "subject": 1,
    "number": 28,
    "question": "在一個同時包含連續型特徵與類別型特徵的資料集中，若希望透過適 當的特徵工程流程來提升模型整體表現，下列哪一種作法最為合適？",
    "options": {
      "A": "將類別型特徵使用標籤編碼（Label Encoding）轉換後，與連續 特徵直接合併進行模型訓練",
      "B": "將連續特徵進行離散化（Discretization）或分桶（Binning）轉 為類別型特徵，統一以類別方式處理",
      "C": "對連續特徵做標準化（Standardization），類別特徵採用目標編 碼（Target Encoding），並生成交互特徵提升模型表現",
      "D": "只保留連續特徵，忽略類別型變量以簡化模型"
    },
    "answer": "C",
    "topic": "特徵工程"
  },
  {
    "id": "s1q29",
    "subject": 1,
    "number": 29,
    "question": "某AI 開發團隊為提升模型開發效率及品質控制，計畫實施持續整合 （Continuous Integration, CI）流程。下列哪一項做法最符合CI 的核心實踐，且能有效減少整合風險？",
    "options": {
      "A": "在主分支（Main Branch）每日固定時間手動合併並執行完整測試 流程",
      "B": "每次程式碼提交（Commit）後自動觸發建置、單元測試及靜態程 式碼分析",
      "C": "於模型訓練完成後，定期安排開發團隊回顧並合併程式碼",
      "D": "透過自動化部署腳本，將模型在特定時間點批次釋出到測試環境"
    },
    "answer": "B",
    "topic": "MLOps"
  },
  {
    "id": "s1q30",
    "subject": 1,
    "number": 30,
    "question": "某銀行計劃將AI 詐欺偵測模組整合至核心交易系統，主管機關要求 全流程必須符合金融監管對「不可否認性（Non-repudiation）」的資 訊安全規範，以確保日後能進行法務追蹤與稽核。下列哪一項措施最 能確保此要求的落實？",
    "options": {
      "A": "為每筆AI 模型推論記錄其輸入與輸出結果的加密雜湊值 （Hash），並簽署數位簽章以確保不可竄改性",
      "B": "優化模型效能以降低平均推論延遲至100ms 以下，提升使用者體 驗",
      "C": "增加主機備援數量，以確保系統在故障時持續可用",
      "D": "將模型推論請求導入負載平衡器，避免單點壅塞導致服務延遲"
    },
    "answer": "A",
    "topic": "MLOps"
  },
  {
    "id": "s1q31",
    "subject": 1,
    "number": 31,
    "question": "某AI 服務系統每次推論請求需約1 秒完成，且必須支撐高達10,000 次請求每秒（RPS）的流量。為確保系統具備高可用性且能穩定應付 流量峰值，下列哪一種架構方案最為合適？",
    "options": {
      "A": "依賴單台超高效能伺服器進行垂直擴展，提升硬體規格",
      "B": "採用容器化部署並水平擴展服務實例，結合自動彈性伸縮機制 （Auto Scaling）",
      "C": "限制最大併發連線數，以避免系統過載",
      "D": "增加批次處理大小，一次同時處理上千筆請求"
    },
    "answer": "B",
    "topic": "MLOps"
  },
  {
    "id": "s1q32",
    "subject": 1,
    "number": 32,
    "question": "某企業已將AI 模型部署於生產環境，為確保系統持續穩定運作，並 能提前偵測模型效能可能衰退，技術團隊希望透過監控指標進行預 警。 下列哪一項監控指標最具預測效力，能提早發現模型效能下滑風險？",
    "options": {
      "A": "系統CPU 與記憶體使用率波動幅度",
      "B": "模型推論結果的置信度（Confidence）分佈變化趨勢",
      "C": "API 平均回應時間與延遲百分位數變化",
      "D": "輸入特徵與訓練資料分布差異的PSI（Population Stability Index）指數"
    },
    "answer": "D",
    "topic": "MLOps"
  },
  {
    "id": "s1q33",
    "subject": 1,
    "number": 33,
    "question": "企業團隊在使用Word2Vec 模型訓練客服文本語料時，若訓練資料量 龐大且希望模型能更有效捕捉罕見詞的語意關聯，下列哪一種訓練策 略最為適合？",
    "options": {
      "A": "採用Skip-gram 模型，但以隨機初始化權重加快高頻詞的訓練收 斂",
      "B": "採用CBOW 模型（Continuous Bag of Words Model）並結合TF- IDF 權重以強化低頻詞表示",
      "C": "採用Skip-gram 模型，利用中心詞預測周圍詞語，能更有效學習 低頻詞關係",
      "D": "採用CBOW 模型（Continuous Bag of Words Model），利用周圍詞 預測中心詞，能提升罕見詞的語意穩定度"
    },
    "answer": "C",
    "topic": "NLP"
  },
  {
    "id": "s1q34",
    "subject": 1,
    "number": 34,
    "question": "在自駕車影像辨識系統中，開發團隊希望模型能同時辨識每個像素所 屬的物件類別（例如道路、建築、行人），又能區分出同類物件的不 同個體（例如多位行人）。此時最適合採用下列哪一項電腦視覺技 術？",
    "options": {
      "A": "語義分割（Semantic Segmentation）",
      "B": "物件偵測（Object Detection）",
      "C": "實例分割（Instance Segmentation）",
      "D": "全景分割（Panoptic Segmentation）"
    },
    "answer": "D",
    "topic": "CV"
  },
  {
    "id": "s1q35",
    "subject": 1,
    "number": 35,
    "question": "某媒體公司計畫導入CLIP（Contrastive Language–Image Pre- training）模型，以協助大量影像自動標註與搜尋，並希望在無需新 增標訓資料的情況下，僅透過文字提示（Text Prompt）即可識別影 像內容。請問此應用情境中，CLIP 能夠達成的關鍵技術特性為何？",
    "options": {
      "A": "透過圖文對比式學習（Contrastive Learning）將影像與文字映 射至共同嵌入空間（Shared Embedding Space），可直接以語意相似 度進行零樣本分類",
      "B": "透過影像增強與特徵擴散降低標訓資料需求",
      "C": "以監督式學習結合多層感知器（Multilayer Perceptron, MLP） 進行影像特徵分類",
      "D": "以自迴歸生成模型（Autoregressive Model）逐步生成文字標籤 描述影像內容"
    },
    "answer": "A",
    "topic": "多模態"
  },
  {
    "id": "s1q36",
    "subject": 1,
    "number": 36,
    "question": "某資料科學團隊在開發預測模型時，針對多種模型設定（如學習率、 樹深度、正則化係數等）進行系統化測試，希望找出在驗證資料上表 現最穩定的組合。此過程最可能採用下列哪一種方法？",
    "options": {
      "A": "使用交叉驗證（Cross Validation）反覆評估模型以降低過擬合 風險",
      "B": "透過網格搜尋（Grid Search）在多組超參數設定中進行系統化搜 尋與評估",
      "C": "以隨機搜尋（Random Search）快速探索部分參數空間以提升搜尋 效率",
      "D": "採用貝葉斯優化（Bayesian Optimization）根據歷次結果動態調 整搜尋方向"
    },
    "answer": "B",
    "topic": "訓練"
  },
  {
    "id": "s1q37",
    "subject": 1,
    "number": 37,
    "question": "某公司正在訓練一個大型語音合成模型，開發團隊使用多台GPU 進行 訓練，但經常出現 GPU 記憶體不足問題。由於模型架構已固定且無 法更換硬體，團隊希望在維持模型效能與收斂品質的前提下，下列哪 一種方法最有效降低單張 GPU 的記憶體壓力？",
    "options": {
      "A": "減少訓練資料量以降低記憶體使用",
      "B": "採用較小的批次大小（Batch Size）並搭配資料分片（Data Sharding）分散訓練負載",
      "C": "增加學習率（Learning Rate）以加快收斂速度",
      "D": "改用測試資料集（Test Set）進行部分訓練以節省空間"
    },
    "answer": "B",
    "topic": "訓練"
  },
  {
    "id": "s1q38",
    "subject": 1,
    "number": 38,
    "question": "某影像設計團隊在使用Stable Diffusion 生成4K 級產品圖時，發現 影像邊緣與細節存在顆粒化與模糊現象。 若僅能在生成階段進行調整，希望提升畫面清晰度與紋理層次，同時 避免過度平滑，下列哪一項作法最適合？",
    "options": {
      "A": "降低取樣步數，以縮短生成時間",
      "B": "增加取樣步數並選擇高品質取樣器，以強化細節還原度",
      "C": "提高CFG（Classifier-Free Guidance）值，使生成結果更具創意 與多樣性",
      "D": "改用低解析度輸入以降低計算成本"
    },
    "answer": "B",
    "topic": "GenAI"
  },
  {
    "id": "s1q39",
    "subject": 1,
    "number": 39,
    "question": "某企業的資料科學團隊利用ARIMA 模型（AutoRegressive Integrated Moving Average Model）預測每週產品銷售量。模型建 立完成後，分析人員發現預測誤差隨時間呈現週期性波動，且自相關 函數（ACF）顯示殘差在多個時滯（Lag）上仍顯著不為零。根據上述 現象，最合理的模型診斷結論為何？",
    "options": {
      "A": "模型殘差符合白噪音（White Noise）假設，預測表現穩定",
      "B": "模型殘差雖有輕微異常，但可視為隨機誤差忽略不計",
      "C": "模型存在配適不足（Underfitting）問題，需重新調整 p 或 q 參數以捕捉時間依賴性",
      "D": "殘差特性不影響預測結果，無須進一步修正"
    },
    "answer": "C",
    "topic": "統計"
  },
  {
    "id": "s1q40",
    "subject": 1,
    "number": 40,
    "question": "下列哪一項最正確地描述了VAE（Variational Autoencoder）、GAN （Generative Adversarial Network）與擴散模型（Diffusion Model）在多模態潛在空間對齊（Latent Alignment）與生成策略上 的根本差異？",
    "options": {
      "A": "VAE 透過顯式潛在變數建模實現跨模態對齊，適合捕捉整體語意結 構但生成解析度有限；GAN 透過對抗損失（Adversarial Loss）在不 同模態間學習分佈映射，生成品質高但穩定性差；擴散模型則以條件 化噪聲反推（Conditional Denoising）方式實現高保真跨模態生 成，兼具穩定性與多樣性",
      "B": "VAE 與Diffusion Ｍodel 均屬隱式生成架構，主要依賴對抗式訓 練實現跨模態對齊；GAN 則以顯式後驗估計方式提升樣本一致性",
      "C": "VAE 與GAN 均使用馬爾可夫鏈（Markov Chain）進行跨模態轉換； Diffusion Model 則透過 KL 散度最小化學習語意對應。",
      "D": "三者在多模態應用中皆依賴同一潛在表徵空間（Shared Latent Space），僅在解碼器結構不同而已"
    },
    "answer": "A",
    "topic": "GenAI"
  },
  {
    "id": "s1q41",
    "subject": 1,
    "number": 41,
    "question": "在進行超參數調校（Hyperparameter Tuning）時，若直接在K-Fold 交叉驗證（Cross-Validation）的資料上同時調整模型參數並評估效 能，最可能導致下列哪一種問題？",
    "options": {
      "A": "模型的交叉驗證結果出現過度樂觀偏差（Over-optimistic Bias），因測試摺資料間接參與參數選擇，造成資料洩漏（Data Leakage）",
      "B": "模型會在每一摺（Fold）內反覆調整參數，導致訓練不穩與過度 正則化",
      "C": "因交叉驗證資料被重複使用，造成效能方差增大，無法獲得穩定 估計",
      "D": "K-Fold 交叉驗證的假設與超參數搜尋相衝突，導致驗證過程失效"
    },
    "answer": "A",
    "topic": "訓練"
  },
  {
    "id": "s1q42",
    "subject": 1,
    "number": 42,
    "question": "若部署一個深度學習模型至金融風控系統，該模型採用鑑別式架構 （如Transformer Classifier）。然而上線後，模型對新樣本的分類 錯誤率顯著上升，經檢查發現，輸入資料分佈已與原訓練集明顯不 同。針對此情形，下列哪一種應對策略最為適合？",
    "options": {
      "A": "改用生成對抗網路（GAN）生成新樣本並混入訓練集",
      "B": "改用邏輯迴歸模型（Logistic Regression）以提升穩定性",
      "C": "增加模型容量（Model Capacity），以學習更多樣本差異",
      "D": "使用變分自編碼器（VAE）監控潛在空間分佈，偵測輸入資料偏移"
    },
    "answer": "D",
    "topic": "MLOps"
  },
  {
    "id": "s1q43",
    "subject": 1,
    "number": 43,
    "question": "某金融科技公司欲導入AI 模型協助客服郵件自動分類（投訴、詢 問、表揚）。團隊同時考慮兩種模型設計： 方案 A（生成式路徑）：採用VAE 建構潛在語意空間，再結合下游分 類器進行標籤預測； 方案 B（鑑別式路徑）：採用BERT Classifier 直接根據輸入文本進 行監督式分類。 現有標註資料約 2,000 筆，資料分佈均勻但擴充成本高。若團隊希 望公平比較兩種模型的資料利用效率與泛化能力，下列哪一種實驗設 計最能突顯兩者的本質差異？",
    "options": {
      "A": "在完整資料集上分別訓練兩者，並比較其分類準確率 （Accuracy）與推論時間",
      "B": "在低資源情境（Low-resource Setting）下，逐步減少標註比例 （100%、50%、10%），比較其F1-score",
      "C": "使用GAN 自動生成文本樣本補足資料，觀察兩模型在資料增強後 的精確率（Precision）差異",
      "D": "在相同訓練資料上固定輸入維度，僅調整模型參數量，比較其對 過擬合的敏感度"
    },
    "answer": "B",
    "topic": "訓練"
  },
  {
    "id": "s1q44",
    "subject": 1,
    "number": 44,
    "question": "某電信公司希望建立一個模型來預測顧客是否即將流失，並進一步模 擬不同促銷或服務策略下顧客的行為變化，以生成多樣化的虛擬樣本 資料進行A/B 測試與行銷策略評估。若要同時兼顧預測與資料生成的 需求，最適合採用下列哪一種方法？",
    "options": {
      "A": "使用傳統隨機森林（Random Forest）",
      "B": "使用邏輯迴歸（Logistic Regression）模型",
      "C": "使用變分自編碼器（Variational Autoencoder, VAE）或生成對 抗網路（Generative Adversarial Network, GAN）",
      "D": "使用強化學習代理（Reinforcement Learning Agent）"
    },
    "answer": "C",
    "topic": "GenAI"
  },
  {
    "id": "s1q45",
    "subject": 1,
    "number": 45,
    "question": "進行影像分類任務時，研究團隊嘗試利用主成分分析（Principal Component Analysis, PCA）將輸入特徵從1024 維降至100 維，並將 降維後的資料輸入支持向量機（Support Vector Machine, SVM）模 型進行訓練。關於此作法，下列哪一項描述最為合理？",
    "options": {
      "A": "PCA 保留的主成分必然能提升SVM 的分類準確率",
      "B": "使用原始高維資料通常更能保留資訊，因此PCA 沒有實際意義",
      "C": "PCA 可讓SVM 自動適用於非線性（Nonlinear）資料集",
      "D": "降維後可降低訓練時間並減少過擬合（Overfitting）風險"
    },
    "answer": "D",
    "topic": "演算法"
  },
  {
    "id": "s1q46",
    "subject": 1,
    "number": 46,
    "question": "某企業的AI 模型已部署於線上服務環境中，用於即時預測顧客流失 機率。近期團隊注意到模型預測準確率逐漸下降，但系統運作正常且 未出現錯誤訊息。經分析發現，近期輸入資料的分布與模型訓練資料 相比出現顯著偏移。若要在MLOps 流程中主動偵測並預警此類問題， 最應採用下列哪項措施？",
    "options": {
      "A": "建立即時的資料漂移（Data Drift）與概念漂移（Concept Drift）監測機制",
      "B": "將模型轉換為量化版本以降低延遲",
      "C": "增加模型超參數調整次數以強化適應性",
      "D": "使用固定隨機種子（Random Seed）確保訓練穩定"
    },
    "answer": "A",
    "topic": "MLOps"
  },
  {
    "id": "s1q47",
    "subject": 1,
    "number": 47,
    "question": "某金融科技公司導入多任務學習架構，讓單一 Transformer 模型同 時執行OCR（Optical Character Recognition）後的文檔分類以及命 名實體辨識（Named Entity Recognition, NER）任務， 以協助自動歸檔與抽取關鍵金融資訊。在部署初期，團隊發現當模型 的NER 準確率（Accuracy）提升時，文檔分類準確率反而下降。若模 型架構正確且資料品質良好，下列哪一項最可能是造成此現象的原 因？",
    "options": {
      "A": "模型架構無法同時支援文字分類與序列標註任務（Sequence Labeling）",
      "B": "文檔分類任務不需要語意化表徵（Contextualized Representation）",
      "C": "損失函數（Loss Function）未進行權重平衡，導致任務間競爭",
      "D": "所使用的BERT 模型無法支援多任務輸出頭（Multi-Head Outputs）"
    },
    "answer": "C",
    "topic": "NLP"
  },
  {
    "id": "s1q48",
    "subject": 1,
    "number": 48,
    "question": "某數據工程師使用DBSCAN 演算法對一份數百萬筆的高維顧客資料進 行聚類分析，但發現程式執行速度極慢，甚至出現記憶體不足的情 況。若要在不改變演算法核心邏輯的前提下，最有效提升其運算效率 的作法為何？",
    "options": {
      "A": "改用以平均連結（Average Linkage）為基礎的階層式群集法 （Hierarchical Clustering）",
      "B": "採用高效率的距離索引結構（Distance Index Structure），例如 KD-Tree 或 Ball Tree",
      "C": "將 ε（Epsilon）參數調得極小，以減少鄰近點的數量",
      "D": "在資料前處理時增加標準化後的特徵維度數"
    },
    "answer": "B",
    "topic": "演算法"
  },
  {
    "id": "s1q49",
    "subject": 1,
    "number": 49,
    "question": "某電商平台導入AI 情感分析模型，用以自動偵測顧客評論中的負面 情緒並觸發客服機制。然而，上線後發現模型在面對不同語言或族群 書寫風格的評論時表現不一致，例如部分語氣強烈的正面評論被誤判 為負面，而禮貌但含批評意圖的評論卻被判為中性。若從技術與資料 治理的角度分析，下列哪一項描述不正確？",
    "options": {
      "A": "模型未啟用詞嵌入正規化（Embedding Normalization）可能造成 語意距離不穩定，導致預測誤差",
      "B": "訓練語料若偏向特定文化或語氣特徵，可能使模型產生內隱偏誤 （Implicit Bias）",
      "C": "模型若訓練資料來源不平衡，容易導致對不同語言或族群風格的 情緒判斷不準確",
      "D": "Transformer 架構能捕捉上下文語意，但若訓練資料偏差仍存在， 模型仍可能學習到偏誤判斷"
    },
    "answer": "A",
    "topic": "AI風險"
  },
  {
    "id": "s1q50",
    "subject": 1,
    "number": 50,
    "question": "某設計師使用公司內部建置的生成式AI 工具製作行銷素材，並輸入 提示語（Prompt）：「請生成一張模特兒手持品牌飲料、背景為海邊夕 陽的照片」。系統能正確生成主要主題與場景，但輸出的圖像中，品 牌標誌顏色常有誤差，或人物手部姿勢顯得不自然。若從多模態生成 模型的技術機制分析，此現象最可能是下列哪一項原因所造成？",
    "options": {
      "A": "擴散式生成模型的去雜訊過程出現隨機梯度漂移，導致影像像素 錯誤",
      "B": "提示語過長造成Transformer 的位置編碼超出上下文限制，導致 生成混亂",
      "C": "CLIP 模型中的文字編碼器與影像編碼器在語意嵌入空間未充分對 齊，導致跨模態理解偏差",
      "D": "模型未採用對比學習（Contrastive Learning）損失函數，無法 建立多模態語意關聯"
    },
    "answer": "C",
    "topic": "多模態"
  },
  {
    "id": "s2q1",
    "subject": 2,
    "number": 1,
    "question": "若某數據點的Z 分數（Z-Score）= 2，請問代表下列哪一種意涵？",
    "options": {
      "A": "代表該數據點之原始數值為2",
      "B": "該數據點比平均值低2 個標準差",
      "C": "代表數據為異常值",
      "D": "該數據點比平均值高2 個標準差"
    },
    "answer": "D",
    "topic": "統計"
  },
  {
    "id": "s2q2",
    "subject": 2,
    "number": 2,
    "question": "使用Python 的pandas 套件處理各商品銷售數據（變數為 df）時，若需 計算「總銷售額」欄位的敘述性統計量（如平均值、標準差等），應使用 下列哪一種語法？",
    "options": {
      "A": "df['總銷售額'].sum()",
      "B": "df['總銷售額'].describe()",
      "C": "df['總銷售額'].sort_values()",
      "D": "df['總銷售額'].stats()"
    },
    "answer": "B",
    "topic": "Python"
  },
  {
    "id": "s2q3",
    "subject": 2,
    "number": 3,
    "question": "附圖為某資料之分佈圖，此圖資料之偏態（Skewness）值較有可能為下列 哪個選項？",
    "options": {
      "A": "Skewness < 0",
      "B": "Skewness > 0",
      "C": "Skewness = 0",
      "D": "無法計算 Skewness"
    },
    "answer": "A",
    "topic": "統計"
  },
  {
    "id": "s2q4",
    "subject": 2,
    "number": 4,
    "question": "累積分佈函數（Cumulative Distribution Function, CDF）可用於描述 隨機變數的機率分佈特性，其數學定義為下列何者？",
    "options": {
      "A": "機率密度函數（Probability Density Function, PDF）的平均值",
      "B": "機率密度函數（Probability Density Function, PDF）的積分",
      "C": "機率密度函數（Probability Density Function, PDF）的離散總和",
      "D": "機率密度函數（Probability Density Function, PDF）的標準差"
    },
    "answer": "B",
    "topic": "統計"
  },
  {
    "id": "s2q5",
    "subject": 2,
    "number": 5,
    "question": "在進行資料前處理時，若使用Label Encoding 將類別變數轉換為數字型 態，下列何者為最常見的潛在風險？",
    "options": {
      "A": "無法處理缺值",
      "B": "會引入類別之間的虛假順序關係",
      "C": "無法擴展至新資料",
      "D": "記憶體佔用過高"
    },
    "answer": "B",
    "topic": "編碼"
  },
  {
    "id": "s2q6",
    "subject": 2,
    "number": 6,
    "question": "在進行資料分析時，會遇到類別型（Categorical）與數值型 （Numerical） 資料格式。關於這兩種資料格式的處理，下列敘述何者不 正確？",
    "options": {
      "A": "One-Hot 編碼（One-Hot Encoding）會將類別變數轉換為多維二元向 量，適用於無序（Nominal）類別資料，但在高基數（High Cardinality）特徵下可能造成維度爆炸問題",
      "B": "標籤編碼（Label Encoding）會以整數表示不同類別，若應用於無序 （Nominal）資料，可能導致模型誤將編碼值解讀為具數值大小關係的特 徵",
      "C": "標準化（Standardization）透過將資料平移與縮放，使其平均值為 0、標準差為 1，可在多數距離型演算法中改善收斂速度，並同時將數值 範圍壓縮至 0 至 1 之間",
      "D": "對連續變數進行分箱（Binning）可提升模型可解釋性，但若分段方式 未依據資料分佈特性設計，可能導致資訊損失或邊界偏誤"
    },
    "answer": "C",
    "topic": "編碼"
  },
  {
    "id": "s2q7",
    "subject": 2,
    "number": 7,
    "question": "在資料庫的ACID 特性中，下列何者為「原子性（Atomicity）」的正確定 義？",
    "options": {
      "A": "所有資料欄位必須為相同型別",
      "B": "每次交易需以批次方式執行",
      "C": "交易不可分割，需完全成功或完全失敗",
      "D": "系統會自動同步交易資料至所有節點"
    },
    "answer": "C",
    "topic": "資料庫"
  },
  {
    "id": "s2q8",
    "subject": 2,
    "number": 8,
    "question": "資料科學家為分析顧客行為，利用現有欄位「銷售金額」與「瀏覽次 數」，計算出新變數「銷售金額/瀏覽次數」。此動作屬於下列哪一類特徵 工程方法？",
    "options": {
      "A": "特徵選擇（Feature Selection）",
      "B": "特徵衍生（Feature Derivation）",
      "C": "特徵轉換（Feature Transformation）",
      "D": "分箱處理（Binning）"
    },
    "answer": "B",
    "topic": "特徵工程"
  },
  {
    "id": "s2q9",
    "subject": 2,
    "number": 9,
    "question": "在進行數值特徵的標準化（Normalization）時，若資料中存在極端值 （Outliers），下列哪一種方法最適合使用？",
    "options": {
      "A": "Min-Max 正規化（Min-Max Scaling）",
      "B": "Z-score 標準化（Z-score Normalization）",
      "C": "穩健縮放（Robust Scaling）",
      "D": "標準分箱（Standard Binning）"
    },
    "answer": "C",
    "topic": "標準化"
  },
  {
    "id": "s2q10",
    "subject": 2,
    "number": 10,
    "question": "下列哪一種情境最適合應用異常偵測（Anomaly Detection）技術？",
    "options": {
      "A": "根據歷史銷售資料預測特定商品在旺季期間是否會出現供貨短缺，以 提前調整庫存策略",
      "B": "透過信用風險模型預測顧客是否可能發生違約，以輔助核貸決策",
      "C": "即時分析金融交易資料流，偵測與平常交易行為明顯不同的可疑交易 紀錄",
      "D": "監控線上服務平台的使用者登入次數，預測次日的登入量變化趨勢"
    },
    "answer": "C",
    "topic": "異常偵測"
  },
  {
    "id": "s2q11",
    "subject": 2,
    "number": 11,
    "question": "若一家公司需即時監控大量物聯網裝置的異常行為，下列哪一種組合最適 合此應用？",
    "options": {
      "A": "傳統關聯式資料庫+圖形視覺化",
      "B": "批次資料處理+雲端備份",
      "C": "大數據平台+即時資料分析技術",
      "D": "Word 文件+手動標註"
    },
    "answer": "C",
    "topic": "大數據架構"
  },
  {
    "id": "s2q12",
    "subject": 2,
    "number": 12,
    "question": "在處理分類問題時，若某一類樣本數明顯少於其他類別，研究人員可能採 用隨機過採樣（Random Oversampling）以平衡資料比例，此方法最常造 成下列哪一種問題？",
    "options": {
      "A": "增加過擬合風險",
      "B": "降低模型的收斂速度",
      "C": "減少資料總筆數數量",
      "D": "導致訓練資料欄位缺失"
    },
    "answer": "A",
    "topic": "不平衡"
  },
  {
    "id": "s2q13",
    "subject": 2,
    "number": 13,
    "question": "下列何者為同態加密（Homomorphic Encryption）技術的核心特性？",
    "options": {
      "A": "將資料轉換為匿名識別碼以隱藏身分",
      "B": "對資料進行標準化處理以提升模型精度",
      "C": "自動偵測與排除異常值",
      "D": "可直接在加密狀態下進行數據運算"
    },
    "answer": "D",
    "topic": "隱私"
  },
  {
    "id": "s2q14",
    "subject": 2,
    "number": 14,
    "question": "某組資料共10 項標籤如下： A, A, A, A, A, B, B, B, B, B 若該標籤僅有A、B 兩種，請問這組資料的「正規化吉尼不純度 （Normalized Gini impurity）」為何？",
    "options": {
      "A": "0",
      "B": "0.42",
      "C": "0.84",
      "D": "1"
    },
    "answer": "D",
    "topic": "演算法"
  },
  {
    "id": "s2q15",
    "subject": 2,
    "number": 15,
    "question": "某家客服中心統計資料發現，平均每小時會接到約20 通顧客來電，但每 分鐘的來電數量不固定，可能為 0、1、2 通不等。這些來電事件彼此獨 立，且在短時間內，發生的機率與時間長短成正比。若要以機率模型描述 「每分鐘接到幾通來電」的機率分佈，下列哪一種最適合使用？",
    "options": {
      "A": "均勻分佈（Uniform distribution）",
      "B": "指數分佈（Exponential distribution）",
      "C": "卜瓦松分佈（Poisson distribution）",
      "D": "常態分佈（Normal distribution）"
    },
    "answer": "C",
    "topic": "統計"
  },
  {
    "id": "s2q16",
    "subject": 2,
    "number": 16,
    "question": "某金融科技公司以Z 分數（Z-Score）監控交易金額異常狀況。若交易金 額平均為新台幣2,000 元，標準差為400 元，某筆交易金額為 3,200 元，且公司以|Z| ≥ 3 判定為異常值（Outlier），下列判斷何者最為正 確？",
    "options": {
      "A": "該筆交易的Z 分數為 3，應標記為異常值",
      "B": "該筆交易的Z 分數為 2.5，屬於合理變異範圍",
      "C": "該筆交易的Z 分數為 2，顯示模型標準差估計過高",
      "D": "該筆交易的Z 分數為 1.5，無須納入異常檢測"
    },
    "answer": "A",
    "topic": "統計"
  },
  {
    "id": "s2q17",
    "subject": 2,
    "number": 17,
    "question": "某電商公司欲利用顧客行為資料建立消費預測模型，其中「會員等級」欄 位包含「一般、白金、黑卡」三種類別。若模型採用梯度提升樹 （Gradient Boosting Tree）演算法，資料科學家在進行特徵編碼時應特 別注意下列何種情況？",
    "options": {
      "A": "應優先採用獨熱編碼（One-Hot Encoding），以減少類別之間的相依性 與記憶體使用量",
      "B": "直接使用標籤編碼（Label Encoding）可能使模型誤判類別間存在順 序關係，導致特徵重要性偏誤",
      "C": "使用目標編碼（Target Encoding）會自動消除過擬合 （Overfitting）風險",
      "D": "若類別數量較少，建議先使用主成分分析（Principal Component Analysis, PCA）進行降維"
    },
    "answer": "B",
    "topic": "編碼"
  },
  {
    "id": "s2q18",
    "subject": 2,
    "number": 18,
    "question": "某人工智慧團隊使用分散式資料庫（Distributed Database）儲存模型訓 練資料，並在更新訓練樣本時啟用多節點交易。若其中一個節點在交易過 程中發生錯誤，但系統仍確保整體資料不會出現部分更新、最終狀態維持 一致，下列何者最能說明此現象？",
    "options": {
      "A": "系統透過原子性（Atomicity）確保交易必須全部成功或全部回復 （Rollback）",
      "B": "系統透過一致性（Consistency）確保交易完成後資料符合完整性規 則",
      "C": "系統透過隔離性（Isolation）避免多筆交易同時存取或修改相同資 料",
      "D": "系統透過持久性（Durability）確保交易一旦提交，其結果將永久保 留於資料庫中"
    },
    "answer": "A",
    "topic": "資料庫"
  },
  {
    "id": "s2q19",
    "subject": 2,
    "number": 19,
    "question": "某製造企業導入上萬台物聯網（IoT）感測器以進行設備健康監測。系統 需在毫秒級回應異常事件，並同時將完整資料保留於雲端供後續 AI 模型 訓練與分析。若企業希望兼顧即時性、資料完整性與可擴展性，下列哪一 種資料流程設計最符合此目標？",
    "options": {
      "A": "感測器 → 雲端 API Gateway → 分散式資料庫→ 批次特徵工程（→ 模型推論",
      "B": "感測器 → MQTT Broker → 雲端資料倉儲→ 即時儀表板→ 模型再訓 練",
      "C": "感測器 → 邊緣運算節點→ 流式資料處理框架（Stream Processing Framework）→ 雲端資料湖→ 模型推論",
      "D": "感測器 → 本地快取層→ RESTful API → 雲端報表系統）→ 模型批 次更新"
    },
    "answer": "C",
    "topic": "大數據架構"
  },
  {
    "id": "s2q20",
    "subject": 2,
    "number": 20,
    "question": "某銀行計畫將信用風險評估模型部署至雲端平台，以便即時分析客戶交易 行為。由於涉及大量敏感金融資料，銀行要求雲端服務商在不解密原始資 料的情況下仍能執行模型運算。為達成此目標，最適合採用下列哪一項技 術？",
    "options": {
      "A": "在上傳資料前進行匿名化（Anonymization），僅保留可識別代碼供比 對使用",
      "B": "利用雜湊（Hash）函數轉換資料，以確保模型可追蹤但無法還原個 資",
      "C": "採用資料本地化（Data Localization）策略，將所有模型訓練限制於 內部伺服器中",
      "D": "透過同態加密（Homomorphic Encryption），讓雲端系統能直接在加密 資料上執行運算，解密後結果與原始資料一致"
    },
    "answer": "D",
    "topic": "隱私"
  },
  {
    "id": "s2q21",
    "subject": 2,
    "number": 21,
    "question": "某資料分析師設計在業務績效報告時，希望單一頁面中同時呈現多區域、 不同產品線的銷售趨勢變化，並確保主管能在短時間內掌握整體資料走 向。若依據 Edward Rolf Tufte 的數據密度（Data Density） 原則，下 列哪一種設計方式最能符合該概念？",
    "options": {
      "A": "將每個區域的銷售資料分成多張獨立折線圖，以避免資訊重疊",
      "B": "使用顏色區分產品線，於同一圖表中整合多區域趨勢線，保持比例一 致且標註清晰",
      "C": "移除所有輔助線與標籤，僅保留主要折線以凸顯趨勢",
      "D": "將資料轉換為表格形式，確保數值精確呈現並取代圖表視覺化"
    },
    "answer": "B",
    "topic": "視覺化"
  },
  {
    "id": "s2q22",
    "subject": 2,
    "number": 22,
    "question": "某投資研究員希望分析四檔科技類股（A、B、C、D）每日報酬率的變化趨 勢，以判斷這些股票之間是否存在高度相關性與共變動性，並評估投資組 合分散風險的程度。若研究員希望以單一圖表快速呈現各股票間的關聯強 度與方向，下列哪一種視覺化呈現方式最適合？",
    "options": {
      "A": "為每檔股票各自繪製直方圖（Histogram）以比較報酬率分佈",
      "B": "針對任兩檔股票繪製散佈圖並加上趨勢線（Regression Line）",
      "C": "使用雙軸折線圖（Dual-axis Line Chart）同時顯示四檔股價變化",
      "D": "熱力圖（Heatmap）配合相關係數矩陣（Correlation Matrix）"
    },
    "answer": "D",
    "topic": "視覺化"
  },
  {
    "id": "s2q23",
    "subject": 2,
    "number": 23,
    "question": "某研究團隊以單樣本t 檢定（one-sample t-test）檢驗「新行銷策略後 的平均月銷售額是否與原本的 100 萬元不同」，顯著水準設定為 α =0.05。檢定結果顯示：p 值=0.08，且95%信賴區間為 [95 萬元, 108 萬 元]。根據上述結果，下列敘述何者正確？",
    "options": {
      "A": "因p 值< 0.05，可拒絕虛無假設",
      "B": "若顯著水準改為0.10，仍不顯著",
      "C": "因100 萬元落在信賴區間內，無法拒絕虛無假設",
      "D": "信賴區間寬度僅與顯著水準有關"
    },
    "answer": "C",
    "topic": "假設檢定"
  },
  {
    "id": "s2q24",
    "subject": 2,
    "number": 24,
    "question": "某企業建置生成式 AI 系統，利用大量客服紀錄與產品評論資料訓練語言 模型，以自動生成客服回覆與知識摘要。由於資料來源多樣，且包含非結 構化文字、影像與表格資訊，團隊希望在不降低模型效能的前提下，提升 資料處理效率與一致性，下列哪一種資料處理策略最適合？",
    "options": {
      "A": "建立資料湖（Data Lake）結構，並以Apache Spark 或Ray 進行分散 式資料預處理與特徵抽取，再串接至模型訓練管線（Pipeline）",
      "B": "採用單節點高效能伺服器搭配批次處理模式，集中執行資料清理與格 式轉換",
      "C": "將所有文字資料轉換為向量，並以資料庫索引方式直接餵入語言模型 訓練",
      "D": "使用生成式模型先行自動清理資料內容，再將結果輸入至下游訓練流 程"
    },
    "answer": "A",
    "topic": "大數據架構"
  },
  {
    "id": "s2q25",
    "subject": 2,
    "number": 25,
    "question": "某電商資料團隊繪製顧客單筆消費金額的箱型圖後發現：四分位距 （IQR）範圍極小，但上鬚線拉得很長，且在高金額區域有多筆離群值。 若希望協助行銷部門依據消費層級設計分群策略，下列哪一種視覺化方式 最有助於凸顯不同消費層級間的差異？",
    "options": {
      "A": "以對數刻度繪製箱型圖或長條圖，放大高金額消費族群的變化差異",
      "B": "移除所有離群值，確保資料呈現集中分布",
      "C": "採用等距分箱（Equal-Width Binning）方式分群",
      "D": "改以折線圖（Line Chart）觀察時間變化趨勢"
    },
    "answer": "A",
    "topic": "視覺化"
  },
  {
    "id": "s2q26",
    "subject": 2,
    "number": 26,
    "question": "某串流影音平台運用關聯規則學習（Association Rule Learning）分析 用戶的觀影行為，發現若使用者觀看了科幻影集，則有較高機率接著觀看 超級英雄電影。分析顯示，同時觀看這兩種類型的使用者約佔全部觀影紀 錄的12%，而觀看科幻影集的使用者中，有50%也觀看了超級英雄電影， 該規則的提升度（Lift）為1.8。根據上述資訊，下列哪一項推論最為正 確？",
    "options": {
      "A": "支持度（Support）過低，代表此規則不具任何商業價值",
      "B": "提升度（Lift）大於 1 表示兩種類型內容無關，僅屬於隨機重疊",
      "C": "信賴度（Confidence）為 50%，代表觀看科幻影集者有明顯傾向觀看 超級英雄電影",
      "D": "同時觀看比例僅12%，代表兩種類型互相排斥"
    },
    "answer": "C",
    "topic": "分析方法"
  },
  {
    "id": "s2q27",
    "subject": 2,
    "number": 27,
    "question": "某金融科技公司分析每日上億筆交易資料，以監控客戶轉帳金額分佈與異 常波動。由於資料量極大，為兼顧效率與準確度，團隊決定採用「近似分 位數（Approximate Quantile）」方法進行資料摘要統計。下列何者最能 正確反映該技術的核心目的？",
    "options": {
      "A": "確保每個分位值的結果完全精確，即使計算時間較長",
      "B": "利用機器學習模型預測分位數位置，以減少統計計算量",
      "C": "僅能對結構化資料進行批次處理，無法應用於即時資料流",
      "D": "在可容忍誤差範圍內，快速估算分位值以支援即時分析"
    },
    "answer": "D",
    "topic": "大數據架構"
  },
  {
    "id": "s2q28",
    "subject": 2,
    "number": 28,
    "question": "若在高維度（>500 維）的資料上應用DBSCAN（Density-Based Spatial Clustering of Applications with Noise）演算法，卻發現所有資料點 皆被判定為雜訊（Noise），下列何者為最有可能的原因？",
    "options": {
      "A": "高維下距離變化趨同，導致 ε（Epsilon）閾值選擇失效",
      "B": "使用錯誤的距離函數（Distance Function）",
      "C": "MinPts 參數設得太小",
      "D": "資料過度標準化導致特徵消失"
    },
    "answer": "A",
    "topic": "演算法"
  },
  {
    "id": "s2q29",
    "subject": 2,
    "number": 29,
    "question": "某團隊在開發風險評估模型時，使用主成分分析（Principal Component Analysis, PCA）進行降維。輸入資料包含三個數值欄位：「交易金額（單 位：新台幣）」、「交易次數（次／月）」與「年齡（歲）」，其數值量級分別 約為10⁵、10¹與10²。分析人員直接將原始數據帶入 PCA，結果第一主成 分（PC1）幾乎完全由「交易金額」主導。下列哪一項作法或判斷最合 理？",
    "options": {
      "A": "這是正常現象，金額本身變異較大，應主導主要成分",
      "B": "若改用特徵選擇法，可自動解決變數量級問題",
      "C": "可刪除「交易金額」欄位以平衡各主成分的影響",
      "D": "在進行PCA 前應先進行標準化（Standardization），以避免因數值尺 度差異造成特徵偏誤"
    },
    "answer": "D",
    "topic": "PCA"
  },
  {
    "id": "s2q30",
    "subject": 2,
    "number": 30,
    "question": "某行銷團隊想了解「廣告預算」與「銷售金額」之間的關聯程度。經繪製 散佈圖後發現兩者呈現明顯線性趨勢，且資料中無明顯離群值 （Outliers）。若希望衡量兩者之間線性關係的強度與方向，下列哪一種 方法最適合？",
    "options": {
      "A": "均方根誤差（Root Mean Squared Error, RMSE）",
      "B": "共變異數（Covariance）",
      "C": "皮爾森相關係數（Pearson Correlation Coefficient）",
      "D": "平均絕對誤差（Mean Absolute Error, MAE）"
    },
    "answer": "C",
    "topic": "統計"
  },
  {
    "id": "s2q31",
    "subject": 2,
    "number": 31,
    "question": "某電商團隊觀察到，每位顧客對廣告推播的點擊行為可視為一次伯努利試 驗（Bernoulli Trial），單次點擊成功機率為p=0.4。當推播對象擴增至 5,000 位顧客時，團隊想快速預估「成功點擊總數」的分佈情形，以進行 模型效能模擬與預測。若希望以常態分佈（Normal Distribution）近似 原始分佈，下列哪一項判斷最為合理？",
    "options": {
      "A": "因樣本數極大，可直接以常態分佈近似二項分佈（Binomial Distribution）",
      "B": "只有當 np 與 n(1-p) 皆大於 5 時，才能以常態分佈作近似",
      "C": "常態近似只適用於p=0.5 的情況",
      "D": "無論樣本數多大，二項分佈都不能以常態分佈近似"
    },
    "answer": "B",
    "topic": "統計"
  },
  {
    "id": "s2q32",
    "subject": 2,
    "number": 32,
    "question": "某電信公司導入生成式AI 客服系統，利用過去對話紀錄與用戶行為資料 訓練語言模型，在資料治理與合規審查過程中，團隊發現模型可能會在回 答中生成包含真實姓名、電話或交易資訊的內容。為確保系統符合個資法 及生成式AI 的安全與隱私要求，下列哪一項作法最符合實務可行及法規 原則？",
    "options": {
      "A": "在訓練資料前進行資料匿名化（Anonymization）或偽匿名化 （Pseudonymization）處理，並建立輸出內容稽核機制",
      "B": "改以強化學習（Reinforcement Learning）微調模型，使模型學習避 免產出真實資訊",
      "C": "採用同態加密（Homomorphic Encryption）以加密所有文字輸入，確 保模型無法辨識任何個資",
      "D": "僅設定模型回覆時不顯示用戶姓名，即可視為隱私防護完成"
    },
    "answer": "A",
    "topic": "隱私"
  },
  {
    "id": "s2q33",
    "subject": 2,
    "number": 33,
    "question": "某金融機構的量化分析師在建立資產風險評估模型時，發現報酬率資料分 佈明顯非對稱，且出現多次極端損失事件，使得傳統假設常態分佈的模型 無法準確反映真實風險。若希望在不依賴常態分佈假設的前提下，採取更 能捕捉資料極端情況的建模策略，下列哪一種方法最為合適？",
    "options": {
      "A": "採用線性迴歸模型（Linear Regression Model），以常態分佈殘差 （Residuals）為基礎進行推估",
      "B": "使用平均數（Mean）與標準差（Standard Deviation）估計波動範 圍",
      "C": "將資料裁剪至 ±3σ 範圍內以排除異常值影響",
      "D": "採用分位數回歸模型（Quantile Regression Model），聚焦於尾部分 位（Tail Quantiles）以評估極端風險"
    },
    "answer": "D",
    "topic": "統計"
  },
  {
    "id": "s2q34",
    "subject": 2,
    "number": 34,
    "question": "在圖形資料庫（Graph Database）中建模社群平台資料時，若每筆「按 讚」行為都包含時間戳記（Timestamp）與裝置類型（Device Type）等資 訊。若希望同時保留使用者與貼文之間的互動關係，並能有效查詢「按 讚」的行為屬性，下列哪一種設計方式最為合適？",
    "options": {
      "A": "將「按讚」視為節點（Node），與使用者建立邊（Edge）",
      "B": "將「按讚」資訊作為邊的屬性（Property）儲存，連結使用者與被按 讚的貼文節點",
      "C": "把「按讚」資訊直接寫入使用者節點中作為屬性",
      "D": "建立「按讚紀錄表」並將資料存入關聯式資料庫"
    },
    "answer": "B",
    "topic": "資料庫"
  },
  {
    "id": "s2q35",
    "subject": 2,
    "number": 35,
    "question": "某企業欲建構知識圖譜（Knowledge Graph），以整合內部的研究報告、專 利資料與專家知識，並支援語意查詢與關聯推理。若希望模型能具備良好 的語意擴展性與高效推理能力，下列哪一種圖模型設計最為合適？",
    "options": {
      "A": "僅以節點（Node）與邊（Edge）表示，所有資訊存放於節點屬性中",
      "B": "將資料結構建為 RDF（Resource Description Framework）三元組 （Subject–Predicate–Object）",
      "C": "使用文件型資料庫儲存內容，並以標籤（Tag）連接節點",
      "D": "採用關聯式資料庫儲存對應關係，並搭配預建索引加速查詢"
    },
    "answer": "B",
    "topic": "資料庫"
  },
  {
    "id": "s2q36",
    "subject": 2,
    "number": 36,
    "question": "某研究人員欲使用線性迴歸模型（Linear Regression Model）分析變數 Y 與X 之間的關係，但發現Y 的分佈明顯右偏，且其變異數隨X 的增大而 增加。為滿足模型假設並提升配適效果，下列哪一種前處理方法最為合 適？",
    "options": {
      "A": "對X 進行標準化（Standardization）",
      "B": "對Y 進行Box–Cox 轉換（Box–Cox Transformation）",
      "C": "對資料進行一次差分（First Differencing）",
      "D": "將Y 中變異較大的樣本移除"
    },
    "answer": "B",
    "topic": "統計"
  },
  {
    "id": "s2q37",
    "subject": 2,
    "number": 37,
    "question": "若開發一個用於罕見疾病自動診斷的分類模型，目前資料集中確診樣本僅 佔不到1%，且因為標註成本高，短期內無法取得更多資料。在此情況 下，若希望提升模型對少數類的偵測能力，同時避免過擬合，下列哪一種 策略最為合理？",
    "options": {
      "A": "對少數類進行隨機過採樣（Random Oversampling）",
      "B": "對多數類進行欠採樣（Random Undersampling）",
      "C": "使用SMOTE（Synthetic Minority Over-sampling Technique）生成 合成少數類樣本後再訓練分類模型",
      "D": "僅使用現有資料調整模型決策閾值（Decision Threshold）以提升召 回率"
    },
    "answer": "C",
    "topic": "不平衡"
  },
  {
    "id": "s2q38",
    "subject": 2,
    "number": 38,
    "question": "一家製造廠評估新生產線推出後，產品良率是否較原生產線提升。工程師 分別從兩條生產線各抽樣 100 件產品，原生產線良率為 95%，新生產線 為97%。若欲檢定兩條生產線良率的差異是否具有統計意義，下列哪一種 方法最為合適？",
    "options": {
      "A": "雙樣本平均數 t 檢定（Two-sample t-test）",
      "B": "雙比例 Z 檢定（Two-proportion Z-test）",
      "C": "卡方檢定（Chi-square test）",
      "D": "變異數分析（ANOVA）"
    },
    "answer": "B",
    "topic": "假設檢定"
  },
  {
    "id": "s2q39",
    "subject": 2,
    "number": 39,
    "question": "若評估一個新開發的腫瘤分類模型，其資料集中有80%的樣本來自良性病 例。若直接使用5-fold 交叉驗證（Cross-Validation） 進行模型評估， 可能導致模型效能評估出現偏差，為避免此問題，下列哪一種作法最合 適？",
    "options": {
      "A": "降低K 值以減少交叉驗證次數",
      "B": "改為使用拔靴法（Bootstrap）",
      "C": "調整測試集使良性樣本比例更高，以模擬真實分佈",
      "D": "使用分層交叉驗證（Stratified K-Fold Cross-Validation），以確保 每折類別比例一致"
    },
    "answer": "D",
    "topic": "驗證"
  },
  {
    "id": "s2q40",
    "subject": 2,
    "number": 40,
    "question": "請參考附圖，下列虛擬程式碼（pseudocode）最可能是在描述何種驗證 法？",
    "options": {
      "A": "Hold-out 驗證（Hold-out Validation）",
      "B": "留一交叉驗證LOOCV（ Leave-One-Out Cross Validation）",
      "C": "K-fold 交叉驗證（K-fold Cross Validation）",
      "D": "拔靴法（Bootstrap）驗證"
    },
    "answer": "B",
    "topic": "驗證"
  },
  {
    "id": "s2q41",
    "subject": 2,
    "number": 41,
    "question": "請參考附圖，下列虛擬程式碼（pseudocode）最可能是在描述何種演算 法？",
    "options": {
      "A": "K-means 分群（K-means Clustering）",
      "B": "高斯混合模型分群（Gaussian Mixture Model Clustering）",
      "C": "階層式分群（Hierarchical Clustering）",
      "D": "DBSCAN 分群（Density-based Spatial Clustering of Applications with Noise Clustering）"
    },
    "answer": "A",
    "topic": "演算法"
  },
  {
    "id": "s2q42",
    "subject": 2,
    "number": 42,
    "question": "考慮某生產線每小時出現瑕疵品的個數符合卜瓦松分佈（Poisson Distribution），已知平均每小時產生5 個瑕疵品，附圖程式碼展示資料 處理，請問下列敘述何者正確？",
    "options": {
      "A": "lambda_poisson = 5 表示每小時最多5 個瑕疵品",
      "B": "poisson.pmf(5, lambda_poisson) 表示小於5 個瑕疵品的機率",
      "C": "卜瓦松分佈的適用條件為事件彼此獨立，且平均發生率固定",
      "D": "poisson.cdf(10, 5) 表示大於或等於10 個瑕疵品的機率 一間遊戲市場研究公司正在分析全球電子遊戲銷售情況，並準備建立一份 「熱銷遊戲銷售報告」。分析師取得了一份名為 vgsales.csv 的資料集， 內容包含了全球銷量超過 10 萬份的電子遊戲清單。研究團隊希望透過這 份資料，了解不同年份、平台與地區的銷售趨勢。資料集的欄位說明如 下，請根據下述資料情境回答以43~47 題。 Name：遊戲名稱 Platform：遊戲平台（如 PS4、X360、Wii 等） Year：發售年份 Genre：遊戲類型（如 Action、Sports、Role-Playing 等） Publisher：發行商名稱 NA_Sales / EU_Sales / JP_Sales / Other_Sales：各地區銷售量（單 位：百萬份） Global_Sales：全球總銷售量（單位：百萬份） 資料的欄位概觀如下："
    },
    "answer": "C",
    "topic": "Python"
  },
  {
    "id": "s2q43",
    "subject": 2,
    "number": 43,
    "question": "分析師在載入資料後，檢視 Year 欄位的資料型態，發現它是float64， 而非一般年份常用的整數。他想了解這樣的情形為什麼會發生。請問下列 哪些原因可能導致這種狀況？ 原因A：CSV 檔中Year 欄位有缺失值(NaN)，導致Pandas 自動將整欄轉為 浮點數。 原因B：CSV 檔中的年份資料原本是字串(如 \"2006\")，Pandas 轉換時出 錯而變成浮點數。 原因C：Pandas 預設會將所有數值型態讀取為float64，不論資料是否為 整數。 原因D：CSV 檔中的年份資料可能包含小數點(例如2006.0)，因此被視為 浮點數。",
    "options": {
      "A": "原因B、原因C",
      "B": "原因A、原因D",
      "C": "原因A、原因B、原因D",
      "D": "原因C、原因D"
    },
    "answer": "B",
    "topic": "Python"
  },
  {
    "id": "s2q44",
    "subject": 2,
    "number": 44,
    "question": "研究團隊接下來想要將 Year 欄位轉換為整數型態，以便後續進行年份趨 勢分析。考慮到資料中可能包含缺失值（NaN），請選出最合適的轉換方 式。",
    "options": {
      "A": "data['Year'] = data['Year'].astype(int)",
      "B": "data['Year'] = data['Year'].fillna(0).astype(int)",
      "C": "data['Year'] = data['Year'].fillna(1).astype(int)",
      "D": "data['Year'] = data['Year'].astype('Int64')"
    },
    "answer": "D",
    "topic": "Python"
  },
  {
    "id": "s2q45",
    "subject": 2,
    "number": 45,
    "question": "為了觀察各遊戲平台的市場表現，分析師想要統計每個平台的全球銷售總 額，並以長條圖呈現。請選出最能正確實現此分析的程式碼。",
    "options": {
      "A": "data.groupby(\"Platform\")[\"Global_Sales\"].sum().plot(kind=\"bar\")",
      "B": "data.groupby(\"Platform\")[\"Global_Sales\"].count().plot(kind=\"bar\")",
      "C": "data[\"Platform\"].value_counts().plot(kind=\"bar\")",
      "D": "data.groupby(\"Platform\")[\"Global_Sales\"].mean().plot(kind=\"bar\")"
    },
    "answer": "A",
    "topic": "Python"
  },
  {
    "id": "s2q46",
    "subject": 2,
    "number": 46,
    "question": "團隊希望比較北美、歐洲、日本及其他地區的整體銷售比例，並使用 seaborn 套件以長條圖的形式進行可視化分析。請選出能正確顯示這些地 區銷售總額比例的程式碼。",
    "options": {
      "A": "sns.countplot(x=[\"NA_Sales\",\"EU_Sales\",\"JP_Sales\",\"Other_Sales\"], data=data)",
      "B": "sns.lineplot(x=\"Platform\", y=[\"NA_Sales\",\"EU_Sales\",\"JP_Sales\",\"Other_Sales\"], data=data)",
      "C": "sns.barplot(x=\"variable\", y=\"value\", data=pd.melt(data, value_vars=[\"NA_Sales\",\"EU_Sales\",\"JP_Sales\",\"Other_Sales\"]), estimator=sum)",
      "D": "sns.histplot(data[[\"NA_Sales\",\"EU_Sales\",\"JP_Sales\",\"Other_Sales\"]])"
    },
    "answer": "C",
    "topic": "Python"
  },
  {
    "id": "s2q47",
    "subject": 2,
    "number": 47,
    "question": "研究團隊想要知道在北美地區（NA）銷售成績最好的遊戲前五名，並希望 以seaborn 的條狀圖呈現結果。請選出能正確完成這項分析的程式碼。",
    "options": {
      "A": "sns.barplot(x=\"NA_Sales\", y=\"Name\", data=data.head(5))",
      "B": "sns.barplot(x=\"Name\", y=\"NA_Sales\", data=data.nlargest(5, \"NA_Sales\"))",
      "C": "sns.lineplot(x=\"Name\", y=\"NA_Sales\", data=data.nlargest(5, \"NA_Sales\"))",
      "D": "sns.countplot(x=\"Name\", y=\"NA_Sales\", data=data) 使用銷售資料集(marketing.csv)進行迴歸分析，附圖程式碼展示資料載 入與處理，請回答後續48~50 題。 下圖顯示資料集的前5 筆資料與相關資訊。"
    },
    "answer": "B",
    "topic": "Python"
  },
  {
    "id": "s2q48",
    "subject": 2,
    "number": 48,
    "question": "根據上述結果，下列何者正確？",
    "options": {
      "A": "資料集個數為199 筆，變數個數為4 個",
      "B": "sales 變數的中位數是16.827",
      "C": "facebook 變數的第三四分位數(Q3)是11.94",
      "D": "youtube 變數的第一四分位數(Q1)是89.25"
    },
    "answer": "C",
    "topic": "Python"
  },
  {
    "id": "s2q49",
    "subject": 2,
    "number": 49,
    "question": "參考下圖計算各變數的遺漏值(NaN)個數結果，下列何者正確？ 選項A: df.isnull().sum() 選項B: df.isNaN().sum() 選項C: df.isna().sum() 選項D: df.isnan().sum()",
    "options": {
      "A": "選項D",
      "B": "選項B、選項C、選項D",
      "C": "選項A、選項C",
      "D": "選項A、選項B、選項C"
    },
    "answer": "C",
    "topic": "Python"
  },
  {
    "id": "s2q50",
    "subject": 2,
    "number": 50,
    "question": "考慮資料集已經填補遺漏值，參考下圖執行結果，下列何者正確？ A：空格1 完整語法 reg = LinearRegression().fit(y, X) B：空格1 完整語法 reg = LinearRegression().fit(X, y) C：print(reg.coef_) 結果為包括截距項等4 個係數值 D：空格2 完整語法 sm.OLS(X2, y).fit() E：model_sm 迴歸模型的所有迴歸係數在α=0.05 之下具有顯著的解釋力 F：截距項係數值為3.5561",
    "options": {
      "A": "B、C、F",
      "B": "B、F",
      "C": "A、C、D、F",
      "D": "B、E"
    },
    "answer": "B",
    "topic": "Python"
  },
  {
    "id": "s3q2",
    "subject": 3,
    "number": 2,
    "question": "在建立迴歸或分類模型時，若希望避免模型過度擬合（Overfitting），可 透過加入正則化項以限制模型的複雜度。其中，L1 正則化（Lasso）的主 要效果為何？",
    "options": {
      "A": "增加模型參數的數量，以提升表現靈活度",
      "B": "強化梯度穩定性，避免參數更新過度震盪",
      "C": "產生稀疏模型（Sparse Model），使部分參數權重收斂為零",
      "D": "提高學習率（Learning Rate），加速模型收斂速度"
    },
    "answer": "C",
    "topic": "ML/特徵工程"
  },
  {
    "id": "s3q5",
    "subject": 3,
    "number": 5,
    "question": "某智慧製造公司開發一套影像辨識系統，用於自動檢測生產線上的瑕疵產 品。系統採用卷積神經網路（Convolutional Neural Network, CNN）作為 主要模型架構，其中第一層卷積層（Convolutional Layer）主要負責的功 能為下列何者？",
    "options": {
      "A": "自動提取輸入影像中的局部特徵",
      "B": "降低影像維度以加速運算效率",
      "C": "增加神經元與參數數量以提升模型容量",
      "D": "整合所有特徵並輸出最終分類結果"
    },
    "answer": "A",
    "topic": "CV"
  },
  {
    "id": "s3q6",
    "subject": 3,
    "number": 6,
    "question": "某智慧城市團隊開發一套交通監控系統，用於即時辨識路口監視器影像中 的車輛與行人。團隊比較後發現，卷積神經網路（Convolutional Neural Network, CNN）在訓練與推論效率上，明顯優於傳統的全連接神經網路 （Fully Connected Neural Network, FCNN）。請問下列何者為主要原因？",
    "options": {
      "A": "CNN 能自動學習影像的旋轉與比例不變性",
      "B": "CNN 可直接跳過人工特徵提取步驟進行分類",
      "C": "CNN 透過區域感知（Local Receptive Field）與參數共享（Parameter Sharing）機制，降低模型參數量與運算複雜度",
      "D": "CNN 捨棄激勵函數（Activation Function），以加快運算速度"
    },
    "answer": "C",
    "topic": "CV"
  },
  {
    "id": "s3q9",
    "subject": 3,
    "number": 9,
    "question": "在建構以距離為基礎的機器學習模型（如KNN、SVM）時，下列哪一項資料 前處理方式最為關鍵？",
    "options": {
      "A": "進行特徵縮放（Feature Scaling），使各特徵變數具有相似的數值範 圍",
      "B": "將連續型特徵變數轉換為類別型變數",
      "C": "以平均值或中位數進行缺失值補齊",
      "D": "進行隨機抽樣以平衡資料筆數"
    },
    "answer": "A",
    "topic": "標準化"
  },
  {
    "id": "s3q11",
    "subject": 3,
    "number": 11,
    "question": "相較於Grid Search，Random Search 在超參數調整上具備哪一項主要優 勢？",
    "options": {
      "A": "可自動產生模型架構",
      "B": "可使用更大的訓練集",
      "C": "避免模型過擬合",
      "D": "能更有效率搜尋高維參數空間"
    },
    "answer": "D",
    "topic": "訓練"
  },
  {
    "id": "s3q14",
    "subject": 3,
    "number": 14,
    "question": "下列哪一種AI 應用情境中，模型的可解釋性（Explainability）最為關 鍵？",
    "options": {
      "A": "電商平台利用深度學習模型預測用戶的下一次購買時間，以優化推播行 銷策略",
      "B": "新創公司使用機器學習演算法自動調整廣告出價策略，以提升點擊轉換 率",
      "C": "醫院導入AI 模型分析病患影像並給出腫瘤惡性可能性，作為臨床醫師 診斷依據",
      "D": "銀行導入AI 模型預測客戶流失率，並自動推薦留客優惠方案"
    },
    "answer": "C",
    "topic": "AI風險"
  },
  {
    "id": "s3q18",
    "subject": 3,
    "number": 18,
    "question": "下列何者最能同時反映XGBoost（eXtreme Gradient Boosting）相較於傳 統梯度提升決策樹（Gradient Boosting Decision Tree, GBDT）的主要技 術改進？",
    "options": {
      "A": "引入正則化項（Regularization）以抑制過擬合，並支援缺失值自動處 理與並行化訓練",
      "B": "改以隨機森林（Random Forest）架構取代樹模型以提升準確率",
      "C": "以類神經網路（Neural Network）取代弱分類器（Weak Learners）",
      "D": "採用批次正規化（Batch Normalization）技術提升模型穩定性"
    },
    "answer": "A",
    "topic": "演算法"
  },
  {
    "id": "s3q19",
    "subject": 3,
    "number": 19,
    "question": "某醫療機構開發疾病早期偵測模型，正樣本（確診病例）僅佔 3%。在模型 訓練與評估過程中，下列哪一種作法最不適合用於提升對少數類病例的預 測能力？",
    "options": {
      "A": "使用SMOTE 過採樣",
      "B": "調整類別權重",
      "C": "使用準確率（Accuracy）作為評估指標",
      "D": "欠採樣多數類(Undersampling the majority class)"
    },
    "answer": "C",
    "topic": "不平衡"
  },
  {
    "id": "s3q20",
    "subject": 3,
    "number": 20,
    "question": "某電子商務公司為開發商品評論情感分析模型，希望模型能捕捉評論中不 同特徵之間的關聯影響，例如「商品價格」與「顧客滿意度」的互動效 果。下列哪一種特徵工程設計方式最適合用於建立互動特徵（Interaction Features）？",
    "options": {
      "A": "將單一特徵取平方",
      "B": "對所有特徵進行對數轉換",
      "C": "將兩個或多個特徵進行乘積或交互組合",
      "D": "對特徵進行標準化"
    },
    "answer": "C",
    "topic": "特徵工程"
  },
  {
    "id": "s3q21",
    "subject": 3,
    "number": 21,
    "question": "某語音辨識系統開發團隊採用 Transformer 架構，為了讓模型能同時理解 語音片段中的發音特徵、語速變化與語意脈絡等多層次資訊，團隊在設計 中導入了多頭注意力（Multi-head Attention）機制。請問下列何者為此 機制的主要優點？",
    "options": {
      "A": "減少模型參數量以降低訓練成本",
      "B": "加速整體注意力計算過程",
      "C": "從不同表示子空間（Representation Subspaces）同時捕捉多樣化關聯 資訊",
      "D": "避免梯度消失（Gradient Vanishing）問題"
    },
    "answer": "C",
    "topic": "NLP"
  },
  {
    "id": "s3q24",
    "subject": 3,
    "number": 24,
    "question": "某房地產公司利用多元迴歸模型（Multiple Regression Model）預測房 價，並繪製殘差圖（Residual Plot）檢查模型品質。結果顯示部分資料點 的殘差極大，且在高價區樣本中出現系統性彎曲分佈現象。根據此觀察， 下列何者為最可能的正確解釋？",
    "options": {
      "A": "模型過度擬合（Overfitting），導致在訓練資料上表現過好、泛化能力 不足",
      "B": "模型特徵數量不足，導致欠擬合（Underfitting）",
      "C": "模型存在異常值（Outlier）或非線性關係，違反迴歸假設",
      "D": "殘差圖呈現隨機分佈，表示模型已完全符合所有假設"
    },
    "answer": "C",
    "topic": "統計"
  },
  {
    "id": "s3q26",
    "subject": 3,
    "number": 26,
    "question": "在防止監督式學習模型過擬合（Overfitting）時，下列哪一種策略不屬於 降低模型複雜度或限制學習能力的作法？",
    "options": {
      "A": "採用L1 或L2 正則化",
      "B": "在訓練過程中使用Dropout 技術",
      "C": "採取早期停止（Early Stopping）機制",
      "D": "擴增輸入特徵變數以提升模型表達能力"
    },
    "answer": "D",
    "topic": "訓練"
  },
  {
    "id": "s3q27",
    "subject": 3,
    "number": 27,
    "question": "某智慧製造團隊在開發瑕疵影像檢測模型時，發現使用線性激活函數 （Activation Function）後，模型的訓練準確率長期停滯，懷疑模型無法 學習到足夠複雜的特徵表達。若要改善此問題，下列哪一項調整方案最為 合適？",
    "options": {
      "A": "增加卷積層（Convolutional Layer）數量，使網路更深以強化特徵提 取",
      "B": "將輸入影像先進行灰階化處理，降低運算量",
      "C": "使用Sigmoid 激活函數，以將輸出壓縮至[0,1]範圍",
      "D": "改用ReLU（Rectified Linear Unit）激活函數，以引入非線性並提升 模型表達能力"
    },
    "answer": "D",
    "topic": "DL基礎"
  },
  {
    "id": "s3q28",
    "subject": 3,
    "number": 28,
    "question": "一家零售電商公司希望建立顧客流失預測模型，用以判斷哪些會員可能在 三個月內不再消費。團隊以去年會員資料進行訓練，並僅採用「曾經購買 三次以上」的活躍顧客紀錄作為樣本。模型上線後，對整體會員進行預測 時，發現模型對於新註冊會員與低消費會員的預測準確率明顯偏低。下列 何者為造成此現象最可能的原因？",
    "options": {
      "A": "特徵設計未排除與會員忠誠度高度相關的變數，導致特徵偏差 （Feature Bias）",
      "B": "標記（Label）由人工標註，導致標籤偏差（Label Bias）",
      "C": "訓練樣本僅涵蓋高活躍顧客，造成取樣偏差（Sampling Bias）",
      "D": "模型未進行超參數調整，導致過擬合（Overfitting）"
    },
    "answer": "C",
    "topic": "AI風險"
  },
  {
    "id": "s3q29",
    "subject": 3,
    "number": 29,
    "question": "在工業設備故障預測專案中，模型訓練與超參數調整均依賴於一段歷史數 據作為驗證集。然而，隨著設備運行環境與工況條件的變化，原有驗證集 已無法充分反映現況，導致模型在實際部署後的預測準確率逐漸下降。下 列哪一種策略最能有效提升模型在長期運行環境中的穩健性與泛化能力？",
    "options": {
      "A": "固定驗證集內容，並透過模型正則化技巧（如 L2 正則化）強化模型泛 化",
      "B": "將全部歷史資料納入訓練，不使用驗證集，依靠早期停止（Early Stopping）控制訓練",
      "C": "簡化模型架構，減少模型參數數量以降低過擬合風險",
      "D": "採用時間序列交叉驗證（Time Series Cross Validation）或滑動視窗 驗證（Rolling Window Validation）方法，動態更新驗證資料以適應時間 演進"
    },
    "answer": "D",
    "topic": "驗證"
  },
  {
    "id": "s3q30",
    "subject": 3,
    "number": 30,
    "question": "某情感分析模型在英文資料集上取得macro F1-score = 0.91。當該模型 部署於西班牙文資料集時，F1-score 驟降至0.58。下列哪一項解釋最合 理，且與F1-score 變化相關？",
    "options": {
      "A": "macro F1-score 本身波動性高，建議改用 micro-average F1-score 評估",
      "B": "模型在西班牙文語料上過度擬合，導致評估結果偏高",
      "C": "語言轉移造成召回率（Recall）下降，模型無法正確辨識關鍵情緒詞 彙",
      "D": "以均方誤差（MSE）取代 F1-score 評估可獲得更準確的結果"
    },
    "answer": "C",
    "topic": "評估"
  },
  {
    "id": "s3q31",
    "subject": 3,
    "number": 31,
    "question": "某能源公司利用歷史氣象與用電資料，開發長期電力需求預測模型，採用 深度神經網路架構進行訓練。在訓練過程中，模型在訓練集上的損失值持 續下降，但在驗證集上，損失在第80 輪後開始波動，呈現週期性上升與下 降。團隊懷疑模型受到季節性資料波動與隨機噪音影響，導致驗證損失難 以穩定收斂。若要在此情境下合理運用早期停止法（Early Stopping）以 確保模型具最佳泛化能力，下列哪一項策略最為適當？",
    "options": {
      "A": "直接根據訓練集損失最低點停止訓練，以確保模型充分擬合所有樣本",
      "B": "監控驗證集損失並設定適度的耐心值（Patience），在連續多輪未改善 後再停止訓練",
      "C": "改以測試集損失作為早停依據，以提升模型最終評估一致性",
      "D": "將所有資料重新合併後訓練至收斂，避免因資料分割導致評估波動"
    },
    "answer": "B",
    "topic": "訓練"
  },
  {
    "id": "s3q32",
    "subject": 3,
    "number": 32,
    "question": "某電信公司開發客戶流失預測模型，使用大量顧客行為特徵，例如通話時 長、上網頻率、帳單金額、客服聯絡次數等。在訓練過程中，團隊發現部 分特徵彼此高度相關，但同時也懷疑有些特徵對流失預測的貢獻度有限。 若希望模型在避免過擬合（Overfitting）的同時，能自動篩選出較具代表 性的特徵，採用下列哪一種方法最為合適？",
    "options": {
      "A": "使用早期停止法（Early Stopping）控制訓練回合數，避免過擬合 （Overfitting）",
      "B": "同時移除多重共線性特徵並採用L2 正則化（Ridge），以確保模型穩定 收斂",
      "C": "僅使用L2 正則化（Ridge），抑制所有權重幅度但保留全部特徵",
      "D": "採用L1 正則化（Lasso），透過懲罰項使部分特徵係數縮為0"
    },
    "answer": "D",
    "topic": "特徵工程"
  },
  {
    "id": "s3q34",
    "subject": 3,
    "number": 34,
    "question": "某醫療人工智慧團隊正在開發心臟病風險預測模型，資料量僅有150 筆， 其中陽性個案不到8%。由於樣本數稀少且類別分布極不平衡，團隊希望在 有限資料下，仍能準確評估模型在不同資料上的表現穩定性，同時避免訓 練資料被過度切分而影響模型效能。若團隊希望在有限樣本下，同時兼顧 資料的利用率與各類別在驗證折中的比例一致性，最適合採用下列哪一種 交叉驗證方法？",
    "options": {
      "A": "5-Fold 交叉驗證（5-Fold Cross Validation）",
      "B": "留一法交叉驗證（Leave-One-Out Cross Validation）",
      "C": "隨機交叉驗證（Random Cross Validation）",
      "D": "分層留一法交叉驗證（Stratified Leave-One-Out Cross Validation）"
    },
    "answer": "D",
    "topic": "驗證"
  },
  {
    "id": "s3q35",
    "subject": 3,
    "number": 35,
    "question": "某公司針對製程感測器資料進行主成分分析（PCA），經標準化與協方差矩 陣分解後，得到三個主成分的特徵值如下：λ1=6.0, λ2=3.0, λ3=1.0。 若團隊決定僅保留能解釋至少 80% 總變異量的主成分，以進行後續模型建 構，下列哪一項敘述最合理且數據解讀正確？",
    "options": {
      "A": "前兩個主成分合計解釋90%的總變異量，因此可安全降維至二維，且仍 保留大部分資訊",
      "B": "第一主成分解釋60%的變異量，表示資料結構呈現明顯線性關係，僅保 留一維即可避免過擬合",
      "C": "雖然前兩個主成分可解釋超過 80% 變異量，但第二主成分貢獻仍高達 30%，不宜捨棄第三主成分",
      "D": "三個特徵值相差不大，顯示各主成分變異均衡，降維可能導致資訊損失"
    },
    "answer": "A",
    "topic": "PCA"
  },
  {
    "id": "s3q36",
    "subject": 3,
    "number": 36,
    "question": "某銀行計畫與多家合作機構共同訓練一個AI 信用風險預測模型，為避免客 戶交易資料在傳輸與運算過程中外洩，技術團隊評估使用同態加密 （Homomorphic Encryption）技術。下列何者最能正確描述同態加密在此 應用中的關鍵特性？",
    "options": {
      "A": "系統以隨機雜訊（Noise）干擾輸出，確保統計結果不洩漏個資",
      "B": "各參與銀行透過安全通道交換私鑰，確保模型參數一致",
      "C": "將原始資料壓縮並同時加密，以減少加密後資料量與運算時間",
      "D": "資料在加密狀態下仍可進行數值運算，模型訓練可於未解密資料上完成"
    },
    "answer": "D",
    "topic": "隱私"
  },
  {
    "id": "s3q37",
    "subject": 3,
    "number": 37,
    "question": "某跨銀行風控平台希望整合多家銀行的用戶行為資料，用於訓練信用風險 預測模型。由於競爭與法規限制，各銀行僅願意提供加密後資料，且資料 在任何時間不得被平台解密。同時，平台需建立安全通訊協議以確保資料 在傳輸過程未被竄改或重放。 下列哪一組技術最能完整對應上述需求？",
    "options": {
      "A": "對稱加密（Symmetric Encryption）＋ 單向雜湊（Hash Function）＋ 非對稱加密（Asymmetric Encryption）＋ 差分隱私（Differential Privacy）",
      "B": "同態加密（Homomorphic Encryption）＋ 非對稱加密（Asymmetric Encryption）＋ 單向雜湊（ One-way Hash Function）＋ 對稱加密 （Symmetric Encryption）",
      "C": "差分隱私（Differential Privacy）＋ 對稱加密（Symmetric Encryption）＋ 同態加密（Homomorphic Encryption）＋ 數位簽章 （Digital Signature）",
      "D": "同態加密（Homomorphic Encryption）＋ 安全多方計算（Secure Multi-party Computation, MPC）＋ 雜湊函數（Hash Function）＋ 對稱 加密（Symmetric Encryption）"
    },
    "answer": "B",
    "topic": "隱私"
  },
  {
    "id": "s3q42",
    "subject": 3,
    "number": 42,
    "question": "在深度神經網路中，不同層的參數量（parameter count）差異極大。有些 層雖然數量少但計算量大，有些則相反。了解參數分佈情形，有助於模型 壓縮與遷移學習設計。請問在VGG16 中，下列何者的參數量最多？",
    "options": {
      "A": "卷積層(Conv2d)",
      "B": "全連接層(Linear)",
      "C": "ReLU 激活函數",
      "D": "池化層(MaxPool2d, AdaptiveAvgPool2d)"
    },
    "answer": "B",
    "topic": "CV"
  },
  {
    "id": "s3q43",
    "subject": 3,
    "number": 43,
    "question": "在神經網路中，了解各層的運算量分佈，有助於模型壓縮與硬體加速的策 略設計。請問在VGG16 中，下列何者運算量(FLOPs)最多？",
    "options": {
      "A": "卷積層(Conv2d)",
      "B": "全連接層(Linear)",
      "C": "ReLU 激活函數",
      "D": "池化層(MaxPool2d, AdaptiveAvgPool2d)"
    },
    "answer": "A",
    "topic": "CV"
  },
  {
    "id": "s3q44",
    "subject": 3,
    "number": 44,
    "question": "VGG16 層數深且結構規則，由多層卷積、池化及全連接層組成。了解各層 的輸入/輸出維度、參數量及記憶體需求，有助於掌握CNN 模型的組成邏輯 與實作技巧。根據VGG16 的模型架構，下列敘述何者正確？",
    "options": {
      "A": "AdaptiveAvgPool2d 的輸出會被攤平後傳入第一個全連接層；由於前一 層池化輸出空間為 4×4，所以第一個線性層的輸入維度是 512×4×4 = 8192",
      "B": "Linear-33（第一個全連接層）報出的102,764,544 參數只包含權重， 偏差（bias）沒有算在內",
      "C": "根據列出的「Estimated Total Size (MB) = 624.98」，表示訓練此模 型只需大約625MB 的GPU 記憶體（包含所有optimizer state 與梯度），所 以一張 1 GB 的GPU 就足夠訓練",
      "D": "VGG16 包含13 層卷積層（conv）與3 層全連接層（FC），總參數數目 約為 138,357,544（約138.36M）"
    },
    "answer": "D",
    "topic": "CV"
  },
  {
    "id": "s3q45",
    "subject": 3,
    "number": 45,
    "question": "在實務應用中，我們常使用遷移學習(transfer learning)技巧，即載入預 訓練模型（如VGG16），凍結部分層的參數，只針對特定任務重新訓練最後 幾層，這種做法可節省訓練時間並提升模型效能。假設你要對VGG16 進行 遷移學習(transfer learning)，希望凍結卷積層的參數，只訓練最後全連 接層(classifier)。下列哪段程式碼寫法正確？",
    "options": {
      "A": "",
      "B": "",
      "C": "",
      "D": "在郵遞區號自動辨識的研究中，研究人員收集了一份手寫數字影像資料 集，每一張影像為8×8 的灰階圖片，共包含多個手寫數字樣本。這份資料 集來自UCI Machine Learning Repository，常被用於數字辨識與機器學 習方法的教學與實驗。 在過程中，研究人員發現資料中可能存在雜訊，例如筆跡模糊或影像中附 加的干擾點，這會影響後續分類模型的效能。因此，他們希望透過資料降 噪的方法，提升後續分類的準確度。同時，他們也想透過 KNN (K-Nearest Neighbors) 搭配交叉驗證來評估模型表現，確保模型在不同資料切割下都 能有穩定的預測能力。 部分樣本經繪製後的外觀如下圖所示： 根據這份資料來回答46~47 題。"
    },
    "answer": "B",
    "topic": "CV"
  },
  {
    "id": "s3q48",
    "subject": 3,
    "number": 48,
    "question": "參考下圖程式碼，下列何者正確？ A：X_train -= X_train.mean(axis=0) 將每個訓練集特徵的平均值調整為 0 B：X_train /= X_train.std(axis=0) 將每個訓練集特徵的標準差調整為 0 C：X_train 處理結果會將資料壓縮到 0 和 1 之間 D：標準化結果防止梯度爆炸或消失 E：標準化是屬於特徵選擇(Feature Selection)方法 F：X_train 程式碼應修正為 X_train = X_train.std(axis=0), X_test 程式碼應修正為 X_test = X_test.std(axis=0)",
    "options": {
      "A": "A、B、C、D",
      "B": "A、E",
      "C": "A、D",
      "D": "A、C、F"
    },
    "answer": "C",
    "topic": "Python"
  },
  {
    "id": "s3q49",
    "subject": 3,
    "number": 49,
    "question": "參考下圖執行結果，下列何者正確？",
    "options": {
      "A": "activation=\"relu\"其數學式為",
      "B": "空格1 值為110，空格2 值為100",
      "C": "空格1 值為100，空格2 值為110",
      "D": "activation=\"sigmoid\"一般用於多類別分類預測模型"
    },
    "answer": "C",
    "topic": "Python"
  },
  {
    "id": "s3q50",
    "subject": 3,
    "number": 50,
    "question": "參考下圖執行結果，下列何者正確？ A：空格1 須填入 \"b-\" B：空格2 須填入 \"b--\" C：空格1 須填入 \"r-\" D：空格2 須填入 \"r--\" E：驗證損失明顯較訓練損失減少更明顯",
    "options": {
      "A": "B、C",
      "B": "A、C、D",
      "C": "A、D",
      "D": "C、D、E"
    },
    "answer": "C",
    "topic": "Python"
  }
];
