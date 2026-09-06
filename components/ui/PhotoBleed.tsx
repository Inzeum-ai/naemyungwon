import Image from 'next/image'
import clsx from 'clsx'
import type { ReactNode } from 'react'

// A photograph that bleeds to the right edge of the viewport; the text keeps the page's left
// edge. Square corners — a person in a rounded rectangle beside text is the generic layout this
// replaces (DESIGN.md §2). Phones: the photo runs edge to edge above the text.
type Props = {
  src: string
  alt: string
  /** object-position of the crop, e.g. '50% 30%' keeps a face high in the frame. */
  position?: string
  /** `half` splits 6/6; `text-wide` gives the text 7/12 so a smaller original is not upscaled as far. */
  split?: 'half' | 'text-wide'
  /** 0–1. Photos sit on the ink a step quieter than life; never grayscale. */
  saturate?: number
  children: ReactNode
}

export default function PhotoBleed({ src, alt, position = '50% 30%', split = 'half', saturate = 0.75, children }: Props) {
  const half = split === 'half'
  return (
    <div className={clsx('md:grid', half ? 'md:grid-cols-2' : 'md:grid-cols-[minmax(0,7fr)_minmax(0,5fr)]')}>
      <div className="relative aspect-[4/5] md:order-last md:aspect-auto md:min-h-[600px]">
        <Image
          src={src}
          alt={alt}
          fill
          sizes={half ? '(max-width: 768px) 100vw, 50vw' : '(max-width: 768px) 100vw, 42vw'}
          className="object-cover"
          style={{ objectPosition: position, filter: `saturate(${saturate})` }}
        />
      </div>
      {/* Left padding = the page's own left edge: max(gutter, (100vw − page)/2 + gutter). */}
      <div className="px-gutter py-16 md:flex md:flex-col md:justify-center md:py-24 md:pl-[max(24px,calc((100vw-1200px)/2+24px))] md:pr-12 lg:pl-[max(48px,calc((100vw-1200px)/2+48px))] lg:pr-16">
        <div className="max-w-measure">{children}</div>
      </div>
    </div>
  )
}
