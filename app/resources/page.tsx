'use client'

import { motion } from 'framer-motion'
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import ComingSoon from '@/components/ui/ComingSoon'

export default function ResourcesPage() {
  return (
    <div className="relative flex h-auto w-full flex-col">
      <Header />
      <main className="flex flex-col w-full pt-20">
        {/* Page Header */}
        <section className="py-20 px-6 md:px-12 bg-gradient-to-b from-sky-light/30 to-cloud">
          <div className="max-w-[1200px] mx-auto text-center">
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-mountain-deep font-bold tracking-wider text-sm uppercase"
            >
              Resources
            </motion.span>
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold text-ink mt-4"
            >
              자료실
            </motion.h1>
          </div>
        </section>

        <ComingSoon 
          title="자료실" 
          subtitle="명상 관련 자료와 학습 콘텐츠를 준비하고 있습니다."
        />
      </main>
      <Footer />
    </div>
  )
}
