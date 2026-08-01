'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'

const advancedFeatures = [
  {
    number: '01',
    title: '내면소통명상을 지도할 수 있는 명상 전문가 양성',
    icon: 'self_improvement',
    items: [
      '편안전활의 체화라는 근본적인 변화에 초점을 맞춘 명상 지도자 양성',
      '두 번의 집중 연수 교육과 10개월에 걸친 체계적인 실습',
      '내면 깊이 알아차리기: 매주 수행·관찰 과제를 통해 미세한 감정·감각·반응 패턴을 섬세하게 알아차리는 힘 개발',
      '고요한 행복의 체화: 마음근력 훈련과 반복 수행, 일상 적용, 피드백을 통해 텅 빈 행복 상태를 자연스럽게 체화',
    ],
  },
  {
    number: '02',
    title: '김주환 교수님으로부터 내면소통명상을 직접 배우는 기회',
    icon: 'person',
    items: [
      '내면소통명상 핵심 이론 및 심화 강의',
      '단계별 실습 지도 및 피드백 — 명상 언어, 보이스 톤, 스크립트 구조 직접 지도',
      '소규모 면담을 통한 심층 코칭',
      'Q&A 세션 운영 — 전 과정 중심이 김주환 교수님의 직접 교육과 피드백',
    ],
  },
  {
    number: '03',
    title: "'체화 → 스크립트 → 시연 → 피드백'으로 이어지는 실습형 커리큘럼",
    icon: 'fitness_center',
    items: [
      '내부감각과 고유 감각 기반의 다양한 움직임 명상 실습',
      '배경자아를 알아차리는 강력한 자기참조과정 훈련',
      '명상 가이드를 위한 적절한 언어, 발성, 호흡, 보이스 톤 등의 실습 훈련',
      '스크립트 작성 및 시연',
      '교수님과 각 분야 전문가 패컬티의 철저한 지도와 세밀한 피드백',
    ],
  },
  {
    number: '04',
    title: "세계 어디에도 없는 '전문가 융합형 명상 지도자 교육'",
    icon: 'public',
    items: [
      '타이치, 페르시안 밀, 고대운동, 자이로키네시스, 매트운동, 움직임 해부학, 호흡법, 연기기반 알아차림, 발성법 등 다양한 분야 패컬티 참여',
      '단순 지식 습득을 넘어 뇌과학 기반 움직임 명상 지도자로서 필요한 요소를 입체적으로 학습',
      '실습하여 실제 명상 지도에 활용 가능한 역량 개발',
    ],
  },
]

