'use client'

import { motion } from 'framer-motion'

const pillars = [
  {
    icon: 'science',
    title: '과학적 근거',
    desc: '뇌과학 기반 과학적 명상 연구',
  },
  {
    icon: 'self_improvement',
    title: '편안전활의 체화',
    desc: '성취역량의 근본인 마음근력 훈련 개발',
  },
  {
    icon: 'diversity_3',
    title: '수행공동체',
    desc: '함께 성장하는 지속적 네트워크 빌딩',
  },
  {
    icon: 'school',
    title: '명상교육기관',
    desc: '내명원: 명상전문가를 양성하는 최고의 명상 스쿨',
  },
  {
    icon: 'public',
    title: '글로벌 확장',
    desc: '한국 명상 전통을 IT/인공지능 기술과 접목하여 전세계에 보급',
  },
]

export default function Vision() {
  return (
    <section className="py-16 md:py-24 px-5 md:px-12 bg-white" id="vision">
      <div className="max-w-[1200px] mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12 md:mb-16"
        >
          <span className="text-mountain-deep font-bold tracking-wider text-xs md:text-sm uppercase">Vision</span>
          <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-ink mt-4 mb-5 md:mb-6">
            내면소통연구소 비전
          </h2>
          <p className="font-serif italic text-lg md:text-2xl text-mountain-deep mb-5 md:mb-6">
            "명상하는 나라" (Meditation Nation)
          </p>
          <p className="text-sm md:text-base text-light-ink max-w-2xl mx-auto leading-[1.9]">
            내면소통연구소는 명상 콘텐츠를 기반으로 일상 속 웰니스의 새로운 기준을 세우고,
            '명상하는 나라'를 실현한다는 비전을 함께 만들어가고 있습니다.
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-3 md:gap-5">
          {pillars.map((pillar, index) => (
            <motion.div
              key={pillar.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`text-center p-4 md:p-5 rounded-2xl bg-cloud hover:bg-sky-light/30 transition-colors${index === 4 ? ' col-span-2 md:col-span-1 max-w-[200px] mx-auto w-full' : ''}`}
            >
              <div className="w-12 h-12 md:w-14 md:h-14 mx-auto mb-3 md:mb-4 rounded-full bg-mountain-deep/10 flex items-center justify-center">
                <span className="material-symbols-outlined text-xl md:text-2xl text-mountain-deep">{pillar.icon}</span>
              </div>
              <h3 className="font-bold text-xs md:text-sm text-ink mb-1 md:mb-2">{pillar.title}</h3>
              <p className="text-xs text-light-ink leading-relaxed">{pillar.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
