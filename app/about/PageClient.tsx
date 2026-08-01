'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import History from '@/components/sections/History'
import WhatWeDo from '@/components/sections/WhatWeDo'

interface FacultyMember {
  name: string
  nameEn: string
  org: string
  specialty: string
  image: string
  isGuest?: boolean
}

interface Advisor {
  name: string
  nameEn: string
  field: string
  title: string
  image: string
}

const faculty: FacultyMember[] = [
  {
    name: '김지훈',
    nameEn: 'Kim Ji-hoon',
    org: '23년차 배우',
    specialty: '알아차림·발성 훈련',
    image: '/images/faculty/kim-jihoon.jpg',
  },
  {
    name: '김주현',
    nameEn: 'Kim Ju-hyun',
    org: '소마앤바디·힘의집 대표',
    specialty: '고대 운동·소매틱',
    image: '/images/faculty/kim-joohyeon.jpg',
  },
  {
    name: '김지민',
    nameEn: 'Kim Ji-min',
    org: '오스모브 창립 대표',
    specialty: '체화 해부학·위빠사나',
    image: '/images/faculty/kim-jimin.jpg',
  },
  {
    name: '브랜든 최',
    nameEn: 'Brandon Choi',
    org: '서울대 음악대학 강사',
    specialty: '리듬 기반 호흡 명상',
    image: '/images/faculty/brandon-choi.jpg',
  },
  {
    name: '이연',
    nameEn: 'Lee Yeon',
    org: '바디올로지 대표',
    specialty: '자세 정렬·매트 명상',
    image: '/images/faculty/lee-yeon.jpg',
  },
  {
    name: '이유영',
    nameEn: 'Lee Yu-young',
    org: '바디올로지 대표',
    specialty: '움직임·소매틱 운동',
    image: '/images/faculty/lee-yooyoung.jpg',
  },
  {
    name: '강수원',
    nameEn: 'Kang Su-won',
    org: '밝은빛태극권협회 부원장',
    specialty: '타이치·도인기공',
    image: '/images/faculty/kang-soowon.jpg',
    isGuest: true,
  },
]

const advisors: Advisor[] = [
  {
    name: '권오현',
    nameEn: 'Kwon Oh-hyun',
    field: '경영',
    title: '현 기재부 중장기전략위원회 위원장, 전 삼성전자 회장, [초격차] 저자',
    image: '/images/advisors/kwon-ohyeon.jpg',
  },
  {
    name: '김서준',
    nameEn: 'Kim Seo-jun',
    field: '미래비전',
    title: '현 해시드 대표',
    image: '/images/advisors/kim-seojun.jpg',
  },
  {
    name: '김완두',
    nameEn: 'Kim Wan-du',
    field: '명상과학',
    title: '현 카이스트 명상과학연구소 소장, 하트스마일명상 창시자',
    image: '/images/advisors/kim-wandu.jpg',
  },
  {
    name: '김은주',
    nameEn: 'Kim Eun-ju',
    field: '정신건강',
    title: '현 강남세브란스병원 정신건강의학과 교수 (소아청소년)',
    image: '/images/advisors/kim-eunju.jpeg',
  },
  {
    name: '나군호',
    nameEn: 'Na Gun-ho',
    field: 'AI & 디지털',
    title: '현 네이버헬스케어연구소장, 전 연세대의과대학 교수',
    image: '/images/advisors/na-gunho.jpeg',
  },
  {
    name: '변찬우',
    nameEn: 'Byun Chan-woo',
    field: '법률',
    title: '현 김앤장법률사무소 변호사, 전 광주지검 검사장',
    image: '/images/advisors/byeon-chanwoo.jpg',
  },
  {
    name: '정목 스님',
    nameEn: 'Ven. Jeongmok',
    field: '전통명상',
    title: '현 성북구 정각사 주지, 유나방송 대표',
    image: '/images/advisors/monk-jungmok.jpg',
  },
  {
    name: '정재승',
    nameEn: 'Jung Jae-seung',
    field: '뇌과학',
    title: '현 KAIST 뇌인지과학과 학과장, 명상과학연구소 연구책임자',
    image: '/images/advisors/jung-jaeseung.jpg',
  },
  {
    name: '채정호',
    nameEn: 'Chae Jeong-ho',
    field: '정신건강',
    title: '현 서울성모병원 정신건강의학과 교수, 대한명상의학회 초대회장',
    image: '/images/advisors/chae-jungho.jpeg',
  },
]

