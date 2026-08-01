'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Link from 'next/link'
import Image from 'next/image'

const bgImages = [
  '/images/web_feel1.jpg',
  '/images/web_feel2.jpg',
  '/images/web_feel3.jpg',
  '/images/web_feel4.jpg',
]

export default function Hero() {
  const [currentIndex, setCurrentIndex] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % bgImages.length)
    }, 7000)
    return () => clearInterval(timer)
  }, [])

  return (
    <section className="relative flex min-h-[100svh] md:min-h-[90vh] flex-col justify-center items-center px-5 md:px-12 py-16 md:py-20 overflow-hidden">

      {/* Background Images — slow crossfade slideshow */}
      <AnimatePresence mode="sync">
        <motion.div
          key={currentIndex}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 2.5, ease: 'easeInOut' }}
          className="absolute inset-0 -z-20"
          aria-hidden="true"
        >
          <Image
            src={bgImages[currentIndex]}
            alt=""
            fill
            className="object-cover object-bottom"
            sizes="100vw"
            priority={currentIndex === 0}
          />
        </motion.div>
      </AnimatePresence>

      {/* Overlays: preserve mountain silhouette at bottom, keep text readable at top */}
      <div
        className="absolute inset-0 -z-10 pointer-events-none"
        style={{
          background: 'linear-gradient(to bottom, rgba(240,243,247,0.88) 0%, rgba(240,243,247,0.65) 45%, rgba(240,243,247,0.30) 75%, rgba(240,243,247,0.10) 100%)',
        }}
        aria-hidden="true"
      />

      <div className="max-w-[1200px] w-full mx-auto">
        <div className="flex flex-col lg:flex-row items-center gap-10 lg:gap-16">

          {/* Text Content */}
          <div className="flex-1 flex flex-col items-center lg:items-start text-center lg:text-left gap-5 md:gap-6">
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-mountain-deep font-semibold tracking-widest text-xs md:text-sm uppercase"
            >
              Inner Communication Meditation Institute
            </motion.span>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="w-full flex justify-center lg:justify-start"
            >
              <Image
                src="/images/inzeum_logo.png"
                alt="INZEUM 내면소통연구소"
                width={480}
                height={177}
                className="w-[260px] sm:w-[340px] md:w-[400px] lg:w-[460px] h-auto"
                priority
              />
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-base md:text-lg text-light-ink max-w-lg leading-[1.9]"
            >
              뇌과학 기반 내면소통명상을 체계적으로 연구하고 교육하며,
              사람들의 마음근력을 강화시켜 줄 수 있는 명상 지도자를 양성합니다.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="flex flex-col sm:flex-row gap-3 sm:gap-4 mt-2 w-full sm:w-auto"
            >
              <Link
                href="/courses"
                className="flex items-center justify-center gap-2 h-13 sm:h-14 px-7 sm:px-8 bg-mountain-deep hover:bg-mountain-mid transition-colors text-white rounded-lg font-bold shadow-lg shadow-mountain-deep/20 motion-safe:animate-[breathe_4s_ease-in-out_infinite]"
              >
                <span>과정 알아보기</span>
                <span className="material-symbols-outlined text-sm">arrow_forward</span>
              </Link>
              <Link
                href="/about"
                className="flex items-center justify-center gap-2 h-13 sm:h-14 px-7 sm:px-8 border-2 border-mountain-deep/30 rounded-lg hover:bg-white/60 transition-colors font-bold text-ink backdrop-blur-sm"
              >
                <span>더 알아보기</span>
              </Link>
            </motion.div>
          </div>

          {/* Professor Photo */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex-1 w-full max-w-[320px] sm:max-w-sm md:max-w-md lg:max-w-lg"
          >
            <div className="relative group">
              <div className="absolute inset-0 bg-mountain-deep/10 rounded-2xl transform rotate-3 scale-95 group-hover:rotate-6 transition-transform duration-500 ease-out" />
              <div className="relative aspect-[4/5] overflow-hidden rounded-2xl shadow-2xl">
                <Image
                  src="/images/joohankim.jpg"
                  alt="김주환 교수"
                  fill
                  className="object-cover"
                  sizes="(max-width: 640px) 320px, (max-width: 1024px) 50vw, 600px"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-5 md:p-6 text-white">
                  <h3 className="text-lg md:text-xl font-bold">김주환 교수</h3>
                  <p className="text-xs md:text-sm opacity-90 mt-1">내면소통연구소</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Image indicator dots */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2" aria-hidden="true">
        {bgImages.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrentIndex(i)}
            className={`w-1.5 h-1.5 rounded-full transition-all duration-300 ${
              i === currentIndex ? 'bg-mountain-deep w-4' : 'bg-mountain-deep/30'
            }`}
            aria-label={`배경 이미지 ${i + 1}`}
          />
        ))}
      </div>
    </section>
  )
}
