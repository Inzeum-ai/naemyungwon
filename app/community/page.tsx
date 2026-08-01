'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'

const boards = [
  {
    title: '공지사항',
    description: 'INZEUM 내면소통연구소의 새로운 소식과 공지사항을 확인하세요.',
    icon: 'campaign',
    href: '/community/notices',
    color: 'bg-blue-50 text-blue-600',
  },
  {
    title: '묻고 답하기',
    description: '교육과정이나 명상에 대해 궁금한 점을 질문하고 답변을 받으세요.',
    icon: 'help',
    href: '/community/qna',
    color: 'bg-green-50 text-green-600',
  },
  {
    title: '자유게시판',
    description: '수강생들과 자유롭게 이야기를 나누는 공간입니다.',
    icon: 'forum',
    href: '/community/free',
    color: 'bg-purple-50 text-purple-600',
  },
]

export default function CommunityPage() {
  return (
    <div className="relative flex h-auto w-full flex-col">
      <Header />
      <main className="flex flex-col w-full pt-20">
        {/* Retreat Poster */}
        <section className="px-6 md:px-12 pt-10 md:pt-14 bg-gradient-to-b from-sky-light/40 to-cloud">
          <div className="max-w-[1200px] mx-auto flex flex-col items-center">
            <Image
              src="/images/retreat_poster.jpg"
              alt="2026 내면소통명상 여름 리트릿 안내 포스터"
              width={560}
              height={1680}
              className="w-full max-w-[360px] md:max-w-[420px] h-auto rounded-2xl shadow-lg"
              priority
            />
          </div>
        </section>

        {/* Page Header */}
        <section className="py-20 px-6 md:px-12 bg-gradient-to-b from-sky-light/30 to-cloud">
          <div className="max-w-[1200px] mx-auto text-center">
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-mountain-deep font-bold tracking-wider text-sm uppercase"
            >
              Community
            </motion.span>
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold text-ink mt-4"
            >
              커뮤니티
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-light-ink mt-6 max-w-2xl mx-auto"
            >
              INZEUM 내면소통연구소의 수강생 및 수료생 커뮤니티입니다.
            </motion.p>
          </div>
        </section>

        {/* Board Links */}
        <section className="py-20 px-6 md:px-12">
          <div className="max-w-[900px] mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {boards.map((board, index) => (
                <motion.div
                  key={board.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <Link
                    href={board.href}
                    className="block bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-all duration-300 border border-black/5 group h-full"
                  >
                    <div className={`w-14 h-14 rounded-xl ${board.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                      <span className="material-symbols-outlined text-2xl">{board.icon}</span>
                    </div>
                    <h2 className="font-bold text-xl text-ink mb-2 group-hover:text-mountain-deep transition-colors">
                      {board.title}
                    </h2>
                    <p className="text-sm text-light-ink leading-relaxed">
                      {board.description}
                    </p>
                    <div className="mt-4 flex items-center gap-1 text-mountain-deep text-sm font-semibold">
                      바로가기
                      <span className="material-symbols-outlined text-sm group-hover:translate-x-1 transition-transform">arrow_forward</span>
                    </div>
                  </Link>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
