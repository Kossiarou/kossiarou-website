import type { Dictionary } from "@/i18n/dictionaries";

type Screens = Dictionary["app"]["screens"];

function PhoneFrame({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex h-[490px] w-60 flex-col gap-2 rounded-[38px] border-8 border-ink bg-cream px-3 pt-[30px] pb-3 text-left shadow-[0_20px_40px_rgba(30,34,51,0.14)]">
      {children}
    </div>
  );
}

function ToggleRow({ label }: { label: string }) {
  return (
    <div className="flex items-center justify-between px-0.5 py-1 text-[10px]">
      <span>{label}</span>
      <span className="relative h-[13px] w-6 rounded-[7px] bg-ink">
        <span className="absolute top-0.5 right-0.5 h-[9px] w-[9px] rounded-full bg-white" />
      </span>
    </div>
  );
}

// Quick-action icons, in the same order as `dict.balance.actions`.
const ACTION_ICONS = ["+", "↙", "⇄", "↗"];

function BalanceScreen({ dict }: { dict: Screens["balance"] }) {
  return (
    <PhoneFrame>
      <div className="flex items-center justify-between">
        <span className="text-xs font-bold">kossiarou</span>
        <span className="flex h-[22px] w-[22px] items-center justify-center rounded-full bg-ink text-[9px] font-bold text-white">
          AK
        </span>
      </div>
      <div className="flex flex-col gap-1 rounded-[10px] bg-ink p-2.5 text-cream">
        <span className="text-[9px] text-dark-text-soft">{dict.mainBalance}</span>
        <span className="font-mono text-lg">{dict.mainBalanceValue}</span>
        <span className="text-[9px] text-dark-text-soft">{dict.depositAccounts}</span>
      </div>
      <div className="grid grid-cols-4 gap-1 text-center text-[8px] font-bold">
        {dict.actions.map((label, i) => (
          <div key={label} className="flex flex-col items-center gap-[3px]">
            <span
              className={`flex h-[26px] w-[26px] items-center justify-center rounded-lg text-[11px] ${
                i === 3 ? "bg-gold" : "border border-border bg-white"
              }`}
            >
              {ACTION_ICONS[i]}
            </span>
            {label}
          </div>
        ))}
      </div>
      <div className="flex flex-col gap-0.5 rounded-[10px] border border-border bg-white px-2.5 py-2">
        <span className="text-[9px] text-[#555a69]">CNY</span>
        <span className="font-mono text-sm">{dict.cnyValue}</span>
      </div>
      <div className="flex flex-col gap-0.5 rounded-[10px] border border-border bg-white px-2.5 py-2">
        <span className="text-[9px] text-[#555a69]">EUR</span>
        <span className="font-mono text-sm">{dict.eurValue}</span>
      </div>
      <div className="flex flex-col gap-1.5 rounded-[10px] border border-border bg-white px-2.5 py-2">
        <div className="flex items-center justify-between">
          <span className="w-[50px] text-[9px] text-[#555a69]">{dict.monthlyCap}</span>
          <span className="font-mono text-[13px]">{dict.monthlyCapValue}</span>
        </div>
        <div className="h-1 rounded bg-chip">
          <div className="h-1 w-1/3 rounded bg-gold" />
        </div>
      </div>
    </PhoneFrame>
  );
}

function ConvertScreen({ dict }: { dict: Screens["convert"] }) {
  return (
    <PhoneFrame>
      <div className="grid grid-cols-[20px_1fr_20px] items-center text-center text-[13px] font-bold">
        <span>←</span>
        <span>{dict.title}</span>
        <span />
      </div>
      <div className="flex flex-col gap-[3px] rounded-[10px] border border-border bg-white px-2.5 py-2">
        <span className="text-[9px] text-[#555a69]">{dict.from}</span>
        <span className="font-mono text-[15px]">{dict.fromValue}</span>
      </div>
      <span className="text-center text-xs">⇅</span>
      <div className="flex flex-col gap-[3px] rounded-[10px] border border-border bg-white px-2.5 py-2">
        <span className="text-[9px] text-[#555a69]">{dict.to}</span>
        <span className="font-mono text-[15px]">{dict.toValue}</span>
      </div>
      <div className="flex flex-col gap-1.5 rounded-[10px] border border-border bg-white px-2.5 py-2">
        <div className="flex items-center justify-between">
          <span className="text-[9px] font-bold">{dict.rate}</span>
          <span className="font-mono text-sm">{dict.rateValue}</span>
        </div>
        <div className="flex items-center justify-between">
          <span className="text-[9px] font-bold">{dict.delay}</span>
          <span className="rounded-full bg-success-soft px-1.5 py-0.5 text-[9px] font-bold text-success">
            {dict.instant}
          </span>
        </div>
      </div>
      <span className="mt-auto rounded-[9px] bg-gold p-2 text-center text-[10px] font-bold">
        {dict.cta}
      </span>
    </PhoneFrame>
  );
}

