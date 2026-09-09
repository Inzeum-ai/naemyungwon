---
name: inzeum.com
version: sumuk-web-3
updated: 2026-09-08
status: implemented on codex/sumuk-evolution; production unchanged
palette-source: design-system/sumuk.tokens.json @ 3.0.0
---

# INZEUM website design system

## Current revision: reference-driven interaction

The user's September 8 correction takes precedence over the prior homepage description
below. The new direction is specified in `docs/design/reference-motion-direction.md`:
Basement's environment-first opening, Darkroom's type/image hierarchy, and Emil's purposeful
interaction guidance. A full-viewport ink scene transitions through native scrolling to a
real practice photograph. The homepage copy is shorter; full course and teaching information
stays on the detail pages. The prior no-scroll-narrative rule is superseded for this one
hero. The shared palette, roster, legal text, and supplied asset provenance are preserved.

## Direction

A quiet ink landscape opens the door. Clear Korean typography explains the practice; the
real teacher, real product screens and real event posters establish trust. The design should
feel spacious, warm, grounded and easy to use on a phone.

This is an evolution of redesign/sumuk at a4f6000, following the live-site review and three
visual studies. The revised immersive study, grounded in the saved Basement and Darkroom references, anchors the homepage. The person-first study
informs the institute page. The site's existing framework, facts, routes, roster and legal
copy remain the starting point. The user authorized an end-to-end improvement pass.

`design-qa.md` records the current verification result; `docs/design-review/` contains local
browser captures. Earlier design contracts remain in git history, not as competing rules.

## Palette and materials

The Sumuk palette is unchanged. Components use CSS roles, never their own palette.

| Role | Ink ground | Paper ground |
|---|---|---|
| Ground | #121210 | #FAF7F1 |
| Headings/action | #EEE9DE | #0D0D0C / #121210 |
| Running copy | #D9D1C2 | #121210 |
| Secondary copy | #AA9E86 | #2C2923 |
| Metadata | #968A73 | #6F6656 |
| Hairline | #2F2E2B | ink at 12% |

Vermilion #F05B43 is a content mark, used on the teaching sequence, never a primary button.
Natural photographic color supplies warmth. No shadows, ornamental gradients, invented
paper texture, generated seals, particles, religious motifs or decorative interface cards.
The artwork's opacity masks are blending tools, not gradient page backgrounds.

All public pages open on ink except legal documents. Courses, programs, news, resources and
FAQ read on paper beneath their opening. Home, app and institute stay on ink. Paper has a
straight edge. Footer returns to the page's outer ground.

## Typography and layout

Pretendard Variable is the single live type family, dynamically subset with font-display
swap. The original two-line wordmark retains its serif lettering as a supplied raster.

| Text | Size / line height | Weight |
|---|---|---|
| Homepage display | desktop 96–190px / 1.2; phone 64–110px / 1.2 | 400 |
| Page display | 56px desktop; 36–40px phone / 1.2 | 500 |
| Section heading | 24–36px / 1.25–1.35 | 600 |
| Body | 17px / 1.7 | 400 |
| Lead | 18px / 1.75; home desktop 20px | 400 |
| Small body | 15px / 1.6 | 400 |
| Metadata | 13px / 1.5 | 500 |

The 17/15px body sizes are deliberate web-local accessibility improvements over the prior
16/14px site sizes. Sumuk's generated token source is not changed. Korean uses keep-all,
zero tracking, balanced headings and a comfortable measure (34em, up to 720px for reading).

Page shell: 1440px maximum, 48px desktop / 24px mobile gutters. Section space is usually
96px desktop / 64px phone. Main controls are at least 44px high, primary buttons 52px
(scene action 56px desktop / 52px phone). A course is an open column or row separated by a hairline.

## Page anatomy

### Home

1. Full-viewport ink mountain/lake scene and a four-character live title, 내면소통. One short explanation and foundation action.
2. Native sticky scroll reveals real practice photography: forest practice on desktop, a portrait retreat-room photo on phones. Correct source context stays with each photo.
3. Short teaching statement linking to the complete explanation on About.
4. Original professor portrait, brief introduction and compact proof.
5. Two large course links with format/duration; details remain on Courses.
6. Image-led program links using the supplied concert and retreat photographs.
7. AppShowcase and a concise closing course action.

The normal journey spans 190svh desktop / 180svh phone, with one sticky viewport. Native
scroll position directly controls the photo wipe. It does not add scroll inertia or prevent
leaving the scene. Static and reduced-motion modes show sequential sections. Full course
and teaching detail is preserved on its existing routes; the home copy is more concise.

### Reading pages

`PageShell reading="hanji"` → InkBand → Paper → SectionNav → content → ink footer.
InkBand keeps the heading/description clear of bright artwork. Course/path, program/pine
and news/geese each have their own composition. FAQ and resources intentionally use type
without an illustration. SectionNav wraps naturally and is not sticky.

