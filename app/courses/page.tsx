import { pageMetadata } from '@/lib/seo'
import PageShell from '@/components/layout/PageShell'
import InkBand from '@/components/ui/InkBand'
import Paper from '@/components/ui/Paper'
import Section from '@/components/ui/Section'
import Facts from '@/components/ui/Facts'
import Button from '@/components/ui/Button'
import { COMPANY } from '@/lib/company'

export const metadata = pageMetadata({
  title: '교육과정',
  description:
    '12주 온라인 기초과정과 10개월 200시간의 명상 지도자 심화과정. 기초과정을 수료한 분만 심화과정에 지원할 수 있습니다.',
  path: '/courses',
})

const advanced = [
  {
    title: '내면소통명상을 지도할 수 있는 명상 전문가를 양성합니다',
    items: [
      '편안전활의 체화라는 근본적인 변화에 초점을 맞춘 명상 지도자 양성',
      '두 번의 집중 연수교육과 10개월에 걸친 체계적인 실습',
      '내면 깊이 알아차리기: 매주 수행·관찰 과제를 통해 미세한 감정·감각·반응 패턴을 섬세하게 알아차리는 힘을 기릅니다',
      '고요한 행복의 체화: 마음근력 훈련과 반복 수행, 일상 적용, 피드백을 통해 텅 빈 행복의 상태를 자연스럽게 체화합니다',
    ],
  },
  {
    title: '김주환 교수에게 내면소통명상을 직접 배웁니다',
    items: [
      '내면소통명상 핵심 이론 및 심화 강의',
      '단계별 실습 지도 및 피드백 — 명상 언어, 보이스 톤, 스크립트 구조를 직접 지도',
      '소규모 면담을 통한 심층 코칭',
      'Q&A 세션 운영. 전 과정의 중심은 김주환 교수의 직접 교육과 피드백입니다',
    ],
  },
  {
    title: '체화 → 스크립트 → 시연 → 피드백으로 이어지는 실습형 커리큘럼',
    items: [
      '내부감각과 고유감각에 기반한 다양한 움직임 명상 실습',
      '배경자아를 알아차리는 자기참조과정 훈련',
      '명상 안내를 위한 언어, 발성, 호흡, 보이스 톤 실습',
      '스크립트 작성 및 시연',
      '교수와 각 분야 전문가 패컬티의 지도와 세밀한 피드백',
    ],
  },
  {
    title: '전문가 융합형 명상 지도자 교육',
    items: [
      '타이치, 페르시안 밀, 고대운동, 자이로키네시스, 매트운동, 움직임 해부학, 호흡법, 연기 기반 알아차림, 발성법 등 여러 분야의 패컬티가 참여합니다',
      '지식 습득을 넘어 뇌과학 기반 움직임 명상 지도자에게 필요한 요소를 입체적으로 배웁니다',
      '실습을 통해 실제 명상 지도에 쓸 수 있는 역량을 기릅니다',
    ],
  },
]

