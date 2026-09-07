/** Public channel snapshot; update with a new dated observation, never a rolling invented counter. */
export const JOOHAN_CHANNEL = {
  url: 'https://www.youtube.com/@joohankim',
  checked: '2026.09.08',
  subscribers: '37.5만',
  views: '4,709만',
  exactViews: '47,098,787',
  videos: 291,
} as const

export const JOOHAN_BOOKS = [
  { slug: 'inner', title: '내면소통', year: '2023', edition: '리커버 표지', publisher: '인플루엔셜', description: '마음근력 훈련의 원리와 근거를 만납니다.', note: '인문 베스트셀러', href: 'https://www.yes24.com/product/goods/117643865', width: 826 },
  { slug: 'practice', title: '내면소통 명상수업', year: '2025', edition: '', publisher: '인플루엔셜', description: '읽는 이해에서, 매일의 명상 실천으로.', note: '명상 실천 가이드', href: 'https://www.yes24.com/product/goods/143655313', width: 845 },
  { slug: 'grit', title: '그릿 GRIT', year: '2025', edition: '전면 개정판', publisher: '인플루엔셜', description: '자기조절력과 동기, 관계에서 성장을 찾습니다.', note: '마음근력과 성장', href: 'https://www.yes24.com/product/goods/142805048', width: 845 },
  { slug: 'resilience', title: '회복탄력성', year: '2019', edition: '리커버판', publisher: '위즈덤하우스', description: '시련 뒤에 다시 일어서는 마음의 힘.', note: '스테디셀러', href: 'https://www.yes24.com/product/goods/71743513', width: 845 },
] as const
