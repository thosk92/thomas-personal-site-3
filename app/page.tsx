import EditorialHome from '@/components/editorial/EditorialHome'
import { localSeoKeywords, siteUrl } from '@/lib/seo-pages'

const ogImageUrl = `${siteUrl}/og-image.jpg`

const projects = [
  {
    title: 'Hodaj Costruzioni',
    role: 'Web Designer & Web Engineer',
    intervention: "Design e sviluppo del sito aziendale, con servizi, lavori e zona di attività.",
    problem: "Un’impresa edile di Aulla aveva bisogno di presentare costruzioni e ristrutturazioni e rendere semplice la richiesta di un sopralluogo.",
    tags: ['Next.js', 'Web design', 'SEO locale', 'Lead generation'],
    preview: '/previews/editorial/hodaj-costruzioni.webp',
    url: 'https://hodaj-costruzioni.vercel.app',
    ctaLabel: 'Vedi progetto'
  },
  {
    title: 'MGA Edilizia',
    role: 'Web Designer & Web Engineer',
    intervention: "Identità digitale, contenuti e sito aziendale per M.G.A. di Moggia Gian Luca.",
    problem: "Il sito organizza servizi e informazioni sull’impresa, con un percorso diretto verso la richiesta di preventivo.",
    tags: ['Next.js', 'Web design', 'SEO locale', 'Sito vetrina'],
    preview: '/previews/editorial/mga-edilizia.webp',
    url: 'https://mga-moggia-gian-luca.vercel.app',
    ctaLabel: 'Vedi progetto'
  },
  {
    title: 'GR Marmi',
    role: 'Web Engineer',
    intervention: "Sito aziendale, catalogo materiali e area riservata per la gestione del magazzino lastre.",
    problem: "Il progetto unisce la presentazione dei materiali alla consultazione delle disponibilità e alla gestione del magazzino.",
    tags: ['Next.js', 'React', 'Supabase', 'Vercel', 'GitHub'],
    preview: '/previews/editorial/gr-marmi-home.webp',
    url: 'https://gr-marmi-site.vercel.app',
    ctaLabel: 'Vedi progetto'
  },
  {
    title: 'Aree Protette',
    role: 'Web Engineer',
    intervention: "Struttura delle informazioni, sviluppo tecnico e organizzazione dei contenuti.",
    problem: "Un progetto informativo da riorganizzare per facilitare la consultazione e gli aggiornamenti della redazione.",
    tags: ['WordPress', 'CMS', 'Editoriale', 'Informazione'],
    preview: '/previews/editorial/parchi-e-riserve.webp',
    url: 'https://areeprotette.org'
  },
  {
    title: 'Thriftless Shop',
    role: 'Founder & Web Engineer',
    intervention: "Identità del brand, sito e struttura del negozio online.",
    problem: "Un progetto indipendente seguito dall’identità alla vendita online, con attenzione alla gestione quotidiana del negozio.",
    tags: ['E-commerce', 'Shopify', 'Branding', 'Sito da zero'],
    preview: '/previews/editorial/thriftless.webp',
    url: 'https://thriftlessshop.com'
  },
  {
    title: 'ADM Escavazioni',
    role: 'Web Engineer',
    intervention: "Restyling del sito, organizzazione dei contenuti e SEO locale.",
    problem: "Il sito presenta servizi, lavori e parco mezzi dell’impresa, con le informazioni necessarie per richiedere un intervento.",
    tags: ['Next.js', 'Restyling', 'SEO locale', 'Sito aziendale'],
    preview: '/previews/editorial/adm-escavazioni.webp',
    url: 'https://www.admescavazioni.com'
  }
]

const serviceLinks = [
  {
    title: 'Siti web per attività locali',
    href: '/creazione-siti-web-la-spezia',
    cta: 'Scopri la creazione siti web',
    text: 'Per spiegare cosa fai, dove lavori e come contattarti.'
  },
  {
    title: 'Landing page',
    href: '/landing-page',
    cta: 'Scopri le landing page',
    text: 'Una pagina focalizzata su servizio, campagna o offerta.'
  },
  {
    title: 'Restyling sito web',
    href: '/restyling-sito-web',
    cta: 'Fai valutare il sito',
    text: 'Rendo più chiari struttura, contenuti, mobile e contatti.'
  },
  {
    title: 'Manutenzione siti web',
    href: '/manutenzione-siti-web',
    cta: 'Scopri la manutenzione',
    text: 'Aggiornamenti, modifiche e controlli dopo la pubblicazione.'
  }
]

const footerServiceLinks = [
  { label: 'Creazione siti web La Spezia', href: '/creazione-siti-web-la-spezia' },
  { label: 'Web designer La Spezia', href: '/web-designer-la-spezia' },
  { label: 'Realizzazione siti web', href: '/realizzazione-siti-web' },
  { label: 'Landing page', href: '/landing-page' },
  { label: 'Sito vetrina', href: '/sito-vetrina' },
  { label: 'Restyling sito web', href: '/restyling-sito-web' },
  { label: 'Manutenzione siti web', href: '/manutenzione-siti-web' }
]

const homepageJsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': ['ProfessionalService', 'LocalBusiness'],
      '@id': `${siteUrl}/#business`,
      name: 'Thomas Zanelli',
      url: siteUrl,
      email: 'mailto:thomaszanelli@icloud.com',
      telephone: '+39 346 521 0756',
      taxID: '01492490451',
      image: ogImageUrl,
      keywords: localSeoKeywords.join(', '),
      areaServed: ['Italia', 'La Spezia', 'Sarzana', 'Lerici', 'Portovenere', 'Provincia della Spezia'],
      sameAs: ['https://www.linkedin.com/in/thomas-zanelli-a8b1a8130/'],
      hasOfferCatalog: {
        '@type': 'OfferCatalog',
        name: 'Servizi web',
        itemListElement: serviceLinks.map((service) => ({
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: service.title,
            description: service.text,
            url: `${siteUrl}${service.href}`
          }
        }))
      }
    },
    {
      '@type': 'WebSite',
      '@id': `${siteUrl}/#website`,
      name: 'Thomas Zanelli',
      url: siteUrl,
      image: ogImageUrl,
      publisher: { '@id': `${siteUrl}/#business` }
    }
  ]
}

export const metadata = { alternates: { canonical: siteUrl, languages: { it: siteUrl, en: `${siteUrl}/en`, 'x-default': siteUrl } } }

export default function Page() {
  return <EditorialHome language="it" projects={projects} footerLinks={footerServiceLinks} jsonLd={homepageJsonLd} />
}
