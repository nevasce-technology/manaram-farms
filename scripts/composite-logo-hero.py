from math import pi, sin
from PIL import Image, ImageChops, ImageDraw, ImageFilter

hero = Image.open(r"d:\Projects\manaram-farms\public\hero.jpg").convert("RGBA")
logo = Image.open(r"d:\Projects\manaram-farms\public\mana-ko.png").convert("RGBA")

# Key residual near-black background
pixels = logo.load()
for y in range(logo.height):
    for x in range(logo.width):
        r, g, b, a = pixels[x, y]
        if r < 28 and g < 28 and b < 28:
            pixels[x, y] = (r, g, b, 0)

W, H = hero.size
lw = int(W * 0.44)
lh = int(logo.height * (lw / logo.width))
logo = logo.resize((lw, lh), Image.Resampling.LANCZOS)

# Soft drop shadow behind logo
shadow_layer = Image.new("RGBA", (lw + 48, lh + 48), (0, 0, 0, 0))
shadow = logo.copy()
sp = shadow.load()
for y in range(shadow.height):
    for x in range(shadow.width):
        r, g, b, a = sp[x, y]
        if a > 10:
            sp[x, y] = (8, 24, 40, int(a * 0.32))
shadow_layer.paste(shadow, (14, 20), shadow)
shadow_layer = shadow_layer.filter(ImageFilter.GaussianBlur(20))

cx = W // 2
cy = int(H * 0.40)
lx = cx - lw // 2
ly = cy - lh // 2

# Hill occlusion: keep upper logo, hide lower portion behind a curved crest
mask = Image.new("L", (lw, lh), 0)
draw = ImageDraw.Draw(mask)
pts = [(0, 0), (lw, 0)]
for i in range(lw, -1, -1):
    t = i / max(lw - 1, 1)
    crest = int(lh * (0.58 + 0.07 * sin(t * pi)))
    pts.append((i, crest))
draw.polygon(pts, fill=255)
mask = mask.filter(ImageFilter.GaussianBlur(7))

logo_alpha = logo.split()[-1]
logo_cut = logo.copy()
logo_cut.putalpha(ImageChops.multiply(logo_alpha, mask))

out = hero.copy()
out.alpha_composite(shadow_layer, (lx - 10, ly - 6))
out.alpha_composite(logo_cut, (lx, ly))

# Contact shadow along the crest on the grass
band = Image.new("RGBA", (W, H), (0, 0, 0, 0))
bd = ImageDraw.Draw(band)
crest_y = ly + int(lh * 0.58)
bd.ellipse(
    [cx - int(lw * 0.40), crest_y - 6, cx + int(lw * 0.40), crest_y + 26],
    fill=(4, 40, 63, 50),
)
band = band.filter(ImageFilter.GaussianBlur(16))
out = Image.alpha_composite(out, band)

rgb = out.convert("RGB")
rgb.save(r"d:\Projects\manaram-farms\public\hero.png", optimize=True)
rgb.save(r"d:\Projects\manaram-farms\public\hero.jpg", quality=93, optimize=True)
print("ok", rgb.size)
