import { pageMetadata } from '@/lib/seo'
import PageClient from './PageClient'

export const metadata = pageMetadata({
  title: '묻고 답하기',
  description: '내면소통명상에 대한 질문과 답변을 나누는 공간입니다.',
  path: '/community/qna',
  index: false, // 준비 중 안내만 있는 페이지
})

export default function Page() {
  return <PageClient />
}
