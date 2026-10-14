import Link from 'next/link'
import EditorialHeader from '@/components/editorial/EditorialHeader'
import '@/components/editorial/editorial.css'

export default function NotFound() {
  return <main id="main-content"><EditorialHeader /><section className="section status-page"><div className="status-panel"><p className="kicker">404 / Pagina non trovata</p><h1>Qui non c’è una pagina.</h1><p>Puoi tornare alla homepage o scrivermi per trovare quello che cerchi.</p><div className="hero-actions"><Link className="btn btn-primary" href="/">Torna alla homepage</Link><a className="btn" href="mailto:thomaszanelli@icloud.com">Scrivimi</a></div></div></section></main>
}
