# Design QA — 2026-09-08

final result: passed

No actionable P0/P1/P2 findings remain in the reviewed frontend scope. This is a verified
local website redesign, not a production deployment or accessibility certification.

## Source and implementation

- Source visual truth: first displayed Product Design study,
  `/Users/jaehoshin/.codex/generated_images/01a07c83-eb38-7791-a995-496141a3814e/exec-cc0adff6-117d-47de-b761-907d216356b2.png`.
- Institute direction: third study, `exec-89db03e3-e745-4a1f-997b-7c9eda74319e.png` in the same directory.
- Source content: original redesign/sumuk at a4f6000; actual portraits, app screens and posters.
- Added source: user-supplied 홈페이지_네이버카페_이미지_후보.zip; 58 candidates,
  six selected. `public/images/community/sources.json` records the files and article context.
- Implementation: `http://localhost:3315/`, branch `codex/sumuk-evolution`.
- Primary screenshot: `docs/design-review/home-desktop-final.png`.
- Full-view comparison: `docs/design-review/home-comparison-final.png` (source left, implementation right).
- Focused typography/action comparison: `docs/design-review/home-type-comparison-final.png`.

The source is 1422×1106. Browser output for the 1440×1120 CSS viewport is 1425×1108;
the capture tool scales output slightly. Both were normalized with aspect containment to
1440×1120 before comparison. No density-derived difference was treated as a design defect.
The tool does not provide an independent deviceScaleFactor, so none is invented here.

State: homepage at scroll zero, ink theme, final entrance state. The still query `?static=1`
shows final text before first paint and pauses ambient motion; normal motion was tested
separately. Phone viewport is 390×844; tablet viewport is 768×1024. Capture metadata in
`browser-checks.json` and `final-checks.json` records actual viewport sizes.

## Required fidelity surfaces

- **Typography:** Pretendard Variable loaded in every route check; 72px desktop home display,
  34–42px phone display, 17px body and 15px supporting text. Headline wrapping, Korean
  keep-all, readable controls and 34em reading measures inspected. The smaller header
  wordmark and 20px desktop hero lead are intentional product adaptations, not a second font.
- **Layout:** same hierarchy as the selected study: teaching headline and action on the left,
  landscape on the right, compact proof, original professor next. Desktop hero reduced to
  an 800px cap; independent narrow-screen compositions protect text. Open course groupings,
  paper reading sections and gallery spacing were checked on desktop/phone/tablet.
- **Color:** existing Sumuk roles preserved. Ink, warm ivory and sparse vermilion; paper for
  reading. Header follows actual Paper top and bottom. No new colored controls or background
  gradients. Photographs retain real color; natural greenery and rooms add warmth.
- **Image quality:** actual wordmark/portrait/screens/posters retained. The generated study's
  face was not used. Nine purpose-made raster assets are recorded at their native dimensions,
  without upscaling. Six supplied photographs retain framing and have source-linked captions.
  Mobile band artwork is complete, with no clipped birds, tree crown or path.
- **Copy:** primary action is foundation discovery, inquiry is honestly an email draft, and
  source dates are not inferred from candidate prefixes. The app FAQ's obsolete local-only
  recording claim was corrected from platform ADR 0033. The three legal source files are
  unchanged. Faculty/advisor membership is unchanged.

## Comparison history and fixes

| Finding | Severity | Fix | Post-fix evidence |
|---|---|---|---|
| Desktop hero delayed the professor below the selected composition | P2 | Cap at 800px, tune headline/action scale | home-comparison-final.png; home-type-comparison-final.png |
| Original news birds and course painting intersected the lede | P2 | New right-weighted desktop artwork with text space | news-desktop-final.png; courses-desktop-final.png |
| Desktop band art clipped on phones | P2 | Three dedicated 3:2 mobile paintings, displayed below copy | courses-mobile-final.png; programs-mobile-final.png; news-mobile-final.png |
| Three app screenshots became unreadable on phones | P1 | One large actual screen with four accessible tabs | home-app-mobile.png; app-tabs-mobile-v1.png; app-mobile-top.png |
| Native dialog allowed a reverse-Tab focus escape on this host | P2 | Explicit Tab/Shift-Tab cycle through dialog controls | menu-keyboard-check.json: ten consecutive steps remain inside; mobile-menu-final.png |
| Tablet proof/lede overlapped artwork | P2 | Smaller compositions below 1024px; proof follows CTA; painting stays below band copy | home-tablet-final.png; courses-tablet-final.png; news-tablet-final.png |
| Institute tablet text fragmented into narrow columns | P2 | Stack copy and original photograph below 1024px | about-tablet-final.png |