Courses have a foundation inquiry CTA directly within the course, anchored course/FAQ/
inquiry shortcuts, three native FAQ disclosures, and a final contact section. There is no
invented admission form, price, payment flow, or unverified registration link. Mail links
open a draft in the visitor's mail app; the website does not submit email.

Program posters open their original complete files. The cropped June 2025 poster remains
excluded. Homepage program rows identify actual years rather than suggesting old events
are upcoming. The broader program rhythm remains explicitly described as recurring.

### App

A benefit-led heading, existing beta/release information, a single readable product screen
with five tabs matching the current app navigation, then features and FAQ. No fake store download button. The current
screenshots are illustrative; equivalent text descriptions remain in the page.

The recording FAQ now reflects the current product's consented server backup and server-side
noise cleanup (platform ADR 0033), rather than the obsolete local-only statement. This is
marketing FAQ copy; the approved legal documents were not rewritten.

### Institute

The actual professor photograph opens beside the institute's purpose and an action to the
teaching. Phones and tablets below 1024px present copy before the photograph. Teaching, professor biography,
seven faculty, nine advisors, work and history follow; roster membership is unchanged.

### Legal and 404

Legal wording is unchanged; shared typography/navigation improvements apply. Documents use
paper from the top. The existing 404 and its return action remain available on ink.

## Shared components

| Component | Responsibility |
|---|---|
| Header | Always-present wordmark; current section; ground under the header; mobile dialog |
| InkJourney | Immersive homepage scene and native scroll chapter |
| AmbientArtwork | Responsive artwork, separate mist, provenance caption, pause control |
| InkBand | Opening composition with live heading/lede and optional artwork |
| Paper | One ground remap and `data-paper` boundary |
| SectionNav | Non-sticky, wrapping in-page links |
| Section / Facts / ListRow | Editorial grouping and factual reading structure |
| Button / TextLink | Neutral actions, predictable focus and hover treatment |
| AppShowcase | Five accessible tabs matching the app navigation, readable real screenshots and page copy |
| Disclosure | Native details/summary; keyboard and no-JavaScript operation |
| Poster | Actual document, proportional preview and original-file link |
| CommunityPhoto | Original-framing photograph with source-linked caption and full-image link |
| PhotoBleed | Real photograph, square corners, controlled crop and saturation |
| Icon | Phosphor light family, individual server-compatible imports |

The mobile menu uses a native modal dialog for Escape and background inertness, plus an explicit Tab cycle to keep focus within the menu across host keyboard settings. Closing restores trigger focus. Navigation closes it; desktop resizing closes
it. Header theme is based on Paper's actual top AND bottom, so it returns to ink over the
footer instead of remaining paper forever.

## Motion

The homepage is now a deliberate exception to the earlier mist-only rule. InkJourney uses
one authored texture in a small WebGL renderer: water displacement and a restrained, damped
pointer offset. Resolution is capped at 1.6 million pixels and 1.5× density, with decorative
rendering capped at 30fps. Hidden tabs, covered/offscreen artwork, pause and reduced motion
stop rendering. Missing/lost WebGL falls back to the original image. No 3D world or new
animation library is claimed. Direct DOM transforms, opacity and clipping describe the
scroll chapter; invisible action groups are inert. Pointer response does not hijack touch.


On reading-page openings, the painting remains stationary. A separate transparent mist image varies opacity
0.08 ↔ 0.30 over six seconds. The scene pauses when outside the viewport. The visible
pause control persists its choice in localStorage across pages; storage unavailability
never blocks rendering. `?static=1` pauses the scene and displays opening text in its final state before first paint; anchor scrolling is instant in this still mode.

Reduced-motion preference stops mist and entrances, hides the unnecessary motion toggle,
and disables smooth scrolling. No autoplay audio, parallax, scroll hijacking, springs,
looping CTA or animated prose.

One 450ms / 12px entrance is used for opening text only, with 80ms stagger. Controls
respond in 150–200ms. Native FAQs disclose without a JavaScript animation dependency.
The reduced-motion rules follow MDN's [preference guidance](https://developer.mozilla.org/en-US/docs/Web/CSS/Reference/At-rules/@media/prefers-reduced-motion).

## Assets and delivery

Real: original professor/faculty/advisor photographs, actual app screenshots, 2026 retreat
poster, 2025 concert and workshop posters. No generated image represents a real event or
person. The raster mockups are design references only; their generated portraits and copy
are not shipped.

Synthetic v2: nine assets (desktop/mobile mountain, mist, desktop/mobile pine, path and geese),
plus inherited paintings/glyphs. Every new asset has the synthetic prefix and a manifest
with native size, hash and provenance. Artwork is also labeled in the page.

`public/images/sumuk/PROVENANCE.md` and `generation-v2.json` are the authoritative asset
records. Browser delivery is WebP; raw PNG masters are retained. No image was upscaled.
The built-in generator returned 1161–1983px assets despite larger prompt requests. These
are the actual dimensions, not the requested sizes. The homepage artwork is capped at
1672 CSS pixels; approved high-resolution artwork remains a future asset replacement.

