import LegalDocument from '@/components/legal/LegalDocument'
import { pageMetadata } from '@/lib/seo'
import { COMPANY, EFFECTIVE_DATE } from '@/lib/company'

export const metadata = pageMetadata({
  title: '계정 및 데이터 삭제',
  description: 'INZEUM 계정과 저장된 데이터를 삭제하는 방법을 안내합니다.',
  path: '/delete-account',
})

export default function DeleteAccountPage() {
  return (
    <LegalDocument
      eyebrow="ACCOUNT DELETION"
      title="계정 및 데이터 삭제"
      description="INZEUM 계정과 계정에 저장된 데이터를 삭제하는 방법, 삭제되는 항목과 남는 항목을 안내합니다."
      effectiveDate={`시행일: ${EFFECTIVE_DATE}`}
    >
      <section>
        <h2>앱에서 직접 삭제하기</h2>
        <p>앱을 사용 중이라면 아래 경로에서 직접 삭제할 수 있습니다. 별도 요청이나 대기 없이 즉시 처리됩니다.</p>
        <ol>
          <li>INZEUM 앱 실행 후 로그인</li>
          <li>프로필 탭 → 설정</li>
          <li>계정 삭제 → 안내 확인 후 삭제</li>
        </ol>
      </section>

      <section>
        <h2>앱 없이 요청하기</h2>
        <p>
          앱을 이미 삭제했거나 로그인할 수 없는 경우
          {' '}<a href={`mailto:${COMPANY.serviceEmail}`}>{COMPANY.serviceEmail}</a>로 요청해 주세요.
          본인 확인을 위해 가입에 사용한 이메일 주소 또는 로그인 방식(카카오·구글·Apple)을 함께 알려주시면
          됩니다. 접수 후 영업일 기준 10일 이내에 처리하고 결과를 회신합니다.
        </p>
      </section>

      <section>
        <h2>삭제되는 데이터</h2>
        <p>계정을 삭제하면 서버에 저장된 아래 데이터가 모두 삭제됩니다. 복구할 수 없습니다.</p>
        <ul>
          <li>계정 정보와 로그인 수단(이메일·카카오·구글·Apple 연결)</li>
          <li>로그인 세션 및 인증 토큰</li>
          <li>내면AI 대화 내용과 기억</li>
          <li>명상 재생·완료 기록, 체크인 기록</li>
          <li>즐겨찾기와 오프라인 다운로드 기록</li>
          <li>이용자가 녹음한 음성과 그 백업 파일</li>
          <li>이용자를 위해 생성된 맞춤 명상과 그 오디오 파일</li>
          <li>검사 결과, 감사 기록</li>
          <li>동의 기록과 접근 기록</li>
        </ul>
      </section>

      <section>
        <h2>삭제 후 남는 정보</h2>
        <p>
          삭제가 정상적으로 이루어졌음을 확인하기 위한 최소한의 기록만 남습니다. 이 기록에는 이메일,
          이름, 로그인 식별자 등 개인을 알아볼 수 있는 정보가 포함되지 않으며, 삭제 시점·사용한 로그인
          방식의 종류·보유했던 기록의 개수만 남습니다. 이 정보만으로는 특정 개인을 다시 식별할 수 없습니다.
        </p>
        <p>
          관계 법령에 따라 보존이 필요한 항목이 있는 경우에는
          {' '}<a href="/privacy">개인정보처리방침</a>에 정한 기간 동안 분리 보관한 뒤 파기합니다.
        </p>
      </section>

      <section>
        <h2>기기에 남는 파일</h2>
        <p>
          기기에만 저장되어 서버로 전송되지 않은 파일(오프라인 재생을 위해 내려받은 음원 등)은 앱을
          삭제하면 함께 제거됩니다.
        </p>
      </section>

      <section>
        <h2>문의</h2>
        <ul>
          <li>상호: {COMPANY.name}</li>
          <li>
            문의: <a href={`mailto:${COMPANY.serviceEmail}`}>{COMPANY.serviceEmail}</a>
          </li>
        </ul>
        <p>
          개인정보 처리에 관한 자세한 내용은 <a href="/privacy">개인정보처리방침</a>을,
          서비스 이용 조건은 <a href="/terms">이용약관</a>을 확인해 주세요.
        </p>
      </section>
    </LegalDocument>
  )
}
