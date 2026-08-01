import { pageMetadata } from '@/lib/seo'
import PageClient from './PageClient'

export const metadata = pageMetadata({
  title: '자유게시판',
  description: '내면소통명상 수련자들이 자유롭게 이야기를 나누는 공간입니다.',
  path: '/community/free',
  index: false, // 준비 중 안내만 있는 페이지
})

export default function Page() {
  return <PageClient />
}
