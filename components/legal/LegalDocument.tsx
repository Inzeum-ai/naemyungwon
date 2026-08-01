import type { ReactNode } from 'react'
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'

interface LegalDocumentProps {
  eyebrow: string
  title: string
  description: string
  effectiveDate: string
  children: ReactNode
}

export default function LegalDocument({
  eyebrow,
  title,
  description,
  effectiveDate,
  children,
}: LegalDocumentProps) {
  return (
    <div className="relative flex min-h-screen w-full flex-col">
      <Header />
      <main className="w-full pt-20">
        <section className="border-b border-black/5 bg-gradient-to-b from-sky-light/30 to-cloud px-5 py-14 md:px-12 md:py-20">
          <div className="mx-auto max-w-[900px]">
            <p className="text-xs font-bold tracking-[0.14em] text-mountain-deep md:text-sm">
              {eyebrow}
            </p>
            <h1 className="mt-4 font-serif text-3xl font-bold text-ink sm:text-4xl md:text-5xl">
              {title}
            </h1>
            <p className="mt-5 max-w-2xl text-sm leading-7 text-light-ink md:text-base">
              {description}
            </p>
            <p className="mt-6 text-sm font-semibold text-ink">{effectiveDate}</p>
          </div>
        </section>

        <section className="px-5 py-12 md:px-12 md:py-16">
          <article className="legal-document mx-auto max-w-[900px] rounded-2xl border border-black/5 bg-white px-5 py-8 shadow-sm sm:px-8 md:px-12 md:py-12">
            {children}
          </article>
        </section>
      </main>
      <Footer />
    </div>
  )
}
