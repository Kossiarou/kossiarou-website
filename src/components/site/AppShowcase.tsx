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

function BalanceScreen() {
  return (
    <PhoneFrame>
      <div className="flex items-center justify-between">
        <span className="text-xs font-bold">kossiarou</span>
        <span className="flex h-[22px] w-[22px] items-center justify-center rounded-full bg-ink text-[9px] font-bold text-white">
          AK
        </span>
      </div>
      <div className="flex flex-col gap-1 rounded-[10px] bg-ink p-2.5 text-cream">
        <span className="text-[9px] text-dark-text-soft">Solde principal · Bénin</span>
        <span className="font-mono text-lg">485 000 FCFA</span>
        <span className="text-[9px] text-dark-text-soft">2 comptes de dépôt à mon nom</span>
      </div>
      <div className="grid grid-cols-4 gap-1 text-center text-[8px] font-bold">
        {[
          { icon: "+", label: "Déposer", active: false },
          { icon: "↙", label: "Retirer", active: false },
          { icon: "⇄", label: "Convertir", active: false },
          { icon: "↗", label: "Envoyer", active: true },
        ].map((a) => (
          <div key={a.label} className="flex flex-col items-center gap-[3px]">
            <span
              className={`flex h-[26px] w-[26px] items-center justify-center rounded-lg text-[11px] ${
                a.active ? "bg-gold" : "border border-border bg-white"
              }`}
            >
              {a.icon}
            </span>
            {a.label}
          </div>
        ))}
      </div>
      <div className="flex flex-col gap-0.5 rounded-[10px] border border-border bg-white px-2.5 py-2">
        <span className="text-[9px] text-[#555a69]">CNY</span>
        <span className="font-mono text-sm">3 846,00 ¥</span>
      </div>
      <div className="flex flex-col gap-0.5 rounded-[10px] border border-border bg-white px-2.5 py-2">
        <span className="text-[9px] text-[#555a69]">EUR</span>
        <span className="font-mono text-sm">120,00 €</span>
      </div>
      <div className="flex flex-col gap-1.5 rounded-[10px] border border-border bg-white px-2.5 py-2">
        <div className="flex items-center justify-between">
          <span className="w-[50px] text-[9px] text-[#555a69]">Plafond du mois</span>
          <span className="font-mono text-[13px]">3,2 M / 9,8 M</span>
        </div>
        <div className="h-1 rounded bg-chip">
          <div className="h-1 w-1/3 rounded bg-gold" />
        </div>
      </div>
    </PhoneFrame>
  );
}

function ConvertScreen() {
  return (
    <PhoneFrame>
      <div className="grid grid-cols-[20px_1fr_20px] items-center text-center text-[13px] font-bold">
        <span>←</span>
        <span>Convertir</span>
        <span />
      </div>
      <div className="flex flex-col gap-[3px] rounded-[10px] border border-border bg-white px-2.5 py-2">
        <span className="text-[9px] text-[#555a69]">Depuis mon solde XOF</span>
        <span className="font-mono text-[15px]">300 000 FCFA</span>
      </div>
      <span className="text-center text-xs">⇅</span>
      <div className="flex flex-col gap-[3px] rounded-[10px] border border-border bg-white px-2.5 py-2">
        <span className="text-[9px] text-[#555a69]">Je reçois en CNY</span>
        <span className="font-mono text-[15px]">3 846,15 ¥</span>
      </div>
      <div className="flex flex-col gap-1.5 rounded-[10px] border border-border bg-white px-2.5 py-2">
        <div className="flex items-center justify-between">
          <span className="text-[9px] font-bold">Taux</span>
          <span className="font-mono text-sm">1 CNY ≈ 78 F</span>
        </div>
        <div className="flex items-center justify-between">
          <span className="text-[9px] font-bold">Délai</span>
          <span className="rounded-full bg-success-soft px-1.5 py-0.5 text-[9px] font-bold text-success">
            Instantané
          </span>
        </div>
      </div>
      <span className="mt-auto rounded-[9px] bg-gold p-2 text-center text-[10px] font-bold">
        Convertir 300 000 FCFA
      </span>
    </PhoneFrame>
  );
}

