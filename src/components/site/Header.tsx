import Link from "next/link";
import type { Locale } from "@/i18n/config";
import type { Dictionary } from "@/i18n/dictionaries";
import { Logo } from "./Logo";
import { LanguageToggle } from "./LanguageToggle";

export function Header({ lang, dict }: { lang: Locale; dict: Dictionary["header"] }) {
  return (
    <header className="sticky top-0 z-20 border-b border-border bg-cream/95 backdrop-blur-sm">
      <div className="mx-auto flex max-w-[1200px] flex-wrap items-center justify-between gap-6 px-10 py-3">
        <Link href="#top">
          <Logo />
        </Link>
        <div className="flex flex-wrap items-center gap-5">
          <nav className="flex flex-wrap gap-5 text-[15px] font-semibold">
            {dict.nav.map((link) => (
              <a key={link.href} href={link.href} className="text-ink-soft hover:text-gold-hover">
                {link.label}
              </a>
            ))}
          </nav>
          <LanguageToggle lang={lang} label={dict.languageLabel} />
          <a
            href="#inscription"
            className="whitespace-nowrap rounded-xl bg-gold px-[18px] py-2.5 text-[15px] font-bold text-ink hover:bg-gold-hover"
          >
            {dict.signup}
          </a>
        </div>
      </div>
    </header>
  );
}
