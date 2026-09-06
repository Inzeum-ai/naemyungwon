import LegalDocument from '@/components/legal/LegalDocument'
import { pageMetadata, hanjiViewport } from '@/lib/seo'

export const viewport = hanjiViewport
import { COMPANY, EFFECTIVE_DATE, TEL_HREF } from '@/lib/company'

export const metadata = pageMetadata({
  title: '이용약관',
  description: 'INZEUM 앱 및 서비스의 이용약관입니다.',
  path: '/terms',
})

export default function TermsPage() {
  return (
    <LegalDocument
      title="이용약관"
      description="INZEUM 베타 서비스의 이용 조건과 연구소 및 이용자의 권리·의무를 안내합니다."
      effectiveDate={`시행일: ${EFFECTIVE_DATE}`}
    >
      <section>
        <h2>제1조 목적</h2>
        <p>
          이 약관은 내면소통연구소(이하 “연구소”)가 제공하는 INZEUM 앱과 관련 서비스
          (이하 “서비스”)의 이용 조건과 연구소 및 이용자의 권리·의무를 정하는 것을 목적으로 합니다.
        </p>
      </section>

      <section>
        <h2>제2조 가입 및 계정</h2>
        <ol>
          <li>이용계약은 이용자가 약관과 필수 안내에 동의하고 가입을 신청한 후 연구소가 승인함으로써 성립합니다.</li>
          <li>이용자는 정확한 정보를 제공하고 자신의 계정과 인증수단을 안전하게 관리해야 합니다.</li>
          <li>베타 서비스는 만 14세 미만 아동의 가입을 지원하지 않습니다.</li>
          <li>서로 다른 로그인 방식으로 가입한 계정은 자동으로 통합되지 않을 수 있습니다.</li>
        </ol>
      </section>

      <section>
        <h2>제3조 서비스 내용</h2>
        <p>연구소는 베타 기간에 다음 기능의 전부 또는 일부를 제공할 수 있습니다.</p>
        <ul>
          <li>명상 콘텐츠 재생과 수련 기록</li>
          <li>이용자가 입력한 감정·몸감각·감사 기록과 검사 결과</li>
          <li>내면AI 대화와 개인화된 명상 안내</li>
          <li>이용자 목소리 녹음과 기기 내 재생</li>
          <li>내 데이터 다운로드, 동의 관리와 계정 삭제</li>
          <li>이용자가 설정한 알림</li>
        </ul>
      </section>

      <section>
        <h2>제4조 베타 서비스</h2>
        <ol>
          <li>베타 서비스는 정식 출시 전 기능과 안정성을 점검하기 위해 제한적으로 제공됩니다.</li>
          <li>베타 기간에는 기능이 추가·변경·중단되거나 일부 오류가 발생할 수 있습니다.</li>
          <li>중요한 변경이나 중단이 예정된 경우 가능한 범위에서 미리 알립니다.</li>
          <li>현재 베타 서비스는 무료입니다. 유료 기능을 도입할 때에는 조건을 별도로 안내합니다.</li>
        </ol>
      </section>

      <section>
        <h2>제5조 웰니스 및 내면AI 안내</h2>
        <ol>
          <li>서비스의 명상, 기록, 검사 결과와 내면AI 답변은 일상적인 자기이해와 웰니스 활동을 돕기 위한 참고 정보입니다.</li>
          <li>서비스는 의료기기가 아니며 의료인의 진단·검사·처방·치료 또는 응급 서비스를 대신하지 않습니다.</li>
          <li>내면AI의 답변은 자동 생성되므로 부정확하거나 불완전할 수 있습니다.</li>
          <li>건강상의 우려가 있거나 중요한 판단이 필요한 경우 자격을 갖춘 전문가에게 상담해야 합니다.</li>
          <li>이용자는 내면AI에 서비스 제공에 불필요한 주민등록번호, 금융정보 또는 타인의 개인정보를 입력해서는 안 됩니다.</li>
        </ol>
      </section>

      <section>
        <h2>제6조 이용자의 의무</h2>
        <p>이용자는 다음 행위를 해서는 안 됩니다.</p>
        <ul>
          <li>타인의 계정이나 정보를 도용하는 행위</li>
          <li>서비스의 정상적인 운영을 방해하거나 보안 기능을 우회하는 행위</li>
          <li>콘텐츠를 무단 복제·배포·판매하거나 별도 서비스의 자료로 이용하는 행위</li>
          <li>자동화된 수단으로 과도한 요청을 보내거나 데이터를 무단 수집하는 행위</li>
          <li>법령 또는 타인의 권리를 침해하는 내용을 입력·전송하는 행위</li>
        </ul>
      </section>

      <section>
        <h2>제7조 콘텐츠와 권리</h2>
        <ol>
          <li>연구소가 제공하는 명상 음원, 대본, 디자인, 상표, 프로그램 등은 연구소 또는 정당한 권리자에게 권리가 있습니다.</li>
          <li>이용자는 서비스를 개인적이고 비상업적인 목적으로 이용할 수 있습니다.</li>
          <li>이용자가 직접 작성하거나 녹음한 내용의 권리는 이용자에게 있습니다. 연구소는 서비스 제공에 필요한 범위에서만 이를 처리합니다.</li>
        </ol>
      </section>

      <section>
        <h2>제8조 개인정보 보호</h2>
        <p>
          연구소는 개인정보처리방침에 따라 개인정보를 처리합니다. 자세한 내용은
          {' '}<a href="/privacy">개인정보처리방침</a>에서 확인할 수 있습니다.
        </p>
      </section>

      <section>
        <h2>제9조 변경·중단 및 탈퇴</h2>
        <ol>
          <li>연구소는 운영상 또는 기술상 필요에 따라 서비스 일부를 변경할 수 있습니다.</li>
          <li>회원은 앱 내 계정 삭제 기능을 통해 언제든지 이용계약을 해지할 수 있습니다.</li>
          <li>계정 삭제 시 서버에 저장된 계정과 연결 데이터는 개인정보처리방침에 따라 삭제됩니다.</li>
          <li>기기에만 저장된 녹음 파일 등은 이용자가 직접 삭제해야 할 수 있습니다.</li>
        </ol>
      </section>

      <section>
        <h2>제10조 책임</h2>
        <ol>
          <li>연구소는 관계 법령에 따라 서비스를 안정적으로 제공하고 개인정보를 보호하기 위해 노력합니다.</li>
          <li>연구소의 고의 또는 과실로 손해가 발생한 경우 관계 법령에 따라 책임을 부담합니다.</li>
          <li>이용자의 귀책사유나 연구소가 합리적으로 통제하기 어려운 사유로 발생한 손해는 연구소에 귀책사유가 없는 범위에서 책임을 부담하지 않습니다.</li>
          <li>베타 서비스라는 이유로 연구소의 고의·중과실 또는 개인정보 보호 의무 위반 책임이 면제되지는 않습니다.</li>
        </ol>
      </section>

      <section>
        <h2>제11조 약관 변경 및 분쟁 해결</h2>
        <ol>
          <li>약관을 변경하는 경우 적용일과 사유를 시행 전에 서비스 또는 홈페이지를 통해 알립니다.</li>
          <li>이 약관은 대한민국 법률을 따릅니다.</li>
          <li>분쟁이 발생한 경우 상호 협의하며, 해결되지 않으면 관계 법령에 따른 관할 법원에서 해결합니다.</li>
        </ol>
      </section>

      <section>
        <h2>제12조 사업자 정보 및 문의</h2>
        <ul>
          <li>상호: {COMPANY.name}</li>
          <li>대표자: {COMPANY.ceo}</li>
          <li>사업자등록번호: {COMPANY.registrationNumber}</li>
          <li>통신판매업 신고번호: {COMPANY.mailOrderNumber}</li>
          <li>사업장 주소: {COMPANY.address}</li>
          <li>
            전화: <a href={TEL_HREF}>{COMPANY.tel}</a>
          </li>
          <li>
            서비스 문의:{' '}
            <a href={`mailto:${COMPANY.serviceEmail}`}>{COMPANY.serviceEmail}</a>
          </li>
        </ul>
      </section>
    </LegalDocument>
  )
}
