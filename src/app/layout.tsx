import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import { Header } from '@/components/Header/Header';
import { Footer } from '@/components/Footer/Footer';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Sergey Evdokimov - Portfolio',
  description: 'Web development portfolio',
  creator: 'Sergey Evdokimov',
  keywords: ['портфолио', 'web-developer', 'frontend', 'фронтенд', 'поиск работы'],
  icons: '/Logo.svg',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ru">
      <body className={inter.className}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
