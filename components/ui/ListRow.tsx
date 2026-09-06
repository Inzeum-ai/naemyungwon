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
  title: ReactNode
  subtitle?: ReactNode
  /** Trailing text (a duration, a status). The chevron follows it. */
  trailing?: ReactNode
  className?: string
}

export default function ListRow({ href, external, lead, title, subtitle, trailing, className }: Props) {
  const body = (
    <>
      {lead !== undefined && (
        <span className="tnum w-20 shrink-0 text-meta text-muted md:w-28">{lead}</span>
      )}
      <span className="min-w-0 flex-1">
        <span className="block text-body font-semibold text-fg md:text-h3">{title}</span>
        {subtitle && <span className="mt-1 block text-body-sm text-sub">{subtitle}</span>}
      </span>
      {trailing !== undefined && <span className="tnum shrink-0 text-body-sm text-sub">{trailing}</span>}
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
