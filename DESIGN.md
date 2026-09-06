---
name: inzeum.com
description: >-
  The public site for INZEUM (내면소통연구소 · 내면소통명상교육원 · the INZEUM app) on the
  수묵 Sumuk 3.0.0 tokens. One mountain, one typeface, one seal, most of the page empty.
colors:
  # 먹 ink ramp — the ground every page opens and closes on; the whole page on /, /app, /about, 404
  midnight-ink: "#121210"
  deep-ink: "#0D0D0C"
  ink-surface: "#191816"
  ink-raised: "#211F1B"
  ink-chip: "#2C2923"
  hairline-on-ink: "#2F2E2B"
  hairline-soft-on-ink: "#242320"
  # 한지 paper ramp — text on ink; the reading ground under the band on /courses, /programs, /news, /faq, /resources; the whole page on legal
  hanji: "#FAF7F1"
  hanji-light: "#EEE9DE"
  hanji-line: "#E6DFD0"
  hanji-body: "#D9D1C2"
  hanji-sub: "#AA9E86"
  hanji-muted: "#968A73"
  bunchung: "#887E6B"
  ink-meta-on-hanji: "#6F6656"
  hairline-on-hanji: "rgb(18 18 16 / 0.12)"
  hairline-soft-on-hanji: "rgb(18 18 16 / 0.08)"
  # the seal — spent 1–2 times per viewport, today only on the mechanism numerals
  vermilion-seal: "#F05B43"
  vermilion-pressed: "#D94B35"
typography:
  display:
    fontFamily: "Pretendard Variable, Pretendard, Apple SD Gothic Neo, Noto Sans KR, system-ui, sans-serif"
    fontSize: "56px"
    fontWeight: 500
    lineHeight: 1.2
    letterSpacing: "0"
  display-sm:
    fontFamily: "Pretendard Variable, Pretendard, Apple SD Gothic Neo, Noto Sans KR, system-ui, sans-serif"
    fontSize: "40px"
    fontWeight: 500
    lineHeight: 1.2
    letterSpacing: "0"
  h1:
    fontFamily: "Pretendard Variable, Pretendard, Apple SD Gothic Neo, Noto Sans KR, system-ui, sans-serif"
    fontSize: "36px"
    fontWeight: 600
    lineHeight: 1.25
    letterSpacing: "0"
  h2:
    fontFamily: "Pretendard Variable, Pretendard, Apple SD Gothic Neo, Noto Sans KR, system-ui, sans-serif"
    fontSize: "24px"
    fontWeight: 600
    lineHeight: 1.35
    letterSpacing: "0"
  h3:
    fontFamily: "Pretendard Variable, Pretendard, Apple SD Gothic Neo, Noto Sans KR, system-ui, sans-serif"
    fontSize: "20px"
    fontWeight: 600
    lineHeight: 1.4
    letterSpacing: "0"
  body-lg:
    fontFamily: "Pretendard Variable, Pretendard, Apple SD Gothic Neo, Noto Sans KR, system-ui, sans-serif"
    fontSize: "18px"
    fontWeight: 400
    lineHeight: 1.75
    letterSpacing: "0"
  body:
    fontFamily: "Pretendard Variable, Pretendard, Apple SD Gothic Neo, Noto Sans KR, system-ui, sans-serif"
    fontSize: "16px"
    fontWeight: 400
    lineHeight: 1.7
    letterSpacing: "0"
  body-sm:
    fontFamily: "Pretendard Variable, Pretendard, Apple SD Gothic Neo, Noto Sans KR, system-ui, sans-serif"
    fontSize: "14px"
    fontWeight: 400
    lineHeight: 1.6
    letterSpacing: "0"
  meta:
    fontFamily: "Pretendard Variable, Pretendard, Apple SD Gothic Neo, Noto Sans KR, system-ui, sans-serif"
    fontSize: "13px"
    fontWeight: 500
    lineHeight: 1.5
    letterSpacing: "0"
  numeric:
    fontFamily: "Pretendard Variable, Pretendard, Apple SD Gothic Neo, Noto Sans KR, system-ui, sans-serif"
    fontSize: "56px"
    fontWeight: 500
    lineHeight: 1.1
    letterSpacing: "0"
    fontFeature: "'tnum' 1"
  numeric-sm:
    fontFamily: "Pretendard Variable, Pretendard, Apple SD Gothic Neo, Noto Sans KR, system-ui, sans-serif"
    fontSize: "40px"
    fontWeight: 500
    lineHeight: 1.1
    letterSpacing: "0"
    fontFeature: "'tnum' 1"
rounded:
  none: "0"
  sm: "8px"
  md: "12px"
  lg: "16px"
  full: "9999px"
spacing:
  space-1: "4px"
  space-2: "8px"
  space-3: "12px"
  space-4: "16px"
  space-5: "24px"
  space-6: "32px"
  space-7: "48px"
  space-8: "64px"
  space-9: "96px"
  space-10: "128px"
  gutter: "24px"
  gutter-lg: "48px"
  section: "64px"
  section-md: "96px"
  header: "64px"
components:
  button-primary:
    backgroundColor: "{colors.hanji-light}"
    textColor: "{colors.midnight-ink}"
    typography: "{typography.body}"
    rounded: "{rounded.md}"
    padding: "0 24px"
    height: "52px"
  button-primary-hover:
    backgroundColor: "{colors.hanji-body}"
    textColor: "{colors.midnight-ink}"
  button-outline:
    textColor: "{colors.hanji-light}"
    typography: "{typography.body}"
    rounded: "{rounded.md}"
    padding: "0 24px"
    height: "52px"
  button-outline-hover:
    backgroundColor: "{colors.ink-surface}"
  button-ghost:
    textColor: "{colors.hanji-sub}"
    typography: "{typography.body}"
    rounded: "{rounded.md}"
    padding: "0 12px"
    height: "52px"
  button-ghost-hover:
    textColor: "{colors.hanji-light}"
  button-disabled:
    backgroundColor: "{colors.ink-raised}"
    textColor: "{colors.hanji-muted}"
  header:
    height: "64px"
    typography: "{typography.body-sm}"
  nav-link:
    textColor: "{colors.hanji-sub}"
    typography: "{typography.body-sm}"
    rounded: "{rounded.sm}"
    padding: "0 12px"
    height: "44px"
  nav-link-active:
    textColor: "{colors.hanji-light}"
  list-row:
    textColor: "{colors.hanji-light}"
    typography: "{typography.body}"
    padding: "16px 0"
    height: "56px"
  list-row-lead:
    textColor: "{colors.hanji-muted}"
    typography: "{typography.meta}"
    width: "112px"
  facts-label:
    textColor: "{colors.hanji-muted}"
    typography: "{typography.meta}"
    width: "112px"
  numbers-value:
    textColor: "{colors.hanji-light}"
    typography: "{typography.numeric}"
  disclosure-trigger:
    textColor: "{colors.hanji-light}"
    typography: "{typography.body}"
    padding: "20px 0"
    height: "56px"
  section:
    padding: "64px 24px"
  page-header:
    typography: "{typography.display-sm}"
    padding: "64px 24px 48px"
  ink-band:
    backgroundColor: "{colors.midnight-ink}"
    textColor: "{colors.hanji-light}"
    typography: "{typography.display-sm}"
    padding: "112px 24px 64px"
  paper:
    backgroundColor: "{colors.hanji}"
    textColor: "{colors.midnight-ink}"
  text-link:
    textColor: "{colors.hanji-light}"
    typography: "{typography.body}"
    height: "44px"
  photo-bleed:
    rounded: "{rounded.none}"
    height: "600px"
  app-screen-frame:
    rounded: "{rounded.lg}"
  portrait-tile:
    rounded: "{rounded.md}"
  poster:
    rounded: "{rounded.md}"
    typography: "{typography.meta}"
  glyph:
    width: "96px"
