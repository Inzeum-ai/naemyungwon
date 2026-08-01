'use client'

import { motion } from 'framer-motion'

interface Milestone {
  year: string
  events: string[]
  highlight?: boolean
}

const milestones: Milestone[] = [
  {
    year: '2023',
    events: ['9월 내면소통연구소 설립'],
  },
  {
    year: '2024',
    events: [
      '1월 해쉬드벤처 투자 유치',
      '3월 벤처기업 인증',
      '4월 김주환 교수 대표이사 취임',
    ],
  },
  {
    year: '2025',
    events: [
      '1월 신년명상회 개최',
      '3월·6월 내면소통명상콘서트 (코엑스 오디토리움, 1,000명 이상)',
      '8월 여름 리트릿 4박5일 (정선 파크로쉬 호텔)',
      '10월 존2 달리기 운동 모임 (한강공원)',
      '기초과정 1기·2기·3기 운영 (4,500명 이상 수료)',
    ],
  },
  {
    year: '2026',
    events: [
      '부설 INZEUM 내면소통연구소(내명원) 설립',
      '심화과정 개설 (10개월 200시간 지도자 자격증 과정)',
      '200명 정원에 500명 이상 지원',
      '3월 심화과정 시작, 12월 수료 예정',
    ],
    highlight: true,
  },
]

export default function History() {
  return (
    <section className="py-16 md:py-24 px-5 md:px-12 bg-haze" id="history">
      <div className="max-w-[860px] mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12 md:mb-16"
        >
          <span className="text-mountain-deep font-bold tracking-wider text-xs md:text-sm uppercase">History</span>
          <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl font-bold text-ink mt-4">
            내면소통연구소 연혁
          </h2>
        </motion.div>

        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-[60px] md:left-[90px] top-2 bottom-2 w-px bg-mountain-deep/20" />

          <div className="space-y-7 md:space-y-8">
            {milestones.map((milestone, index) => (
              <motion.div
                key={milestone.year}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="flex gap-5 md:gap-10"
              >
                {/* Year */}
                <div className="flex-shrink-0 w-[60px] md:w-[90px] text-right relative">
                  <span
                    className={`font-serif text-base md:text-xl font-bold leading-tight ${
                      milestone.highlight ? 'text-mountain-deep' : 'text-ink'
                    }`}
                  >
                    {milestone.year}
                  </span>
                  {/* Dot on the line */}
                  <div
                    className={`absolute top-1.5 -right-[3px] w-2.5 h-2.5 md:w-3 md:h-3 rounded-full border-2 ${
                      milestone.highlight
                        ? 'bg-mountain-deep border-mountain-deep'
                        : 'bg-white border-mountain-deep/40'
                    }`}
                  />
                </div>

                {/* Events */}
                <div
                  className={`flex-1 min-w-0 pb-7 md:pb-8 ${
                    milestone.highlight
                      ? 'bg-mountain-deep/5 rounded-xl px-4 md:px-5 py-3 md:py-4 -mt-1'
                      : ''
                  }`}
                >
                  <ul className="space-y-1.5 md:space-y-2">
                    {milestone.events.map((event) => (
                      <li
                        key={event}
                        className={`text-xs md:text-sm leading-relaxed ${
                          milestone.highlight ? 'text-ink' : 'text-light-ink'
                        }`}
                      >
                        {event}
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
