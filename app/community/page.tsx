import { pageMetadata } from '@/lib/seo'
import PageClient from './PageClient'

export const metadata = pageMetadata({
  title: '커뮤니티',
  description: '내면소통명상 수련자들의 공지사항, 자유게시판, 묻고 답하기 공간입니다.',
  path: '/community',
})

export default function Page() {
  return <PageClient />
}
