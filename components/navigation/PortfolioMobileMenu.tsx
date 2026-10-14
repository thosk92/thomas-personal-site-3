'use client'

import Link from 'next/link'
import { useEffect, useRef, useState } from 'react'

type MenuItem = {
  number?: string
  label: string
  href: string
}

type LanguageItem = {
  label: string
  href: string
  current?: boolean
}

type Props = {
  ariaLabel: string
  menuLabel: string
  closeLabel: string
  languageLabel: string
  items: MenuItem[]
  requestItem: MenuItem
  languageItems: LanguageItem[]
}

export default function PortfolioMobileMenu({
  ariaLabel,
  menuLabel,
  closeLabel,
  languageLabel,
  items,
  requestItem,
  languageItems
}: Props) {
  const [isOpen, setIsOpen] = useState(false)
  const menuRef = useRef<HTMLDivElement>(null)
  const buttonRef = useRef<HTMLButtonElement>(null)

  useEffect(() => {
    if (!isOpen) return

    const previousOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    menuRef.current?.querySelector<HTMLAnchorElement>('nav a')?.focus()

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setIsOpen(false)
        buttonRef.current?.focus()
      }
      if (event.key === 'Tab') {
        const controls = menuRef.current?.querySelectorAll<HTMLElement>('button, a[href]')
        if (!controls?.length) return
        const first = controls[0]
        const last = controls[controls.length - 1]
        if (event.shiftKey && document.activeElement === first) {
          event.preventDefault()
          last.focus()
        } else if (!event.shiftKey && document.activeElement === last) {
          event.preventDefault()
          first.focus()
        }
      }
    }

    window.addEventListener('keydown', onKeyDown)
    const desktop = window.matchMedia('(min-width: 961px)')
    const onDesktop = () => { if (desktop.matches) setIsOpen(false) }
    desktop.addEventListener('change', onDesktop)
    return () => {
      window.removeEventListener('keydown', onKeyDown)
      desktop.removeEventListener('change', onDesktop)
      document.body.style.overflow = previousOverflow
    }
  }, [isOpen])

  function closeMenu() {
    setIsOpen(false)
  }

  return (
    <div className="mobile-menu" ref={menuRef}>
      <button
        ref={buttonRef}
        className="mobile-menu-button"
        type="button"
        aria-label={isOpen ? closeLabel : menuLabel}
        aria-expanded={isOpen}
        aria-controls="mobile-navigation-panel"
        onClick={() => setIsOpen((open) => !open)}
      >
        <span aria-hidden="true" />
        <span aria-hidden="true" />
      </button>

      <nav
        id="mobile-navigation-panel"
        className="mobile-menu-panel"
        aria-label={ariaLabel}
        data-open={isOpen ? 'true' : 'false'}
      >
        <div className="mobile-menu-links">
          {items.map((item) => (
            <MenuLink key={`${item.href}-${item.label}`} item={item} onClick={closeMenu} />
          ))}
        </div>

        <div className="mobile-menu-footer">
          <MenuLink item={requestItem} className="mobile-menu-request" onClick={closeMenu} />
          <div className="mobile-menu-languages" aria-label={languageLabel}>
            {languageItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                aria-current={item.current ? 'page' : undefined}
                onClick={closeMenu}
              >
                {item.label}
              </Link>
            ))}
          </div>
        </div>
      </nav>
    </div>
  )
}

function MenuLink({
  item,
  className,
  onClick
}: {
  item: MenuItem
  className?: string
  onClick: () => void
}) {
  const content = (
    <>
      {item.number ? <span>{item.number}</span> : null}
      {item.label}
    </>
  )

  if (item.href.startsWith('#')) {
    return (
      <a className={className} href={item.href} onClick={onClick}>
        {content}
      </a>
    )
  }

  return (
    <Link className={className} href={item.href} onClick={onClick}>
      {content}
    </Link>
  )
}
