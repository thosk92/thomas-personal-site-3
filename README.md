
# Thomas — Portfolio (v1.5.0)
Starter Next.js + Three.js in stile designisfunny: sezioni 01–04, header sticky, grid lavori, CTA, background particellare.

## Stack
- Next 14.2.15, React 18.2
- @react-three/fiber 8.15.x, three 0.160
- Tailwind, Framer Motion
- Alias `@/*` (configurato in tsconfig)
- `"overrides"` per forzare una singola copia di React/Reconciler

## Avvio
```
npm i
npm run dev
```

## Stripe Checkout
Per abilitare il pagamento online del pacchetto "Check-up Sito", crea un prodotto e un Price ID in Stripe e configura:

```
STRIPE_SECRET_KEY=
NEXT_PUBLIC_SITE_URL=
STRIPE_CHECKUP_PRICE_ID=
```

`STRIPE_SECRET_KEY` resta solo server-side. La route `app/api/checkout/checkup/route.ts` crea la Checkout Session usando `STRIPE_CHECKUP_PRICE_ID` e reindirizza verso `/pagamento-completato` o `/pagamento-annullato`.

## Preventivo restyling
La route `app/api/restyling-request/route.ts` verifica il sito ricevuto, legge titolo/descrizione/HTML e invia la richiesta tramite Resend. Configura:

```
RESEND_API_KEY=
RESTYLING_REQUEST_FROM="Thomas Zanelli <preventivi@zanelliai.com>"
RESTYLING_REQUEST_TO=
RESTYLING_REQUEST_WEBHOOK_URL=
OPENAI_API_KEY=
OPENAI_MODEL=gpt-4o-mini
```

`OPENAI_API_KEY` abilita la prima analisi automatica del sito. Senza questa variabile il form funziona comunque, ma non include la sintesi AI.

## Note
Se vedi errori di dipendenze, pulisci e reinstalla:
```
rm -rf node_modules .next package-lock.json
npm i
```
