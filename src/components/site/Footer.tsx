import type { Dictionary } from "@/i18n/dictionaries";
import { CONTACT } from "@/lib/site";
import { Logo } from "./Logo";
import { CookieSettingsButton } from "./CookieSettingsButton";

// Language-neutral contact links, added under the column flagged `showContact`.
const CONTACT_LINKS = [
  { href: `mailto:${CONTACT.email}`, label: CONTACT.email, track: undefined },
  { href: CONTACT.whatsappUrl, label: CONTACT.whatsappDisplay, track: "click_whatsapp" },
];

// `basePath` is "" on the home page and "/fr" on the other pages, so that "#anchor" links
// lead back to the home page.
export function Footer({ dict, basePath = "" }: { dict: Dictionary["footer"]; basePath?: string }) {
  const resolve = (href: string) => (href.startsWith("#") ? `${basePath}${href}` : href);

  return (
    <footer>
      <div className="mx-auto flex max-w-[1200px] flex-col gap-7 px-10 pt-[52px] pb-11">
        <div className="grid grid-cols-2 gap-7 md:grid-cols-[repeat(auto-fit,minmax(180px,1fr))]">
          <div className="col-span-2 flex min-w-0 flex-col gap-3">
            <Logo size="lg" />
            <p className="text-sm leading-[1.55] text-ink-soft">
              {dict.tagline}
            </p>
          </div>
          {dict.columns.map((col) => (
            <div key={col.title} className="flex flex-col gap-2.5 text-sm">
              <span className="text-xs font-bold tracking-[0.08em]">{col.title}</span>
              {col.links.map((link) => (
                <a
                  key={link.label}
                  href={resolve(link.href)}
                  className="relative [overflow-wrap:anywhere] underline before:absolute before:inset-x-0 before:-inset-y-[5px]"
                >
                  {link.label}
                </a>
              ))}
              {col.showContact &&
                CONTACT_LINKS.map((item) => (
                  <a
                    key={item.href}
                    href={item.href}
                    data-track={item.track}
                    className="relative font-mono text-[13px] text-ink-soft underline break-all before:absolute before:inset-x-0 before:-inset-y-[5px]"
                  >
                    {item.label}
                  </a>
                ))}
            </div>
          ))}
        </div>
        <div className="flex flex-wrap items-center justify-between gap-3">
          <p className="text-xs leading-[1.6] text-ink-soft">{dict.legal}</p>
          <CookieSettingsButton label={dict.cookieSettings} />
        </div>
      </div>
    </footer>
  );
}
