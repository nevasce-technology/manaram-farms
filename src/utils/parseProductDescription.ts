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
