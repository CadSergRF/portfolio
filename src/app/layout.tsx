import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import { Header } from '@/components/Header/Header';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Sergey Evdokimov - Portfolio',
  description: 'Web development portfolio',
  openGraph: {
    title: 'Sergey Evdokimov - Portfolio',
    description: 'Web development portfolio',
    url: 'https://portfolio-mu-ten-31.vercel.app/',
    siteName: 'Sergey Evdokimov - Portfolio',
    locale: 'ru-RU',
    type: 'website',
  },
  keywords: ['портфолио', 'web-developer', 'frontend', 'фронтенд', 'поиск работы'],
  icons: '/Logo.svg',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ru">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
