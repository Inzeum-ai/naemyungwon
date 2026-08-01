'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'

const faculty = [
  {
    name: '김주현',
    org: '소마앤바디·힘의집 대표',
    specialty: '고대 운동·소매틱',
    image: '/images/faculty/kim-joohyeon.jpg',
  },
  {
    name: '김지민',
    org: '오스모브 창립 대표',
    specialty: '체화 해부학·위빠사나',
    image: '/images/faculty/kim-jimin.jpg',
  },
  {
    name: '김지훈',
    org: '23년차 배우',
    specialty: '알아차림·발성 훈련',
    image: '/images/faculty/kim-jihoon.jpg',
  },
  {
    name: '이연',
    org: '바디올로지 대표',
    specialty: '자세 정렬·매트 명상',
    image: '/images/faculty/lee-yeon.jpg',
  },
  {
    name: '이유영',
    org: '바디올로지 대표',
    specialty: '움직임·소매틱 운동',
    image: '/images/faculty/lee-yooyoung.jpg',
  },
  {
    name: '브랜든 최',
    org: '서울대 음악대학 강사',
    specialty: '리듬 기반 호흡 명상',
    image: '/images/faculty/brandon-choi.jpg',
  },
  {
    name: '강수원',
    org: '밝은빛태극권협회 부원장',
    specialty: '타이치·도인기공',
    image: '/images/faculty/kang-soowon.jpg',
    isGuest: true,
  },
]

const programs = [
  {
    icon: 'spa',
    title: '기초과정',
    subtitle: 'Foundation Course',
    duration: '12주 온라인 과정',
    desc: '내면소통명상의 기본 원리 이해 및 개인 수행',
    target: '내면소통명상에 관심 있는 일반인',
    statusText: '상시 모집',
    statusClass: 'bg-green-100 text-green-700',
  },
  {
    icon: 'school',
    title: '심화과정',
    subtitle: 'Advanced Course (명상 지도자 양성)',
    duration: '10개월 / 200시간 대면 교육',
    desc: '수료 시 내면소통명상 지도자(티처) 자격증 수여',
    target: '기초과정 수료자, 기당 50~200명 선발',
    statusText: '1기 진행 중',
    statusClass: 'bg-blue-100 text-blue-700',
  },
]

