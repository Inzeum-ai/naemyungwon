# 내면소통명상교육원 웹사이트

내면소통연구소 산하 교육기관인 **내면소통명상교육원**의 공식 웹사이트입니다.

## 기술 스택

- **Framework**: Next.js 14
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Animation**: Framer Motion
- **Deployment**: Vercel

## 시작하기

### 의존성 설치

```bash
npm install
```

### 개발 서버 실행

```bash
npm run dev
```

[http://localhost:3000](http://localhost:3000)에서 결과를 확인하세요.

### 프로덕션 빌드

```bash
npm run build
npm start
```

## 프로젝트 구조

```
naemyungwon-website/
├── app/                    # Next.js App Router
│   ├── layout.tsx          # 루트 레이아웃
│   └── page.tsx            # 메인 페이지
├── components/
│   ├── layout/             # 레이아웃 컴포넌트
│   │   ├── Header.tsx
│   │   └── Footer.tsx
│   └── sections/           # 섹션 컴포넌트
│       ├── Hero.tsx
│       ├── About.tsx
│       ├── Courses.tsx
│       ├── Faculty.tsx
│       ├── Advisors.tsx
│       └── FAQ.tsx
├── public/
│   └── images/             # 이미지 파일
│       ├── faculty/        # 패컬티 사진
│       └── advisors/       # 자문위원 사진
├── styles/
│   └── globals.css         # 전역 스타일
└── ...config files
```

## 컬러 팔레트

| 이름 | HEX | 용도 |
|------|-----|------|
| Mountain Deep | #4A7BA7 | 주요 강조색 |
| Mountain Mid | #72A2C9 | 보조 강조색 |
| Sky Light | #B1CEDF | 밝은 배경 |
| Cloud | #F5F8FA | 메인 배경 |
| Ink | #2C3E50 | 본문 텍스트 |

## Vercel 배포

이 프로젝트는 Vercel에 바로 배포할 수 있습니다:

1. GitHub에 리포지토리 푸시
2. Vercel에서 리포지토리 연결
3. 자동 배포 완료

## 라이선스

© 2026 내면소통명상교육원. All rights reserved.
