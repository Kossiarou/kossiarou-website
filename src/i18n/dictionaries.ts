import type { Locale } from "./config";
import type { Dictionary } from "./dictionaries/fr";

export type { Dictionary };

const dictionaries: Record<Locale, () => Promise<Dictionary>> = {
  fr: () => import("./dictionaries/fr").then((m) => m.fr),
  en: () => import("./dictionaries/en").then((m) => m.en),
};

export function getDictionary(locale: Locale): Promise<Dictionary> {
  return dictionaries[locale]();
}
