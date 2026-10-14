import { lookup } from 'node:dns/promises'
import { isIP } from 'node:net'
import { NextResponse } from 'next/server'

export const runtime = 'nodejs'
export const maxDuration = 20

const requestRecipient = process.env.RESTYLING_REQUEST_TO ?? 'thomaszanelli@icloud.com'
const requestSender = process.env.RESTYLING_REQUEST_FROM ?? 'Thomas Zanelli <onboarding@resend.dev>'
const maxHtmlChars = 120_000
const placeholderOpenAiKey = 'INSERISCI_LA_TUA_CHIAVE_OPENAI'

type RestylingRequestBody = {
  websiteUrl?: unknown
  name?: unknown
  email?: unknown
  company?: unknown
  notes?: unknown
}

type VerifiedSite = {
  finalUrl: string
  title?: string
  description?: string
  htmlText: string
}

function cleanText(value: unknown, maxLength: number) {
  return typeof value === 'string' ? value.trim().slice(0, maxLength) : ''
}

function normalizeUrl(value: string) {
  const trimmed = value.trim()
  const withProtocol = /^https?:\/\//i.test(trimmed) ? trimmed : `https://${trimmed}`
  const url = new URL(withProtocol)

  if (!['http:', 'https:'].includes(url.protocol)) {
    throw new Error('Inserisci un link http o https.')
  }

  url.hash = ''
  return url
}

function isBlockedHostname(hostname: string) {
  const lower = hostname.toLowerCase()
  return (
    lower === 'localhost' ||
    lower.endsWith('.localhost') ||
    lower.endsWith('.local') ||
    lower.endsWith('.internal') ||
    lower.endsWith('.test') ||
    lower.endsWith('.invalid') ||
    lower.endsWith('.example')
  )
}

function isPrivateAddress(address: string) {
  if (address.startsWith('::ffff:')) {
    return isPrivateAddress(address.replace('::ffff:', ''))
  }

  if (isIP(address) === 6) {
    const lower = address.toLowerCase()
    return (
      lower === '::1' ||
      lower.startsWith('fc') ||
      lower.startsWith('fd') ||
      lower.startsWith('fe80:') ||
      lower === '::'
    )
  }

  const parts = address.split('.').map((part) => Number(part))
  if (parts.length !== 4 || parts.some((part) => Number.isNaN(part))) {
    return true
  }

  const [a, b] = parts
  return (
    a === 0 ||
    a === 10 ||
    a === 127 ||
    (a === 169 && b === 254) ||
    (a === 172 && b >= 16 && b <= 31) ||
    (a === 192 && b === 168) ||
    (a === 100 && b >= 64 && b <= 127) ||
    (a === 198 && (b === 18 || b === 19)) ||
    a >= 224
  )
}

async function assertPublicHost(url: URL) {
  if (isBlockedHostname(url.hostname)) {
    throw new Error('Questo indirizzo non sembra un sito pubblico.')
  }

  if (isIP(url.hostname)) {
    if (isPrivateAddress(url.hostname)) {
      throw new Error('Non posso verificare indirizzi locali o privati.')
    }
    return
  }

  if (!url.hostname.includes('.')) {
    throw new Error('Inserisci un dominio pubblico completo, per esempio esempio.it.')
  }

  const addresses = await lookup(url.hostname, { all: true })
  if (addresses.length === 0 || addresses.some((entry) => isPrivateAddress(entry.address))) {
    throw new Error('Il dominio non risolve verso un indirizzo pubblico verificabile.')
  }
}

