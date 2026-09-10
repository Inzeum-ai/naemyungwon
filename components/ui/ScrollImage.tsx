'use client'

import Image from 'next/image'
import { useEffect, useRef } from 'react'

type Props = { src: string; alt: string; width?: number; height?: number; caption?: string; source?: string; className?: string; priority?: boolean }

/** A small scroll-linked image drift. Native scrolling and the original framing remain intact. */
export default function ScrollImage({ src, alt, width = 1600, height = 900, caption, source, className = '', priority = false }: Props) {
  const root = useRef<HTMLElement>(null)
  useEffect(() => {
    const node = root.current
    if (!node) return
    const reduced = matchMedia('(prefers-reduced-motion: reduce)')
    let frame = 0, visible = false
    const paused = () => { try { return localStorage.getItem('inzeum:motion-paused') === 'true' } catch { return false } }
    const update = () => {
      frame = 0
      if (!visible || document.hidden || reduced.matches || document.documentElement.dataset.static === 'true' || paused()) { node.style.removeProperty('--photo-drift'); return }
      const rect = node.getBoundingClientRect()
      const progress = Math.max(-1, Math.min(1, (innerHeight / 2 - rect.top - rect.height / 2) / innerHeight))
      const height = node.querySelector('.scroll-photo-window')?.clientHeight ?? 0
      node.style.setProperty('--photo-drift', `${progress * Math.min(18, height * .02)}px`)
    }
    const schedule = () => { if (!frame) frame = requestAnimationFrame(update) }
    const observer = new IntersectionObserver(([entry]) => { visible = entry.isIntersecting; schedule() }, { rootMargin: '60px' })
    observer.observe(node)
    window.addEventListener('scroll', schedule, { passive: true }); window.addEventListener('resize', schedule); reduced.addEventListener('change', schedule)
    return () => { observer.disconnect(); cancelAnimationFrame(frame); window.removeEventListener('scroll', schedule); window.removeEventListener('resize', schedule); reduced.removeEventListener('change', schedule) }
  }, [])
  return <figure ref={root} className={`scroll-photo ${className}`}>
    <a href={src} target="_blank" rel="noopener noreferrer" aria-label={`${alt} — 전체 이미지 보기 (새 창)`} className="scroll-photo-window">
      <Image src={src} alt={alt} width={width} height={height} priority={priority} sizes="(max-width: 767px) 100vw, 85vw" />
    </a>
    {caption && <figcaption>{caption}{source && <a href={source} target="_blank" rel="noopener noreferrer">원문 기록 ↗</a>}</figcaption>}
  </figure>
}
