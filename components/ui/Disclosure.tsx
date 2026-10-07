import type { ReactNode } from 'react'
import Icon from './Icon'

type Props = { question: string; children: ReactNode; defaultOpen?: boolean }
// Native disclosure supplies keyboard behavior and hides collapsed content from focus and AT.
export default function Disclosure({ question, children, defaultOpen = false }: Props) {
  return <details className="disclosure group hairline-soft-b" open={defaultOpen || undefined}>
    <summary className="flex min-h-row cursor-pointer list-none items-start justify-between gap-4 py-5 text-left">
      <h3 className="text-body font-semibold text-fg md:text-h3">{question}</h3>
      <Icon name="chevron-down" className="mt-1 shrink-0 text-muted transition-transform duration-150 group-open:rotate-180" />
    </summary>
    <div className="max-w-measure space-y-4 pb-6 text-body text-copy">{children}</div>
  </details>
}
