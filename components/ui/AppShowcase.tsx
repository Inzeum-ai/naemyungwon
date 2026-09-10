'use client'

import { useId, useRef, useState } from 'react'
import Image from 'next/image'

const screens = [
  { id: 'home', title: '홈', src: '/images/app/home.webp', heading: '나의 수련을 한곳에서 이어갑니다.', body: '바로 들을 명상과 내가 만든 명상, 플레이리스트를 한 화면에서 만나보세요.', alt: '인지엄 앱 홈 화면 — 추천 명상과 플레이리스트' },
  { id: 'sleep', title: '수면', src: '/images/app/sleep.webp', heading: '잠들기 전, 하루를 내려놓습니다.', body: '몸 이완과 호흡, 시각화 명상을 목적에 맞게 골라 듣고 수면 타이머로 이어갑니다.', alt: '인지엄 앱 수면 화면 — 수면 명상과 컬렉션' },
  { id: 'inner-ai', title: '내면AI', src: '/images/app/inner-ai.webp', heading: '대화에서 필요한 수련을 찾습니다.', body: '김주환 교수의 책과 강의를 근거로 대화하고, 지금의 몸과 마음에 맞는 명상을 안내받습니다.', alt: '인지엄 앱 내면AI 화면 — 편안전환에 관한 대화' },
  { id: 'library', title: '보관함', src: '/images/app/library.webp', heading: '내가 만든 명상이 쌓입니다.', body: '플레이리스트와 내 목소리 명상, AI로 만든 명상을 한곳에 모아 다시 듣습니다.', alt: '인지엄 앱 보관함 화면 — 플레이리스트와 만든 명상' },
  { id: 'record', title: '기록', src: '/images/app/record.webp', heading: '수련한 날을 돌아봅니다.', body: '수련과 마음근력 검사 결과를 달력에서 살펴보고, 이어 온 시간을 확인합니다.', alt: '인지엄 앱 기록 화면 — 수련 기록 달력' },
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
        <Image key={current.src} src={current.src} alt={current.alt} width={702} height={1520}
          sizes="(max-width: 767px) 280px, 320px" className="app-screen" />
      </div>
    </div>
  )
}
