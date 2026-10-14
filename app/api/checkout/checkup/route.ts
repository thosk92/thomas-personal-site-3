import { NextResponse } from 'next/server'
import Stripe from 'stripe'

export const runtime = 'nodejs'

export async function POST() {
  const secretKey = process.env.STRIPE_SECRET_KEY
  const priceId = process.env.STRIPE_CHECKUP_PRICE_ID
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL

  if (!secretKey || !priceId || !siteUrl) {
    return NextResponse.json(
      { error: 'Configurazione Stripe incompleta.' },
      { status: 500 }
    )
  }

  try {
    const stripe = new Stripe(secretKey)
    const normalizedSiteUrl = siteUrl.replace(/\/$/, '')

    const session = await stripe.checkout.sessions.create({
      mode: 'payment',
      line_items: [
        {
          price: priceId,
          quantity: 1
        }
      ],
      success_url: `${normalizedSiteUrl}/pagamento-completato?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${normalizedSiteUrl}/pagamento-annullato`,
      allow_promotion_codes: false
    })

    return NextResponse.json({ url: session.url })
  } catch {
    return NextResponse.json(
      { error: 'Non sono riuscito ad avviare il pagamento. Riprova o contattami direttamente.' },
      { status: 502 }
    )
  }
}
