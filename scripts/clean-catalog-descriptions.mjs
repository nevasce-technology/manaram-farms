import fs from "node:fs";
import path from "node:path";

const catalogPath = path.resolve("src/data/catalog.ts");

function sanitizeProductDescription(description) {
  return description
    .replace(/\s*###\s+.+?\s+Archive:\s*https?:\/\/[^\s"]+/gi, "")
    .replace(/\s*Archive:\s*https?:\/\/[^\s"]+/gi, "")
    .replace(/\s+/g, " ")
    .trim();
}

const raw = fs.readFileSync(catalogPath, "utf8");
const before = (raw.match(/ Archive: https?:\/\//gi) ?? []).length;

const cleaned = raw.replace(
  /\s*###\s+.+?\s+Archive:\s*https?:\/\/[^\s"]+/gi,
  "",
);

fs.writeFileSync(catalogPath, cleaned);

const after = (cleaned.match(/ Archive: https?:\/\//gi) ?? []).length;
console.log(`Removed ${before - after} archive link blocks from catalog.ts`);

// Also normalize description fields that may still carry trailing archive fragments.
let descUpdates = 0;
const normalized = cleaned.replace(/description: "((?:\\.|[^"\\])*)"/g, (match, desc) => {
  const unescaped = desc.replace(/\\"/g, '"').replace(/\\\\/g, "\\");
  const next = sanitizeProductDescription(unescaped);
  if (next === unescaped) return match;
  descUpdates += 1;
  const escaped = next.replace(/\\/g, "\\\\").replace(/"/g, '\\"');
  return `description: "${escaped}"`;
});

if (descUpdates > 0) {
  fs.writeFileSync(catalogPath, normalized);
  console.log(`Normalized ${descUpdates} product descriptions`);
}

const remaining = (normalized.match(/ Archive: https?:\/\//gi) ?? []).length;
console.log(`Remaining archive links: ${remaining}`);
