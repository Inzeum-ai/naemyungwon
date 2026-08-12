import type { MetadataRoute } from 'next'
import { SITE_URL } from '@/lib/seo'

// 내용이 있는 페이지만 등록합니다. "준비 중" 안내만 있는 페이지
// (/resources, /community/free, /community/notices, /community/qna)는
// 얇은 콘텐츠라 색인되면 오히려 손해이므로 각 페이지에서 noindex 처리했습니다.
const ROUTES: Array<{ path: string; priority: number }> = [
  { path: '/', priority: 1.0 },
  { path: '/about', priority: 0.9 },
  { path: '/courses', priority: 0.9 },
  { path: '/programs', priority: 0.8 },
  { path: '/app', priority: 0.8 },
  { path: '/privacy', priority: 0.3 },
  { path: '/terms', priority: 0.3 },
  { path: '/delete-account', priority: 0.3 },
  { path: '/faq', priority: 0.7 },
  { path: '/community', priority: 0.5 },
]

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date()

  return ROUTES.map(({ path, priority }) => ({
    url: `${SITE_URL}${path}`,
    lastModified,
    changeFrequency: 'monthly',
    priority,
  }))
}
