import Link from 'next/link'
import type { Metadata } from 'next'
import PageShell from '@/components/layout/PageShell'
import Glyph from '@/components/ui/Glyph'
import { NAV } from '@/lib/nav'

// robots 를 반드시 지정해야 합니다. Next 가 not-found 에 자체 noindex 태그를
// 붙이는데, 여기서 생략하면 layout 의 `index: true` 가 상속되어
// noindex 와 index 가 함께 출력됩니다. 명시해서 두 태그를 모두 noindex 로 맞춥니다.
export const metadata: Metadata = {
  title: '페이지를 찾을 수 없습니다',
  robots: { index: false, follow: true },
}

export default function NotFound() {
  return (
    <PageShell>
      <div className="mx-auto flex w-full max-w-content flex-1 flex-col items-start justify-center px-gutter py-24 lg:px-gutter-lg">
        <Glyph name="moon" width={96} />
        <h1 className="mt-8 text-h1">페이지를 찾을 수 없습니다</h1>
        <p className="mt-4 max-w-measure text-body-lg text-sub">
          주소가 바뀌었거나 없어진 페이지입니다. 아래에서 찾으시는 곳으로 이동해 주세요.
        </p>
        <nav aria-label="주요 페이지" className="mt-10 w-full">
          <ul className="hairline-t">
            {[{ href: '/', label: '홈' }, ...NAV].map((s) => (
              <li key={s.href} className="hairline-soft-b">
                <Link
                  href={s.href}
                  className="flex min-h-row items-center text-body font-medium text-fg transition-colors duration-150 ease-standard hover:text-sub"
                >
                  {s.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </PageShell>
  )
}
