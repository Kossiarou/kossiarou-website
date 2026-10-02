"use client";

import { useState } from "react";

/**
 * Mirrors the design's lang pill: toggles active/inactive styling only.
 * The source design doesn't define English copy, so this doesn't translate
 * content yet — wire up next-intl/i18n routing once EN copy exists.
 */
export function LanguageToggle() {
  const [lang, setLang] = useState<"fr" | "en">("fr");

  const pillClass = (active: boolean) =>
    `rounded-full px-2.5 py-1 text-xs font-bold cursor-pointer ${
      active ? "bg-ink text-cream" : "bg-transparent text-ink-soft"
    }`;

  return (
    <div className="flex gap-0.5 rounded-full border border-border-soft bg-cream-soft p-[3px]">
      <button type="button" className={pillClass(lang === "fr")} onClick={() => setLang("fr")}>
        FR
      </button>
      <button type="button" className={pillClass(lang === "en")} onClick={() => setLang("en")}>
        EN
      </button>
    </div>
  );
}
