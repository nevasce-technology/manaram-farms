from pathlib import Path
from rembg import remove

root = Path(r"d:\Projects\manaram-farms\public\cutouts")
for path in sorted(root.glob("*.png")):
    data = path.read_bytes()
    out = remove(data)
    path.write_bytes(out)
    print("rembg", path.name, path.stat().st_size)
