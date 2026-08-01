'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'

interface ComingSoonProps {
  title: string
  subtitle?: string
}

export default function ComingSoon({ title, subtitle }: ComingSoonProps) {
  return (
    <div className="min-h-[60vh] flex flex-col items-center justify-center px-6 py-20">
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className="text-center"
      >
        <div className="w-24 h-24 mx-auto mb-8 rounded-full bg-sky-light/50 flex items-center justify-center">
          <span className="material-symbols-outlined text-5xl text-mountain-deep">construction</span>
        </div>
        
        <h2 className="font-serif text-3xl md:text-4xl font-bold text-ink mb-4">
          준비중입니다
        </h2>
        
        <p className="text-light-ink mb-2 text-lg">
          {title} 페이지는 현재 준비 중입니다.
        </p>
        
        {subtitle && (
          <p className="text-light-ink/70 text-sm mb-8">
            {subtitle}
          </p>
        )}
        
        <p className="text-light-ink mb-8">
          곧 더 좋은 콘텐츠로 찾아뵙겠습니다.
        </p>

        <Link
          href="/"
          className="inline-flex items-center gap-2 px-6 py-3 bg-mountain-deep text-white rounded-lg font-bold hover:bg-mountain-mid transition-colors"
        >
          <span className="material-symbols-outlined text-sm">home</span>
          홈으로 돌아가기
        </Link>
      </motion.div>
    </div>
  )
}
