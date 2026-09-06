import Image from 'next/image'
import Link from 'next/link'
import PageShell from '@/components/layout/PageShell'
import Button from '@/components/ui/Button'
import Section from '@/components/ui/Section'
import ListRow from '@/components/ui/ListRow'
import Numbers from '@/components/ui/Numbers'
import PhotoBleed from '@/components/ui/PhotoBleed'
import Icon from '@/components/ui/Icon'

const figures = [
  { value: '4,500+', label: '기초과정 수료' },
  { value: '35만+', label: '유튜브 구독' },
  { value: '12주', label: '온라인 기초과정' },
  { value: '200시간', label: '명상 지도자 심화과정' },
]

const steps = [
  { n: '1', title: '편도체 안정화', body: '두려움과 불안을 먼저 가라앉힙니다. 뜨거운 편도체 위에서는 어떤 훈련도 자리 잡지 못합니다.' },
  { n: '2', title: '전전두피질 활성화', body: '알아차림, 감사, 자기긍정을 훈련합니다. 반복된 상태는 뇌의 습관이 됩니다.' },
]

const muscles = [
  { title: '자기조절력', body: '감정과 충동을 스스로 다루는 힘' },
  { title: '대인관계력', body: '자기조절력이 타인에게 향한 것' },
  { title: '자기동기력', body: '자기조절력이 일에 향한 것' },
]

const screens = [
  { src: '/images/app/sleep.png', alt: 'INZEUM 앱 수면 탭 — 잠들기 전 명상 목록' },
  { src: '/images/app/library.png', alt: 'INZEUM 앱 명상 탭 — 명상 라이브러리' },
  { src: '/images/app/inner-ai.png', alt: 'INZEUM 앱 내면AI 탭 — 대화 화면' },
]

const gatherings = [
  { when: '1월', title: '신년명상회', sub: '한 해를 여는 명상 모임' },
  { when: '3월 · 6월', title: '내면소통 명상 콘서트', sub: '코엑스 오디토리움, 1,000명 이상이 함께한 현장 명상' },
  { when: '7월', title: '여름 리트릿', sub: '3박4일, 오대산 자연명상마을. 교수님이 직접 이끄는 수련' },
  { when: '10월', title: '존2 달리기', sub: '한강공원에서 함께 뛰는 운동 모임' },
]

const textLink =
  'inline-flex min-h-hit items-center gap-2 text-body font-medium text-fg underline decoration-line underline-offset-[6px] transition-colors duration-150 ease-standard hover:decoration-fg'

