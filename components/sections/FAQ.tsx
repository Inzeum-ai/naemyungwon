'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const faqs = [
  {
    question: '내면소통명상이란 무엇인가요?',
    answer: '내면소통명상은 뇌과학과 심리학에 기반한 명상 방법으로, 자기 자신의 내면과 깊이 소통하여 마음의 힘을 기르는 수련법입니다. 단순한 이완을 넘어 자기 이해와 정서 조절 능력을 향상시키는 것을 목표로 합니다.',
  },
  {
    question: '명상 경험이 없어도 수강할 수 있나요?',
    answer: '네, 기초과정은 명상 경험이 전혀 없는 분들도 쉽게 따라올 수 있도록 설계되었습니다. 기본적인 명상 방법부터 차근차근 배우실 수 있으며, 일상에서 쉽게 적용할 수 있는 실용적인 기법을 익히게 됩니다.',
  },
  {
    question: '심화과정 수강 자격 요건은 어떻게 되나요?',
    answer: '심화과정은 기초과정을 수료한 분들을 대상으로 합니다. 기초과정에서 배운 내용을 충분히 이해하고 실천해 본 경험이 있어야 심화과정의 깊은 내용을 소화할 수 있습니다.',
  },
  {
    question: '온라인으로만 수강이 가능한가요?',
    answer: '기초과정은 100% 온라인으로 진행됩니다. 심화과정의 경우 온라인 강의와 함께 오프라인 집중 수련 세션이 포함되어 있어, 깊이 있는 학습과 실습이 가능합니다.',
  },
  {
    question: '수료 후 어떤 활동을 할 수 있나요?',
    answer: '심화과정 수료 후에는 내면소통명상 지도자로서 활동할 수 있는 자격이 부여됩니다. 개인 명상 지도, 기업 및 단체 교육, 커뮤니티 리더 등 다양한 분야에서 활동하실 수 있으며, 수료생 네트워크를 통해 지속적인 성장 기회가 제공됩니다.',
  },
  {
    question: '수강료와 결제 방법은 어떻게 되나요?',
    answer: '수강료와 결제 방법에 대한 자세한 내용은 각 과정 상세 페이지에서 확인하실 수 있습니다. 신용카드, 계좌이체 등 다양한 결제 방법을 지원하며, 분할 납부 옵션도 제공됩니다.',
  },
]

function FAQItem({ question, answer, isOpen, onClick }: {
  question: string
  answer: string
  isOpen: boolean
  onClick: () => void
}) {
  return (
    <div className="border-b border-black/5 last:border-none">
      <button
        onClick={onClick}
        className="flex items-center justify-between w-full py-6 text-left"
        aria-expanded={isOpen}
      >
        <span className="font-bold text-ink pr-8">{question}</span>
        <span className={`material-symbols-outlined text-mountain-deep transition-transform duration-300 flex-shrink-0 ${isOpen ? 'rotate-180' : ''}`}>
          expand_more
        </span>
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="overflow-hidden"
          >
            <p className="pb-6 text-light-ink leading-relaxed">
              {answer}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  return (
    <section className="py-24 px-6 md:px-12 bg-haze" id="faq">
      <div className="max-w-[800px] mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <span className="text-mountain-deep font-bold tracking-wider text-sm uppercase">
            FAQ
          </span>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-ink mt-4 mb-6">
            자주 묻는 질문
          </h2>
          <p className="text-light-ink">
            궁금하신 점이 있으시면 아래 내용을 확인해 주세요.
          </p>
        </motion.div>

        {/* FAQ List */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="bg-white rounded-2xl shadow-sm p-6 md:p-8"
        >
          {faqs.map((faq, index) => (
            <FAQItem
              key={index}
              question={faq.question}
              answer={faq.answer}
              isOpen={openIndex === index}
              onClick={() => setOpenIndex(openIndex === index ? null : index)}
            />
          ))}
        </motion.div>

        {/* Contact CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-center mt-12"
        >
          <p className="text-light-ink mb-4">
            원하시는 답변을 찾지 못하셨나요?
          </p>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 text-mountain-deep font-bold hover:underline"
          >
            문의하기
            <span className="material-symbols-outlined text-sm">arrow_forward</span>
          </a>
        </motion.div>
      </div>
    </section>
  )
}