export default function AboutPage() {
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
              About Us
            </motion.span>
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-ink mt-4"
            >
              소개
            </motion.h1>
          </div>
        </section>

        {/* About Content */}
        <section className="py-16 md:py-20 px-5 md:px-12">
          <div className="max-w-[900px] mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="flex flex-col items-center text-center gap-6 md:gap-8"
            >
              <span className="material-symbols-outlined text-3xl md:text-4xl text-mountain-deep">self_improvement</span>
              <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl font-bold leading-snug text-ink">
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
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 md:gap-8 mt-12 md:mt-20">
              {[
                { icon: 'psychology', title: '뇌과학 기반', desc: '과학적으로 검증된 명상 방법론과 뇌과학 연구 결과를 바탕으로 교육합니다.' },
                { icon: 'favorite', title: '마음근력 강화', desc: '일상에서 실천 가능한 명상을 통해 마음의 근력을 단련합니다.' },
                { icon: 'groups', title: '지도자 양성', desc: '전문적인 명상 지도자로 성장할 수 있는 체계적인 교육 과정을 제공합니다.' },
              ].map((value, index) => (
                <motion.div
                  key={value.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="text-center p-6"
                >
                  <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-sky-light/50 flex items-center justify-center">
                    <span className="material-symbols-outlined text-2xl text-mountain-deep">{value.icon}</span>
                  </div>
                  <h3 className="font-bold text-lg text-ink mb-2">{value.title}</h3>
                  <p className="text-light-ink text-sm leading-relaxed">{value.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Faculty Section ── */}
        <section className="py-16 md:py-20 px-5 md:px-12 bg-haze">
          <div className="max-w-[1200px] mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="mb-10 md:mb-16"
            >
              <span className="text-mountain-deep font-bold tracking-wider text-xs md:text-sm uppercase">Our Faculty</span>
              <h2 className="font-serif text-2xl md:text-3xl lg:text-4xl font-bold text-ink mt-3 md:mt-4">패컬티</h2>
              <p className="text-sm md:text-base text-light-ink mt-3 md:mt-4 max-w-xl">
                INZEUM 내면소통연구소의 교육을 이끌어가는 전문 지도자들입니다.
              </p>
            </motion.div>

            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6 lg:gap-8">
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
                      className="object-cover object-top transition-transform duration-700 group-hover:scale-105 grayscale group-hover:grayscale-0"
                      sizes="(max-width: 768px) 50vw, 25vw"
                    />
                  </div>
                  <div className="flex items-center gap-2 mb-0.5">
                    <h3 className="font-bold text-base text-ink group-hover:text-mountain-deep transition-colors">
                      {member.name}
                    </h3>
                    {member.isGuest && (
                      <span className="px-1.5 py-0.5 bg-warm/70 text-ink text-xs font-semibold rounded flex-shrink-0">
                        특별초빙
                      </span>
                    )}
                  </div>
                  <p className="text-sm font-bold text-light-ink">{member.org}</p>
                  <p className="text-xs text-mountain-deep font-semibold mt-1">{member.specialty}</p>
                </motion.article>
              ))}
            </div>
          </div>
        </section>

        {/* ── Advisors Section ── */}
        <section className="py-16 md:py-20 px-5 md:px-12">
          <div className="max-w-[1200px] mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="mb-10 md:mb-16"
            >
              <span className="text-mountain-deep font-bold tracking-wider text-xs md:text-sm uppercase">Advisory Board</span>
              <h2 className="font-serif text-2xl md:text-3xl lg:text-4xl font-bold text-ink mt-3 md:mt-4">자문위원</h2>
              <p className="text-sm md:text-base text-light-ink mt-3 md:mt-4 max-w-xl">
                INZEUM 내면소통연구소의 교육 방향과 발전을 위해 조언해주시는 분들입니다.
              </p>
            </motion.div>

            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 md:gap-6 lg:gap-8">
              {advisors.map((advisor, index) => (
                <motion.article
                  key={advisor.name}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.08 }}
                  className="group"
                >
                  {/* Square photo */}
                  <div className="relative aspect-square overflow-hidden rounded-xl bg-slate-100 mb-4">
                    <Image
                      src={advisor.image}
                      alt={`${advisor.name} 프로필 사진`}
                      fill
                      className="object-cover object-top transition-transform duration-700 group-hover:scale-105"
                      sizes="(max-width: 768px) 50vw, 33vw"
                    />
                    {/* Field badge overlay */}
                    <div className="absolute bottom-0 left-0 right-0 px-3 py-2 bg-gradient-to-t from-black/60 to-transparent">
                      <span className="px-2 py-0.5 bg-mountain-deep/80 text-white text-xs font-semibold rounded">
                        {advisor.field}
                      </span>
                    </div>
                  </div>

                  {/* Text below */}
                  <h3 className="font-bold text-base text-ink group-hover:text-mountain-deep transition-colors mb-1">
                    {advisor.name}
                  </h3>
                  <p className="text-xs text-light-ink mb-1">{advisor.nameEn}</p>
                  <p className="text-sm font-bold text-light-ink leading-relaxed">{advisor.title}</p>
                </motion.article>
              ))}
            </div>
          </div>
        </section>

        <WhatWeDo />
        <History />
      </main>
      <Footer />
    </div>
  )
}