export default function CoursesPage() {
  return (
    <PageShell reading="hanji">
      <InkBand
        title="12주로 시작해, 200시간으로 깊어집니다."
        lede="온라인 기초과정 12주, 그리고 명상 지도자를 기르는 10개월 200시간의 심화과정. 기초과정을 수료한 분만 심화과정에 지원할 수 있습니다."
        painting={{ src: '/images/sumuk/synthetic-path-on-ink.png' }}
      />

      <Paper>
      <Section id="foundation" title="기초과정" aside={<p className="text-meta text-muted">상시 모집</p>} hairline={false}>
        <div className="grid gap-10 md:grid-cols-[minmax(0,5fr)_minmax(0,7fr)] md:gap-16">
          <Facts
            facts={[
              { label: '형식', value: '12주 온라인' },
              { label: '강의', value: '매주 수요일 동영상 강의 업로드' },
              { label: '지도', value: '김주환 교수 단독' },
              { label: '수료', value: '12주를 모두 마치면 기초과정 수료증' },
              { label: '다음 단계', value: '심화과정 지원 자격' },
            ]}
          />
          <div className="max-w-measure space-y-5 text-body text-copy">
            <p>
              기초과정은 온라인 교육으로 최고의 명상 경험을 드리는 것을 목표로 합니다. 다른 특별 강사나
              초대 손님 없이, 처음부터 끝까지 김주환 교수가 책임지고 내면소통명상의 세계로 안내합니다.
            </p>
            <p>
              12주 동안 매주 수요일에 동영상 강의가 업로드됩니다. 모든 과정을 마친 분께는 기초과정
              수료증을 드리며, 기초과정 수료자만 이후에 열리는 심화과정에 지원할 수 있습니다. 심화과정까지
              마치면 소수 정예의 지도자 과정에 지원할 수 있습니다.
            </p>
            <div className="hairline-t pt-5">
              <h3 className="text-h3">수강 안내</h3>
              <ul className="mt-3 list-disc space-y-2 pl-5 text-body-sm text-sub">
                <li>기초과정은 원칙적으로 원하시는 분 모두에게 수강 기회를 드리고자 합니다.</li>
                <li>과정이 우선적으로 필요하다고 판단되는 분들께 먼저 기회를 드리며, 합격·불합격의 개념이 아닙니다.</li>
                <li>기초과정은 앞으로도 계속 열립니다. 이번에 선발되지 않으셨더라도 기회는 계속 있습니다.</li>
              </ul>
            </div>
          </div>
        </div>
      </Section>

      <Section
        id="advanced"
        title="심화과정"
        aside={<p className="text-meta text-muted">1기 진행 중 · 2026년 3월–12월</p>}
      >
        <div className="grid gap-10 md:grid-cols-[minmax(0,5fr)_minmax(0,7fr)] md:gap-16">
          <Facts
            facts={[
              { label: '형식', value: '10개월 / 200시간 대면 교육' },
              { label: '자격', value: '내면소통명상 지도자(티처) 자격증' },
              { label: '지원', value: '기초과정 수료자(수료 예정 포함)' },
              { label: '구성', value: '김주환 교수 약 70%, 패컬티 약 30%' },
              { label: '연수', value: '두 번의 합숙 연수교육' },
            ]}
          />
          <div className="max-w-measure space-y-5 text-body text-copy">
            <p>
              심화과정은 뇌과학 기반 내면소통명상을 지도할 수 있는 공식 명상 지도자를 양성하는 과정으로,
              2026년 12월까지 10개월 동안 총 200시간으로 구성되는 집중 교육과정입니다.
            </p>
            <p>
              수료하면 내면소통명상 지도자(티처) 자격증이 수여됩니다. 내면소통연구소가 발급하는 공식 민간
              자격으로, 뇌과학 기반 내면소통명상을 제대로 교육할 수 있는 전문가임을 보증합니다.
            </p>
            <div className="hairline-t pt-5">
              <h3 className="text-h3">티처 자격을 취득하면</h3>
              <ul className="mt-3 list-disc space-y-2 pl-5 text-body-sm text-sub">
                <li>독자적으로 내면소통명상을 지도할 수 있습니다.</li>
                <li>내면소통명상 워크숍이나 교육과정을 개설할 수 있습니다.</li>
                <li>
                  요가, 필라테스, 명상, 피트니스, 소매틱스, 타이치 등 기존 교육 프로그램에 내면소통명상의
                  요소를 접목해 자신만의 명상 교육 프로그램을 개발·운영할 수 있습니다.
                </li>
              </ul>
            </div>
            <p className="text-body-sm text-muted">
              심화과정은 원칙적으로 대면 교육 200시간으로 구성되며, 부득이한 사유로 일부 참여가 어려운
              경우 정해진 범위 안에서 온라인 수강으로 대체할 수 있습니다.
            </p>
          </div>
        </div>

        <div className="mt-16 grid gap-12 md:mt-24 md:grid-cols-2 md:gap-x-16 md:gap-y-14">
          {advanced.map((f) => (
            <div key={f.title} className="hairline-t pt-6">
              <h3 className="max-w-measure text-h3">{f.title}</h3>
              <ul className="mt-4 max-w-measure list-disc space-y-2 pl-5 text-body-sm text-sub">
                {f.items.map((it) => (
                  <li key={it}>{it}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </Section>

      <Section width="content">
        <h2 className="text-h2">궁금한 점이 있으신가요</h2>
        <p className="mt-4 max-w-measure text-body-lg text-sub">
          과정과 자격증에 관한 질문을 모아 두었습니다. 그 밖의 문의는 이메일로 보내 주세요.
        </p>
        <div className="mt-8 flex flex-wrap gap-3">
          <Button href="/faq" variant="outline" icon="arrow-right">
            자주 묻는 질문
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
