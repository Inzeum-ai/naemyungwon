import Link from 'next/link'
import clsx from 'clsx'
import type { ReactNode, ButtonHTMLAttributes } from 'react'
import Icon, { type IconName } from './Icon'

// Sumuk Button, web edition. 52 px, radius 12, weight 600. One primary per section.
//   primary   paper on ink (the action colour is a neutral — ADR 0037)
//   secondary tonal fill
//   outline   hairline
//   ghost     text
// No vermilion button exists; the seal is never an action colour.

type Variant = 'primary' | 'secondary' | 'outline' | 'ghost'
type Size = 'md' | 'sm'

type Common = {
  variant?: Variant
  size?: Size
  icon?: IconName
  className?: string
  children: ReactNode
}

type AsLink = Common & { href: string; external?: boolean }
type AsButton = Common & ButtonHTMLAttributes<HTMLButtonElement> & { href?: undefined }

const base =
  'pressable inline-flex items-center justify-center gap-2 rounded-md font-semibold whitespace-nowrap select-none ' +
  'disabled:pointer-events-none disabled:bg-surface-high disabled:text-muted'

const sizes: Record<Size, string> = {
  md: 'h-button px-6 text-body',
  sm: 'h-hit px-4 text-body-sm',
}

const variants: Record<Variant, string> = {
  primary: 'bg-primary text-primary-fg hover:bg-primary-pressed',
  secondary: 'bg-fill2 text-body hover:bg-fill3 hover:text-fg',
  outline: 'border border-line text-fg hover:bg-fill1 hover:border-fill3',
  ghost: 'text-sub hover:text-fg px-3',
}

export default function Button(props: AsLink | AsButton) {
  const { variant = 'primary', size = 'md', icon, className, children } = props
  const cls = clsx(base, sizes[size], variants[variant], className)
  const glyph = icon ? <Icon name={icon} size={size === 'sm' ? 16 : 20} /> : null

  if ('href' in props && props.href) {
    const { href, external } = props
    if (external) {
      return (
        <a href={href} target="_blank" rel="noopener noreferrer" className={cls}>
          {children}
          {glyph}
        </a>
      )
    }
    return (
      <Link href={href} className={cls}>
        {children}
        {glyph}
      </Link>
    )
  }

  const { href: _h, variant: _v, size: _s, icon: _i, className: _c, children: _ch, ...rest } =
    props as AsButton
  return (
    <button type="button" className={cls} {...rest}>
      {children}
      {glyph}
    </button>
  )
}
