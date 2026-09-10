import type { ReactNode } from 'react'

// The page's own first viewport: a heading and one paragraph, left-aligned on the gutter,
// generous air above. No eyebrow, no gradient band, no hero box.
export default function PageHeader({ title, lede, children }: { title: string; lede?: ReactNode; children?: ReactNode }) {
  return (
    <header className="mx-auto w-full max-w-page px-gutter pb-12 pt-16 md:pb-16 md:pt-28 lg:px-gutter-lg">
      <h1 className="text-display-sm md:text-display">{title}</h1>
      {lede && <p className="mt-6 max-w-measure text-body-lg text-sub">{lede}</p>}
      {children}
    </header>
  )
}
