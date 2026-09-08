'use client'

import { useEffect, useRef, useState } from 'react'
import Image from 'next/image'
import Icon from './Icon'

/** Load the film only after an explicit play. Keep the original framing and sound. */
export default function ConcertFilm() {
  const video = useRef<HTMLVideoElement>(null)
  const [started, setStarted] = useState(false)
  const [error, setError] = useState(false)
  useEffect(() => {
    const el = video.current
    if (!el) return
    const observer = new IntersectionObserver(([entry]) => { if (!entry.isIntersecting) el.pause() })
    observer.observe(el)
    const hide = () => { if (document.hidden) el.pause() }
    document.addEventListener('visibilitychange', hide)
    return () => { observer.disconnect(); document.removeEventListener('visibilitychange', hide) }
  }, [])
  useEffect(() => { if (started) video.current?.focus({ preventScroll: true }) }, [started])
  const play = () => {
    setError(false); setStarted(true)
    video.current?.play().catch(() => { setStarted(false); setError(true) })
  }
  return <figure className="concert-film">
    <div className="concert-film-stage">
      <video ref={video} src="/videos/concert-sketch-2025.mp4" poster="/images/concert/film-poster.jpg"
        controls={started} tabIndex={started ? 0 : -1} playsInline preload="none" aria-label="2025 내면소통 명상 콘서트 스케치영상" onError={() => setError(true)} />
      {!started && <button type="button" className="concert-film-play" onClick={play} aria-label="콘서트 영상 재생 · 1분 8초 · 소리 포함">
        <Image src="/images/concert/film-poster.jpg" alt="명상을 안내하는 김주환 교수" fill sizes="(max-width:767px) 100vw, 1200px" />
        <span className="concert-play-mark"><Icon name="play" size={24}/></span>
        <span className="concert-play-label">현장에서 만나는 내면소통<span>영상 보기 · 1:08</span></span>
      </button>}
    </div>
    <figcaption><span>2025 내면소통 명상 콘서트 · 현장 스케치</span><span>소리와 함께 감상하는 영상입니다.</span></figcaption>
    {error && <p role="status">영상을 불러오지 못했습니다. <a href="https://drive.google.com/file/d/19a0BZ56VgBcdmbrjOTSwK4Y5keqxAAzH/view" target="_blank" rel="noopener noreferrer">원본 영상 보기</a></p>}
  </figure>
}
