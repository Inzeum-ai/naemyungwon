import Link from 'next/link'

export default function SectionNav({ items, label = '이 페이지에서' }: {
  items: { href: string; label: string }[]; label?: string
}) {
  return <nav aria-label={label} className="section-nav hairline-b">
    <div className="mx-auto flex max-w-page flex-wrap items-center gap-x-8 px-gutter py-3 lg:px-gutter-lg">
      {items.map(item => <Link key={item.href} href={item.href} className="inline-flex min-h-hit items-center text-body-sm text-copy underline-offset-8 hover:underline">{item.label}</Link>)}
    </div>
  </nav>
}
