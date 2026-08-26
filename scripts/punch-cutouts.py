"""Knock checkerboard / white studio boxes out of cutouts via edge flood-fill."""
from collections import deque
from pathlib import Path

import numpy as np
from PIL import Image

ROOT = Path(r"d:\Projects\manaram-farms\public\cutouts")


def tile_size(arr: np.ndarray) -> int:
    row = arr[4, :, :3].astype(np.float32)
    for size in (8, 10, 12, 16, 20, 24, 32):
        a = row[size]
        b = row[size * 2]
        c = row[0]
        if np.linalg.norm(a - c) > 18 and np.linalg.norm(a - b) > 18:
            return size
    return 16


def expected_checker(arr: np.ndarray, x: int, y: int, tile: int) -> np.ndarray:
    c0 = arr[2, 2, :3].astype(np.float32)
    c1 = arr[2, 2 + tile, :3].astype(np.float32)
    return c0 if ((x // tile) + (y // tile)) % 2 == 0 else c1


def is_backdrop(arr: np.ndarray, x: int, y: int, tile: int) -> bool:
    pix = arr[y, x, :3].astype(np.float32)
    exp = expected_checker(arr, x, y, tile)
    if np.linalg.norm(pix - exp) < 42:
        return True
    # Solid white / near-white studio box
    if pix.min() > 232 and (pix.max() - pix.min()) < 18:
        return True
    # Light gray studio
    if pix.min() > 200 and (pix.max() - pix.min()) < 14:
        return True
    return False


def punch(path: Path) -> None:
    im = Image.open(path).convert("RGBA")
    arr = np.array(im)
    h, w = arr.shape[:2]
    tile = tile_size(arr)
    seen = np.zeros((h, w), dtype=bool)
    q: deque[tuple[int, int]] = deque()

    for x in range(w):
        q.append((x, 0))
        q.append((x, h - 1))
    for y in range(h):
        q.append((0, y))
        q.append((w - 1, y))

    while q:
        x, y = q.popleft()
        if x < 0 or y < 0 or x >= w or y >= h or seen[y, x]:
            continue
        seen[y, x] = True
        if not is_backdrop(arr, x, y, tile):
            continue
        arr[y, x, 3] = 0
        q.extend(((x + 1, y), (x - 1, y), (x, y + 1), (x, y - 1)))

    # Soften halo: any low-contrast near-white with a transparent neighbor
    alpha = arr[:, :, 3]
    rgb = arr[:, :, :3].astype(np.float32)
    for _ in range(2):
        trans = alpha == 0
        neigh = (
            np.pad(trans, 1)[1:-1, 2:]
            | np.pad(trans, 1)[1:-1, :-2]
            | np.pad(trans, 1)[2:, 1:-1]
            | np.pad(trans, 1)[:-2, 1:-1]
        )
        gray = rgb.max(axis=2) - rgb.min(axis=2) < 16
        bright = rgb.mean(axis=2) > 210
        knock = neigh & gray & bright & (alpha > 0)
        arr[knock, 3] = 0
        alpha = arr[:, :, 3]

    Image.fromarray(arr).save(path)
    print(path.name, "tile", tile, "transparent", int((arr[:, :, 3] == 0).mean() * 100), "%")


def main() -> None:
    for p in sorted(ROOT.glob("*.png")):
        punch(p)


if __name__ == "__main__":
    main()
