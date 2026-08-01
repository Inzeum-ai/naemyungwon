import { pageMetadata } from '@/lib/seo'
import PageClient from './PageClient'

export const metadata = pageMetadata({
  title: 'INZEUM 앱',
  description:
    '잠들기 전 마음을 고르는, 수면과 내면소통의 시간. 수면유도명상과 모닝 리포트, 내면AI, 내 목소리 명상을 담은 내면소통연구소의 명상 앱입니다.',
  path: '/app',
})

export default function Page() {
  return <PageClient />
}