---

<!-- Recorded 2026-09-07 from the shipped build on branch redesign/sumuk (finish review: fix → all
     eight material fixes applied, rebuilt, recaptured, verify passed); revised the same day after
     commits 7fe2519 (every page opens in ink) and 41a2451 (the 코엑스 posters); §Decisions carries
     all three entries.
     Ground truth is the code and the .impeccable/review captures, recaptured after that batch; the
     pre-build draft this file replaces was decided before any
     markup, and where the two differ the build is recorded (see §Decisions and review record).
     Tokens: design-system/sumuk.tokens.json @ Sumuk 3.0.0 (ADR 0037) → styles/tokens.css via
     scripts/build-tokens.mjs. Governed by 브랜드가이드-v1.md (2026-06-15); Sumuk governance §8
     scopes Sumuk to the mobile app, so this file is the site's own contract and takes Sumuk's
     values as inputs. Every rule carries its evidence (↳). A rule with no traceable source is not
     written. -->

# Design System: inzeum.com

## Overview

**Creative North Star: "The Mountain That Stays"**

One 수묵 mountain sits at the bottom of the first two viewports of the home page and does not move;
the name, one sentence, one paper button and the teaching pass over it. Everything else on the site
is the same restraint applied to reading, and every page opens in ink. The pages that have to be
read (/courses, /programs, /news, /faq, /resources) open with an ink band: a punchline h1, one
sentence, and the page's own 수묵 painting low along the bottom edge with its top 45 % and bottom
12 % faded into ink; below the band the page unrolls onto 한지 paper for reading and closes in ink
at the footer. /, /app, /about and the 404 are ink throughout. Only the legal documents (/privacy,
/terms, /delete-account), read from the first line, set the whole page on 한지. Both grounds are
one palette; a ground is a remap of the same role names, never a second design.

  ↳ .impeccable/surfaces/app-page-tsx.md THESIS · components/ui/InkBand.tsx:4–8,22 ·
    components/ui/Paper.tsx:3–5 · components/layout/PageShell.tsx:10–13,19–21 ·
    components/legal/LegalDocument.tsx:14 · styles/tokens.css `.ground-hanji`

The register is Editorial: a visitor comes once, wants a feeling, then a reason to trust. What that
licenses here is one full-bleed artifact per page at most, display type that is part of the
composition, a committed dark ground, and numbered structure. It does not license slower motion,
more curves or deeper z-stacks. Depth is a surface step plus a hairline; there is not one
`box-shadow` or gradient background in the codebase. Density is low: sections open with 64–96 px of
air, groups are hairline rows on a transparent ground, and no card exists on the site.

  ↳ tailwind.config.js `boxShadow: { none }` · grep shadow|gradient across app/ components/ =
    only the two painting masks (app/page.tsx:57 · InkBand.tsx:22) · components/ui/Section.tsx:4

Pretendard Variable is the only typeface loaded; the two-tier wordmark carries the brand's serif as
a drawn raster in both inks. The seal, vermilion, appears on the whole site in exactly one place: the
numerals 1 → 2 of the mechanism (편도체 안정화 → 전전두피질 활성화) on / and /about. The header's
active item is paper, not vermilion; no button is vermilion.

  ↳ app/layout.tsx:9–10 · components/layout/Wordmark.tsx:5–7 · app/page.tsx:129 ·
    app/about/page.tsx:121 · components/layout/Header.tsx:16,108 · components/ui/Button.tsx:11

