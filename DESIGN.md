---
version: draft-1
name: inzeum.com
description: >-
  The public site for INZEUM (내면소통연구소 · 내면소통명상교육원 · the INZEUM app).
  Editorial register on the 수묵 Sumuk 3.0.0 tokens. One painting, one typeface,
  one seal, most of the page empty.
status: DRAFT 2026-09-07 — three decisions are Jaeho's (see §Open decisions). Nothing here is built yet.
tokens-from: inzeum-platform-app/apps/mobile/design-system/tokens/sumuk.tokens.json @ 3.0.0 (ADR 0037)
governed-by: 브랜드가이드-v1.md (2026-06-15). Sumuk governance §8 scopes Sumuk to the mobile app; this file is the site's own contract and takes Sumuk's values as inputs.

colors:
  # ink ground (home · /app · /about)
  background: "#121210"
  background-deep: "#0D0D0C"
  card: "#191816"
  popover: "#211F1B"
  foreground: "#EEE9DE"
  foreground-secondary: "#D9D1C2"
  foreground-tertiary: "#AA9E86"
  muted-foreground: "#968A73"
  border: "#2F2E2B"
  border-soft: "#242320"
  # hanji ground (reading pages: /courses · /faq · legal · bios)
  paper-bg: "#FAF7F1"
  paper-card: "#EEE9DE"
  paper-line: "#E6DFD0"
  ink-on-paper: "#121210"
  ink-on-paper-secondary: "#2C2923"
  # action — primary is a neutral, never the seal (ADR 0037)
  primary: "#EEE9DE"
  primary-foreground: "#121210"
  primary-pressed: "#D9D1C2"
  # the seal — 1–2 points per viewport
  brand: "#F05B43"
  brand-pressed: "#D94B35"
  on-brand: "#121210"
  # status
  success: "#9FB0A6"
  destructive: "#DE5C72"

typography:
  family: Pretendard Variable        # one family, KO + Latin. Fallback "Apple SD Gothic Neo", "Noto Sans KR", sans-serif
  weights: [400, 500, 600]           # 600 is the ceiling
  letter-spacing: 0                  # every level, both scripts
  display-xl: { size: 72px, weight: 600, line-height: 1.20 }   # home hero only, ≥1024px
  display:    { size: 56px, weight: 600, line-height: 1.24 }   # page heroes; mobile 40px
  h1:         { size: 34px, weight: 600, line-height: 1.27 }
  h2:         { size: 24px, weight: 600, line-height: 1.36 }
  h3:         { size: 18px, weight: 600, line-height: 1.44 }
  body-lg:    { size: 19px, weight: 400, line-height: 1.70 }   # reading surfaces
  body:       { size: 17px, weight: 400, line-height: 1.70 }   # site default
  body-sm:    { size: 15px, weight: 400, line-height: 1.60 }
  meta:       { size: 13px, weight: 500, line-height: 1.50 }   # eyebrows, dates. Sentence case, never uppercase
  numeric:    { size: 64px, weight: 600, line-height: 1.10, features: "'tnum' 1" }

spacing: [4, 8, 12, 16, 24, 32, 48, 64, 96, 128]   # 96 added for web section rhythm (app deleted it — zero mobile call sites)
rounded: { sm: 8px, md: 12px, lg: 16px, full: 9999px }
sizes: { hit-target: 44px, button: 52px, row: 56px, gutter-mobile: 24px, gutter-desktop: 48px, content-max: 720px, page-max: 1200px }
---

# inzeum.com

## What this file is

The art direction for the public site, decided **before** any markup, in the order the
`art-direction-first` skill requires: register → hero artifact → type → ground → motion.
Every rule below carries its evidence. A rule with no traceable source is not written.

