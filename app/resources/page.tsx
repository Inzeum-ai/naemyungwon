import BookShelf from '@/components/ui/BookShelf'
import ChannelStory from '@/components/ui/ChannelStory'
import SectionNav from '@/components/ui/SectionNav'
import { pageMetadata } from '@/lib/seo'
import PageShell from '@/components/layout/PageShell'
import InkBand from '@/components/ui/InkBand'
import Paper from '@/components/ui/Paper'
import Section from '@/components/ui/Section'
import ListRow from '@/components/ui/ListRow'
import { YOUTUBE_URL } from '@/lib/nav'

export const metadata = pageMetadata({
  title: '책과 강의',
  description: '김주환 교수의 저서와 유튜브 강의, 그리고 INZEUM 앱. 내면소통명상을 시작하는 곳입니다.',
  path: '/resources',
})

export default function ResourcesPage() {
  return (
    <PageShell reading="hanji">
      <InkBand
        title="내면소통명상은 책과 강의에서 시작되었습니다."
        lede="과정에 앞서, 또는 과정과 함께 읽고 들을 수 있는 것들입니다."
      />

      <Paper>
      <SectionNav items={[{ href: "#books", label: "저서" }, { href: "#lectures", label: "강의" }]} />
      <Section id="books" title="저서" hairline={false}>
        <BookShelf />
      </Section>
      <ChannelStory />
      <Section id="practice" title="수련으로 이어가기">
        <div className="hairline-t">
          <ListRow
            href={YOUTUBE_URL}
            external
            title="김주환의 내면소통 유튜브"
            subtitle="매주 일요일 밤 8시 라이브 강의. 최신 공개 수치는 위의 채널 안내에서 확인할 수 있습니다."
          />
          <ListRow href="/courses#foundation" title="기초과정" subtitle="12주 온라인. 김주환 교수가 직접 안내하는 내면소통명상 입문" />
          <ListRow href="/app" title="INZEUM 앱" subtitle="교육원에서 배운 수련을 매일 밤 이어가는 수면·명상 앱" />
        </div>
      </Section>
      </Paper>
    </PageShell>
  )
}
