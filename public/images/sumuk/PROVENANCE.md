# 수묵 paintings on this site — provenance

Every raster in this folder that starts with `synthetic-` was **generated**, not painted. They are
placeholders so the layout could be built and reviewed; each is to be swapped for artwork the
institute owns or 교수님 approves. The seven `glyph-*.png` files are the app's own 수묵 glyph set
(inzeum-platform-app, Sumuk 3.0.0) and are not synthetic.

| File | Size | Made | Used on |
|---|---|---|---|
| `synthetic-mountain-on-ink.png` | 3200×1280 | gpt-image-2 · medium · 2026-09-07 | `/` hero (sticky mountain) |
| `synthetic-mountain-alt-on-ink.png` | 2560×1024 | gpt-image-2 · medium · 2026-09-07 | unused alternate |
| `synthetic-pine-on-hanji.png` | 2048×1024 | gpt-image-2 · medium · 2026-09-07 | `/programs` |
| `synthetic-pine-on-ink.png` | 2048×1024 | same painting, ink-ground carrier | unused |

`public/og.jpg` (1200×630) is composed from the synthetic mountain and the wordmark.

Each PNG carries its generation prompt in a `prompt` tEXt chunk and the marker
"SYNTHETIC PLACEHOLDER". Read it with:

```
uv run --with pillow python -c "from PIL import Image; print(Image.open('public/images/sumuk/synthetic-mountain-on-ink.png').info['prompt'])"
```

## Encoding

Same as the app's SumukGlyph: ink density lives in the **alpha** channel; RGB is a flat carrier
(`#EEE9DE` paper for the ink ground, `#121210` ink for the 한지 ground). One painting therefore
serves both grounds and can be re-tinted from a token. `scripts/make-painting.py` produces it.

## How to swap in real artwork

1. Get a black-ink-on-white (or 한지) painting as a flat scan or photo, ≥ 3200 px wide for the
   hero (a 1440 px viewport at 2× is 2880 device pixels), any aspect wider than 2:1.
2. Run
   `uv run --with pillow python scripts/make-painting.py SCAN.png mountain --max-width 3200 --prompt "작가·연도·소장"`
   → `mountain-on-ink.png` (and `-on-hanji.png`).
3. Point `app/page.tsx` at the new file (drop the `synthetic-` prefix), delete the synthetic file,
   update this table, recompose `public/og.jpg`.
4. The seal: the institute's real 낙관, if one exists, is the only vermilion mark the brand
   guide allows on the painting. Do not generate one.
