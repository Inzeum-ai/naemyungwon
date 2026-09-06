import { pageMetadata } from '@/lib/seo'
import PageShell from '@/components/layout/PageShell'
import PageHeader from '@/components/ui/PageHeader'
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
    <PageShell ground="hanji">
      <PageHeader title="책과 강의" lede="내면소통명상은 책과 강의에서 시작되었습니다. 과정에 앞서, 또는 과정과 함께 읽고 들을 수 있습니다." />

      <Section id="books" title="저서">
        <div className="hairline-t">
          <ListRow title="내면소통" subtitle="김주환. 내면소통명상의 원리와 마음근력 훈련의 근거를 담은 책" />
          <ListRow title="그릿" subtitle="김주환. 끝까지 해내는 힘, 자기동기력에 관한 책" />
          <ListRow title="회복탄력성" subtitle="김주환. 시련을 이겨 내는 마음의 힘에 관한 책" />
        </div>
      </Section>

      <Section id="lectures" title="강의">
        <div className="hairline-t">
          <ListRow
            href={YOUTUBE_URL}
            external
            title="김주환의 내면소통 유튜브"
            subtitle="35만 명 이상이 구독하는 채널. 매주 밤 8시 라이브 강연"
          />
          <ListRow href="/courses#foundation" title="기초과정" subtitle="12주 온라인. 김주환 교수가 직접 안내하는 내면소통명상 입문" />
          <ListRow href="/app" title="INZEUM 앱" subtitle="교육원에서 배운 수련을 매일 밤 이어가는 수면·명상 앱" />
        </div>
      </Section>
    </PageShell>
  )
}
