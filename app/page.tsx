import { JOOHAN_CHANNEL } from '@/lib/joohan'
import CommunityWall from '@/components/ui/CommunityWall'
import Image from 'next/image'
import ConcertFilm from '@/components/ui/ConcertFilm'
import ScrollImage from '@/components/ui/ScrollImage'
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

    <section id="vision" className="studio-statement studio-shell">
      <h2>나를 돌보는 힘이,<br />함께 사는 힘으로.</h2>
      <div className="studio-statement-note">
        <p>명상이 일상의 문화가 되는 나라. 인지엄은 교육과 수행공동체, AI 기술과 공간을 연결해 그 변화를 만듭니다.</p>
        <TextLink href="/about#vision">인지엄의 비전</TextLink>
      </div>
    </section>

    <div className="vision-paths studio-shell">{[{n:"01",title:"교육",body:"몸으로 익히는 내면소통명상",href:"/courses"},{n:"02",title:"수행공동체",body:"수련을 이어갈 사람들",href:"/programs"},{n:"03",title:"앱 · AI",body:"개인화 AI와 나만의 명상",href:"/app"},{n:"04",title:"공간",body:"인지엄 홀 · 준비 중",href:"/space"}].map(item => <Link href={item.href} key={item.n}><span>{item.n}</span><h3>{item.title}</h3><p>{item.body}</p><Icon name="arrow-up-right" size={20} /></Link>)}</div>

    <section id="professor" className="studio-professor studio-shell">
      <Image src="/images/joohankim.jpg" alt="김주환 교수" width={600} height={650} sizes="(max-width: 767px) 100vw, 40vw" className="studio-professor-photo" />
      <div>
        <h2>김주환 교수</h2>
        <p className="mt-6 text-body-lg text-copy">『내면소통』 『내면소통 명상수업』<br />『그릿』 『회복탄력성』 저자.<br />내면소통명상을 연구하고 직접 안내합니다.</p>
        <TextLink href="/about" className="mt-8">연구소와 사람들</TextLink>
        <dl className="studio-proof">
          <div><dt>기초과정 수료</dt><dd>4,500+</dd></div>
          <div><dt>유튜브 구독 · {JOOHAN_CHANNEL.checked}</dt><dd>{JOOHAN_CHANNEL.subscribers}</dd></div>
        </dl>
      </div>
    </section>

    <section id="learning" className="studio-learning studio-shell">
      <div id="courses" className="studio-section-heading"><h2>나를 위한 수련에서,<br />누군가를 위한 안내로.</h2><TextLink href="/courses">교육과정 전체 보기</TextLink></div>
      <Link href="/courses#foundation" className="studio-course-line">
        <span className="studio-course-index">01</span><div><h3>기초과정</h3><p>몸과 호흡을 알아차리고, 나를 돌보는 연습</p></div>
        <span className="studio-course-format">12주 · 온라인</span><Icon name="arrow-up-right" size={24} />
      </Link>
      <Link href="/courses#advanced" className="studio-course-line">
        <span className="studio-course-index">02</span><div><h3>심화과정</h3><p>나만의 언어로 명상을 안내하는 실습과 피드백</p></div>
        <span className="studio-course-format">10개월 · 200시간</span><Icon name="arrow-up-right" size={24} />
      </Link>
    </section>

    <section id="gatherings" className="home-gatherings studio-shell">
      <div id="concert-film" className="studio-section-heading"><div><p className="eyebrow">명상 콘서트 · 수행공동체</p><h2>같은 자리에,<br />저마다의 고요.</h2></div><div className="home-film-intro"><p>김주환 교수의 안내, 음악과 움직임, 그리고 함께하는 사람들. 글로 다 담지 못한 수련의 순간을 만납니다.</p><TextLink href="/programs#coex">명상 콘서트 자세히 보기</TextLink></div></div>
      <ConcertFilm />
      <div className="concert-photo-pair">
        <ScrollImage src="/images/concert/greeting.webp" alt="김주환 교수가 콘서트에서 참가자를 만나 대화하는 모습" width={1920} height={1280} caption="수련의 전후, 서로를 만나는 시간" />
        <ScrollImage src="/images/concert/lecture.webp" alt="내면소통명상의 원리를 설명하는 김주환 교수와 강연 화면" width={1920} height={1280} caption="내면소통명상의 원리를 함께 배우고" />
      </div>
      <div className="home-event-links"><TextLink href="/programs#retreat">오대산 여름 리트릿</TextLink><TextLink href="/programs#training">8월 집중 연수교육</TextLink><TextLink href="/programs#moments">일상의 수행공동체</TextLink></div>
    </section>
    <CommunityWall compact />

    <section id="ai-native" className="studio-app home-personal-app studio-shell">
      <div id="app" className="studio-section-heading"><div><p className="eyebrow">인지엄 앱 · 내면AI</p><h2>지금의 나에게,<br />맞는 명상.</h2></div><div className="home-film-intro"><p>김주환 교수의 책과 강의를 근거로, 동의한 수련과 기록을 바탕으로 필요한 명상을 안내합니다. 대화에서 나만의 대본과 목소리까지.</p><TextLink href="/app">앱과 개인화 AI 살펴보기</TextLink></div></div>
      <AppShowcase initialScreen="inner-ai" />
    </section>

    <section id="space" className="home-space home-space-compact studio-shell">
      <div className="studio-section-heading"><div><p className="eyebrow">청담 · 준비 중</p><h2>고요함에,<br />자리를 내어줍니다.</h2></div><TextLink href="/space">인지엄 홀 살펴보기</TextLink></div>
      <ScrollImage src="/images/space/hall-proposal.webp" alt="인지엄 홀 설계 제안 이미지, 둥근 천장 빛과 곡선으로 배치한 명상 자리" width={1920} height={1080} caption="인지엄 홀 · 설계 제안 이미지 / 실제 완공 모습과 다를 수 있습니다." />
    </section>
    <section className="studio-close studio-shell">
      <h2>나의 수련이,<br />시작되는 곳.</h2>
      <div><p className="mb-7 text-body-lg text-copy">혼자 시작해도, 함께 이어갈 수 있도록. 내면소통명상 기초과정에서 첫걸음을 내딛어 보세요.</p><Button href="/courses#foundation" icon="arrow-right">기초과정 알아보기</Button></div>
    </section>
  </PageShell>
}
