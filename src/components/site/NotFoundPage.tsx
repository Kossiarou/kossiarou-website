import Link from "next/link";
import type { Locale } from "@/i18n/config";
import type { Dictionary } from "@/i18n/dictionaries";
import { Logo } from "./Logo";

export function NotFoundPage({ lang, dict }: { lang: Locale; dict: Dictionary["notFound"] }) {
  return (
    <div className="flex min-h-screen flex-col bg-cream">
      {/* Next ignores metadata for a not-found segment: React hoists this <title> into <head>
          and, being first, it is the one the browser tab shows. */}
      <title>{dict.metaTitle}</title>
      <header className="border-b border-border">
        <div className="mx-auto flex max-w-[1200px] items-center px-[clamp(16px,4vw,40px)] py-3">
          <Link href={`/${lang}`} className="flex-none">
            <Logo size="header" />
          </Link>
        </div>
      </header>

      <main className="flex flex-1 items-center">
        <div className="mx-auto grid w-full max-w-[1200px] grid-cols-[repeat(auto-fit,minmax(min(100%,380px),1fr))] items-center gap-10 px-10 py-20">
          <div className="flex flex-col gap-[22px]">
            <span className="font-mono text-[13px] tracking-[0.12em] text-[#555a69] uppercase">
              {dict.code}
            </span>
            <h1 className="max-w-[560px] text-[clamp(44px,6vw,72px)] leading-none font-bold tracking-[-0.035em]">
              {dict.title}
            </h1>
            <p className="max-w-[520px] text-[19px] leading-[1.5] text-ink-soft">{dict.text}</p>
            <div className="mt-1.5 flex flex-wrap gap-2.5">
              <Link
                href={`/${lang}`}
                className="rounded-xl bg-gold px-[22px] py-3.5 text-base font-bold text-ink hover:bg-gold-hover min-[400px]:whitespace-nowrap"
              >
                {dict.home}
              </Link>
              <Link
                href={`/${lang}#listes`}
                className="rounded-xl border border-border-soft bg-cream-soft px-[22px] py-[13px] text-base font-bold hover:bg-white min-[400px]:whitespace-nowrap"
              >
                {dict.waitlist}
              </Link>
            </div>
          </div>

          {/* Gold arch, echoing the hero illustration. */}
          <div aria-hidden="true" className="hidden justify-center md:flex">
            <div className="h-[250px] w-[500px] max-w-full rounded-t-[250px] bg-gold" />
          </div>
        </div>
      </main>
    </div>
  );
}
