import { SITE_NAME, SITE_URL, SITE_DESCRIPTION } from './seo'
import { COMPANY } from './company'

/**
 * 검색엔진이 조직 정보를 구조화된 형태로 읽을 수 있게 합니다 (schema.org).
 * 구글 지식 패널·리치 결과의 근거가 되고, 사이트에 흩어져 있는
 * 상호·주소·연락처가 서로 다른 값으로 읽히는 것을 막습니다.
 */
export const organizationSchema = {
  '@context': 'https://schema.org',
  '@type': 'EducationalOrganization',
  '@id': `${SITE_URL}/#organization`,
  name: SITE_NAME,
  alternateName: ['내면소통연구소', '내면소통명상교육원', '내명원', 'INZEUM', 'Naemyungwon'],
  legalName: COMPANY.name,
  url: SITE_URL,
  logo: {
    '@type': 'ImageObject',
    url: `${SITE_URL}/images/inzeum_logo.png`,
  },
  image: `${SITE_URL}/og.jpg`,
  description: SITE_DESCRIPTION,
  founder: {
    '@type': 'Person',
    name: '김주환',
    jobTitle: '대표이사',
  },
  address: {
    '@type': 'PostalAddress',
    streetAddress: '남부순환로 2645, 4층',
    addressLocality: '강남구',
    addressRegion: '서울특별시',
    addressCountry: 'KR',
  },
  contactPoint: {
    '@type': 'ContactPoint',
    contactType: 'customer support',
    email: COMPANY.serviceEmail,
    telephone: `+82-${COMPANY.tel.replace(/^0/, '').replace(/-/g, '-')}`,
    availableLanguage: ['Korean'],
  },
  sameAs: ['https://www.youtube.com/@joohankim'],
} as const

export const websiteSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  '@id': `${SITE_URL}/#website`,
  url: SITE_URL,
  name: SITE_NAME,
  description: SITE_DESCRIPTION,
  inLanguage: 'ko-KR',
  publisher: { '@id': `${SITE_URL}/#organization` },
} as const
