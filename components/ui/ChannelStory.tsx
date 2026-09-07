import { JOOHAN_CHANNEL as channel } from '@/lib/joohan'
import Icon from './Icon'
import TextLink from './TextLink'

export default function ChannelStory() {
  return <section id="lectures" className="author-channel studio-shell">
    <div><p className="eyebrow">YOUTUBE · 김주환의 내면소통</p><h2>책에서 시작된 질문,<br />강의에서 이어갑니다.</h2><p className="author-channel-lede">매주 일요일 밤 8시, 내면소통명상의 원리와 수련을 나눕니다. 처음 만나는 분도 공개 강의부터 시작할 수 있습니다.</p><TextLink href={channel.url} className="mt-6">김주환의 내면소통 채널</TextLink></div>
    <div><dl className="channel-numbers"><div><dt>구독자</dt><dd>{channel.subscribers}<span>명</span></dd></div><div><dt>채널 누적 조회수</dt><dd>{channel.views}<span>회</span></dd></div></dl><p className="channel-source">{channel.checked} 채널 공개 수치 기준 · 누적 {channel.exactViews}회</p>
      <div className="channel-links"><a href={`${channel.url}/videos`} target="_blank" rel="noopener noreferrer"><div><span>처음 만난다면</span><h3>공개 강의 살펴보기</h3></div><Icon name="arrow-up-right" size={24}/></a><a href={`${channel.url}/streams`} target="_blank" rel="noopener noreferrer"><div><span>함께 수련하려면</span><h3>라이브 강의 다시보기</h3></div><Icon name="play" size={24}/></a></div>
    </div>
  </section>
}
