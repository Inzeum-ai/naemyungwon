'use client'

import { useEffect } from 'react'
import type { Ground } from './PageShell'

// Paints the canvas behind the page (overscroll, the instant before the next route mounts)
// in the page's own ground, so a 한지 page never rubber-bands onto ink and vice versa.
export default function GroundSync({ ground }: { ground: Ground }) {
  useEffect(() => {
    const el = document.documentElement
    el.dataset.ground = ground
    return () => {
      delete el.dataset.ground
    }
  }, [ground])
  return null
}
