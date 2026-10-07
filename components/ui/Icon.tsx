import type { SVGProps } from 'react'
import { ArrowRight } from '@phosphor-icons/react/dist/ssr/ArrowRight'
import { ArrowUpRight } from '@phosphor-icons/react/dist/ssr/ArrowUpRight'
import { CaretDown } from '@phosphor-icons/react/dist/ssr/CaretDown'
import { CaretRight } from '@phosphor-icons/react/dist/ssr/CaretRight'
import { List } from '@phosphor-icons/react/dist/ssr/List'
import { X } from '@phosphor-icons/react/dist/ssr/X'
import { Play } from '@phosphor-icons/react/dist/ssr/Play'
import { Pause } from '@phosphor-icons/react/dist/ssr/Pause'
import { Envelope } from '@phosphor-icons/react/dist/ssr/Envelope'

// Phosphor's light family: individual SSR imports keep unused icons out of the bundle.
const icons = { 'arrow-right': ArrowRight, 'arrow-up-right': ArrowUpRight, 'chevron-down': CaretDown,
  'chevron-right': CaretRight, menu: List, close: X, play: Play, pause: Pause, mail: Envelope }
export type IconName = keyof typeof icons
type Props = Omit<SVGProps<SVGSVGElement>, 'name'> & { name: IconName; size?: 16 | 20 | 24; label?: string }
export default function Icon({ name, size = 20, label, ...rest }: Props) {
  const Glyph = icons[name]
  return <Glyph size={size} weight="light" aria-hidden={label ? undefined : true} aria-label={label}
    role={label ? 'img' : undefined} focusable="false" {...rest} />
}
