'use client'

import { useEffect, useRef, useState } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import clsx from 'clsx'
import { NAV } from '@/lib/nav'
import Icon from '@/components/ui/Icon'
import Wordmark from './Wordmark'
import type { Ground } from './PageShell'

type Props = { ground: Ground; reading: Ground; banded: boolean }
export default function Header({ ground, reading, banded }: Props) {
  const pathname = usePathname()
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [onPaper, setOnPaper] = useState(ground === 'hanji')
  const dialog = useRef<HTMLDialogElement>(null)
  const trigger = useRef<HTMLButtonElement>(null)
  const close = () => setOpen(false)
  useEffect(() => setOpen(false), [pathname])
  useEffect(() => {
    const element = dialog.current
    if (!element) return
    if (open) { element.showModal(); document.body.style.overflow = 'hidden' }
    else if (element.open) { element.close(); trigger.current?.focus() }
    return () => { document.body.style.overflow = '' }
  }, [open])
  useEffect(() => {
    const media = matchMedia('(min-width: 768px)')
    const sync = () => { if (media.matches) setOpen(false) }
    media.addEventListener('change', sync)
    return () => media.removeEventListener('change', sync)
  }, [])
  useEffect(() => {
    let frame = 0
    const measure = () => {
      frame = 0
      setScrolled(window.scrollY > 24)
      const paper = document.querySelector<HTMLElement>('[data-paper]')
      if (paper) {
        const rect = paper.getBoundingClientRect()
        setOnPaper(rect.top <= 64 && rect.bottom > 64)
      } else setOnPaper(ground === 'hanji')
    }
    const update = () => { if (!frame) frame = requestAnimationFrame(measure) }
    measure()
    window.addEventListener('scroll', update, { passive: true })
    window.addEventListener('resize', update)
    return () => { cancelAnimationFrame(frame); window.removeEventListener('scroll', update); window.removeEventListener('resize', update) }
  }, [pathname, ground, reading, banded])
  const active = (href: string) => pathname === href || pathname.startsWith(href + '/')
  const currentGround = onPaper ? 'hanji' : 'ink'
  return <>
    <header className={clsx('site-header fixed inset-x-0 top-0 z-header', onPaper ? 'ground-hanji' : 'ground-ink', scrolled && 'header-ground hairline-soft-b')} data-surface={currentGround}>
      <div className="mx-auto flex h-header max-w-page items-center justify-between px-gutter lg:px-gutter-lg">
        <Link href="/" aria-label="INZEUM 홈" className="flex min-h-hit items-center"><Wordmark ground={currentGround} height={40} priority /></Link>
        <nav aria-label="주요 메뉴" className="hidden md:block"><ul className="flex items-center gap-3 lg:gap-6">
          {NAV.map(item => <li key={item.href}><Link href={item.href} aria-current={active(item.href) ? 'page' : undefined}
            className={clsx('nav-link', active(item.href) && 'nav-link-active')}>{item.label}</Link></li>)}
        </ul></nav>
        <button ref={trigger} type="button" onClick={() => setOpen(true)} aria-label="메뉴 열기" aria-expanded={open}
          aria-controls="mobile-nav" className="flex h-hit w-hit items-center justify-center text-fg md:hidden"><Icon name="menu" size={24} /></button>
      </div>
    </header>
    <dialog ref={dialog} id="mobile-nav" aria-label="주요 메뉴" onCancel={close} onClose={close}
      onKeyDown={event => {
        if (event.key !== 'Tab') return
        const controls = Array.from(event.currentTarget.querySelectorAll<HTMLElement>('a[href], button:not([disabled])'))
        if (!controls.length) return
        const index = controls.indexOf(document.activeElement as HTMLElement)
        const next = index < 0 ? (event.shiftKey ? controls.length - 1 : 0) : (index + (event.shiftKey ? -1 : 1) + controls.length) % controls.length
        event.preventDefault()
        controls[next].focus()
      }}
      className={`mobile-menu ${ground === 'hanji' ? 'ground-hanji' : 'ground-ink'}`}>
      <div className="flex h-header items-center justify-between px-gutter">
        <Link href="/" onClick={close} aria-label="INZEUM 홈"><Wordmark ground={ground} height={40} /></Link>
        <button type="button" onClick={close} autoFocus aria-label="메뉴 닫기" className="flex h-hit w-hit items-center justify-center text-fg"><Icon name="close" size={24} /></button>
      </div>
      <nav aria-label="모바일 주요 메뉴" className="px-gutter pt-12"><ul>
        {NAV.map(item => <li key={item.href} className="hairline-soft-b"><Link href={item.href} onClick={close}
          aria-current={active(item.href) ? 'page' : undefined} className="flex min-h-[76px] items-center justify-between text-h2 text-fg">
          {item.label}<Icon name="arrow-up-right" size={24} /></Link></li>)}
      </ul><p className="mt-12 text-body-sm text-muted">내면소통연구소</p><a href="mailto:official@inzeum.com" className="text-link mt-3">official@inzeum.com</a></nav>
    </dialog>
  </>
}
