import Link from "next/link";
import { Logo } from "./Logo";
import { LanguageToggle } from "./LanguageToggle";

const NAV_LINKS = [
  { href: "#histoires", label: "Histoires" },
  { href: "#app", label: "L’app" },
  { href: "#tarifs", label: "Tarifs" },
  { href: "#listes", label: "Listes d’attente" },
  { href: "#faq", label: "FAQ" },
];

export function Header() {
  return (
    <header className="sticky top-0 z-20 border-b border-border bg-cream/95 backdrop-blur-sm">
      <div className="mx-auto flex max-w-[1200px] flex-wrap items-center justify-between gap-6 px-10 py-3">
        <Link href="#top">
          <Logo />
        </Link>
        <div className="flex flex-wrap items-center gap-5">
          <nav className="flex flex-wrap gap-5 text-[15px] font-semibold">
            {NAV_LINKS.map((link) => (
              <a key={link.href} href={link.href} className="text-ink-soft hover:text-gold-hover">
                {link.label}
              </a>
            ))}
          </nav>
          <LanguageToggle />
          <a
            href="#inscription"
            className="whitespace-nowrap rounded-xl bg-gold px-[18px] py-2.5 text-[15px] font-bold text-ink hover:bg-gold-hover"
          >
            S’inscrire
          </a>
        </div>
      </div>
    </header>
  );
}
