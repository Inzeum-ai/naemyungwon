import Image from 'next/image'
import PageShell from '@/components/layout/PageShell'
import Button from '@/components/ui/Button'
import Section from '@/components/ui/Section'
import ListRow from '@/components/ui/ListRow'
import AmbientArtwork from '@/components/ui/AmbientArtwork'
import AppShowcase from '@/components/ui/AppShowcase'
import TextLink from '@/components/ui/TextLink'
import CommunityPhoto from '@/components/ui/CommunityPhoto'

const steps = [
  { n: '1', title: '편도체 안정화', body: '두려움과 불안을 먼저 가라앉힙니다. 편안한 상태에서 수련을 시작합니다.' },
  { n: '2', title: '전전두피질 활성화', body: '알아차림, 감사, 자기긍정을 훈련합니다. 반복된 상태는 뇌의 습관이 됩니다.' },
]
const muscles = [
  { title: '자기조절력', body: '감정과 충동을 스스로 다루는 힘' },
  { title: '대인관계력', body: '자기조절력이 타인에게 향한 것' },
  { title: '자기동기력', body: '자기조절력이 일에 향한 것' },
]

export default function Home() {
  return <PageShell bleed>
    <section className="home-hero">
      <AmbientArtwork src="/images/sumuk/synthetic-mountain-desktop-v2.webp"
        mobileSrc="/images/sumuk/synthetic-mountain-mobile-v2.webp" className="home-art" priority />
      <div className="home-hero-content mx-auto w-full max-w-page px-gutter lg:px-gutter-lg">
        <div className="hero-copy">
          <h1 className="rise hero-title">마음근력은<br />근육처럼 자랍니다.</h1>
          <p className="rise mt-7 max-w-[28em] text-body-lg text-copy" style={{ '--i': 1 } as React.CSSProperties}>
            뇌과학 기반 내면소통명상을<br className="md:hidden" /> 연구하고 가르칩니다.
          </p>
          <div className="rise mt-9" style={{ '--i': 2 } as React.CSSProperties}>
            <Button href="/courses#foundation" icon="arrow-right">기초과정 알아보기</Button>
          </div>
        </div>
        <dl className="hero-proof">
          <div><dt>기초과정 수료</dt><dd>4,500+</dd></div>
          <div><dt>유튜브 구독</dt><dd>35만+</dd></div>
        </dl>
      </div>
    </section>

    <section id="professor" className="professor-intro mx-auto w-full max-w-page px-gutter lg:px-gutter-lg">
      <div className="professor-intro-inner hairline-t">
        <Image src="/images/joohankim.jpg" alt="김주환 교수" width={420} height={380} sizes="(max-width: 767px) 100vw, 300px" className="professor-intro-photo" />
        <div>
          <h2 className="text-h1 md:text-display">김주환 교수</h2>
          <p className="mt-3 text-body-sm text-sub">연세대학교 언론홍보영상학부 교수 · 『내면소통』 『그릿』 『회복탄력성』 저자</p>
          <p className="mt-6 max-w-measure text-body-lg text-copy">뇌과학 기반 내면소통명상을 개발하고, 다수의 연구와 저서, 강연으로 명상을 대중과 학문의 영역에 연결해 왔습니다.</p>
          <TextLink href="/about" className="mt-5">연구소와 사람들</TextLink>
        </div>
      </div>
    </section>

    <Section id="teaching">
      <div className="grid gap-12 lg:grid-cols-[1fr_1.1fr] lg:gap-24">
        <div>
          <h2 className="text-h1 md:text-display">편안하게 시작해,<br />반복으로 기릅니다.</h2>
          <p className="mt-6 max-w-measure text-body-lg text-copy">마음근력은 타고나는 것이 아니라 반복으로 길러집니다. 내면소통명상의 원리는 두 단계이고, 순서가 중요합니다.</p>
          <TextLink href="/about#teaching" className="mt-6">내면소통명상이란</TextLink>
        </div>
        <div>
          <ol className="hairline-t">{steps.map(step => <li key={step.n} className="hairline-soft-b flex gap-6 py-7">
            <span className="tnum w-8 shrink-0 text-h2 text-brand">{step.n}</span>
            <div><h3 className="text-h3">{step.title}</h3><p className="mt-3 text-body text-copy">{step.body}</p></div>
          </li>)}</ol>
          <h3 className="mt-8 text-h3">세 가지 마음근력</h3>
          <ul className="mt-5 grid gap-5 sm:grid-cols-3">{muscles.map(m => <li key={m.title}><p className="font-semibold text-fg">{m.title}</p><p className="mt-2 text-body-sm text-sub">{m.body}</p></li>)}</ul>
        </div>
      </div>
    </Section>

    <Section id="courses" title="교육과정" lede="처음 배우는 분부터 명상 지도자를 준비하는 분까지. 두 단계로 이어집니다."
      aside={<TextLink href="/courses">교육과정 전체 보기</TextLink>}>
      <div className="course-paths">
        <div className="course-path">
          <p className="text-body-sm text-muted">온라인 · 12주</p>
          <h3 className="mt-4 text-h1">기초과정</h3>
          <p className="mt-5 max-w-measure text-body-lg text-copy">김주환 교수가 처음부터 끝까지 직접 안내합니다. 내면소통명상의 원리를 배우고 수련을 시작합니다.</p>
          <div className="mt-8"><TextLink href="/courses#foundation">기초과정 알아보기</TextLink></div>
          <p className="mt-3 text-meta text-muted">상시 모집</p>
        </div>
        <div className="course-path">
          <p className="text-body-sm text-muted">대면 · 10개월 · 200시간</p>
          <h3 className="mt-4 text-h1">심화과정</h3>
          <p className="mt-5 max-w-measure text-body-lg text-copy">수련을 깊게 이어가며 명상 지도자로 성장합니다. 기초과정 수료 후 지원할 수 있습니다.</p>
          <div className="mt-8"><TextLink href="/courses#advanced">심화과정 알아보기</TextLink></div>
          <p className="mt-3 text-meta text-muted">1기 진행 중 · 2026년 3월–12월</p>
        </div>
      </div>
    </Section>

    <Section id="app" title="배운 수련을 일상으로." lede="교육원에서 배운 수련을 INZEUM 앱으로 매일 밤 이어갑니다."
      aside={<TextLink href="/app">INZEUM 앱 소개</TextLink>}>
      <AppShowcase />
    </Section>

    <Section id="gatherings" title="함께 모이는 날" lede="강의실 밖에서도 수련은 이어집니다. 함께했던 프로그램과 참가자가 나눈 기록을 살펴보세요."
      aside={<TextLink href="/programs">프로그램 보기</TextLink>}>
      <div className="grid gap-12 md:grid-cols-[1.1fr_1fr] md:gap-20">
        <div className="hairline-t">
          <ListRow href="/programs#coex" lead="2025 · 3월" title="내면소통 명상 콘서트" subtitle="코엑스 오디토리움에서 함께한 현장 명상" />
          <ListRow href="/programs#coex" lead="2025 · 10월" title="그릿 워크숍" subtitle="어린이·청소년을 위한 마음근력 교육" />
          <ListRow href="/programs#retreat" lead="2026 · 7월" title="여름 리트릿" subtitle="3박4일, 오대산 자연명상마을" />
          <ListRow href="/programs#training" lead="2026 · 8월" title="심화과정 연수교육" subtitle="5박6일, 카시아 속초" />
          <p className="mt-6 text-body-sm text-sub">다음 모집과 일정은 소식에서 안내합니다.</p>
          <TextLink href="/news" className="mt-3">모집 소식 확인하기</TextLink>
        </div>
        <CommunityPhoto src="/images/community/forest-practice.webp" alt="나무 그늘 아래에서 함께 움직임 명상을 하는 참가자들" caption="속리산 산행 명상" source="https://cafe.naver.com/joohankimlab/11538" width={1600} height={900} />
      </div>
    </Section>
    <Section width="content">
      <h2 className="text-h1 md:text-display">내면소통명상,<br />기초과정에서 시작합니다.</h2>
      <p className="mt-6 text-body-lg text-copy">12주 온라인. 김주환 교수가 직접 안내하는 첫 수련입니다.</p>
      <div className="mt-8"><Button href="/courses#foundation" icon="arrow-right">기초과정 알아보기</Button></div>
    </Section>
  </PageShell>
}
