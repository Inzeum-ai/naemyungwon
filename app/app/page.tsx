import AiStory from '@/components/ui/AiStory'
import AppShowcase from '@/components/ui/AppShowcase'
import SectionNav from '@/components/ui/SectionNav'
import Link from 'next/link'
import { pageMetadata } from '@/lib/seo'
import PageShell from '@/components/layout/PageShell'
import Section from '@/components/ui/Section'
import ListRow from '@/components/ui/ListRow'
import Disclosure from '@/components/ui/Disclosure'
import Button from '@/components/ui/Button'
import { COMPANY } from '@/lib/company'

export const metadata = pageMetadata({
  title: 'INZEUM 앱',
  description:
    '내면소통연구소가 만드는 수면·명상 앱. 수면·명상 라이브러리, 내면AI, 내 목소리, 기록, 마음근력 검사로 교육원에서 배운 내면소통명상을 매일 밤 이어갑니다.',
  path: '/app',
})

// 공식 홈페이지의 안내 문체는 합니다체로 통일합니다.
const features = [
  { title: '수면·명상 라이브러리', sub: '내면소통명상의 원리로 구성한 명상을 목적과 상황에 맞게 골라 듣습니다. 잠들기 전에도 함께할 수 있습니다.' },
  { title: '내면AI', sub: '명상과 기록에 대해 대화하며 지금 필요한 수련을 함께 찾습니다. 답변은 자동으로 생성되며 전문가 상담을 대신하지 않습니다.' },
  { title: '내 목소리', sub: '명상 대본을 직접 읽어 녹음해 두고, 내 목소리로 듣는 명상을 만듭니다. 골전도 모드를 지원합니다.' },
  { title: '기록', sub: '감정과 몸감각, 감사 기록을 남깁니다. 쌓인 기록은 내면AI와의 대화로 이어집니다.' },
  { title: '마음근력 검사', sub: '자기조절력·대인관계력·자기동기력을 측정하고, 지난 결과와 비교합니다.' },
  { title: '수면 타이머', sub: '5분에서 30분까지, 소리가 서서히 잦아들며 멈춥니다.' },
]

const faq = [
  { q: '언제 사용할 수 있나요?', a: '2026년 8월부터 심화과정 1기와 일부 이용자를 대상으로 베타를 시작했습니다. 정식 출시는 2026년 중을 목표로 합니다.' },
  { q: '어떤 기기에서 쓸 수 있나요?', a: 'iOS와 Android 모두 지원합니다.' },
  { q: '유료인가요?', a: '베타 서비스에는 유료 결제 기능이 없고, 결제 정보를 수집하지 않습니다.' },
  { q: '녹음한 목소리는 어디에 저장되나요?', a: '녹음은 기기에 저장되며, 녹음 관련 동의에 따라 서버에 백업됩니다. 소음 정리는 서버에 저장된 녹음 파일을 처리합니다. 자세한 내용은 개인정보처리방침에서 확인할 수 있습니다.' },
  { q: '내면AI와 나눈 대화가 AI 학습에 쓰이나요?', a: '이용자 동의 없이 범용 AI 모델의 학습 데이터로 사용하지 않습니다. 자세한 내용은 개인정보처리방침에서 확인할 수 있습니다.' },
]


