import Link from 'next/link'
import Image from 'next/image'

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
                href="#"
                className="size-10 flex items-center justify-center rounded-lg bg-white text-light-ink hover:text-mountain-deep hover:bg-sky-light transition-colors"
                aria-label="YouTube"
              >
                <span className="material-symbols-outlined">play_circle</span>
              </a>
              <a
                href="#"
                className="size-10 flex items-center justify-center rounded-lg bg-white text-light-ink hover:text-mountain-deep hover:bg-sky-light transition-colors"
                aria-label="Instagram"
              >
                <span className="material-symbols-outlined">photo_camera</span>
              </a>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="pt-6 md:pt-8 border-t border-black/10 flex flex-col sm:flex-row justify-between items-center gap-3 md:gap-4">
          <p className="text-xs md:text-sm text-light-ink">
            © 2026 INZEUM 내면소통연구소. All rights reserved.
          </p>
          <div className="flex gap-4 md:gap-6">
            <Link href="#" className="text-xs md:text-sm text-light-ink hover:text-mountain-deep transition-colors">
              개인정보처리방침
            </Link>
            <Link href="#" className="text-xs md:text-sm text-light-ink hover:text-mountain-deep transition-colors">
              이용약관
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
