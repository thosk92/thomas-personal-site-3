'use client'

import { usePathname } from 'next/navigation'
import Script from 'next/script'
import { useEffect, useState, useSyncExternalStore } from 'react'

const GA_MEASUREMENT_ID = 'G-ZN8L1X5ZG7'
const CONSENT_STORAGE_KEY = 'tz-analytics-consent'

declare global {
  interface Window {
    dataLayer?: unknown[]
    gtag?: (...args: unknown[]) => void
  }
}

type ConsentChoice = 'accepted' | 'declined'
type ConsentSnapshot = ConsentChoice | null

const consentListeners = new Set<() => void>()

function readStoredConsent(): ConsentSnapshot {
  if (typeof window === 'undefined') return null

  const storedChoice = window.localStorage.getItem(CONSENT_STORAGE_KEY)
  return storedChoice === 'accepted' || storedChoice === 'declined' ? storedChoice : null
}

function subscribeToConsent(listener: () => void) {
  consentListeners.add(listener)
  window.addEventListener('storage', listener)

  return () => {
    consentListeners.delete(listener)
    window.removeEventListener('storage', listener)
  }
}

function emitConsentChange() {
  consentListeners.forEach((listener) => listener())
}

function updateGoogleConsent(choice: ConsentChoice) {
  if (!window.gtag) return

  const granted = choice === 'accepted' ? 'granted' : 'denied'

  window.gtag('consent', 'update', {
    ad_storage: 'denied',
    ad_user_data: 'denied',
    ad_personalization: 'denied',
    analytics_storage: granted
  })
}

function clearGoogleAnalyticsCookies() {
  const expires = 'Thu, 01 Jan 1970 00:00:00 GMT'
  const hostnameParts = window.location.hostname.split('.')
  const domains = [
    window.location.hostname,
    hostnameParts.length > 1 ? `.${hostnameParts.slice(-2).join('.')}` : window.location.hostname
  ]

  document.cookie.split(';').forEach((cookie) => {
    const name = cookie.split('=')[0].trim()
    if (!name.startsWith('_ga')) return

    domains.forEach((domain) => {
      document.cookie = `${name}=; expires=${expires}; path=/; domain=${domain}`
    })
    document.cookie = `${name}=; expires=${expires}; path=/`
  })
}

export default function GoogleAnalyticsConsent() {
  const pathname = usePathname()
  const choice = useSyncExternalStore(subscribeToConsent, readStoredConsent, () => null)
  const [isPreferencesOpen, setIsPreferencesOpen] = useState(false)
  const locale = pathname.startsWith('/en') ? 'en' : 'it'

  useEffect(() => {
    window.dataLayer = window.dataLayer || []
    window.gtag = window.gtag || function gtag() {
      window.dataLayer?.push(arguments)
    }

    window.gtag('consent', 'default', {
      ad_storage: 'denied',
      ad_user_data: 'denied',
      ad_personalization: 'denied',
      analytics_storage: 'denied'
    })

    if (choice) {
      updateGoogleConsent(choice)
    }
  }, [choice])

  function saveChoice(nextChoice: ConsentChoice) {
    window.localStorage.setItem(CONSENT_STORAGE_KEY, nextChoice)
    setIsPreferencesOpen(false)
    emitConsentChange()
    updateGoogleConsent(nextChoice)
    if (nextChoice === 'declined') {
      clearGoogleAnalyticsCookies()
    }
  }

  function reopenPreferences() {
    setIsPreferencesOpen(true)
  }

  const hasAccepted = choice === 'accepted'
  const shouldShowBanner = choice === null || isPreferencesOpen
  const copy = locale === 'en'
    ? {
      label: 'Cookie preferences',
      title: 'Analytics cookies',
      body: 'Google Analytics is used only if you accept. Vercel Analytics and Speed Insights remain active without cookies.',
      decline: 'Decline',
      accept: 'Accept',
      preferences: 'Cookies'
    }
    : {
      label: 'Preferenze cookie',
      title: 'Cookie analytics',
      body: 'Uso Google Analytics solo se accetti. Vercel Analytics e Speed Insights restano attivi senza cookie.',
      decline: 'Rifiuta',
      accept: 'Accetta',
      preferences: 'Cookie'
    }

  return (
    <>
      {hasAccepted ? (
        <>
          <Script
            src={`https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`}
            strategy="afterInteractive"
          />
          <Script id="google-analytics" strategy="afterInteractive">
            {`
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', '${GA_MEASUREMENT_ID}');
            `}
          </Script>
        </>
      ) : null}

      {shouldShowBanner ? (
        <div className="cookie-banner" role="dialog" aria-live="polite" aria-label={copy.label}>
          <div>
            <strong>{copy.title}</strong>
            <p>{copy.body}</p>
          </div>
          <div className="cookie-banner-actions">
            <button type="button" onClick={() => saveChoice('declined')}>
              {copy.decline}
            </button>
            <button type="button" className="cookie-accept" onClick={() => saveChoice('accepted')}>
              {copy.accept}
            </button>
          </div>
        </div>
      ) : null}

      {choice !== null ? (
        <button type="button" className="cookie-preferences-button" onClick={reopenPreferences}>
          {copy.preferences}
        </button>
      ) : null}
    </>
  )
}
