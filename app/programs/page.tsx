import { pageMetadata } from '@/lib/seo'
import PageClient from './PageClient'

export const metadata = pageMetadata({
  title: '프로그램',
  description: '내면소통명상 리트릿과 워크숍 등 내면소통연구소가 운영하는 프로그램을 소개합니다.',
  path: '/programs',
})

export default function Page() {
  return <PageClient />
}
