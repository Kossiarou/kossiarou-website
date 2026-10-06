export const locales = ["fr", "en"] as const;

export type Locale = (typeof locales)[number];

export const defaultLocale: Locale = "fr";

export function hasLocale(value: string): value is Locale {
  return (locales as readonly string[]).includes(value);
}

// Remembers the language picked with the FR/EN toggle (read by proxy.ts).
export const LOCALE_COOKIE = "locale";
