import Link from 'next/link'
import EditorialHeader from '@/components/editorial/EditorialHeader'
import '@/components/editorial/editorial.css'

export const metadata = {
  robots: {
    index: false,
    follow: false
  }
}

export default function PagamentoAnnullatoPage() {
  return (
    <main id="main-content" className="relative">
      <EditorialHeader />
      <section className="section status-page">
        <div className="status-panel">
          <p className="kicker"><span className="num">NO</span>Checkout Stripe</p>
          <h1>Pagamento annullato</h1>
          <p>
            Il pagamento non è stato completato. Puoi riprovare quando vuoi o contattarmi per qualsiasi dubbio.
          </p>
          <div className="hero-actions">
            <Link className="btn btn-primary" href="/#contatti">Torna ai contatti</Link>
          </div>
        </div>
      </section>
    </main>
  )
}
