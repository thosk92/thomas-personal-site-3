'use client'

import { Fragment, useEffect, useRef } from 'react'

/** One semantic, selectable text layer. Scroll only changes each word's ink. */
export default function ScrollFill({ text }: { text: string }) {
  const paragraph = useRef<HTMLParagraphElement>(null)

  useEffect(() => {
    const element = paragraph.current
    if (!element) return
    const words = Array.from(element.querySelectorAll<HTMLElement>('[data-fill-word]'))
    const preference = window.matchMedia('(prefers-reduced-motion: reduce)')
    let frame = 0
    let disposed = false

    const paint = () => {
      frame = 0
      if (preference.matches) {
        delete element.dataset.enhanced
        return
      }
      const box = element.getBoundingClientRect()
      const viewport = window.innerHeight
      const scroll = Math.max(0, window.scrollY)
      const paragraphTop = box.top + scroll
      // Anchor the range to the document: a tall viewport must not prefill the text.
      const start = Math.max(48, paragraphTop - viewport * 0.8)
      // Fill over most of the viewport, ending while the text is still in view.
      const end = Math.max(start + viewport * 0.2, paragraphTop + box.height * 0.5 - viewport * 0.15)
      const progress = Math.max(0, Math.min(1, (scroll - start) / (end - start)))
      const widths = words.map(word => word.getBoundingClientRect().width)
      const total = widths.reduce((sum, width) => sum + width, 0)
      let offset = 0
      words.forEach((word, index) => {
        const width = widths[index]
        const fill = Math.max(0, Math.min(1, (progress * total - offset) / (width || 1)))
        word.style.setProperty('--word-fill', `${fill * 100}%`)
        offset += width
      })
      element.dataset.enhanced = 'true'
    }
    const schedule = () => { if (!disposed && !frame) frame = requestAnimationFrame(paint) }
    const observer = new ResizeObserver(schedule)
    observer.observe(element)
    window.addEventListener('scroll', schedule, { passive: true })
    window.addEventListener('resize', schedule)
    preference.addEventListener('change', schedule)
    document.fonts.ready.then(schedule)
    schedule()
    return () => {
      disposed = true
      cancelAnimationFrame(frame)
      observer.disconnect()
      window.removeEventListener('scroll', schedule)
      window.removeEventListener('resize', schedule)
      preference.removeEventListener('change', schedule)
      delete element.dataset.enhanced
    }
  }, [text])

  return <p ref={paragraph} className="archive-approach-copy">{text.split(' ').map((word, index) => (
    <Fragment key={`${index}-${word}`}>{index > 0 ? ' ' : ''}<span data-fill-word>{word}</span></Fragment>
  ))}</p>
}
