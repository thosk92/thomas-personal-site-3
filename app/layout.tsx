
import './globals.css'
import './portfolio-index.css'
import './portfolio-premium.css'
import './rams.css'
import SiteRail from '@/components/editorial/SiteRail'
import { Analytics } from '@vercel/analytics/next'
import { SpeedInsights } from '@vercel/speed-insights/next'
import { localSeoKeywords, siteUrl } from '@/lib/seo-pages'
import GoogleAnalyticsConsent from '@/components/analytics/GoogleAnalyticsConsent'
import DocumentLanguage from '@/components/navigation/DocumentLanguage'

const ogImageUrl = `${siteUrl}/og-image.jpg`

export const metadata = {
  metadataBase: new URL(siteUrl),
  title: 'Thomas Zanelli - Web design e sviluppo a La Spezia',
  description: 'Sono Thomas Zanelli, web designer e sviluppatore a La Spezia. Progetto siti per imprese e professionisti: struttura, contenuti, sviluppo e cura nel tempo.',
  keywords: localSeoKeywords,
  alternates: {
    canonical: siteUrl
  },
  openGraph: {
    title: 'Thomas Zanelli - Web design e sviluppo a La Spezia',
    description: 'Siti web per imprese e professionisti. Design, contenuti e sviluppo, dal primo confronto alla messa online.',
    url: siteUrl,
    siteName: 'Thomas Zanelli',
    images: [
      {
        url: ogImageUrl,
        width: 1200,
        height: 630,
        alt: 'Thomas Zanelli - Web Engineer e Web Designer'
      }
    ],
    locale: 'it_IT',
    type: 'website'
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Thomas Zanelli - Web design e sviluppo a La Spezia',
    description: 'Siti web per imprese e professionisti. Design, contenuti e sviluppo, dal primo confronto alla messa online.',
    images: [ogImageUrl]
  },
  verification: {
    google: 'lj1a2uLLs8B-5f91Vu0LMd4uXpVlHDSLOg6mxZftqdU'
  },
  icons: {
    icon: [
      { url: '/images/brand/tz-icon-32.png', sizes: '32x32', type: 'image/png' },
      { url: '/images/brand/tz-icon-192.png', sizes: '192x192', type: 'image/png' }
    ],
    apple: [{ url: '/images/brand/tz-icon-192.png', sizes: '192x192', type: 'image/png' }]
  }
}
export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="it" data-theme="light" data-scroll-behavior="smooth">
      <body>
        <DocumentLanguage />
        <a className="skip-link" href="#main-content">Salta al contenuto / Skip to content</a>
        <SiteRail />
        <div className="site-content">{children}</div>
        <GoogleAnalyticsConsent />
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  )
}
