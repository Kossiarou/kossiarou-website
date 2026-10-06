"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import type { Locale } from "@/i18n/config";
import type { Dictionary } from "@/i18n/dictionaries";
import { Logo } from "./Logo";
import { LanguageToggle } from "./LanguageToggle";

export function Header({ lang, dict }: { lang: Locale; dict: Dictionary["header"] }) {
  const [menuOpen, setMenuOpen] = useState(false);

  // Below 800px the navigation is replaced by the burger menu (the design says 640px, but
  // between 640 and ~800px the full navigation wraps onto two lines); close the menu when
  // the screen becomes wide enough for the full navigation.
  useEffect(() => {
    const query = window.matchMedia("(min-width: 800px)");
    const onChange = (e: MediaQueryListEvent) => {
      if (e.matches) setMenuOpen(false);
    };
    query.addEventListener("change", onChange);
    return () => query.removeEventListener("change", onChange);
  }, []);

  const bar = "block h-0.5 w-[18px] rounded-sm bg-ink transition-[transform,opacity] duration-200";

  return (
    <header className="sticky top-0 z-20 border-b border-border bg-cream/95 backdrop-blur-sm">
      <div className="mx-auto flex max-w-[1200px] items-center justify-between gap-[clamp(10px,2vw,24px)] px-[clamp(16px,4vw,40px)] py-3">
        <Link href="#top" className="relative flex-none before:absolute before:inset-x-0 before:-inset-y-2">
          <Logo size="header" />
        </Link>
        <div className="flex items-center gap-[clamp(6px,1.6vw,22px)]">
          <nav className="hidden flex-wrap gap-[clamp(12px,1.8vw,22px)] text-[15px] font-semibold min-[800px]:flex">
            {dict.nav.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="relative text-ink-soft before:absolute before:inset-x-0 before:-inset-y-2.5 hover:text-gold-hover"
              >
                {link.label}
              </a>
            ))}
          </nav>
          <LanguageToggle lang={lang} label={dict.languageLabel} />
          <a
            href="#inscription"
            className="flex-none whitespace-nowrap rounded-xl bg-gold px-[clamp(10px,2.6vw,18px)] py-2.5 text-[clamp(14px,3.6vw,15px)] font-bold text-ink hover:bg-gold-hover max-[359px]:hidden"
          >
            {dict.signup}
          </a>
          <button
            type="button"
            aria-label={dict.menu}
            aria-expanded={menuOpen}
            aria-controls="mobile-menu"
            onClick={() => setMenuOpen((open) => !open)}
            className="flex h-11 w-[42px] flex-none cursor-pointer flex-col items-center justify-center gap-1 rounded-xl border border-border-soft bg-cream-soft p-0 min-[800px]:hidden"
          >
            <span className={`${bar} ${menuOpen ? "translate-y-1.5 rotate-45" : ""}`} />
            <span className={`${bar} ${menuOpen ? "opacity-0" : ""}`} />
            <span className={`${bar} ${menuOpen ? "-translate-y-1.5 -rotate-45" : ""}`} />
          </button>
        </div>
      </div>
      {menuOpen && (
        <nav
          id="mobile-menu"
          className="flex flex-col border-t border-border px-[clamp(16px,4vw,40px)] pt-1 pb-3 text-[17px] font-semibold min-[800px]:hidden"
        >
          {dict.nav.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className="border-b border-[#ebe5d9] py-3.5 hover:text-gold-hover"
            >
              {link.label}
            </a>
          ))}
          {/* Under 360px the header button is hidden to keep the burger on screen. */}
          <a
            href="#inscription"
            onClick={() => setMenuOpen(false)}
            className="mt-3 hidden rounded-xl bg-gold px-4 py-3 text-center text-base font-bold text-ink hover:bg-gold-hover max-[359px]:block"
          >
            {dict.signup}
          </a>
        </nav>
      )}
    </header>
  );
}
