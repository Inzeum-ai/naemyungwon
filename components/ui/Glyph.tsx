import clsx from 'clsx'
import type { CSSProperties } from 'react'

// The app's SumukGlyph, on the web: an alpha-mask painting tinted at runtime through a role,
// so one asset serves both grounds. Decoration only — hidden from assistive tech.
export type GlyphName = 'moon' | 'mountain' | 'water' | 'stone' | 'pine' | 'cloud' | 'bowl'

// Native asset sizes (px). Never render a glyph larger than its asset (sumuk-glyph.md §Don't).
const natural: Record<GlyphName, [number, number]> = {
  moon: [530, 569],
  mountain: [768, 395],
  water: [768, 188],
  stone: [594, 366],
  pine: [768, 505],
  cloud: [747, 354],
  bowl: [694, 476],
}

type Props = {
  name: GlyphName
  /** Rendered width in px; height follows the asset's ratio. */
  width?: number
  /** A colour role, e.g. 'var(--text-sub)'. Never the seal. */
  tint?: string
  opacity?: number
  className?: string
}

export default function Glyph({ name, width = 96, tint = 'var(--text-sub)', opacity = 0.9, className }: Props) {
  const [w, h] = natural[name]
  const height = Math.round((width * h) / w)
  const url = `url(/images/sumuk/glyph-${name}.png)`
  const style: CSSProperties = {
    width,
    height,
    backgroundColor: tint,
    opacity,
    WebkitMaskImage: url,
    maskImage: url,
    WebkitMaskSize: 'contain',
    maskSize: 'contain',
    WebkitMaskRepeat: 'no-repeat',
    maskRepeat: 'no-repeat',
    WebkitMaskPosition: 'center',
    maskPosition: 'center',
  }
  return <span aria-hidden="true" className={clsx('inline-block shrink-0', className)} style={style} />
}
