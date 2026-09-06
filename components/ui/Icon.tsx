import type { SVGProps } from 'react'

// One icon family, one stroke weight (1.5), outline only — never filled and coloured at once.
// A vermilion icon counts as one of the viewport's two brand points.
export type IconName =
  | 'arrow-right'
  | 'arrow-up-right'
  | 'chevron-down'
  | 'chevron-right'
  | 'menu'
  | 'close'
  | 'play'
  | 'mail'

const paths: Record<IconName, React.ReactNode> = {
  'arrow-right': (
    <>
      <path d="M5 12h14" />
      <path d="M13 6l6 6-6 6" />
    </>
  ),
  'arrow-up-right': (
    <>
      <path d="M7 17L17 7" />
      <path d="M8 7h9v9" />
    </>
  ),
  'chevron-down': <path d="M6 9l6 6 6-6" />,
  'chevron-right': <path d="M9 6l6 6-6 6" />,
  menu: (
    <>
      <path d="M4 7h16" />
      <path d="M4 12h16" />
      <path d="M4 17h16" />
    </>
  ),
  close: (
    <>
      <path d="M6 6l12 12" />
      <path d="M18 6L6 18" />
    </>
  ),
  play: <path d="M8 5.5v13l11-6.5z" />,
  mail: (
    <>
      <rect x="3.5" y="5.5" width="17" height="13" rx="2" />
      <path d="M4 7l8 6 8-6" />
    </>
  ),
}

type Props = Omit<SVGProps<SVGSVGElement>, 'name'> & {
  name: IconName
  size?: 16 | 20 | 24
  /** Icons are decorative unless a label is given. */
  label?: string
}

export default function Icon({ name, size = 20, label, ...rest }: Props) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden={label ? undefined : true}
      role={label ? 'img' : undefined}
      aria-label={label}
      focusable="false"
      {...rest}
    >
      {paths[name]}
    </svg>
  )
}
