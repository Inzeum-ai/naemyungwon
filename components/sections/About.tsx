'use client'

import { motion } from 'framer-motion'

export default function About() {
  return (
    <section className="py-16 md:py-24 bg-white" id="about">
      <div className="container mx-auto px-5 md:px-12 max-w-[900px]">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.8 }}
          className="flex flex-col items-center text-center gap-6 md:gap-8"
        >
          <span className="material-symbols-outlined text-3xl md:text-4xl text-mountain-deep">self_improvement</span>

          <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold leading-snug text-ink">
            텅 빈 고요함 속의 지극한 행복
          </h2>

          <div className="w-16 h-0.5 bg-mountain-deep/30" />

          <p className="text-base md:text-lg text-light-ink leading-[1.9]">
            INZEUM 내면소통연구소는 뇌과학과 심리학에 기반한
            체계적인 명상 교육을 제공합니다.
            <br /><br />
            단순한 명상 기법을 넘어, 자기 자신과의 깊은 대화를 통해
            마음의 힘을 기르고 진정한 내면의 평화를 찾아가는 여정을 함께합니다.
          </p>
        </motion.div>

        {/* Key Values */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="grid grid-cols-1 sm:grid-cols-3 gap-5 md:gap-8 mt-14 md:mt-20"
        >
          <div className="text-center p-6">
            <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-sky-light/50 flex items-center justify-center">
              <span className="material-symbols-outlined text-2xl text-mountain-deep">psychology</span>
            </div>
            <h3 className="font-bold text-lg text-ink mb-2">뇌과학 기반</h3>
            <p className="text-light-ink text-sm leading-relaxed">
              과학적으로 검증된 명상 방법론과 뇌과학 연구 결과를 바탕으로 교육합니다.
            </p>
          </div>

          <div className="text-center p-6">
            <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-sky-light/50 flex items-center justify-center">
              <span className="material-symbols-outlined text-2xl text-mountain-deep">favorite</span>
            </div>
            <h3 className="font-bold text-lg text-ink mb-2">마음근력 강화</h3>
            <p className="text-light-ink text-sm leading-relaxed">
              일상에서 실천 가능한 명상을 통해 마음의 근력을 단련합니다.
            </p>
          </div>

          <div className="text-center p-6">
            <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-sky-light/50 flex items-center justify-center">
              <span className="material-symbols-outlined text-2xl text-mountain-deep">groups</span>
            </div>
            <h3 className="font-bold text-lg text-ink mb-2">지도자 양성</h3>
            <p className="text-light-ink text-sm leading-relaxed">
              전문적인 명상 지도자로 성장할 수 있는 체계적인 교육 과정을 제공합니다.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