function extractMeta(html: string) {
  const title = html.match(/<title[^>]*>([\s\S]*?)<\/title>/i)?.[1]
  const description = html.match(/<meta[^>]+name=["']description["'][^>]+content=["']([^"']+)["'][^>]*>/i)?.[1]

  return {
    title: title?.replace(/\s+/g, ' ').trim().slice(0, 180),
    description: description?.replace(/\s+/g, ' ').trim().slice(0, 260)
  }
}

function stripHtml(html: string) {
  return html
    .replace(/<script[\s\S]*?<\/script>/gi, ' ')
    .replace(/<style[\s\S]*?<\/style>/gi, ' ')
    .replace(/<[^>]+>/g, ' ')
    .replace(/\s+/g, ' ')
    .trim()
    .slice(0, 5000)
}

function escapeHtml(value: string) {
  return value
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;')
}

async function fetchWithTimeout(url: URL) {
  const controller = new AbortController()
  const timeout = setTimeout(() => controller.abort(), 9000)

  try {
    return await fetch(url, {
      redirect: 'follow',
      signal: controller.signal,
      headers: {
        Accept: 'text/html,application/xhtml+xml',
        'User-Agent': 'ThomasZanelli-RestylingVerifier/1.0'
      }
    })
  } finally {
    clearTimeout(timeout)
  }
}

async function verifyWebsite(input: string): Promise<VerifiedSite> {
  const url = normalizeUrl(input)
  await assertPublicHost(url)

  let response: Response
  try {
    response = await fetchWithTimeout(url)
  } catch {
    if (!/^https?:\/\//i.test(input) && url.protocol === 'https:') {
      const fallback = new URL(url.toString())
      fallback.protocol = 'http:'
      await assertPublicHost(fallback)
      response = await fetchWithTimeout(fallback)
    } else {
      throw new Error('Non riesco a raggiungere il sito. Verifica che il dominio sia online.')
    }
  }

  if (!response.ok) {
    throw new Error(`Il sito risponde con stato ${response.status}, quindi non posso considerarlo verificato.`)
  }

  const contentType = response.headers.get('content-type') ?? ''
  if (!contentType.toLowerCase().includes('text/html') && !contentType.toLowerCase().includes('application/xhtml')) {
    throw new Error('Il link risponde, ma non sembra una pagina web HTML.')
  }

  const html = (await response.text()).slice(0, maxHtmlChars)
  if (!/(<html|<!doctype html|<title|<meta)/i.test(html)) {
    throw new Error('Il link risponde, ma non contiene una pagina web riconoscibile.')
  }

  const finalUrl = response.url || url.toString()
  const finalParsedUrl = new URL(finalUrl)
  await assertPublicHost(finalParsedUrl)

  const meta = extractMeta(html)

  return {
    finalUrl,
    title: meta.title,
    description: meta.description,
    htmlText: stripHtml(html)
  }
}

async function createAiSummary(site: VerifiedSite, notes: string) {
  const apiKey = process.env.OPENAI_API_KEY
  if (!apiKey || apiKey === placeholderOpenAiKey || apiKey.startsWith('replace_')) {
    return ''
  }

  const controller = new AbortController()
  const timeout = setTimeout(() => controller.abort(), 8000)

  try {
    const response = await fetch('https://api.openai.com/v1/responses', {
      method: 'POST',
      signal: controller.signal,
      headers: {
        Authorization: `Bearer ${apiKey}`,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        model: process.env.OPENAI_MODEL ?? 'gpt-4o-mini',
        input: [
          {
            role: 'system',
            content: 'Sei un consulente web. Scrivi una mini valutazione in italiano, concreta e prudente, massimo 550 caratteri. Non inventare dati non presenti.'
          },
          {
            role: 'user',
            content: `URL: ${site.finalUrl}\nTitolo: ${site.title ?? 'N/D'}\nDescrizione: ${site.description ?? 'N/D'}\nNote cliente: ${notes || 'N/D'}\nTesto pagina: ${site.htmlText}`
          }
        ],
        max_output_tokens: 220
      })
    })

    if (!response.ok) {
      return ''
    }

    const payload = await response.json()
    return cleanText(payload.output_text, 700)
  } catch {
    return ''
  } finally {
    clearTimeout(timeout)
  }
}

function createEmailContent({
  site,
  aiSummary,
  name,
  email,
  company,
  notes
}: {
  site: VerifiedSite
  aiSummary: string
  name: string
  email: string
  company: string
  notes: string
}) {
  const subject = `Richiesta valutazione sito - ${site.title ?? site.finalUrl}`
  const text = [
    'Nuova richiesta di valutazione sito.',
    '',
    `Sito verificato: ${site.finalUrl}`,
    site.title ? `Titolo rilevato: ${site.title}` : '',
    site.description ? `Descrizione rilevata: ${site.description}` : '',
    '',
    `Nome: ${name}`,
    `Email: ${email}`,
    company ? `Attività/Azienda: ${company}` : '',
    '',
    'Cosa vorrebbe migliorare:',
    notes || 'N/D',
    '',
    aiSummary ? `Prima lettura AI: ${aiSummary}` : ''
  ].filter(Boolean).join('\n')

  const rows = [
    ['Sito verificato', site.finalUrl],
    ['Titolo rilevato', site.title ?? 'N/D'],
    ['Descrizione rilevata', site.description ?? 'N/D'],
    ['Nome', name],
    ['Email', email],
    ['Attività/Azienda', company || 'N/D'],
    ['Cosa vorrebbe migliorare', notes || 'N/D'],
    ['Prima lettura AI', aiSummary || 'N/D']
  ]

  const htmlRows = rows.map(([label, value]) => `
    <tr>
      <td style="padding:10px 12px;border-bottom:1px solid #e8e4dc;color:#5f635d;width:190px;vertical-align:top;">${escapeHtml(label)}</td>
      <td style="padding:10px 12px;border-bottom:1px solid #e8e4dc;color:#121412;vertical-align:top;">${escapeHtml(value)}</td>
    </tr>
  `).join('')

  const html = `
    <div style="font-family:Arial,sans-serif;background:#fbfaf7;color:#121412;padding:24px;">
      <div style="max-width:720px;margin:0 auto;background:#ffffff;border:1px solid #e4dfd6;border-radius:8px;overflow:hidden;">
        <div style="padding:22px 24px;border-bottom:1px solid #e4dfd6;background:#f1eee7;">
          <p style="margin:0 0 8px;color:#27483d;font-size:12px;text-transform:uppercase;letter-spacing:.08em;">Nuova richiesta</p>
          <h1 style="margin:0;font-size:24px;line-height:1.2;">Valutazione sito web</h1>
        </div>
        <table style="width:100%;border-collapse:collapse;font-size:15px;line-height:1.5;">
          <tbody>${htmlRows}</tbody>
        </table>
      </div>
    </div>
  `

  return { subject, text, html }
}

async function deliverRequest(payload: Record<string, unknown>) {
  const webhookUrl = process.env.RESTYLING_REQUEST_WEBHOOK_URL
  if (!webhookUrl) {
    return null
  }

  try {
    const response = await fetch(webhookUrl, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload)
    })
    return response.ok ? 'webhook' : null
  } catch {
    return null
  }
}

