import type { Metadata, Viewport } from 'next'

/** 한지 ground pages: the browser chrome matches the paper, not the ink. */
export const hanjiViewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: '#FAF7F1',
}

export const SITE_NAME = 'INZEUM 인지엄 · 내면소통연구소'
export const SITE_URL = 'https://inzeum.com'
export const SITE_DESCRIPTION =
  '명상하는 나라를 만드는 인지엄. 내면소통명상 교육과 수행공동체, 개인화 AI와 공간을 연결해 수련을 일상으로 이어갑니다.'

// 카카오톡·페이스북 공유 썸네일. public/og.jpg 한 장을 모든 페이지가 공유합니다.
export const OG_IMAGE = {
  url: '/og.jpg',
  width: 1200,
  height: 630,
  alt: `${SITE_NAME} · 내면소통명상교육원 (Joohan Kim Lab)`,
}

type PageSeo = {
  title: string
  description: string
  path: string
  /** false 면 검색엔진 색인에서 제외합니다 ("준비 중" 페이지용). */
  index?: boolean
}

/**
 * 페이지별 metadata 를 만듭니다.
 *
 * 주의: Next 는 자식 라우트가 openGraph 를 직접 선언하면 부모의 openGraph 를
 * 통째로 덮어씁니다. og:image 가 조용히 사라지는 걸 막기 위해 반드시 이 헬퍼를
 * 거쳐 metadata 를 만드세요.
 */
export function pageMetadata({ title, description, path, index = true }: PageSeo): Metadata {
  return {
    title,
    description,
    alternates: { canonical: path },
    robots: { index, follow: true },
    openGraph: {
      title: `${title} | ${SITE_NAME}`,
      description,
      siteName: SITE_NAME,
      url: path,
      type: 'website',
      locale: 'ko_KR',
      images: [OG_IMAGE],
    },
  }
}