export default function CoursesPage() {
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
              Education Programs
            </motion.span>
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-ink mt-4"
            >
              교육과정 안내
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-light-ink mt-6 max-w-2xl mx-auto leading-relaxed"
            >
              체계적인 단계별 교육을 통해 명상 수련자에서 전문 지도자로 성장할 수 있습니다.
            </motion.p>
          </div>
        </section>

        {/* ─── 기초과정 ─── */}
        <section className="py-16 md:py-20 px-5 md:px-12">
          <div className="max-w-[900px] mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="flex items-center gap-4 mb-10"
            >
              <div className="w-14 h-14 rounded-xl bg-mountain-deep/10 flex items-center justify-center flex-shrink-0">
                <span className="material-symbols-outlined text-2xl text-mountain-deep">spa</span>
              </div>
              <div>
                <span className="text-xs font-bold text-mountain-mid uppercase tracking-wider">Foundation Course</span>
                <h2 className="font-serif text-3xl md:text-4xl font-bold text-ink">기초과정</h2>
              </div>
              <span className="ml-auto px-3 py-1 rounded-full text-xs font-bold bg-green-100 text-green-700 flex-shrink-0">
                상시 모집
              </span>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="bg-white rounded-2xl border border-black/5 shadow-sm p-8 md:p-10 space-y-6"
            >
              <p className="text-sm font-semibold text-mountain-deep">12주 온라인 과정</p>
              <p className="text-light-ink leading-relaxed">
                기초과정은 온라인 교육을 통해 여러분께 최고의 명상 경험을 드리는 것을 목표로 삼고 있습니다.
                다른 특별 강사나 초대 손님도 없이, 처음부터 끝까지 김주환 교수가 책임지고 여러분을
                내면소통명상의 세계로 안내합니다.
              </p>
              <p className="text-light-ink leading-relaxed">
                12주 동안 매주 수요일에 동영상 강의가 업로드됩니다.
                12주 간의 모든 과정을 마치신 분께는 <strong className="text-ink">"기초과정 수료증"</strong>을 드립니다.
                기초과정 수료자만이 추후에 개설되는 심화과정에 지원하실 수 있습니다.
                심화과정까지 마치시게 되면 소수 정예의 지도자과정에 지원하실 수 있습니다.
              </p>

              <div className="bg-cloud rounded-xl p-6">
                <h3 className="font-bold text-ink mb-3 text-sm">수강 안내</h3>
                <ul className="space-y-2 text-sm text-light-ink">
                  <li className="flex items-start gap-2">
                    <span className="material-symbols-outlined text-sm text-mountain-mid mt-0.5 flex-shrink-0">info</span>
                    내면소통 기초과정은 원칙적으로 원하시는 분 모두에게 수강 기회를 드리고자 합니다.
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="material-symbols-outlined text-sm text-mountain-mid mt-0.5 flex-shrink-0">info</span>
                    과정이 우선적으로 필요하다고 판단되는 분들께 먼저 기회를 드리며, 합격·불합격의 개념이 아닙니다.
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="material-symbols-outlined text-sm text-mountain-mid mt-0.5 flex-shrink-0">info</span>
                    기초과정은 앞으로도 계속 열릴 계획입니다. 이번에 선발이 안되셨더라도 계속 기회가 있을 것입니다.
                  </li>
                </ul>
              </div>
            </motion.div>
          </div>
        </section>

        {/* ─── 심화과정 ─── */}
        <section className="py-16 md:py-20 px-5 md:px-12 bg-haze">
          <div className="max-w-[900px] mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="flex flex-col sm:flex-row items-start sm:items-center gap-4 mb-10"
            >
              <div className="flex items-center gap-4">
                <div className="w-14 h-14 rounded-xl bg-mountain-deep/10 flex items-center justify-center flex-shrink-0">
                  <span className="material-symbols-outlined text-2xl text-mountain-deep">school</span>
                </div>
                <div>
                  <span className="text-xs font-bold text-mountain-mid uppercase tracking-wider">Advanced Course</span>
                  <h2 className="font-serif text-3xl md:text-4xl font-bold text-ink">심화과정</h2>
                </div>
              </div>
              <span className="sm:ml-auto px-3 py-1 rounded-full text-xs font-bold bg-blue-100 text-blue-700 flex-shrink-0">
                1기 진행 중
              </span>
            </motion.div>

            {/* Overview */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="bg-white rounded-2xl border border-black/5 shadow-sm p-8 md:p-10 mb-8"
            >
              <p className="text-sm font-semibold text-mountain-deep mb-4">10개월 / 200시간 대면 교육 · 2026년 3월 시작</p>
              <p className="text-light-ink leading-relaxed mb-4">
                내면소통명상 심화과정은 뇌과학 기반의 내면소통명상을 지도할 수 있는 공식적인 명상 지도자를 양성하는 교육과정으로,
                2026년 12월까지 10개월 동안 총 200시간으로 구성되는 집중 교육과정입니다.
              </p>
              <p className="text-light-ink leading-relaxed mb-6">
                성공적으로 수료했을 경우 <strong className="text-ink">내면소통명상 지도자(티처) 자격증</strong>이 수여됩니다.
                이는 내면소통연구소가 발급하는 공식 민간 자격으로, "뇌과학 기반의 내면소통명상"을 제대로 교육할 수 있는
                전문가임을 공식적으로 보증한다는 의미입니다.
              </p>

              <div className="bg-mountain-deep/5 rounded-xl p-6">
                <h3 className="font-bold text-ink mb-3 text-sm">내면소통 티처 자격 취득 시</h3>
                <ul className="space-y-2 text-sm text-light-ink">
                  <li className="flex items-start gap-2">
                    <span className="material-symbols-outlined text-sm text-mountain-deep mt-0.5 flex-shrink-0">check_circle</span>
                    독자적으로 내면소통명상을 지도하실 수 있습니다.
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="material-symbols-outlined text-sm text-mountain-deep mt-0.5 flex-shrink-0">check_circle</span>
                    내면소통명상 워크샵이나 교육과정을 개설하실 수 있습니다.
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="material-symbols-outlined text-sm text-mountain-deep mt-0.5 flex-shrink-0">check_circle</span>
                    요가, 필라테스, 명상, 피트니스, 소매틱스, 타이치 등 기존 교육 프로그램에 내면소통명상 요소를 접목하여
                    자신만의 고유한 명상 교육 프로그램을 개발·운영하실 수 있습니다.
                  </li>
                </ul>
              </div>

              <p className="mt-4 text-xs text-light-ink">
                * 심화과정은 원칙적으로 대면 교육 200시간으로 구성되며, 부득이한 사유로 일부 참여가 어려운 경우 정해진 범위 내에서 온라인 수강으로 대체하실 수 있습니다.
                본 심화과정에는 내면소통명상 기초과정을 수료(예정 포함)하신 분들만 지원하실 수 있습니다.
              </p>
            </motion.div>

            {/* 4 Features */}
            <div className="space-y-6">
              {advancedFeatures.map((feature, index) => (
                <motion.div
                  key={feature.number}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-white rounded-2xl border border-black/5 shadow-sm p-7"
                >
                  <div className="flex items-start gap-4 mb-4">
                    <span className="font-serif text-4xl font-bold text-mountain-deep/15 leading-none flex-shrink-0">
                      {feature.number}
                    </span>
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-3">
                        <div className="w-9 h-9 rounded-lg bg-mountain-deep/10 flex items-center justify-center flex-shrink-0">
                          <span className="material-symbols-outlined text-base text-mountain-deep">{feature.icon}</span>
                        </div>
                        <h3 className="font-bold text-ink leading-snug">{feature.title}</h3>
                      </div>
                      <ul className="space-y-2">
                        {feature.items.map((item) => (
                          <li key={item} className="flex items-start gap-2 text-sm text-light-ink">
                            <span className="material-symbols-outlined text-sm text-mountain-mid mt-0.5 flex-shrink-0">
                              chevron_right
                            </span>
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact CTA */}
        <section className="py-14 md:py-16 px-5 md:px-12">
          <div className="max-w-[800px] mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="font-serif text-2xl md:text-3xl font-bold text-ink mb-4">
                궁금한 점이 있으신가요?
              </h2>
              <p className="text-light-ink mb-8">
                교육과정에 관한 자세한 문의는 이메일 또는 FAQ를 이용해주세요.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="/faq"
                  className="inline-flex items-center justify-center gap-2 px-6 py-3 border-2 border-mountain-deep/20 rounded-lg text-ink font-bold hover:bg-sky-light/30 transition-colors"
                >
                  FAQ 보기
                  <span className="material-symbols-outlined text-sm">arrow_forward</span>
                </Link>
                <a
                  href="mailto:official@inzeum.com"
                  className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-mountain-deep text-white rounded-lg font-bold hover:bg-mountain-mid transition-colors"
                >
                  이메일 문의
                  <span className="material-symbols-outlined text-sm">mail</span>
                </a>
              </div>
            </motion.div>
          </div>
        </section>

      </main>
      <Footer />
    </div>
  )
}