The user subsequently supplied 58 community photo candidates with a source manifest. Six selected photographs now appear on home, courses and programs, with source-linked captions. Real concert/workshop footage and high-resolution originals remain in the asset request.
The site does not fabricate them or show a nonfunctional video control.

## Verification and maintenance

- `npm run tokens:check`: generated palette is current.
- `npm run build`: all routes build and TypeScript checks pass.
- `python3 scripts/check-site.py`: built route, fragment, image and h1 integrity.
- In-app browser: desktop/mobile captures and real primary interaction checks.
- `design-qa.md`: source/implementation comparison, fixes, final evidence and limits.

Browser capture files under `docs/design-review/` are local review evidence and are not
served or committed as site content. Capture actual states again after visual changes.
Do not treat a green build as a visual pass or claim accessibility/performance certification.

## Decision record

- Baseline 7fe2519: ink openings and paper reading bodies.
- Baseline 41a2451: actual 2025 posters and timeline entries.
- Baseline a4f6000: shipped anatomy documented.
- 2026-09-08: user delegated end-to-end improvement. Chose the first visual study for home;
  retained ink identity, strengthened live heading and landscape, brought professor forward,
  and used the person-first composition for the institute.
- Replaced whole-painting breath with mist-only motion; added pause and offscreen behavior.
- Replaced undersized screenshot triptychs with a real tabbed showcase.
- Increased web body size and page width, added section shortcuts and course inquiry flow.
- Updated header/mobile-menu/disclosure behavior and truthful recording FAQ.
- Production remains separate. This work is isolated on codex/sumuk-evolution.

### Supplied photography — 2026-09-08

Selected six of 58 candidates: forest movement practice, lakeside meditation, concert auditorium, retreat room, Odaesan path and Zone 2 community. Their captions follow the supplied article metadata. No group photo is recast as a different event or venue, and a generic retreat-room image is not labeled as the 2026 retreat. Sources: public/images/community/sources.json.

### Reference-driven revision

The user specifically asked to apply the September 6 saved references and the interaction
skill. `docs/design/reference-motion-direction.md` records the inspected sources and design
transfer. Two additional synthetic lake panoramas (desktop/mobile, v3) supply the interactive
scene; original photographs provide the next chapter. The previous static split hero is
preserved in commit 53c410f rather than retained as a competing homepage rule.

### Vision and experience refinement — 2026-09-08

The homepage now leads with “명상하는 나라를 만듭니다.” and connects education, community, personalized AI and the planned 인지움 홀. Courses lead with experience and outcomes, with detailed terms in disclosures. Programs lead with real event imagery and thematic chapters. `/space` uses supplied architectural proposal renderings, explicitly labelled as proposals and preparing. `ScrollImage` adds small scroll-linked drift and shadows while preserving accessible original-image links and motion fallbacks. See `docs/design/vision-and-experience.md` for source evidence and the Before/After/Why decision record.

### Researcher and meditation lab refinement — 2026-09-08

The homepage now states “명상을 연구하고, 일상으로 이어갑니다.”; 명상하는 나라 remains the institutional vision. About starts with one researcher profile, then four real book covers, dated YouTube reach and public lecture links before the vision/AI sections. `BookShelf`, `ChannelStory`, and `Reveal` share content and interaction patterns with Resources. See `docs/design/researcher-books-and-lab.md` for source distinctions, edition notes and the supplied English brand descriptor.


### Community photo wall — 2026-09-08

`CommunityWall` adds two full-bleed, slowly moving photo ribbons at the homepage's community chapter and the end of Programs. Fourteen authentic images; pause, complete grid and a full-image dialog with original-post links. Reduced-motion/static/no-JS modes remain browsable. Book destinations now use Kyobo. Headline alternatives remain proposals; see `docs/design/community-wall-and-copy.md`.


## 2026-09-09 — INZEUM, then the experience

The homepage now opens with the official INZEUM lockup, with “과학에 기반한 비종교적 명상.” as a factual descriptor. This supersedes the earlier homepage slogan; it does not change the organization’s vision. The Korean brand spelling is **인지엄**.

An authentic concert film and three documentary photographs join the source assets. ConcertFilm uses explicit play, native controls, full framing and no eager video preload. The home community introduction, AI/app story and planned Hall presentation are condensed. Details, reference interpretation and source provenance: [brand-and-film.md](docs/design/brand-and-film.md).


### 2026-09-09 — Pre-push polish

Retain the approved-for-now wordmark opening. On landscape viewports at most 500px tall, shrink the hero wordmark and place the description and action side by side to avoid overlap. The website's app marketing page now uses 합니다체 consistently, with a beta-status CTA linking to its release section and the date label “2026년 중”. This does not change the native app's voice. See design-qa.md for captured checks.
