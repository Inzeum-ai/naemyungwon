#!/usr/bin/env python3
"""Turn a black-ink-on-white-paper painting into Sumuk alpha-mask assets.

Same encoding the app's glyph set uses (docs/design/sumuk/components/sumuk-glyph.md):
ink density lives in the alpha channel, RGB is a flat carrier colour, so one painting
serves both grounds and can be re-tinted from a token.

  uv run --with pillow python scripts/make-painting.py SRC.png NAME \
      [--max-width 2400] [--floor 0.08] [--prompt "…"] [--only ink|hanji]

Writes public/images/sumuk/NAME-on-ink.png   (RGB = 한지빛 #EEE9DE, for the ink ground)
       public/images/sumuk/NAME-on-hanji.png (RGB = 먹     #121210, for the hanji ground)

--floor  luminance threshold below which the paper texture is treated as blank (0–1).
--prompt embedded as a PNG tEXt chunk ("prompt") so every shipped raster carries its
         provenance; pass the exact generation prompt or the asset's origin.
"""
import argparse
import os
import sys

from PIL import Image, ImageOps
from PIL.PngImagePlugin import PngInfo

PAPER = (0xEE, 0xE9, 0xDE)
INK = (0x12, 0x12, 0x10)
OUT_DIR = os.path.join(os.path.dirname(os.path.abspath(__file__)), '..', 'public', 'images', 'sumuk')


def to_mask(src: Image.Image, floor: float) -> Image.Image:
    """Grayscale luminance → alpha, with the paper floor removed and the range re-stretched."""
    g = ImageOps.grayscale(src)
    lo = int(255 * floor)
    # alpha = 1 - lum, then everything lighter than the floor becomes fully transparent
    inv = ImageOps.invert(g)
    lut = [0 if v <= lo else min(255, int((v - lo) * 255 / (255 - lo))) for v in range(256)]
    return inv.point(lut)


def write(alpha: Image.Image, rgb, path: str, prompt: str | None):
    out = Image.new('RGBA', alpha.size, rgb + (0,))
    out.putalpha(alpha)
    meta = PngInfo()
    if prompt:
        meta.add_text('prompt', prompt)
    meta.add_text('encoding', 'sumuk alpha mask: density in alpha, RGB flat carrier')
    out.save(path, 'PNG', optimize=True, pnginfo=meta)
    return os.path.getsize(path)


def main():
    ap = argparse.ArgumentParser()
    ap.add_argument('src')
    ap.add_argument('name')
    ap.add_argument('--max-width', type=int, default=2400)
    ap.add_argument('--floor', type=float, default=0.08)
    ap.add_argument('--prompt', default=None)
    ap.add_argument('--only', choices=['ink', 'hanji'], default=None)
    a = ap.parse_args()

    im = Image.open(a.src).convert('RGB')
    if im.width > a.max_width:
        h = round(im.height * a.max_width / im.width)
        im = im.resize((a.max_width, h), Image.LANCZOS)
    alpha = to_mask(im, a.floor)

    os.makedirs(OUT_DIR, exist_ok=True)
    if a.only in (None, 'ink'):
        p = os.path.join(OUT_DIR, f'{a.name}-on-ink.png')
        print(f'{p}  {write(alpha, PAPER, p, a.prompt) // 1024} KB  {alpha.size}')
    if a.only in (None, 'hanji'):
        p = os.path.join(OUT_DIR, f'{a.name}-on-hanji.png')
        print(f'{p}  {write(alpha, INK, p, a.prompt) // 1024} KB  {alpha.size}')


if __name__ == '__main__':
    sys.exit(main())
