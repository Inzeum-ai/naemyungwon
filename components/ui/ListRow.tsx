import Link from 'next/link'
import clsx from 'clsx'
import type { ReactNode } from 'react'
import Icon from './Icon'

// The row is the door: tapping it opens the thing. 56 px minimum, hairline separators,
// no card per row, no second action inside a row (Sumuk ListRow).
type Props = {
  href?: string
  external?: boolean
  /** Leading column — a date, an index, a short label. Fixed width so titles align. */
  lead?: ReactNode
  /** An index needs two characters; a date needs six. Both share one width on desktop. */
  leadWidth?: 'index' | 'date'
  title: ReactNode
  subtitle?: ReactNode
  /** Trailing text (a duration, a status). Sits under the title on phones. */
  trailing?: ReactNode
  className?: string
}

export default function ListRow({ href, external, lead, leadWidth = 'date', title, subtitle, trailing, className }: Props) {
  const body = (
    <>
      {lead !== undefined && (
        <span className={clsx('tnum shrink-0 text-meta text-muted md:w-28', leadWidth === 'index' ? 'w-6' : 'w-16')}>
          {lead}
        </span>
      )}
      <span className="min-w-0 flex-1">
        <span className="block text-body font-semibold text-fg md:text-h3">{title}</span>
        {subtitle && <span className="mt-1 block text-body-sm text-sub">{subtitle}</span>}
        {trailing !== undefined && <span className="tnum mt-2 block text-meta text-muted sm:hidden">{trailing}</span>}
      </span>
      {trailing !== undefined && <span className="tnum hidden shrink-0 text-body-sm text-sub sm:inline">{trailing}</span>}
      {href && (
        <Icon
          name={external ? 'arrow-up-right' : 'chevron-right'}
          className="shrink-0 text-muted transition-colors duration-150 ease-standard group-hover:text-fg"
        />
      )}
    </>
  )
  const cls = clsx(
    'group hairline-soft-b flex min-h-row items-center gap-4 py-4 md:gap-6',
    href && 'transition-colors duration-150 ease-standard',
    className,
  )
  if (href && external) {
    return (
      <a href={href} target="_blank" rel="noopener noreferrer" className={cls}>
        {body}
      </a>
    )
  }
  if (href) {
    return (
      <Link href={href} className={cls}>
        {body}
      </Link>
    )
  }
  return <div className={cls}>{body}</div>
}
