import TextLink from './TextLink'

export default function AiStory({ full = false }: { full?: boolean }) {
  return <section id="ai-native" className="ai-story studio-shell">
    <div className="ai-story-heading"><p className="eyebrow">INZEUM · AI NATIVE</p><h2>한 사람을<br />깊이 이해하는 기술.</h2><p className="ai-story-lede">누구에게나 같은 명상에서,<br />지금의 나에게 맞는 수련으로.</p></div>
    <div className="ai-story-content">
      <p className="text-body-lg text-copy">내면AI는 김주환 교수의 책과 강의에서 근거를 찾고, 동의한 수련 이력과 기록을 바탕으로 대화를 이어갑니다. 필요한 명상을 함께 찾고, 요청하면 나를 위한 명상 대본을 만듭니다.</p>
      <ol className="ai-steps">
        <li><span>01</span><div><h3>맥락을 이해하고</h3><p>대화, 다시 찾은 명상, 기록과 검사 결과를 연결합니다.</p></div></li>
        <li><span>02</span><div><h3>근거를 찾아 안내하고</h3><p>김주환 교수의 책과 강의를 근거로, 필요한 수련을 안내합니다.</p></div></li>
        <li><span>03</span><div><h3>나만의 명상으로</h3><p>맞춤 대본을 읽고 다듬어, AI 음성이나 내 목소리로 이어갑니다.</p></div></li>
      </ol>
      {!full && <div className="ai-story-links"><TextLink href="/app#technology">개인화와 음성 기술 살펴보기</TextLink><TextLink href="/about#ai-native">AI와 함께 일하는 작은 팀</TextLink></div>}
      {full && <div className="ai-operating"><h3>AI와 함께 만드는 팀</h3><p>인지엄은 AI를 제품과 일하는 방식의 중심에 둡니다. 소수의 팀이 AI 에이전트와 함께 연구 자료를 정리하고, 판단에 필요한 정보를 모으고, 콘텐츠와 소프트웨어를 만듭니다. 행사 안내, 신청 도구, 일정과 문서 정리도 자동화합니다.</p><p>사람은 방향을 정하고 결과를 검토합니다. 더 많은 시간을 교육과 수련의 경험에 쓸 수 있도록.</p></div>}
    </div>
  </section>
}
