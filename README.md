# TechVision — Next.js Landing

IT-агентство полного цикла на Next.js 14.

## 🚀 Запуск

```bash
cd "C:\Users\PapaM\Desktop\MiniMax Project\it-agency-nextjs"
npm install
npm run dev
```

Откройте http://localhost:3000

## 📁 Структура

```
it-agency-nextjs/
├── app/
│   ├── api/contact/route.js   # API для формы
│   ├── globals.css            # Стили
│   ├── layout.js              # Layout
│   └── page.js                # Главная страница
├── next.config.js             # Конфигурация
└── package.json
```

## 🌐 Деплой на Timeweb Cloud

1. Установите зависимости: `npm install`
2. Создайте папку для сайта в Timeweb
3. Загрузите все файлы проекта (кроме node_modules)
4. В панели Timeweb откройте **Консоль**
5. Выполните: `npm install && npm run build`
6. Запустите: `npm start`

## ☁️ Деплой на Vercel (рекомендуется)

```bash
npm i -g vercel
vercel
```

## ✨ Возможности

- React 18 + Next.js 14 App Router
- API route для формы обратной связи
- Адаптивный дизайн
- Server-side rendering