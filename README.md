# 내명원 - 내면소통명상교육원 웹사이트

뇌과학 기반의 내면소통명상 전문가를 양성하는 내면소통명상교육원(내명원) 공식 웹사이트입니다.

## 기술 스택

- **Framework**: Next.js 14 (App Router)
- **Styling**: Tailwind CSS
- **Icons**: Lucide React
- **Language**: TypeScript
- **Deployment**: Vercel 권장

## 시작하기

### 설치

```bash
npm install
```

### 개발 서버 실행

```bash
npm run dev
```

브라우저에서 [http://localhost:3000](http://localhost:3000)을 열어 확인합니다.

### 프로덕션 빌드

```bash
npm run build
npm run start
```

## 프로젝트 구조

```
naemyungwon/
├── app/
│   ├── layout.tsx          # 루트 레이아웃 (헤더, 푸터 포함)
│   ├── page.tsx            # 메인 페이지 (홈)
│   ├── globals.css         # 글로벌 스타일
│   ├── about/
│   │   ├── page.tsx        # 내명원 소개
│   │   └── faculty/
│   │       └── page.tsx    # 패컬티 소개
│   └── advanced/
│       ├── page.tsx        # 심화과정 안내
│       └── zoom-guide/
│           └── page.tsx    # 줌 면접 가이드
├── components/
│   ├── Header.tsx          # 헤더 컴포넌트
│   └── Footer.tsx          # 푸터 컴포넌트
├── public/
│   └── images/             # 이미지 파일
├── tailwind.config.js      # Tailwind 설정
├── next.config.js          # Next.js 설정
└── package.json
```

> **주의:** App Router 소스는 루트 `app/` 하나뿐입니다. `src/app/` 을 새로 만들면
> Next.js 가 루트 `app/` 을 우선하여 `src/` 는 **조용히 무시**됩니다. 실제로 과거에
> 중복 트리가 존재해 혼란이 있었고, 2026-08 정리 시 삭제했습니다.

## 페이지 구성

| 경로 | 페이지 | 설명 |
|------|--------|------|
| `/` | 메인 | 홈페이지, 과정 소개 카드, 공지사항 |
| `/about` | 내명원 소개 | 비전, 미션, 교육 철학 |
| `/about/faculty` | 패컬티 소개 | 김주환 교수님 및 전문 패컬티 |
| `/advanced` | 심화과정 | 과정 개요, 목표와 특징, 구성 안내, FAQ |
| `/advanced/zoom-guide` | 줌 가이드 | 줌 면접 안내 |

## 브랜치 전략 & 배포

이 저장소는 **`Inzeum-ai/naemyungwon`** 이 유일한 소스입니다.
(2026-08-01 이전에는 `semiotic1/naemyungwon` 에서 배포되었으나 현재는 연결 해제됨)

```
feature/*  ──PR──▶  dev  ──PR──▶  main  ──▶  production
                     │                        app.jkim.net
                     ▼
              staging.naemyungwon.inzeum.com
```

| 브랜치 | 역할 | 배포 대상 |
|--------|------|-----------|
| `main` | 프로덕션. 직접 push 금지, `dev` 에서 PR 로만 병합 | `app.jkim.net` 외 3개 도메인 |
| `dev` | 통합 브랜치. 기능 작업은 여기로 모임 | `staging.naemyungwon.inzeum.com` |
| `feature/*` | 개별 작업 | PR 별 임시 프리뷰 URL |

**규칙 (GitHub 설정으로 강제하지 않음 — 합의사항으로 지킬 것):**

1. `main` 에 직접 push 하지 않습니다. 반드시 `dev` → `main` PR 을 거칩니다.
2. 기능 작업은 `dev` 에서 분기하고, `dev` 로 PR 을 올립니다.
3. `main` 병합 = 즉시 프로덕션 배포입니다. 병합 전 스테이징에서 확인하세요.

```bash
git checkout dev && git pull
git checkout -b feature/my-change
# ... 작업 ...
gh pr create --base dev
```

### CI

`.github/workflows/ci.yml` 이 `dev` / `main` 대상 PR 과 push 에서 실행됩니다:
타입 검사(`tsc --noEmit`) 와 빌드(`next build`). 테스트는 아직 없습니다.
ESLint 설정 파일이 없어 lint 단계는 제외되어 있습니다.

### 배포 (Vercel)

Vercel 프로젝트 `inzeum/naemyungwon` 이 이 저장소에 연결되어 있어
push 시 자동 배포됩니다. 수동 조작이 필요한 경우에만 아래를 사용하세요.

```bash
vercel link --scope inzeum --project naemyungwon
vercel --prod          # 수동 프로덕션 배포
```

## 컬러 팔레트

내명원 브랜드 컬러는 산과 하늘을 연상시키는 차분한 블루-그레이 계열입니다.

- `nm-sky-50` ~ `nm-sky-900`: 메인 컬러 팔레트
- `nm-mist`: #b8c5d0 (안개 색상)
- `nm-mountain`: #6b7d8a (산 색상)
- `nm-deep`: #1e3a5f (깊은 색상)

## 폰트

- **Display (제목)**: Noto Serif KR
- **Body (본문)**: Pretendard

## 추가 개발 예정

- [ ] 기초과정 페이지
- [ ] 프로그램 페이지 (리트릿, 워크샵, 특강, 주환2 운동)
- [ ] 커뮤니티 페이지
- [ ] 자료실 페이지
- [ ] 회원가입/로그인 기능
- [ ] FAQ 전체 페이지

## 라이선스

© 2025. 내면소통연구소. ALL RIGHTS RESERVED.
