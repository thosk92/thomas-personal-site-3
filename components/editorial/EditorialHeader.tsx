import Link from 'next/link'
import Brand from './Brand'
import EditorialMobileMenu from './EditorialMobileMenu'

export default function EditorialHeader({ language = 'it', homepage = false }: { language?: 'it' | 'en'; homepage?: boolean }) {
  const en = language === 'en'
  const home = en ? '/en' : '/'
  const prefix = homepage ? '' : home
  const links = en
    ? [{ label: 'Work', id: 'work' }, { label: 'Method', id: 'approach' }, { label: 'Contact', id: 'contact' }]
    : [{ label: 'Lavori', id: 'lavori' }, { label: 'Metodo', id: 'approccio' }, { label: 'Contatti', id: 'contatti' }]

  return <header className="archive-header archive-width" id="top">
    <Brand href={home} />
    <EditorialMobileMenu language={language} links={links.map(link => ({ label: link.label, href: `${prefix}#${link.id}` }))} />
    <nav className="archive-nav" aria-label={en ? 'Main navigation' : 'Navigazione principale'}>
      {links.map(link => <a href={`${prefix}#${link.id}`} key={link.id}>{link.label}</a>)}
    </nav>
    <nav className="archive-languages" aria-label={en ? 'Language' : 'Lingua'}>
      <Link href="/" hrefLang="it" lang="it" aria-current={!en ? (homepage ? 'page' : 'true') : undefined}>IT</Link>
      <Link href="/en" hrefLang="en" lang="en" aria-current={en ? (homepage ? 'page' : 'true') : undefined}>EN</Link>
    </nav>
  </header>
}
