import Image from "next/image";
import type { Dictionary } from "@/i18n/dictionaries";

// Visual settings per card, in the same order as `dict.cards`.
const CARD_STYLES = [
  { image: "/assets/list-users.png", ctaStyle: "bg-gold text-ink hover:bg-gold-hover" },
  {
    image: "/assets/list-ambassadors.png",
    ctaStyle: "border border-border-soft bg-white hover:bg-cream-soft",
  },
];

export function WaitlistCards({ dict }: { dict: Dictionary["waitlist"] }) {
  return (
    <section id="listes">
      <div className="mx-auto flex max-w-[1200px] flex-col gap-[18px] px-10 py-[88px]">
        <span className="font-mono text-[13px] tracking-[0.12em] text-[#555a69] uppercase">
          {dict.eyebrow}
        </span>
        <h2 className="max-w-[620px] text-[clamp(34px,4.5vw,48px)] leading-[1] tracking-[-0.03em]">
          {dict.title}
        </h2>
        <p className="max-w-[700px] text-[19px] leading-[1.5] text-ink-soft">{dict.description}</p>
        <div className="mt-[26px] grid grid-cols-[repeat(auto-fit,minmax(min(100%,420px),1fr))] gap-[18px]">
          {dict.cards.map((card, i) => (
            <div
              key={card.title}
              className="flex flex-col overflow-hidden rounded-2xl border border-border bg-white"
            >
              <div className="relative h-[310px] w-full">
                <Image src={CARD_STYLES[i].image} alt={card.imageAlt} fill className="object-cover" />
              </div>
              <div className="flex flex-1 flex-col gap-3 px-6 pt-6 pb-[26px]">
                <span className="w-fit rounded-full bg-chip-2 px-2.5 py-[3px] font-mono text-[13px]">
                  {card.tag}
                </span>
                <h3 className="text-[25px] tracking-[-0.02em]">{card.title}</h3>
                <p className="text-[17px] leading-[1.5] text-ink-soft">{card.description}</p>
                <div className="flex flex-col gap-2 text-[15px] leading-[1.45]">
                  {card.bullets.map((bullet) => (
                    <div key={bullet} className="flex gap-2.5">
                      <span className="mt-2 h-1.5 w-1.5 flex-none rounded-full bg-gold" />
                      {bullet}
                    </div>
                  ))}
                </div>
                <a
                  href="#inscription"
                  className={`mt-auto w-fit rounded-xl px-5 py-3 text-[15px] font-bold sm:whitespace-nowrap ${CARD_STYLES[i].ctaStyle}`}
                >
                  {card.cta}
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
