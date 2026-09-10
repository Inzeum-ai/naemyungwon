import SectionNav from '@/components/ui/SectionNav'
import { pageMetadata } from '@/lib/seo'
import PageShell from '@/components/layout/PageShell'
import InkBand from '@/components/ui/InkBand'
import Paper from '@/components/ui/Paper'
import Section from '@/components/ui/Section'
import Disclosure from '@/components/ui/Disclosure'
import Button from '@/components/ui/Button'
import { COMPANY } from '@/lib/company'

export const metadata = pageMetadata({
  title: '자주 묻는 질문',
  description: '내면소통명상과 기초과정, 심화과정, 지도자 자격증에 관해 자주 받는 질문을 모았습니다.',
  path: '/faq',
})

const general = [
  {
    q: '내면소통명상이란 무엇인가요?',
    a: [
      '뇌과학과 심리학에 기반한 명상 방법으로, 자기 자신의 내면과 깊이 소통하여 마음의 힘을 기르는 수련법입니다. 단순한 이완을 넘어 자기 이해와 정서 조절 능력을 기르는 것을 목표로 합니다.',
    ],
  },
  {
    q: '명상 경험이 없어도 수강할 수 있나요?',
    a: [
      '네. 기초과정은 명상 경험이 전혀 없는 분도 따라올 수 있도록 설계되었습니다. 기본적인 명상 방법부터 차근차근 배우며, 일상에서 쉽게 적용할 수 있는 기법을 익힙니다.',
    ],
  },
  {
    q: '온라인으로만 수강이 가능한가요?',
    a: [
      '기초과정은 100% 온라인으로 진행됩니다. 심화과정은 원칙적으로 대면 교육 200시간으로 구성되며, 합숙 연수교육이 포함됩니다.',
    ],
  },
]

const advanced = [
  {
    q: '심화과정에서 김주환 교수님과 패컬티 선생님들의 강의 비중은 어느 정도인가요?',
    a: [
      '정규과정 전체 교육 시간 대비 김주환 교수의 직접 강의와 지도가 대략 70%, 패컬티의 교육이 대략 30%의 비율로 구성됩니다. 진행 과정에서 세부 비율이 약간 조정될 수는 있으나, 전 과정의 중심은 김주환 교수의 직접 교육과 피드백입니다.',
    ],
  },
  {
    q: '내면소통명상 지도자(티처) 자격증은 취득 후 어떻게 활용할 수 있나요?',
    a: [
      '자격증은 단순한 수료증이 아니라, 내면소통명상을 공식적으로 지도할 수 있음을 보증하는 전문 자격증입니다. 기존 전문 영역(요가·필라테스·PT·소매틱 등)에 통합할 수도 있고, 자신만의 명상 프로그램을 직접 만들어 운영할 수도 있습니다.',
      '자격증 취득 이후에는 내면소통명상의 이름으로 개인 명상 클래스, 워크숍, 소그룹 프로그램 등을 개설할 수 있습니다. 주간 명상 클래스, 직장인·부모·학생을 위한 명상 프로그램 등이 그 예입니다.',
    ],
  },
  {
    q: '혼자서 명상하는 것과 명상 지도자가 되는 것의 차이는 무엇인가요? 꼭 지도자가 되어야 하나요?',
    a: [
      '반드시 명상 지도자가 될 필요는 없습니다. 명상은 혼자 수행하는 것만으로도 삶에 큰 변화가 생길 수 있습니다. 다만 한 가지 중요한 차이가 있습니다. 배움의 가장 깊은 방식은 가르치는 것입니다. 혼자서 하는 명상은 경험에 집중되고, 누군가에게 안내하려고 할 때는 명상의 구조·원리·알아차림의 단계까지 훨씬 깊이 연구하게 됩니다.',
      '심화과정은 명상을 더 깊게, 더 정확하게 배우고 싶은 분, 그리고 명상 지도를 통해 타인의 변화까지 만들고 싶은 분들께 맞게 설계된 과정입니다.',
    ],
  },
  {
    q: '주변에 몸과 마음이 아픈 사람이 많습니다. 내면소통명상을 안내하면 도움을 줄 수 있을까요?',
    a: [
      '몸이나 마음이 아픈 분께는 꼭 의사의 진단을 먼저 받도록 권유해 주시기 바랍니다. 명상은 질환에 대한 치료의 목적으로 사용되어서는 안 됩니다. 명상은 예방이나 재활에는 도움이 될 수 있지만, 이미 진단명이 있는 질환을 지닌 분께는 도움이 되지 않을 가능성이 높습니다.',
      '본 과정은 치료나 상담의 자격을 부여하지 않으며, 치료 목적의 프로그램도 아닙니다. 내면소통명상 지도자는 질환이나 질병에 대한 진단이나 처방을 내려서는 안 됩니다. 그것은 의료법 위반이며 법적인 제재를 받게 됩니다. 내면소통명상 지도자는 사랑과 존중의 마음으로 명상을 안내하고 도움을 주는 태도를 처음부터 끝까지 유지합니다.',
    ],
  },
  {
    q: '수료 후 어떤 활동을 할 수 있나요?',
    a: [
      '심화과정 수료 후에는 내면소통명상 지도자로서 활동할 수 있는 자격이 부여됩니다. 개인 명상 지도, 기업 및 단체 교육, 커뮤니티 리더 등 다양한 분야에서 활동할 수 있으며, 수료생 네트워크를 통해 계속 성장할 기회가 이어집니다.',
    ],
  },
]

export default function FAQPage() {
  return (
    <PageShell reading="hanji">
      <InkBand
        title="자주 받는 질문에 미리 답합니다."
        lede="과정과 자격증에 관해 자주 받는 질문입니다. 여기에 없는 질문은 이메일로 보내 주세요."
      />

      <Paper>
      <SectionNav items={[{ href: "#general", label: "내면소통명상과 기초과정" }, { href: "#advanced", label: "심화과정과 자격증" }]} />
      <Section id="general" title="내면소통명상과 기초과정" width="content" hairline={false}>
        <div className="hairline-t">
          {general.map((f) => (
            <Disclosure key={f.q} question={f.q}>
              {f.a.map((p) => (
                <p key={p}>{p}</p>
              ))}
            </Disclosure>
          ))}
        </div>
      </Section>

      <Section id="advanced" title="심화과정과 자격증" width="content">
        <div className="hairline-t">
          {advanced.map((f) => (
            <Disclosure key={f.q} question={f.q}>
              {f.a.map((p) => (
                <p key={p}>{p}</p>
              ))}
            </Disclosure>
          ))}
        </div>
      </Section>

      <Section width="content">
        <p className="max-w-measure text-body-lg text-sub">더 궁금한 점이 있으시면 이메일로 문의해 주세요.</p>
        <div className="mt-6">
          <Button href={`mailto:${COMPANY.serviceEmail}`} variant="outline" icon="mail">
            {COMPANY.serviceEmail}
          </Button>
        </div>
      </Section>
      </Paper>
    </PageShell>
  )
}
