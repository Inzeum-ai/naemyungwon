import LegalDocument from '@/components/legal/LegalDocument'
import { pageMetadata, SITE_URL } from '@/lib/seo'
import { COMPANY, PRIVACY_OFFICER, EFFECTIVE_DATE, TEL_HREF } from '@/lib/company'

export const metadata = pageMetadata({
  title: '개인정보처리방침',
  description: 'INZEUM 앱 및 서비스의 개인정보처리방침입니다.',
  path: '/privacy',
})

export default function PrivacyPage() {
  return (
    <LegalDocument
      title="개인정보처리방침"
      description="내면소통연구소는 INZEUM 이용자의 개인정보를 필요한 범위에서 안전하게 처리합니다."
      effectiveDate={`시행일: ${EFFECTIVE_DATE}`}
    >
      <p>
        내면소통연구소(이하 “연구소”)는 INZEUM 앱과 관련 서비스(이하 “서비스”)를
        운영하며 개인정보 보호법 등 관계 법령을 준수합니다.
      </p>

      <section>
        <h2>1. 개인정보의 처리 목적</h2>
        <ul>
          <li>회원 가입, 로그인, 본인 식별 및 계정 관리</li>
          <li>명상 콘텐츠 제공과 재생·수련 기록 관리</li>
          <li>이용자가 입력한 감정·몸감각·감사 기록 및 검사 결과 제공</li>
          <li>내면AI 대화와 이용자가 요청한 개인화 기능 제공</li>
          <li>서비스 문의 대응, 오류 확인, 보안 및 부정 이용 방지</li>
          <li>동의 내역 관리, 내 데이터 다운로드와 계정 삭제 처리</li>
        </ul>
      </section>

      <section>
        <h2>2. 처리하는 개인정보</h2>
        <div className="overflow-x-auto">
          <table>
            <thead>
              <tr><th>구분</th><th>처리 항목</th></tr>
            </thead>
            <tbody>
              <tr>
                <td>계정</td>
                <td>로그인 방식, 로그인 제공자가 발급한 이용자 식별값, 표시 이름, 이메일 로그인 이용 시 이메일 주소와 암호화된 인증정보</td>
              </tr>
              <tr>
                <td>서비스 이용</td>
                <td>앱 언어·시간대·알림 설정, 콘텐츠 재생 및 완료 기록, 즐겨찾기, 접속·오류 기록</td>
              </tr>
              <tr>
                <td>선택 기록</td>
                <td>이용자가 직접 입력한 감정·몸감각, 메모, 감사 기록, 검사 결과</td>
              </tr>
              <tr>
                <td>내면AI</td>
                <td>대화 내용, 대화 요약, 이용자가 저장한 기억, 답변 평가, 개인화 기능 수행에 필요한 정보</td>
              </tr>
              <tr>
                <td>내 목소리</td>
                <td>녹음 제목·길이 등 기록. 녹음 음성 파일은 원칙적으로 이용자의 기기에 저장됩니다.</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p>
          선택 기능에 필요한 동의는 기본적으로 꺼져 있으며, 이용자가 해당 기능을 사용할 때
          선택할 수 있습니다. 현재 베타 서비스에는 광고 목적의 제3자 행동 분석 도구를 사용하지 않습니다.
        </p>
      </section>

      <section>
        <h2>3. 보유 및 이용 기간</h2>
        <p>
          회원정보와 서비스 이용정보는 회원 탈퇴 시까지 보유합니다. 이용자가 앱에서 계정을
          삭제하면 계정에 연결된 개인정보를 지체 없이 삭제합니다. 다만 관계 법령에 따라
          보존할 의무가 있는 정보는 해당 기간 동안 분리하여 보관한 뒤 삭제합니다.
        </p>
        <p>현재 베타 서비스에는 유료 결제 기능이 없으며 결제정보를 수집하지 않습니다.</p>
      </section>

      <section>
        <h2>4. 제3자 제공 및 처리 위탁</h2>
        <p>
          연구소는 이용자의 개인정보를 원칙적으로 제3자에게 제공하지 않습니다. 이용자의
          별도 동의가 있거나 법령에 근거가 있는 경우에만 예외로 합니다.
        </p>
        <p>
          연구소는 서비스 운영에 필요한 범위에서 다음과 같이 개인정보 처리 업무를
          위탁하고 있습니다. 위탁 계약 시 개인정보의 처리 목적과 보호에 관한 사항을
          규정하고, 수탁자가 이를 준수하는지 관리·감독합니다.
        </p>
        <div className="overflow-x-auto">
          <table>
            <thead>
              <tr><th>수탁자</th><th>위탁 업무</th><th>처리 항목</th></tr>
            </thead>
            <tbody>
              <tr>
                <td>Google Cloud Platform</td>
                <td>서버·데이터베이스·콘텐츠 저장소 운영</td>
                <td>서비스 제공에 필요한 데이터 전반</td>
              </tr>
              <tr>
                <td>Google (Gemini · Vertex AI)</td>
                <td>내면AI 답변 생성, 맞춤 명상 대본 생성</td>
                <td>이용자가 입력한 대화 내용, 개인화에 필요한 정보</td>
              </tr>
              <tr>
                <td>Sentry</td>
                <td>오류·장애 기록 수집</td>
                <td>오류 발생 시점의 앱·기기 상태 (이름·이메일·IP 주소 제외)</td>
              </tr>
              <tr>
                <td>Langfuse</td>
                <td>내면AI 답변 품질 점검 및 오류 확인</td>
                <td>내면AI 대화 내용과 응답 기록</td>
              </tr>
              <tr>
                <td>자체 운영 음성합성 서버 (국내)</td>
                <td>맞춤 명상 음원 생성</td>
                <td>생성된 명상 대본 텍스트</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      <section>
        <h2>5. 개인정보의 국외 이전</h2>
        <p>
          연구소는 개인정보 보호법 제28조의8에 따라 다음과 같이 개인정보를 국외로
          이전하고 있습니다. 이전은 서비스 제공에 필요한 시점에 정보통신망을 통해
          이루어지며, 이전받는 자의 보유·이용 기간은 위탁 목적 달성 시까지입니다.
        </p>
        <div className="overflow-x-auto">
          <table>
            <thead>
              <tr>
                <th>이전받는 자</th><th>이전 국가</th><th>이전 항목</th><th>이전 목적</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Google</td>
                <td>미국 등 Google 데이터센터 소재 국가</td>
                <td>내면AI 대화 내용, 맞춤 명상 대본</td>
                <td>AI 답변 및 명상 대본 생성</td>
              </tr>
              <tr>
                <td>Sentry</td>
                <td>미국</td>
                <td>오류 발생 시점의 앱·기기 상태</td>
                <td>장애 원인 확인 및 서비스 안정성 확보</td>
              </tr>
              <tr>
                <td>Langfuse</td>
                <td>일본</td>
                <td>내면AI 대화 내용과 응답 기록</td>
                <td>답변 품질 점검 및 오류 확인</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p>
          이용자는 개인정보의 국외 이전을 거부할 수 있습니다. 다만 위 처리는 내면AI
          기능 제공에 필수적이므로, 거부하는 경우 앱의 동의 관리에서 내면AI 관련 동의를
          철회하고 해당 기능을 이용하지 않는 방법으로 거부할 수 있습니다.
        </p>
        <p>
          이용자가 자신의 목소리로 녹음한 음성 파일은 국외로 이전되지 않으며, 이용자의
          기기에 저장됩니다.
        </p>
      </section>

      <section>
        <h2>6. 이용자의 권리</h2>
        <p>이용자는 앱의 마이 또는 내 데이터 메뉴와 아래 문의처를 통해 다음 권리를 행사할 수 있습니다.</p>
        <ul>
          <li>개인정보 열람·정정 및 내 데이터 다운로드</li>
          <li>기능별 동의 현황 확인과 동의 철회</li>
          <li>개인정보 삭제 및 처리정지 요청</li>
          <li>앱 내 계정 삭제</li>
        </ul>
        <p>베타 서비스는 만 14세 미만 아동의 가입을 지원하지 않습니다.</p>
      </section>

      <section>
        <h2>7. 앱 접근 권한</h2>
        <p>
          앱은 이용자가 자신의 목소리로 명상 대본을 녹음할 때 마이크 권한을, 설정한 안내를
          받을 때 알림 권한을 요청할 수 있습니다. 모두 선택 권한이며 허용하지 않아도 해당
          권한이 필요하지 않은 기능은 이용할 수 있습니다.
        </p>
      </section>

      <section>
        <h2>8. 안전성 확보 조치</h2>
        <ul>
          <li>전송 구간 암호화와 안전한 로그인 정보 관리</li>
          <li>민감한 이용자 작성 내용의 암호화 저장</li>
          <li>이용자별 접근 범위 제한과 동의 확인</li>
          <li>개인정보가 포함된 로그의 최소화</li>
          <li>내 데이터 다운로드와 계정 삭제 기능 제공</li>
        </ul>
      </section>

      <section>
        <h2>9. 내면AI 안내</h2>
        <p>
          내면AI의 답변은 자동 생성되며 의료인의 진단·처방·치료 또는 응급 상담을 대신하지
          않습니다. 연구소는 이용자의 대화 내용을 이용자 동의 없이 범용 AI 모델의 학습
          데이터로 사용하지 않습니다.
        </p>
      </section>

      <section>
        <h2>10. 개인정보의 파기 절차 및 방법</h2>
        <p>
          연구소는 개인정보 보유기간이 지나거나 처리 목적이 달성되면 지체 없이 해당
          개인정보를 파기합니다.
        </p>
        <ul>
          <li>
            파기 절차: 파기 사유가 발생한 개인정보를 선정하고, 개인정보 보호책임자의
            확인을 거쳐 파기합니다.
          </li>
          <li>
            파기 방법: 전자적 파일 형태의 정보는 복구·재생할 수 없는 기술적 방법으로
            삭제하고, 종이에 출력된 정보는 분쇄하거나 소각합니다.
          </li>
        </ul>
        <p>
          관계 법령에 따라 보존해야 하는 정보는 다른 개인정보와 분리하여 해당 기간
          동안 보관한 뒤 같은 방법으로 파기합니다.
        </p>
      </section>

      <section>
        <h2>11. 개인정보 자동 수집 장치의 설치·운영 및 거부</h2>
        <p>
          홈페이지({SITE_URL.replace('https://', '')})는 서비스 제공에 필요한 최소한의
          범위에서만 쿠키를 사용하며, 광고 목적의 행동 분석이나 추적 쿠키는 사용하지
          않습니다. 이용자는 웹 브라우저 설정에서 쿠키 저장을 거부할 수 있습니다.
        </p>
        <p>
          INZEUM 앱은 광고식별자(ADID/IDFA)를 수집하지 않습니다. 앱 이용 기록은 서비스
          제공과 오류 확인 목적으로만 처리합니다.
        </p>
      </section>

      <section>
        <h2>12. 개인정보 보호책임자 및 문의처</h2>
        <p>
          연구소는 개인정보 처리에 관한 업무를 총괄하고 정보주체의 문의·불만 처리 및
          피해 구제를 담당할 개인정보 보호책임자를 다음과 같이 지정하고 있습니다.
        </p>
        <ul>
          <li>개인정보처리자: {COMPANY.name}</li>
          <li>
            개인정보 보호책임자: {PRIVACY_OFFICER.name} ({PRIVACY_OFFICER.title})
          </li>
          <li>
            이메일:{' '}
            <a href={`mailto:${PRIVACY_OFFICER.email}`}>{PRIVACY_OFFICER.email}</a>
          </li>
          <li>
            전화: <a href={TEL_HREF}>{PRIVACY_OFFICER.tel}</a>
          </li>
          <li>주소: {COMPANY.address}</li>
        </ul>
      </section>

      <section>
        <h2>13. 권익침해 구제 방법</h2>
        <p>
          정보주체는 개인정보 침해로 인한 구제를 받기 위하여 아래 기관에 분쟁 해결이나
          상담을 신청할 수 있습니다.
        </p>
        <ul>
          <li>개인정보 분쟁조정위원회 — 1833-6972 / www.kopico.go.kr</li>
          <li>개인정보 침해신고센터 — (국번없이) 118 / privacy.kisa.or.kr</li>
          <li>대검찰청 사이버수사과 — (국번없이) 1301 / www.spo.go.kr</li>
          <li>경찰청 사이버수사국 — (국번없이) 182 / ecrm.police.go.kr</li>
        </ul>
        <p>
          개인정보 보호법 제35조(개인정보의 열람), 제36조(개인정보의 정정·삭제),
          제37조(개인정보의 처리정지 등)에 따른 요구에 대하여 연구소가 한 처분 또는
          부작위로 권리나 이익을 침해받은 사람은 행정심판법에 따라 행정심판을 청구할 수
          있습니다.
        </p>
      </section>

      <section>
        <h2>14. 사업자 정보</h2>
        <ul>
          <li>상호: {COMPANY.name}</li>
          <li>대표자: {COMPANY.ceo}</li>
          <li>사업자등록번호: {COMPANY.registrationNumber}</li>
          <li>통신판매업 신고번호: {COMPANY.mailOrderNumber}</li>
          <li>사업장 주소: {COMPANY.address}</li>
        </ul>
      </section>

      <section>
        <h2>15. 방침의 변경</h2>
        <p>
          방침이 변경되는 경우 시행 전에 서비스 또는 홈페이지를 통해 알립니다. 이용자 권리에
          중요한 변경은 충분한 기간을 두고 알리며 필요한 경우 다시 동의를 받습니다.
        </p>
      </section>
    </LegalDocument>
  )
}
