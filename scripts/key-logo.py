"""Key the flat black background out of the Mana Ko logo export.

The supplied brand file is a JPG flattened onto black. Alpha is derived from the
per-pixel max channel, which keeps the navy artwork and the inner white disc
fully opaque while dropping the surround to zero.
"""

import sys
from pathlib import Path

from PIL import Image

SRC = Path(sys.argv[1])
DST = Path(sys.argv[2])
GAIN = 2.4

img = Image.open(SRC).convert("RGB")
px = img.load()
w, h = img.size

out = Image.new("RGBA", (w, h))
op = out.load()

for y in range(h):
    for x in range(w):
        r, g, b = px[x, y]
        alpha = min(255, int(max(r, g, b) * GAIN))
        op[x, y] = (r, g, b, alpha)

# Trim the transparent margin so the mark can be sized by its own bounds.
bbox = out.getbbox()
if bbox:
    out = out.crop(bbox)

DST.parent.mkdir(parents=True, exist_ok=True)
out.save(DST, "PNG", optimize=True)
print(f"wrote {DST} {out.size[0]}x{out.size[1]}")
