---
version: 1
slug: "app-page-tsx"
primary_target: "app/page.tsx"
related_targets: []
---

# Surface brief — `/` (home)

Scope: the home page of inzeum.com. Mode: Persuade. Audience: a prospective 기초과정 student
arriving from 김주환 교수's YouTube, usually on a phone. Job: understand what 내면소통명상 is and
who teaches it; act: 기초과정 알아보기. Proof on hand: 4,500+ 수료 · 35만 구독 · 200시간 · 500+
지원; the professor's own mechanism (편안전활); the real app. Untouched: legal pages, the roster,
frozen terminology. Alternates dealt and not taken: app-as-the-door (#7), numbers-as-spine (#4).

## Direction contract

THESIS: One mountain stays while everything else passes over it. Refuses the hero-then-cards page.

OWN-WORLD: Midnight ink #121210, 한지 paper text, one vermilion mark per viewport; Pretendard
only; hairlines, no cards, no shadows; a 수묵 mountain (synthetic, labeled) as the constant ground.

STORY: The visitor sees the name over the mountain, reads the mechanism (편도체 안정화 →
전전두피질 활성화), meets the two courses as a strict sequence, then the professor, the app, the
gatherings; acts on 기초과정 알아보기.

FIRST VIEWPORT: Full-bleed mountain pinned (position: sticky) beneath the first two viewports;
wordmark ~460 px in the upper-left third; one sentence; one paper button; the proof numbers set
along the ridge line in fixed-width tabular figures.

FORM: Sticky-mountain scroll, #3 of my ordered seven; seed key afbb436b (surface, persuade).
Raises: nixie counter → fixed-position tabular numerals; brick instructions → the courses as a
wordless two-step sequence.

FINISH: unreviewed and undocumented is unfinished; this build ends with the finish review, the
verdict, DESIGN.md, and every shipping raster carrying its provenance

## Deviations from the contract, cited (fix batch 2026-09-07)

- **Pin is desktop-only.** Below 768 px the painting sits behind the first viewport only and does
  not stick; body Hangul at 16 px over the bright ridge failed legibility on 390 px frames
  (m1/m2 before the fix). The top 45 % of the painting fades into ink on every width.
- **Proof numbers along the ridge only where the geometry allows it.** On viewports ≥ 768 px wide
  and ≥ 900 px tall the four tabular figures sit inside viewport 1, bottom-aligned 32 svh above the
  fold, over the faded upper slope. Below either threshold (every phone; a 1440×900 laptop with
  browser chrome) the gap between the hero stack and the mist tops is under 150 px, so the numbers
  open viewport 2 instead. One component, two placements, never both shown.
- **One paper button** restored (the outline "INZEUM 앱" was app-as-the-door, dealt and not taken).
- **Hero raster** 3200×1280 (≥ 2880 floor); alternate kept at its 2560 native width. Both synthetic,
  labeled in the file name, the PNG tEXt, and `public/images/sumuk/PROVENANCE.md`.
- **/programs pine painting** added where DESIGN.md's table said none — the page's one artifact,
  in-world, synthetic and labeled.
- **Vermilion budget** is now spent only on the mechanism numerals (1 → 2). The header's active
  item is paper; vermilion is never a control state.
- **App screens** keep an 8 px radius and a hairline: the frame of a real capture, not device chrome.
- **Header lockup** is hidden on `/` until the hero wordmark has scrolled 200 px under it; the
  header is transparent until then. One lockup per screen.
