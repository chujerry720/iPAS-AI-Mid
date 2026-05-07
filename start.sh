#!/usr/bin/env bash
# iPAS AI 中級刷題系統 - 啟動腳本(macOS / Linux)

cd "$(dirname "$0")"

PORT=8080

echo "============================================"
echo "  iPAS AI 中級刷題系統"
echo "  位置: $(pwd)"
echo "  網址: http://localhost:$PORT"
echo "============================================"
echo
echo "  ▸ 瀏覽器將在 2 秒後自動開啟"
echo "  ▸ 按 Ctrl+C 停止伺服器"
echo

# 2 秒後背景開啟瀏覽器
(sleep 2 && (open "http://localhost:$PORT/" 2>/dev/null || xdg-open "http://localhost:$PORT/" 2>/dev/null)) &

# 啟動 Python HTTP server
python3 -m http.server $PORT
