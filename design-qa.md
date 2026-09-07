# Researcher, books and meditation lab — design QA

final result: passed

2026-09-08. Preview: http://localhost:3315/about. Branch: codex/sumuk-evolution.

## Source and comparison

User supplied five screenshots and explicit permission to improve the existing ink design, move personal credibility earlier, add four books/YouTube links/reach, add hover/shadow/movement, and reconsider the homepage phrase. Captured current /about before editing: `docs/design-review/profile-v5/about-before.png`. Source and implementation (`about-desktop.png`) are both 1425×990 image pixels at 1440×1000 CSS viewport, using the in-app browser's capture scaling. Combined at equal 1000×695 panels in `about-comparison.png`, opened together and reviewed. This is an intentional evolution, not a clone of the older blue screenshot.

Observed baseline issues: the second detailed professor profile was separated from the opening photo by long institutional sections; only three titles were mentioned; there were no cover links or dated channel reach; vision columns were text-only. The final profile combines the actual portrait, the lab proposition and the researcher's identity, then links directly to books and public lectures. The duplicate portrait section is removed. Added sections use existing ink/paper typography and tokens.

Focused evidence: four cover originals were opened individually to verify author/title/edition; `books-desktop.png` shows complete covers, including the hovered GRIT state. `books-mobile.png` checks the two-column shelf; `channel-desktop.png` and `channel-mobile.png` check readable numbers, source date and links. `vision-desktop.png` verifies photographic links and the explicit proposal label. /resources also reviewed on paper; `resources-desktop-final.png` records the final lighter shadow treatment. No generated image substitutes.

## Fidelity surfaces

- Typography: existing font families retained, proposition given two deliberate lines, professor name and roles grouped. No overflow at 390×844, 768×1024 and 1440×1000. Responsive count sizes prevent crowding on phones.
- Layout: portrait first on desktop and phone, deliberate inset photograph, no second duplicate profile. Four desktop book columns become two on phones. Channel narrative/stats stack on phones and tablets. Navigation links wrap without hiding controls.
- Colors: same Sumuk ink and paper. Color comes from the original photograph/covers. Paper-specific book shadow softened after review (0 10px 20px at alpha .16; dark books retain .32).
- Images: original local portrait, supplied community photos and hall proposal; four untouched retailer cover assets with source hashes. Covers shown with contain sizing, no text reconstruction or cropping. GRIT is Kim's revised edition, not Duckworth's book.
- Copy: concrete lab proposition based on user-supplied Joohan wording; meditation-nation vision retained lower on the page. Legal company identity unchanged. Bestseller claims limited to supported works, no invented aggregate sales/current rankings. Channel figures are a dated snapshot, not a live count or cross-channel total.

## Interactions and motion

- Opening book CTA reaches #books.
- Four external book hrefs match the observed source pages; new-window behavior labelled. No purchases or external forms submitted.
- YouTube channel, videos and streams links point to the official channel. No autoplay or third-party iframe.
- Book hover verified in browser: GRIT transform includes translateY(-10px) and rotateY(-5deg); shadow changes from alpha .32 / 14px28px to .44 / 26px40px. Moving pointer away restores transform:none.
- Keyboard Tab moves from first book to second; focused link retains a solid 2px outline. Book descriptions remain visible without hover.
- Entrance behavior tested in normal mode: seven below-fold reveal containers initially wait; after book CTA scroll, all four books have opacity1 and no waiting attribute, while three offscreen vision cards remain pending. Initial profile remains visible. Existing pause preference restored after the test.
- Reduced-motion and static fallbacks preserve content; no motion framework or timed animation loop added. OS reduced-motion setting not toggled; source guard and CSS inspected.
- Browser console errors/warnings: none captured in reviewed runtime.

## Verification

`npm run build`: passed, 18 generated outputs; /about first load ~108kB.
`npm run tokens:check`: passed.
`python3 scripts/check-site.py`: passed for 13 HTML routes, including h1/alt and local image/route/fragment integrity.
`git diff --check`: passed.

## Iteration history

Initial desktop and phone layouts passed; proactively reduced count font sizes and stacked tablet channel content before final captures. Visual review found book shadows heavy on the paper surface; softened and recaptured. No remaining actionable P0/P1/P2 findings. Previous iteration reports remain in git and `docs/design-review/profile-v5/qa-before.md`.

## Limits

Public channel snapshot checked 2026-09-08 (37.5만 subscribers, 47,098,787 views); not automatically refreshed. Book covers identify listed editions and retain retailer marks. Full live YouTube streaming, external checkout, a screen-reader audit and forced GPU-loss were not tested. No outreach, SDK integration, legal change, deployment or paid API call occurred.
