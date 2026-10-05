import type { Dictionary } from "@/i18n/dictionaries";
import { Logo } from "./Logo";

// Language-neutral links added under a column, keyed by column position.
const EXTRA_LINKS: Record<number, { href: string; label: string }[]> = {
  1: [{ href: "mailto:contact@kossiarou.com", label: "contact@kossiarou.com" }],
};

export function Footer({ dict }: { dict: Dictionary["footer"] }) {
  return (
    <footer>
      <div className="mx-auto flex max-w-[1200px] flex-col gap-7 px-10 pt-[52px] pb-11">
        <div className="grid grid-cols-[repeat(auto-fit,minmax(180px,1fr))] gap-7">
          <div className="col-span-2 flex min-w-0 flex-col gap-3">
            <Logo size="lg" />
            <p className="text-sm leading-[1.55] text-ink-soft">
              {dict.tagline}
              <br />
              {dict.taglineOwner}
            </p>
          </div>
          {dict.columns.map((col, i) => (
            <div key={col.title} className="flex flex-col gap-2.5 text-sm">
              <span className="text-xs font-bold tracking-[0.08em]">{col.title}</span>
              {col.links.map((link) => (
                <a key={link.label} href={link.href} className="underline">
                  {link.label}
                </a>
              ))}
              {EXTRA_LINKS[i]?.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  className="font-mono text-[13px] text-ink-soft underline"
                >
                  {item.label}
                </a>
              ))}
            </div>
          ))}
        </div>
        <p className="text-xs leading-[1.6] text-ink-soft">{dict.photoCredit}</p>
      </div>
    </footer>
  );
}
