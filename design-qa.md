# Community photo wall and Kyobo links — QA

final result: passed

2026-09-08. Preview http://localhost:3315/#community-wall. Local branch codex/sumuk-evolution.

## Visual truth and evidence

Source: user-supplied photograph archive and its `.local-assets/naver-candidates/선별_미리보기.jpg` contact sheet, plus the six newly selected source images opened individually at full resolution. Existing ink/page design is the user's supplied homepage target; requested change is an abundant animated gallery in the appropriate community sections, not a clone of a different website. The current hero/punchline is intentionally unchanged pending the user's choice.

Implementation: `docs/design-review/community-v6/wall-desktop-full.png`, 1440×1200 CSS viewport (1425×1188 capture). Opened and inspected: dense two-row image treatment, retained source subjects/colors, varied portrait/landscape framing, visible captions and controls. `lightbox-desktop.png` and `lightbox-mobile.png` verify full uncropped photo presentation against the original source. `grid-mobile.png` and live phone flow checked at390×844 (375×812 regular page capture; native dialog captures differ). Combined evidence: `source-viewer-comparison.png` places the source1600×1200 auditorium image and the1440×1000 viewer capture together in720×600 aspect-contained panels. Opened together to compare subject, complete framing and color; viewer chrome intentionally changes scale. No stretched images or reconstructed faces/text. Visual fidelity is to the actual selected imagery and existing Sumuk surfaces; the new row composition is intentional.

## Required surfaces

- Typography: existing type, restrained captions, readable heading and control labels. Viewer source link and image caption remain visible on phone.
- Spacing: full-bleed two-row wall with narrow gaps; complete grid fits two columns on phones. No horizontal page overflow. Viewer close and next controls fit inside844px height (measured bottom62/bottom800).
- Colors/tokens: existing ink palette with color only from authentic photographs; caption overlays support contrast. No new palette or decorative illustration.
- Images:14 authentic selected images with provenance; loop uses28 visual instances. Full-image viewer restores original framing, e.g. the auditorium source at4:3. No invented dates, attendance numbers or endorsements. New six originals were inspected before conversion.
- Copy: neutral descriptive captions and original post links. All four book links are Kyobo and accessibility labels say so. Cover-source attribution retained separately. Headline alternatives recorded without silently replacing the current line.

## Interactions verified

- Normal mode: two animated tracks; transforms progress in opposite directions, data-playing true when visible. Pause button sets data-playing false and both computed animationPlayState values to paused.
- Pointer click on the auditorium image opens dialog, focuses Close, locks page scroll, shows4/14 and links to the correct community post7359.
- Next changes to5/14 and the fireplace caption. Escape closes, restores body scrolling and focuses the accessible gallery control.
- Grid toggle exposes14 unique links and no aria-hidden wrapper. Pointer/keyboard entry available for every image.
- Phone image opens in full framing; next/close fit. Tab from final dialog button cycles to Close; focus stays inside the dialog. No added focusable animated duplicates.
- Static query on Programs: grid=true,14 links,0 animated tracks. Reduced-motion uses the same path; OS preference was not toggled. No-JS SSR supplies the original-image links in the grid.
- Kyobo hrefs verified in rendered About book shelf: S000201078049, S000216048766, S000215820951, S000001933356. No checkout/form submission.
- Browser console errors/warnings: none captured in reviewed runtime.

## Iteration and integrity

A stale client cache initially showed the pre-build homepage; full reload corrected it before any gallery verdict. Opening from a moving aria-hidden duplicate restores focus to the accessible gallery control, not to the hidden track; corrected before final verification. Early partial-framing screenshots were superseded by wall-desktop-full.png.

`npm run build` passed (18 generated outputs; home first-load JS~114kB). `npm run tokens:check` passed. `python3 scripts/check-site.py` passed for13 HTML routes. `git diff --check` passed. No remaining actionable P0/P1/P2 findings.

Limits: no measured FPS benchmark, OS reduced-motion toggle or screen-reader application test. Kyobo product pages returned empty bodies in the fetch tool; official search results verified IDs/ISBNs, and browser-rendered source links were checked. Existing cover assets were not swapped for unverified edition artwork. Production is unchanged. Prior QA retained in git and locally as qa-before.md.
