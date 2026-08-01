'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'

export default function NoticesPage() {
  return (
    <div className="relative flex h-auto w-full flex-col">
      <Header />
      <main className="flex flex-col w-full pt-20">
        {/* Page Header */}
        <section className="py-16 px-6 md:px-12 bg-gradient-to-b from-sky-light/30 to-cloud">
          <div className="max-w-[1200px] mx-auto">
            <Link href="/community" className="inline-flex items-center gap-1 text-sm text-mountain-deep font-semibold mb-4 hover:underline">
              <span className="material-symbols-outlined text-sm">arrow_back</span>
              커뮤니티
            </Link>
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="font-serif text-3xl md:text-4xl font-bold text-ink"
            >
              공지사항
            </motion.h1>
          </div>
        </section>

        {/* Coming Soon */}
        <section className="py-20 px-6 md:px-12">
          <div className="max-w-[800px] mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
            >
              <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-blue-50 flex items-center justify-center">
                <span className="material-symbols-outlined text-4xl text-blue-600">campaign</span>
              </div>
              <h2 className="font-serif text-2xl md:text-3xl font-bold text-ink mb-4">
                준비중입니다
              </h2>
              <p className="text-light-ink mb-8">
                공지사항 게시판이 곧 오픈됩니다.<br />
                INZEUM 내면소통연구소의 새로운 소식을 기다려주세요.
              </p>
            </motion.div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
