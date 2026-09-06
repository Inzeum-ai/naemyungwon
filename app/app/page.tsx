import Image from 'next/image'
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

// 앱은 해요체로 말합니다 (Sumuk content §2). 연구소 페이지는 합니다체입니다.
const features = [
  { title: '수면·명상 라이브러리', sub: '내면소통명상의 원리로 구성한 명상을 목적과 상황에 맞게 골라 들어요. 잠들기 전에 듣도록 만들었어요.' },
  { title: '내면AI', sub: '명상과 기록에 대해 대화하며 지금 필요한 수련을 함께 찾아요. 답변은 자동으로 생성되며 전문가 상담을 대신하지 않아요.' },
  { title: '내 목소리', sub: '명상 대본을 직접 읽어 녹음해 두고, 내 목소리로 듣는 명상을 만들어요. 골전도 모드를 지원해요.' },
  { title: '기록', sub: '감정과 몸감각, 감사 기록을 남겨요. 쌓인 기록은 내면AI와의 대화로 이어져요.' },
  { title: '마음근력 검사', sub: '자기조절력·대인관계력·자기동기력을 측정하고, 지난 결과와 비교해요.' },
  { title: '수면 타이머', sub: '5분에서 30분까지, 소리가 서서히 잦아들며 멈춰요.' },
]

const faq = [
  { q: '언제 사용할 수 있나요?', a: '2026년 8월부터 심화과정 1기와 일부 이용자를 대상으로 베타를 열었어요. 정식 출시는 2026년 안을 목표로 하고 있어요.' },
  { q: '어떤 기기에서 쓸 수 있나요?', a: 'iOS와 Android 모두 지원해요.' },
  { q: '유료인가요?', a: '베타 서비스에는 유료 결제 기능이 없고, 결제 정보를 수집하지 않아요.' },
  { q: '녹음한 목소리는 어디에 저장되나요?', a: '녹음 음성 파일은 원칙적으로 이용자의 기기에 저장돼요. 서버에는 녹음 제목과 길이 같은 기록만 남아요.' },
  { q: '내면AI와 나눈 대화가 AI 학습에 쓰이나요?', a: '이용자 동의 없이 범용 AI 모델의 학습 데이터로 사용하지 않아요. 자세한 내용은 개인정보처리방침에서 확인할 수 있어요.' },
]

const screens = [
  { src: '/images/app/sleep.png', alt: 'INZEUM 앱 수면 탭 — 잠들기 전 명상 목록' },
  { src: '/images/app/inner-ai.png', alt: 'INZEUM 앱 내면AI 탭 — 대화 화면' },
  { src: '/images/app/record.png', alt: 'INZEUM 앱 기록 탭 — 달력' },
]

export default function AppPage() {
  return (
    <PageShell>
      <header className="mx-auto w-full max-w-page px-gutter pb-16 pt-16 md:pt-28 lg:px-gutter-lg">
        <div className="grid gap-12 md:grid-cols-[minmax(0,6fr)_minmax(0,6fr)] md:items-center md:gap-16">
          <div>
            <h1 className="text-display-sm md:text-display">INZEUM 앱</h1>
            <p className="mt-6 max-w-measure text-body-lg text-sub">
              교육원에서 배운 내면소통명상을 매일 밤 이어가요. 잠들기 전 10분, 8주에서 12주.
            </p>
            <p className="mt-6 text-meta text-muted">2026년 8월 베타 · iOS · Android</p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Button href="/news" icon="arrow-right">
                출시 소식 보기
              </Button>
              <Button href="#features" variant="outline">
                할 수 있는 것
              </Button>
            </div>
          </div>
          <ul className="grid grid-cols-3 gap-3 sm:gap-5">
            {screens.map((s, i) => (
              <li key={s.src} className={i === 1 ? 'translate-y-6 md:translate-y-10' : ''}>
                <Image
                  src={s.src}
                  alt={s.alt}
                  width={381}
                  height={828}
                  priority={i === 0}
                  sizes="(max-width: 768px) 33vw, 200px"
                  className="h-auto w-full rounded-lg border border-line-soft"
                />
              </li>
            ))}
          </ul>
        </div>
      </header>

      <Section id="features" title="앱에서 할 수 있는 것">
        <div className="hairline-t">
          {features.map((f) => (
            <ListRow key={f.title} title={f.title} subtitle={f.sub} />
          ))}
        </div>
      </Section>

      <Section id="release" title="출시" width="content">
        <div className="hairline-t">
          <ListRow lead="2026 · 8월" title="베타" subtitle="심화과정 1기와 일부 이용자를 대상으로 먼저 열었어요." />
          <ListRow lead="2026 · 내" title="정식 출시" subtitle="iOS와 Android 양쪽에 출시할 예정이에요." />
        </div>
        <p className="mt-6 text-body-sm text-muted">일정은 개발 상황에 따라 조정될 수 있어요.</p>
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
          베타 참여 방법과 출시 일정은 준비되는 대로 소식에서 안내해요.
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
          에서 확인할 수 있어요.
        </p>
      </Section>
    </PageShell>
  )
}
