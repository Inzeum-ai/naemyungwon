'use client'

import { useEffect, useRef, useState } from 'react'
import Icon from './Icon'

type Props = { src: string; mobileSrc?: string; className?: string; position?: string; priority?: boolean }

// The painting is stationary. Only the separately authored mist changes opacity.
export default function AmbientArtwork({ src, mobileSrc, className = '', position, priority = false }: Props) {
  const ref = useRef<HTMLDivElement>(null)
  const [paused, setPaused] = useState(true)
  const [visible, setVisible] = useState(false)
  const [reduced, setReduced] = useState(false)
  useEffect(() => {
    const media = window.matchMedia('(prefers-reduced-motion: reduce)')
    const sync = () => setReduced(media.matches)
    sync()
    media.addEventListener('change', sync)
    try { setPaused(localStorage.getItem('inzeum:motion-paused') === 'true' || new URLSearchParams(location.search).has('static')) }
    catch { setPaused(false) }
    const observer = new IntersectionObserver(([entry]) => setVisible(entry.isIntersecting), { threshold: 0 })
    if (ref.current) observer.observe(ref.current)
    return () => { media.removeEventListener('change', sync); observer.disconnect() }
  }, [])
  const toggle = () => {
    setPaused(value => {
      try { localStorage.setItem('inzeum:motion-paused', String(!value)) } catch {}
      return !value
    })
  }
  return (
    <div ref={ref} className={`ambient-art ${className}`} data-playing={!paused && visible && !reduced}>
      <div className="ambient-image" aria-hidden="true">
        <picture>
          {mobileSrc && <source media="(max-width: 1023px)" srcSet={mobileSrc} />}
          {/* Native picture selects one art-directed asset before downloading. */}
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={src} alt="" width={1672} height={941} fetchPriority={priority ? 'high' : 'auto'}
            loading={priority ? 'eager' : 'lazy'} decoding="async" style={{ objectPosition: position }} />
        </picture>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img className="ambient-mist" src="/images/sumuk/synthetic-mist-overlay-v2.webp" alt="" width={2400} height={1000}
          loading="lazy" decoding="async" />
      </div>
      <div className="art-caption">
        <span>수묵 이미지 · 시안</span>
        <button type="button" onClick={toggle} aria-pressed={paused} className="motion-toggle"
          aria-label={paused ? '배경 움직임 재생' : '배경 움직임 멈추기'}>
          <Icon name={paused ? 'play' : 'pause'} size={16} />
          <span>{paused ? '재생' : '멈춤'}</span>
        </button>
      </div>
    </div>
  )
}