export default function Home() {
  return (
    <PageShell bleed>
      {/* ── The mountain stays. Two viewports pass over it. ─────────────────────────────
          Desktop: the painting is sticky beneath the hero and the teaching. Phones: it sits
          behind the hero only, so long text never scrolls across the bright ridges. The top
          of the range fades into ink so a short viewport keeps the text legible. */}
      <div className="relative">
        <div className="absolute inset-x-0 top-0 h-svh overflow-hidden md:sticky" aria-hidden="true">
          <div
            className="breathe absolute inset-x-0 bottom-0 h-[44svh] md:h-[min(50svh,560px)]"
            style={{
              maskImage: 'linear-gradient(to bottom, transparent 0%, black 45%)',
              WebkitMaskImage: 'linear-gradient(to bottom, transparent 0%, black 45%)',
            }}
          >
            <Image
              src="/images/sumuk/synthetic-mountain-on-ink.png"
              alt=""
              fill
              priority
              sizes="100vw"
              className="object-cover object-[center_bottom]"
            />
          </div>
        </div>

        <div className="relative md:-mt-[100svh]">
          {/* Viewport 1 — the name over the mountain, one sentence, one paper button.
              On a viewport tall enough (≥ 900 px) the proof numbers sit along the ridge, over the
              faded upper slope; otherwise they open viewport 2 (see the surface brief). */}
          <section className="flex min-h-svh flex-col px-gutter pt-[calc(var(--header-h)+56px)] md:pt-[calc(var(--header-h)+64px)] md:tall:pb-[32svh] lg:px-gutter-lg">
            <div className="mx-auto w-full max-w-page">
              <h1 className="rise" style={{ '--i': 0 } as React.CSSProperties}>
                <Image
                  src="/images/wordmark-paper.png"
                  alt="INZEUM 내면소통연구소"
                  width={1200}
                  height={392}
                  priority
                  className="h-auto w-[240px] sm:w-[320px] md:w-[400px] lg:w-[460px]"
                />
              </h1>
              <p
                className="rise mt-8 max-w-[26em] text-body-lg text-copy md:mt-10 md:text-h3 md:font-normal md:leading-[1.6]"
                style={{ '--i': 1 } as React.CSSProperties}
              >
                뇌과학 기반 내면소통명상을 연구하고 가르칩니다. 12주 온라인 기초과정, 그리고
                200시간의 명상 지도자 심화과정.
              </p>
              <div className="rise mt-8 md:mt-10" style={{ '--i': 2 } as React.CSSProperties}>
                <Button href="/courses#foundation" icon="arrow-right">
                  기초과정 알아보기
                </Button>
              </div>
            </div>
            <div className="mx-auto mt-auto hidden w-full max-w-page pt-10 md:tall:block">
              <Numbers figures={figures} />
            </div>
          </section>

          {/* Viewport 2 — the teaching, still over the mountain on desktop */}
          <section
            id="teaching"
            className="flex flex-col px-gutter pt-16 pb-16 md:min-h-svh md:pt-[calc(var(--header-h)+56px)] md:pb-0 lg:px-gutter-lg"
          >
            <div className="mx-auto w-full max-w-page">
              <Numbers figures={figures} className="md:tall:hidden" />
              <div className="mt-16 grid gap-10 md:mt-24 md:tall:mt-0 md:grid-cols-[1fr_1.2fr] md:gap-16">
                <div>
                  <h2 className="max-w-[14em] text-h1 md:text-display">마음근력은 근육처럼 자랍니다.</h2>
                  <p className="mt-6 max-w-measure text-body-lg text-sub">
                    타고나는 것이 아니라 반복으로 길러집니다. 내면소통명상의 원리는 두 단계이고, 순서가
                    중요합니다.
                  </p>
                  <Link href="/about#teaching" className={`mt-8 ${textLink}`}>
                    내면소통명상이란
                    <Icon name="arrow-right" size={16} />
                  </Link>
                </div>
                <div>
                  <ol className="hairline-t">
                    {steps.map((s) => (
                      <li key={s.n} className="hairline-soft-b flex gap-6 py-6">
                        <span className="tnum w-8 shrink-0 text-h2 text-brand">{s.n}</span>
                        <div className="min-w-0">
                          <h3 className="text-h3">{s.title}</h3>
                          <p className="mt-2 max-w-measure text-body text-sub">{s.body}</p>
                        </div>
                      </li>
                    ))}
                  </ol>
                  <div className="pt-8">
                    <h3 className="text-h3">세 가지 마음근력</h3>
                    <ul className="mt-4 grid gap-4 sm:grid-cols-3">
                      {muscles.map((m) => (
                        <li key={m.title}>
                          <p className="text-body font-semibold text-fg">{m.title}</p>
                          <p className="mt-1 text-body-sm text-sub">{m.body}</p>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>

      {/* ── The page leaves the mountain. ─────────────────────────────────────────────── */}
      <div className="relative z-raised bg-bg">
        <Section
          id="courses"
          title="교육과정"
          lede="기초과정을 마친 분만 심화과정에 지원할 수 있습니다. 두 단계로 이어집니다."
          aside={
            <Link href="/courses" className={textLink}>
              교육과정 전체 보기
              <Icon name="arrow-right" size={16} />
            </Link>
          }
        >
          <div className="hairline-t">
            <ListRow
              href="/courses#foundation"
              lead="1"
              leadWidth="index"
              title="기초과정"
              subtitle="12주 온라인. 김주환 교수가 처음부터 끝까지 직접 안내합니다."
              trailing="상시 모집"
            />
            <ListRow
              href="/courses#advanced"
              lead="2"
              leadWidth="index"
              title="심화과정"
              subtitle="10개월 200시간 대면. 내면소통명상 지도자(티처) 자격증을 수여합니다."
              trailing="1기 진행 중"
            />
          </div>
        </Section>

        <section id="professor" className="hairline-t">
          <PhotoBleed src="/images/joohankim.jpg" alt="김주환 교수" position="50% 30%">
            <h2 className="text-h1 md:text-display">김주환 교수</h2>
            <p className="mt-3 text-body text-sub">
              연세대학교 언론홍보영상학부 교수 · 『내면소통』 『그릿』 『회복탄력성』 저자
            </p>
            <p className="mt-8 text-body-lg text-copy">
              뇌과학 기반 내면소통명상을 개발하고, 다수의 연구와 저서, 강연으로 명상을 대중과 학문의
              영역에 연결해 왔습니다. 2023년 내면소통연구소를 세워 교육 철학과 방법론, 지도자 양성의
              기준을 직접 총괄합니다.
            </p>
            <Link href="/about" className={`mt-8 ${textLink}`}>
              연구소와 사람들
              <Icon name="arrow-right" size={16} />
            </Link>
          </PhotoBleed>
        </section>

        <Section
          id="app"
          title="INZEUM 앱"
          lede="교육원에서 배운 수련을 매일 밤 이어갑니다. 수면·명상 라이브러리, 내면AI, 내 목소리, 기록, 마음근력 검사."
          aside={
            <Link href="/app" className={textLink}>
              앱 소개
              <Icon name="arrow-right" size={16} />
            </Link>
          }
        >
          <ul className="grid grid-cols-3 gap-3 sm:gap-6 md:gap-10">
            {screens.map((s, i) => (
              <li key={s.src} className={i === 1 ? 'md:translate-y-10' : ''}>
                <Image
                  src={s.src}
                  alt={s.alt}
                  width={381}
                  height={828}
                  sizes="(max-width: 768px) 33vw, 300px"
                  className="h-auto w-full rounded-lg border border-line-soft"
                />
              </li>
            ))}
          </ul>
        </Section>

        <Section
          id="gatherings"
          title="함께 모이는 날"
          lede="강의실 밖에서 이어지는 수련. 모집과 일정은 소식에서 안내합니다."
          aside={
            <Link href="/programs" className={textLink}>
              프로그램 보기
              <Icon name="arrow-right" size={16} />
            </Link>
          }
        >
          <div className="hairline-t">
            {gatherings.map((g) => (
              <ListRow key={g.title} lead={g.when} title={g.title} subtitle={g.sub} />
            ))}
          </div>
        </Section>
      </div>
    </PageShell>
  )
}
