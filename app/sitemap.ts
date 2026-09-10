import type { MetadataRoute } from 'next'
import { SITE_URL } from '@/lib/seo'

const ROUTES: Array<{ path: string; priority: number }> = [
  { path: '/', priority: 1.0 },
  { path: '/courses', priority: 0.9 },
  { path: '/about', priority: 0.9 },
  { path: '/programs', priority: 0.8 },
  { path: '/app', priority: 0.8 },
  { path: '/space', priority: 0.7 },
  { path: '/faq', priority: 0.7 },
  { path: '/resources', priority: 0.6 },
  { path: '/news', priority: 0.5 },
  { path: '/privacy', priority: 0.3 },
  { path: '/terms', priority: 0.3 },
  { path: '/delete-account', priority: 0.3 },
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
