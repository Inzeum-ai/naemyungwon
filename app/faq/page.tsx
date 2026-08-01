import { pageMetadata } from '@/lib/seo'
import PageClient from './PageClient'

export const metadata = pageMetadata({
  title: '자주 묻는 질문',
  description: '교육과정 신청, 수강 방식, 수료 기준 등 내면소통명상교육원에 대해 가장 많이 묻는 질문을 모았습니다.',
  path: '/faq',
})

export default function Page() {
  return <PageClient />
}
