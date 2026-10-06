"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import type { Locale } from "@/i18n/config";
import type { Dictionary } from "@/i18n/dictionaries";
import { Logo } from "./Logo";
import { LanguageToggle } from "./LanguageToggle";

export function Header({ lang, dict }: { lang: Locale; dict: Dictionary["header"] }) {
  const [menuOpen, setMenuOpen] = useState(false);

  // Below 640px the navigation is replaced by the burger menu; close it when the
  // screen becomes wide enough for the full navigation.
  useEffect(() => {
    const query = window.matchMedia("(min-width: 640px)");
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
        <Link href="#top" className="flex-none">
          <Logo size="header" />
        </Link>
        <div className="flex items-center gap-[clamp(6px,1.6vw,22px)]">
          <nav className="hidden flex-wrap gap-[22px] text-[15px] font-semibold sm:flex">
            {dict.nav.map((link) => (
              <a key={link.href} href={link.href} className="text-ink-soft hover:text-gold-hover">
                {link.label}
              </a>
            ))}
          </nav>
          <LanguageToggle lang={lang} label={dict.languageLabel} />
          <a
            href="#inscription"
            className="flex-none whitespace-nowrap rounded-xl bg-gold px-[clamp(10px,2.6vw,18px)] py-2.5 text-[clamp(14px,3.6vw,15px)] font-bold text-ink hover:bg-gold-hover"
          >
            {dict.signup}
          </a>
          <button
            type="button"
            aria-label={dict.menu}
            aria-expanded={menuOpen}
            aria-controls="mobile-menu"
            onClick={() => setMenuOpen((open) => !open)}
            className="flex h-11 w-[42px] flex-none cursor-pointer flex-col items-center justify-center gap-1 rounded-xl border border-border-soft bg-cream-soft p-0 sm:hidden"
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
          className="flex flex-col border-t border-border px-[clamp(16px,4vw,40px)] pt-1 pb-3 text-[17px] font-semibold sm:hidden"
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
        </nav>
      )}
    </header>
  );
}
