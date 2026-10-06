import type { Dictionary } from "@/i18n/dictionaries";

export function Trust({ dict }: { dict: Dictionary["trust"] }) {
  return (
    <section id="confiance" className="border-b border-border">
      <div className="mx-auto flex max-w-[1200px] flex-col gap-[18px] px-10 py-[88px]">
        <span className="font-mono text-[13px] tracking-[0.12em] text-[#555a69] uppercase">
          {dict.eyebrow}
        </span>
        <h2 className="max-w-[600px] text-[clamp(34px,4.5vw,48px)] leading-[1] tracking-[-0.03em]">
          {dict.title}
        </h2>
        <div className="mt-[26px] grid grid-cols-[repeat(auto-fit,minmax(min(100%,300px),1fr))] gap-[18px]">
          {dict.cards.map((card, i) => (
            <div
              key={card.label}
              className="flex flex-col gap-2.5 rounded-2xl border border-border bg-white p-[26px]"
            >
              <span className="font-mono text-xs tracking-[0.1em] text-[#555a69] uppercase">
                {card.label}
              </span>
              <h3 className="mt-1 text-[19px] tracking-[-0.01em]">{card.title}</h3>
              <div className="flex flex-1 flex-col gap-3.5">
                <p className="text-base leading-[1.5] text-ink-soft">{card.text}</p>
                {/* The last card points to the waitlists; the others show a "soon" badge. */}
                {i === dict.cards.length - 1 ? (
                  <a
                    href="#listes"
                    className="mt-auto self-start text-[15px] font-bold underline underline-offset-[3px]"
                  >
                    {card.action}
                  </a>
                ) : (
                  <span className="mt-auto self-start rounded-full bg-chip-2 px-2.5 py-[3px] text-xs font-semibold">
                    {card.action}
                  </span>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
