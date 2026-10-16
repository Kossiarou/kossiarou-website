import type { Dictionary } from "@/i18n/dictionaries";

export function Pain({ dict }: { dict: Dictionary["pain"] }) {
  return (
    <section id="blocage" aria-labelledby="pain-title" className="border-b border-border">
      <div className="mx-auto flex max-w-[1200px] flex-col gap-[18px] px-10 py-[72px]">
        <span className="font-mono text-[13px] tracking-[0.12em] text-[#555a69] uppercase">
          {dict.eyebrow}
        </span>
        <h2
          id="pain-title"
          className="max-w-[760px] text-[clamp(34px,4.5vw,48px)] leading-[1] tracking-[-0.03em]"
        >
          {dict.title}
        </h2>
        <ul className="mt-4 grid grid-cols-[repeat(auto-fit,minmax(min(100%,300px),1fr))] gap-[18px]">
          {dict.quotes.map((item) => (
            <li
              key={item.quote}
              className="flex flex-col gap-2.5 rounded-2xl border border-border bg-white p-[22px]"
            >
              <blockquote className="text-[19px] leading-[1.35] font-bold">{item.quote}</blockquote>
              <p className="text-sm leading-[1.5] text-ink-soft">{item.detail}</p>
            </li>
          ))}
        </ul>
        <p className="mt-4 max-w-[760px] text-[clamp(20px,2.4vw,28px)] leading-[1.25] font-bold tracking-[-0.02em]">
          {dict.answer}
        </p>
      </div>
    </section>
  );
}
