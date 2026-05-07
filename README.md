最後雲端維護時間:2026-05-06

# iPAS AI 中級智慧刷題系統

> 5/23 專屬個人考試準備系統 · 純靜態網頁 · 零託管成本

## 🚀 啟動(2 種方法選一個)

### 方法 A:雙擊執行(最簡單)

直接到 `iPAS-AI-Mid` 資料夾,**雙擊 `start.bat`**(Windows)。
- 終端視窗會跳出,2 秒後自動開瀏覽器
- 想停止 → 直接**關掉終端視窗**

### 方法 B:命令列

```bash
cd "C:\MyProject\ClaudeCode\iPAS-AI-Mid"
python -m http.server 8080
```

然後手動開瀏覽器到 http://localhost:8080

> macOS / Linux 用 `start.sh` 或 `python3 -m http.server 8080`

---

## 📱 手機怎麼用?

只要您的桌機跟手機**在同一個 WiFi**:

1. 桌機跑 `start.bat` 後,確認桌機的本機 IP(命令列輸入 `ipconfig`,找「無線區域網路」的 IPv4)
2. 手機瀏覽器打 `http://<桌機IP>:8080`(例:`http://192.168.1.100:8080`)
3. **加到主畫面** → 像 App 一樣用(支援 PWA)

> 想離開 WiFi 也能用?最後章節有「部署到 GitHub Pages」流程,免費,手機隨時都能用。

---

## ✨ 主要功能

- **📖 學習頁**:18 張概念卡,8 章節組織,**8 張附 SVG 圖解**
- **知識地圖**:技能樹狀拓撲,前置依賴一目了然
- **⚡ 練習頁**:時間預算 5/15/30 分鐘,**智慧排題**(弱項優先 + 間隔重複)
- **📊 進度頁**:總題數、正確率、各主題正確率、待複習錯題
- **離線可用** + **支援 dark mode**(自動跟隨系統)

---

## 🗂 檔案結構

```
iPAS-AI-Mid/
├── start.bat                  ⭐ 雙擊啟動(Windows)
├── start.sh                   啟動(macOS/Linux)
├── index.html                 主入口
├── style.css                  樣式 + dark mode
├── manifest.webmanifest       PWA 設定
├── js/
│   ├── questions.js           129 題歷屆題
│   ├── concepts.js            18 張概念卡
│   ├── state.js               localStorage 進度
│   ├── scheduler.js           智慧排題
│   └── app.js                 UI 控制
├── build_questions.py         題目資料產生器
└── README.md                  本檔
```

---

## 🛠 之後想擴充?

跟 Claude Code 說一聲就可以:

| 想做 | 跟 Claude 說 |
|---|---|
| 補一張概念卡 | 「在 concepts.js 加一張『RAG 檢索增強』的卡」 |
| 補卡片裡的 SVG 圖 | 「給 BERT 那張卡畫 SVG 圖」 |
| 加新功能(例如模擬考模式) | 「加一個 50 題計時模擬考頁」 |
| 視覺微調 | 「卡片圓角再大一點 / 章節色調整 / ...」 |
| 修 bug | 直接描述狀況 |

---

## 🔄 題庫更新流程

如果未來有新公告試題或勘誤:

1. 把 PDF 放到 `C:/MyProject/ClaudeCode/iPAS-AI/data/01_exam/`
2. 編輯 `build_questions.py` 加入新檔案
3. `python build_questions.py` 重新產生 `js/questions.js`
4. 瀏覽器重新整理就看到新題

---

## 🌐 部署到 GitHub Pages(讓手機隨時可用)

桌機關了也能用、不用同 WiFi:

```bash
cd "C:\MyProject\ClaudeCode\iPAS-AI-Mid"
git init
git add .
git commit -m "Initial commit"
git branch -M main
# 先去 github.com 開一個 private repo 叫 iPAS-AI-Mid
git remote add origin git@github.com:<您的帳號>/iPAS-AI-Mid.git
git push -u origin main
```

GitHub repo → **Settings → Pages → Source: main / (root)** → 1 分鐘後上線在
`https://<您的帳號>.github.io/iPAS-AI-Mid/`

之後在 Claude Code 修改 → `git add . && git commit -m "..." && git push` → 1 分鐘後手機網址自動更新。

---

## 🐛 常見問題

**Q: 雙擊 start.bat 視窗一閃就消失**
→ 表示 Python 沒裝或不在 PATH。打開命令列輸入 `python --version` 測試。沒裝請到 [python.org](https://python.org) 安裝(勾選「Add to PATH」)。

**Q: 8080 port 被占用**
→ 編輯 `start.bat`,把 `set PORT=8080` 改成其他數字(例如 8090)。

**Q: 手機連不上桌機 IP**
→ Windows 防火牆可能擋了。第一次跑 `start.bat` 時,Windows 會跳出詢問是否允許 Python 通過防火牆,**勾「私人網路」並允許**。

**Q: 進度不見了**
→ 進度存在瀏覽器 localStorage,**換瀏覽器或清快取會清掉**。長期保存請部署到 GitHub Pages 或用同一裝置同瀏覽器。

---

## 📊 已內含的內容(可擴充)

- **150 題** 歷屆題(科目1: 50 + 科目2: 50 + 第三科重疊: 29)
- **18 張** 概念卡,**8 張附 SVG 圖**
- **16 個** 章節主題分類
- **4 種** 卡片狀態(未解鎖 / 可學 / 已讀 / 精熟)

要加更多?跟 Claude Code 說即可。
