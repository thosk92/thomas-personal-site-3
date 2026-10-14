import type { Metadata } from 'next'
import type { ReactNode } from 'react'
import { siteUrl } from '@/lib/seo-pages'

export const metadata: Metadata = {
  title: 'Thomas Zanelli - Website creation and redesign',
  description: 'I design, build and improve clear, fast and maintainable websites for companies, professionals and local businesses.',
  alternates: {
    canonical: `${siteUrl}/en`,
    languages: {
      it: siteUrl,
      en: `${siteUrl}/en`
    }
  },
  openGraph: {
    title: 'Thomas Zanelli - Website creation and redesign',
    description: 'Website design, front-end development, CMS work, redesigns and technical maintenance.',
    url: `${siteUrl}/en`,
    siteName: 'Thomas Zanelli',
    images: [
      {
        url: `${siteUrl}/og-image.jpg`,
        width: 1200,
        height: 630,
        alt: 'Thomas Zanelli - Web Engineer and Web Designer'
      }
    ],
    locale: 'en_US',
    type: 'website'
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Thomas Zanelli - Website creation and redesign',
    description: 'Website design, front-end development, CMS work, redesigns and technical maintenance.',
    images: [`${siteUrl}/og-image.jpg`]
  }
}

export default function EnglishLayout({ children }: { children: ReactNode }) {
  return children
}
