# Community photo wall and headline exploration

2026-09-08. User asked for Kyobo links, a more abundant animated display of supplied participant photographs, and alternatives to the homepage headline.

## Implemented

- Four book links now use Kyobo. The user's two URLs map to 내면소통 (`S000201078049`) and 내면소통 명상수업 (`S000216048766`). Official Kyobo ISBN search pages corroborated these mappings. The same official search/preview pages identify 김주환's 2025 그릿 (`S000215820951`, ISBN9791168342682) and 회복탄력성 (`S000001933356`, ISBN9791189938772). Direct product HTML was empty in the fetch tool, so product content verification used Kyobo's search pages and the first book's rendered search result. No purchase was attempted. Book cover provenance remains its original retailer source; no watermark or cover text edited.
- Home: two full-bleed photo ribbons after the event links and before the AI chapter. Programs: the same photo collection after the paper archive. 14 selected supplied photos, six newly converted to WebP. No synthetic participant imagery or invented testimonials.
- Continuous opposite-direction tracks, 105s and 118s per cycle; motion pauses offscreen, on hidden-tab events, on hover, when the image viewer is open, and via an explicit pause control. Touch contact pauses motion. Separate gallery pause preference `inzeum:community-paused` avoids changing the ink scene preference.
- Complete gallery mode: 14 unique keyboard-accessible image links; reduced-motion/static/no-JS fallback uses this mode. Moving duplicates are excluded from the accessibility tree and tab order; the accessible “사진14장 모아보기” control exposes every image.
- Native dialog viewer preserves the full image aspect/framing and supplies original community-post links, previous/next buttons, left/right keyboard navigation, Escape, focus containment and focus restoration. Touch users can browse with the same controls; the flowing strip itself is not a swipe carousel.

| Before | After | Why |
| --- | --- | --- |
| Two isolated program images | Two dense, slowly moving photo rows | Let community scale, people and atmosphere carry the story |
| Thumbnail/original opens separately | Full-image viewer plus source post | Make faces/details easy to inspect while preserving context |
| Retailer links mixed with user preference | Four Kyobo destinations | Follow the requested purchase destination consistently |

## Copy options — not yet applied

The user asked for alternatives rather than choosing a replacement. The current homepage phrase remains unchanged.

1. **마음의 힘을, 일상의 힘으로.** Recommended: directly connects the distinctive 마음근력 idea to everyday value. Supports education, community and personalized AI together.
2. **고요하게, 더 단단하게.** Shorter and more atmospheric; pairs naturally with the ink scene, but needs the lab descriptor beneath for specificity.
3. **나를 만나는 고요한 시간.** Personal and welcoming; emphasizes the first experience more than the institution.
4. **고요함을 배우고, 삶으로 이어갑니다.** Closest to current language, with less emphasis on organizational process.

Keep “INZEUM · A meditation lab in Seoul” as the identity line and the science-based, non-religious description in supporting copy. Keep 명상하는 나라 in the vision section rather than rotating many taglines in the hero.
