import clsx from 'clsx'
import type { ReactNode } from 'react'
import Header from './Header'
import Footer from './Footer'

export type Ground = 'ink' | 'hanji'

type Props = {
  /** ink = the front door (home · 앱 · 소개). hanji = reading pages. */
  ground?: Ground
  /** The home page runs its hero under the fixed header. Everything else clears it. */
  bleed?: boolean
  children: ReactNode
}

export default function PageShell({ ground = 'ink', bleed = false, children }: Props) {
  return (
    <div className={ground === 'hanji' ? 'ground-hanji' : 'ground-ink'} data-ground={ground}>
      <Header ground={ground} />
      <main id="main-content" className={clsx('flex min-h-screen flex-col', !bleed && 'pt-header')}>
        {children}
      </main>
      <Footer ground={ground} />
    </div>
  )
}
