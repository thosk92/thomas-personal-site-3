import ServiceSeoPage from '@/components/seo/ServiceSeoPage'
import { getPageUrl, getSeoPage, siteUrl } from '@/lib/seo-pages'

const page = getSeoPage('creazione-siti-web-la-spezia')

export const metadata = {
  title: page.title,
  description: page.description,
  keywords: page.keywords ?? [page.focusKeyword],
  alternates: { canonical: getPageUrl(page.slug) },
  openGraph: {
    title: page.title,
    description: page.description,
    url: getPageUrl(page.slug),
    siteName: 'Thomas Zanelli',
    images: [
      {
        url: siteUrl + '/og-image.jpg',
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
    title: page.title,
    description: page.description,
    images: [siteUrl + '/og-image.jpg']
  }
}

export default function CreazioneSitiWebLaSpeziaPage() {
  return <ServiceSeoPage page={page} />
}
