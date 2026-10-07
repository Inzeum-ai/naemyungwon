import Link from 'next/link'
import { COMPANY, TEL_HREF } from '@/lib/company'
import { NAV, YOUTUBE_URL } from '@/lib/nav'
import Icon from '@/components/ui/Icon'
import Wordmark from './Wordmark'
import type { Ground } from './PageShell'

const more = [
  { href: '/faq', label: '자주 묻는 질문' },
  { href: '/resources', label: '책과 강의' },
  { href: YOUTUBE_URL, label: '유튜브 채널', external: true },
]

const legal = [
  { href: '/privacy', label: '개인정보처리방침' },
  { href: '/terms', label: '이용약관' },
  { href: '/delete-account', label: '계정 삭제 안내' },
]

function Column({ title, items }: { title: string; items: readonly { href: string; label: string; external?: boolean }[] }) {
  return (
    <div>
      <p className="text-meta text-muted">{title}</p>
      <ul className="mt-3 space-y-1">
        {items.map((it) =>
          it.external ? (
            <li key={it.href}>
              <a
                href={it.href}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex min-h-hit items-center gap-1 text-body-sm text-sub transition-colors duration-150 ease-standard hover:text-fg"
              >
                {it.label}
                <Icon name="arrow-up-right" size={16} />
              </a>
            </li>
          ) : (
            <li key={it.href}>
              <Link
                href={it.href}
                className="inline-flex min-h-hit items-center text-body-sm text-sub transition-colors duration-150 ease-standard hover:text-fg"
              >
                {it.label}
              </Link>
            </li>
          ),
        )}
      </ul>
    </div>
  )
}

export default function Footer({ ground }: { ground: Ground }) {
  return (
    <footer className="hairline-t" id="contact">
      <div className="mx-auto max-w-page px-gutter py-16 lg:px-gutter-lg md:py-24">
        <div className="grid gap-12 md:grid-cols-[1.4fr_1fr_1fr_1fr] md:gap-8">
          <div>
            <Wordmark ground={ground} height={32} />
            <p className="mt-6 max-w-[28em] text-body-sm text-sub">
              뇌과학 기반 내면소통명상을 연구하고 가르치며, 명상 지도자를 양성합니다.
            </p>
            <a
              href={`mailto:${COMPANY.serviceEmail}`}
              className="mt-6 inline-flex min-h-hit items-center gap-2 text-body font-medium text-fg underline decoration-line underline-offset-[6px] transition-colors duration-150 ease-standard hover:decoration-fg"
            >
              {COMPANY.serviceEmail}
              <Icon name="mail" size={16} className="text-muted" />
            </a>
          </div>
          <Column title="사이트" items={NAV} />
          <Column title="더 보기" items={more} />
          <Column title="약관" items={legal} />
        </div>

        {/* 사업자 정보 — 전자상거래법 제10조에 따른 표시의무 사항 */}
        <dl className="hairline-soft-t mt-16 flex flex-wrap gap-x-5 gap-y-1 pt-6 text-meta text-muted">
          {[
            ['상호', COMPANY.name],
            ['대표', COMPANY.ceo],
            ['사업자등록번호', COMPANY.registrationNumber],
            ['통신판매업 신고', COMPANY.mailOrderNumber],
          ].map(([k, v]) => (
            <div key={k} className="flex gap-1.5">
              <dt className="text-faint">{k}</dt>
              <dd>{v}</dd>
            </div>
          ))}
          <div className="flex basis-full gap-1.5 sm:basis-auto">
            <dt className="shrink-0 text-faint">주소</dt>
            <dd>{COMPANY.address}</dd>
          </div>
          <div className="flex gap-1.5">
            <dt className="text-faint">전화</dt>
            <dd>
              <a href={TEL_HREF} className="hover:text-sub">
                {COMPANY.tel}
              </a>
            </dd>
          </div>
        </dl>

        <p className="mt-6 text-meta text-faint">© 2026 주식회사 내면소통연구소</p>
      </div>
    </footer>
  )
}
