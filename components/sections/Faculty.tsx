'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'

const faculty = [
  {
    name: '김지훈',
    nameEn: 'Kim Ji-hoon',
    role: '패컬티',
    image: '/images/faculty/김지훈.jpg',
  },
  {
    name: '김주현',
    nameEn: 'Kim Ju-hyun',
    role: '패컬티',
    image: '/images/faculty/김주현.jpg',
  },
  {
    name: '김지민',
    nameEn: 'Kim Ji-min',
    role: '패컬티',
    image: '/images/faculty/김지민.jpg',
  },
  {
    name: '브랜든 최',
    nameEn: 'Brandon Choi',
    role: '패컬티',
    image: '/images/faculty/브랜든최.jpg',
  },
  {
    name: '이연',
    nameEn: 'Lee Yeon',
    role: '패컬티',
    image: '/images/faculty/이연.jpg',
  },
  {
    name: '이유영',
    nameEn: 'Lee Yu-young',
    role: '패컬티',
    image: '/images/faculty/이유영.jpg',
  },
  {
    name: '강수원',
    nameEn: 'Kang Su-won',
    role: '패컬티',
    image: '/images/faculty/강수원.jpg',
  },
]

export default function Faculty() {
  return (
    <section className="py-24 px-6 md:px-12" id="faculty">
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
                Our Faculty
              </span>
              <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-ink mt-4">
                패컬티
              </h2>
              <p className="text-light-ink mt-4 max-w-xl">
                INZEUM 내면소통연구소의 교육을 이끌어가는 전문 지도자들입니다.
              </p>
            </div>
          </div>
        </motion.div>

        {/* Faculty Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 md:gap-8">
          {faculty.map((member, index) => (
            <motion.article
              key={member.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group"
            >
              <div className="relative aspect-[3/4] overflow-hidden rounded-xl bg-slate-100 mb-4">
                <Image
                  src={member.image}
                  alt={`${member.name} 프로필 사진`}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105 grayscale hover:grayscale-0"
                  sizes="(max-width: 768px) 50vw, (max-width: 1200px) 33vw, 25vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
              <div>
                <h3 className="font-bold text-lg text-ink group-hover:text-mountain-deep transition-colors">
                  {member.name}
                </h3>
                <p className="text-sm text-light-ink">{member.nameEn}</p>
                <p className="text-xs text-mountain-mid font-semibold mt-1">{member.role}</p>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  )
}
