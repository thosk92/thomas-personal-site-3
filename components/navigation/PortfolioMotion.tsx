'use client'

import { useEffect, useRef, useState } from 'react'

/** Progressive enhancement: server-rendered content stays visible without JS. */
export default function PortfolioMotion({ english = false }: { english?: boolean }) {
  const marker = useRef<HTMLDivElement>(null)
  const [paused, setPaused] = useState(false)

  useEffect(() => {
    const root = marker.current?.closest('main')
    if (!root) return
    const preference = window.matchMedia('(prefers-reduced-motion: reduce)')
    let dispose = () => {}

    const setup = () => {
      dispose()
      const reduced = preference.matches || paused
      root.dataset.motion = reduced ? 'off' : 'on'
      if (reduced) return

      const animations = new Set<Animation>()
      const reveals = root.querySelectorAll<HTMLElement>('[data-reveal], .profile-copy, .section-heading-grid > p, .service-link-item, .project-info, .seo-content-section, .seo-cta')
      const observer = new IntersectionObserver((entries) => {
        entries.forEach(({ target, isIntersecting }) => {
          if (!isIntersecting) return
          const words = target.querySelectorAll<HTMLElement>('.reveal-word')
          const elements = words.length ? Array.from(words) : [target as HTMLElement]
          elements.forEach((element, index) => {
            const animation = element.animate([
              { opacity: 0, transform: `translate3d(0, ${words.length ? '105%' : '28px'}, 0)` },
              { opacity: 1, transform: 'translate3d(0, 0, 0)' }
            ], { duration: 850, delay: Math.min(index * 45, 300), easing: 'cubic-bezier(.16,1,.3,1)', fill: 'backwards' })
            animations.add(animation)
            animation.onfinish = () => animations.delete(animation)
          })
          observer.unobserve(target)
        })
      }, { threshold: 0.12 })
      reveals.forEach(element => observer.observe(element))

      const hero = root.querySelector<HTMLElement>('.portfolio-hero')
      const images = Array.from(root.querySelectorAll<HTMLElement>('.project-visual'))
      const strip = root.querySelector<HTMLElement>('.strip-viewport')
      const progress = marker.current
      let frame = 0

      const render = () => {
        frame = 0
        // Read layout together, then write transforms. No React renders on scroll.
        const height = window.innerHeight
        const heroBox = hero?.getBoundingClientRect()
        const positions = images.map(element => ({ element, box: element.getBoundingClientRect() }))
        const stripBox = strip?.getBoundingClientRect()
        const total = document.documentElement.scrollHeight - height
        progress?.style.setProperty('--reading-progress', String(total > 0 ? window.scrollY / total : 0))
        if (hero && heroBox) hero.style.setProperty('--hero-shift', `${Math.max(0, Math.min(-heroBox.top, height)) * .13}px`)
        positions.forEach(({ element, box }) => {
          if (box.bottom < 0 || box.top > height) return
          element.style.setProperty('--image-shift', `${Math.max(-18, Math.min(18, (height / 2 - box.top - box.height / 2) * .045))}px`)
        })
        if (strip && stripBox && stripBox.bottom > 0 && stripBox.top < height) {
          strip.style.setProperty('--strip-shift', `${(height - stripBox.top) * -.16}px`)
        }
      }
      const schedule = () => { if (!frame) frame = requestAnimationFrame(render) }
      const resize = new ResizeObserver(schedule)
      resize.observe(root)
      window.addEventListener('scroll', schedule, { passive: true })
      window.addEventListener('resize', schedule)
      schedule()
      dispose = () => {
        observer.disconnect()
        resize.disconnect()
        animations.forEach(animation => animation.cancel())
        cancelAnimationFrame(frame)
        window.removeEventListener('scroll', schedule)
        window.removeEventListener('resize', schedule)
        hero?.style.removeProperty('--hero-shift')
        images.forEach(element => element.style.removeProperty('--image-shift'))
        strip?.style.removeProperty('--strip-shift')
      }
    }
    setup()
    preference.addEventListener('change', setup)
    return () => {
      dispose()
      preference.removeEventListener('change', setup)
      delete root.dataset.motion
    }
  }, [paused])

  return (
    <>
      <div ref={marker} className="reading-progress" aria-hidden="true" />
      <button className="motion-toggle" type="button" aria-pressed={paused} onClick={() => setPaused(value => !value)}>
        <span aria-hidden="true">{paused ? '▶' : 'Ⅱ'}</span>
        {english ? (paused ? 'Resume motion' : 'Pause motion') : (paused ? 'Attiva animazioni' : 'Pausa animazioni')}
      </button>
    </>
  )
}
