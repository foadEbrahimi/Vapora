import type React from 'react';
import type { Metadata } from 'next';

import './globals.css';
import localFont from 'next/font/local';
import { ScrollToTop } from '@/src/components/scroll-to-top';
import { ThemeProvider } from '@/src/components/theme-provider';

const Vazir = localFont({
  src: './fonts/vazir.woff2',
  variable: '--font-Vazir',
  weight: '400',
  style: 'normal',
});

export const metadata: Metadata = {
  title: 'ویپورا | فروشگاه تخصصی ویپ و تنباکو | Colby, KS',
  description:
    'ویپورا، فروشگاه تخصصی ویپ، تنباکو و لوازم جانبی در Colby کانزاس. ارائه‌دهنده انواع ویپ، سیگار، جویس، پاد، کارتریج و محصولات دخانی با بهترین کیفیت و خدمات حرفه‌ای.',
  keywords: [
    'ویپ',
    'فروشگاه ویپ',
    'جویس',
    'تنباکو',
    'سیگار',
    'ویپ شاپ',
    'Vape Shop',
    'ویپورا',
    'Vapora',
    'ویپ در کانزاس',
    'Accessories',
  ],
  authors: [{ name: 'Vapura (ویپورا)' }],
  creator: 'ویپورا',
  publisher: 'ویپورا',
  generator: 'Pepe',
  icons: {
    icon: '/icon.svg',
    shortcut: '/icon.svg',
    apple: '/icon.svg',
  },
  openGraph: {
    title: 'ویپورا | فروشگاه حرفه‌ای ویپ و تنباکو',
    description:
      'خرید ویپ، جویس، تنباکو و انواع لوازم جانبی از ویپورا. محصولات اورجینال و قیمت مناسب.',
    url: 'https://vapora.pepe.ir',
    siteName: 'ویپورا',
    locale: 'fa_IR',
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='fa' className='dark' dir='rtl' suppressHydrationWarning>
      <body className={`${Vazir.variable} font-vazir antialiased`}>
        <ThemeProvider>
          <ScrollToTop />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
