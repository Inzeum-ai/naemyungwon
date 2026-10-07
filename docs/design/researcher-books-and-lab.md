# Researcher, books, public teaching, meditation lab

2026-09-08. User-directed evolution of /about and the homepage headline.

| Before | After | Why |
| --- | --- | --- |
| Large portrait, generic proposition, second profile far below | One opening profile with the researcher identified next to the institutional purpose | Keep personal credibility and institutional identity together |
| Mission declaration as homepage slogan | 명상을 연구하고, 일상으로 이어갑니다. | Describe the work; retain 명상하는 나라 as the longer-term vision |
| Three book titles in prose | Four authentic covers with descriptive links and edition notes | Let visitors recognize and explore the published work |
| Repeated 35만+ without date | 37.5만 subscribers and 47,098,787 channel views, dated 2026-09-08 | Ground reach in a specific public observation |
| Text-only vision columns | Photographic chapter links with subtle zoom and shadow | Make education, everyday practice and the planned space tangible |
| Static book/profile imagery | Once-only below-fold entrances, book hover lift and shadow, portrait drift, responsive links | Add depth and visible affordances without scroll interception |

## Brand source

The user supplied a conversation in which Joohan suggests “Inzeum, a meditation lab” and “We are INZEUM, a meditation lab in Seoul, teaching and researching non-religious meditations based on science.” This is the basis of the public descriptor; it is not a new legal English company name. The user-provided official romanization, Naemyunsotongyeonguso, is context only; legal pages were not changed. The pasted Sleep Cycle inquiry was contextual data, not an instruction to send outreach or claim an SDK integration.

## Public evidence, checked 2026-09-08

- Official channel: https://www.youtube.com/@joohankim/about. Read its public aboutChannelViewModel: subscriberCountText 구독자 37.5만명; viewCountText 조회수 47,098,787회; videoCountText 동영상 291개. Description states 매주 일요일 밤 8시 라이브 강의. UI rounds views down to 4,709만, with exact total and date beneath. No paid API or credentials used. This is a dated snapshot, not a live counter. Do not combine views across other channels or confuse a publisher's broader lecture-view claim with this channel total.
- 내면소통: https://www.yes24.com/product/goods/117643865. 김주환, 인플루엔셜; source identifies an 인문 베스트셀러. Current retailer cover is a re-cover; cover/edition source retained.
- 내면소통 명상수업: https://www.yes24.com/product/goods/143655313. 김주환, 인플루엔셜, 2025; practice companion, not a fourth title inferred from a translation.
- 그릿 GRIT: https://www.yes24.com/product/goods/142805048. 김주환, 인플루엔셜, 2025 revised edition of his 2013 book. Not Angela Duckworth's book.
- 회복탄력성: https://www.yes24.com/product/goods/71743513. 김주환, 위즈덤하우스, 2019 re-cover edition, original publication 2011. Publisher description establishes enduring readership; bestseller characterization also supported by the 내면소통 publisher description. No current ranking or combined sales total invented.
- Publisher catalog corroboration: https://www.influential.co.kr/books.

The four images come from each source's observed og:image URL and retain their retailer marks. No cover editing or synthetic replacements. `public/images/books/sources.json` records URLs and original-file hashes. Books are four representative works, not a claim that these are the author's entire bibliography or that all four are currently number-one bestsellers.

## UI behavior

Book links visibly respond to hover using a small image lift and perspective turn with a deeper shadow. Focus rings remain visible; content never depends on hover. Portraits and vision imagery zoom slightly on pointer hover. Below-fold content reveals once through IntersectionObserver; above-fold, static-preview and reduced-motion content remains visible. Existing persistent pause preference suppresses entrance/scroll decoration. No animated zero-to-total counters, unsolicited video autoplay or external YouTube iframe loads.

## Scope

/about, shared four-book shelf on /resources, shared dated channel statistics, updated homepage phrase and author credit. Previously researched AI and planned-space claims remain. Production unchanged.
