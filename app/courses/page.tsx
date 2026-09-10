import Image from 'next/image'
import Disclosure from '@/components/ui/Disclosure'
import TextLink from '@/components/ui/TextLink'
import SectionNav from '@/components/ui/SectionNav'
import { pageMetadata } from '@/lib/seo'
import PageShell from '@/components/layout/PageShell'
import InkBand from '@/components/ui/InkBand'
import Paper from '@/components/ui/Paper'
import Section from '@/components/ui/Section'

export const metadata = pageMetadata({ title: '교육과정', description: '나를 돌보는 12주 온라인 기초과정에서, 타인을 안내하는 200시간 심화과정으로. 배움과 수련, 공동체로 이어지는 내면소통명상 교육.', path: '/courses' })

export default function CoursesPage() {
  return <PageShell reading="hanji">
    <InkBand title={<>나를 돌보는 힘,<br />누군가를 이끄는 힘.</>} lede="몸으로 배우고, 일상에서 익히고, 함께 나눕니다. 내면소통명상을 처음 만나는 분부터 명상 지도자를 꿈꾸는 분까지." painting={{ src: '/images/sumuk/synthetic-path-on-ink-v2.webp', mobileSrc: '/images/sumuk/synthetic-path-mobile-v2.webp' }} />
    <Paper>
      <SectionNav items={[{ href:'#foundation',label:'나를 위한 기초과정' },{ href:'#advanced',label:'지도자를 위한 심화과정' },{ href:'#community',label:'함께하는 수련' },{ href:'#faq',label:'수강 안내' }]} />
      <Section id="foundation" hairline={false}>
        <div className="course-editorial">
          <div className="course-portrait"><Image src="/images/joohankim_course_portrait.jpeg" alt="내면소통명상을 안내하는 김주환 교수" width={1080} height={1440} sizes="(max-width:767px) 100vw, 45vw" /><p>김주환 교수 · 『내면소통』 저자</p></div>
          <div className="course-intro"><p className="eyebrow">01 · 기초과정</p><h2>기초과정: 하루의 나를 돌아보는 일상적 명상</h2><p className="course-lead">생각을 멈추려고 애쓰기보다,<br />지금의 몸과 호흡을 알아차리는 것부터.</p><p>김주환 교수의 안내로 내면소통명상의 이론과 수행법을 배웁니다. 내 속도로 반복할 수 있는 온라인 수업입니다.</p>
            <dl className="course-facts"><div><dt>기간</dt><dd>12주</dd></div><div><dt>형식</dt><dd>온라인</dd></div><div><dt>강의</dt><dd>약 30시간</dd></div></dl>
            <div className="course-enrollment"><p>2026년 9월 16일 개강</p></div>
          </div>
        </div>
        <div className="learning-outcomes">{[{n:'01',title:'몸의 감각을 읽고',body:'호흡과 움직임에 주의를 기울이며 나의 상태를 알아차립니다.'},{n:'02',title:'나와 대화하고',body:'생각과 감정에서 한 발 물러서고, 자기 자신을 긍정하는 연습을 합니다.'},{n:'03',title:'일상에서 이어갑니다',body:'강의를 다시 듣고 수련하며, 나에게 맞는 반복의 리듬을 찾습니다.'}].map(x=><div key={x.n}><span>{x.n}</span><h3>{x.title}</h3><p>{x.body}</p></div>)}</div>
        <div className="course-detail-fold"><Disclosure question="수강료와 지원 절차"><p>기초과정 5기는 2026년 9월 16일에 시작합니다.</p><div className="mt-5"><TextLink href="https://cafe.naver.com/joohankimlab/12526">5기 모집 안내</TextLink></div></Disclosure><Disclosure question="수료 후에는 어떤 길이 열리나요?"><p>기초과정 수료증이 발급되며, 2027년도 심화과정에 지원할 자격이 주어집니다. 바로 지도자를 목표로 하지 않아도, 배운 수련을 일상에서 계속 이어갈 수 있습니다.</p></Disclosure></div>
      </Section>
      <Section id="advanced">
        <div className="course-intro max-w-measure"><p className="eyebrow">02 · 심화과정 / 1기 진행 중</p><h2>심화과정: 수련자에서 지도자로</h2><p className="course-lead">내가 경험한 고요함을<br />나만의 언어로 전할 수 있도록.</p><p>명상을 직접 설계하고, 다른 사람 앞에서 안내하고, 피드백을 받습니다. 김주환 교수와 움직임·호흡·발성 분야 패컬티가 함께합니다.</p><dl className="course-facts"><div><dt>기간</dt><dd>10개월</dd></div><div><dt>교육</dt><dd>200시간</dd></div><div><dt>지원 자격</dt><dd>기초 수료</dd></div></dl><TextLink href="https://simhwa.joohankim.org/">심화과정 1기 안내</TextLink></div>
        <ol className="practice-process">{[['체화','몸으로 원리를 익힙니다.'],['설계','나의 명상 대본을 씁니다.'],['시연','사람들 앞에서 안내합니다.'],['피드백','함께 돌아보고 다듬습니다.']].map(([title,body],i)=><li key={title}><span>0{i+1}</span><h3>{title}</h3><p>{body}</p></li>)}</ol>
        <Disclosure question="심화과정의 구성과 수료 안내"><p>1기는 2026년 3월부터 12월까지 진행됩니다. 대면 교육과 두 차례의 합숙 연수를 중심으로, 개인 수행·대본 작성·명상 안내 실습을 이어갑니다. 일부 온라인 대체와 수료 요건은 과정별 안내를 따릅니다.</p><p className="mt-3">수료 시 연구소의 내면소통명상 지도자(티처) 자격을 취득하는 과정입니다. 이후 자신이 가르치는 움직임·요가·명상 등의 프로그램에 내면소통명상을 연결하는 길을 준비합니다.</p></Disclosure>
      </Section>
      <Section id="community" title="혼자 배워도, 혼자 남지 않도록." lede="수련을 나누고, 서로의 경험에서 배우고, 다시 만날 사람들. 교육은 수행공동체로 이어집니다.">
        <div className="flex flex-wrap gap-6"><TextLink href="https://cafe.naver.com/joohankimlab">수행공동체 만나보기</TextLink><TextLink href="/programs">리트릿과 명상 콘서트</TextLink></div>
      </Section>
      <Section id="faq" title="시작하기 전에" width="content">
        <Disclosure question="명상 경험이 없어도 괜찮나요?"><p>네. 기초과정은 내면소통명상의 이론과 수행법을 처음부터 배울 수 있도록 구성됩니다. 신비한 체험이나 질환의 치료를 목적으로 하는 과정은 아닙니다.</p></Disclosure>
        <Disclosure question="매주 정해진 시간에 들어야 하나요?"><p>매주 수요일 새 동영상 강의가 업로드되는 온라인 과정입니다. 구체적인 수강 가능 기간과 방법은 교육사이트의 과정 안내를 확인해 주세요.</p></Disclosure>
        <Disclosure question="어떤 과정을 선택하면 좋을까요?"><p>자신의 수련을 시작하고 싶다면 기초과정부터. 기초과정을 수료하고 타인을 안내하는 법을 배우고 싶다면 심화과정에 지원할 수 있습니다.</p></Disclosure>
      </Section>
      <Section id="apply" title="기초과정 5기는 9월 16일에 개강합니다" width="content" />
    </Paper>
  </PageShell>
}
