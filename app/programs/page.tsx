import ScrollImage from '@/components/ui/ScrollImage'
import TextLink from '@/components/ui/TextLink'
import CommunityPhoto from '@/components/ui/CommunityPhoto'
import SectionNav from '@/components/ui/SectionNav'
import Image from 'next/image'
import { pageMetadata } from '@/lib/seo'
import PageShell from '@/components/layout/PageShell'
import InkBand from '@/components/ui/InkBand'
import Paper from '@/components/ui/Paper'
import Section from '@/components/ui/Section'
import ListRow from '@/components/ui/ListRow'
import Facts from '@/components/ui/Facts'
import Button from '@/components/ui/Button'
import Poster from '@/components/ui/Poster'
import { COMPANY } from '@/lib/company'

export const metadata = pageMetadata({
  title: '프로그램',
  description:
    '신년명상회, 내면소통 명상 콘서트, 여름 리트릿, 존2 달리기. 강의실 밖에서 이어지는 내면소통연구소의 수련 모임을 안내합니다.',
  path: '/programs',
})

const rhythm = [
  { when: '1월', title: '신년명상회', sub: '한 해를 여는 명상 모임' },
  { when: '3월 · 6월', title: '내면소통 명상 콘서트', sub: '코엑스 오디토리움. 1,000명 이상이 함께한 현장 명상' },
  { when: '7월', title: '여름 리트릿', sub: '3박4일 합숙. 교수님이 직접 이끄는 수련' },
  { when: '8월', title: '심화과정 연수교육', sub: '5박6일. 심화과정 안의 집중 훈련' },
  { when: '10월', title: '존2 달리기', sub: '한강공원에서 함께 뛰는 운동 모임' },
  { when: '10월', title: '그릿 워크숍', sub: '아이의 그릿과 회복탄력성을 키우는 마음근력 교육, 코엑스' },
  { when: '2026', title: '어린이·청소년 마음근력 클럽', sub: '2026년 출범' },
]