The browser's stitched full-page capture duplicated sections. Those files were rejected and
isolated under `/tmp/naemyungwon-rejected-full-captures/`. They are not evidence of either
website defects or a visual pass. Accepted evidence consists of individual viewport captures
and DOM checks; community galleries use actual anchored still views.

## Browser verification

`docs/design-review/browser-checks.json` covers 12 page states × desktop/phone:
`/`, `/courses`, `/programs`, `/about`, `/app`, `/news`, `/resources`, `/faq`,
`/privacy`, `/terms`, `/delete-account`, `/nope-404`.

Every checked viewport reported no horizontal overflow, broken loaded images, or missing
same-page fragments. Fonts were loaded. Material changes were recaptured in final screenshots;
tablet checks were added for the complex openings. Browser error/warning log reads returned
empty arrays. Expected 404 content was rendered and its return links validated.

Verified interactions:

- Home foundation CTA → `/courses#foundation`, target below fixed header (about 88px).
- Course section links and inline FAQ disclosure; native summary opens/closes without a JS dependency.
- Foundation inquiry has the correct mail recipient and encoded subject. No email was sent.
- App tabs update the actual screenshot and its descriptive text. ArrowRight moves selection
  and focus; tabpanel accessible label follows selection.
- Menu opens, background scrolling locks, ten reverse-Tab steps stay inside, Escape closes,
  page scrolling restores, and focus returns to “메뉴 열기”.
- Header is paper over Paper and returns to ink over the long mobile footer.
- Ambient scene resumes (`playing=true`, computed animation state `running`), then pauses
  offscreen (`playing=false`, state `paused`). Pause choice persists across navigation.
- Complete-image/poster links point to existing local files with new-window labels and
  noopener/noreferrer. The in-app browser did not expose the target-blank window to the
  automation session, so popup-window behavior is not claimed as visually verified.

Important capture states:

- `home-desktop-final.png`, `home-mobile-final.png`, `home-tablet-final.png`
- `about-desktop-top.png`, `about-mobile-top.png`, `about-tablet-final.png`
- `home-community-desktop.png`, `course-practice-desktop.png`, `course-practice-mobile.png`
- `programs-community-desktop.png`, `programs-community-mobile.png`, `concert-desktop.png`
- `course-entry-mobile-v1.png`, `course-faq-mobile.png`, `home-app-mobile.png`
- `mobile-menu-final.png`, `menu-keyboard-check.json`, `motion-check.json`

## Build and integrity checks

- `npm run build`: passed, all 17 generated outputs, including metadata routes.
- `npm run tokens:check`: passed; generated palette current.
- `python3 scripts/check-site.py`: passed on all 12 built HTML routes. Checks one h1, image
  alt attributes, local asset existence, internal destinations and fragments.
- `git diff --check`: passed.
- Nine generated PNG/WebP asset pairs verified against manifest SHA-256 hashes.
- No changes to legal page source files. No production deployment or changes to main.

## Remaining limits / P3 follow-ups

The paintings remain explicitly synthetic studies. The generator returned smaller native
masters than requested; high-resolution approved art can later replace them. Supplied source
photographs are useful documentary images rather than a uniform commissioned shoot. Video
and the uncropped June poster have not been supplied, so no fake video interaction was added.

Reduced-motion CSS and preference-change handling were inspected; the host OS preference
was not changed during testing. No screen-reader certification, live application submission,
external café-login check, or measured Core Web Vitals claim is made.

## Implementation checklist

- [x] Whole-site visual system implemented within the existing app.
- [x] Real source assets and nine art assets integrated and documented.
- [x] Desktop, phone, tablet and core interactions reviewed; P0/P1/P2 fixes verified.
- [x] Current DESIGN.md, sidecar, surface brief, asset records and QA evidence prepared.
- [x] Local preview runs; production remains separate.