export default function AppPage() {
  return (
    <PageShell>
      <header className="mx-auto w-full max-w-page px-gutter pb-16 pt-16 md:pt-28 lg:px-gutter-lg">
        <div className="grid gap-12 md:grid-cols-[minmax(0,6fr)_minmax(0,6fr)] md:items-center md:gap-16">
          <div>
            <h1 className="text-display-sm md:text-display">지금의 나에게,<br />맞는 명상.</h1>
            <p className="mt-6 max-w-measure text-body-lg text-sub">
              나의 수련과 기록을 이해하는 내면AI. 대화에서 맞춤 명상으로, 대본에서 목소리로 이어집니다.
            </p>
            <p className="mt-6 text-meta text-muted">2026년 8월 베타 · iOS · Android</p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Button href="#release" icon="arrow-right">
                베타 현황 보기
              </Button>
              <Button href="#features" variant="outline">
                할 수 있는 것
              </Button>
            </div>
          </div>
          <AppShowcase compact />
        </div>
      </header>

      <SectionNav items={[{ href: "#ai-native", label: "개인화 AI" }, { href: "#technology", label: "음성과 연구" }, { href: "#features", label: "앱 기능" }, { href: "#release", label: "출시 안내" }, { href: "#faq", label: "자주 묻는 질문" }]} />

      <AiStory />
      <Section id="technology" title="명상의 경험을 만드는 기술">
        <div className="technology-grid"><article><p className="eyebrow">맞춤 명상 · 베타</p><h3>대본에서 음성까지</h3><p>요청한 주제와 길이, 나의 맥락에 맞춰 대본을 만듭니다. 내용을 확인하고 다듬은 뒤 AI 음성(TTS)으로 듣거나 내 목소리로 녹음할 수 있습니다.</p></article><article><p className="eyebrow">오디오 · 베타</p><h3>목소리는 더 또렷하게</h3><p>녹음의 배경 소음을 정리해 수련에 집중할 수 있도록 돕습니다. 원본과 정리본을 비교하고, 골전도 모드로 목소리의 듣는 느낌도 바꿀 수 있습니다.</p></article><article><p className="eyebrow">수면 · 연구 중</p><h3>더 깊이 이해하기 위해</h3><p>오디오와 수면 데이터로 수면을 이해하는 모델을 연구합니다. 현재 앱은 수면 명상을 제공하며, 수면 단계 측정이나 진단 기능은 제공하지 않습니다.</p></article></div>
        <p className="mt-10 max-w-measure text-body-sm text-muted">개인화는 이용자가 동의한 정보를 바탕으로 작동합니다. AI가 기억하는 내용은 앱에서 확인하고 삭제할 수 있습니다. AI 답변은 전문가 상담을 대신하지 않습니다.</p>
      </Section>
      <Section id="features" title="앱에서 할 수 있는 것">
        <div className="hairline-t">
          {features.map((f) => (
            <ListRow key={f.title} title={f.title} subtitle={f.sub} />
          ))}
        </div>
      </Section>

      <Section id="release" title="출시" width="content">
        <div className="hairline-t">
          <ListRow lead="2026 · 8월" title="베타" subtitle="심화과정 1기와 일부 이용자를 대상으로 먼저 시작했습니다." />
          <ListRow lead="2026년 중" title="정식 출시" subtitle="iOS와 Android 양쪽에 출시할 예정입니다." />
        </div>
        <p className="mt-6 text-body-sm text-muted">일정은 개발 상황에 따라 조정될 수 있습니다.</p>
      </Section>

      <Section id="faq" title="자주 묻는 질문" width="content">
        <div className="hairline-t">
          {faq.map((f) => (
            <Disclosure key={f.q} question={f.q}>
              <p>{f.a}</p>
            </Disclosure>
          ))}
        </div>
      </Section>

      <Section width="content">
        <h2 className="text-h2">출시 소식 안내</h2>
        <p className="mt-4 max-w-measure text-body-lg text-sub">
          베타 참여 방법과 출시 일정은 준비되는 대로 소식에서 안내합니다.
        </p>
        <div className="mt-8 flex flex-wrap gap-3">
          <Button href={`mailto:${COMPANY.serviceEmail}`} variant="outline" icon="mail">
            이메일 문의
          </Button>
          <Button href="/news" variant="ghost" icon="arrow-right">
            소식
          </Button>
        </div>
        <p className="hairline-soft-t mt-10 pt-6 text-body-sm text-muted">
          앱 이용에 적용되는 약관은{' '}
          <Link href="/terms" className="text-sub underline underline-offset-4 hover:text-fg">
            이용약관
          </Link>
          과{' '}
          <Link href="/privacy" className="text-sub underline underline-offset-4 hover:text-fg">
            개인정보처리방침
          </Link>
          에서 확인할 수 있습니다.
        </p>
      </Section>
    </PageShell>
  )
}
