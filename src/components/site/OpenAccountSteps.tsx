import type { Dictionary } from "@/i18n/dictionaries";

export function OpenAccountSteps({ dict }: { dict: Dictionary["steps"] }) {
  return (
    <section id="ouvrir" className="border-b border-border">
      <div className="mx-auto flex max-w-[1200px] flex-col gap-[18px] px-10 py-[88px]">
        <span className="font-mono text-[13px] tracking-[0.12em] text-[#555a69] uppercase">
          {dict.eyebrow}
        </span>
        <h2 className="max-w-[420px] text-[clamp(34px,4.5vw,48px)] leading-[1] tracking-[-0.03em]">
          {dict.title}
        </h2>
        <div className="mt-[30px] grid grid-cols-[repeat(auto-fit,minmax(min(100%,220px),1fr))] gap-5">
          {dict.items.map((step, i) => (
            <div
              key={step.title}
              className={`flex flex-col gap-2 border-t-[3px] pt-[18px] ${
                i === 0 ? "border-gold" : "border-ink"
              }`}
            >
              <span className="font-mono text-xs text-[#555a69]">
                {String(i + 1).padStart(2, "0")}
              </span>
              <h3 className="text-[19px] leading-[1.1]">{step.title}</h3>
              <p className="text-[15px] leading-[1.5] text-ink-soft">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
