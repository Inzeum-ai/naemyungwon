'use client'

import { motion } from 'framer-motion'

const activities = [
  {
    number: '01',
    title: '명상 콘텐츠\n연구 및 개발',
    icon: 'video_library',
    items: [
      '과학적 근거 기반의 명상 및 교육 콘텐츠 개발',
      '내면소통명상 유튜브 운영 (구독자 35만 이상)',
      '매주 밤 8시 라이브 강연, 매월 현장 라이브 강연',
      '삼성어린이집 마음근력 프로그램 개발 및 전국 보급',
    ],
  },
  {
    number: '02',
    title: '명상 교육 및\n지도자 양성',
    icon: 'school',
    items: [
      '내면소통명상 기초과정 12주 온라인 운영 (4,500명 이상 수료)',
      '2026년 200명의 명상지도자 배출을 위한 심화과정 시작',
      '7명의 움직임 명상 분야 최고 전문가 패컬티 구성',
      '내면소통명상법 지속적 개발',
    ],
  },
  {
    number: '03',
    title: '명상 공동체\n형성을 위한 노력',
    icon: 'groups',
    items: [
      '내면소통 명상 콘서트 (코엑스 오디토리움)',
      '신년명상회 및 여름리트릿, 그릿 워크숍',
      '한강공원 존2 달리기 등 특별 프로그램',
      '2026년 어린이·청소년 마음근력 클럽 출범',
    ],
  },
]

export default function WhatWeDo() {
  return (
    <section className="py-16 md:py-24 px-5 md:px-12 bg-white">
      <div className="max-w-[1200px] mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-10 md:mb-16"
        >
          <span className="text-mountain-deep font-bold tracking-wider text-xs md:text-sm uppercase">What We Do</span>
          <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl font-bold text-ink mt-4">
            내면소통연구소가 하고 있는 일
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 md:gap-8">
          {activities.map((activity, index) => (
            <motion.div
              key={activity.number}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              className="bg-cloud rounded-2xl p-6 md:p-8 hover:shadow-md transition-shadow"
            >
              <div className="flex items-start gap-4 mb-6">
                <span className="font-serif text-5xl font-bold text-mountain-deep/15 leading-none">
                  {activity.number}
                </span>
                <div className="w-12 h-12 rounded-xl bg-mountain-deep/10 flex items-center justify-center flex-shrink-0">
                  <span className="material-symbols-outlined text-xl text-mountain-deep">
                    {activity.icon}
                  </span>
                </div>
              </div>
              <h3 className="font-serif text-xl font-bold text-ink mb-5 whitespace-pre-line leading-snug">
                {activity.title}
              </h3>
              <ul className="space-y-3">
                {activity.items.map((item) => (
                  <li key={item} className="flex items-start gap-2 text-sm text-light-ink">
                    <span className="material-symbols-outlined text-sm text-mountain-mid mt-0.5 flex-shrink-0">
                      check_circle
                    </span>
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
