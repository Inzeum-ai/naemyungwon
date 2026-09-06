'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import clsx from 'clsx'
import { NAV } from '@/lib/nav'
import Icon from '@/components/ui/Icon'
import Wordmark from './Wordmark'
import type { Ground } from './PageShell'

// The header is transparent while the page's own ink is under it and mirrors whatever it covers
// once it has something to cover: on the home route it stays bare until the hero wordmark has
// scrolled under it (one lockup per screen); on a banded page it stays bare over the ink band
// and takes the paper's roles, wordmark and ground once the band's bottom edge has passed.
// The active item is paper, not vermilion — vermilion is the seal, never a control state.
const HOME_MARK_SCROLL = 200
const HEADER_H = 64

type Props = { ground: Ground; reading: Ground; banded: boolean }

export default function Header({ ground, reading, banded }: Props) {
  const pathname = usePathname()
  const [open, setOpen] = useState(false)
  const onHome = pathname === '/'
  const [scrolled, setScrolled] = useState(false)
  const [pastBand, setPastBand] = useState(!banded)
  const showMark = !onHome || scrolled
  const bare = onHome ? !scrolled : banded && !pastBand
  // The sheet is a sibling on the page ground, so an open header stays on that ground too.
  const onReading = banded && pastBand && !open

  // Close on navigation; lock the page while the sheet is open.
  useEffect(() => setOpen(false), [pathname])
  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [open])
  useEffect(() => {
    if (!open) return
    const onKey = (e: KeyboardEvent) => e.key === 'Escape' && setOpen(false)
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [open])
  useEffect(() => {
    if (!onHome && !banded) return
    const band = banded ? document.querySelector<HTMLElement>('[data-band]') : null
    const onScroll = () => {
      if (onHome) setScrolled(window.scrollY > HOME_MARK_SCROLL)
      if (band) setPastBand(band.getBoundingClientRect().bottom <= HEADER_H)
    }
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    window.addEventListener('resize', onScroll)
    return () => {
      window.removeEventListener('scroll', onScroll)
      window.removeEventListener('resize', onScroll)
    }
  }, [onHome, banded, pathname])

  const isActive = (href: string) => pathname === href || pathname.startsWith(href + '/')
  const markClass = 'col-start-1 row-start-1 transition-opacity duration-200 ease-standard'

  return (
    <>
      <header
        className={clsx(
          'fixed inset-x-0 top-0 z-header transition-colors duration-200 ease-standard',
          !bare && 'header-ground hairline-soft-b',
          onReading && (reading === 'hanji' ? 'ground-hanji' : 'ground-ink'),
        )}
      >
        <div className="mx-auto flex h-header max-w-page items-center justify-between px-gutter lg:px-gutter-lg">
          <Link
            href="/"
            className={clsx(
              'flex h-hit items-center rounded-sm transition-[opacity,visibility] duration-200 ease-standard',
              !showMark && 'invisible opacity-0',
            )}
            aria-label="INZEUM 홈"
          >
            {banded ? (
              // Both inks of the lockup, stacked; the one for the ground underneath is opaque.
              <span className="grid items-center">
                <Wordmark ground={ground} height={36} priority className={clsx(markClass, onReading && 'opacity-0')} />
                <span aria-hidden="true" className="col-start-1 row-start-1 flex items-center">
                  <Wordmark ground={reading} height={36} className={clsx(markClass, !onReading && 'opacity-0')} />
                </span>
              </span>
            ) : (
              <Wordmark ground={ground} height={36} priority />
            )}
          </Link>

          <nav aria-label="주요 메뉴" className="hidden md:block">
            <ul className="flex items-center gap-2">
              {NAV.map((item) => {
                const active = isActive(item.href)
                return (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      aria-current={active ? 'page' : undefined}
                      className={clsx(
                        'flex h-hit items-center rounded-sm px-3 text-body-sm transition-colors duration-150 ease-standard',
                        active ? 'font-semibold text-fg' : 'font-medium text-sub hover:text-fg',
                      )}
                    >
                      {item.label}
                    </Link>
                  </li>
                )
              })}
            </ul>
          </nav>

          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            aria-controls="mobile-nav"
            aria-label={open ? '메뉴 닫기' : '메뉴 열기'}
            className="pressable -mr-2 flex h-hit w-hit items-center justify-center rounded-sm text-fg md:hidden"
          >
            <Icon name={open ? 'close' : 'menu'} size={24} />
          </button>
        </div>
      </header>

      {/* Mobile sheet — a sibling of the header, not a child: the header's backdrop-filter would
          otherwise become this fixed element's containing block and collapse it. */}
      <div
        id="mobile-nav"
        hidden={!open}
        className="fixed inset-x-0 bottom-0 top-header z-overlay overflow-y-auto bg-bg md:hidden"
        style={{ overscrollBehavior: 'contain' }}
      >
        <nav aria-label="주요 메뉴 (모바일)" className="px-gutter pt-2">
          <ul>
            {NAV.map((item) => {
              const active = isActive(item.href)
              return (
                <li key={item.href} className="hairline-soft-b">
                  <Link
                    href={item.href}
                    aria-current={active ? 'page' : undefined}
                    className={clsx(
                      'flex min-h-row items-center justify-between py-4 text-h3',
                      active ? 'text-fg' : 'text-sub',
                    )}
                  >
                    {item.label}
                    <Icon name="chevron-right" className="text-muted" />
                  </Link>
                </li>
              )
            })}
          </ul>
          <p className="mt-8 text-body-sm text-muted">
            문의{' '}
            <a href="mailto:official@inzeum.com" className="text-sub underline underline-offset-4">
              official@inzeum.com
            </a>
          </p>
        </nav>
      </div>
    </>
  )
}
