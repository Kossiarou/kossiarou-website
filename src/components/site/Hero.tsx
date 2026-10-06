import Image from "next/image";
import type { Dictionary } from "@/i18n/dictionaries";

const CURRENCY_PAIRS = ["XOF → CNY", "XOF → EUR", "XOF → USD", "XOF → AED"];

export function Hero({ dict }: { dict: Dictionary["hero"] }) {
  return (
    <section id="top" className="border-b border-border">
      <div className="mx-auto grid max-w-[1200px] grid-cols-[repeat(auto-fit,minmax(min(100%,380px),1fr))] items-center gap-10 px-10 pt-16 pb-11">
        <div className="flex flex-col gap-[22px]">
          <span className="inline-flex w-fit items-center gap-2.5 rounded-full bg-chip px-3.5 py-1.5 text-sm font-semibold text-ink-soft">
            <span className="h-2 w-2 rounded-full bg-gold" />
            {dict.badge}
          </span>
          <h1 className="max-w-[560px] text-[clamp(44px,6vw,72px)] leading-[1] font-bold tracking-[-0.035em]">
            {dict.titleBefore}
            <span className="underline decoration-[#f06aa7] decoration-[5px] underline-offset-[6px] [text-decoration-skip-ink:none]">
              {dict.titleHighlight}
            </span>
            {dict.titleAfter}
          </h1>
          <p className="max-w-[560px] text-[19px] leading-[1.5] text-ink-soft">
            {dict.description}
          </p>
          <div className="flex flex-wrap gap-2 font-mono text-sm">
            {CURRENCY_PAIRS.map((pair) => (
              <span
                key={pair}
                className="whitespace-nowrap rounded-lg border border-border-soft bg-white px-2.5 py-1.5"
              >
                {pair}
              </span>
            ))}
          </div>
          <div className="mt-1.5 flex flex-wrap gap-2.5">
            <a
              href="#listes"
              className="whitespace-nowrap rounded-xl bg-gold px-[22px] py-3.5 text-base font-bold text-ink hover:bg-gold-hover"
            >
              {dict.primaryCta}
            </a>
            <a
              href="#listes"
              className="whitespace-nowrap rounded-xl border border-border-soft bg-cream-soft px-[22px] py-[13px] text-base font-bold hover:bg-white"
            >
              {dict.secondaryCta}
            </a>
          </div>
        </div>

        <div className="flex flex-col items-center gap-2.5">
          <div className="relative h-[432px] w-[500px] max-w-full">
            <div className="absolute inset-x-0 bottom-0 h-[250px] rounded-t-[250px] bg-gold" />
            <div className="absolute bottom-0 left-1/2 h-[432px] w-[360px] max-w-[74%] -translate-x-1/2 overflow-hidden rounded-t-[180px] shadow-[0_20px_40px_rgba(30,34,51,0.18)]">
              <Image src="/assets/hero.png" alt="" fill className="object-cover" priority />
            </div>
            <div className="absolute top-[120px] right-0 flex flex-col gap-1.5 rounded-2xl bg-cream-soft p-3.5 shadow-[0_12px_30px_rgba(30,34,51,0.16)]">
              <span className="text-xs text-ink-soft">{dict.conversionLabel}</span>
              <span className="font-mono text-[17px]">{dict.conversionValue}</span>
            </div>
            <div className="absolute bottom-12 left-0 flex flex-col gap-[5px] rounded-2xl bg-cream-soft p-3.5 shadow-[0_12px_30px_rgba(30,34,51,0.16)]">
              <span className="flex items-center gap-1.5 text-[13px] font-bold text-success">
                <span className="h-2 w-2 rounded-full bg-success" />
                {dict.paymentDelivered}
              </span>
              <span className="font-mono text-[17px]">{dict.paymentAmount}</span>
              <span className="text-[11px] text-ink-soft">{dict.paymentBeneficiary}</span>
            </div>
          </div>
          <div className="h-6 w-[500px] max-w-full rounded-xl bg-ink" />
          <div className="h-6 w-[440px] max-w-[88%] rounded-xl bg-ink" />
          <div className="h-6 w-[400px] max-w-[80%] rounded-xl bg-ink" />
        </div>
      </div>
    </section>
  );
}
