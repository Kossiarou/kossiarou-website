const FEATURES = [
  {
    icon: <span className="h-[18px] w-3 rounded-sm border-2 border-ink" />,
    title: "Compte XOF",
    description:
      "Déposez et retirez depuis vos comptes Mobile Money et bancaires à votre nom. Ajoutez-en autant que vous voulez.",
    note: "MTN MoMo · Moov · Orange · Wave · [BANQUES]",
  },
  {
    icon: "⇄",
    title: "Conversion instantanée",
    description: "Passez de XOF à EUR, USD, CNY ou AED en un instant. Chaque devise a son propre wallet.",
    note: "EUR · USD · CNY · AED",
  },
  {
    icon: "⌂",
    title: "Virement bancaire international",
    description:
      "Payez un fournisseur, une école ou un proche sur son compte bancaire. Le bénéficiaire est vérifié une fois, par son RIB ou par un lien envoyé par e-mail.",
    note: "Facture de la commande pour chaque virement",
  },
  {
    icon: <span className="h-[13px] w-[18px] rounded-sm border-2 border-t-[5px] border-ink" />,
    title: "Cartes virtuelles XOF et USD",
    description:
      "Achats en ligne et paiements sur place, sans frais. La carte USD se recharge automatiquement depuis votre solde XOF.",
    note: "Gel instantané · détails protégés par PIN",
  },
  {
    icon: "↓",
    title: "Comptes USD et EUR",
    description: "Recevez des virements depuis la zone euro ou les États-Unis, crédités sur vos wallets.",
    note: "Réception uniquement",
  },
  {
    icon: <span className="h-[15px] w-[17px] rounded-tl-sm rounded-tr-sm rounded-bl-[8px] rounded-br-sm border-2 border-ink" />,
    title: "Assistance 24h/24",
    description:
      "Un conseiller dans l’app, en français et en anglais. Suivi de chaque opération, de l’envoi à la livraison.",
    note: "Réponse en quelques minutes",
  },
];

export function Features() {
  return (
    <section id="fonctionnalites" className="border-b border-border">
      <div className="mx-auto flex max-w-[1200px] flex-col gap-[18px] px-10 py-[88px]">
        <span className="font-mono text-[13px] tracking-[0.12em] text-[#555a69] uppercase">
          Fonctionnalités
        </span>
        <h2 className="max-w-[560px] text-[clamp(34px,4.5vw,48px)] leading-[1] tracking-[-0.03em]">
          Un compte en francs CFA, ouvert sur le monde.
        </h2>
        <div className="mt-[26px] grid grid-cols-[repeat(auto-fit,minmax(min(100%,300px),1fr))] gap-px overflow-hidden rounded-2xl border border-border bg-border">
          {FEATURES.map((feature) => (
            <div key={feature.title} className="flex flex-col gap-2.5 bg-white p-[26px]">
              <span className="flex h-[42px] w-[42px] items-center justify-center rounded-[10px] bg-chip-2 text-lg">
                {feature.icon}
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
