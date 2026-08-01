'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'

const courses = [
  {
    title: '기초과정',
    subtitle: 'Foundation Course',
    duration: '12주 온라인',
    description: '내면소통명상의 기본 원리와 실천 방법을 배우는 입문 과정입니다. 일상에서 쉽게 적용할 수 있는 명상 기법을 익히고, 자기 자신과의 깊은 대화를 시작합니다.',
    features: [
      '뇌과학 기반 명상 이론',
      '일상 명상 실습',
      '마음근력 기초 훈련',
      '온라인 커뮤니티 참여',
    ],
    icon: 'spa',
    status: '상시 모집',
    statusColor: 'bg-green-100 text-green-700',
  },
  {
    title: '심화과정',
    subtitle: 'Advanced Course',
    duration: '10개월 / 200시간',
    description: '전문 명상 지도자가 되기 위한 심층 교육 과정입니다. 기초과정 수료 후 참여 가능하며, 이론과 실습을 통해 타인을 지도할 수 있는 역량을 기릅니다.',
    features: [
      '심층 명상 이론 및 실습',
      '지도자 역량 개발',
      '케이스 스터디',
      '수료 후 활동 지원',
    ],
    icon: 'school',
    status: '1기 모집 완료',
    statusColor: 'bg-gray-100 text-gray-600',
  },
]

export default function Courses() {
  return (
    <section className="py-24 px-6 md:px-12 bg-haze" id="courses">
      <div className="max-w-[1200px] mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <span className="text-mountain-deep font-bold tracking-wider text-sm uppercase">
            Education Programs
          </span>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-ink mt-4 mb-6">
            교육과정 안내
          </h2>
          <p className="text-light-ink max-w-2xl mx-auto">
            체계적인 단계별 교육을 통해 명상 수련자에서 전문 지도자로 성장할 수 있습니다.
          </p>
        </motion.div>

        {/* Course Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {courses.map((course, index) => (
            <motion.article
              key={course.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              className="group bg-white rounded-2xl shadow-sm hover:shadow-lg transition-all duration-300 overflow-hidden"
            >
              {/* Card Header */}
              <div className="p-8 pb-0">
                <div className="flex items-start justify-between mb-6">
                  <div className="w-14 h-14 rounded-xl bg-mountain-deep/10 flex items-center justify-center">
                    <span className="material-symbols-outlined text-2xl text-mountain-deep">
                      {course.icon}
                    </span>
                  </div>
                  <span className={`px-3 py-1 rounded-full text-xs font-bold ${course.statusColor}`}>
                    {course.status}
                  </span>
                </div>

                <span className="text-xs font-bold text-mountain-mid uppercase tracking-wider">
                  {course.subtitle}
                </span>
                <h3 className="font-serif text-2xl md:text-3xl font-bold text-ink mt-1 mb-2">
                  {course.title}
                </h3>
                <p className="text-sm text-mountain-deep font-semibold mb-4">
                  {course.duration}
                </p>
                <p className="text-light-ink leading-relaxed">
                  {course.description}
                </p>
              </div>

              {/* Features */}
              <div className="p-8 pt-6">
                <h4 className="text-sm font-bold text-ink mb-3">주요 내용</h4>
                <ul className="space-y-2">
                  {course.features.map((feature) => (
                    <li key={feature} className="flex items-center gap-2 text-sm text-light-ink">
                      <span className="material-symbols-outlined text-base text-mountain-mid">check_circle</span>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>

              {/* CTA */}
              <div className="px-8 pb-8">
                <Link
                  href="/courses"
                  className="flex items-center justify-center gap-2 w-full h-12 bg-mountain-deep/5 hover:bg-mountain-deep hover:text-white text-mountain-deep rounded-lg font-bold transition-colors"
                >
                  자세히 보기
                  <span className="material-symbols-outlined text-sm">arrow_forward</span>
                </Link>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  )
}
