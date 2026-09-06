import Image from 'next/image'
import { pageMetadata } from '@/lib/seo'
import PageShell from '@/components/layout/PageShell'
import PageHeader from '@/components/ui/PageHeader'
import Section from '@/components/ui/Section'
import PhotoBleed from '@/components/ui/PhotoBleed'

export const metadata = pageMetadata({
  title: '연구소 소개',
  description: '내면소통명상이란 무엇인지, 그리고 내면소통연구소를 이끄는 김주환 교수와 패컬티, 자문위원단을 소개합니다.',
  path: '/about',
})

const steps = [
  {
    n: '1',
    title: '편도체 안정화',
    body: '두려움과 불안을 먼저 가라앉힙니다. 분노는 두려움의 다른 이름이고, 뜨거운 편도체 위에서는 성찰도 감사도 자리 잡지 못합니다.',
  },
  {
    n: '2',
    title: '전전두피질 활성화',
    body: '알아차림, 감사, 자기긍정을 훈련합니다. 반복된 상태는 뇌의 습관이 됩니다. 함께 발화한 신경은 함께 연결됩니다.',
  },
]

const muscles = [
  { title: '자기조절력', body: '감정과 충동을 스스로 다루는 힘. 세 근력의 뿌리입니다.' },
  { title: '대인관계력', body: '자기조절력이 타인에게 향한 것.' },
  { title: '자기동기력', body: '자기조절력이 일에 향한 것.' },
]

const faculty = [
  { name: '김지훈', org: '23년차 배우', specialty: '알아차림·발성 훈련', image: '/images/faculty/kim-jihoon.jpg' },
  { name: '김주현', org: '소마앤바디·힘의집 대표', specialty: '고대 운동·소매틱', image: '/images/faculty/kim-joohyeon.jpg' },
  { name: '김지민', org: '오스모브 창립 대표', specialty: '체화 해부학·위빠사나', image: '/images/faculty/kim-jimin.jpg' },
  { name: '브랜든 최', org: '서울대 음악대학 강사', specialty: '리듬 기반 호흡 명상', image: '/images/faculty/brandon-choi.jpg' },
  { name: '이연', org: '바디올로지 대표', specialty: '자세 정렬·매트 명상', image: '/images/faculty/lee-yeon.jpg' },
  { name: '이유영', org: '바디올로지 대표', specialty: '움직임·소매틱 운동', image: '/images/faculty/lee-yooyoung.jpg' },
  { name: '강수원', org: '밝은빛태극권협회 부원장', specialty: '타이치·도인기공', image: '/images/faculty/kang-soowon.jpg', guest: true },
]

const advisors = [
  { name: '권오현', field: '경영', title: '기재부 중장기전략위원회 위원장, 전 삼성전자 회장, 『초격차』 저자', image: '/images/advisors/kwon-ohyeon.jpg' },
  { name: '김서준', field: '미래비전', title: '해시드 대표', image: '/images/advisors/kim-seojun.jpg' },
  { name: '김완두', field: '명상과학', title: '카이스트 명상과학연구소 소장, 하트스마일명상 창시자', image: '/images/advisors/kim-wandu.jpg' },
  { name: '김은주', field: '정신건강', title: '강남세브란스병원 정신건강의학과 교수 (소아청소년)', image: '/images/advisors/kim-eunju.jpeg' },
  { name: '나군호', field: 'AI · 디지털', title: '네이버헬스케어연구소장, 전 연세대 의과대학 교수', image: '/images/advisors/na-gunho.jpeg' },
  { name: '변찬우', field: '법률', title: '김앤장법률사무소 변호사, 전 광주지검 검사장', image: '/images/advisors/byeon-chanwoo.jpg' },
  { name: '정목 스님', field: '전통명상', title: '성북구 정각사 주지, 유나방송 대표', image: '/images/advisors/monk-jungmok.jpg' },
  { name: '정재승', field: '뇌과학', title: 'KAIST 뇌인지과학과 학과장, 명상과학연구소 연구책임자', image: '/images/advisors/jung-jaeseung.jpg' },
  { name: '채정호', field: '정신건강', title: '서울성모병원 정신건강의학과 교수, 대한명상의학회 초대회장', image: '/images/advisors/chae-jungho.jpeg' },
]

