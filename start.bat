@echo off
REM Запуск TechVision Next.js

REM Добавляем Node.js в PATH
set PATH=C:\Users\PapaM\Desktop\node-v24.14.1-win-x64;%PATH%

REM Переходим в папку проекта
cd /d "%~dp0"

REM Устанавливаем зависимости (если ещё не установлены)
if not exist "node_modules" (
    echo Установка зависимостей...
    npm install
)

REM Запускаем dev сервер
echo.
echo ================================
echo  TechVision Next.js
echo  http://localhost:3000
echo ================================
echo.
npm run dev

pause