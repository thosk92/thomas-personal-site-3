import Image from 'next/image'
import Link from 'next/link'
import LinkArrow from './LinkArrow'
import EditorialHeader from './EditorialHeader'
import Brand from './Brand'
import './editorial.css'

type Project = { title: string; intervention: string; problem: string; role: string; tags: string[]; preview: string; url: string }
type Props = { language: 'it' | 'en'; projects: Project[]; footerLinks: { label: string; href: string }[]; jsonLd: object }

export default function EditorialHome({ language, projects, footerLinks, jsonLd }: Props) {
  const en = language === 'en'
  const ids = { work: en ? 'work' : 'lavori', approach: en ? 'approach' : 'approccio', contact: en ? 'contact' : 'contatti', profile: en ? 'profile' : 'profilo' }
  const mainProject = projects.find(project => project.title === 'GR Marmi') ?? projects[0]
  const remaining = projects.filter(project => project !== mainProject).sort((a, b) => Number(b.title === 'ADM Escavazioni') - Number(a.title === 'ADM Escavazioni'))
  const viewProject = en ? 'View project' : 'Vedi progetto'
  const method = en ? [
    ['Understand', 'We start with your business: what you do, who you work with and what your website needs to achieve.'],
    ['Design', 'I organise pages, copy and images so visitors can find what they need.'],
    ['Build', 'I build the website, check it on desktop and mobile, and take it through to launch.']
  ] : [
    ['Capire', 'Parto dalla tua attività: cosa fai, a chi ti rivolgi e cosa deve fare il sito per te.'],
    ['Progettare', 'Organizzo pagine, testi e immagini per aiutare chi visita il sito a trovare ciò che cerca.'],
    ['Costruire', 'Sviluppo il sito, lo verifico su computer e telefono e seguo la messa online.']
  ]

  return <main id="main-content" tabIndex={-1} lang={language} className="archive-home">
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
    <EditorialHeader language={language} homepage />
    <section className="archive-hero archive-width" aria-labelledby="archive-title">
      <span className="section-mark" aria-hidden="true" />
      <h1 id="archive-title">{en ? 'Your work, on the web.' : 'Il tuo lavoro, sul web.'}</h1>
      <p className="archive-intro">{en ? 'I design and build websites that present your business and make it easy to get in touch.' : 'Progetto e sviluppo siti web che presentano la tua attività e rendono semplice contattarti.'}</p>
      <div className="archive-actions"><a className="archive-text-link" href={`#${ids.contact}`}>{en ? 'Let’s talk about your project' : 'Parliamo del tuo progetto'}<LinkArrow /></a></div>
    </section>
    <section className="archive-work archive-width" id={ids.work} aria-labelledby="work-title">
      <h2 className="section-title" id="work-title">{en ? 'Selected work' : 'Lavori selezionati'}</h2>
      <article className="archive-featured">
        <a href={mainProject.url} target="_blank" rel="noopener noreferrer" className="archive-featured-image" aria-label={`${viewProject}: ${mainProject.title}`}>
          <Image src={mainProject.preview} alt={en ? 'GR Marmi website: company and material catalogue' : 'Sito GR Marmi: azienda e catalogo materiali'} width={1536} height={1024} sizes="(max-width: 700px) 90vw, (max-width: 1400px) 84vw, 1140px" priority />
        </a>
        <div className="project-row"><span className="archive-number">01 /</span><h3>{mainProject.title}</h3><p>{en ? 'Company website, material catalogue and reserved area' : 'Sito aziendale, catalogo materiali e area riservata'}</p><ProjectLink url={mainProject.url} label={viewProject} /></div>
      </article>
      {remaining.slice(0, 2).map((project, index) => <article className="project-row" key={project.title}><span className="archive-number">{String(index + 2).padStart(2, '0')} /</span><h3>{project.title}</h3><p>{project.title === 'ADM Escavazioni' ? (en ? 'Redesign and development' : 'Restyling e sviluppo') : (en ? 'Company website' : 'Sito aziendale')}</p><ProjectLink url={project.url} label={viewProject} /></article>)}
      <details className="archive-more-work"><summary>{en ? 'More projects' : 'Altri progetti'} <span>({remaining.length - 2})</span></summary>
        <div>{remaining.slice(2).map((project, index) => <article className="archive-other-project" key={project.title}>
          <Image src={project.preview} alt={`${en ? 'Website preview' : 'Anteprima del sito'} ${project.title}`} width={1536} height={1024} sizes="(max-width: 700px) 85vw, 350px" />
          <div><span className="archive-label">{String(index + 4).padStart(2, '0')}</span><h3>{project.title}</h3><p>{project.intervention}</p><ProjectLink url={project.url} label={viewProject} /><details className="archive-project-detail"><summary>{en ? 'The project in detail' : 'Il progetto in dettaglio'}</summary><p>{project.problem}</p><p>{project.role} · {project.tags.join(' / ')}</p></details></div>
        </article>)}</div>
      </details>
    </section>
    <section className="archive-approach archive-width" id={ids.approach} aria-labelledby="approach-title">
      <span id={en ? 'method' : 'metodo'} className="archive-anchor" />
      <span className="section-mark" aria-hidden="true" />
      <h2 className="section-title" id="approach-title">{en ? 'My method' : 'Il mio metodo'}</h2>
      <div className="rams-method">{method.map(([title, text], index) => <article key={title}><h3><span className="archive-number">0{index + 1}</span>{title}</h3><p>{text}</p></article>)}</div>
    </section>
    <section id={ids.profile} className="archive-person archive-width" aria-labelledby="person-title">
      <div className="archive-person-grid">
        <Image className="archive-portrait" src="/images/thomas-zanelli-portrait.webp" alt={en ? 'Black and white portrait of Thomas Zanelli' : 'Ritratto in bianco e nero di Thomas Zanelli'} width={1000} height={1000} sizes="(max-width: 700px) 75vw, 440px" />
        <div className="archive-person-copy"><p className="archive-label">04 / {en ? 'About me' : 'Chi sono'}</p><h2 id="person-title">{en ? 'I’m Thomas.' : 'Sono Thomas.'}</h2>
          <p>{en ? 'I’m a web designer and developer based in La Spezia. I work with businesses and professionals, from the first conversation to launch.' : 'Sono un web designer e sviluppatore a La Spezia. Lavoro con imprese e professionisti, dal primo confronto alla messa online.'}</p>
          <p>{en ? 'You work directly with me, throughout the project and as your website grows.' : 'Ti confronti direttamente con me, durante il progetto e quando il sito ha bisogno di crescere.'}</p>
          <a className="archive-text-link" href={`#${ids.contact}`}>{en ? 'Let’s talk' : 'Parliamone'}<LinkArrow /></a>
        </div>
      </div>
    </section>
    <section className="archive-contact archive-width" id={ids.contact} aria-labelledby="contact-title">
      <div className="contact-heading"><h2 id="contact-title">{en ? 'Tell me about your project.' : 'Raccontami il tuo progetto.'}</h2><a className="rams-outline" href="mailto:thomaszanelli@icloud.com">{en ? 'Email me' : 'Scrivimi'} <LinkArrow /></a></div>
      <div className="archive-contact-details"><a href="mailto:thomaszanelli@icloud.com">thomaszanelli@icloud.com</a><a href="https://wa.me/393465210756" target="_blank" rel="noopener noreferrer">WhatsApp · +39 346 521 0756</a></div>
      <p className="archive-assessment">{en ? 'Already have a website?' : 'Hai già un sito?'} <Link href="/richiedi-restyling">{en ? 'Let’s review your website' : 'Vediamo cosa migliorare'}</Link></p>
    </section>
    <footer className="archive-footer archive-width">
      <div><Brand href={en ? '/en' : '/'} compact /><p>{en ? 'Web design and development in La Spezia.' : 'Web design e sviluppo a La Spezia.'}</p><p>© {new Date().getFullYear()} · P.IVA 01492490451</p></div>
      <details className="archive-footer-services"><summary>{en ? 'Website services' : 'Servizi web'}</summary><nav id={en ? 'services' : 'servizi'} aria-label={en ? 'Website services' : 'Servizi web'}>{footerLinks.map(link => <Link href={link.href} key={link.href}>{link.label}</Link>)}</nav></details>
      <nav className="archive-footer-links" aria-label={en ? 'Information' : 'Informazioni'}><a href="https://www.linkedin.com/in/thomas-zanelli-a8b1a8130/" target="_blank" rel="noopener noreferrer">LinkedIn</a><Link href={en ? '/en/privacy' : '/privacy'}>Privacy Policy</Link></nav>
    </footer>
  </main>
}
function ProjectLink({ url, label }: { url: string; label: string }) {
  return <a className="archive-text-link" href={url} target="_blank" rel="noopener noreferrer">{label}<LinkArrow /></a>
}
