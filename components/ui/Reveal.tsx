'use client'
import { useEffect, useRef, type ReactNode } from 'react'

/** One entrance for below-fold editorial content; visible by default and for every fallback. */
export default function Reveal({ children, className = '' }: { children: ReactNode; className?: string }) {
  const root = useRef<HTMLDivElement>(null)
  useEffect(() => {
    const node = root.current
    if (!node) return
    const reduced = matchMedia('(prefers-reduced-motion: reduce)')
    let observer: IntersectionObserver | undefined
    const clear = () => { observer?.disconnect(); node.removeAttribute('data-waiting') }
    let paused = false
    try { paused = localStorage.getItem('inzeum:motion-paused') === 'true' } catch {}
    if (reduced.matches || paused || document.documentElement.dataset.static === 'true' || node.getBoundingClientRect().top < innerHeight) return
    node.dataset.waiting = 'true'
    observer = new IntersectionObserver(([entry]) => { if (entry.isIntersecting) clear() }, { rootMargin:'0px 0px -24px 0px' })
    observer.observe(node)
    reduced.addEventListener('change', clear)
    node.addEventListener('focusin', clear)
    return () => { clear(); reduced.removeEventListener('change', clear); node.removeEventListener('focusin', clear) }
  }, [])
  return <div ref={root} className={`editorial-reveal ${className}`}>{children}</div>
}
