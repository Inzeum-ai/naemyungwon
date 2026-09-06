# Product

<!-- impeccable:product-schema 1 -->

<!-- Written 2026-09-07 from repository evidence (this site's copy, inzeum-platform-app AGENTS.md,
     브랜드가이드-v1.md, the 2026-01 website strategy doc) in an unattended session; no interview
     round was possible. Facts marked (inferred) were not confirmed by Jaeho. -->

## Platform

web

## Users

Prospective students of 내면소통명상 — most arrive from 김주환 교수's YouTube channel (35만+
구독) or his books, are often in their 40s–60s, and read on a phone. Their job: decide whether to
apply to the 기초과정 (12주 온라인) or, having completed it, to the 심화과정 (10개월 200시간
명상 지도자 과정). Secondary audiences: 기초과정 수료생 checking programs (리트릿 · 명상 콘서트 ·
신년명상회 · 존2 달리기); 심화과정 cohort members and family/friends looking for the INZEUM app;
wellness professionals (요가 · 필라테스 · 피트니스 · 소매틱스 · 타이치 강사) evaluating the
teacher certificate; press and partners checking who the institute is.

## Product Purpose

inzeum.com is the public front door of 주식회사 내면소통연구소 (INZEUM), the company 김주환 교수
founded in 2023-09 to teach 뇌과학 기반 내면소통명상 and to train meditation teachers through its
school, 내면소통명상교육원 (내명원). The site explains the teaching, presents the two courses, the
programs, the faculty and advisors, and the INZEUM app, and carries the legal pages the app links
to (개인정보처리방침 · 이용약관 · 계정 삭제). Success: a first-time visitor understands what
내면소통명상 is and who teaches it, and finds the course that fits them within seconds.

## Positioning

K-Meditation, not another mindfulness app or school: "Mindfulness watches the mind; INZEUM talks
with the mind." The mechanism is 편안전활 — 편도체 안정화 first, then 전전두피질 활성화 — and the
claim that 마음근력 (자기조절력 · 대인관계력 · 자기동기력) is trainable like muscle, by repetition,
regardless of age. The proof only this institute holds: 4,500+ 기초과정 수료생 across three
cohorts, a 200-seat 심화과정 that drew 500+ applicants in its first year, a 35만+ YouTube
audience, and 김주환 교수 teaching roughly 70% of the advanced curriculum in person.

## Operating Context

- 기초과정: 12주 온라인, weekly video lectures every Wednesday, taught entirely by 김주환 교수;
  수료증 on completion; prerequisite for 심화과정. Admission is need-ordered, not pass/fail; new
  cohorts keep opening.
- 심화과정: 10개월 / 200시간 대면, 1기 started 2026-03 and completes 2026-12; grants the
  내면소통명상 지도자(티처) 자격증 (a 민간 자격 issued by the institute). Two residential
  연수교육 blocks (심화과정 1기 5박6일 연수교육 at 카시아 속초, 2026-08-26–31). ~70% 김주환 교수,
  ~30% faculty (movement meditation: 타이치 · 고대운동 · 자이로키네시스 · 매트 · 소매틱 · 호흡 ·
  발성 · 연기 기반 알아차림).
- Programs beyond courses: 여름 리트릿 (3박4일 오대산 자연명상마을, 2026-07-09–12; 2025 was 4박5일
  정선 파크로쉬), 내면소통 명상 콘서트 (코엑스 오디토리움, 1,000명+), 신년명상회, 그릿 워크숍, 존2
  달리기 (한강공원), 어린이·청소년 마음근력 클럽 (2026 출범). Dates, prices and registration for
  anything current are announced in notices, never assumed.
- INZEUM 앱: sleep + meditation app on 김주환 교수's framework. Live in TestFlight/Play internal
  testing since 2026-08; closed beta with the 심화과정 cohort from 2026-08-26; public launch
  targeted by 2026-12-31. Features: 수면·명상 라이브러리, 내면AI, 내 목소리 (골전도), 기록, 마음근력
  검사. Beta has no payments.
- Contact: official@inzeum.com. Legal entity 주식회사 내면소통연구소, 대표 김주환, 서울 강남구
  남부순환로 2645, 4층.

## Capabilities and Constraints

- Next.js 14 (App Router) · TypeScript · Tailwind 3 · Vercel (project `naemyungwon`, `main` = prod).
  No CMS, no auth, no payments; every page is static. Images are local files under `public/images`.
- Korean is the only language; `lang="ko"`. Legal-page wording is 갑-approved and is not rewritten.
- Faculty (7, one 특별초빙) and advisors (9) are a fixed roster with photos on hand; never add a
  name or promote an advisor to faculty.
- Terminology: 내면AI (never 코치), 명상 (never 콘텐츠), 마음근력 검사 (never 테스트), 내명원 =
  내면소통명상교육원. 리트릿 (residential practice retreat) ≠ 연수교육 (intensive training inside
  심화과정).
- Undecided: whether the site will host 공지사항/community boards (today they are placeholders);
  when app store links go public.

## Brand Commitments

- Name: INZEUM (Latin, capitals) / 인지엄 (국문). in + zen + eum = 내면소통 + 명상 + 원.
- Voice (브랜드가이드-v1 §2): 고요 · 따뜻 · 근거 · 비종교. No exclamation marks. No 오글거림
  (sentimental second-person display copy), no achievement pressure, no religious vocabulary, no
  medical claims. Institute pages speak 합니다체 (inferred); the app speaks 해요체.
- Visual commitments (binding, from 브랜드가이드-v1 and the 수묵 Sumuk 3.0.0 design system): 먹 ink
  #121210 first face, 한지 paper #FAF7F1 for reading, one accent Vermilion #F05B43 spent 1–2 times
  per screen, Pretendard as the one typeface, no gradients (the 수묵 wash is the one exception),
  no shadows on dark, whitespace first. Forbidden imagery: 연꽃 · 만다라 · 단청 · 티베트 볼 · 합장 ·
  purple washes · gold rays · neon.
- Wordmark: two-tier lockup INZEUM (Marcellus) over 내면소통연구소, drawn as an asset; the INZ
  monogram is the app icon. 교수님 picked the logo set on 2026-08-11.
- Sound signature 죽비; motion "숨 쉬듯" — 4–6 s breath loops, never bounce.

## Evidence on Hand

- Photos: 김주환 교수 (2 portraits), 7 faculty, 9 advisors, the 2026 여름 리트릿 poster.
- Numbers that can be stated: 4,500+ 수료 · 35만+ 구독 · 12주 · 200시간 · 500+ 지원 (200 정원) ·
  1,000명+ 콘서트 · 2023-09 설립 · 2024-01 해시드 투자.
- The app's real screens (Sumuk 3.0.0 captures of the five tabs).
- Seven 수묵 ink-wash glyphs (달 · 산 · 물 · 돌 · 소나무 · 구름 · 싱잉볼) from the app; new
  paintings generated in the same style for this site are labeled synthetic in their file names
  until 교수님 supplies or approves final artwork.
