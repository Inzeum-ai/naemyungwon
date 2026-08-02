import { pageMetadata } from '@/lib/seo'
import PageClient from './PageClient'

export const metadata = pageMetadata({
  title: 'INZEUM 앱',
  description:
    '내면소통연구소가 만드는 명상 앱입니다. 명상 라이브러리, 내면AI, 내 목소리 명상, 마음근력 검사를 통해 교육원에서 배우는 내면소통명상을 매일의 수련으로 이어갑니다.',
  path: '/app',
})

export default function Page() {
  return <PageClient />
}
