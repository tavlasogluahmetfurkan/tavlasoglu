import type { Metadata, Viewport } from 'next';
import { Inter, Instrument_Serif } from 'next/font/google';
import { SmoothScroll } from '@/components/layout/SmoothScroll';
import { site } from '@/content/site';
import './globals.css';

const inter = Inter({
  subsets: ['latin', 'latin-ext'],
  variable: '--font-inter',
  display: 'swap',
});

const instrument = Instrument_Serif({
  subsets: ['latin', 'latin-ext'],
  weight: '400',
  style: ['normal', 'italic'],
  variable: '--font-instrument',
  display: 'swap',
});

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: '#06080b',
};

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: { default: site.title, template: `%s — ${site.brand}` },
  description: site.description,
  keywords: [...site.keywords],
  authors: [{ name: site.person }],
  alternates: { canonical: '/' },
  openGraph: {
    type: 'website',
    locale: 'tr_TR',
    url: site.url,
    siteName: site.brand,
    title: site.title,
    description: site.description,
    images: [{ url: '/media/hero-desktop.jpg', width: 1920, height: 1080, alt: 'Erzurum üzerinde gün batımı, drone çekimi' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: site.title,
    description: site.description,
    images: ['/media/hero-desktop.jpg'],
  },
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'ProfessionalService',
  name: site.brand,
  description: site.description,
  url: site.url,
  image: `${site.url}/media/hero-desktop.jpg`,
  email: site.email,
  telephone: site.phone.href.replace('tel:', ''),
  address: { '@type': 'PostalAddress', addressLocality: 'Erzurum', addressCountry: 'TR' },
  founder: { '@type': 'Person', name: site.person },
  sameAs: [site.instagram, site.linkedin],
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="tr" className={`${inter.variable} ${instrument.variable}`}>
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <SmoothScroll>{children}</SmoothScroll>
      </body>
    </html>
  );
}
