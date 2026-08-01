import Link from 'next/link'
import Image from 'next/image'
import { COMPANY, TEL_HREF } from '@/lib/company'

export default function Footer() {
  return (
    <footer className="bg-haze border-t border-black/5" id="contact">
      <div className="max-w-[1200px] mx-auto px-5 md:px-12 py-14 md:py-16">

        {/* Contact Section */}
        <div className="text-center mb-12 md:mb-16">
          <h2 className="font-serif text-2xl md:text-3xl lg:text-4xl font-bold text-ink mb-4">
            함께 시작하세요
          </h2>
          <p className="text-sm md:text-base text-light-ink max-w-xl mx-auto mb-6 md:mb-8 leading-relaxed">
            내면소통명상에 대해 더 알고 싶으시거나 교육 과정에 대한 문의가 있으시면 언제든 연락주세요.
          </p>
          <a
            href="mailto:official@inzeum.com"
            className="inline-flex items-center gap-2 text-lg md:text-2xl font-bold text-mountain-deep hover:text-mountain-mid transition-colors underline decoration-2 underline-offset-8 decoration-mountain-deep/30 hover:decoration-mountain-deep break-all sm:break-normal"
          >
            official@inzeum.com
            <span className="material-symbols-outlined text-xl md:text-2xl flex-shrink-0">arrow_outward</span>
          </a>
        </div>

        {/* Footer Links */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 py-8 md:py-10 border-t border-black/10">
          {/* About */}
          <div className="col-span-2 md:col-span-1">
            <div className="mb-4">
              <Image
                src="/images/inzeum_logo.png"
                alt="INZEUM 내면소통연구소 로고"
                width={170}
                height={62}
                className="h-11 w-auto object-contain"
              />
            </div>
            <p className="text-sm text-light-ink leading-relaxed">
              내면소통연구소는 뇌과학 기반의 내면소통명상을 체계적으로 연구하고 교육하는 기관입니다.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-bold text-sm text-ink mb-3 md:mb-4">바로가기</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/about" className="text-sm text-light-ink hover:text-mountain-deep transition-colors">
                  소개
                </Link>
              </li>
              <li>
                <Link href="/courses" className="text-sm text-light-ink hover:text-mountain-deep transition-colors">
                  교육과정
                </Link>
              </li>
              <li>
                <Link href="/programs" className="text-sm text-light-ink hover:text-mountain-deep transition-colors">
                  프로그램
                </Link>
              </li>
              <li>
                <Link href="/faq" className="text-sm text-light-ink hover:text-mountain-deep transition-colors">
                  자주 묻는 질문
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-bold text-sm text-ink mb-3 md:mb-4">연락처</h3>
            <ul className="space-y-2 text-sm text-light-ink">
              <li className="break-all">official@inzeum.com</li>
            </ul>
          </div>

          {/* Social */}
          <div>
            <h3 className="font-bold text-sm text-ink mb-3 md:mb-4">소셜 미디어</h3>
            <div className="flex gap-3">
              <a
                href="https://www.youtube.com/@joohankim"
                target="_blank"
                rel="noopener noreferrer"
                className="size-10 flex items-center justify-center rounded-lg bg-white text-light-ink hover:text-mountain-deep hover:bg-sky-light transition-colors"
                aria-label="김주환의 내면소통 유튜브 채널 (새 창)"
              >
                <span className="material-symbols-outlined">play_circle</span>
              </a>
              {/* 인스타그램 계정 URL 확인되면 위와 같은 형태로 추가하세요.
                  href="#" 로 두면 클릭 시 페이지 상단으로 튀는 버그가 되므로
                  URL 이 없는 동안에는 아이콘을 두지 않습니다. */}
            </div>
          </div>
        </div>

        {/* 사업자 정보 — 전자상거래법 제10조에 따른 표시의무 사항 */}
        <div className="pt-6 md:pt-8 border-t border-black/10">
          <dl className="flex flex-wrap gap-x-4 gap-y-1.5 text-xs leading-relaxed text-light-ink">
            {[
              ['상호', COMPANY.name],
              ['대표자', COMPANY.ceo],
              ['사업자등록번호', COMPANY.registrationNumber],
              ['통신판매업 신고번호', COMPANY.mailOrderNumber],
            ].map(([label, value]) => (
              <div key={label} className="flex gap-1.5">
                <dt className="text-light-ink/70">{label}</dt>
                <dd>{value}</dd>
              </div>
            ))}
            <div className="flex gap-1.5 basis-full sm:basis-auto">
              <dt className="text-light-ink/70 flex-shrink-0">주소</dt>
              <dd>{COMPANY.address}</dd>
            </div>
            <div className="flex gap-1.5">
              <dt className="text-light-ink/70">전화</dt>
              <dd>
                <a href={TEL_HREF} className="hover:text-mountain-deep transition-colors">
                  {COMPANY.tel}
                </a>
              </dd>
            </div>
            <div className="flex gap-1.5">
              <dt className="text-light-ink/70">이메일</dt>
              <dd className="break-all">
                <a
                  href={`mailto:${COMPANY.serviceEmail}`}
                  className="hover:text-mountain-deep transition-colors"
                >
                  {COMPANY.serviceEmail}
                </a>
              </dd>
            </div>
          </dl>
        </div>

        {/* Copyright */}
        <div className="pt-5 md:pt-6 mt-5 md:mt-6 border-t border-black/10 flex flex-col sm:flex-row justify-between items-center gap-3 md:gap-4">
          <p className="text-xs md:text-sm text-light-ink">
            © 2026 INZEUM 내면소통연구소. All rights reserved.
          </p>
          <div className="flex gap-4 md:gap-6">
            <Link href="/privacy" className="text-xs md:text-sm text-light-ink hover:text-mountain-deep transition-colors">
              개인정보처리방침
            </Link>
            <Link href="/terms" className="text-xs md:text-sm text-light-ink hover:text-mountain-deep transition-colors">
              이용약관
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
