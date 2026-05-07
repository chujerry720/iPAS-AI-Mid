@echo off
REM iPAS AI 中級刷題系統 - 啟動腳本(Windows)
chcp 65001 >nul
title iPAS AI 中級刷題

cd /d "%~dp0"

set PORT=8080

echo ============================================
echo   iPAS AI 中級刷題系統
echo   位置: %CD%
echo   網址: http://localhost:%PORT%
echo ============================================
echo.
echo   ▸ 瀏覽器將在 2 秒後自動開啟
echo   ▸ 關閉此視窗即可停止伺服器
echo   ▸ 桌機 / 手機(同 WiFi)都可以用
echo.
echo ============================================
echo.

REM 2 秒後自動開瀏覽器(背景執行,不阻塞 server)
start "" /min cmd /c "timeout /t 2 /nobreak >nul & start http://localhost:%PORT%/"

REM 啟動 Python HTTP server(這行會持續執行直到視窗關閉)
python -m http.server %PORT%

REM 如果跑到這裡代表 server 結束了
echo.
echo 伺服器已停止。按任意鍵關閉視窗...
pause >nul