async function sendRequestEmail({
  subject,
  text,
  html,
  replyTo
}: {
  subject: string
  text: string
  html: string
  replyTo: string
}) {
  const apiKey = process.env.RESEND_API_KEY
  if (!apiKey) {
    return { delivery: null, error: 'RESEND_API_KEY non presente nella funzione Vercel.' }
  }

  const controller = new AbortController()
  const timeout = setTimeout(() => controller.abort(), 8000)

  try {
    const response = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      signal: controller.signal,
      headers: {
        Authorization: `Bearer ${apiKey}`,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        from: requestSender,
        to: [requestRecipient],
        reply_to: replyTo,
        subject,
        text,
        html
      })
    })

    if (!response.ok) {
      const errorBody = await response.text()
      return {
        delivery: null,
        error: `Resend ha risposto ${response.status}: ${errorBody.slice(0, 500)}`
      }
    }

    return { delivery: 'email', error: '' }
  } catch {
    return { delivery: null, error: 'Errore di rete durante la chiamata a Resend.' }
  } finally {
    clearTimeout(timeout)
  }
}

export async function POST(request: Request) {
  let body: RestylingRequestBody

  try {
    body = await request.json()
  } catch {
    return NextResponse.json({ error: 'Richiesta non valida.' }, { status: 400 })
  }

  const websiteUrl = cleanText(body.websiteUrl, 500)
  const name = cleanText(body.name, 120)
  const email = cleanText(body.email, 180)
  const company = cleanText(body.company, 160)
  const notes = cleanText(body.notes, 1500)

  if (!websiteUrl || !name || !email) {
    return NextResponse.json({ error: 'Inserisci sito, nome ed email.' }, { status: 400 })
  }

  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return NextResponse.json({ error: 'Inserisci un indirizzo email valido.' }, { status: 400 })
  }

  try {
    const site = await verifyWebsite(websiteUrl)
    const aiSummary = await createAiSummary(site, notes)
    const emailContent = createEmailContent({ site, aiSummary, name, email, company, notes })
    const payload = {
      finalUrl: site.finalUrl,
      title: site.title,
      description: site.description,
      aiSummary,
      name,
      email,
      company,
      notes,
      createdAt: new Date().toISOString()
    }
    const webhookDelivery = await deliverRequest(payload)
    const emailDelivery = webhookDelivery ? { delivery: null, error: '' } : await sendRequestEmail({
      ...emailContent,
      replyTo: email
    })
    const delivery = webhookDelivery ?? emailDelivery.delivery

    if (!delivery) {
      return NextResponse.json(
        { error: `Il sito è stato verificato, ma l’invio email non è riuscito. ${emailDelivery.error}` },
        { status: 500 }
      )
    }

    return NextResponse.json({
      finalUrl: site.finalUrl,
      title: site.title,
      description: site.description,
      aiSummary,
      delivery
    })
  } catch (error) {
    return NextResponse.json(
      { error: error instanceof Error ? error.message : 'Non sono riuscito a verificare il sito.' },
      { status: 400 }
    )
  }
}
