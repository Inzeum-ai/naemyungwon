# Reference-driven revision — 2026-09-08

This revision follows the user's correction that the September 6 gallery and interaction
references should materially inform the result. It supersedes the previous homepage's
static split composition and its no-scroll-narrative rule.

## Evidence inspected

- Saved Basement frames f0 and f1: full-viewport room first, minimal navigation, then bold
  studio statement. Live scene inspected September 8: camera/scene response and animated
  objects observed after pointer interaction. https://basement.studio/
- Saved Darkroom f0 and f1, plus live scroll: enormous display lettering yields to full-screen
  project visuals and persistent captions. https://darkroom.engineering/
- Saved Igloo: a scene rather than a document; useful spatial reference. Its gallery's
  excluded label means no measured DOM, not an absence of visual design.
- Saved OIO f0 is a loading state and is not treated as a completed design reference.
- Saved Linear: disciplined secondary product reading, reserved for the app/detail pages.
- Local skills: art-direction-first and emil-design-eng. Marketing scene motion is not
  governed by the same duration as repeated navigation actions. A CSS duration census
  does not prove absence of JavaScript scroll or WebGL animation.

Gallery: /Users/jaehoshin/Code/viberick/design-refs/index.html

## Decisions before code

Register: immersive editorial. Hero artifact: an authored ink mountain/lake environment,
with actual photographic practice as the next chapter. Same Sumuk palette and wordmark.
Typography: live four-character 내면소통 title as a major graphic element; Korean tracking
stays normal. One short explanation and the course CTA in viewport one.

| Before | After | Why |
|---|---|---|
| Split headline / mountain image | Full-viewport ink scene | Basement's environment-first opening |
| Whole-page explanatory sequence | Short visual chapters with detail links | Darkroom's image-led hierarchy |
| Mist opacity as the only motion | Pointer-responsive water texture and gentle scene response | Give the artwork a tangible interaction |
| Scroll passes a static section | Native sticky scene reveals a real practice photograph | Connect the visual world to real practice |
| A repeated teaching block on home | Short statement; full explanation remains on About | Reduce reading before the visitor chooses a path |

Motion: direct scroll progress for the chapter transition; no scroll inertia or hijacking.
Pointer motion damped over time, constrained to the background. Water uses a small WebGL
texture distortion, not a recreated 3D world. Text and controls are DOM content. Pointer
motion does not apply to touch scrolling. UI hover/press remains about 120–200ms; keyboard
navigation stays direct. Reduced motion / static mode render ordinary sequential sections.

Performance/fallback: one texture, capped canvas resolution, offscreen/hidden-tab pause,
GPU resource cleanup, and the actual source image as a fallback. No new animation library.

Visual target: revised study exec-d9f8eda9-4b8d-4f12-bb72-019c4f9da642.png in this task's
Codex generated_images directory. Its separate artwork is synthetic and labeled.
