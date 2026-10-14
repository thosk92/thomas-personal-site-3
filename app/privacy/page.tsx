import EditorialHeader from '@/components/editorial/EditorialHeader'
import '@/components/editorial/editorial.css'
import Link from 'next/link'
import { siteUrl } from '@/lib/seo-pages'

export const metadata = {
  title: 'Privacy Policy - Thomas Zanelli',
  description: 'Informativa privacy del sito thomaszanelli.co: analytics, performance, dati trattati e diritti degli utenti.',
  alternates: {
    canonical: `${siteUrl}/privacy`
  },
  openGraph: {
    title: 'Privacy Policy - Thomas Zanelli',
    description: 'Informativa privacy del sito thomaszanelli.co.',
    url: `${siteUrl}/privacy`,
    type: 'website'
  }
}

export default function PrivacyPage() {
  return (
    <main id="main-content" className="rams-document">
      <EditorialHeader language="it" />
      <div className="section rams-document-body">
        <h1 className="text-3xl md:text-4xl font-bold mb-6">Privacy Policy</h1>
        <p className="opacity-70 mb-6">Ultimo aggiornamento: 7 luglio 2026</p>

        <div className="text-base md:text-lg opacity-80 space-y-6">
          <p>
            Questa Privacy Policy spiega come vengono raccolti e trattati i dati personali quando visiti questo sito
            (https://thomaszanelli.co), in conformità con il Regolamento Generale sulla Protezione dei Dati (GDPR).
          </p>

          <div>
            <h2 className="text-xl font-semibold mb-2">1. Titolare del trattamento</h2>
            <p>Il titolare del trattamento dei dati personali relativi a questo sito è:</p>
            <p className="mt-2">
              Thomas Zanelli<br />
              Email: thomaszanelli@icloud.com
            </p>
            <p className="mt-2">P.IVA: 01492490451</p>
          </div>

          <div>
            <h2 className="text-xl font-semibold mb-2">2. Tipologie di dati raccolti</h2>
            <p className="mt-2">Analisi statistiche tecniche</p>
            <p className="mt-2">
              Questo sito utilizza Vercel Web Analytics, una soluzione analytics privacy-friendly che non usa cookie e non traccia gli utenti tra siti diversi.
            </p>
            <p className="mt-2">
              I dati raccolti sono aggregati e anonimizzati e non possono essere usati per identificare i singoli visitatori.
              Alcuni esempi:
            </p>
            <ul className="list-disc pl-5 mt-2">
              <li>Visualizzazioni di pagina e pattern di navigazione in forma aggregata</li>
              <li>Metriche di base relative a dispositivo e performance</li>
              <li>Statistiche d’uso anonime</li>
            </ul>
            <p className="mt-2">Non vengono raccolti dati personali identificativi.</p>

            <p className="mt-6">Metriche di performance</p>
            <p className="mt-2">
              Questo sito utilizza anche Vercel Speed Insights per misurare indicatori prestazionali come i Core Web Vitals.
            </p>
            <p className="mt-2">
              Queste metriche vengono raccolte in forma anonima, esclusivamente per monitoraggio e ottimizzazione delle performance, e non permettono l’identificazione dell’utente.
            </p>

            <p className="mt-6">Google Analytics</p>
            <p className="mt-2">
              Questo sito può usare Google Analytics 4, fornito da Google Ireland Limited, per raccogliere statistiche aggregate sulle visite e sull’utilizzo delle pagine.
              Google Analytics viene attivato solo se l’utente presta il consenso tramite il banner cookie.
            </p>
            <p className="mt-2">
              Quando il consenso viene prestato, Google Analytics può usare cookie o tecnologie simili per distinguere le sessioni, misurare le visite e produrre report statistici.
            </p>

            <p className="mt-6">Richieste di preventivo e restyling</p>
            <p className="mt-2">
              Se usi il modulo per richiedere una valutazione di restyling, vengono trattati i dati che inserisci volontariamente:
              link del sito da valutare, nome, email, eventuale azienda o attività e messaggio descrittivo.
            </p>
            <p className="mt-2">
              Il sistema verifica tecnicamente che il link indicato corrisponda a una pagina web pubblica e raggiungibile.
              Se configurata una chiave OpenAI, alcuni contenuti pubblici della pagina indicata possono essere analizzati per generare una prima sintesi tecnica a supporto della risposta.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold mb-2">3. Cookie e tecnologie di tracciamento</h2>
            <p>Questo sito utilizza:</p>
            <ul className="list-disc pl-5 mt-2">
              <li>tecnologie tecniche necessarie al funzionamento del sito;</li>
              <li>una preferenza salvata nel browser per ricordare la scelta sul consenso analytics;</li>
              <li>cookie analytics di Google Analytics solo dopo consenso esplicito.</li>
            </ul>
            <p className="mt-2">
              Se il consenso viene rifiutato, Google Analytics non viene caricato e i relativi cookie analytics non vengono impostati dal sito.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold mb-2">4. Finalità e base giuridica del trattamento</h2>
            <p>I dati vengono trattati per:</p>
            <ul className="list-disc pl-5 mt-2">
              <li>monitorare l’utilizzo aggregato del sito;</li>
              <li>migliorare performance, usabilità e affidabilità tecnica;</li>
              <li>misurare l’efficacia dei contenuti tramite Google Analytics, solo previo consenso.</li>
              <li>gestire richieste di valutazione, preventivo e contatto inviate tramite il modulo restyling.</li>
            </ul>
            <p className="mt-2">
              La base giuridica per gli strumenti tecnici e le metriche essenziali è il legittimo interesse del titolare
              (articolo 6(1)(f) GDPR). Per Google Analytics e i relativi cookie analytics, la base giuridica è il consenso
              dell’utente (articolo 6(1)(a) GDPR), revocabile in qualsiasi momento tramite il pulsante “Cookie” presente sul sito.
              Per le richieste inviate tramite modulo, la base giuridica è l’esecuzione di misure precontrattuali richieste dall’utente
              (articolo 6(1)(b) GDPR).
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold mb-2">5. Conservazione dei dati</h2>
            <p>
              Tutti i dati raccolti vengono conservati solo in forma aggregata e anonimizzata e per un periodo limitato.
            </p>
            <p className="mt-2">
              I dati tecnici temporanei generati da Vercel Analytics vengono eliminati automaticamente in tempi brevi e non sono mai conservati in modo da permettere l’identificazione degli utenti.
            </p>
            <p className="mt-2">
              I dati raccolti tramite Google Analytics sono conservati secondo le impostazioni configurate nell’account Google Analytics e secondo le policy di Google.
            </p>
            <p className="mt-2">
              I dati inviati tramite modulo di richiesta vengono conservati per il tempo necessario a rispondere, preparare un eventuale preventivo
              e gestire il rapporto precontrattuale o contrattuale che ne deriva.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold mb-2">6. Diritti dell’utente</h2>
            <p>Ai sensi del GDPR, gli utenti hanno diritto di:</p>
            <ul className="list-disc pl-5 mt-2">
              <li>Accedere ai propri dati personali</li>
              <li>Richiedere rettifica o cancellazione</li>
              <li>Richiedere la limitazione del trattamento</li>
              <li>Opporsi al trattamento per motivi legittimi</li>
              <li>Presentare reclamo a un’autorità di controllo</li>
            </ul>
            <p className="mt-2">
              Per esercitare questi diritti o richiedere informazioni sul trattamento puoi scrivere a: thomaszanelli@icloud.com
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold mb-2">7. Modifiche a questa Privacy Policy</h2>
            <p>
              Questa Privacy Policy può essere aggiornata nel tempo.
              Eventuali modifiche verranno pubblicate su questa pagina insieme alla relativa data di aggiornamento.
            </p>
          </div>
        </div>

        <div className="mt-10 flex items-center gap-4 flex-wrap">
          <Link className="btn" href="/">Torna al sito</Link>
          <a className="back-to-top-inline" href="#main-content">Torna su ↑</a>
        </div>
      </div>
    </main>
  )
}
