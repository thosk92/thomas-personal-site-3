import type { Metadata } from 'next'
import Link from 'next/link'
import LinkArrow from '@/components/editorial/LinkArrow'
import Brand from '@/components/editorial/Brand'
import RestylingRequestForm from '@/components/restyling/RestylingRequestForm'
import { siteUrl } from '@/lib/seo-pages'
import EditorialHeader from '@/components/editorial/EditorialHeader'
import '@/components/editorial/editorial.css'
import './restyling.css'

export const metadata: Metadata = {
  title: 'Fai valutare il tuo sito web - Thomas Zanelli',
  description: 'Mandami il link del sito e il contesto: ti rispondo con una prima lettura concreta su chiarezza, struttura, UX, contenuti e priorità.',
  alternates: {
    canonical: `${siteUrl}/richiedi-restyling`
  },
  openGraph: {
    title: 'Fai valutare il tuo sito web - Thomas Zanelli',
    description: 'Invia il link del sito per una prima valutazione concreta su chiarezza, struttura, UX, contenuti e priorità.',
    url: `${siteUrl}/richiedi-restyling`,
    siteName: 'Thomas Zanelli',
    images: [
      {
        url: `${siteUrl}/og-image.jpg`,
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
    title: 'Fai valutare il tuo sito web - Thomas Zanelli',
    description: 'Invia il link del sito per una prima valutazione concreta.',
    images: [`${siteUrl}/og-image.jpg`]
  }
}

const requestJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'Valutazione sito web',
  provider: {
    '@type': 'Person',
    name: 'Thomas Zanelli',
    url: siteUrl
  },
  areaServed: ['Italia', 'La Spezia', 'Sarzana', 'Provincia della Spezia'],
  serviceType: 'Check-up sito web',
  url: `${siteUrl}/richiedi-restyling`
}

export default function RichiediRestylingPage() {
  return (
    <main id="main-content" tabIndex={-1} lang="it" className="archive-home archive-request">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(requestJsonLd) }}
      />

      <EditorialHeader />

      <section className="archive-hero restyling-hero archive-width" aria-labelledby="restyling-title">
        <p className="archive-label">Valutazione e restyling</p>
        <h1 id="restyling-title">Vediamo cosa migliorare<br />{' '}nel tuo sito.</h1>
        <p className="archive-intro">
          Inviami il link e dimmi cosa non funziona come vorresti. Ti rispondo con una prima valutazione e gli interventi da considerare.
        </p>
      </section>

      <div className="restyling-content archive-width">
        <section className="restyling-form-section" aria-labelledby="request-form-title">
          <h2 id="request-form-title">Da quale sito partiamo?</h2>
          <p className="restyling-form-intro">Inserisci il link, il tuo nome e l’email a cui risponderti. Se vuoi, aggiungi qualche dettaglio.</p>
          <RestylingRequestForm />
        </section>
        <aside className="restyling-context" aria-labelledby="restyling-context-title">
          <h2 id="restyling-context-title">Su cosa mi concentro.</h2>
          <ol className="restyling-review-list">
            <li><span className="archive-label" aria-hidden="true">01</span><div><h3>Chiarezza</h3><p>Se servizi, informazioni e contatti sono facili da trovare.</p></div></li>
            <li><span className="archive-label" aria-hidden="true">02</span><div><h3>Esperienza d’uso</h3><p>Come si legge e si usa il sito, anche da telefono.</p></div></li>
            <li><span className="archive-label" aria-hidden="true">03</span><div><h3>Priorità</h3><p>Quali interventi servono e da dove conviene iniziare.</p></div></li>
          </ol>
          <div className="restyling-direct"><p>Preferisci parlarne direttamente?</p><a className="archive-text-link" href="mailto:thomaszanelli@icloud.com">Scrivimi un’email <LinkArrow /></a></div>
        </aside>
      </div>

      <footer className="restyling-footer archive-width">
        <div><Brand compact /><p>Web design e sviluppo a La Spezia.</p><p>© {new Date().getFullYear()} · P.IVA 01492490451</p></div>
        <nav aria-label="Informazioni"><Link href="/">Torna alla home <LinkArrow /></Link><Link href="/privacy">Privacy Policy</Link></nav>
      </footer>
    </main>
  )
}
