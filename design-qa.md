# Brand opening and concert film — design QA

Date: 2026-09-09

Source visual truth: existing deployed homepage at https://naemyungwon-kz7opxb4t-inzeum.vercel.app/, user-supplied screenshots, official local wordmark, and original concert media. Astra is a composition/interaction reference, not a pixel-clone target.

Implementation: http://localhost:3315/ and /programs#coex.

## Evidence and normalization

- Source: docs/design-review/film-v8/before-desktop.png.
- Final implementation: docs/design-review/film-v8/home-desktop-final.png.
- Matched desktop CSS viewport 1440×960; both captured at approximately 1425×950 by CUA. Each contained to 1000×667 in the inspected full-view before-after.png comparison. Both show the initial ink scene; live source motion was running and local saved pause was enabled, so water pixels are not a static fidelity target.
- Intended differences: replace the rejected slogan with the actual wordmark; shorten the scroll journey; introduce real concert photos and film; condense repeated chapters. Existing palette, navigation and artwork are retained.
- Focused mobile comparison: mobile-fix-comparison.png, initial home-mobile.png versus home-mobile-final.png. The initial 390×844 CSS screenshot was returned as 375×812 and normalized to 390×844. Final proof is a direct crop of an exact 390×844 iframe in phone-viewport-full.png, with no image retouching. Browser viewport overrides became unreliable across tabs, so this is CSS viewport verification rather than device emulation or physical Safari testing.
- Additional captures: film-playing-desktop.png, film-mobile.png, film-keyboard-mobile-final.png, gallery-mobile-final.png, photos-desktop.png, programs-film.png.
- Reference observations: astra-hero.png, astra-next.png, astra-interaction.png. No reference assets copied into the implementation.

## Comparison history

1. [P2, resolved] On the first phone pass, small descriptive text crossed bright water and became difficult to read. Added a dark backing to that paragraph and brightened the lab descriptor. Final mobile comparison inspected; text is readable without changing the art.
2. [P2, resolved] Fixed compact-gallery width rules could override grid widths. Added an explicit grid width rule. Browser readback: 14 cards, 157.5px card width in a 375px content area; no horizontal document overflow.
3. [P2, resolved] Poster alt text described a different sampled frame. Corrected it to the professor guiding meditation; the actual poster was visually inspected.
4. Keyboard play now transfers focus to native video controls. Browser readback confirms controls enabled and focused video after Enter.

## Required surfaces

- Typography: official raster wordmark preserved; no substitute type drawing. Korean body/navigation uses existing Pretendard system. Desktop and phone wrapping inspected. The old homepage slogan is removed; About's institutional description remains.
- Layout: original inset/bleed rhythm preserved. Desktop height 10,777px before and 9,300px after, at 1440×960. Mobile video retains 16:9 full framing and fits its 327px content slot. Planned Hall uses a compact two-column desktop layout.
- Colors: original Sumuk roles retained. Mobile descriptor backing corrects the observed image-overlay issue. Film captions adapt to the paper Programs page.
- Assets: three actual Drive photographs; a 68.18-second film converted from HEVC to H.264/AAC. Original framing, soundtrack and embedded branding retained. Photos retain a full-image link. Synthetic ink still labelled 시안.
- Content: Korean brand spelling 인지엄 in current UI and metadata. Parallel home entry labels, benefit-led AI wording and initial 내면AI app tab. No invented testimonials or new scientific results.

## Behavior and checks

- Desktop and phone film playback observed, native controls visible; no autoplay. preload=none verified in DOM/code.
- Keyboard Enter starts the film and transfers focus to the video.
- Compact grid exposes all 14 images without document overflow.
- App ArrowRight changes 내면AI to 기록.
- Programs film placement verified on paper.
- Static mode viewed; existing reduced-motion guards retained. OS reduced-motion setting not toggled.
- No captured JavaScript console errors in final desktop checks.
- npm run build (including type checking), npm run tokens:check, python3 scripts/check-site.py (13 HTML routes/assets/fragments), and git diff --check passed.

## Limits / follow-up

Not a device-farm, screen-reader, video-transcript, or performance certification. No custom subtitles were invented for the supplied film. Exact enrollment expiry remains follow-up work. App-page copy harmonization was completed in the final-touch pass below. No deployment performed.

final result: passed


## Final touch — 2026-09-09

User decision: retain the current homepage wordmark, copy and artwork. The attached critique is reference material, not approval to replace the hero.

| Step | Before | After / result |
| --- | --- | --- |
| 1. Desktop opening | Current wordmark composition | Retained; current screenshot captured before edits. New CSS applies only to landscape viewports at most 500px tall. |
| 2. Landscape phone, 667×375 | Logo occupied y=86–278; footer y=130–283, overlapping | Logo y=72–170; footer y=269–323. Screenshot and DOM bounds confirm separation. |
| 3. Portrait phone, 390×844 | Existing brand opening | Inspected after changes; layout retained. |
| 4. App beta action | “출시 소식 보기” led to general news | “베타 현황 보기” lands on /app#release; release rows visible below header. No captured console errors. |

Evidence captured and inspected in `docs/design-review/final-touch/`: desktop-before.png, landscape-before.png, landscape-after.png, portrait-after.png, app-release.png. Screenshots may be returned at a scaled pixel size; CSS viewport dimensions were read from the browser. This pass used the browser viewport capability, not physical phone testing.

App marketing copy uses 합니다체, preserving existing feature and restricted-beta claims. “2026 · 내” becomes “2026년 중”; no new release promise added. Native app interface copy is unaffected.

Validation: production build with type/lint checks, tokens:check, 13-route check-site.py and diff --check passed. Preview restarted on localhost:3315. Existing concert film and controls were not modified or re-encoded in this pass.

Remaining feedback: the repeated two-part section headlines can be edited in a future content pass; course enrollment expiry still needs explicit state handling. Keep original concert branding and synthetic-art disclosure. Neither is a reason to fabricate or conceal asset provenance.
