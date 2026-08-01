import Link from 'next/link'
import type { Metadata } from 'next'
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'

// Next 가 not-found 에 noindex 를 자동으로 붙이므로 robots 는 지정하지 않습니다.
// (직접 지정하면 meta robots 태그가 두 개 출력됩니다)
export const metadata: Metadata = {
  title: '페이지를 찾을 수 없습니다',
}

const suggestions = [
  { href: '/', label: '홈' },
  { href: '/about', label: '연구소 소개' },
  { href: '/courses', label: '교육과정' },
  { href: '/app', label: 'INZEUM 앱' },
  { href: '/faq', label: '자주 묻는 질문' },
]

export default function NotFound() {
  return (
    <div className="relative flex min-h-screen w-full flex-col">
      <Header />
      <main className="flex flex-1 items-center justify-center px-5 py-24 pt-32 md:px-12">
        <div className="mx-auto max-w-[600px] text-center">
          <p className="font-serif text-6xl font-bold text-mountain-deep/25 md:text-7xl">404</p>
          <h1 className="mt-6 font-serif text-2xl font-bold text-ink md:text-3xl">
            페이지를 찾을 수 없습니다
          </h1>
          <p className="mt-5 text-sm leading-relaxed text-light-ink md:text-base">
            주소가 바뀌었거나 삭제된 페이지일 수 있습니다.
            아래에서 찾으시는 내용으로 이동해 보세요.
          </p>

          <nav aria-label="주요 페이지" className="mt-9 flex flex-wrap justify-center gap-2.5">
            {suggestions.map((s) => (
              <Link
                key={s.href}
                href={s.href}
                className="rounded-lg border border-mountain-deep/20 px-4 py-2 text-sm font-bold text-ink transition-colors hover:bg-sky-light/30"
              >
                {s.label}
              </Link>
            ))}
          </nav>
        </div>
      </main>
      <Footer />
    </div>
  )
}
