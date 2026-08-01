'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import { COMPANY } from '@/lib/company'

const features = [
  {
    icon: 'library_music',
    title: '명상 라이브러리',
    desc: '내면소통명상의 원리에 따라 구성된 명상 음원을 목적과 상황에 맞게 골라 들을 수 있습니다.',
  },
  {
    icon: 'auto_awesome',
    title: '내면AI',
    desc: '명상과 기록에 대해 대화하며 지금 필요한 수련을 함께 찾아갑니다. 답변은 자동 생성되며 전문가 상담을 대신하지 않습니다.',
  },
  {
    icon: 'mic',
    title: '내 목소리',
    desc: '명상 대본을 직접 읽어 녹음해 두고, 내 목소리로 듣는 명상을 만듭니다. 골전도 모드를 지원합니다.',
  },
  {
    icon: 'edit_note',
    title: '기록',
    desc: '감정과 몸감각, 감사 기록을 남깁니다. 쌓인 기록은 내면AI와의 대화로 이어집니다.',
  },
  {
    icon: 'monitoring',
    title: '통계',
    desc: '기록이 쌓이면서 변화의 흐름을 확인할 수 있습니다. 성취를 압박하지 않는 방식으로 보여줍니다.',
  },
  {
    icon: 'psychology',
    title: '마음근력 검사',
    desc: '자기조절능력·대인관계능력·긍정성 세 축을 측정하고, 지난 결과와 비교해 변화를 추적합니다.',
  },
]

const roadmap = [
  {
    label: '베타',
    when: '2026년 8월 중',
    desc: '일부 이용자를 대상으로 먼저 엽니다.',
    accent: true,
  },
  {
    label: '정식 출시',
    when: '2026년 내',
    desc: 'iOS와 Android 양쪽에 출시할 예정입니다.',
    accent: false,
  },
]

const faq = [
  {
    q: '언제 사용할 수 있나요?',
    a: '2026년 8월 중 일부 이용자를 대상으로 베타를 엽니다. 정식 출시는 2026년 내를 목표로 하고 있습니다.',
  },
  {
    q: '어떤 기기에서 쓸 수 있나요?',
    a: 'iOS와 Android 모두 지원할 예정입니다.',
  },
  {
    q: '유료인가요?',
    a: '베타 서비스에는 유료 결제 기능이 없으며 결제정보를 수집하지 않습니다.',
  },
  {
    q: '녹음한 목소리는 어디에 저장되나요?',
    a: '녹음 음성 파일은 원칙적으로 이용자의 기기에 저장됩니다. 서버에는 녹음 제목과 길이 등의 기록만 남습니다.',
  },
  {
    q: '내면AI와 나눈 대화가 AI 학습에 쓰이나요?',
    a: '이용자 동의 없이 범용 AI 모델의 학습 데이터로 사용하지 않습니다. 자세한 내용은 개인정보처리방침에서 확인하실 수 있습니다.',
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
              className="text-light-ink mt-6 max-w-2xl mx-auto leading-relaxed text-sm md:text-base"
            >
              내면소통연구소가 만드는 명상 앱입니다. 교육원에서 배우는 내면소통명상을
              매일의 수련으로 이어갈 수 있도록 설계했습니다.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="mt-8 flex flex-wrap items-center justify-center gap-2.5"
            >
              <span className="inline-flex items-center gap-2 rounded-full bg-mountain-deep px-4 py-2 text-sm font-bold text-white">
                <span className="material-symbols-outlined text-base">schedule</span>
                2026년 8월 베타 오픈 예정
              </span>
              <span className="inline-flex items-center gap-2 rounded-full bg-white/70 px-4 py-2 text-sm font-bold text-mountain-deep ring-1 ring-mountain-deep/15">
                iOS · Android
              </span>
            </motion.div>
          </div>
        </section>

        {/* 기능 */}
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
                  transition={{ duration: 0.5, delay: i * 0.07 }}
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

        {/* 출시 일정 */}
        <section className="py-16 md:py-20 px-5 md:px-12 bg-haze/50">
          <div className="max-w-[900px] mx-auto">
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="font-serif text-2xl md:text-3xl font-bold text-ink text-center"
            >
              출시 일정
            </motion.h2>

            <div className="mt-10 md:mt-12 grid gap-5 sm:grid-cols-2">
              {roadmap.map((r, i) => (
                <motion.div
                  key={r.label}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  className={`rounded-2xl border p-6 md:p-7 shadow-sm ${
                    r.accent
                      ? 'border-mountain-deep/25 bg-white ring-1 ring-mountain-deep/10'
                      : 'border-black/5 bg-white'
                  }`}
                >
                  <span
                    className={`inline-block rounded-full px-3 py-1 text-xs font-bold ${
                      r.accent
                        ? 'bg-mountain-deep text-white'
                        : 'bg-haze text-light-ink'
                    }`}
                  >
                    {r.label}
                  </span>
                  <p className="mt-4 font-serif text-2xl font-bold text-ink">{r.when}</p>
                  <p className="mt-2 text-sm leading-relaxed text-light-ink">{r.desc}</p>
                </motion.div>
              ))}
            </div>

            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="mt-6 text-center text-xs text-light-ink"
            >
              일정은 개발 상황에 따라 조정될 수 있습니다.
            </motion.p>
          </div>
        </section>

        {/* FAQ */}
        <section className="py-16 md:py-20 px-5 md:px-12">
          <div className="max-w-[900px] mx-auto">
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="font-serif text-2xl md:text-3xl font-bold text-ink text-center"
            >
              자주 묻는 질문
            </motion.h2>

            <div className="mt-10 divide-y divide-black/10 border-y border-black/10">
              {faq.map((f, i) => (
                <motion.details
                  key={f.q}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.05 }}
                  className="group py-5"
                >
                  <summary className="flex cursor-pointer list-none items-center justify-between gap-4 font-bold text-ink marker:hidden">
                    {f.q}
                    <span className="material-symbols-outlined flex-shrink-0 text-light-ink transition-transform group-open:rotate-180">
                      expand_more
                    </span>
                  </summary>
                  <p className="mt-3 text-sm leading-relaxed text-light-ink">{f.a}</p>
                </motion.details>
              ))}
            </div>
          </div>
        </section>

        {/* 안내 및 문의 */}
        <section className="pb-16 md:pb-20 px-5 md:px-12">
          <div className="max-w-[900px] mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="rounded-2xl border border-black/5 bg-white p-7 md:p-10 shadow-sm text-center"
            >
              <h2 className="font-serif text-xl md:text-2xl font-bold text-ink">
                출시 소식 안내
              </h2>
              <p className="mt-4 text-sm md:text-base leading-relaxed text-light-ink">
                베타 참여 방법과 출시 일정은 준비되는 대로 이곳과 공지사항에 안내드립니다.
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
