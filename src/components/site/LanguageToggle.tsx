"use client";

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { LOCALE_COOKIE, locales, type Locale } from "@/i18n/config";

/**
 * FR/EN switch: links to the same page in the other language and remembers
 * the choice in a cookie so that a later visit to "/" opens in that language.
 */
export function LanguageToggle({ lang, label }: { lang: Locale; label: string }) {
  const pathname = usePathname();
  const router = useRouter();

  const hrefFor = (target: Locale) => {
    const segments = pathname.split("/");
    segments[1] = target;
    return segments.join("/");
  };

  const pillClass = (active: boolean) =>
    `relative rounded-full px-2 py-1 text-xs font-bold cursor-pointer before:absolute before:inset-x-0 before:-inset-y-2 sm:px-2.5 ${
      active ? "bg-ink text-cream" : "bg-transparent text-ink-soft"
    }`;

  return (
    <nav
      aria-label={label}
      className="flex gap-0.5 rounded-full border border-border-soft bg-cream-soft p-[3px]"
    >
      {locales.map((target) => (
        <Link
          key={target}
          href={hrefFor(target)}
          lang={target}
          hrefLang={target}
          aria-current={target === lang ? "true" : undefined}
          className={pillClass(target === lang)}
          onClick={(e) => {
            e.preventDefault();
            document.cookie = `${LOCALE_COOKIE}=${target}; path=/; max-age=31536000; samesite=lax`;
            // Keep the visitor on the same section after switching language.
            router.push(`${hrefFor(target)}${window.location.hash}`);
          }}
        >
          {target.toUpperCase()}
        </Link>
      ))}
    </nav>
  );
}
