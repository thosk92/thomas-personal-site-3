'use client'

import { useRef } from 'react'
import Link from 'next/link'

type Props = {
  language: 'it' | 'en'
  links: { label: string; href: string }[]
}

export default function EditorialMobileMenu({ language, links }: Props) {
  const menu = useRef<HTMLDetailsElement>(null)
  const close = () => { if (menu.current) menu.current.open = false }

  return <details className="archive-mobile-menu" ref={menu} onKeyDown={event => {
    if (event.key === 'Escape') {
      close()
      menu.current?.querySelector('summary')?.focus()
    }
  }}>
    <summary>Menu <svg className="archive-menu-toggle" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" aria-hidden="true" focusable="false"><path d="M5 12h14M12 5v14" /></svg></summary>
    <div className="archive-mobile-panel">
      <nav aria-label={language === 'en' ? 'Main navigation' : 'Navigazione principale'}>
        {links.map(link => <a key={link.href} href={link.href} onClick={close}>{link.label}<svg className="archive-menu-arrow" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" focusable="false"><path d="m9 5 7 7-7 7" /></svg></a>)}
      </nav>
      <nav className="archive-mobile-languages" aria-label={language === 'en' ? 'Language' : 'Lingua'}>
        <Link href="/" hrefLang="it" lang="it" aria-current={language === 'it' ? 'true' : undefined} onClick={close}>Italiano</Link>
        <Link href="/en" hrefLang="en" lang="en" aria-current={language === 'en' ? 'true' : undefined} onClick={close}>English</Link>
      </nav>
    </div>
  </details>
}
