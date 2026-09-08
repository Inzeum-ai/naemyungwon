# A brand opening, followed by real experience

2026-09-09. Continues the existing Sumuk direction on `codex/sumuk-evolution`.

The user rejected the previous homepage headline and did not select any of three proposed replacements. Instead of publishing another generic promise, the opening now gives the official INZEUM lockup the primary position. Its accessible heading is “INZEUM 인지엄 · 내면소통연구소”. The concise descriptor is “과학에 기반한 비종교적 명상.” This is a local design iteration, not a new approved corporate slogan.

## Reference and interpretation

Inspected https://openai.com/index/gpt-6-astra/ in the in-app browser. Observed its brand-led animated opening, transition to a short statement and film, and tabbed examples. Its star field exposes drag/arrow-key interaction and replay. An ArrowRight interaction was exercised. Source captures live in `docs/design-review/film-v8/` (ignored).

The lesson applied here is sequence and hierarchy: identity, concise purpose, then evidence. No OpenAI assets, code, product claims or star-field graphics were copied. The existing authored ink scene remains INZEUM's visual identity; video and actual photography supply human context.

| Before | After | Why |
|---|---|---|
| Large “명상을 연구하고, 일상으로 이어갑니다.” | Official INZEUM lockup and factual lab descriptor | Name and identity take priority over a generic slogan. |
| 190svh desktop ink/photo journey | 160svh desktop, 155svh mobile | Real people appear sooner. Reduced-motion/static modes retain ordinary sequential scenes. |
| Forest scene repeated in hero and gallery | Concert audience on desktop; participant greeting on phone | Broader evidence of the institution and a crop suited to each surface. |
| Program cards followed by another large community introduction | Concert film, two documentary photos, event links and a compact gallery introduction | Explain each experience once and let the assets carry more of the page. |
| Separate full AI story and app showcase on home | One personal-practice section, initially showing 내면AI | Connect the benefit to the actual product screen. Detailed AI operating model remains on About. |
| Full-width planned Hall chapter | Compact photo/text treatment | Preserve the future-space story without giving it the same weight as operating programs. |
| 인지움; old browser title suffix | 인지엄 throughout current UI/code metadata | User supplied the correct Korean brand spelling. Legal entity and working domains remain factual. |

At a matched 1440×960 viewport, observed normal homepage height decreased from 10,777px to 9,300px (about 14%) while adding a film and documentary photography. This is a viewport-specific layout measure, not a load-time benchmark.

## Assets and interaction

The supplied Drive archive contains 217 photos. Three selected photos are now in `public/images/concert/`: audience, greeting and lecture. They were exported from the full-image Drive viewer and resized without retouching; acquisition and hashes are recorded in `sources.json`. Do not present the viewer exports as untouched original JPEG downloads.

The original 58,235,339-byte, 68.18-second HEVC film is converted to 1280×720 H.264/AAC in `public/videos/concert-sketch-2025.mp4`. Full duration, framing, sound and the existing embedded lab branding are retained. The poster is an original film frame at 30 seconds. The film is reused on Home and Programs. It has no automatic playback and uses `preload="none"`. Explicit play exposes native playback, sound, seeking and fullscreen controls. Keyboard play transfers focus to the video. Scrolling offscreen or hiding the tab pauses it. Errors offer the original Drive video.

The earlier ink WebGL interaction, native scroll, motion pause preference and gallery pause/reduced-motion behavior remain. No additional decoration loop is introduced. The 14-photo community gallery keeps its existing source links and lightbox. Mobile caption text gets a dark backing after visual QA found it crossing bright water.

## Validation and limits

Production build and TypeScript validation, token check, 13-route/asset/fragment checker, and diff whitespace check pass. Browser evidence covers desktop, a 390×844 CSS viewport, film playback, keyboard play/focus, gallery grid sizing and tab-key navigation. No captured JavaScript errors. The final phone check used a real 390×844 iframe viewport because the browser viewport override became unreliable across tabs; it is CSS-responsive evidence, not physical iPhone/Safari certification.

This pass does not claim to complete every item in the preceding audit. Enrollment expiry, broader app copy harmonization and shareable tab URLs remain separate follow-ups. No deployment was performed in this pass.
