import { pageMetadata } from '@/lib/seo'
import PageClient from './PageClient'

export const metadata = pageMetadata({
  title: '자료실',
  description: '명상 관련 자료와 학습 콘텐츠를 준비하고 있습니다.',
  path: '/resources',
  index: false, // 준비 중 안내만 있는 페이지
})

export default function Page() {
  return <PageClient />
}