export default function ProgramsPage() {
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
              Meditation School
            </motion.span>
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-ink mt-4"
            >
              프로그램 소개
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-light-ink mt-6 max-w-3xl mx-auto leading-relaxed"
            >
              내면소통연구소 산하 내명원은 뇌과학적 이해를 바탕으로 한 '내면소통명상'을 교육하는 기관으로,
              한국 전통 명상의 지혜와 현대의 과학적 근거를 결합한 체계적인 명상 교육 프로그램을 개발하고 운영합니다.
            </motion.p>
          </div>
        </section>

        {/* Program Overview — Slide 11 */}
        <section className="py-16 md:py-20 px-5 md:px-12">
          <div className="max-w-[1200px] mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="mb-12 text-center"
            >
              <span className="text-mountain-deep font-bold tracking-wider text-sm uppercase">Programs</span>
              <h2 className="font-serif text-3xl md:text-4xl font-bold text-ink mt-4">
                교육과정 개요
              </h2>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {programs.map((program, index) => (
                <motion.div
                  key={program.title}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.15 }}
                  className="bg-white border border-black/5 rounded-2xl p-8 shadow-sm hover:shadow-md transition-shadow"
                >
                  <div className="flex items-start justify-between mb-6">
                    <div className="w-14 h-14 rounded-xl bg-mountain-deep/10 flex items-center justify-center">
                      <span className="material-symbols-outlined text-2xl text-mountain-deep">{program.icon}</span>
                    </div>
                    <span className={`px-3 py-1 rounded-full text-xs font-bold ${program.statusClass}`}>
                      {program.statusText}
                    </span>
                  </div>
                  <span className="text-xs font-bold text-mountain-mid uppercase tracking-wider">{program.subtitle}</span>
                  <h3 className="font-serif text-2xl font-bold text-ink mt-1 mb-2">{program.title}</h3>
                  <p className="text-sm text-mountain-deep font-semibold mb-3">{program.duration}</p>
                  <p className="text-light-ink text-sm leading-relaxed mb-2">{program.desc}</p>
                  <p className="text-light-ink text-xs">대상: {program.target}</p>
                </motion.div>
              ))}
            </div>

            {/* 심화과정 구성 note */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="mt-8 p-6 bg-mountain-deep/5 rounded-2xl text-center"
            >
              <p className="text-sm text-mountain-deep font-semibold">
                심화과정 구성: 200시간 실습 위주 움직임 명상 교육
              </p>
              <p className="text-xs text-light-ink mt-1">
                심상 해부학 · 타이치 · 고대운동 · 자이로키네시스 · 호흡법 · 연기 · 발성법 — 세계 유일의 융합형 움직임 명상 교육 프로그램
              </p>
            </motion.div>
          </div>
        </section>

        {/* Theoretical Foundation — Slide 12 */}
        <section className="py-16 md:py-20 px-5 md:px-12 bg-haze">
          <div className="max-w-[1000px] mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="mb-12 text-center"
            >
              <span className="text-mountain-deep font-bold tracking-wider text-sm uppercase">Founder</span>
              <h2 className="font-serif text-3xl md:text-4xl font-bold text-ink mt-4">
                내명원의 이론적 기반
              </h2>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="bg-white rounded-2xl p-8 md:p-12 shadow-sm flex flex-col md:flex-row items-center gap-10"
            >
              <div className="flex-shrink-0">
                <div className="relative w-48 md:w-56 aspect-[3/4] overflow-hidden rounded-xl bg-slate-100 shadow-lg">
                  <Image
                    src="/images/joohankim_11.jpg"
                    alt="김주환 교수 프로필"
                    fill
                    className="object-cover object-top"
                    sizes="(max-width: 768px) 192px, 224px"
                  />
                </div>
              </div>
              <div className="flex-1 text-center md:text-left">
                <p className="text-mountain-deep font-bold text-sm tracking-wider uppercase mb-2">Founder</p>
                <h3 className="font-serif text-2xl md:text-3xl font-bold text-ink mb-1">김주환 교수</h3>
                <ul className="text-sm text-light-ink space-y-1 mb-5">
                  <li>연세대학교 언론홍보영상학부 교수</li>
                  <li>뇌과학 기반 내면소통명상 개발자</li>
                  <li>베스트셀러 저자 (『내면소통』『그릿』『회복탄력성』 등)</li>
                </ul>
                <p className="text-light-ink text-sm leading-relaxed">
                  다수의 연구·저서·강연을 통해 명상을 대중과 학문 영역에 연결하며,
                  마음근력은 훈련을 통해 기를 수 있다고 강조합니다.
                  내면소통연구소에서는 교육 철학, 방법론 검증, 인재 양성 기준을 총괄하며
                  학문적 신뢰성과 방향성을 책임집니다.
                </p>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Faculty — Slide 13 */}
        <section className="py-16 md:py-20 px-5 md:px-12">
          <div className="max-w-[1200px] mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="mb-12"
            >
              <span className="text-mountain-deep font-bold tracking-wider text-sm uppercase">Faculty</span>
              <h2 className="font-serif text-3xl md:text-4xl font-bold text-ink mt-4">
                내명원 패컬티
              </h2>
              <p className="text-light-ink mt-4 max-w-xl">
                내면소통명상 교육을 함께 이끌어가는 각 분야 전문 지도자들입니다.
              </p>
            </motion.div>

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {faculty.map((member, index) => (
                <motion.article
                  key={member.name}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.08 }}
                  className="group"
                >
                  <div className="relative aspect-[3/4] overflow-hidden rounded-xl bg-slate-100 mb-4">
                    <Image
                      src={member.image}
                      alt={`${member.name} 프로필 사진`}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-105 grayscale group-hover:grayscale-0"
                      sizes="(max-width: 768px) 50vw, 25vw"
                    />
                  </div>
                  <h3 className="font-bold text-base text-ink group-hover:text-mountain-deep transition-colors">
                    {member.name}
                  </h3>
                  <p className="text-xs text-light-ink mt-0.5">{member.org}</p>
                  <p className="text-xs text-mountain-mid font-semibold mt-1">{member.specialty}</p>
                  {member.isGuest && (
                    <span className="inline-block mt-1 px-2 py-0.5 bg-warm/60 text-ink text-xs rounded">
                      특별초빙강사
                    </span>
                  )}
                </motion.article>
              ))}
            </div>
          </div>
        </section>

      </main>
      <Footer />
    </div>
  )
}
