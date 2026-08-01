import { pageMetadata } from '@/lib/seo'
import PageClient from './PageClient'

export const metadata = pageMetadata({
  title: '공지사항',
  description: '내면소통연구소의 공지사항을 확인하실 수 있습니다.',
  path: '/community/notices',
  index: false, // 준비 중 안내만 있는 페이지
})

export default function Page() {
  return <PageClient />
}
