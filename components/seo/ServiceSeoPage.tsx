import Link from 'next/link'
import EditorialHeader from '@/components/editorial/EditorialHeader'
import '@/components/editorial/editorial.css'
import { getPageUrl, seoPageMap, siteUrl, type SeoPage } from '@/lib/seo-pages'

type Props = {
  page: SeoPage
}

export default function ServiceSeoPage({ page }: Props) {
  const jsonLd = buildJsonLd(page)
  const primaryHref = page.primaryHref ?? "/#contatti"
  const secondaryHref = primaryHref === "/richiedi-restyling" ? "/#contatti" : "/richiedi-restyling"

  return (
    <main id="main-content" className="relative premium-service">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <EditorialHeader />
      <article className="section seo-page">
        <nav className="seo-breadcrumb" aria-label="Breadcrumb">
          <Link href="/">Home</Link>
          <span aria-hidden="true">/</span>
          <span>{page.eyebrow}</span>
        </nav>

        <header className="seo-hero">
          <p className="kicker">{page.eyebrow}</p>
          <h1>{page.h1}</h1>
          <p>{page.intro}</p>
          <div className="hero-actions">
            <Link className="btn btn-primary" href={primaryHref}>
              {page.primaryCta}
            </Link>
            {page.secondaryCta ? (
              <Link className="btn btn-secondary" href={secondaryHref}>{page.secondaryCta}</Link>
            ) : null}
          </div>
        </header>

        <div className="seo-body">
          {page.sections.map((section) => (
            <section key={section.h2} className="seo-content-section">
              <div>
                <h2>{section.h2}</h2>
                {section.h3 ? (
                  <div className="seo-inline-note">
                    <h3>{section.h3}</h3>
                    <p>{section.h3Body}</p>
                  </div>
                ) : null}
              </div>
              <div>
                <p>{section.body}</p>
                {section.points ? (
                  <ul className="minimal-list seo-list">
                    {section.points.map((point) => (
                      <li key={point}>{point}</li>
                    ))}
                  </ul>
                ) : null}
              </div>
            </section>
          ))}
        </div>

        <section className="seo-related" aria-labelledby="related-title">
          <div>
            <h2 id="related-title">Altri servizi</h2>
            <p>Puoi approfondire anche questi servizi.</p>
          </div>
          <div className="seo-related-links">
            {page.related.map((slug) => {
              const relatedPage = seoPageMap.get(slug)
              if (!relatedPage) return null

              return (
                <Link key={slug} href={`/${slug}`}>
                  <span>{relatedPage.eyebrow}</span>
                  <strong>{relatedPage.h1}</strong>
                </Link>
              )
            })}
          </div>
        </section>

        <section className="seo-cta" aria-labelledby="seo-cta-title">
          <h2 id="seo-cta-title">{page.ctaTitle}</h2>
          <p>{page.ctaText}</p>
          <div className="hero-actions">
            <Link className="btn btn-primary" href={primaryHref}>
              {page.primaryCta}
            </Link>
            <Link className="btn btn-secondary" href={secondaryHref}>{page.secondaryCta}</Link>
          </div>
        </section>

        <section className="seo-faq" aria-labelledby="faq-title">
          <h2 id="faq-title">Domande frequenti</h2>
          <div>
            {page.faq.map((item) => (
              <details key={item.question}>
                <summary>{item.question}</summary>
                <p>{item.answer}</p>
              </details>
            ))}
          </div>
        </section>
      </article>
    </main>
  )
}

function buildJsonLd(page: SeoPage) {
  const pageUrl = getPageUrl(page.slug)
  const serviceId = `${pageUrl}#service`
  const businessId = `${siteUrl}/#business`

  return {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': ['ProfessionalService', 'LocalBusiness'],
        '@id': businessId,
        name: 'Thomas Zanelli',
        url: siteUrl,
        email: 'mailto:thomaszanelli@icloud.com',
        telephone: '+39 346 521 0756',
        taxID: '01492490451',
        keywords: page.keywords?.join(', ') ?? page.focusKeyword,
        areaServed: page.areaServed ?? ['Italia'],
        sameAs: ['https://www.linkedin.com/in/thomas-zanelli-a8b1a8130/']
      },
      {
        '@type': 'Service',
        '@id': serviceId,
        name: page.serviceType,
        description: page.description,
        keywords: page.keywords ?? [page.focusKeyword],
        provider: { '@id': businessId },
        areaServed: page.areaServed ?? ['Italia'],
        url: pageUrl
      },
      {
        '@type': 'BreadcrumbList',
        itemListElement: [
          {
            '@type': 'ListItem',
            position: 1,
            name: 'Home',
            item: siteUrl
          },
          {
            '@type': 'ListItem',
            position: 2,
            name: page.eyebrow,
            item: pageUrl
          }
        ]
      },
      {
        '@type': 'FAQPage',
        mainEntity: page.faq.map((item) => ({
          '@type': 'Question',
          name: item.question,
          acceptedAnswer: {
            '@type': 'Answer',
            text: item.answer
          }
        }))
      }
    ]
  }
}