The site today (Next.js 14 · Tailwind 3 · framer-motion · Vercel) was built to the
January-2026 "Serene Depth" strategy — blue mountain palette, four typefaces, a stock
photo slideshow. That strategy predates both the brand guide (2026-06-15) and Sumuk
(2026-09-03). It is off-brand by every rule the brand guide states: blue accent (the
brand has one accent, vermilion), gradient backgrounds (forbidden), uppercase tracked
eyebrows (forbidden), stock photography, four families (brand: two; Sumuk: one).

  ↳ naemyungwon/tailwind.config.js · styles/globals.css · components/sections/Hero.tsx
    inzeum-brain/data/raw/professor-intake-2026-05-28/naemyungwon_website_strategy_v4.md §3–5
    Filmstrip of the live site: 2026-09-07, 1440×900 and 390×844.

## 1 · Register

**Editorial.** A visitor comes once, wants a feeling, then a reason to trust. The app is
**Instrument**. Both on one brand is correct, provided each surface commits.

  ↳ registers.md — "A marketing landing in Editorial sitting on a console in Instrument is
    correct and common." Secondary test: seen once → Editorial. measured 2026-09-06

What Editorial licenses here: one full-width artifact, display type that is part of the
composition, a committed dark ground, numbered/eyebrow structure. What it does **not**
license: slower motion, more curves, deeper z-stacks (registers.md §"What Editorial does
not license" — darkroom 0.5s, basement 0.3s, family 0.2s).

## 2 · Hero artifact — the gate

**A commissioned 수묵 ink-wash painting, full-bleed on ink.** Kind 1 of 4.

Why this and not the others:

- The style already exists and belongs only to INZEUM: seven ink-wash paintings (달 · 산 ·
  물 · 돌 · 소나무 · 구름 · 싱잉볼), gpt-image-2, curated 2026-07-15, alpha-mask encoded,
  tinted at runtime. They are the app's illustration layer, so the site and the app read
  as one thing without sharing a single component.
    ↳ docs/design/sumuk/components/sumuk-glyph.md · apps/mobile/assets/images/sumuk/
- The brand guide names exactly these motifs: "수묵 그라데이션, 한지 질감, 달·산수·소나무·
  물·돌." The current site reaches for the same idea with stock mountain photos.
    ↳ 브랜드가이드-v1.md §6
- Stock photography is "the single clearest tell" in either register. The current hero
  mixes three kinds (stock photo + logo image + person-in-a-card), which is what produces
  a generic page.
    ↳ art-direction.md §Consistency rules · §The four kinds

**What must be made before markup:** one new painting, subject 산 (a mountain range,
ink density in alpha, RGB white carrier — the same encoding as the seven), at **≥ 2880 px
wide**. The existing assets top out at 768 px and the glyph spec forbids scaling a
painting past its asset size on a hero. Use the `gpt-image-2` skill with one of the seven
as the style reference.
    ↳ sumuk-glyph.md §Don't — "Don't scale a painting up past its asset size on a hero."
      Measured asset widths 2026-09-07: mountain 768, pine 768, water 768, cloud 747, bowl
      694, stone 594, moon 530.

Per-page artifacts (one style per project — the painting style everywhere; the product
appears only where the product is the subject):

| Page | Artifact | Kind |
|---|---|---|
| `/` | 산 painting, full-bleed, tinted `foreground-tertiary` at ~0.9, under the wordmark | commissioned illustration |
| `/app` | Three real screens (수면 · 명상 · 내면AI) on ink, no device chrome | the real product |
| `/about` | 김주환 교수 — full-bleed, natural light, low saturation, negative space; not a rounded card | photograph, per brand §6 |
| `/courses`, `/programs`, legal | none — type and hairlines on hanji | — |

The numbers strip directly under the home hero is the site's **data object** — the claim
only this institute can make: 4,500+ 기초과정 수료 · 35만 구독 · 12주 · 200시간. Set in
`numeric` with tabular figures. It supports the hero; it is not the hero.
    ↳ art-direction.md §4 "A data object" · numbers from components/sections/WhatWeDo.tsx

The professor's face is the trust artifact for this audience and moves to the second
viewport, full-bleed. A person in a tilted rounded rectangle beside text is the generic
layout the skill exists to prevent.

## 3 · Typography

**Pretendard Variable, and nothing else.** Loaded from jsDelivr with the 29cm fallback
stack. The site currently loads Noto Sans KR, Noto Serif KR, Playfair Display, Manrope,
Material Symbols and Pretendard — six requests for one page. All but Pretendard go.

  ↳ typography.md §Fonts — "Pretendard Variable is the safe production default — 29cm ships
    it." · ADR 0037 §6 "One family" · corpus.md#29cm measured 2026-09-06

**Hangul display: tracking `normal`, leading 1.20–1.27.** The current site sets
`tracking-widest` on uppercase Latin eyebrows and `leading-tight` on Korean serif
headings; both invert the measured rule.

  ↳ typography.md — Hangul display `normal` on 7 of 10 KR sites; leading Toss 1.20 · 29cm
    1.20 · karrot 1.31 · toss-tech 1.35. Floor −0.033em (kakaocorp), never deeper.
    KR pass 2026-09-06.

**Display sizes:** 72 px on the home hero at ≥1024 px, 56 px page heroes, 40 px on
phones. Measured display sizes cluster at 56–90 px; Pretendard at 72 as a label over a
painting is a caption on the artifact, not type-as-object, so it does not need a display
face.

  ↳ typography.md §Display scale — Instrument 56–80, Editorial 64–250; darkroom 251 is the
    outlier. Korean display sits heavier (Toss 700, 29cm 700); we hold 600 as the ceiling
    per Sumuk.

**Body 17 px / 1.70 on both grounds, full-strength ink.** Two points above the app's 15
because the reader is a prospective student, often over 40, on a phone in daylight,
reading about a course that costs money. Judgment, not measurement — the measured band is
15–16 / 1.6–1.7.

  ↳ typography.md §Body — "Korean readers over 40 on phones are a real constraint, and gray
    body text at 15px fails them."

Sentence case everywhere. No uppercase transforms — the wordmark is a logotype, not copy.
    ↳ sumuk/content.md §2 · governance.md §3 Type

The wordmark ships as an asset (Marcellus over 나눔명조, drawn, 1574×850). Neither face is
loaded at runtime. A dark-ground variant (한지빛 on 먹, the brand's "제1의 얼굴") is named
in the brand guide but only the light PNGs are in the handoff — it has to be produced.
    ↳ 브랜드가이드-v1.md §3 · docs/handoff/inzeum-2026-06-15/assets/ measured 2026-09-07

## 4 · Ground and depth

**Ink for the front door, hanji for reading.** `/`, `/app`, `/about` sit on `#121210`.
`/courses`, `/programs`, `/faq`, legal and bios sit on `#FAF7F1`.

This is not two designs stitched together; it is the app's own split. The app is ink
everywhere and flips to `paperBg` for 책 / 스크립트 — "the 한지 flip" — because long
reading wants paper. The site has the same two jobs.
    ↳ sumuk.tokens.json `color.paperBg` "Light reading surface (책 / 스크립트 뷰) — the 한지
      flip." · depth-and-ground.md §Ground — Editorial: "the ground is part of the art
      direction."

Known gap before any hanji page ships: the paper ramp has no AA mid-tone on `#FAF7F1`;
`textMuted`/`textFaint` on hanji measure ≈3.3–3.9:1. One more paper step is needed.
That is a Sumuk minor bump, or a site-local token with the reason written beside it.
    ↳ sumuk.tokens.json `theme.hanji.$description`

**Depth is a surface step plus a hairline. No shadows on ink. No gradient backgrounds.**
Hairlines are 13 % paper (`border`) and 8 % (`border-soft`). The current site's
`hero-gradient`, `gradient-overlay`, `bg-gradient-to-b` and card shadows all go.
    ↳ Sumuk DESIGN.md §Elevation · depth-and-ground.md — "Gradient as a page background:
      no. It is the single most common AI-slop tell." · Linear: 28 blurs / 4 z-layers

**Blur budget:** the sticky header's backdrop, and at most one blurred colour field behind
the hero painting for atmosphere. Nothing else.

**z-layers (five, named — never a bare number in CSS):**

```
0  ground
1  content
2  raised     sticky header
3  overlay    mobile nav, dropdowns
4  modal      (none planned)
```
    ↳ depth-and-ground.md §Depth budget · Sumuk `zIndex` base 0 · raised 1 · dock 10 ·
      sheet 20 · toast 30 · overlay 40

**Cards earn themselves.** Groups are open sections — heading, hairline above and below,
transparent ground. The Vision section's five icon cards and the Courses section's two
shadowed cards become two list rows and one open section.
    ↳ Sumuk DESIGN.md §Layout — "Five bordered containers on one settings screen is the
      failure this rule prevents."

## 5 · Motion

**One curve for the whole site: `cubic-bezier(0.2, 0, 0, 1)`** — Sumuk's `settle`.
    ↳ sumuk.tokens.json `motion.easing.settle` · motion.md — Linear ships one curve to 438
      elements; a second curve only for a different physical class.

| Kind | Duration | Where |
|---|---|---|
| State (hover, focus, colour) | 0.15 s | links, buttons, nav |
| Entrance (hero text, once) | 0.45 s, 12 px rise, 80 ms stagger | hero only |
| Anything | never past 0.6 s | — |

    ↳ motion.md — Linear 0.1s×212 · Vercel 0.1s×79 · Cursor 0.15s×79 · Stripe 0.3 · Toss 0.4
      · darkroom 0.5; "no measured top duration exceeds 0.5s." Sumuk `settle` 450 ms /
      rise 12 / stagger 80 · `press` 120 ms.

What goes: the 2.5 s crossfade slideshow (gone with the hero), `whileInView` reveals on
every section, the 4 s breathing CTA, the 0.5 s hover-rotate on the professor card, and
the Lenis inertia scroll the v4 strategy proposed. Buttons get state transitions only.
If anything breathes it is the hero's colour field — 4–6 s, no trigger, Sumuk `breath` —
and it stops under reduced motion rather than shortening.
    ↳ motion.md §Scroll — 20 of 22 sites run no scroll library; Toss builds 50,964 px with
      14 `position:sticky` sections and none. · governance.md §3 Motion — two kinds only,
      productive ≤ 350 ms and expressive 4–6 s loop; no spring, bounce, parallax.

`prefers-reduced-motion` shows the final state (the site already has the block). Add
`?static=1` so filmstrips are deterministic.

## 6 · Components (web set — not a port of the 24)

Sumuk's components are React Native and do not port. The site needs seven, each with
`variant` · `size` · `state`, and a `style` escape for layout only:

Button (primary paper · secondary tonal · outline · ghost, 52 px, radius 12) · Eyebrow
(meta, sentence case, optional index "01") · Section (open, hairlines) · ListRow (56 px,
title + subtitle + trailing, the row is the door) · Numeric (tabular, 64 px) · Painting
(the alpha-mask `<img>` tinted via `mask-image`) · Header (sticky, backdrop blur, five
items).

Promotion rule as in Sumuk: a view becomes shared when it appears on two pages, has a
nameable role, and its API is smaller than its implementation.
    ↳ governance.md §4

## 7 · Content

- No exclamation marks anywhere on the site. Brand-wide, not app-only.
- Name the thing. "기초과정 알아보기", not "마음의 고요함을 찾는 여정". The rejected-copy
  list applies to marketing.
    ↳ sumuk/content.md §4 — "This applies to app UI, mockups, decks and marketing."
- Register split by door: institute pages keep 합니다체 (an institution speaking);
  `/app` speaks 해요체 (the product speaking). See Open decisions.
- One accent point per viewport, two at most: the active nav item, and one live mark.
  Never a vermilion button.
    ↳ ADR 0037 §4 · 브랜드가이드-v1.md §4 "화면당 1~2점"

## 8 · Information architecture (proposal)

The site currently carries three names for one thing — INZEUM, 내면소통연구소,
내면소통명상교육원 — and seven nav items, one of which (`/resources`) is a "준비중" page.
By the brand's own etymology INZEUM *is* the 원; the company is the legal name in the
footer.
    ↳ 브랜드가이드-v1.md §0 — "INZEUM = in + zen + eum … 내면소통 + 명상 + 원"

**Nav (five):** 교육과정 · 프로그램 · 앱 · 소개 · 소식

```
/                 ink    painting · wordmark · one sentence · one paper CTA
                         numbers strip (numeric, 4 figures)
                         교육과정 — two list rows: 기초 12주 온라인 · 심화 10개월 200시간
                         김주환 — full-bleed photo, one paragraph, → /about
                         INZEUM 앱 — three screens on ink, → /app
                         다가오는 프로그램 — dated list rows, → /programs
                         footer (contact · legal · 사업자 정보, unchanged)
/courses          hanji  one page, two open sections; /courses/foundation, /courses/advanced
                         when the content justifies a second page
/programs         hanji  dated list rows (리트릿 · 콘서트 · 워크숍)
/app              ink    real product hero · what it does (six rows, not six cards) ·
                         store links · the five FAQ as a <details> list
/about            ink→hanji  연구소 · 김주환 · 패컬티 · 자문위원 · 연혁 as one long page;
                         hero on ink, bios on hanji
/community/notices → /news   keep; drop /community/free and /community/qna until real
/faq              fold into /courses and the footer; keep the route as a redirect
/resources        remove from nav until it exists (a 준비중 page in the nav is a trust leak)
/privacy /terms /delete-account   hanji, content unchanged (legal text is 갑-approved)
```

Header: wordmark left (dark variant), five items, one active mark in vermilion, sticky
with backdrop blur — the only sticky element. No search, no language switch until
either exists.

## 9 · Token pipeline

The site does not hand-copy hexes. It vendors `sumuk.tokens.json` pinned to a version
(3.0.0 today) and generates `styles/tokens.css` (custom properties) with a short script,
the same shape as the app's `build-tokens.mjs` → `tokens.generated.ts`. Tailwind reads the
custom properties. When Sumuk bumps, the site bumps the pin and reviews the diff.
    ↳ ADR 0036 — "Tokens are data … TypeScript is generated, and CI fails if it is stale."

## 10 · Verification

A green Vercel build is not evidence. Before calling any page done:

```bash
node ~/Code/tools/jaeho-claude-plugins/art-direction-first/skills/art-direction-first/scripts/filmstrip.js http://localhost:3000/ ./out
node …/filmstrip.js http://localhost:3000/ ./out-m --mobile --frames=4
```

Then look at all frames. Check: one accent point per frame, no horizontal overflow, the
painting is not scaled past its asset width, computed `font-family` is Pretendard on the
largest visible text (not the `<h1>` — verify the largest text).
    ↳ SKILL.md §Verification · typography.md §Fonts "Verify against the largest visible text"

## Open decisions (Jaeho's — governance §2)

1. **Ground.** Ink front door + hanji reading pages (recommended, above) · all hanji
   (safest for a 40+ daytime reader; loses the brand's first face) · all ink.
2. **Display face.** Pretendard only, wordmark carries the serif (recommended; matches
   ADR 0037 §6) · or 나눔명조 display per 브랜드가이드 §5, which governance §8 says
   governs the site. If serif: one face, display only, never body.
3. **Voice.** 합니다체 on institute pages + 해요체 on `/app` (recommended) · 해요체
   everywhere (one voice, but an institution addressing a professor's students in 해요체
   is a real choice) · 합니다체 everywhere.
4. **Hero subject.** 산 (recommended — the motif the current site already reaches for) ·
   달 · 소나무.

Until these are answered, nothing in §8 is built. The painting (§2) can be generated now
under any answer.
