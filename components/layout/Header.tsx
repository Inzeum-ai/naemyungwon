'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import clsx from 'clsx'
import { NAV } from '@/lib/nav'
import Icon from '@/components/ui/Icon'
import Wordmark from './Wordmark'
import type { Ground } from './PageShell'

export default function Header({ ground }: { ground: Ground }) {
  const pathname = usePathname()
  const [open, setOpen] = useState(false)

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

  const isActive = (href: string) => pathname === href || pathname.startsWith(href + '/')

  return (
    <>
      <header className="header-ground hairline-soft-b fixed inset-x-0 top-0 z-header">
        <div className="mx-auto flex h-header max-w-page items-center justify-between px-gutter lg:px-gutter-lg">
          <Link href="/" className="flex h-hit items-center rounded-sm" aria-label="INZEUM 홈">
            <Wordmark ground={ground} height={36} priority />
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
                        'flex h-hit items-center rounded-sm px-3 text-body-sm font-medium transition-colors duration-150 ease-standard',
                        active ? 'text-brand' : 'text-sub hover:text-fg',
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
                      active ? 'text-brand' : 'text-fg',
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
