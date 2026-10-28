import type { Metadata, Viewport } from 'next';
import type { ReactNode } from 'react';
import StructuredData from '@/components/StructuredData';
import { OG_IMAGE, SITE_DESCRIPTION, SITE_NAME, SITE_TITLE, SITE_URL } from '@/lib/site';
import './globals.css';

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: SITE_TITLE,
  description: SITE_DESCRIPTION,
  applicationName: SITE_NAME,
  keywords: [
    'Prime Suite',
    'Airbnb Takoradi',
    'Airbnb Anaji',
    'short stay Takoradi',
    'apartment rental Takoradi',
    'Nhyira hotel',
    'Anaji accommodation',
    'Western Region Ghana lodging',
    'car rental Takoradi',
  ],
  alternates: { canonical: '/' },
  icons: { icon: { url: '/assets/images/logo.svg', type: 'image/svg+xml' } },
  openGraph: {
    type: 'website',
    url: '/',
    siteName: SITE_NAME,
    locale: 'en_GH',
    title: SITE_TITLE,
    description:
      'Your Comfort Our Priority. Feel at home, anywhere. Room 1 & Room 2. Location: Anaji behind Nhyira hotel. Contacts: 0547238675 / 0550638015.',
    images: [{ url: OG_IMAGE, alt: 'Prime Suite Room 2 living room' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: SITE_TITLE,
    description: SITE_DESCRIPTION,
    images: [OG_IMAGE],
  },
  robots: { index: true, follow: true },
  formatDetection: { telephone: true },
  verification: {
    google: 'Kzlb2LWBoX0d1_SNtRrM0HczOhbV61ovKyf0yaI47WA',
  },
};

export const viewport: Viewport = {
  themeColor: '#071324',
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <head>
        {/* Font Awesome icons */}
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css"
          integrity="sha512-DTOQO9RWCH3ppGqcWaEA1BIZOC6xxalwEsw9c2QQeAIftl+Vegovlnee1c9QX4TctnWMn13TZye+giMm8e2LwA=="
          crossOrigin="anonymous"
          referrerPolicy="no-referrer"
        />
        <StructuredData />
      </head>
      <body>{children}</body>
    </html>
  );
}
