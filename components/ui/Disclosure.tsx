'use client'

import { useId, useState } from 'react'
import clsx from 'clsx'
import Icon from './Icon'

// A question that opens. Height animates through grid-template-rows (240 ms, settle curve),
// the chevron turns, nothing bounces. Answers the hand; does not perform.
type Props = {
  question: string
  children: React.ReactNode
  defaultOpen?: boolean
}

export default function Disclosure({ question, children, defaultOpen = false }: Props) {
  const [open, setOpen] = useState(defaultOpen)
  const id = useId()
  return (
    <div className="hairline-soft-b">
      <h3 className="text-body">
        <button
          type="button"
          aria-expanded={open}
          aria-controls={`${id}-body`}
          onClick={() => setOpen((v) => !v)}
          className="flex min-h-row w-full items-start justify-between gap-4 py-5 text-left"
        >
          <span className="text-body font-semibold text-fg md:text-h3">{question}</span>
          <Icon
            name="chevron-down"
            className={clsx(
              'mt-1 shrink-0 text-muted transition-transform duration-[240ms] ease-settle',
              open && 'rotate-180',
            )}
          />
        </button>
      </h3>
      <div id={`${id}-body`} className="disclosure-body" data-open={open} aria-hidden={!open}>
        <div>
          <div className="max-w-measure space-y-4 pb-6 text-body text-sub">{children}</div>
        </div>
      </div>
    </div>
  )
}
