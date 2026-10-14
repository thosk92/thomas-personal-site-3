import Link from 'next/link'
import EditorialHeader from '@/components/editorial/EditorialHeader'
import '@/components/editorial/editorial.css'

export const metadata = {
  robots: {
    index: false,
    follow: false
  }
}

export default function PagamentoCompletatoPage() {
  return (
    <main id="main-content" className="relative">
      <EditorialHeader />
      <section className="section status-page">
        <div className="status-panel">
          <p className="kicker"><span className="num">OK</span>Checkout Stripe</p>
          <h1>Pagamento ricevuto</h1>
          <p>
            Grazie per aver acquistato il Check-up Sito. Ti contatterò al più presto per raccogliere
            il link del sito e le informazioni necessarie per preparare l’analisi.
          </p>
          <div className="hero-actions">
            <Link className="btn btn-primary" href="/">Torna alla homepage</Link>
          </div>
        </div>
      </section>
    </main>
  )
}
