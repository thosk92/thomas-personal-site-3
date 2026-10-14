import type { MetadataRoute } from 'next'
import { seoPages, siteUrl } from '@/lib/seo-pages'

const lastContentUpdate = new Date('2026-07-07T00:00:00.000Z')

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes = ['', '/richiedi-restyling', '/privacy', '/en', '/en/privacy']
  const serviceRoutes = seoPages.map((page) => `/${page.slug}`)

  return [...staticRoutes, ...serviceRoutes].map((route) => {
    const isHome = route === ''
    const isRequest = route === '/richiedi-restyling'
    const isService = serviceRoutes.includes(route)

    return {
      url: `${siteUrl}${route}`,
      lastModified: lastContentUpdate,
      changeFrequency: isHome || isRequest || isService ? 'weekly' as const : 'yearly' as const,
      priority: isHome ? 1 : isRequest ? 0.85 : isService ? 0.75 : 0.3
    }
  })
}
