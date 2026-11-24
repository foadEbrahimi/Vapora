import type React from 'react';
import type { Metadata } from 'next';

import './globals.css';
import { ScrollToTop } from '@/src/components/scroll-to-top';
import { ThemeProvider } from '@/src/components/theme-provider';
import { site } from '@/src/data/site';

const title = 'ویپورا | ویپ، جویس و لوازم جانبی در تهران';
const description =
  'فروشگاه تخصصی ویپ، جویس و لوازم جانبی در تهران؛ انتخاب حضوری، مشاوره واقعی و قیمت منصفانه. خیابان شریعتی، بالاتر از میرداماد.';

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title,
  description,
  keywords: [
    'ویپ',
    'فروشگاه ویپ',
    'جویس',
    'ویپ شاپ تهران',
    'پاد سیستم',
    'باکس مود',
    'پک نیکوتین',
    'ویپورا',
    'Vapora',
    'Vape Shop Tehran',
  ],
  authors: [{ name: 'ویپورا' }],
  creator: 'ویپورا',
  publisher: 'ویپورا',
  alternates: {
    canonical: '/',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  icons: {
    icon: '/icon.svg',
    shortcut: '/icon.svg',
    apple: '/icon.svg',
  },
  openGraph: {
    title,
    description,
    url: site.url,
    siteName: site.name,
    locale: 'fa_IR',
    type: 'website',
    images: [
      {
        url: '/og.jpg',
        width: 1200,
        height: 630,
        alt: 'پیشخوان و قفسه‌های فروشگاه ویپورا در تهران',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title,
    description,
    images: ['/og.jpg'],
  },
};

const flags = `try{var r=window.matchMedia('(prefers-reduced-motion: reduce)').matches;document.documentElement.classList.add('js');if(!r)document.documentElement.classList.add('motion');}catch(e){}`;

const storeSchema = {
  '@context': 'https://schema.org',
  '@type': 'Store',
  name: site.name,
  alternateName: site.nameLatin,
  description,
  url: site.url,
  image: `${site.url}/og.jpg`,
  telephone: site.phoneHref.replace('tel:', ''),
  address: {
    '@type': 'PostalAddress',
    streetAddress: 'خیابان شریعتی، بالاتر از میرداماد، پلاک ۲۴۳',
    addressLocality: 'تهران',
    addressCountry: 'IR',
  },
  openingHoursSpecification: [
    {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: [
        'Saturday',
        'Sunday',
        'Monday',
        'Tuesday',
        'Wednesday',
        'Thursday',
      ],
      opens: '09:00',
      closes: '21:00',
    },
    {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: 'Friday',
      opens: '10:00',
      closes: '18:00',
    },
  ],
  aggregateRating: {
    '@type': 'AggregateRating',
    ratingValue: '4.6',
    reviewCount: 40,
  },
  currenciesAccepted: 'IRR',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='fa' className='dark' dir='rtl' suppressHydrationWarning>
      <head>
        <link
          rel='preload'
          href='/fonts/vazirmatn-arabic.woff2'
          as='font'
          type='font/woff2'
          crossOrigin='anonymous'
        />
        <link
          rel='preload'
          href='/fonts/vazirmatn-latin.woff2'
          as='font'
          type='font/woff2'
          crossOrigin='anonymous'
        />
        <link
          rel='preload'
          href='/fonts/estedad-arabic.woff2'
          as='font'
          type='font/woff2'
          crossOrigin='anonymous'
        />
        <script dangerouslySetInnerHTML={{ __html: flags }} />
        <script
          type='application/ld+json'
          dangerouslySetInnerHTML={{ __html: JSON.stringify(storeSchema) }}
        />
      </head>
      <body>
        <ThemeProvider>
          <ScrollToTop />
          <a href='#main' className='skip-link'>
            رفتن به محتوای اصلی
          </a>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
