'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'

const advisors = [
  {
    name: '권오현',
    nameEn: 'Kwon Oh-hyun',
    role: '자문위원',
    image: '/images/advisors/권오현.JPG',
  },
  {
    name: '김서준',
    nameEn: 'Kim Seo-jun',
    role: '자문위원',
    image: '/images/advisors/김서준.jpg',
  },
  {
    name: '김완두',
    nameEn: 'Kim Wan-du',
    role: '자문위원',
    image: '/images/advisors/김완두.jpg',
  },
  {
    name: '김은주',
    nameEn: 'Kim Eun-ju',
    role: '자문위원',
    image: '/images/advisors/김은주.jpeg',
  },
  {
    name: '나군호',
    nameEn: 'Na Gun-ho',
    role: '자문위원',
    image: '/images/advisors/나군호.jpeg',
  },
  {
    name: '변찬우',
    nameEn: 'Byun Chan-woo',
    role: '자문위원',
    image: '/images/advisors/변찬우.jpeg',
  },
  {
    name: '정목 스님',
    nameEn: 'Ven. Jeongmok',
    role: '자문위원',
    image: '/images/advisors/정목스님.jpg',
  },
  {
    name: '정재승',
    nameEn: 'Jung Jae-seung',
    role: '자문위원',
    image: '/images/advisors/정재승.jpg',
  },
  {
    name: '채정호',
    nameEn: 'Chae Jeong-ho',
    role: '자문위원',
    image: '/images/advisors/채정호.jpeg',
  },
]

export default function Advisors() {
  return (
    <section className="py-24 px-6 md:px-12 bg-white" id="advisors">
      <div className="max-w-[1200px] mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.8 }}
          className="mb-16"
        >
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4">
            <div>
              <span className="text-mountain-deep font-bold tracking-wider text-sm uppercase">
                Advisory Board
              </span>
              <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-ink mt-4">
                자문위원
              </h2>
              <p className="text-light-ink mt-4 max-w-xl">
                INZEUM 내면소통연구소의 교육 방향과 발전을 위해 조언해주시는 분들입니다.
              </p>
            </div>
          </div>
        </motion.div>

        {/* Advisors Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 md:gap-8">
          {advisors.map((advisor, index) => (
            <motion.article
              key={advisor.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
              className="group text-center"
            >
              <div className="relative aspect-square overflow-hidden rounded-full bg-slate-100 mb-4 mx-auto w-32 h-32 md:w-40 md:h-40">
                <Image
                  src={advisor.image}
                  alt={`${advisor.name} 프로필 사진`}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                  sizes="(max-width: 768px) 128px, 160px"
                />
                <div className="absolute inset-0 bg-mountain-deep/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-full" />
              </div>
              <div>
                <h3 className="font-bold text-base text-ink group-hover:text-mountain-deep transition-colors">
                  {advisor.name}
                </h3>
                <p className="text-xs text-light-ink">{advisor.nameEn}</p>
                <p className="text-xs text-mountain-mid font-semibold mt-1">{advisor.role}</p>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  )
}