function SendScreen() {
  return (
    <PhoneFrame>
      <div className="grid grid-cols-[20px_1fr_20px] items-center text-center text-[13px] font-bold">
        <span>←</span>
        <span>Envoyer</span>
        <span />
      </div>
      <div className="flex flex-col gap-[3px] rounded-[10px] border border-border bg-white px-2.5 py-2">
        <div className="flex items-center justify-between">
          <span className="text-[11px] font-bold">Yiwu Trading Co.</span>
          <span className="rounded-full bg-success-soft px-1.5 py-0.5 text-[8px] font-bold text-success">
            Vérifié
          </span>
        </div>
        <span className="text-[8px] text-[#555a69]">Compte bancaire · Chine · CNY</span>
      </div>
      <div className="flex flex-col gap-[3px] rounded-[10px] border border-border bg-white px-2.5 py-2">
        <span className="text-[9px] text-[#555a69]">Montant</span>
        <span className="font-mono text-[15px]">3 000,00 ¥</span>
      </div>
      <div className="flex flex-col gap-[3px] rounded-[10px] bg-success-soft px-2.5 py-2">
        <span className="text-[8px] font-bold text-success">Facture de la commande · ajoutée</span>
        <span className="text-[10px]">facture_yiwu_0948.pdf</span>
      </div>
      <div className="flex items-center gap-2 rounded-[10px] border border-border bg-white px-2.5 py-[7px]">
        <span className="text-[9px] font-bold">Délai</span>
        <span className="rounded-full bg-warning-soft px-1.5 py-0.5 text-[8px] font-bold text-warning">
          Selon la banque · jusqu’à 24 h
        </span>
      </div>
      <span className="mt-auto rounded-[9px] bg-gold p-2 text-center text-[10px] font-bold">
        Envoyer 3 000,00 ¥
      </span>
    </PhoneFrame>
  );
}

function CardScreen() {
  return (
    <PhoneFrame>
      <div className="grid grid-cols-[20px_1fr_20px] items-center text-center text-[13px] font-bold">
        <span>←</span>
        <span>Carte USD</span>
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
          <span className="text-[9px] text-[#555a69]">Paiement sur place</span>
          <span className="rounded-full bg-success-soft px-1.5 py-0.5 text-[8px] font-bold text-success">
            Sans frais
          </span>
        </div>
        <span className="font-mono text-[15px]">−450,00 ¥</span>
      </div>
      <ToggleRow label="Achats en ligne" />
      <ToggleRow label="Paiements en voyage" />
      <ToggleRow label="Recharge auto depuis XOF" />
    </PhoneFrame>
  );
}

const ITEMS = [
  {
    screen: <BalanceScreen />,
    title: "Un compte, plusieurs devises",
    description: "Votre solde XOF et vos wallets EUR, USD, CNY et AED au même endroit.",
  },
  {
    screen: <ConvertScreen />,
    title: "Conversion instantanée",
    description: "Le montant arrive aussitôt sur le wallet de la devise choisie.",
  },
  {
    screen: <SendScreen />,
    title: "Virement avec facture",
    description:
      "Payez un bénéficiaire vérifié par virement bancaire, avec la facture de votre commande.",
  },
  {
    screen: <CardScreen />,
    title: "Carte bancaire en voyage",
    description:
      "Payez sur place sans frais avec votre carte virtuelle, rechargée depuis votre solde XOF.",
  },
];

export function AppShowcase() {
  return (
    <section id="app" className="border-b border-border">
      <div className="mx-auto flex max-w-[1200px] flex-col gap-[18px] px-10 pt-24 pb-[88px]">
        <span className="font-mono text-[13px] tracking-[0.12em] text-[#555a69] uppercase">
          L’app en images
        </span>
        <h2 className="max-w-[420px] text-[clamp(34px,4.5vw,48px)] leading-[1] tracking-[-0.03em]">
          Tout se passe sur votre téléphone.
        </h2>
        <div className="mt-9 grid grid-cols-[repeat(auto-fit,minmax(240px,1fr))] gap-x-5 gap-y-[30px]">
          {ITEMS.map((item) => (
            <div key={item.title} className="flex flex-col items-center gap-3.5 text-center">
              {item.screen}
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
