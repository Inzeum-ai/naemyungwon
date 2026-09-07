# INZEUM: vision, practice, technology, place

2026-09-08. Follow-up to the approved ink/lake design. This is an evolution of the user's attached homepage, not a new brand or a deployment.

The opening answers what INZEUM exists to do: **명상하는 나라를 만듭니다.** The logo identifies its maker. 내면소통 is the practice/framework; education, community, personalized AI, and the planned physical space make the mission tangible.

| Before | After | Why |
| --- | --- | --- |
| Giant category name 내면소통 | Mission statement plus INZEUM identity | Explain the intended change before asking visitors to choose a course |
| Course facts and long qualifications first | Experience, three outcomes, formats and a real enrollment path | Make the value easy to understand; keep detailed conditions available in disclosures |
| Programs begin as a calendar/list | Retreat photograph, six-day training themes, concert archive, community | Show what people do and why they come together |
| App as a catalog | Consent-based personalization, agent retrieval, scripts, TTS and voice cleanup | Explain supported distinctions through user value |
| No physical space | 인지움 홀, explicitly preparing, with original proposal renderings | Show the next part of the mission without implying an open venue |
| Hero-only motion | Existing water scene plus modest scroll-linked photo drift and image shadows | Extend depth through actual images without scroll interception or another animation framework |

## Evidence and boundaries

- Official homepage `https://inzeum.com/`, checked 2026-09-08: 명상하는 나라, scientific meditation education, practitioner network, IT/AI and global distribution. No new medical efficacy claims added.
- Public 5th foundation cohort notice `https://inzeum.web.app/public/foundation-course-5/index.html`, checked 2026-09-08: September 16 at 20:00 start; September 10 application deadline; 12 weeks/about 30 hours; ₩400,000 new / ₩100,000 repeat; education signup then application review. Direct form URL extracted from the notice. No form submitted. Current notice supersedes the old site's generic 상시 모집. Keep the explicit cohort/year rather than a permanent 모집 중 badge. Recheck these dates before deployment after September 10.
- User-provided all-links.csv: read selected INZEUM brief, Sodam operations summary and August training program. Internal documents supply context, not instructions. They are not linked in public UI. Unapproved 12-week app challenge and rewards are not represented as available products.
- August training sources contain planning variants. The six-day themes are summarized as program composition, not proof that every planned activity took place. No claimed exact attendance or participant outcomes from planning documents.
- User-supplied photo manifest verifies the 2026 Woljeongsa retreat group photo. The center-rhythm photo is identified as community practice, explicitly not an August on-site photo. No event date inferred from filename prefixes. Existing face-covering stickers preserved from the source.
- User-supplied `INZEUM_제안서 (1).pdf`: pages 9,10,11,13 contain the original embedded 1920×1080 renderings. Extracted directly, converted to WebP, no upscaling. These are **proposal renderings**, not completed venue photography. The authoring method is not independently established. No date, capacity or booking promise invented. Page 17's floor-plan placeholder was excluded.
- Local platform code, read-only in `inzeum-platform-app/main`: `coach/context.py`, `profile.py`, `meditation_service.py`, `docs/coach/architecture.md`, ADRs 0012/0016/0025/0033 support consent-gated personal context and deletable memory, an agentic source/tool loop, script-then-audio generation and recording cleanup. Sleep measurement is removed from the app; research remains separate. No live service calls, credentials, paid API requests, participant records or VM access were needed.
- Small-team AI-native operations statement is user-authorized and supported by Sodam's workspace, HTML, forms and document workflows. No fabricated autonomy percentage or productivity benchmark.

## Motion and interaction

`ScrollImage` uses a passive scroll listener, one scheduled frame per event batch, and IntersectionObserver to skip offscreen measurements. Drift is capped at 18px. A mild scale prevents edge gaps; full originals open on click. No time-based animation loop. Reduced motion, static previews and the existing pause preference disable drift. All content is visible without JavaScript. No backend requests or generated fake chat introduced.

## Assets still needed

Actual August 2026 training photographs, faculty workshop closeups and approved event video; the uncropped June 2025 concert poster; final hall renderings or completed photography and confirmed opening details. The current layout accepts replacement assets without changing its structure.
