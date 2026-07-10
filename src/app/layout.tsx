import type { Metadata } from 'next'
import { Instrument_Serif, DM_Sans, JetBrains_Mono } from 'next/font/google'
import { I18nProvider } from '@/lib/i18n'
import './globals.css'

const instrumentSerif = Instrument_Serif({
  subsets: ['latin'],
  weight: '400',
  style: ['normal', 'italic'],
  variable: '--font-instrument',
  display: 'swap',
})

const dmSans = DM_Sans({
  subsets: ['latin'],
  variable: '--font-dm-sans',
  display: 'swap',
})

const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  variable: '--font-jetbrains',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Four Tashkent Cats · Looking for Homes',
  description:
    'Teddy Bear, Meatball, Nuts, and Bolts are four healthy neutered cats in Tashkent, Uzbekistan, looking for their forever homes. Local, expat, or international: read their stories.',
  openGraph: {
    title: 'Four cats looking for their people · Tashkent',
    description:
      'Teddy Bear, Meatball, Nuts and Bolts are healthy, neutered, and ready for the right home. Based in Tashkent, Uzbekistan.',
    url: 'https://pinspots.co',
    siteName: 'Four Tashkent Cats',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Four cats looking for their people · Tashkent',
    description: 'Teddy Bear, Meatball, Nuts & Bolts. Healthy, neutered, and looking for real homes.',
  },
  metadataBase: new URL('https://pinspots.co'),
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="ru"
      className={`${instrumentSerif.variable} ${dmSans.variable} ${jetbrainsMono.variable}`}
    >
      <body>
        <I18nProvider>{children}</I18nProvider>
      </body>
    </html>
  )
}
