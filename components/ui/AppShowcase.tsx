'use client'

import { useId, useRef, useState } from 'react'
import Image from 'next/image'

const screens = [
  { id: 'sleep', title: '수면', src: '/images/app/sleep.png', heading: '잠들기 전, 하루를 내려놓습니다.', body: '잠들기 전에 듣는 명상을 한곳에 모았습니다. 오늘의 몸과 마음에 맞는 수련을 골라보세요.', alt: '수면 화면 — 잠들기 전 명상 목록' },
  { id: 'library', title: '명상', src: '/images/app/library.png', heading: '짧게 시작하고, 꾸준히 이어갑니다.', body: '호흡 명상부터 감사 명상까지. 일상에서 반복할 수 있는 내면소통명상을 찾아보세요.', alt: '명상 화면 — 호흡 명상과 명상 라이브러리' },
  { id: 'inner-ai', title: '내면AI', src: '/images/app/inner-ai.png', heading: '지금 필요한 수련을 찾습니다.', body: '명상과 기록에 대해 대화하고, 지금의 몸과 마음에 맞는 명상을 안내받습니다.', alt: '내면AI 화면 — 대화와 명상 안내' },
  { id: 'record', title: '기록', src: '/images/app/record.png', heading: '하루의 마음을 남깁니다.', body: '감정과 몸감각, 감사한 일을 기록합니다. 지나온 날의 기록을 다시 살펴볼 수 있습니다.', alt: '기록 화면 — 기록을 모아 보는 달력' },
]

export default function AppShowcase({ compact = false, initialScreen = 'inner-ai' }: { compact?: boolean; initialScreen?: string }) {
  const [active, setActive] = useState(() => Math.max(0, screens.findIndex(screen => screen.id === initialScreen)))
  const id = useId()
  const tabs = useRef<(HTMLButtonElement | null)[]>([])
  const current = screens[active]
  const changeByKey = (e: React.KeyboardEvent<HTMLButtonElement>, index: number) => {
    let next: number
    if (e.key === 'ArrowRight') next = (index + 1) % screens.length
    else if (e.key === 'ArrowLeft') next = (index + screens.length - 1) % screens.length
    else if (e.key === 'Home') next = 0
    else if (e.key === 'End') next = screens.length - 1
    else return
    e.preventDefault(); setActive(next); tabs.current[next]?.focus()
  }
  return (
    <div className={`app-showcase ${compact ? 'app-showcase-compact' : ''}`}>
      <div className="app-showcase-controls">
        <div role="tablist" aria-label="앱 화면 살펴보기" className="app-tabs">
          {screens.map((screen, i) => (
            <button key={screen.id} ref={el => { tabs.current[i] = el }} type="button" role="tab"
              id={`${id}-tab-${screen.id}`} aria-controls={`${id}-panel`} aria-selected={active === i}
              tabIndex={active === i ? 0 : -1} onClick={() => setActive(i)} onKeyDown={e => changeByKey(e, i)}>
              {screen.title}
            </button>
          ))}
        </div>
        <div className="app-showcase-copy" aria-live="polite" aria-atomic="true">
          <h3 className="text-h2 md:text-h1">{current.heading}</h3>
          <p className="mt-5 max-w-measure text-body-lg text-copy">{current.body}</p>
          <p className="mt-8 text-meta text-muted">INZEUM 앱 · 베타 화면</p>
        </div>
      </div>
      <div id={`${id}-panel`} role="tabpanel" aria-labelledby={`${id}-tab-${current.id}`} tabIndex={0} className="app-screen-panel">
        <Image key={current.src} src={current.src} alt={current.alt} width={381} height={828}
          sizes="(max-width: 767px) 280px, 320px" className="app-screen" />
      </div>
    </div>
  )
}
