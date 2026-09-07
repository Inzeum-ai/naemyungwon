import Image from 'next/image'
import Link from 'next/link'
import PageShell from '@/components/layout/PageShell'
import InkJourney from '@/components/ui/InkJourney'
import AppShowcase from '@/components/ui/AppShowcase'
import TextLink from '@/components/ui/TextLink'
import Button from '@/components/ui/Button'
import Icon from '@/components/ui/Icon'

export default function Home() {
  return <PageShell bleed>
    <InkJourney />

    <section id="teaching" className="studio-statement studio-shell">
      <h2>마음근력은<br />반복으로 자랍니다.</h2>
      <div className="studio-statement-note">
        <p>뇌과학 기반 내면소통명상을 연구하고 가르칩니다.</p>
        <TextLink href="/about#teaching">내면소통명상이란</TextLink>
      </div>
    </section>

    <section id="professor" className="studio-professor studio-shell">
      <Image src="/images/joohankim.jpg" alt="김주환 교수" width={600} height={650} sizes="(max-width: 767px) 100vw, 40vw" className="studio-professor-photo" />
      <div>
        <h2>김주환 교수</h2>
        <p className="mt-6 text-body-lg text-copy">『내면소통』 『그릿』 『회복탄력성』 저자.<br />내면소통명상을 연구하고 직접 안내합니다.</p>
        <TextLink href="/about" className="mt-8">연구소와 사람들</TextLink>
        <dl className="studio-proof">
          <div><dt>기초과정 수료</dt><dd>4,500+</dd></div>
          <div><dt>유튜브 구독</dt><dd>35만+</dd></div>
        </dl>
      </div>
    </section>

    <section id="learning" className="studio-learning studio-shell">
      <div id="courses" className="studio-section-heading"><h2>배움의 두 단계.</h2><TextLink href="/courses">교육과정 전체 보기</TextLink></div>
      <Link href="/courses#foundation" className="studio-course-line">
        <span className="studio-course-index">01</span><div><h3>기초과정</h3><p>김주환 교수가 직접 안내하는 첫 수련</p></div>
        <span className="studio-course-format">12주 · 온라인</span><Icon name="arrow-up-right" size={24} />
      </Link>
      <Link href="/courses#advanced" className="studio-course-line">
        <span className="studio-course-index">02</span><div><h3>심화과정</h3><p>기초과정 수료 후, 명상 지도자를 향해</p></div>
        <span className="studio-course-format">10개월 · 200시간</span><Icon name="arrow-up-right" size={24} />
      </Link>
    </section>

    <section id="gatherings" className="studio-programs studio-shell">
      <div className="studio-section-heading"><h2>함께 모이는 날.</h2><TextLink href="/programs">프로그램 보기</TextLink></div>
      <div className="studio-projects">
        <Link href="/programs#coex" className="studio-project">
          <div className="studio-project-image"><Image src="/images/community/concert-auditorium-2025.webp" alt="2025 내면소통 명상 콘서트의 무대와 객석" width={1600} height={1200} sizes="(max-width: 767px) 100vw, 60vw" /></div>
          <div className="studio-project-title"><h3>명상 콘서트</h3><Icon name="arrow-up-right" size={24} /></div>
          <p>2025 · 코엑스</p>
        </Link>
        <Link href="/programs#moments" className="studio-project studio-project-offset">
          <div className="studio-project-image"><Image src="/images/community/retreat-room.webp" alt="창밖으로 산이 보이는 리트릿 수련 공간" width={1280} height={1525} sizes="(max-width: 767px) 100vw, 40vw" /></div>
          <div className="studio-project-title"><h3>수련의 풍경</h3><Icon name="arrow-up-right" size={24} /></div>
          <p>리트릿 · 참가자의 기록</p>
        </Link>
      </div>
    </section>

    <section id="app" className="studio-app studio-shell">
      <div className="studio-section-heading"><h2>일상으로<br />이어갑니다.</h2><TextLink href="/app">INZEUM 앱 소개</TextLink></div>
      <AppShowcase />
    </section>

    <section className="studio-close studio-shell">
      <h2>기초부터,<br />차근차근.</h2>
      <div><p className="mb-7 text-body-lg text-copy">12주 온라인. 내면소통명상을 시작하는 첫 과정입니다.</p><Button href="/courses#foundation" icon="arrow-right">기초과정 알아보기</Button></div>
    </section>
  </PageShell>
}
