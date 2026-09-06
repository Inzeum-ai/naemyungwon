import Image from 'next/image'
import type { CSSProperties, ReactNode } from 'react'

// Every page opens in ink. The band is the page's first viewport: one punchline, one sentence,
// and the page's own 수묵 painting low along the bottom edge, fading into ink above and again
// just before the paper begins. Below it the page unrolls onto 한지 (see Paper) — a hard edge,
// like paper set into a scroll's dark mounting. The header stays transparent over the band and
// takes the paper ground once the band has scrolled under it (Header reads [data-band]).
type Painting = {
  src: string
  /** object-position for the cover crop; paintings that sit low in the frame use the default. */
  position?: string
}

type Props = {
  title: ReactNode
  lede?: ReactNode
  painting?: Painting
  children?: ReactNode
}

const MASK = 'linear-gradient(to bottom, transparent 0%, black 45%, black 88%, transparent 100%)'

export default function InkBand({ title, lede, painting, children }: Props) {
  return (
    <section
      data-band=""
      className={
        painting
          ? 'ground-ink relative flex min-h-[72svh] flex-col overflow-hidden pt-[calc(var(--header-h)+48px)] md:min-h-[78svh] md:pt-[calc(var(--header-h)+72px)]'
          : 'ground-ink relative flex flex-col pt-[calc(var(--header-h)+48px)] md:pt-[calc(var(--header-h)+72px)]'
      }
    >
      {painting && (
        <div
          aria-hidden="true"
          className="breathe pointer-events-none absolute inset-x-0 bottom-0 h-[38svh] md:h-[min(46svh,520px)]"
          style={{ maskImage: MASK, WebkitMaskImage: MASK }}
        >
          <Image
            src={painting.src}
            alt=""
            fill
            priority
            sizes="100vw"
            className="object-cover"
            style={{ objectPosition: painting.position ?? 'center bottom' }}
          />
        </div>
      )}
      <div className="relative mx-auto w-full max-w-page px-gutter pb-16 lg:px-gutter-lg md:pb-20">
        <h1 className="rise max-w-[14em] text-display-sm md:text-display" style={{ '--i': 0 } as CSSProperties}>
          {title}
        </h1>
        {lede && (
          <p className="rise mt-6 max-w-measure text-body-lg text-copy md:mt-8" style={{ '--i': 1 } as CSSProperties}>
            {lede}
          </p>
        )}
        {children}
      </div>
    </section>
  )
}
