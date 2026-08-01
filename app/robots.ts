import type { MetadataRoute } from 'next'
import { SITE_URL } from '@/lib/seo'

export default function robots(): MetadataRoute.Robots {
  // staging(dev 브랜치)과 PR 프리뷰는 프로덕션과 같은 내용을 서빙합니다.
  // 색인되면 inzeum.com 과 중복 콘텐츠가 되므로 프로덕션에서만 크롤링을 허용합니다.
  const isProduction = process.env.VERCEL_ENV === 'production'

  if (!isProduction) {
    return {
      rules: { userAgent: '*', disallow: '/' },
    }
  }

  return {
    rules: {
      userAgent: '*',
      allow: '/',
    },
    sitemap: `${SITE_URL}/sitemap.xml`,
  }
}