export default function ProgramsPage() {
  return (
    <PageShell reading="hanji">
      <InkBand
        title="함께하면, 수련은 더 오래 이어집니다."
        lede="자연에 머무는 리트릿, 서로의 안내를 배우는 연수, 함께 고요해지는 명상 콘서트. 인지움의 수련은 사람과 장소를 만납니다."
        painting={{ src: '/images/sumuk/synthetic-pine-on-ink-v2.webp', mobileSrc: '/images/sumuk/synthetic-pine-mobile-v2.webp', position: 'center 70%' }}
      />

      <Paper>
      <SectionNav items={[{ href: "#retreat", label: "여름 리트릿" }, { href: "#training", label: "8월 연수교육" }, { href: "#coex", label: "명상 콘서트" }, { href: "#moments", label: "수행공동체" }, { href: "#rhythm", label: "다른 모임" }]} />
      <Section id="retreat" title="숲에 머물고, 함께 고요해지는 시간." aside={<p className="text-meta text-muted">2026년 7월 9일–12일 · 지난 프로그램</p>}>
        <ScrollImage src="/images/community/woljeongsa-retreat-2026.webp" alt="2026 여름 리트릿 참가자들이 월정사 문 앞에 함께 모인 모습" caption="2026 여름 리트릿 · 월정사 단체사진" source="https://cafe.naver.com/joohankimlab/12320" className="mb-12" />
        <div className="event-days mb-12"><div><span>몸</span><h3>호흡과 감각</h3><p>호흡과 내부감각, 움직임으로 지금의 몸을 알아차립니다.</p></div><div><span>자연</span><h3>느린 걸음</h3><p>걷기 명상과 자연 속 수련으로 일상의 속도를 내려놓습니다.</p></div><div><span>사람</span><h3>함께하는 시간</h3><p>같은 공간에서 수련하고, 경험을 나누는 공동체를 만납니다.</p></div></div>
        <div className="grid gap-10 md:grid-cols-[minmax(0,7fr)_minmax(0,5fr)] md:gap-16">
          <div>
            <Facts
              facts={[
                { label: '기간', value: '3박4일, 2026년 7월 9일–12일' },
                { label: '장소', value: '오대산 자연명상마을' },
                { label: '지도', value: '김주환 교수와 패컬티' },
                {
                  label: '내용',
                  value: '교수님이 직접 이끄는 명상, 수면과 뇌과학 강의, 호흡·내부감각·걷기 명상, 패컬티 세션',
                },
                { label: '지난 해', value: '2025년 8월 4박5일, 정선 파크로쉬' },
              ]}
            />
            <p className="mt-6 max-w-measure text-body text-sub">
              리트릿은 쉼과 몸의 감각, 자연과 공동체 속에서 자신의 수련을 이어 가는 시간입니다. 다음 리트릿의
              모집은 소식과 이메일로 안내합니다.
            </p>
          </div>
          <figure className="md:justify-self-end">
            <a
              href="/images/retreat_poster.jpg"
              target="_blank"
              rel="noopener noreferrer"
              className="relative block aspect-[2/5] w-full max-w-[300px] overflow-hidden rounded-md border border-line-soft"
              aria-label="2026 여름 리트릿 포스터 전체 보기 (새 창)"
            >
              <Image
                src="/images/retreat_poster.jpg"
                alt="2026 내면소통명상 여름 리트릿 포스터 — 7월 9일부터 12일, 오대산 자연명상마을"
                fill
                sizes="(max-width: 768px) 100vw, 300px"
                className="object-cover object-top"
              />
            </a>
            <figcaption className="mt-3 text-meta text-muted">포스터를 누르면 전체를 볼 수 있습니다.</figcaption>
          </figure>
        </div>
      </Section>

      <Section id="training" title="수련자에서 안내자로, 바다 앞의 여섯 날." aside={<p className="text-meta text-muted">8월 연수교육 · 2026년 8월 26일–31일</p>} width="page">
        <div className="event-intro"><ScrollImage src="/images/community/somatic-ribbon-practice.webp" alt="리본의 움직임을 따라 감각을 익히는 수련 참가자들" width={1000} height={750} caption="센터리듬 수련 · 심화과정 커뮤니티 기록 (8월 연수 현장 사진은 아닙니다)" source="https://cafe.naver.com/joohankimlab/12939" /><div><h3>내가 경험한 명상을,<br />나의 언어로.</h3><p>다섯 달의 배움을 돌아보고, 새로운 사람 앞에서 명상을 안내하는 집중 연수입니다. 몸의 감각을 읽고, 목소리와 언어를 다듬고, 나만의 명상으로 연결하는 프로그램으로 구성했습니다.</p></div></div>
        <div className="grid gap-10 md:grid-cols-[minmax(0,5fr)_minmax(0,7fr)] md:gap-16">
          <Facts
            facts={[
              { label: '기간', value: '5박6일, 2026년 8월 26일–31일' },
              { label: '장소', value: '카시아 속초' },
              { label: '대상', value: '심화과정 1기' },
            ]}
          />
          <div className="max-w-measure space-y-5 text-body text-copy">
            <p>
              심화과정 커리큘럼 안에 있는 합숙 집중 훈련입니다. 움직임 명상, 내부감각과 고유감각, 명상 안내
              실습, 교수님과 패컬티의 세션, 그리고 피드백으로 구성됩니다.
            </p>
            <Button href="/courses#advanced" variant="outline" icon="arrow-right">
              심화과정 보기
            </Button>
          </div>
        </div>
        <div className="event-days">{[
          ['8.26 · 방향','나는 무엇을 안내하는가','지금까지의 수련을 돌아보고, 연수에서 얻고 싶은 것을 정리합니다.'],
          ['8.27 · 감각','몸의 신호를 읽는 연습','고유감각과 내부감각을 알아차리고 명상 언어로 풀어봅니다.'],
          ['8.28 · 안내','안정적으로 타인 앞에 서기','호흡과 목소리, 긴장 패턴을 관찰하며 안내를 실습합니다.'],
          ['8.29 · 격관','잘하려는 나를 바라보기','연기와 관찰의 연습으로 생각과 감정에서 거리를 둡니다.'],
          ['8.30 · 자타긍정','연민과 존중을 담기','자신과 타인을 긍정하는 태도를 명상 안내에 연결합니다.'],
          ['8.31 · 통합','나만의 명상으로','경험한 원리를 하나의 수련으로 설계하고 다음 배움으로 이어갑니다.'],
        ].map(([day,title,body])=><div key={day}><span>{day}</span><h3>{title}</h3><p>{body}</p></div>)}</div>
        <p className="mt-4 text-meta text-muted">연수 프로그램의 주제와 구성 요약입니다.</p>
      </Section>

      <Section id="coex" title="코엑스에서" aside={<p className="text-meta text-muted">2025년 · 코엑스 컨벤션 3F 오디토리움</p>}>
        <CommunityPhoto src="/images/community/concert-auditorium-2025.webp" alt="2025년 내면소통 명상 콘서트 무대와 객석" caption="2025 내면소통 명상 콘서트" source="https://cafe.naver.com/joohankimlab/7359" width={1600} height={1200} className="mb-12 max-w-[1100px]" sizes="(max-width: 767px) 100vw, 1100px" />
        <div className="grid gap-10 md:grid-cols-[minmax(0,7fr)_minmax(0,5fr)] md:gap-16">
          <div>
            <Facts
              facts={[
                { label: '명상 콘서트', value: '2025년 3월 1–2일과 6월 21–22일. 1,000명 이상이 함께한 이틀의 현장 명상' },
                {
                  label: '그릿 워크숍',
                  value: '2025년 10월 18–19일. 아이의 그릿과 회복탄력성을 키우는 마음근력 교육. 참가자 전원에게 어린이·청소년 마음근력 검사 제공',
                },
                { label: '주최', value: '내면소통연구소 · 주관 주식회사 HeKe' },
              ]}
            />
            <p className="mt-6 max-w-measure text-body text-sub">
              이른 봄과 초여름, 일상에서 빠져나와 지금 이대로, 있는 그대로의 온전함 속으로 향하는 이틀의 명상.
              가을에는 어린이·청소년을 위한 마음근력 워크숍이 같은 자리에서 열렸습니다.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-4 md:max-w-[500px] md:justify-self-end md:gap-5">
            <Poster
              src="/images/posters/concert-2025-03.webp"
              alt="2025 김주환의 내면소통 명상 콘서트 포스터 — 3월 1일부터 2일, 코엑스 컨벤션 3F 오디토리움"
              caption="명상 콘서트 · 2025년 3월"
            />
            <Poster
              src="/images/posters/grit-workshop-2025-10.webp"
              alt="아이의 그릿과 회복탄력성을 키워주는 김주환의 마음근력 교육 워크샵 포스터 — 2025년 10월 18일부터 19일, 코엑스 컨벤션 3F 오디토리움"
              caption="그릿 워크숍 · 2025년 10월"
            />
          </div>
        </div>
      </Section>

      <Section id="rhythm" title="수련이 만나는 여러 장면" lede="그동안 이어온 모임과 프로그램입니다. 각 회차의 모집과 일정은 소식에서 안내합니다." hairline={false}>
        <div className="hairline-t">
          {rhythm.map((r) => (
            <ListRow key={r.title} lead={r.when} title={r.title} subtitle={r.sub} />
          ))}
        </div>
      </Section>

      <Section id="moments" title="수행공동체, 일상에서 다시 만납니다." lede="리트릿과 존2운동 커뮤니티에 남겨진 사진들입니다. 각 사진에서 원문 기록을 볼 수 있습니다.">
        <div className="community-moments">
          <CommunityPhoto src="/images/community/retreat-room.webp" alt="산이 보이는 창가에 명상 방석과 매트가 놓인 수련 공간" caption="리트릿의 수련 공간" source="https://cafe.naver.com/joohankimlab/8157" width={1280} height={1525} />
          <div className="space-y-8 md:pt-16">
            <CommunityPhoto src="/images/community/odaesan-path.webp" alt="나무 사이로 이어진 오대산 명상마을의 산책길" caption="오대산 명상마을" source="https://cafe.naver.com/joohankimlab/12322" width={1600} height={1200} />
            <CommunityPhoto src="/images/community/zone2-community.webp" alt="야외에서 함께 모여 기념사진을 남긴 존2운동 커뮤니티" caption="함께하는 존2운동" source="https://cafe.naver.com/joohankimlab/12948" width={1600} height={900} />
          </div>
        </div>
      </Section>

      <div className="studio-shell pb-12"><TextLink href="https://cafe.naver.com/joohankimlab">내면소통명상 커뮤니티에서 더 많은 기록 보기</TextLink></div>
      <Section width="content">
        <h2 className="text-h2">참여 안내</h2>
        <p className="mt-4 max-w-measure text-body-lg text-sub">
          모집, 일정, 비용은 프로그램마다 다르며 소식과 이메일로 안내합니다.
        </p>
        <div className="mt-8 flex flex-wrap gap-3">
          <Button href="/news" variant="outline" icon="arrow-right">
            소식 보기
          </Button>
          <Button href={`mailto:${COMPANY.serviceEmail}`} variant="ghost" icon="mail">
            {COMPANY.serviceEmail}
          </Button>
        </div>
      </Section>
      </Paper>
    </PageShell>
  )
}
