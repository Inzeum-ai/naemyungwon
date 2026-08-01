import { pageMetadata } from '@/lib/seo'
import PageClient from './PageClient'

export const metadata = pageMetadata({
  title: '교육과정',
  description: '12주 온라인 기초과정부터 심화과정까지, 세계 어디에도 없는 전문가 융합형 명상 지도자 교육과정을 안내합니다.',
  path: '/courses',
})

export default function Page() {
  return <PageClient />
}
