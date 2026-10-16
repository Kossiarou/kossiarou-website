import Link from "next/link";
import type { Dictionary } from "@/i18n/dictionaries";

// Each card leads to the landing page of its destination (French site); the English site
// has no such pages, so its cards carry no link (`href` is empty).
export function Destinations({ dict }: { dict: Dictionary["destinations"] }) {
  return (
    <section id="destinations" aria-labelledby="destinations-title" className="border-b border-border">
      <div className="mx-auto flex max-w-[1200px] flex-col gap-[18px] px-10 py-[72px]">
        <span className="font-mono text-[13px] tracking-[0.12em] text-[#555a69] uppercase">
          {dict.eyebrow}
        </span>
        <h2
          id="destinations-title"
          className="max-w-[760px] text-[clamp(34px,4.5vw,48px)] leading-[1] tracking-[-0.03em]"
        >
          {dict.title}
        </h2>
        <ul className="mt-4 grid grid-cols-[repeat(auto-fit,minmax(min(100%,250px),1fr))] gap-[18px]">
          {dict.items.map((item) => (
            <li
              key={item.code}
              className="flex min-w-0 flex-col gap-2.5 rounded-2xl border border-border bg-white p-6"
            >
              <span className="font-mono text-[13px] tracking-[0.12em] text-gold-text">{item.code}</span>
              <h3 className="text-[21px] leading-[1.2] font-bold tracking-[-0.02em]">{item.title}</h3>
              <p className="text-[15px] leading-[1.5] text-ink-soft">{item.text}</p>
              {item.href && (
                <Link
                  href={item.href}
                  className="mt-auto pt-2 text-[15px] font-bold text-gold-text underline"
                >
                  {item.cta}
                </Link>
              )}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