const work = [
  {
    title: '명상 콘텐츠 연구와 개발',
    items: [
      '과학적 근거에 기반한 명상·교육 콘텐츠 개발',
      '내면소통명상 유튜브 운영 (구독자 35만 이상)',
      '매주 밤 8시 라이브 강연, 매월 현장 라이브 강연',
      '삼성어린이집 마음근력 프로그램 개발과 전국 보급',
    ],
  },
  {
    title: '명상 교육과 지도자 양성',
    items: [
      '내면소통명상 기초과정 12주 온라인 운영 (4,500명 이상 수료)',
      '2026년 200명의 명상 지도자 배출을 위한 심화과정 시작',
      '움직임 명상 분야 전문가 7인의 패컬티',
      '내면소통명상법의 지속적 개발',
    ],
  },
  {
    title: '명상 공동체',
    items: [
      '내면소통 명상 콘서트 (코엑스 오디토리움)',
      '신년명상회, 여름 리트릿, 그릿 워크숍',
      '한강공원 존2 달리기',
      '2026년 어린이·청소년 마음근력 클럽 출범',
    ],
  },
]

const history = [
  { year: '2026', events: ['내면소통명상교육원(내명원) 설립', '심화과정 개설 — 10개월 200시간 지도자 자격 과정', '200명 정원에 500명 이상 지원', '3월 심화과정 1기 시작, 12월 수료 예정', '7월 여름 리트릿 (오대산 자연명상마을), 8월 INZEUM 앱 베타'] },
  { year: '2025', events: ['1월 신년명상회', '3월·6월 내면소통 명상 콘서트 (코엑스 오디토리움, 1,000명 이상)', '8월 여름 리트릿 4박5일 (정선 파크로쉬)', '10월 존2 달리기 (한강공원)', '기초과정 1·2·3기 운영, 4,500명 이상 수료'] },
  { year: '2024', events: ['1월 해시드벤처스 투자 유치', '3월 벤처기업 인증', '4월 김주환 교수 대표이사 취임'] },
  { year: '2023', events: ['9월 내면소통연구소 설립'] },
]

