import type { ReactNode } from 'react'
import PageShell from '@/components/layout/PageShell'

interface LegalDocumentProps {
  title: string
  description: string
  effectiveDate: string
  children: ReactNode
}

// Legal text reads on 한지. The wording is 갑-approved and is not restyled beyond type and rhythm.
export default function LegalDocument({ title, description, effectiveDate, children }: LegalDocumentProps) {
  return (
    <PageShell ground="hanji">
      <header className="mx-auto w-full max-w-content px-gutter pb-10 pt-16 md:pt-24 lg:px-gutter-lg">
        <h1 className="text-h1 md:text-display-sm">{title}</h1>
        <p className="mt-5 max-w-measure text-body-lg text-sub">{description}</p>
        <p className="mt-6 text-meta text-muted">{effectiveDate}</p>
      </header>
      <article className="legal-document hairline-t mx-auto w-full max-w-content px-gutter pb-24 pt-10 lg:px-gutter-lg">
        {children}
      </article>
    </PageShell>
  )
}
