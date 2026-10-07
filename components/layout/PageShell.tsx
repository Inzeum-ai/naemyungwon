import clsx from 'clsx'
import type { ReactNode } from 'react'
import Header from './Header'
import Footer from './Footer'
import GroundSync from './GroundSync'

export type Ground = 'ink' | 'hanji'

type Props = {
  /** The ground the page opens and closes on: the html canvas, the header, the footer. */
  ground?: Ground
  /** The ground the page reads on when it differs — an ink band on top, 한지 (Paper) below. */
  reading?: Ground
  /** Run the first viewport under the fixed header. Implied by a band. */
  bleed?: boolean
  children: ReactNode
}

export default function PageShell({ ground = 'ink', reading, bleed, children }: Props) {
  const banded = reading !== undefined && reading !== ground
  const underHeader = bleed ?? banded
  return (
    <div className={ground === 'hanji' ? 'ground-hanji' : 'ground-ink'} data-ground={ground}>
      <GroundSync ground={ground} />
      <Header ground={ground} reading={reading ?? ground} banded={banded} />
      <main id="main-content" className={clsx('flex min-h-screen flex-col', !underHeader && 'pt-header')}>
        {children}
      </main>
      <Footer ground={ground} />
    </div>
  )
}
