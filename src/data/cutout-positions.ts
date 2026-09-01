/** Optical horizontal anchor per cutout PNG (derived from alpha mass center). */
export const CUTOUT_POSITIONS: Record<string, string> = {
  "/products/category-cutouts/Cat_Salt_Sugar_Seed.png": "49.7% bottom",
  "/products/category-cutouts/Cat_Sattu.png": "50.2% bottom",
  "/products/category-cutouts/Cat_dairy_churrpi.png": "52.3% bottom",
  "/products/category-cutouts/Cat_mana_ko_achar.png": "48.5% bottom",
  "/products/category-cutouts/Cat_masale.png": "50.2% bottom",
  "/products/category-cutouts/Cat_masale1.png": "49.9% bottom",
  "/products/category-cutouts/Cat_sai_sukuti.png": "50% bottom",
  "/products/category-cutouts/cat_dried_others.png": "47.9% bottom",
  "/products/category-cutouts/cat_flour.png": "46.2% bottom",
  "/products/category-cutouts/cat_grains_cereal.png": "47.1% bottom",
  "/products/category-cutouts/cat_tea_coffee.png": "50.8% bottom",
  "/products/category-cutouts/cat_titaura.png": "50% bottom",
  "/products/cutouts/mana-ko-milk/mana-ko-milk.png": "47.5% bottom",
  "/products/cutouts/mana-ko-ghee/mana-ko-ghee.png": "50.2% bottom",
  "/products/cutouts/mana-ko-dahi/mana-ko-dahi.png": "50.1% bottom",
  "/products/cutouts/sahi-sukuti-the-original/sukuti-original.png": "54.5% bottom",
};

export function cutoutObjectPosition(
  src?: string | null,
  align: "floor" | "center" = "floor",
): string {
  if (!src) return align === "center" ? "50% center" : "50% bottom";
  const base = CUTOUT_POSITIONS[src] ?? "50% bottom";
  const x = base.split(/\s+/)[0] ?? "50%";
  return align === "center" ? `${x} center` : base;
}
