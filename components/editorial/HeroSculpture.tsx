'use client'

import { useEffect, useRef, useState } from 'react'
import type { SculptureController } from './sculpture-scene'

export default function HeroSculpture() {
  const stage = useRef<HTMLDivElement>(null)
  const scene = useRef<SculptureController | null>(null)
  const [ready, setReady] = useState(false)

  useEffect(() => {
    const element = stage.current
    if (!element) return
    let cancelled = false
    import('./sculpture-scene').then(({ createSculpture }) => {
      if (cancelled) return
      try {
        scene.current = createSculpture(element, () => setReady(false))
        scene.current.setPlaying(true)
        setReady(true)
      } catch {
        // The static ornament remains visible on devices without WebGL.
        setReady(false)
      }
    }).catch(() => { if (!cancelled) setReady(false) })

    return () => {
      cancelled = true
      scene.current?.dispose()
      scene.current = null
    }
  }, [])

  return <div className="archive-sculpture" data-ready={ready} data-playing={ready}>
    <div className="archive-sculpture-stage" ref={stage} aria-hidden="true">
      <div className="archive-sculpture-fallback" />
    </div>

  </div>
}