**Key Characteristics:**
- Two grounds, one palette: every page opens and closes in ink (#121210); the reading pages unroll
  onto 한지 (#FAF7F1) between an ink band and the ink footer, a remap of the same role names
  through `.ground-hanji`. No page lands on paper except a legal document.
- One family, three weights (400/500/600), letter-spacing 0 at every size, no uppercase, keep-all.
- Depth is a surface step plus a hairline. No shadows, no gradients, one blur (the header).
- The row is the door: list rows, fact rows and disclosures separated by hairlines replace cards.
- The seal is spent once: vermilion only on the two mechanism numerals.
- One curve (Sumuk `settle`), two durations (150 ms state, 450 ms entrance), one 6 s breath on the
  page's painting. Nothing bounces.
- Photographs are square-cornered and bleed to the viewport edge; the text keeps the page's left
  edge. Portraits are colour, desaturated a step, never grayscale. Documents (posters, app screens)
  keep a small radius and a soft hairline.

## Colors

One sRGB palette from Sumuk (먹 ink ramp, 한지 paper ramp, vermilion, celadon) composed into roles;
the site never carries a hex of its own except the two site-local paper steps written with their
reason beside them.

  ↳ scripts/build-tokens.mjs:1–12 · styles/tokens.css lines 1–2 · SITE_LOCAL at build-tokens.mjs

### Primary
- **Hanji Light** (#EEE9DE): the action colour on ink. Primary buttons, the focus ring, display
  text and headings, the wordmark's paper raster. A neutral, never the seal (ADR 0037). Pressed and
  hover step down to Hanji Body (#D9D1C2).
    ↳ tokens.css `--accent` `--accent-pressed` `--text-display` · Button.tsx:37 ·
      globals.css `:focus-visible`
- **Midnight Ink** (#121210): the action colour on 한지 (the same `--accent` role, remapped), and
  running text on paper. On ink it is the ground, the text on a primary button, the canvas the
  root layout paints before any stylesheet resolves, and the browser theme colour on every page
  but the three legal documents.
    ↳ tokens.css `.ground-hanji --accent` · app/layout.tsx:36–40,47 · lib/seo.ts:3–8

### Tertiary
- **Vermilion Seal** (#F05B43 on ink · #D94B35 on 한지): the 낙관. Spent once per site today, on
  the mechanism numerals 1 → 2 (`text-brand`, h2 size, tabular). The browser's own selection
  highlight and caret also carry it, which is the one place the seal appears without being spent by
  the page. Never an action colour, never a control state, never an icon in the current build.
    ↳ app/page.tsx:129 · app/about/page.tsx:121 · globals.css `::selection` `caret-color` ·
      Header.tsx:16,108 · Button.tsx:11 · 브랜드가이드-v1.md §4 "화면당 1~2점"

### Neutral (ink ground)
- **Midnight Ink** (#121210): page ground, the ink band that opens every reading page, header
  ground (at 78 % behind a 12 px blur), mobile sheet, the wrapper that covers the mountain once the
  page leaves it, and the footer on every non-legal page.
    ↳ globals.css `.header-ground` · InkBand.tsx:30–31 · Header.tsx:137 · app/page.tsx:156 ·
      PageShell.tsx:23,29
- **Deep Ink** (#0D0D0C): `--bg-deep`. Used as display text on 한지; no ink-ground call site.
- **Ink Surface** (#191816): `--surface` / `--fill1`. Native form controls, outline-button hover
  fill. No card uses it.
    ↳ globals.css `select, input, textarea` · Button.tsx:39
- **Ink Raised** (#211F1B): `--surface-high` / `--fill2`. Disabled-button fill; the secondary
  button's rest fill (variant defined, no call site).
    ↳ Button.tsx:29,38
- **Ink Chip** (#2C2923): `--fill3`. Scrollbar thumb, outline-button hover border.
    ↳ globals.css `::-webkit-scrollbar-thumb` · Button.tsx:39
- **Hairline on Ink** (#2F2E2B) and **Soft Hairline on Ink** (#242320): the two strokes. Section
  tops, list tops and the footer use the full hairline; rows inside a group, the header's bottom
  edge and the 사업자 block use the soft one.
    ↳ globals.css `.hairline-t/-b/-soft-t/-soft-b` · Section.tsx:21 · ListRow.tsx:45 ·
      Footer.tsx:56,78
- **Hanji Light** (#EEE9DE) headings and display · **Hanji Body** (#D9D1C2) running text ·
  **Hanji Sub** (#AA9E86) ledes, subtitles, inactive nav · **Hanji Muted** (#968A73) meta, labels,
  leads, chevrons · **분청 Bunchung** (#887E6B) hints only (footer dt, copyright).
    ↳ tailwind.config.js `fg/copy/sub/muted/faint` · Footer.tsx:86,104

### Neutral (한지 ground, the remap)
- **Hanji** (#FAF7F1) the Paper body's ground under every band, on-accent text, and the browser
  theme colour only on the legal pages, where the whole page is paper.
    ↳ tokens.css `.ground-hanji --bg` · Paper.tsx:8 · lib/seo.ts:3–8 `hanjiViewport` ·
      app/privacy/page.tsx:4
- **Hanji Light** (#EEE9DE) `--surface` · **Hanji Line** (#E6DFD0) `--surface-high`
  (disabled fill).
- **Deep Ink** (#0D0D0C) display and headings · **Midnight Ink** (#121210) running text ·
  **Ink Chip** (#2C2923) `--text-sub`.
- **Ink Meta on Hanji** (#6F6656): site-local `--text-muted` for meta text on paper. Sumuk's
  paper.500/600 measure ≈3.3–3.9:1 on paper50 and are hint-only; this step measures 5.6:1.
  **분청** (#887E6B) stays `--text-faint`: hints only, never running text.
    ↳ build-tokens.mjs SITE_LOCAL · sumuk.tokens.json `theme.hanji.$description`
- **Hairline on Hanji** (rgb(18 18 16 / 0.12)) and **Soft** (0.08): ink at low alpha, so the same
  `.hairline-*` classes serve both grounds.
    ↳ tokens.css `.ground-hanji --line --line-soft`

Status colours (celadon #9FB0A6, danger #DE5C72) are emitted by the token build but have no call
site on the site; they are not part of this system until one appears.

### Named Rules
**The One Palette, Two Grounds Rule.** A ground is a remap of the same role names onto the same
palette, never a second palette. Components are ground-agnostic: they name roles (`bg-bg`,
`text-fg`, `border-line`) and never a ramp step or a hex. PageShell holds the only two switches:
`ground` for the html canvas, header and footer, and `reading` for the Paper body when it differs,
which makes the page banded. The header puts `.ground-hanji` on itself once it is over the paper;
no other component chooses a ground.
  ↳ tailwind.config.js header comment · globals.css "A ground is a remap of the same roles" ·
    PageShell.tsx:10–13,20–25 · Paper.tsx:8 · Header.tsx:72

**The Opens in Ink Rule.** Every page opens and closes in ink. A reading page is an ink band (the
punchline, one sentence, the page's painting), then Paper, then the ink footer; a visitor never
lands on paper. Only a legal document, read from its first line, sets the whole page on 한지 and
exports `hanjiViewport`; every other page keeps the ink canvas and theme colour.
  ↳ PageShell.tsx:10–13,19–29 · InkBand.tsx:4–8 · Paper.tsx:3–5 · LegalDocument.tsx:14 ·
    app/privacy/page.tsx:4 · app/layout.tsx:39,47 · app/courses/page.tsx:58–66

**The Neutral Action Rule.** The primary action colour is paper on ink and ink on paper. No
vermilion button exists and none may be added; the seal is never an action colour.
  ↳ Button.tsx:6–11 · sumuk.tokens.json `color.accent` `color.brand`

**The Seal Rule.** Vermilion is spent 1–2 times per viewport at most and, in this build, exactly
once per page on the mechanism numerals. The header's active item is paper. A candidate use must be a
mark on content, never a control state, and the institute's real 낙관, when it arrives, is the only
vermilion allowed on the painting.
  ↳ Header.tsx:16,108 · public/images/sumuk/PROVENANCE.md §How to swap in real artwork ·
    브랜드가이드-v1.md §4

**The Written Exception Rule.** An off-scale value ships only with its reason as a comment beside
it, as the two 한지 paper steps do. A Sumuk bump is a pin bump plus a reviewable diff of tokens.css;
`npm run tokens:check` fails CI if the generated file is stale.
  ↳ build-tokens.mjs SITE_LOCAL · package.json scripts · ADR 0036

## Typography

**Display Font:** Pretendard Variable (with Pretendard, Apple SD Gothic Neo, Noto Sans KR, system-ui)
**Body Font:** Pretendard Variable (same stack)
**Label/Numeric Font:** Pretendard Variable with `font-variant-numeric: tabular-nums` (`.tnum`)

**Character:** One family for Korean and Latin, loaded once as a dynamic subset from jsDelivr and
linked from the root layout (not @imported) so it fetches in parallel with the stylesheet. There is
no display serif; the serif lives in the wordmark raster only. Weight 600 is the ceiling. Every size
is set at letter-spacing 0, sentence case, `word-break: keep-all`. Verified on every page: the
largest visible text and the body computed to Pretendard Variable.

  ↳ app/layout.tsx:6–10,49–50 · globals.css `body` · tailwind.config.js `letterSpacing: { normal:
    '0' }` · .impeccable/review/report.json `largest.family` `bodyFont` on 20 captures ·
    sumuk.tokens.json `koreanTracking` "never positive tracking, never uppercase"

### Hierarchy
- **Display** (500, 56 px, 1.2): page heroes on desktop — the band punchline on /courses,
  /programs, /news, /faq, /resources, the /about and /app titles; the home "마음근력은
  근육처럼 자랍니다." and the professor's name on /. Weight 500, not 600: at this size Hangul
  reads heavier than its weight number.
    ↳ tailwind.config.js `display` · InkBand.tsx:52 · PageHeader.tsx:8 · app/app/page.tsx:48 ·
      app/page.tsx:115,190
- **Display-sm** (500, 40 px, 1.2): the same headings on phones; legal titles and the /about
  professor heading on desktop.
    ↳ InkBand.tsx:52 · PageHeader.tsx:8 · LegalDocument.tsx:16 · app/about/page.tsx:151
- **H1** (600, 36 px, 1.25): section titles on desktop (Section renders h2 at `text-h2
  md:text-h1`); 404 title; the /about pull-quote; legal titles on phones.
    ↳ Section.tsx:27 · app/not-found.tsx:20 · app/about/page.tsx:103
- **H2** (600, 24 px, 1.35): section titles on phones; the mechanism numerals (in vermilion);
  in-section headings on /app.
    ↳ Section.tsx:27 · app/page.tsx:129 · app/app/page.tsx:107
- **H3** (600, 20 px, 1.4): list-row and disclosure titles on desktop, step titles, "세 가지
  마음근력", mobile-sheet nav items, 연혁 years, legal h2.
    ↳ ListRow.tsx:31 · Disclosure.tsx:28 · app/page.tsx:131,138 · Header.tsx:150 ·
      globals.css `.legal-document h2`
- **Body-lg** (400, 18 px, 1.75): ledes under every page and section title, the band's one
  sentence (at full-strength `copy` on ink, where a lede elsewhere is `sub`), the home hero
  sentence on phones (on desktop it steps to 20 px / 1.6 at weight 400), professor paragraph, 404
  lede.
    ↳ InkBand.tsx:56 · PageHeader.tsx:9 · Section.tsx:28 · app/page.tsx:89
- **Body** (400, 16 px, 1.7): site default. Running text on both grounds at full-strength `copy`;
  row titles at 600; buttons and text links at 500–600; legal documents.
    ↳ globals.css `body` · report.json `bodySize: 16px` on every capture
- **Body-sm** (400, 14 px, 1.6): row subtitles, trailing text, nav items, footer links, faculty
  affiliations, legal tables, "하는 일" bullets.
    ↳ ListRow.tsx:32,35 · Header.tsx:107 · Footer.tsx:32
- **Meta** (500, 13 px, 1.5): row leads (dates, indexes), fact labels, section asides ("상시
  모집"), footer column titles, the 사업자 block, `<cite>`. Sentence case. Meta is a label, never an
  eyebrow: nothing sits above a heading.
    ↳ ListRow.tsx:26 · Facts.tsx:10 · app/courses/page.tsx:66 · PageHeader.tsx:4 "No eyebrow" ·
      InkBand.tsx:52–59 (the h1 comes first; nothing sits above it)
- **Numeric** (500, 56 px, 1.1, tnum) and **Numeric-sm** (500, 40 px, 1.1, tnum): the proof
  figures only (4,500+ · 35만+ · 12주 · 200시간). Value above label, label body-sm sub.
    ↳ Numbers.tsx:12 · report.json `largest.text: "4,500+"` on /

`display-xl` (72 px) is defined in tailwind.config.js and has no call site; the hero's largest
object is the wordmark raster, so no type reaches 72 px. It is not part of this system.

### Named Rules
**The One Family Rule.** Pretendard Variable is the only typeface loaded at runtime. The wordmark's
Marcellus over 나눔명조 is a drawn asset in two inks and is never set as live type. A second family,
including a Korean serif for display, requires a new decision, not a new import.
  ↳ Wordmark.tsx:5–7 · app/layout.tsx:9 · §Decisions 2

**The Zero Tracking Rule.** Letter-spacing is 0 at every size in both scripts. No `uppercase`, no
positive tracking, no italics (the /about `<cite>` is explicitly `not-italic`).
  ↳ tailwind.config.js `letterSpacing` · grep uppercase|tracking-|italic across app/ components/
    = none · app/about/page.tsx:106

**The 600 Ceiling Rule.** Three weights: 400 body, 500 display/meta/medium links, 600 headings,
row titles and buttons. Nothing bolder exists in the loaded subset's use.
  ↳ tailwind.config.js `fontSize` weights · Button.tsx:28

**The Measure Rule.** Running text is capped at 34em (`max-w-measure`), used 22 times; a content
section narrows to 720 px but keeps the page's left edge. Home hero copy is capped at 26em; a
display heading (the band's h1, the home teaching heading) at 14em.
  ↳ tailwind.config.js `maxWidth.measure` · Section.tsx:5–6,23 · app/page.tsx:89,115 ·
    InkBand.tsx:52

## Layout

**Grid.** One page container of 1200 px (`max-w-page`) centred, with a 24 px gutter that grows to
48 px at ≥1024 px. A `content` section narrows its measure to 720 px (`max-w-content`) but keeps the
same left edge: one alignment per page. Legal documents run at 720 px throughout.

  ↳ tailwind.config.js `maxWidth` `spacing.gutter` · Section.tsx:22–23 · LegalDocument.tsx:15,20

**Breakpoints.** Tailwind defaults `sm` 640 · `md` 768 · `lg` 1024, plus one site-local screen,
`tall` (min-height 900 px), which stacks with `md:` as `md:tall:` on the home page only.

  ↳ tailwind.config.js `screens.tall`

**Vertical rhythm.** Sections pad 64 px on phones and 96 px from `md` (`py-16 md:py-24`); the
section heading block sits 40–56 px above its content; page headers pad 64 px top on phones and 112
px from `md`, 48–64 px below; an ink band pads header + 48 px (112) on phones and header + 72 px
(136) from `md` above its h1, 64–80 px below. Rows pad 16 px (list) / 16 px (facts) / 20 px
(disclosure) / 24 px (mechanism steps). Grid gaps used are 12, 16, 24, 40 and 64 px; two-column
editorial grids split 5/7 or 7/5 (`minmax(0,5fr)_minmax(0,7fr)`) with a 64 px gap at `md`.

  ↳ Section.tsx:22,25 · PageHeader.tsx:7 · InkBand.tsx:30–31,51 · ListRow.tsx:45 · Facts.tsx:9 ·
    Disclosure.tsx:26 · app/courses/page.tsx:67 · app/about/page.tsx:101

**Header.** Fixed, 64 px (`--header-h`), the only sticky element. A page whose first viewport is
not its own ink pads the main element by the header height; the home page (`bleed`) and every
banded page (a band implies bleed) run their first viewport underneath it. Every `[id]` target
scrolls to 24 px below the header.

  ↳ PageShell.tsx:14–15,20–21,26 · Header.tsx:68–75 · globals.css `[id] { scroll-margin-top }`

**The home page's spatial model.** The painting is a bottom-anchored band (44 svh on phones, the
smaller of 50 svh or 560 px from `md`) whose top 45 % fades into ink through a mask. From `md` the
band is `position: sticky` for the height of one viewport and the two content viewports are pulled
up over it (`-mt-[100svh]`); below `md` it sits statically behind viewport 1 only. Viewport 1 is
`min-h-svh` with the wordmark (240 → 320 → 400 → 460 px across breakpoints), one sentence and one
paper button at top-left; viewport 2 is the teaching in a 1fr / 1.2fr grid. When the page leaves
the mountain, a `z-raised` ink wrapper covers it.

  ↳ app/page.tsx:52–72,76,85,113,156 · frames d0_y0 · d1_y889 · m0_y0

**The reading pages' spatial model.** The band is a `min-h-[72svh]` (78 svh from `md`) ink section
when it carries a painting, text-height when it does not (/faq, /resources). The painting is a
bottom-anchored strip 38 svh tall (min(46 svh, 520 px) from `md`), `object-fit: cover` at `center
bottom` unless the page sets a position (the pine at 70 %, the geese at 45 %), masked
`transparent 0 → black 45 % → black 88 % → transparent 100 %` so it fades out of ink above and back
into ink just before the paper. Paper begins on a hard edge: no gradient, no shadow, the faded
painting is the transition. Below `md` the geometry is the same at the phone values; nothing
sticks.

  ↳ InkBand.tsx:22,30,37,47 · app/programs/page.tsx:36 · app/news/page.tsx:35 · Paper.tsx:8 ·
    review courses-desktop.png · frames/courses d0_y0 · m0_y0

**Touch targets.** 44 px minimum (`h-hit` / `min-h-hit`) on every link and control; rows are 56 px
minimum; buttons 52 px. Hover utilities are gated behind `(hover: hover)`.

  ↳ tailwind.config.js `spacing.hit/button/row` `future.hoverOnlyWhenSupported` · Header.tsx:107 ·
    Footer.tsx:32

### Named Rules
**The Left Edge Rule.** Text keeps the page's left edge at every width; a narrower measure narrows
the right side only. PhotoBleed computes its text padding as `max(gutter, (100vw − 1200px)/2 +
gutter)` so the paragraph beside a bleeding photograph aligns with the sections above it.
  ↳ Section.tsx:5–6 · PhotoBleed.tsx:34–35

**The Ridge Rule.** The proof numbers sit inside viewport 1, bottom-aligned 32 svh above the fold,
only on viewports ≥768 px wide and ≥900 px tall (`md:tall:block`); otherwise the same component
opens viewport 2 (`md:tall:hidden`). One component, two placements, never both.
  ↳ app/page.tsx:76,101–103,112 · .impeccable/surfaces/app-page-tsx.md §Deviations

**The Pin Is Desktop-Only Rule.** Below 768 px the painting does not stick; 16 px Hangul over the
bright ridge failed legibility on 390 px frames. The 45 % top fade applies on every width, on the
hero and on every band alike.
  ↳ app/page.tsx:48–59 · InkBand.tsx:22 · surface brief §Deviations

## Elevation & Depth

No shadows. `boxShadow` is `{ none }` in the Tailwind theme and no component sets one. Depth on ink
is a surface step plus a hairline (Sumuk `elevation`): the header lifts by taking the page's own
ground at 78 % behind a 12 px backdrop blur and a soft hairline; the mobile sheet is a flat ink
plane; everything else lies on the ground, grouped by hairlines on a transparent surface. No
gradient is painted as a background anywhere; the only `linear-gradient`s in the codebase are the
two masks that fade a painting into ink, the hero's (top 45 %) and the band's (top 45 %, bottom
12 %). The band-to-paper edge itself is a hard ground change with no stroke.

  ↳ tailwind.config.js `boxShadow` · globals.css `.header-ground` `.hairline-*` · app/page.tsx:57 ·
    InkBand.tsx:22 · Paper.tsx:8 · sumuk.tokens.json `elevation.$description`

**z-layers (four, named; never a bare number):** `raised` 1 (the ink wrapper that covers the
mountain) · `header` 2 · `overlay` 3 (mobile sheet) · `modal` 4 (skip link only; no modal exists).

  ↳ tailwind.config.js `zIndex` · app/page.tsx:156 · Header.tsx:70,137 · app/layout.tsx:61

### Named Rules
**The Hairline Rule.** Elevation is a surface step plus a 1 px line. Two strokes exist: `line`
for the top of a group and section boundaries, `line-soft` for rows inside a group. A third stroke
or any `box-shadow` is a defect.
  ↳ globals.css `@layer components` hairlines · Section.tsx:21 · ListRow.tsx:45

**The One Blur Rule.** The header's backdrop is the only blur on the site. Neither the hero nor a
band has a blurred colour field; the atmosphere is the painting's own mask and a 6 s opacity
breath.
  ↳ globals.css `.header-ground` comment · app/page.tsx:55–59 · InkBand.tsx:22,37–38

## Shapes

Corners are square by default and round only on controls and small framed images. Buttons and the
skip link take 12 px (`md`); nav links, the header lockup and the focus ring take 8 px (`sm`);
faculty and advisor portrait tiles take 12 px; printed posters (the 2026 retreat poster hand-set on
/programs, the two 2025 코엑스 posters through Poster) take 12 px with a soft hairline; the three
app screenshots take 16 px (`lg`) with a soft hairline, the frame of a real capture rather than
device chrome. The
professor's photographs have no radius at all and bleed to the right edge of the viewport (edge to
edge above the text on phones). Sections, rows, facts and disclosures have no border box; they are
open regions separated by hairlines. The scrollbar thumb is a pill.

  ↳ Button.tsx:28 · Header.tsx:79,107 · globals.css `:focus-visible` · app/about/page.tsx:169,193 ·
    app/programs/page.tsx:73,129–138 · Poster.tsx:15 · app/page.tsx:226 · PhotoBleed.tsx:5–7 ·
    globals.css scrollbar

Icons are one family drawn in-repo: 24-unit viewBox, stroke 1.5, round caps and joins, outline
only, rendered at 16 / 20 / 24 px in `currentColor`. Eight names exist (arrow-right, arrow-up-right,
chevron-down, chevron-right, menu, close, play, mail). The 수묵 glyphs (seven alpha-mask paintings
from the app) render through `mask-image` tinted by a role, never larger than the asset, decoration
only.

  ↳ components/ui/Icon.tsx:3–14,59–69 · components/ui/Glyph.tsx:4–17,29

### Named Rules
**The Square Photograph Rule.** A person in a rounded rectangle beside text is the layout this site
replaces. Photographs of the professor are square-cornered, bleed to the viewport edge, and carry
the page's left edge for their text. Radius is for controls, for small grid tiles of a roster and
for documents (posters, app screens), not for a portrait that anchors a section.
  ↳ PhotoBleed.tsx:5–7 · app/page.tsx:188–204 · app/about/page.tsx:149–162 · Poster.tsx:3–5

**The Capture Frame Rule.** A document shown as itself keeps a radius and a soft hairline: a real
product screen at 16 px, a printed poster at 12 px, enough to read as a captured sheet, never a
drawn phone and never a photograph's square bleed. The full sheet is one click away.
  ↳ app/page.tsx:226 · app/app/page.tsx:72 · Poster.tsx:3–5,11–18 · surface brief §Deviations
    "App screens"

## Components

Thirteen views in components/ui, three of them (InkBand, Paper, Poster) added after the finish
review, with `variant · size · state` and a `className` escape for layout only; none is a port of
the app's React Native set. A view becomes shared when it appears on two pages, has a
nameable role, and its API is smaller than its implementation.

### Buttons
Quiet, tactile, one per section. Answers the hand in 120 ms; never announces itself.
- **Shape:** gently rounded (12 px), 52 px tall, 24 px side padding, weight 600, body size, trailing
  icon 20 px. A `sm` size (44 px, 14 px text, 16 px icon) exists with no call site.
    ↳ Button.tsx:27–34
- **Primary:** Hanji Light on ink / Midnight Ink on 한지 (`bg-primary text-primary-fg`). Hover and
  press step to `primary-pressed`. Exactly one per viewport on the home page.
    ↳ Button.tsx:37 · app/page.tsx:96–98 · surface brief "One paper button"
- **Outline:** hairline border (`border-line`), display-colour text, hover fills `fill1` and
  raises the border to `fill3`. The secondary action beside a primary, and the CTA on 한지 pages.
    ↳ Button.tsx:39 · app/courses/page.tsx:161 · app/app/page.tsx:57
- **Ghost:** text only, `sub` to `fg` on hover, 12 px side padding. The tertiary action (an email,
  "소식").
    ↳ Button.tsx:40 · app/courses/page.tsx:164
- **Secondary (tonal):** `fill2` rest, `fill3` hover. Defined, no call site.
- **Hover / Focus / Active:** colour transitions 150 ms on the `standard` curve; `:active` scales to
  0.98 over 120 ms (`.pressable`); focus is a 2 px `text-display` outline offset 3 px with an 8 px
  radius. Disabled: `surface-high` fill, `muted` text, no pointer.
    ↳ globals.css `.pressable` `:focus-visible` · Button.tsx:29

### Text links
An underlined phrase with a 16 px arrow. Body size, weight 500, display colour, underline in the
hairline colour offset 6 px; on hover the underline takes the text colour. 44 px minimum height.
Inline links inside paragraphs (legal, /app footnote) are `sub` with a 4 px offset underline.
  ↳ app/page.tsx:42–43 · Footer.tsx:66 · globals.css `.legal-document a` · app/app/page.tsx:121

### List rows (ListRow)
The row is the door: tapping it opens the thing. No card per row, no second action inside a row.
- **Anatomy:** optional lead (meta, muted, tabular; 64 px for a date, 24 px for an index, both 112
  px from `md`), title (body 600 → h3 from `md`, display colour), subtitle (body-sm, sub), optional
  trailing (body-sm sub inline from `sm`; meta muted under the title on phones), and a chevron or
  arrow-up-right in `muted` that turns to `fg` on hover when the row links.
- **Shape:** 56 px minimum, 16 px vertical padding, 16–24 px gap, soft hairline below; the group
  above it carries a full hairline top.
    ↳ ListRow.tsx:22–47 · app/page.tsx:168–185 · app/news/page.tsx:40–51

### Facts
A definition list for a course or programme: label column (meta, muted, 88 px → 112 px), value
(body, 500, display colour), soft hairline between rows, full hairline on top. Used on /courses and
/programs beside a 7/12 paragraph column, and in the 코엑스 section as the 7/12 column itself beside
a 5/12 poster grid.
  ↳ Facts.tsx:5–15 · app/courses/page.tsx:68–76 · app/programs/page.tsx:111–122

### Numbers (the data object)
Four figures only this institute can quote, in a 2 → 4 column grid, each above a soft hairline:
value in `numeric-sm` → `numeric` (tabular, display colour), label in body-sm sub beneath. Markup
is label then value; the column is reversed visually. Placement on the home page follows The Ridge
Rule.
  ↳ Numbers.tsx:1–16 · app/page.tsx:11–16,101–103,112

### Disclosure
A question that opens. The trigger is a real `<h3>` wrapping a button (56 px minimum, 20 px
padding, body 600 → h3), chevron in `muted` rotating 180° over 240 ms on `settle`; the body
animates `grid-template-rows` 0fr → 1fr over 240 ms, answer text body `sub` at 34em. Soft hairline
below each. Used on /app and /faq.
  ↳ Disclosure.tsx:6–43 · globals.css `.disclosure-body`

### Section
An open region: hairline above (default on; the first Section inside Paper sets `hairline={false}`
so the ground change is the only line where paper begins), the page container, 64 → 96 px vertical
padding, a heading block (h2 at `text-h2 md:text-h1`, lede body-lg sub at 34em, optional right-hand
aside for a link or a date) 40 → 56 px above the content. `width="content"` narrows to 720 px on
the same left edge. No fill, no border box.
  ↳ Section.tsx:4–37 · app/courses/page.tsx:66 · app/news/page.tsx:39

### PageHeader
The first viewport of an all-ink page that has no painting: `display-sm → display` h1, one body-lg
lede at 34em, 64 → 112 px of air above, 48 → 64 px below, on the gutter. No eyebrow, no gradient
band, no hero box. One call site today, /about; /app sets a header of the same shape with the app
screens beside it, and the legal documents set theirs inside LegalDocument. The reading pages no
longer use it; they open with InkBand.
  ↳ PageHeader.tsx:3–12 · app/about/page.tsx:95–98 · app/app/page.tsx:45–49 · LegalDocument.tsx:15–19

### InkBand
Every reading page's first viewport, and the reason no page lands on paper. A `<section data-band>`
on `ground-ink`, run under the fixed header: the h1 in `display-sm → display` capped at 14em, one
sentence in body-lg at full-strength `copy` at 34em, header + 48 → 72 px of air above, 64 → 80 px
below. With a painting the band is at least 72 → 78 svh tall and the painting lies in a 38 svh
(min(46 svh, 520 px)) strip along the bottom edge, masked so it fades in from ink by 45 % and back
into ink over the last 12 %, breathing like the hero's; without one (/faq, /resources) the band is
as tall as its text. The h1 and the sentence rise once (`--i` 0 and 1). The header reads
`[data-band]` to know when it has passed. The h1 is a sentence, never the page name (that lives in
the nav's active item and the `<title>`); nothing sits above it and no button sits in it today.
  ↳ InkBand.tsx:4–8,22,26–61 · app/courses/page.tsx:59–63 · app/programs/page.tsx:33–37 ·
    app/news/page.tsx:32–36 · app/faq/page.tsx:76–79 · app/resources/page.tsx:18–21

### Paper
The reading body: a `div.ground-hanji[data-ground="hanji"]` wrapping every Section below the band,
so the same roles remap to 한지 from the band's bottom edge to the footer's top hairline. It adds no
padding, stroke or fill of its own; the first Section inside it drops its hairline. Rows, facts,
disclosures and buttons inside it are the unchanged components reading remapped roles. Legal
documents skip it and set the whole page on 한지 through PageShell instead.
  ↳ Paper.tsx:3–11 · app/courses/page.tsx:65–66,169 · app/news/page.tsx:38–39,58 ·
    LegalDocument.tsx:14

### PhotoBleed
A photograph that bleeds to the right edge (`md:order-last`, 600 px minimum height), text on the
page's left edge, square corners, `saturate()` at 0.75 (home) or 0.85 (/about), never grayscale.
`split="half"` is 6/6; `split="text-wide"` gives the text 7/12 so a smaller original is not
upscaled as far. On phones the photo runs edge to edge at 4:5 above the text.
  ↳ PhotoBleed.tsx:8–38 · app/page.tsx:189 · app/about/page.tsx:150

### Poster
A printed poster shown as the document it is: a `<figure>` whose link is a 2:3 frame, `rounded-md`
(12 px) with a soft hairline, the image `object-fit: cover`, opening the full sheet in a new tab
(`target="_blank"`, `rel="noopener noreferrer"`, an aria-label that names the caption); the caption
below in meta muted, 12 px under the frame. Two posters sit in a 2-column grid (16 → 20 px gap)
capped at 500 px and right-aligned from `md`, as the 5/12 column beside Facts. Images are 1200×1800
webp; `sizes` defaults to 45vw on phones and 240 px from `md`. The retreat poster on the same page
is the same frame hand-set at 2:5. Photographs never take this frame; posters and app screens are
the two documents that do.
  ↳ Poster.tsx:3–21 · app/programs/page.tsx:73,110–141 · public/images/posters/

### Glyph
The app's 수묵 glyph on the web: a `<span>` with `mask-image` set to one of seven PNGs, tinted with
a role (`var(--text-sub)` default), opacity 0.9, `aria-hidden`. Width is capped at the asset's
native width. One placement: the moon at 96 px on the 404 page.
  ↳ Glyph.tsx:4–48 · app/not-found.tsx:19

### Navigation
- **Header:** fixed, 64 px, `z-header`. Lockup left at 36 px tall (paper raster on ink, ink raster
  on 한지; on a banded page both rasters are mounted in one grid cell and the one for the ground
  underneath is opaque); five items right, body-sm, 44 px hit, 12 px side padding, 8 px radius.
  Inactive `sub` weight 500, hover `fg`; active `fg` weight 600 with `aria-current="page"`.
  Vermilion is not a control state.
    ↳ Header.tsx:75–117 · lib/nav.ts
- **Ground:** the header is bare (transparent, no hairline) while the page's own ink is under it
  and mirrors what it covers once there is something to cover. On `/` it is bare, and the lockup
  invisible, until the page has scrolled 200 px, so the hero wordmark is the only lockup on
  screen. On a banded page it is bare over the band; once the band's bottom edge has passed the
  64 px header it takes `.header-ground` (page bg at 78 %, 12 px blur), the soft hairline and the
  reading ground's own class (`.ground-hanji`), so its roles, hairline and lockup are the paper's,
  and the two lockup inks crossfade. On every other route it carries `.header-ground` from the
  first frame. Ground, colours and lockup transition 200 ms on `standard`; the check runs on scroll
  and resize, passive, against `[data-band]`.
    ↳ Header.tsx:12–18,26–31,47–61,68–73,84–91
- **Mobile:** a 24 px menu / close icon at ≥44 px; the sheet is a sibling of the header (a child
  would be collapsed by the backdrop-filter), fixed from the header's bottom edge to the viewport
  bottom, flat on the page ground (`bg-bg`: ink everywhere but the legal pages), `z-overlay`, rows
  56 px h3 with soft hairlines and a muted chevron, contact email below. While it is open the
  header drops the reading ground and returns to the page ground, so header and sheet are one
  plane. Closes on route change and Escape; locks body scroll.
    ↳ Header.tsx:30–31,33–46,119–128,132–168
- **Footer:** full hairline top, 64 → 96 px padding, four columns (1.4fr 1fr 1fr 1fr) — lockup at
  32 px with a one-line description and the contact email as a text link, then 사이트 / 더 보기 /
  약관 with meta muted titles and body-sm sub links. A 사업자 information `<dl>` in meta under a
  soft hairline, keys in `faint`. Copyright in meta faint. It takes PageShell's `ground`, never
  `reading`, and sits outside Paper, so every non-legal page closes in ink.
    ↳ Footer.tsx:54–107 · PageShell.tsx:29

### Wordmark
The two-tier lockup INZEUM over 내면소통연구소, a drawn raster in both inks: 1200×392 paper on
transparent for the ink ground, 1967×723 ink on transparent for 한지. Heights: 36 px header, 32 px
footer, 240 → 460 px wide as the home `<h1>`. Never below ~120 px wide in the two-tier form. Neither
face is loaded as type. A banded header mounts both inks and crossfades them over 200 ms as the
ground beneath it changes.
  ↳ Wordmark.tsx:5–24 · app/page.tsx:78–87 · Header.tsx:84–91

### Legal document
On 한지 at 720 px: h1 → display-sm, body-lg description, meta effective date, then an article with a
hairline top; sections separated by soft hairlines with 48 px above and 32 px below, h2 at h3 size,
paragraphs and lists at 34em, tables body-sm with hairline heads, links underlined. The wording is
갑-approved and is restyled only in type and rhythm.
  ↳ LegalDocument.tsx:11–24 · globals.css `.legal-document`

### Motion (applies to every component above)
One curve family, two durations, one breath.
- **State** (hover, focus, colour): 150 ms on `standard` (cubic-bezier(0.4, 0, 0.2, 1)). Header
  ground and lockup: 200 ms.
- **Press:** transform to 0.98 over 120 ms (`.pressable`).
- **Entrance:** every page's first viewport rises once: the home hero stack (`--i` 0, 1, 2) or the
  band's h1 and sentence (`--i` 0, 1), 12 px over 450 ms on `settle` (cubic-bezier(0.2, 0, 0, 1)),
  staggered 80 ms. Nothing else enters; there is no second entrance and no `whileInView`.
- **Disclosure:** 240 ms on `settle`.
- **Breath:** the page's one painting alone — the hero's on /, the band's on /courses, /programs
  and /news — opacity 0.6 ↔ 0.74 over 6 s, infinite, no trigger.
- **Reduced motion:** `.rise` shows its final state, `.breathe` stops, every other transition
  collapses to 0.01 ms, smooth scrolling is off.
  ↳ globals.css `@layer components` motion block and `@media (prefers-reduced-motion)` ·
    tokens.css `--ease-settle` `--ease-standard` `--motion-*` · app/page.tsx:55,78,88,95 ·
    InkBand.tsx:37,52,56

**The One Curve, Two Durations Rule.** `settle` for anything that enters or opens, `standard` for
anything that changes in place; 150 ms for state, 450 ms for the one entrance per page, never past
600 ms.
A second easing family or a spring is out of world.
  ↳ globals.css motion comment · sumuk.tokens.json `motion.$description` "never springs"

**The Breathes, Not Bounces Rule.** The only loop on the site is a painting's 6 s breath, and a
page has at most one painting. It has no trigger and stops, rather than shortens, under reduced
motion.
  ↳ globals.css `.breathe` and reduced-motion block · app/page.tsx:55 · InkBand.tsx:37

## Do's and Don'ts

### Do:
- **Do** open every page in ink. A reading page is `PageShell reading="hanji"` → `InkBand` (a
  punchline h1, one sentence, the page's own painting) → `Paper` → Sections, the first with
  `hairline={false}`. /, /app, /about and the 404 stay on ink throughout. Only a legal document
  sets `PageShell ground="hanji"` and exports `hanjiViewport`; every other page keeps the ink
  canvas and theme colour.
- **Do** name roles, never ramp steps or hexes: `bg-bg`, `text-fg`, `text-copy`, `text-sub`,
  `text-muted`, `border-line`. The build fails on a stale tokens.css.
- **Do** group with hairlines on a transparent ground: `hairline-t` on the group, `hairline-soft-b`
  on each row, 56 px minimum per row.
- **Do** set every size at letter-spacing 0, sentence case, weights 400/500/600 only, running text
  at 34em, body 16 px / 1.7 on both grounds.
- **Do** put one primary button per viewport and make the next action an outline or a text link
  with a 16 px arrow.
- **Do** bleed a portrait to the viewport edge with square corners and keep the text on the page's
  left edge; desaturate to 0.75–0.85, in colour.
- **Do** show a printed poster or an app screen as a document: a radius (12 px poster, 16 px
  screen), a soft hairline, the full sheet one click away. Photographs never take the frame.
- **Do** label every synthetic raster in its file name (`synthetic-*`), its PNG `prompt` tEXt chunk
  and `public/images/sumuk/PROVENANCE.md`, and ship any full-width painting at ≥2880 px wide (the
  mountain, the path and the geese are 3200×1280; the pine is short of it, see the record).
- **Do** speak 합니다체 on institute pages and 해요체 on /app; no exclamation marks anywhere.

### Don't:
- **Don't** add a vermilion button, a vermilion active state or a vermilion icon; the seal is spent
  on the mechanism numerals and a second point per viewport needs a reason written beside it.
- **Don't** add a `box-shadow`, a gradient background, or a second blur; depth is a surface step
  plus a hairline and the header owns the only backdrop-filter.
- **Don't** wrap a group in a card, a fill or a border box; five bordered containers on one screen
  is the failure the Section and ListRow components exist to prevent.
- **Don't** load a second typeface, set a Korean serif as live type, use `uppercase`, positive
  tracking, italics or a weight above 600.
- **Don't** put an eyebrow or kicker above a heading; meta text is a label beside content, not a
  line above a title.
- **Don't** land a visitor on paper, and don't title a band with the page's name. The first
  viewport is ink with a sentence for an h1; 프로그램, 교육과정, 소식 live in the nav's active item
  and the `<title>`, not in the band.
- **Don't** apply `grayscale()` to a portrait, round the corners of the professor's photograph, or
  scale a 수묵 glyph past its native asset width.
- **Don't** add scroll-triggered reveals, a second entrance, parallax, springs or a loop other than
  the painting's breath; never exceed 600 ms.
- **Don't** generate a 낙관 seal or a paper texture; the institute's real seal, if one exists, is
  the only vermilion allowed on the painting, and 한지 is a flat field until the institute supplies
  approved material.

## Decisions and review record (2026-09-07)

The four decisions the pre-build draft left open were taken unattended and built. Each is
reversible by Jaeho; reversing one is a new decision, not a drift.

1. **Ground.** Ink front door (/, /app, /about, 404) and 한지 reading pages (/courses, /programs,
   /news, /faq, /resources, legal), via `PageShell ground`, the `.ground-hanji` remap in tokens.css
   and `GroundSync` writing `data-ground` on `<html>` so overscroll matches the page. /about is all
   ink; the draft's "hero on ink, bios on 한지" was not built. Revised the same day (second batch,
   below): the five reading pages now open in ink and read on 한지 inside Paper; only the legal
   documents keep the whole-page 한지 ground and the paper `<html>` canvas.
     ↳ PageShell.tsx · GroundSync.tsx · globals.css `html[data-ground='hanji']` · LegalDocument.tsx:14
2. **Display face.** Pretendard Variable only, weights 400/500/600, no display serif. The two-tier
   wordmark ships as a raster in both inks (paper 1200×392, ink 1967×723).
     ↳ app/layout.tsx:9 · Wordmark.tsx:5–7 · public/images/wordmark-paper.png · inzeum_logo.png
3. **Voice.** 합니다체 on institute pages, 해요체 on /app.
     ↳ app/app/page.tsx:18 comment and copy · app/courses/page.tsx copy
4. **Hero subject.** 산, a 수묵 mountain, pinned with `position: sticky` from 768 px and static
   behind the first viewport below; synthetic (gpt-image-2, 3200×1280), labeled in the file name,
   PNG tEXt and PROVENANCE.md, to be swapped for approved artwork.
     ↳ app/page.tsx:53–69 · public/images/sumuk/PROVENANCE.md

**Finish review, disposition fix.** All eight material fixes were applied in one batch, the site
rebuilt and recaptured, and verification passed on 20 captures: no horizontal overflow, 0 console
errors, Pretendard Variable computed on the largest visible text and the body of every page.
  ↳ .impeccable/review/report.json · .impeccable/review/*.png

1. One paper button in viewport 1 (the outline "INZEUM 앱" was removed).  ↳ app/page.tsx:95–99
2. Provenance: `synthetic-*` file names, PNG tEXt "SYNTHETIC PLACEHOLDER", PROVENANCE.md; hero
   3200×1280 against a 2880 floor.  ↳ PROVENANCE.md
3. The professor as a square-cornered photograph bleeding to the right edge (PhotoBleed), text on
   the page's left edge, on both / and /about.  ↳ PhotoBleed.tsx
4. Vermilion only on the mechanism numerals 1 → 2; the header's active state is paper.
   ↳ Header.tsx:16,108 · app/page.tsx:129
5. Proof numbers along the ridge inside viewport 1 on viewports ≥768 wide and ≥900 tall
   (`md:tall:`), otherwise opening viewport 2. Cited in the surface brief.  ↳ app/page.tsx:101,112
6. "세 가지 마음근력" is a real `<h3>`.  ↳ app/page.tsx:138 · app/about/page.tsx:130
7. Header lockup hidden and header transparent on / until 200 px scrolled.  ↳ Header.tsx:17,28–29
8. The two disputed specifics ("매주 밤 8시 라이브 강연, 매월 현장 라이브 강연"; the 2026
   내면소통명상교육원 설립 entry) were found in the incumbent site's source and are recorded in
   PRODUCT.md §Evidence on Hand.

**Ceiling items, still open (record, do not invent):**
- The institute's real 낙관 seal is not on the site. No seal is to be generated.
- The Paper body and the legal pages are a flat #FAF7F1 field; no synthetic paper texture.
- The /programs band painting (synthetic-pine-on-ink.png) is 2048×1024, under the 2880 px floor the
  other three paintings meet; a ≥3200 px pine is on the asset request. Not a lower floor for band
  paintings.
- Faculty photos are the B&W originals; advisors are colour originals. Neither carries a filter.
- The 2025년 6월 콘서트 poster ships only as a 900×1350 file cropped on the left; it is in
  public/images/posters/ but not shown, and its original is on the asset request.
- The second professor portrait (/about, joohankim_11.jpg) is 773 px wide and is upscaled; the
  `text-wide` split limits how far. A ≥3000 px original is requested in docs/asset-request.md.

**Later request from Jaeho:** portraits are shown in colour, no grayscale filter. The professor's
photographs are desaturated to 0.75 (home) and 0.85 (/about), never grayscale.
  ↳ PhotoBleed.tsx:15,20 · app/page.tsx:189 · app/about/page.tsx:150

**Second batch (2026-09-07, commit 7fe2519 "every page opens in ink").** Jaeho saw the /programs
한지 page and asked whether the "whitish screen" was intended and whether the copy were real
punchlines. Decision: keep 한지 for reading but never land on it. Every reading page now opens in
ink with its own painting and a punchline, then unrolls onto 한지 (InkBand → Paper) and closes in
ink at the footer; the header stays bare over the band and mirrors the paper once past it. The
page-name labels (프로그램 / 교육과정 / 소식 / 자주 묻는 질문 / 책과 강의) were replaced by
sentences — "산에서, 바다에서, 강가에서." / "12주로 시작해, 200시간으로 깊어집니다." / "다음 모집
소식을 먼저 전합니다." / "자주 받는 질문에 미리 답합니다." / "내면소통명상은 책과 강의에서
시작되었습니다." — and the page name stays in the nav's active item and the `<title>`. The home
hero sentence now states the mechanism ("두려움의 뇌는 가라앉히고, 생각하는 뇌는 깨웁니다. 뇌과학
기반 내면소통명상을 연구하고 가르칩니다.") instead of repeating the proof numbers below it. Two
synthetic paintings were generated and labelled (the path up for /courses, 기러기 over water for
/news); the pine moved onto ink for /programs; the unused 한지 pine and the alternate mountain were
removed and PROVENANCE.md updated. `hanjiViewport` now ships only on the three legal pages.
Verified with scripts/verify.mjs on all ten routes, desktop and mobile: no horizontal overflow, 0
console errors on the nine real routes (the 404 route logs only its own 404 response), Pretendard
Variable on the largest text and the body of every capture; the frames were viewed. Two stylesheet
comments (globals.css:132,143) still name the hero as the only element that rises or breathes; the
build, recorded here, applies both to the band.
  ↳ InkBand.tsx · Paper.tsx · PageShell.tsx:10–13 · Header.tsx:12–18 · app/page.tsx:92–93 ·
    app/programs/page.tsx:34 · app/courses/page.tsx:60 · app/news/page.tsx:33 · app/faq/page.tsx:77 ·
    app/resources/page.tsx:19 · public/images/sumuk/PROVENANCE.md · lib/seo.ts:3–8 ·
    app/privacy/page.tsx:4 · .impeccable/surfaces/app-page-tsx.md §Second batch ·
    .impeccable/review/report.json · .impeccable/review/*-desktop.png

**Third batch (2026-09-07, commit 41a2451 "코엑스에서").** /programs gains a 코엑스에서 Section after
연수교육: Facts (the two 2025 명상 콘서트 dates, the 10월 그릿 워크숍, 주최 · 주관) beside two printed
posters in a new Poster component; the /news timeline gains the three 2025 entries (10월 그릿
워크숍, 6월 콘서트, 3월 콘서트). The posters are real institute assets from nuncfilms.com (주식회사
HeKe's studio NUNC FILMS, which produced the events): concert-2025-03 and grit-workshop-2025-10 at
1200×1800; concert-2025-06 (900×1350) is in the folder but not shown because the published file is
cropped on the left. Poster takes `rounded-md`, 12 px, the frame the retreat poster already
carried; app screens stay at 16 px (`rounded-lg`), so the two documents differ by one step. What is
real and what is synthetic on the site: the four paintings are synthetic placeholders; every
photograph (the professor's two, faculty, advisors), the 2026 retreat poster and the three 2025
posters are real.
  ↳ Poster.tsx:3–5,15 · app/programs/page.tsx:110–141 · app/news/page.tsx:23–25 ·
    public/images/posters/ · docs/asset-request.md:20,24 · tokens.css `--radius-md` ·
    app/page.tsx:226 · app/app/page.tsx:72

**Where the build departed from the pre-build draft, resolved for the build:** body 16 px / 1.7 and
body-lg 18 / 1.75 (draft 17 / 19); h1 36, h3 20 (draft 34, 18); display weight 500 (draft 600);
display-xl 72 defined but unused; the header's active item is paper (draft: vermilion); the hero has
no blurred colour field (draft allowed one); /about is all ink (draft: ink then 한지); /programs
carries a pine painting (draft: none); app screens carry a 16 px radius and hairline (draft: no
chrome; the surface brief's "8 px" is superseded by `rounded-lg` in code); hairlines on ink are
opaque steps (#2F2E2B, #242320), on 한지 ink at 12 % / 8 % (draft: paper at 13 % / 8 %); z-layers
are raised 1 · header 2 · overlay 3 · modal 4 (draft named five); the breath is 6 s (draft 4–6 s).

**Not canonized:** nothing in the build was a craft-floor refusal. Two defined-but-unused tokens
(`display-xl`, the `secondary` button variant, `size="sm"`) and the two unused status colours are
recorded as available, not as system. The pine band painting's 2048 px width is recorded as an open
asset item, not as a lower floor for band paintings; InkBand's unused `children` slot is recorded as
available, not as a licence for a button in the band.
