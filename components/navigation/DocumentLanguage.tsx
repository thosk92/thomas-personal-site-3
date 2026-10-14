'use client'

import { useEffect } from 'react'
import { usePathname } from 'next/navigation'

export default function DocumentLanguage() {
  const pathname = usePathname()

  useEffect(() => {
    document.documentElement.lang = pathname.startsWith('/en') ? 'en' : 'it'
  }, [pathname])

  return null
}
