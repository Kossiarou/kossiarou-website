import Link from "next/link";
import type { Dictionary } from "@/i18n/dictionaries";

// Links to the country pages on the French site; the English site shows plain labels.
export function Countries({ dict }: { dict: Dictionary["countries"] }) {
  const pill =
    "inline-flex items-center gap-1.5 rounded-full border border-border-soft bg-white px-4 py-2.5 font-mono text-[15px]";
  return (
    <section id="pays" aria-labelledby="countries-title" className="border-b border-border">
      <div className="mx-auto flex max-w-[1200px] flex-col gap-[18px] px-10 py-[72px]">
        <span className="font-mono text-[13px] tracking-[0.12em] text-[#555a69] uppercase">
          {dict.eyebrow}
        </span>
        <h2
          id="countries-title"
          className="max-w-[760px] text-[clamp(34px,4.5vw,48px)] leading-[1] tracking-[-0.03em]"
        >
          {dict.title}
        </h2>
        <p className="max-w-[640px] text-[19px] leading-[1.5] text-ink-soft">{dict.text}</p>
        <ul className="mt-2 flex flex-wrap gap-2.5">
          {dict.items.map((item) => (
            <li key={item.code}>
              {item.href ? (
                <Link href={item.href} className={`${pill} hover:bg-cream-soft`}>
                  <b className="font-medium text-gold-text">{item.code}</b>
                  {item.name}
                </Link>
              ) : (
                <span className={pill}>
                  <b className="font-medium text-gold-text">{item.code}</b>
                  {item.name}
                </span>
              )}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
