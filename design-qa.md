# Design QA — reference-driven revision, 2026-09-08

final result: passed

Current scope: the revised homepage and its motion. The prior whole-site verification is
preserved in commit 53c410f. Detail-page content, legal text, roster and asset sources from
that pass are retained. No actionable P0/P1/P2 findings remain in this revision's review.

## Visual truth and comparison

- Saved gallery: /Users/jaehoshin/Code/viberick/design-refs/index.html (September 6).
- Inspected Basement f0/f1 and Darkroom f0/f1; inspected their live scene/scroll behavior.
- Revised visual target:
  /Users/jaehoshin/.codex/generated_images/01a07c83-eb38-7791-a995-496141a3814e/exec-d9f8eda9-4b8d-4f12-bb72-019c4f9da642.png
- Implementation: http://localhost:3315/.
- Comparison: docs/design-review/motion-v3/comparison.png, source left / implementation right.
- Main capture: docs/design-review/motion-v3/desktop-start-final.png.
- Source pixels: 1505×1045. Browser capture: 1425×990 from a 1440×1000 CSS viewport.
  Both were aspect-contained into 1440×1000 for comparison; the tool's output scaling is
  not treated as a fidelity defect. Independent deviceScaleFactor is not claimed.
- State: ink chapter, top of page. The typography intentionally follows the brief's larger
  180px desktop display scale; the generated study rendered the headline smaller.

The combined comparison is sufficient for composition; the native desktop and phone captures separately expose the short lead and CTA at readable scale, so no further typography crop was required.

## Required surfaces

Typography: live Pretendard, four-character h1, normal Korean tracking, clear short lead
and action. Stronger editorial section headings replace repeated explanatory paragraphs.
The existing wordmark remains a real source asset. Desktop and phone line wrapping checked.

Layout: full-viewport scene, then a real photographic chapter, then concise course/program/
app choices. Native sticky scroll is 190svh desktop / 180svh phone; it does not hijack wheel
or touch input. Short-window CTA remains inside the viewport. Phone uses a separate painting
and a portrait photograph, with the correct caption for that image.

Colors: Sumuk palette preserved. No white/lime concept, source-site branding, red studio
controls or invented seals introduced. Neutral actions remain legible over the imagery.

Images: two new synthetic panoramas are actual raster textures, recorded in generation-v3.json.
The shader only displaces those source pixels. It is not presented as a full 3D environment.
Original supplied forest-practice and retreat-room photographs supply the next chapter;
source context remains accurate. Synthetic caption belongs to the ink scene only.

Copy: home explanation reduced to short statements and detail links. Course formats and
inquiry destinations remain real. Full teaching detail stays on About; full course detail
stays on Courses. Roster/legal wording untouched.

## Before / after review

| Before | After | Why / evidence |
|---|---|---|
| Static split headline and mountain | Immersive ink/lake scene | Basement's environment-first structure; comparison.png |
| Paragraph-led homepage | Oversized type and real photographic chapters | Darkroom's hierarchy; desktop-learning.png and desktop-gatherings.png |
| Whole-art/mist fading only | Water texture and damped pointer response | Actual WebGL renderer confirmed active; pointer capture |
| Scroll passed a static hero | Direct native-scroll photo wipe | Desktop transition captures and walkthrough frames |
| Cold/cached image could leave the chapter unrevealed | Eager next-chapter image plus cached-complete initialization | Fixed P1; mobile-practice-final.png, clip 0%, caption ~1 |
| Phone explanation over bright artwork | Explanation/action moved into dark negative space | Fixed P2; mobile-start-final.png |
| Hidden action groups remained keyboard-reachable | Exit/enter groups become inert; visible links regain tab order | Footer inert and action -1 during photo chapter; photo action 0 |

## Interaction and fallback evidence

- Desktop renderer reported `webgl`, active true; canvas resolution bounded by the renderer.
- Pointer interaction captured against the water region.
- Normal scroll revealed the complete real photograph; when it covers the painting,
  the canvas reports active false. Reverse scroll returned to ink and active rendering.
- Pause via the actual visible control reported active false and aria-pressed true;
  resume reported active true. Automation's locator helper centered the sticky control and
  moved the scene; coordinate clicking the already-visible control avoided that tool artifact.
- `?static=1` reported fallback renderer, static stage positioning, second photograph below
  the first viewport (900px), and caption opacity 1. It uses ordinary sequential sections.
- Reduced-motion CSS and preference handling inspected; host OS setting was not changed.
- Primary course action reached /courses#foundation with heading at ~88px and no remaining
  canvas in the destination. This also exercised scene unmount/cleanup.
- No horizontal overflow at 1440×1000, 1280×900, 768×1024, 390×844 or 1024×600.
- Short-window CTA measured top 480 / bottom 536 in a 600px viewport.
- Browser error/warning log reads returned empty arrays.
- Course/program links and app layout checked in desktop and phone captures. The app tab
  component and remaining detail-page flows retain the previously verified implementation.

## Artifacts

All evidence is local under docs/design-review/motion-v3/:
- desktop-start-final.png; desktop-pointer.png
- desktop-transition-1.png; desktop-transition-2.png
- mobile-start-final.png; mobile-practice-final.png
- tablet-start.png; short-start.png
- desktop-learning.png; desktop-gatherings.png; desktop-app.png; mobile-learning.png
- comparison.png; behavior-checks.json
- walkthrough.mp4 and walkthrough-frames.json: sampled real viewport captures, not an FPS benchmark.

The earlier cold/cached-load frames are retained as failed-iteration evidence, not final
proof. The supplied screenshots and live references are research inputs, never shipped assets.

## Build checks and limits

`npm run build`, `npm run tokens:check`, `python3 scripts/check-site.py` and
`git diff --check` passed. The structural checker covers all 12 built HTML routes.
Homepage first-load JS is about 110kB in the build report, plus the lazily loaded scene
module; this is not a measured Core Web Vitals claim. No animation framework was added.

Implementation budgets (engineering judgment, not measurements copied from a reference):
30fps decorative rendering, maximum 1.6 million canvas pixels, maximum 1.5× density,
small pointer displacement and a six-parameter texture shader. GPU-unavailable and lost-
context fallback paths are implemented; context loss was not forcibly simulated.

Remaining P3: final approved high-resolution artwork can replace the synthetic studies.
The local walkthrough is sparsely sampled; use the live page to assess continuous motion.
No deployment or production-main modification is included.
