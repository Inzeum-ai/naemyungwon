/**
 * 사업자 정보 단일 출처.
 *
 * 전자상거래법 제10조(사업자의 신원 등 표시)에 따라 푸터에 표시하고,
 * 개인정보처리방침·이용약관에서도 같은 값을 씁니다. 값이 바뀌면 여기만 고치세요.
 */
export const COMPANY = {
  name: '주식회사 내면소통연구소',
  ceo: '김주환',
  registrationNumber: '202-86-03058',
  mailOrderNumber: '제2025-서울강남-00802호',
  address: '서울특별시 강남구 남부순환로 2645, 4층',
  tel: '010-6650-0945',
  /** 사업자등록상 대표 이메일 */
  email: 'official@joohankim.org',
  /** 서비스 이용자 문의 창구 (앱·웹에 노출되는 주소) */
  serviceEmail: 'official@inzeum.com',
} as const

/** 개인정보보호법 제31조에 따라 지정·공개해야 하는 개인정보 보호책임자 */
export const PRIVACY_OFFICER = {
  name: '김주환',
  title: '대표이사',
  email: COMPANY.serviceEmail,
  tel: COMPANY.tel,
} as const

/** 개인정보처리방침·이용약관 시행일 */
export const EFFECTIVE_DATE = '2026년 8월 10일'

/** `tel:` 링크용 (하이픈 제거) */
export const TEL_HREF = `tel:${COMPANY.tel.replace(/-/g, '')}`
