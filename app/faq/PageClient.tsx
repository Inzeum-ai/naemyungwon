'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'

interface FAQItem {
  q: string
  a: string
}

const faqs: FAQItem[] = [
  {
    q: '심화과정 교육에서 김주환 교수님과 패컬티 선생님들의 강의 비중은 어느 정도인가요?',
    a: '정규과정 전체 교육 시간 대비 김주환 교수님의 직접 강의와 지도 비중은 대략 70%, 패컬티 선생님들의 교육이 대략 30% 정도의 비율로 구성됩니다. 진행 과정에서 세부 비율이 약간 조정될 수는 있으나, 전 과정의 중심은 김주환 교수님의 직접 교육과 피드백입니다.',
  },
  {
    q: '내면소통명상 지도자(티처) 자격증은 취득 후 어떻게 활용할 수 있을까요?',
    a: '자격증은 단순한 \'수료증\'이 아니라, 내면소통명상을 공식적으로 지도할 수 있음을 보증하는 전문 자격증입니다. 활용 방식은 여러분의 배경과 강점에 따라 다양하게 확장될 수 있습니다. 기존 전문 영역(요가·필라테스·PT·소매틱 등)에 통합하실 수도 있고 자신만의 명상 프로그램을 직접 만들어 운영하실 수도 있습니다. 자격증 취득 이후에는 내면소통명상의 이름으로 개인 명상 클래스, 워크숍, 소그룹 프로그램 등을 개설하실 수 있습니다. (주간 명상 클래스, 직장인/부모/학생을 위한 명상 프로그램 등)',
  },
  {
    q: '혼자서 명상하는 것과 명상 지도자가 되는 것의 차이는 무엇일까요? 꼭 지도자가 되어야 하는 건지 궁금합니다.',
    a: '반드시 명상 지도자가 될 필요는 없습니다. 명상은 혼자 수행하는 것만으로도 삶에 큰 변화가 생길 수 있기 때문입니다. 다만 한 가지 중요한 차이가 있습니다. 배움의 가장 깊은 방식은 \'가르치는 것\'입니다. 즉 "가장 깊이 배우는 방법은 누군가에게 설명하는 것"입니다. 혼자서 하는 명상은 \'경험\'에 집중되고, 누군가에게 안내하려고 할 때는 명상의 구조·원리·알아차림의 단계까지 훨씬 깊이 연구하게 됩니다. 따라서 자신의 명상도 더 깊어지고 명상이 삶에 스며드는 방식이 훨씬 입체적으로 변합니다. 본 심화과정은 명상을 더 깊게 더 정확하게 배우고 싶은 분, 그리고 명상 지도를 통해 타인의 변화까지 만들고 싶은 분들께 적합하게 설계된 과정입니다.',
  },
  {
    q: '주변에 몸과 마음이 아픈 사람이 많습니다. 내면소통명상을 안내하면 도움을 줄 수 있을까요?',
    a: '몸이나 마음이 아픈 분들께는 꼭 의사의 진단을 우선 받도록 권유해주시기 바랍니다. 명상은 결코 질환에 대한 치료의 목적으로 사용되어서는 안됩니다. 명상은 예방이나 재활에는 도움이 될 수도 있지만, 이미 진단명이 있는 질환을 지닌 분께는 도움이 되지 않을 가능성이 높습니다.\n\n아울러 본 과정은 치료나 상담의 자격을 부여하지 않습니다. 치료 목적의 프로그램도 아닙니다. 내면소통명상 지도자는 질환이나 질병에 대한 진단이나 처방을 내려서는 안됩니다. 그것은 의료법 위반이며 법적인 제재를 받게 됩니다. 내면소통명상 지도자는 사랑과 존중의 마음으로 명상을 안내하고 도움을 주는 태도를 처음부터 끝까지 유지합니다.',
  },
]

function FAQAccordion({ faq, index, isOpen, onToggle }: {
  faq: FAQItem
  index: number
  isOpen: boolean
  onToggle: () => void
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.08 }}
      className="border-b border-black/10 last:border-b-0"
    >
      <button
        onClick={onToggle}
        className="w-full flex items-start justify-between gap-4 py-6 text-left group"
        aria-expanded={isOpen}
      >
        <div className="flex items-start gap-4">
          <span className="font-serif text-mountain-deep font-bold text-lg leading-none mt-0.5 flex-shrink-0">
            Q
          </span>
          <span className="text-base md:text-lg font-semibold text-ink group-hover:text-mountain-deep transition-colors leading-snug">
            {faq.q}
          </span>
        </div>
        <span className="material-symbols-outlined text-mountain-deep flex-shrink-0 mt-0.5 transition-transform duration-300"
          style={{ transform: isOpen ? 'rotate(180deg)' : 'rotate(0deg)' }}>
          expand_more
        </span>
      </button>

      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
            className="overflow-hidden"
          >
            <div className="pb-6 pl-8">
              {faq.a.split('\n\n').map((paragraph, i) => (
                <p key={i} className={`text-light-ink leading-relaxed ${i > 0 ? 'mt-4' : ''}`}>
                  {paragraph}
                </p>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  )
}

export default function FAQPage() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  const handleToggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index)
  }

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
              FAQ
            </motion.span>
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-ink mt-4"
            >
              자주 묻는 질문
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-light-ink mt-6 max-w-xl mx-auto"
            >
              심화과정 교육과정 및 자격증에 관한 주요 문의사항을 정리했습니다.
            </motion.p>
          </div>
        </section>

        {/* FAQ List */}
        <section className="py-16 md:py-20 px-5 md:px-12">
          <div className="max-w-[800px] mx-auto">
            <div className="bg-white rounded-2xl shadow-sm border border-black/5 px-5 sm:px-8 md:px-12">
              {faqs.map((faq, index) => (
                <FAQAccordion
                  key={index}
                  faq={faq}
                  index={index}
                  isOpen={openIndex === index}
                  onToggle={() => handleToggle(index)}
                />
              ))}
            </div>

            {/* Contact CTA */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="mt-12 text-center"
            >
              <p className="text-light-ink mb-4">더 궁금한 점이 있으시면 이메일로 문의해주세요.</p>
              <a
                href="mailto:official@inzeum.com"
                className="inline-flex items-center gap-2 text-mountain-deep font-bold hover:text-mountain-mid transition-colors underline underline-offset-4"
              >
                official@inzeum.com
                <span className="material-symbols-outlined text-sm">arrow_outward</span>
              </a>
            </motion.div>
          </div>
        </section>

      </main>
      <Footer />
    </div>
  )
}
