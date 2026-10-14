'use client'

import { FormEvent, useEffect, useRef, useState } from 'react'
import Link from 'next/link'
import LinkArrow from '@/components/editorial/LinkArrow'

type VerificationResult = {
  finalUrl: string
  title?: string
  description?: string
  aiSummary?: string
  delivery?: 'email' | 'webhook'
}

type SubmitState =
  | { status: 'idle' }
  | { status: 'loading' }
  | { status: 'success'; result: VerificationResult }
  | { status: 'error'; message: string }

export default function RestylingRequestForm() {
  const [state, setState] = useState<SubmitState>({ status: 'idle' })
  const statusMessage = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (state.status === 'success' || state.status === 'error') statusMessage.current?.focus()
  }, [state.status])

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    if (state.status === 'loading') return
    const form = event.currentTarget
    const formData = new FormData(form)

    setState({ status: 'loading' })

    try {
      const response = await fetch('/api/restyling-request', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          websiteUrl: formData.get('websiteUrl'),
          name: formData.get('name'),
          email: formData.get('email'),
          company: formData.get('company'),
          notes: formData.get('notes')
        })
      })

      const payload = await response.json()

      if (!response.ok) {
        setState({
          status: 'error',
          message: payload.error ?? 'Non sono riuscito a verificare il sito. Controlla il link e riprova.'
        })
        return
      }

      setState({ status: 'success', result: payload })
      form.reset()
    } catch {
      setState({
        status: 'error',
        message: 'Errore temporaneo durante la verifica. Riprova tra poco.'
      })
    }
  }

  return (
    <form className="restyling-form" onSubmit={handleSubmit} aria-busy={state.status === 'loading'} aria-labelledby="request-form-title">
      <div className="form-row">
        <label htmlFor="websiteUrl">Indirizzo del sito <span aria-hidden="true">*</span></label>
        <input
          id="websiteUrl"
          name="websiteUrl"
          type="text"
          inputMode="url"
          placeholder="esempio.it"
          autoComplete="url"
          autoCapitalize="none"
          spellCheck={false}
          maxLength={500}
          required
        />
      </div>

      <div className="form-grid">
        <div className="form-row">
          <label htmlFor="name">Nome <span aria-hidden="true">*</span></label>
          <input id="name" name="name" type="text" autoComplete="name" maxLength={120} required />
        </div>
        <div className="form-row">
          <label htmlFor="email">Email <span aria-hidden="true">*</span></label>
          <input id="email" name="email" type="email" autoComplete="email" autoCapitalize="none" spellCheck={false} maxLength={180} required />
        </div>
      </div>

      <div className="form-row">
        <label htmlFor="company">Attività o azienda <span className="form-optional">Facoltativo</span></label>
        <input id="company" name="company" type="text" autoComplete="organization" maxLength={160} />
      </div>

      <div className="form-row">
        <label htmlFor="notes">Cosa vorresti migliorare? <span className="form-optional">Facoltativo</span></label>
        <textarea
          id="notes"
          name="notes"
          rows={5}
          maxLength={1500}
          placeholder="Per esempio: i servizi sono cambiati, il sito è difficile da usare da telefono o vorrei aggiornare testi e immagini."
        />
      </div>

      <p className="restyling-privacy">I campi con * sono obbligatori. Consulta la <Link href="/privacy">Privacy Policy</Link>.</p>
      <div className="restyling-submit-row">
        <button className="restyling-submit" type="submit" disabled={state.status === 'loading'}>
          {state.status === 'loading' ? 'Invio in corso…' : 'Invia il sito da valutare'}<LinkArrow direction="right" />
        </button>
        <p>Ti risponderò via email.</p>
      </div>

      <div className="form-status" aria-live="polite" ref={statusMessage} tabIndex={-1}>
        {state.status === 'error' ? (
          <p className="form-error">{state.message}</p>
        ) : null}

        {state.status === 'success' ? (
          <div className="form-success">
            <h3>Richiesta inviata.</h3>
            <p>
              Grazie, ho ricevuto la tua richiesta. Ti risponderò all’indirizzo indicato con una prima valutazione del sito e i possibili interventi.
            </p>
            <p><a href={state.result.finalUrl} target="_blank" rel="noopener noreferrer">{state.result.title || state.result.finalUrl} <LinkArrow /></a></p>
            {state.result.aiSummary ? <details><summary>Prima lettura automatica del sito</summary><p>{state.result.aiSummary}</p></details> : null}
          </div>
        ) : null}
      </div>
    </form>
  )
}
