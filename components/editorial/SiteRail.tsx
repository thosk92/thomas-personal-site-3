'use client'

import { useEffect, useState } from 'react'
import { usePathname } from 'next/navigation'

export default function SiteRail() {
  const pathname = usePathname()
  const en = pathname.startsWith('/en')
  const home = en ? '/en' : '/'
  const [active, setActive] = useState('01')
  const items = en ? [{ id: 'work', label: 'Selected work' }, { id: 'approach', label: 'My method' }, { id: 'profile', label: 'About me' }, { id: 'contact', label: 'Contact' }] : [{ id: 'lavori', label: 'Lavori selezionati' }, { id: 'approccio', label: 'Il mio metodo' }, { id: 'profilo', label: 'Chi sono' }, { id: 'contatti', label: 'Contatti' }]
  useEffect(() => {
    setActive('01')
    const ids = en ? ['work', 'approach', 'profile', 'contact'] : ['lavori', 'approccio', 'profilo', 'contatti']
    const observer = new IntersectionObserver(entries => {
      const visible = entries.filter(entry => entry.isIntersecting)
      if (visible.length) setActive(String(ids.indexOf(visible[0].target.id) + 1).padStart(2, '0'))
    }, { rootMargin: '-10% 0px -55% 0px', threshold: 0 })
    ids.forEach(id => { const element = document.getElementById(id); if (element) observer.observe(element) })
    return () => observer.disconnect()
  }, [pathname, en])
  return <aside className="site-rail" aria-label={en ? 'Section navigation' : 'Navigazione sezioni'}>
    <a className="rail-identity" href={home}><span>WEB DESIGNER / DEVELOPER</span><span>THOMAS ZANELLI</span></a>
    <nav>{items.map((item, index) => { const number = String(index + 1).padStart(2, '0'); return <a href={`${home}#${item.id}`} key={item.id} aria-label={item.label} aria-current={(pathname === home && active === number) ? 'location' : undefined}>{number}</a> })}</nav>
  </aside>
}