export default function AboutPage() {
  return (
    <PageShell>
      <PageHeader
        title="내면소통연구소"
        lede="뇌과학과 심리학에 기반한 명상 교육. 자기 자신과의 깊은 대화로 마음의 힘을 기르고, 그 힘을 가르칠 사람을 키웁니다."
      />

      <Section id="teaching" title="내면소통명상이란">
        <div className="grid gap-10 md:grid-cols-[minmax(0,5fr)_minmax(0,7fr)] md:gap-16">
          <blockquote className="max-w-measure">
            <p className="text-h2 text-fg md:text-h1">
              “내가 나에게 하는 말은 나 자신에게 즉각적이고도 강력한 효과를 갖는다.”
            </p>
            <cite className="mt-4 block text-meta not-italic text-muted">김주환, 『내면소통』</cite>
          </blockquote>
          <div className="max-w-measure space-y-5 text-body text-copy">
            <p>
              내면소통은 내가 나에게 하는 말입니다. 그 말은 몸에 즉각적이고 강력한 효과를 냅니다.
              불안하기 때문에 심장이 두근거리는 것이 아니라, 심장이 두근거리기 때문에 불안을 느낍니다.
              그래서 내면소통명상은 생각이 아니라 몸에서 시작합니다. 호흡, 턱, 눈, 어깨, 자세, 움직임.
            </p>
            <p>
              마음근력은 타고나는 것이 아니라 근육처럼 반복으로 길러집니다. 모든 훈련은 두 단계로 정리되고,
              순서가 중요합니다.
            </p>
            <ol className="hairline-t">
              {steps.map((s) => (
                <li key={s.n} className="hairline-soft-b flex gap-6 py-6">
                  <span className="tnum w-8 shrink-0 text-h2 text-brand">{s.n}</span>
                  <div className="min-w-0">
                    <h3 className="text-h3">{s.title}</h3>
                    <p className="mt-2 text-body text-sub">{s.body}</p>
                  </div>
                </li>
              ))}
            </ol>
            <div className="pt-4">
              <h3 className="text-h3">세 가지 마음근력</h3>
              <ul className="mt-4 space-y-3">
                {muscles.map((m) => (
                  <li key={m.title} className="flex gap-4">
                    <span className="w-24 shrink-0 text-body font-semibold text-fg">{m.title}</span>
                    <span className="text-body text-sub">{m.body}</span>
                  </li>
                ))}
              </ul>
            </div>
            <p>
              하루 10분, 잠들기 전, 8주에서 12주. 잠든 사이에 반복된 상태가 굳어지므로 저녁 수련이
              중심입니다. 명상은 무엇을 하는 시간이 아니라 그저 있는 시간입니다. 애쓰지 않는 애씀.
            </p>
          </div>
        </div>
        <p className="mt-16 max-w-[18em] text-h1 text-fg md:mt-24 md:text-display">텅 빈 고요함 속의 지극한 행복.</p>
      </Section>

      <section id="professor" className="hairline-t">
        <PhotoBleed src="/images/joohankim_11.jpg" alt="김주환 교수" position="50% 20%" split="text-wide" saturate={0.85}>
          <h2 className="text-h1 md:text-display-sm">김주환 교수</h2>
          <ul className="mt-4 space-y-1 text-body text-sub">
            <li>연세대학교 언론홍보영상학부 교수</li>
            <li>뇌과학 기반 내면소통명상 개발자</li>
            <li>『내면소통』 『그릿』 『회복탄력성』 저자</li>
          </ul>
          <p className="mt-8 text-body-lg text-copy">
            다수의 연구·저서·강연을 통해 명상을 대중과 학문의 영역에 연결하며, 마음근력은 훈련으로 기를
            수 있다고 말해 왔습니다. 내면소통연구소에서 교육 철학, 방법론 검증, 인재 양성의 기준을
            총괄하며 학문적 신뢰성과 방향을 책임집니다.
          </p>
        </PhotoBleed>
      </section>

      <Section id="faculty" title="패컬티" lede="내면소통명상 교육을 함께 이끄는 각 분야의 지도자들입니다.">
        <ul className="grid grid-cols-2 gap-x-4 gap-y-10 sm:grid-cols-3 md:grid-cols-4 md:gap-x-6">
          {faculty.map((m) => (
            <li key={m.name}>
              <div className="relative aspect-[3/4] overflow-hidden rounded-md">
                <Image
                  src={m.image}
                  alt={`${m.name} 프로필 사진`}
                  fill
                  sizes="(max-width: 640px) 50vw, (max-width: 768px) 33vw, 25vw"
                  className="object-cover object-top"
                />
              </div>
              <p className="mt-4 text-body font-semibold text-fg">
                {m.name}
                {m.guest && <span className="ml-2 text-meta font-medium text-muted">특별초빙</span>}
              </p>
              <p className="mt-1 text-body-sm text-sub">{m.org}</p>
              <p className="mt-1 text-meta text-muted">{m.specialty}</p>
            </li>
          ))}
        </ul>
      </Section>

      <Section id="advisors" title="자문위원" lede="연구소의 교육 방향과 발전을 위해 조언해 주시는 분들입니다.">
        <ul className="grid grid-cols-2 gap-x-4 gap-y-10 sm:grid-cols-3 md:gap-x-6">
          {advisors.map((a) => (
            <li key={a.name}>
              <div className="relative aspect-square overflow-hidden rounded-md">
                <Image
                  src={a.image}
                  alt={`${a.name} 프로필 사진`}
                  fill
                  sizes="(max-width: 640px) 50vw, 33vw"
                  className="object-cover object-top"
                />
              </div>
              <p className="mt-4 text-body font-semibold text-fg">
                {a.name}
                <span className="ml-2 text-meta font-medium text-muted">{a.field}</span>
              </p>
              <p className="mt-1 text-body-sm text-sub">{a.title}</p>
            </li>
          ))}
        </ul>
      </Section>

      <Section id="work" title="하는 일">
        <div className="grid gap-10 md:grid-cols-3 md:gap-8">
          {work.map((w) => (
            <div key={w.title} className="hairline-t pt-6">
              <h3 className="text-h3">{w.title}</h3>
              <ul className="mt-4 list-disc space-y-2 pl-5 text-body-sm text-sub">
                {w.items.map((it) => (
                  <li key={it}>{it}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </Section>

      <Section id="history" title="연혁" width="content">
        <dl className="hairline-t">
          {history.map((h) => (
            <div key={h.year} className="hairline-soft-b grid grid-cols-[72px_1fr] gap-6 py-6 md:grid-cols-[112px_1fr]">
              <dt className="tnum text-h3 text-fg">{h.year}</dt>
              <dd>
                <ul className="space-y-2 text-body text-sub">
                  {h.events.map((e) => (
                    <li key={e}>{e}</li>
                  ))}
                </ul>
              </dd>
            </div>
          ))}
        </dl>
      </Section>
    </PageShell>
  )
}
