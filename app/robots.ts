import type { MetadataRoute } from 'next'
import { siteUrl } from '@/lib/seo-pages'

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: ['/api/', '/pagamento-completato', '/pagamento-annullato']
    },
    sitemap: `${siteUrl}/sitemap.xml`,
    host: siteUrl
  }
}
