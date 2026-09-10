import SectionNav from '@/components/ui/SectionNav'
import { pageMetadata } from '@/lib/seo'
import PageShell from '@/components/layout/PageShell'
import InkBand from '@/components/ui/InkBand'
import Paper from '@/components/ui/Paper'
import Section from '@/components/ui/Section'
import ListRow from '@/components/ui/ListRow'
import Button from '@/components/ui/Button'
import TextLink from '@/components/ui/TextLink'
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
  { when: '2025 · 10월', title: '그릿 워크숍', sub: '아이의 그릿과 회복탄력성을 키우는 마음근력 교육, 코엑스 컨벤션' },
  { when: '2025 · 6월', title: '내면소통 명상 콘서트', sub: '6월 21–22일, 코엑스 컨벤션 3F 오디토리움' },
  { when: '2025 · 3월', title: '내면소통 명상 콘서트', sub: '3월 1–2일, 코엑스 컨벤션 3F 오디토리움' },
  { when: '2025', title: '기초과정 1·2·3기', sub: '4,500명 이상 수료' },
]

export default function NewsPage() {
  return (
    <PageShell reading="hanji">
      <InkBand
        title="다음 모집 소식을 먼저 전합니다."
        lede="유튜브 커뮤니티와 이메일로 모집과 행사 안내를 드립니다. 이 페이지에는 지나온 걸음을 기록합니다."
        painting={{ src: '/images/sumuk/synthetic-geese-on-ink-v2.webp', mobileSrc: '/images/sumuk/synthetic-geese-mobile-v2.webp', position: 'center bottom' }}
      />

      <Paper>
      <SectionNav items={[{ href: "#channels", label: "안내 채널" }, { href: "#timeline", label: "지난 소식" }]} />
      <Section id="foundation-5" title="2026년 9월 16일 개강" hairline={false}>
        <TextLink href="https://cafe.naver.com/joohankimlab/12526">5기 모집 안내</TextLink>
      </Section>
      <Section id="channels" title="안내를 받으려면" width="content" hairline={false}>
        <div className="hairline-t">
          <ListRow href={YOUTUBE_URL} external title="유튜브 커뮤니티" subtitle="모집 공고와 라이브 강연 안내가 먼저 올라옵니다" />
          <ListRow href={`mailto:${COMPANY.serviceEmail}`} external title={COMPANY.serviceEmail} subtitle="과정, 프로그램, 앱에 관한 문의" />
        </div>
      </Section>

      <Section id="timeline" title="지난 소식">
        <div className="hairline-t">
          {timeline.map((t) => (
            <ListRow key={`${t.when}-${t.title}`} lead={t.when} title={t.title} subtitle={t.sub} />
          ))}
        </div>
        <div className="mt-10">
          <Button href="/about#history" variant="outline" icon="arrow-right">
            연혁 전체 보기
          </Button>
        </div>
      </Section>
      </Paper>
    </PageShell>
  )
}
