'use client'

import { useEffect, useRef, useState } from 'react'
import Link from 'next/link'
import Icon from './Icon'
import type { InkScene } from '@/lib/ink-scene'

const DESKTOP = '/images/sumuk/synthetic-lake-scene-v3.webp'
const MOBILE = '/images/sumuk/synthetic-lake-scene-mobile-v3.webp'
const clamp = (n: number) => Math.max(0, Math.min(1, n))
const ease = (a: number, b: number, x: number) => { const t = clamp((x - a) / (b - a)); return t * t * (3 - 2 * t) }

export default function InkJourney() {
  const root = useRef<HTMLElement>(null), canvas = useRef<HTMLCanvasElement>(null)
  const practiceImage = useRef<HTMLImageElement>(null)
  const title = useRef<HTMLHeadingElement>(null), footer = useRef<HTMLDivElement>(null)
  const photo = useRef<HTMLDivElement>(null), caption = useRef<HTMLDivElement>(null)
  const mainAction = useRef<HTMLAnchorElement>(null), photoAction = useRef<HTMLAnchorElement>(null)
  const controller = useRef<InkScene | null>(null)
  const [paused, setPaused] = useState(true)
  const [still, setStill] = useState(false)
  const [mobile, setMobile] = useState(false)
  const [visible, setVisible] = useState(true)
  const [photoReady, setPhotoReady] = useState(false)
  const [tabVisible, setTabVisible] = useState(true)

  const activity = useRef(false), paintVisible = useRef(true)
  activity.current = !paused && visible && tabVisible && !still

  useEffect(() => {
    const small = matchMedia('(max-width: 767px)'), reduced = matchMedia('(prefers-reduced-motion: reduce)')
    const preferences = () => { setMobile(small.matches); setStill(reduced.matches || document.documentElement.dataset.static === 'true') }
    preferences(); small.addEventListener('change', preferences); reduced.addEventListener('change', preferences)
    try { setPaused(localStorage.getItem('inzeum:motion-paused') === 'true') } catch { setPaused(false) }
    const visibility = () => setTabVisible(!document.hidden)
    document.addEventListener('visibilitychange', visibility)
    const observer = new IntersectionObserver(([entry]) => setVisible(entry.isIntersecting))
    if (root.current) observer.observe(root.current)
    return () => { small.removeEventListener('change', preferences); reduced.removeEventListener('change', preferences); document.removeEventListener('visibilitychange', visibility); observer.disconnect() }
  }, [])

  useEffect(() => {
    const image = practiceImage.current
    if (!image) return
    const ready = () => { if (image.naturalWidth > 0) setPhotoReady(true) }
    image.addEventListener('load', ready)
    if (image.complete) ready()
    return () => image.removeEventListener('load', ready)
  }, [mobile])

  useEffect(() => {
    if (still || !canvas.current || matchMedia('(prefers-reduced-motion: reduce)').matches || document.documentElement.dataset.static === 'true') return
    let cancelled = false
    import('@/lib/ink-scene').then(({ createInkScene }) => {
      if (cancelled || !canvas.current) return
      controller.current = createInkScene(canvas.current, mobile ? MOBILE : DESKTOP, mobile ? .23 : .305)
      controller.current?.setActive(activity.current && paintVisible.current)
    })
    return () => { cancelled = true; controller.current?.dispose(); controller.current = null }
    // Source/context lifecycle; motion changes update the existing controller below.
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [mobile, still])
  useEffect(() => { controller.current?.setActive(activity.current && paintVisible.current) }, [paused, visible, tabVisible, still])

  useEffect(() => {
    let frame = 0
    const update = () => {
      frame = 0
      if (!root.current || !title.current || !footer.current || !photo.current || !caption.current) return
      if (still) {
        title.current.style.cssText = ''; footer.current.style.cssText = ''; photo.current.style.cssText = ''; caption.current.style.cssText = ''
        footer.current.inert = false; caption.current.inert = false
        if (mainAction.current) mainAction.current.tabIndex = 0
        if (photoAction.current) photoAction.current.tabIndex = 0
        return
      }
      const rect = root.current.getBoundingClientRect()
      const p = photoReady ? clamp(-rect.top / Math.max(1, rect.height - innerHeight)) : 0
      const exit = ease(.04, .4, p), reveal = ease(.18, .82, p), enter = ease(.58, .88, p)
      title.current.style.opacity = String(1 - exit)
      title.current.style.transform = `translateY(${-exit * 48}px)`
      footer.current.style.opacity = String(1 - exit)
      footer.current.style.pointerEvents = exit > .8 ? 'none' : 'auto'
      footer.current.inert = exit > .8
      photo.current.style.clipPath = `inset(${(1 - reveal) * 100}% 0 0 0)`
      caption.current.style.opacity = String(enter)
      caption.current.style.transform = `translateY(${(1 - enter) * 24}px)`
      caption.current.style.pointerEvents = enter > .8 ? 'auto' : 'none'
      caption.current.inert = enter <= .8
      if (mainAction.current) mainAction.current.tabIndex = exit > .8 ? -1 : 0
      if (photoAction.current) photoAction.current.tabIndex = enter > .8 ? 0 : -1
      root.current.dataset.chapter = reveal > .05 ? 'practice' : 'ink'
      paintVisible.current = reveal < .98
      controller.current?.setActive(activity.current && paintVisible.current)
    }
    const schedule = () => { if (!frame) frame = requestAnimationFrame(update) }
    update(); window.addEventListener('scroll', schedule, { passive: true }); window.addEventListener('resize', schedule)
    return () => { cancelAnimationFrame(frame); window.removeEventListener('scroll', schedule); window.removeEventListener('resize', schedule) }
  }, [still, photoReady])

  const toggle = () => setPaused(value => { try { localStorage.setItem('inzeum:motion-paused', String(!value)) } catch {} return !value })
  return <section ref={root} className="ink-journey" data-still={still} aria-label="내면소통과 일상의 수련">
    <div className="journey-stage">
      <div className="scene-first" onPointerMove={event => {
        if (event.pointerType !== 'mouse' || paused || still) return
        const rect = event.currentTarget.getBoundingClientRect()
        controller.current?.setPointer((event.clientX - rect.left) / rect.width, 1 - (event.clientY - rect.top) / rect.height)
      }} onPointerLeave={() => controller.current?.setPointer(.5, .5)}>
        <picture className="scene-painting" aria-hidden="true">
          <source media="(max-width: 767px)" srcSet={MOBILE} />
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={DESKTOP} alt="" width={1513} height={1040} fetchPriority="high" decoding="async" />
        </picture>
        <canvas ref={canvas} className="scene-canvas" aria-hidden="true" data-renderer="fallback" />
        <h1 ref={title} className="scene-title scene-title-brand"><span className="sr-only">INZEUM 인지엄 · 내면소통연구소</span><img src="/images/wordmark-paper.png" alt="" width={1200} height={392} /></h1>
        <div ref={footer} className="scene-footer">
          <p>과학에 기반한 비종교적 명상.<br /><span className="scene-lab-label">인지엄 · A meditation lab in Seoul</span></p>
          <a href="#vision" className="scene-scroll-cue">스크롤하여 더 보기<span aria-hidden="true" /></a>
          <Link ref={mainAction} href="/courses#foundation" className="scene-primary">나의 수련 시작하기<Icon name="arrow-right" size={24} /></Link>
        </div>
      <div className="scene-controls"><span>수묵 이미지 · 시안</span>{!still && <button type="button" onClick={toggle} aria-pressed={paused} aria-label={paused ? '장면 움직임 재생' : '장면 움직임 멈추기'}><Icon name={paused ? 'play' : 'pause'} size={16} /><span>{paused ? '재생' : '멈춤'}</span></button>}</div>
      </div>
      <div ref={photo} className="scene-second">
        <picture className="scene-practice-photo">
          <source media="(max-width: 767px)" srcSet="/images/concert/greeting.webp" />
          {/* Load the next chapter eagerly so scrolling never exposes an empty photo. */}
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img ref={practiceImage} src="/images/concert/audience.webp" alt={mobile ? '김주환 교수가 명상 콘서트에서 참가자와 만나는 모습' : '2025 내면소통 명상 콘서트에서 무대와 객석을 가득 채운 참가자들'} width={1920} height={1280} loading="eager" decoding="async" onLoad={() => setPhotoReady(true)} />
        </picture>
        <div className="scene-photo-shade" />
        <div ref={caption} className="scene-photo-caption">
          <div><p className="text-body-sm">2025 내면소통 명상 콘서트 · 코엑스</p><h2>혼자 시작한 명상이,<br />함께하는 경험으로.</h2></div>
          <Link ref={photoAction} href="#concert-film" className="scene-primary">콘서트 영상 보기<Icon name="arrow-right" size={24} /></Link>
        </div>
      </div>

    </div>
    <noscript><style>{`.ink-journey{height:auto!important}.journey-stage{position:static!important;height:auto!important}.scene-first,.scene-second{position:relative!important;height:100svh!important;clip-path:none!important}.scene-photo-caption{opacity:1!important}.scene-controls{display:none!important}`}</style></noscript>
  </section>
}
