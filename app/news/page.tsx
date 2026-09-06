import { pageMetadata } from '@/lib/seo'
import PageShell from '@/components/layout/PageShell'
import PageHeader from '@/components/ui/PageHeader'
import Section from '@/components/ui/Section'
import ListRow from '@/components/ui/ListRow'
import Button from '@/components/ui/Button'
import { COMPANY } from '@/lib/company'
import { YOUTUBE_URL } from '@/lib/nav'

export const metadata = pageMetadata({
  title: '소식',
  description: '내면소통연구소의 모집 안내와 행사 소식. 현재 안내는 이메일과 유튜브 채널을 통해 드립니다.',
  path: '/news',
})

const timeline = [
  { when: '2026 · 8월', title: 'INZEUM 앱 베타를 열었습니다', sub: '심화과정 1기와 일부 이용자를 대상으로 iOS와 Android에서' },
  { when: '2026 · 8월', title: '심화과정 1기 연수교육', sub: '5박6일, 카시아 속초' },
  { when: '2026 · 7월', title: '여름 리트릿', sub: '3박4일, 오대산 자연명상마을' },
  { when: '2026 · 3월', title: '심화과정 1기 시작', sub: '200명 정원에 500명 이상이 지원했습니다' },
  { when: '2026', title: '내면소통명상교육원(내명원) 설립', sub: '10개월 200시간 지도자 자격 과정 개설' },
  { when: '2025', title: '기초과정 1·2·3기', sub: '4,500명 이상 수료' },
]

export default function NewsPage() {
  return (
    <PageShell ground="hanji">
      <PageHeader title="소식" lede="모집과 행사 안내는 지금은 이메일과 유튜브 채널에서 드립니다. 이 페이지에는 지난 소식을 기록합니다." />

      <Section id="channels" title="안내를 받으려면" width="content">
        <div className="hairline-t">
          <ListRow href={YOUTUBE_URL} external title="유튜브 커뮤니티" subtitle="모집 공고와 라이브 강연 안내가 먼저 올라옵니다" />
          <ListRow href={`mailto:${COMPANY.serviceEmail}`} external title={COMPANY.serviceEmail} subtitle="과정, 프로그램, 앱에 관한 문의" />
        </div>
      </Section>

      <Section id="timeline" title="지난 소식">
        <div className="hairline-t">
          {timeline.map((t) => (
            <ListRow key={t.title} lead={t.when} title={t.title} subtitle={t.sub} />
          ))}
        </div>
        <div className="mt-10">
          <Button href="/about#history" variant="outline" icon="arrow-right">
            연혁 전체 보기
          </Button>
        </div>
      </Section>
    </PageShell>
  )
}
