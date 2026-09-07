# Vision and experience refinement — design QA

final result: passed

Date: 2026-09-08. Branch: codex/sumuk-evolution. Preview: http://localhost:3315/.

## Source and visual comparison

Source truth: the user's selected current ink/lake homepage screenshot at `/var/folders/rs/5zxxffr5607d14b2ht7bq0780000gn/T/codex-clipboard-340f67f1-ecee-4142-994b-e6dfe5203c5a.png` (1871×930). Explicit requested deviations: mission-led heading, richer event chapters, less course prose, AI-native company/product story, planned hall and additional image movement.

Implementation: `docs/design-review/vision-v4/home-desktop.png`, browser CSS viewport 1871×930, captured image 1856×923 (in-app browser capture scaling). Both source and implementation aspect-contained in 1120×557 panels of `hero-comparison.png`; no geometric stretching. Top-of-home state, ink theme, motion paused. The panorama and minimal header remain; the smaller two-line mission headline and additional space link are intentional. Source and implementation were opened together in the combined image, then typography and controls inspected at full viewport resolution. This is a requested evolution, not an exact clone of the old text.

Hall visual source: supplied PDF page 10, original embedded 1920×1080 rendering, visually opened and extracted. Original material, lighting and geometry retained; captions label it a proposal. Pages 9 and 13 also visually inspected. No screenshot-derived floor plan or invented completed venue.

## Findings and corrections

- P2, mobile course conversion: initial photo-first order pushed the value and application guidance multiple screens below the anchor. Fixed by showing the introduction, formats and enrollment CTA first on phones. After: `courses-mobile-final.png` at 390×844 CSS (375×812 capture); CTA visible in the first anchored viewport. Desktop keeps the editorial portrait/copy pair.
- P2, photo edge protection: a fixed 18px image offset could exceed the crop reserve of short phone images. Fixed by bounding drift to min(18px, image height × 0.02), inside the 1.045 scale reserve. Verified final scroll progress changed the visible hall image offset from -0.304px to +3.436px, with offscreen images unmeasured. Static mode reports transform:none.
- Corrected the homepage vision link to `/about#vision` after inspecting its rendered destination.
- Capture timing: one retreat screenshot was taken before its lazy image loaded; rejected and recaptured after complete/naturalWidth verification. Tablet navigation was initially captured during its existing color transition; settled capture verifies black navigation on paper. These were evidence timing issues, not persistent missing assets or contrast defects.

No remaining actionable P0/P1/P2 findings.

## Required surfaces

- Typography: retained site fonts/optical hierarchy. Mission wraps into two deliberate lines. Phone course hierarchy makes purpose and logistics scannable. Full-size desktop, phone and tablet captures inspected for clipping and wrapping.
- Spacing/layout: same ink/paper gutters, hairlines and open sections. Portrait/course details share a desktop grid; stack with copy first on phones. Space imagery preserves source aspect ratios. Modest image shadow; no new floating navigation. No horizontal overflow in measured states.
- Colors/tokens: existing Sumuk palette; generated token check passes. Settled tablet header is rgb(13,13,12) on paper. Hall warmth comes from the supplied rendering, not a new palette.
- Image quality: actual supplied photos, preserved source face stickers, proposal images extracted directly without upscaling, existing synthetic ink artwork still labelled. Full-image links retain access to original framing. No fake event photos or testimonials.
- Copy/content: official mission verified; current foundation cohort replaces generic enrollment claim. AI statements checked against local app code/ADRs. Sleep research explicitly separated from available app functions; hall remains preparing. Internal operations/planning pages are not linked from public UI.

## Browser coverage

In-app browser, existing Next production build, individual viewport captures (not broken full-page stitching).

- Desktop: 1871×930 hero; 1440×1000 course, training, AI and space views.
- Phone: 390×844 hero, course foundation, retreat, August training, technology, space and company AI story. Evidence files under `docs/design-review/vision-v4/`; phone review composite supplemented by full-resolution course and retreat inspection.
- Tablet: 768×1024 course; six-item desktop nav fits and settled contrast verified.
- Short: 1024×600 hero; title bottom230, footer top480, CTA bottom536; no overlap/overflow.
- Mobile menu: opened and navigated to courses; dialog closes on route change.
- Course disclosure: opens fee/steps content, education and application hrefs match the official published notice. No external form submitted.
- Hero action: navigates to `/courses#foundation` and the correct course heading.
- Motion: WebGL active true on resume and false on pause. Prior pause preference restored. Photo movement bounded and offscreen skipped; static query returns transform:none. OS reduced-motion not toggled; its guard/CSS verified in code.
- Console errors/warnings: none captured on reviewed final runtime.

## Build and integrity

`npm run build`: passed (18 generated outputs; homepage about111kB first-load JS plus lazy scene renderer).
`npm run tokens:check`: passed.
`python3 scripts/check-site.py`: passed, 13 HTML routes including /space; one h1, img alt and local image/route/fragment checks.
`git diff --check`: passed.

## Remaining limitations

Actual August event photographs and approved video still needed. Community illustration is explicitly identified, not passed off as that event. Hall opening date and final design are not established. Enrollment notice is time-sensitive (September10 deadline); recheck before later deployment. No live AI, voice, participant data, VM or paid APIs were exercised. No performance benchmark or forced GPU-loss test claimed. Production is unchanged.

Implementation checklist: completed. Earlier QA history is retained in git and locally in `docs/design-review/vision-v4/qa-before.md`.
