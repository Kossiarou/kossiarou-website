import type { Dictionary } from "@/i18n/dictionaries";

// Icons, in the same order as `dict.items`.
const ICONS = [
  <span key="xof" className="h-[18px] w-3 rounded-sm border-2 border-ink" />,
  "⇄",
  "⌂",
  <span key="card" className="h-[13px] w-[18px] rounded-sm border-2 border-t-[5px] border-ink" />,
  "↓",
  <span
    key="chat"
    className="h-[15px] w-[17px] rounded-tl-sm rounded-tr-sm rounded-bl-[8px] rounded-br-sm border-2 border-ink"
  />,
];

export function Features({ dict }: { dict: Dictionary["features"] }) {
  return (
    <section id="fonctionnalites" className="border-b border-border">
      <div className="mx-auto flex max-w-[1200px] flex-col gap-[18px] px-10 py-[88px]">
        <span className="font-mono text-[13px] tracking-[0.12em] text-[#555a69] uppercase">
          {dict.eyebrow}
        </span>
        <h2 className="max-w-[560px] text-[clamp(34px,4.5vw,48px)] leading-[1] tracking-[-0.03em]">
          {dict.title}
        </h2>
        <div className="mt-[26px] grid grid-cols-[repeat(auto-fit,minmax(min(100%,300px),1fr))] gap-px overflow-hidden rounded-2xl border border-border bg-border">
          {dict.items.map((feature, i) => (
            <div key={feature.title} className="flex flex-col gap-2.5 bg-white p-[26px]">
              <span className="flex h-[42px] w-[42px] items-center justify-center rounded-[10px] bg-chip-2 text-lg">
                {ICONS[i]}
              </span>
              <h3 className="mt-1.5 text-[19px] tracking-[-0.01em]">{feature.title}</h3>
              <p className="text-base leading-[1.5] text-ink-soft">{feature.description}</p>
              <span className="mt-auto pt-3.5 font-mono text-xs text-ink-soft">{feature.note}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
