import Image from 'next/image'
import { pageMetadata } from '@/lib/seo'
import PageShell from '@/components/layout/PageShell'
import PageHeader from '@/components/ui/PageHeader'
import Section from '@/components/ui/Section'
import ListRow from '@/components/ui/ListRow'
import Facts from '@/components/ui/Facts'
import Button from '@/components/ui/Button'
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
  { when: '연중', title: '그릿 워크숍', sub: '마음근력 훈련 워크숍' },
  { when: '2026', title: '어린이·청소년 마음근력 클럽', sub: '2026년 출범' },
]

export default function ProgramsPage() {
  return (
    <PageShell ground="hanji">
      <PageHeader
        title="프로그램"
        lede="강의실 밖에서 이어지는 수련입니다. 리트릿은 참가자 자신의 수련을 위한 합숙이고, 연수교육은 심화과정 안에 있는 집중 훈련입니다."
      />

      <div className="mx-auto w-full max-w-page px-gutter lg:px-gutter-lg" aria-hidden="true">
        <Image
          src="/images/sumuk/pine-on-hanji.png"
          alt=""
          width={1800}
          height={900}
          priority
          sizes="(max-width: 1200px) 100vw, 1200px"
          className="h-auto w-full opacity-90"
        />
      </div>

      <Section id="rhythm" title="한 해의 리듬" lede="해마다 돌아오는 모임입니다. 모집과 일정은 소식에서 안내합니다.">
        <div className="hairline-t">
          {rhythm.map((r) => (
            <ListRow key={r.title} lead={r.when} title={r.title} subtitle={r.sub} />
          ))}
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
            <a href="/images/retreat_poster.jpg" target="_blank" rel="noopener noreferrer" className="block max-w-[360px]">
              <Image
                src="/images/retreat_poster.jpg"
                alt="2026 내면소통명상 여름 리트릿 포스터"
                width={1701}
                height={5102}
                sizes="(max-width: 768px) 100vw, 360px"
                className="h-auto w-full rounded-md border border-line-soft"
              />
            </a>
            <figcaption className="mt-3 text-meta text-muted">포스터를 누르면 크게 볼 수 있습니다.</figcaption>
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
    </PageShell>
  )
}
