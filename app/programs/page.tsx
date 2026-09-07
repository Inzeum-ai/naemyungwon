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
        title="산에서, 바다에서, 강가에서."
        lede="리트릿은 오대산에서, 연수교육은 속초에서, 존2 달리기는 한강에서. 강의실 밖에서 이어지는 수련입니다."
        painting={{ src: '/images/sumuk/synthetic-pine-on-ink-v2.webp', mobileSrc: '/images/sumuk/synthetic-pine-mobile-v2.webp', position: 'center 70%' }}
      />

      <Paper>
      <SectionNav items={[{ href: "#rhythm", label: "프로그램 안내" }, { href: "#retreat", label: "리트릿" }, { href: "#training", label: "연수교육" }, { href: "#coex", label: "명상 콘서트" }]} />
      <Section id="rhythm" title="한 해의 리듬" lede="해마다 돌아오는 모임입니다. 모집과 일정은 소식에서 안내합니다." hairline={false}>
        <div className="hairline-t">
          {rhythm.map((r) => (
            <ListRow key={r.title} lead={r.when} title={r.title} subtitle={r.sub} />
          ))}
        </div>
      </Section>

      <Section id="moments" title="참가자가 나눈 수련의 풍경" lede="리트릿과 존2운동 커뮤니티에 남겨진 사진들입니다. 각 사진에서 원문 기록을 볼 수 있습니다.">
        <div className="community-moments">
          <CommunityPhoto src="/images/community/retreat-room.webp" alt="산이 보이는 창가에 명상 방석과 매트가 놓인 수련 공간" caption="리트릿의 수련 공간" source="https://cafe.naver.com/joohankimlab/8157" width={1280} height={1525} />
          <div className="space-y-8 md:pt-16">
            <CommunityPhoto src="/images/community/odaesan-path.webp" alt="나무 사이로 이어진 오대산 명상마을의 산책길" caption="오대산 명상마을" source="https://cafe.naver.com/joohankimlab/12322" width={1600} height={1200} />
            <CommunityPhoto src="/images/community/zone2-community.webp" alt="야외에서 함께 모여 기념사진을 남긴 존2운동 커뮤니티" caption="함께하는 존2운동" source="https://cafe.naver.com/joohankimlab/12948" width={1600} height={900} />
          </div>
        </div>
      </Section>

      <Section id="retreat" title="2026 여름 리트릿" aside={<p className="text-meta text-muted">2026년 7월 9일–12일 · 지난 프로그램</p>}>
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

      <Section id="training" title="심화과정 연수교육" aside={<p className="text-meta text-muted">1기 · 2026년 8월 26일–31일</p>} width="page">
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