function SendScreen({ dict }: { dict: Screens["send"] }) {
  return (
    <PhoneFrame>
      <div className="grid grid-cols-[20px_1fr_20px] items-center text-center text-[13px] font-bold">
        <span>←</span>
        <span>{dict.title}</span>
        <span />
      </div>
      <div className="flex flex-col gap-[3px] rounded-[10px] border border-border bg-white px-2.5 py-2">
        <div className="flex items-center justify-between">
          <span className="text-[11px] font-bold">{dict.beneficiary}</span>
          <span className="rounded-full bg-success-soft px-1.5 py-0.5 text-[8px] font-bold text-success">
            {dict.verified}
          </span>
        </div>
        <span className="text-[8px] text-[#555a69]">{dict.account}</span>
      </div>
      <div className="flex flex-col gap-[3px] rounded-[10px] border border-border bg-white px-2.5 py-2">
        <span className="text-[9px] text-[#555a69]">{dict.amount}</span>
        <span className="font-mono text-[15px]">{dict.amountValue}</span>
      </div>
      <div className="flex flex-col gap-[3px] rounded-[10px] bg-success-soft px-2.5 py-2">
        <span className="text-[8px] font-bold text-success">{dict.invoice}</span>
        <span className="text-[10px]">{dict.invoiceFile}</span>
      </div>
      <div className="flex items-center gap-2 rounded-[10px] border border-border bg-white px-2.5 py-[7px]">
        <span className="text-[9px] font-bold">{dict.delay}</span>
        <span className="rounded-full bg-warning-soft px-1.5 py-0.5 text-[8px] font-bold text-warning">
          {dict.delayValue}
        </span>
      </div>
      <span className="mt-auto rounded-[9px] bg-gold p-2 text-center text-[10px] font-bold">
        {dict.cta}
      </span>
    </PhoneFrame>
  );
}

function CardScreen({ dict }: { dict: Screens["card"] }) {
  return (
    <PhoneFrame>
      <div className="grid grid-cols-[20px_1fr_20px] items-center text-center text-[13px] font-bold">
        <span>←</span>
        <span>{dict.title}</span>
        <span />
      </div>
      <div className="relative flex h-[118px] flex-col justify-between overflow-hidden rounded-xl bg-ink p-3 text-cream">
        <div className="absolute -top-[26px] -right-[26px] h-[90px] w-[90px] rounded-full bg-gold" />
        <span className="relative text-[11px] font-bold">kossiarou</span>
        <span className="h-4 w-[22px] rounded bg-gold" />
        <span className="font-mono text-[11px] tracking-[0.08em]">•••• •••• •••• 2277</span>
      </div>
      <div className="flex flex-col gap-[3px] rounded-[10px] border border-border bg-white px-2.5 py-2">
        <div className="flex items-center justify-between">
          <span className="text-[9px] text-[#555a69]">{dict.onSitePayment}</span>
          <span className="rounded-full bg-success-soft px-1.5 py-0.5 text-[8px] font-bold text-success">
            {dict.noFees}
          </span>
        </div>
        <span className="font-mono text-[15px]">{dict.onSiteValue}</span>
      </div>
      {dict.toggles.map((label) => (
        <ToggleRow key={label} label={label} />
      ))}
    </PhoneFrame>
  );
}

export function AppShowcase({ dict }: { dict: Dictionary["app"] }) {
  const screens = [
    <BalanceScreen key="balance" dict={dict.screens.balance} />,
    <ConvertScreen key="convert" dict={dict.screens.convert} />,
    <SendScreen key="send" dict={dict.screens.send} />,
    <CardScreen key="card" dict={dict.screens.card} />,
  ];

  return (
    <section id="app" className="border-b border-border">
      <div className="mx-auto flex max-w-[1200px] flex-col gap-[18px] px-10 pt-24 pb-[88px]">
        <span className="font-mono text-[13px] tracking-[0.12em] text-[#555a69] uppercase">
          {dict.eyebrow}
        </span>
        <h2 className="max-w-[420px] text-[clamp(34px,4.5vw,48px)] leading-[1] tracking-[-0.03em]">
          {dict.title}
        </h2>
        <div className="mt-9 grid grid-cols-[repeat(auto-fit,minmax(240px,1fr))] gap-x-5 gap-y-[30px]">
          {dict.items.map((item, i) => (
            <div key={item.title} className="flex flex-col items-center gap-3.5 text-center">
              {screens[i]}
              <h3 className="text-lg tracking-[-0.01em]">{item.title}</h3>
              <p className="max-w-[250px] text-[15px] leading-[1.5] text-ink-soft">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
