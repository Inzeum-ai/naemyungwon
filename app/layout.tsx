import type { Metadata } from 'next'
import '@/styles/globals.css'

export const metadata: Metadata = {
  title: 'INZEUM 내면소통연구소 | Naemyungwon',
  description: '뇌과학 기반 내면소통명상을 체계적으로 교육하여 사람들의 마음근력을 강화시켜줄 수 있는 명상 지도자를 양성합니다.',
  keywords: ['명상', '내면소통', '마음근력', '명상교육', '명상지도자', 'meditation', 'mindfulness'],
  authors: [{ name: 'INZEUM 내면소통연구소' }],
  openGraph: {
    title: 'INZEUM 내면소통연구소 | Naemyungwon',
    description: '뇌과학 기반 내면소통명상을 체계적으로 교육하여 사람들의 마음근력을 강화시켜줄 수 있는 명상 지도자를 양성합니다.',
    type: 'website',
    locale: 'ko_KR',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ko">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Manrope:wght@200..800&family=Playfair+Display:ital,wght@0,400..900;1,400..900&family=Noto+Serif+KR:wght@300;400;500;600&family=Noto+Sans+KR:wght@300;400;500;700&display=swap"
          rel="stylesheet"
        />
        <link 
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200" 
          rel="stylesheet" 
        />
      </head>
      <body className="bg-cloud text-ink font-display antialiased overflow-x-hidden selection:bg-primary/30 selection:text-primary">
        <a 
          href="#main-content" 
          className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-50 focus:px-4 focus:py-2 focus:bg-mountain-deep focus:text-white focus:rounded"
        >
          본문으로 건너뛰기
        </a>
        {children}
      </body>
    </html>
  )
}
