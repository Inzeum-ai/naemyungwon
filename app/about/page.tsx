import { pageMetadata } from '@/lib/seo'
import PageClient from './PageClient'

export const metadata = pageMetadata({
  title: '연구소 소개',
  description: '내면소통연구소를 이끄는 김주환 교수와 패컬티, 자문위원단을 소개합니다.',
  path: '/about',
})

export default function Page() {
  return <PageClient />
}
