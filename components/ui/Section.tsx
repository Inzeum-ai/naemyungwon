import clsx from 'clsx'
import type { ReactNode } from 'react'

// An open section: a hairline above, the page gutter, generous rhythm. No card, no fill.
// Grouping is done by hairlines on a transparent ground (Sumuk §Layout). A `content`-width
// section keeps the page's left edge and only narrows its measure — one alignment per page.
type Props = {
  id?: string
  title?: ReactNode
  lede?: ReactNode
  /** Right-hand slot beside the title on wide screens (a link, a date). */
  aside?: ReactNode
  hairline?: boolean
  width?: 'page' | 'content'
  className?: string
  children?: ReactNode
}

export default function Section({ id, title, lede, aside, hairline = true, width = 'page', className, children }: Props) {
  return (
    <section id={id} className={clsx(hairline && 'hairline-t', className)}>
      <div className="mx-auto max-w-page px-gutter py-16 lg:px-gutter-lg md:py-24">
        <div className={clsx(width === 'content' && 'max-w-content')}>
          {(title || lede) && (
            <div className="mb-10 flex flex-col gap-6 md:mb-14 md:flex-row md:items-end md:justify-between">
              <div className="max-w-measure">
                {title && <h2 className="text-h2 md:text-h1">{title}</h2>}
                {lede && <p className="mt-4 text-body-lg text-sub">{lede}</p>}
              </div>
              {aside && <div className="shrink-0">{aside}</div>}
            </div>
          )}
          {children}
        </div>
      </div>
    </section>
  )
}
