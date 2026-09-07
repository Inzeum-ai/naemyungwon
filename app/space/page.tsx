import PageShell from '@/components/layout/PageShell'
import Section from '@/components/ui/Section'
import ScrollImage from '@/components/ui/ScrollImage'
import TextLink from '@/components/ui/TextLink'
import { pageMetadata } from '@/lib/seo'
export const metadata = pageMetadata({ title:'인지움 홀', description:'청담에 준비하는 명상과 수련의 공간, 인지움 홀. 촉각으로 들어와, 빛에 머물고, 차 한 잔의 고요함으로 이어지는 공간의 구상.', path:'/space' })
export default function SpacePage() {
 return <PageShell>
  <section className="space-opening studio-shell"><p className="eyebrow">INZEUM HALL · 청담 · 준비 중</p><h1>고요함에,<br />자리를 내어줍니다.</h1><p>명상을 배우고, 함께 수련하고, 오래 머무를 공간.<br />인지움 홀을 준비하고 있습니다.</p></section>
  <div className="studio-shell"><ScrollImage src="/images/space/hall-proposal.webp" alt="인지움 홀 설계 제안, 곡선으로 이어지는 명상 자리와 천장의 빛" width={1920} height={1080} priority caption="설계 제안 이미지 · 실제 완공 모습과 다를 수 있습니다." /></div>
  <Section id="concept" title="돌을 갈아, 고요한 표면을 드러내는 일." lede="공간의 설계 개념은 연마(硏磨). 시선을 붙잡는 요소를 덜어내고, 몸의 감각과 머무는 시간을 생각합니다."><div className="learning-outcomes"><div><span>01 · 촉각</span><h3>발이 먼저 읽는 공간</h3><p>진입 복도의 질감과 온도. 걸음의 감각으로 일상에서 수련으로 들어옵니다.</p></div><div><span>02 · 시각</span><h3>한곳에 모이는 빛</h3><p>곡선을 따라 앉고, 천장에서 내려오는 빛에 머무는 명상홀을 구상합니다.</p></div><div><span>03 · 청각</span><h3>차 한 잔의 속도</h3><p>수련 뒤의 낮은 대화와 고요함이 이어지는 다실을 준비합니다.</p></div></div></Section>
  <section className="space-sequence studio-shell"><ScrollImage src="/images/space/arrival-proposal.webp" alt="돌의 질감과 곡면 벽으로 이루어진 진입 복도 설계 제안" width={1920} height={1080} caption="진입 복도 · 설계 제안" /><div><p className="eyebrow">ARRIVAL</p><h2>바깥의 속도를<br />내려놓고.</h2></div></section>
  <section className="space-sequence space-sequence-reverse studio-shell"><ScrollImage src="/images/space/tea-proposal.webp" alt="창호로 빛을 거르는 다실 설계 제안" width={1920} height={1080} caption="다실 · 설계 제안" /><div><p className="eyebrow">STAY</p><h2>차 한 잔의<br />시간에 머뭅니다.</h2></div></section>
  <Section title="공간의 다음 소식을 전하겠습니다." width="content"><p className="text-body-lg text-sub">현재 준비 중인 공간입니다. 개관일, 이용 방법과 프로그램은 확정 후 안내합니다.</p><TextLink href="/news" className="mt-6">인지움 소식</TextLink></Section>
 </PageShell>
}
