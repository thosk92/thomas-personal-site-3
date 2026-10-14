import EditorialHome from '@/components/editorial/EditorialHome'
import { siteUrl } from '@/lib/seo-pages'

const ogImageUrl = `${siteUrl}/og-image.jpg`

const projects = [
  {
    title: 'Hodaj Costruzioni',
    role: 'Web Designer & Web Engineer',
    intervention: "Company website design and development, including services, projects and operating area.",
    problem: "A construction company in Aulla needed to present its building and renovation services and make site-inspection enquiries straightforward.",
    tags: ['Next.js', 'Web design', 'Local SEO', 'Lead generation'],
    preview: '/previews/editorial/hodaj-costruzioni.webp',
    url: 'https://hodaj-costruzioni.vercel.app',
    ctaLabel: 'View project'
  },
  {
    title: 'MGA Edilizia',
    role: 'Web Designer & Web Engineer',
    intervention: "Digital identity, content and company website for M.G.A. di Moggia Gian Luca.",
    problem: "The website brings together services and company information, with a direct path to requesting a quote.",
    tags: ['Next.js', 'Web design', 'Local SEO', 'Company website'],
    preview: '/previews/editorial/mga-edilizia.webp',
    url: 'https://mga-moggia-gian-luca.vercel.app',
    ctaLabel: 'View project'
  },
  {
    title: 'GR Marmi',
    role: 'Web Engineer',
    intervention: "Company website, material catalogue and a private area for slab inventory management.",
    problem: "The project combines material presentation with stock availability and inventory management.",
    tags: ['Next.js', 'React', 'Supabase', 'Vercel', 'GitHub'],
    preview: '/previews/editorial/gr-marmi-home.webp',
    url: 'https://gr-marmi-site.vercel.app',
    ctaLabel: 'View project'
  },
  {
    title: 'Aree Protette',
    role: 'Web Engineer',
    intervention: "Information structure, technical development and content organisation.",
    problem: "An information website reorganised to support browsing and ongoing editorial updates.",
    tags: ['WordPress', 'CMS', 'Editorial', 'Information'],
    preview: '/previews/editorial/parchi-e-riserve.webp',
    url: 'https://areeprotette.org'
  },
  {
    title: 'Thriftless Shop',
    role: 'Founder & Web Engineer',
    intervention: "Brand identity, website and online store structure.",
    problem: "An independent project developed from brand identity to online sales, with attention to everyday store management.",
    tags: ['E-commerce', 'Shopify', 'Branding', 'Built from scratch'],
    preview: '/previews/editorial/thriftless.webp',
    url: 'https://thriftlessshop.com'
  },
  {
    title: 'ADM Escavazioni',
    role: 'Web Engineer',
    intervention: "Website redesign, content organisation and local SEO.",
    problem: "The website presents the contractor’s services, projects and machinery, with the information needed to request work.",
    tags: ['Next.js', 'Redesign', 'Local SEO', 'Company website'],
    preview: '/previews/editorial/adm-escavazioni.webp',
    url: 'https://www.admescavazioni.com'
  }
]

const serviceLinks = [
  {
    title: 'Websites for local businesses',
    href: '/creazione-siti-web-la-spezia',
    cta: 'Explore website creation',
    text: 'To explain what you do, where you work and how to contact you.'
  },
  {
    title: 'Landing pages',
    href: '/landing-page',
    cta: 'Explore landing pages',
    text: 'A focused page for a service, campaign or specific offer.'
  },
  {
    title: 'Website redesign',
    href: '/restyling-sito-web',
    cta: 'Review the website',
    text: 'Clearer structure, content, mobile experience and contact paths.'
  },
  {
    title: 'Website maintenance',
    href: '/manutenzione-siti-web',
    cta: 'Explore maintenance',
    text: 'Updates, small changes and checks after publication.'
  }
]

const footerServiceLinks = [
  { label: 'Website creation in La Spezia', href: '/creazione-siti-web-la-spezia' },
  { label: 'Web designer in La Spezia', href: '/web-designer-la-spezia' },
  { label: 'Professional websites', href: '/realizzazione-siti-web' },
  { label: 'Landing pages', href: '/landing-page' },
  { label: 'Business websites', href: '/sito-vetrina' },
  { label: 'Website redesign', href: '/restyling-sito-web' },
  { label: 'Website maintenance', href: '/manutenzione-siti-web' }
]

const homepageJsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': ['ProfessionalService', 'LocalBusiness'],
      '@id': `${siteUrl}/en#business`,
      name: 'Thomas Zanelli',
      url: `${siteUrl}/en`,
      email: 'mailto:thomaszanelli@icloud.com',
      telephone: '+39 346 521 0756',
      taxID: '01492490451',
      image: ogImageUrl,
      areaServed: ['Italy', 'La Spezia', 'Sarzana', 'Lerici', 'Portovenere', 'Province of La Spezia'],
      sameAs: ['https://www.linkedin.com/in/thomas-zanelli-a8b1a8130/'],
      hasOfferCatalog: {
        '@type': 'OfferCatalog',
        name: 'Web services',
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
      '@id': `${siteUrl}/en#website`,
      name: 'Thomas Zanelli',
      url: `${siteUrl}/en`,
      image: ogImageUrl,
      publisher: { '@id': `${siteUrl}/en#business` }
    }
  ]
}

export default function Page() {
  return <EditorialHome language="en" projects={projects} footerLinks={footerServiceLinks} jsonLd={homepageJsonLd} />
}
