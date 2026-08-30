"""Remove backgrounds from Manaram product gallery images -> transparent PNGs."""
from __future__ import annotations

import sys
from pathlib import Path

from rembg import new_session, remove
from PIL import Image

ROOT = Path(__file__).resolve().parents[1]
GALLERY = ROOT / "public" / "products" / "gallery"
OUT = ROOT / "public" / "products" / "cutouts"
SKIP_HINTS = ("benefit", "ingredient", "benefits", "ingredients")


def should_process(path: Path) -> bool:
    name = path.name.lower()
    if path.suffix.lower() not in {".jpg", ".jpeg", ".png", ".webp"}:
        return False
    if any(h in name for h in SKIP_HINTS):
        return False
    return True


def main() -> int:
    OUT.mkdir(parents=True, exist_ok=True)
    session = new_session("u2net")
    files = sorted(p for p in GALLERY.rglob("*") if p.is_file() and should_process(p))
    print(f"Processing {len(files)} images -> {OUT}")

    ok = 0
    for i, src in enumerate(files, 1):
        rel = src.relative_to(GALLERY)
        dest = OUT / rel.with_suffix(".png")
        dest.parent.mkdir(parents=True, exist_ok=True)
        if dest.exists() and dest.stat().st_mtime >= src.stat().st_mtime:
            print(f"[{i}/{len(files)}] skip {rel}")
            ok += 1
            continue
        try:
            with Image.open(src) as im:
                im = im.convert("RGBA")
                out = remove(im, session=session)
            out.save(dest, "PNG", optimize=True)
            ok += 1
            print(f"[{i}/{len(files)}] ok   {rel} -> {dest.relative_to(OUT)}")
        except Exception as exc:  # noqa: BLE001
            print(f"[{i}/{len(files)}] FAIL {rel}: {exc}", file=sys.stderr)

    print(f"Done: {ok}/{len(files)}")
    return 0 if ok else 1


if __name__ == "__main__":
    raise SystemExit(main())
