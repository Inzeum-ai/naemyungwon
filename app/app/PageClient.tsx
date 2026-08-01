'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import { COMPANY } from '@/lib/company'

const features = [
  {
    icon: 'bedtime',
    title: '수면',
    desc: '수면유도명상으로 잠자리를 준비하고, 밤사이 기록을 남깁니다. 아침에는 수면 시간과 효율을 정리한 모닝 리포트를 받습니다.',
  },
  {
    icon: 'library_music',
    title: '명상 라이브러리',
    desc: '내면소통명상의 원리에 따라 구성된 명상 음원을 목적과 상황에 맞게 골라 들을 수 있습니다.',
  },
  {
    icon: 'auto_awesome',
    title: '내면AI',
    desc: '오늘의 상태와 기록을 바탕으로 대화하며, 지금 필요한 명상을 함께 찾아갑니다.',
  },
  {
    icon: 'mic',
    title: '내 목소리',
    desc: '명상 대본을 직접 읽어 자기 목소리로 된 명상을 만듭니다. 골전도 모드를 지원합니다.',
  },
  {
    icon: 'monitoring',
    title: '기록과 통계',
    desc: '수면, 감정, 몸감각, 감사 기록이 쌓이면서 변화의 흐름을 눈으로 확인할 수 있습니다.',
  },
  {
    icon: 'psychology',
    title: '마음근력 검사',
    desc: '주기적인 검사로 현재 상태를 확인하고, 지난 결과와 비교해 변화를 추적합니다.',
  },
]

export default function AppPageClient() {
  return (
    <div className="relative flex h-auto w-full flex-col">
      <Header />
      <main className="flex flex-col w-full pt-20">

        {/* Page Header */}
        <section className="py-14 md:py-20 px-5 md:px-12 bg-gradient-to-b from-sky-light/30 to-cloud">
          <div className="max-w-[1200px] mx-auto text-center">
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-mountain-deep font-bold tracking-wider text-sm uppercase"
            >
              INZEUM App
            </motion.span>
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-ink mt-4"
            >
              INZEUM 앱
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="font-serif text-lg md:text-2xl text-mountain-deep mt-6 leading-relaxed"
            >
              잠들기 전 마음을 고르는,<br className="sm:hidden" /> 수면과 내면소통의 시간
            </motion.p>
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="text-light-ink mt-6 max-w-2xl mx-auto leading-relaxed text-sm md:text-base"
            >
              내면소통연구소가 만드는 명상 앱입니다. 교육원에서 가르치는 내면소통명상을
              매일의 수면과 기록으로 이어갈 수 있도록 설계했습니다.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="mt-8"
            >
              <span className="inline-flex items-center gap-2 rounded-full bg-white/70 px-4 py-2 text-sm font-bold text-mountain-deep ring-1 ring-mountain-deep/15">
                <span className="material-symbols-outlined text-base">schedule</span>
                베타 서비스 준비 중
              </span>
            </motion.div>
          </div>
        </section>

        {/* Features */}
        <section className="py-16 md:py-20 px-5 md:px-12">
          <div className="max-w-[1200px] mx-auto">
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="font-serif text-2xl md:text-3xl font-bold text-ink text-center"
            >
              앱에서 할 수 있는 것
            </motion.h2>

            <div className="mt-10 md:mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {features.map((f, i) => (
                <motion.div
                  key={f.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.08 }}
                  className="rounded-2xl border border-black/5 bg-white p-6 md:p-7 shadow-sm"
                >
                  <span className="material-symbols-outlined text-mountain-deep text-3xl">
                    {f.icon}
                  </span>
                  <h3 className="mt-4 font-bold text-lg text-ink">{f.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-light-ink">{f.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* 내 목소리 — 앱의 중심 기능 */}
        <section className="py-16 md:py-20 px-5 md:px-12 bg-haze/60">
          <div className="max-w-[900px] mx-auto text-center">
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-mountain-deep font-bold tracking-wider text-sm uppercase"
            >
              My Voice
            </motion.span>
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="font-serif text-2xl md:text-3xl font-bold text-ink mt-4"
            >
              내 목소리로 하는 내면소통
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="mt-6 text-sm md:text-base leading-relaxed text-light-ink"
            >
              내면소통은 결국 자기 자신에게 건네는 말입니다. 앱은 명상 대본을 직접 읽어
              녹음하고, 그 목소리로 명상을 듣도록 합니다. 자유 녹음과 함께 읽기를 모두
              지원하며, 골전도 모드로 들을 수도 있습니다.
            </motion.p>
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="mt-4 text-xs md:text-sm text-light-ink/80"
            >
              녹음한 음성 파일은 원칙적으로 이용자의 기기에 저장됩니다.
            </motion.p>
          </div>
        </section>

        {/* 안내 및 문의 */}
        <section className="py-16 md:py-20 px-5 md:px-12">
          <div className="max-w-[900px] mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="rounded-2xl border border-black/5 bg-white p-7 md:p-10 shadow-sm text-center"
            >
              <h2 className="font-serif text-xl md:text-2xl font-bold text-ink">
                출시 소식을 가장 먼저 받아보세요
              </h2>
              <p className="mt-4 text-sm md:text-base leading-relaxed text-light-ink">
                INZEUM 앱은 현재 베타 서비스를 준비하고 있습니다. 출시 일정과 참여 방법은
                준비되는 대로 이곳과 커뮤니티에 안내드립니다.
              </p>
              <div className="mt-7 flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
                <a
                  href={`mailto:${COMPANY.serviceEmail}`}
                  className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-mountain-deep text-white rounded-lg font-bold hover:bg-mountain-mid transition-colors"
                >
                  이메일 문의
                  <span className="material-symbols-outlined text-sm">mail</span>
                </a>
                <Link
                  href="/community/notices"
                  className="inline-flex items-center justify-center gap-2 px-6 py-3 border-2 border-mountain-deep/20 rounded-lg text-ink font-bold hover:bg-sky-light/30 transition-colors"
                >
                  공지사항 보기
                  <span className="material-symbols-outlined text-sm">arrow_forward</span>
                </Link>
              </div>

              <p className="mt-8 pt-6 border-t border-black/10 text-xs text-light-ink">
                앱 이용에 적용되는 약관은{' '}
                <Link href="/terms" className="underline hover:text-mountain-deep">
                  이용약관
                </Link>
                {' '}및{' '}
                <Link href="/privacy" className="underline hover:text-mountain-deep">
                  개인정보처리방침
                </Link>
                에서 확인하실 수 있습니다.
              </p>
            </motion.div>
          </div>
        </section>

      </main>
      <Footer />
    </div>
  )
}
