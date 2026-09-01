export type NutritionRow = {
  nutrient: string;
  amount: string;
  dailyValue: string | null;
};

export type ProductHighlight = {
  title: string;
  body: string;
};

export type ParsedProductContent = {
  intro: string;
  availableSize: string | null;
  ingredients: string[];
  nutrition: NutritionRow[];
  highlights: ProductHighlight[];
};

const NUTRIENT_NAMES = [
  "Total Fat",
  "Total Carbohydrate",
  "Sugar",
  "Protein",
  "Sodium",
  "Maximum Moisture",
  "Minimum Fat",
] as const;

function cleanText(value: string) {
  return value.replace(/\s+/g, " ").trim();
}

/** Strip category-archive links and other scrape artifacts from live-site copy. */
export function sanitizeProductDescription(description: string) {
  return cleanText(
    description
      .replace(/\s*###\s+.+?\s+Archive:\s*https?:\/\/[^\s"]+/gi, "")
      .replace(/\s*Archive:\s*https?:\/\/[^\s"]+/gi, ""),
  );
}

function splitIngredients(raw: string) {
  return raw
    .split(/[,;]/)
    .map((part) => cleanText(part))
    .filter(Boolean);
}

function parseNutrition(section: string): NutritionRow[] {
  const body = section
    .replace(/^Nutrient Amount % Daily Value\*?\s*/i, "")
    .replace(/^Nutrient Amount % Daily Value\s*/i, "")
    .trim();

  if (!body) return [];

  const rows: NutritionRow[] = [];
  let remainder = body;

  for (const nutrient of NUTRIENT_NAMES) {
    const pattern = new RegExp(
      `${nutrient.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")}\\s+([\\d.]+\\s*(?:g|mg|%)?|-)\\s+([\\d.]+%|-)?`,
      "i",
    );
    const match = remainder.match(pattern);
    if (!match || match.index === undefined) continue;

    rows.push({
      nutrient,
      amount: cleanText(match[1]),
      dailyValue: match[2] && match[2] !== "-" ? cleanText(match[2]) : null,
    });
    remainder = remainder.slice(match.index + match[0].length);
  }

  return rows;
}

function highlightTitlesOverlap(a: string, b: string) {
  const left = a.toLowerCase().replace(/-/g, " ");
  const right = b.toLowerCase().replace(/-/g, " ");

  if (left.includes("jaggery") && right.includes("jaggery")) return true;

  const leftWords = left.split(/\s+/).filter((word) => word.length > 3);
  const rightWords = right.split(/\s+/).filter((word) => word.length > 3);
  const shared = leftWords.filter((word) => rightWords.includes(word));
  return shared.length >= 2;
}

function dedupeHighlights(items: ProductHighlight[]): ProductHighlight[] {
  const kept: ProductHighlight[] = [];

  for (const item of items) {
    const overlaps = kept.some((existing) => highlightTitlesOverlap(item.title, existing.title));
    if (!overlaps) kept.push(item);
  }

  return kept;
}

export function formatNutritionAmount(amount: string) {
  const value = cleanText(amount);
  if (!value || value === "-") return "Not listed";
  return value;
}

export function formatNutritionDailyValue(dailyValue: string | null) {
  if (!dailyValue || dailyValue === "-") return null;
  return dailyValue;
}

function parseHighlights(section: string): ProductHighlight[] {
  const sentences = section
    .split(/(?<=[.!?])\s+/)
    .map(cleanText)
    .filter(Boolean);

  const highlights: ProductHighlight[] = [];

  for (const sentence of sentences) {
    const dashSplit = sentence.match(/^(.+?)\s-\s(.+)$/);
    if (dashSplit) {
      highlights.push({
        title: cleanText(dashSplit[1]),
        body: cleanText(dashSplit[2].replace(/[.!?]$/, "")),
      });
      continue;
    }

    if (sentence.length > 12) {
      highlights.push({ title: sentence.replace(/[.!?]$/, ""), body: "" });
    }
  }

  return dedupeHighlights(highlights.slice(0, 6));
}

export function parseProductDescription(description: string): ParsedProductContent {
  const normalized = sanitizeProductDescription(description);
  const sizeMatch = normalized.match(/Available Size:\s*/i);
  const ingredientsMatch = normalized.match(/Ingredients\s*:\s*/i);
  const nutritionMatch = normalized.match(/Nutritional Facts\s*:?\s*/i);
  const whyMatch = normalized.match(/Why Choose[^?]*\?\s*/i);

  const sizeIndex = sizeMatch?.index ?? normalized.length;
  const ingredientsIndex = ingredientsMatch?.index ?? normalized.length;
  const nutritionIndex = nutritionMatch?.index ?? normalized.length;
  const whyIndex = whyMatch?.index ?? normalized.length;

  const intro = cleanText(normalized.slice(0, Math.min(sizeIndex, ingredientsIndex, nutritionIndex, whyIndex)));

  let availableSize: string | null = null;
  if (sizeMatch && sizeMatch.index !== undefined) {
    const end = Math.min(ingredientsIndex, nutritionIndex, whyIndex);
    availableSize = cleanText(normalized.slice(sizeMatch.index + sizeMatch[0].length, end));
  }

  let ingredients: string[] = [];
  if (ingredientsMatch && ingredientsMatch.index !== undefined) {
    const end = Math.min(nutritionIndex, whyIndex);
    const raw = normalized.slice(ingredientsMatch.index + ingredientsMatch[0].length, end);
    ingredients = splitIngredients(raw);
  }

  let nutrition: NutritionRow[] = [];
  if (nutritionMatch && nutritionMatch.index !== undefined) {
    const end = whyIndex;
    const raw = normalized.slice(nutritionMatch.index, end);
    nutrition = parseNutrition(raw);
  }

  let highlights: ProductHighlight[] = [];
  if (whyMatch && whyMatch.index !== undefined) {
    const raw = normalized.slice(whyMatch.index + whyMatch[0].length);
    highlights = parseHighlights(raw);
  }

  return { intro, availableSize, ingredients, nutrition, highlights };
}
