import './globals.css';

export const metadata = {
  title: 'TechVision — IT-агентство полного цикла',
  description: 'Создаём цифровые продукты, которые двигают бизнес вперёд',
};

export default function RootLayout({ children }) {
  return (
    <html lang="ru">
      <body>{children}</body>
    </html>
  );
}