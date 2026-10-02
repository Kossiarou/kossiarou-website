const STEPS = [
  {
    n: "01",
    title: "Votre numéro",
    description: "Recevez votre code par WhatsApp ou SMS. Un code de parrainage ? Saisissez-le ici.",
    active: true,
  },
  {
    n: "02",
    title: "Votre code PIN",
    description: "Six chiffres pour vous connecter et valider chaque opération.",
    active: false,
  },
  {
    n: "03",
    title: "Vérification d’identité obligatoire",
    description: "Pièce d’identité et selfie, pour chaque client. Suivez l’avancement en direct.",
    active: false,
  },
  {
    n: "04",
    title: "Votre premier dépôt",
    description: "Depuis votre Mobile Money ou votre banque. Vous pouvez convertir et payer.",
    active: false,
  },
];

export function OpenAccountSteps() {
  return (
    <section id="ouvrir" className="border-b border-border">
      <div className="mx-auto flex max-w-[1200px] flex-col gap-[18px] px-10 py-[88px]">
        <span className="font-mono text-[13px] tracking-[0.12em] text-[#555a69] uppercase">
          Ouvrir un compte
        </span>
        <h2 className="max-w-[420px] text-[clamp(34px,4.5vw,48px)] leading-[1] tracking-[-0.03em]">
          Quatre étapes, quelques minutes.
        </h2>
        <div className="mt-[30px] grid grid-cols-[repeat(auto-fit,minmax(min(100%,220px),1fr))] gap-5">
          {STEPS.map((step) => (
            <div
              key={step.n}
              className={`flex flex-col gap-2 border-t-[3px] pt-[18px] ${
                step.active ? "border-gold" : "border-ink"
              }`}
            >
              <span className="font-mono text-xs text-[#555a69]">{step.n}</span>
              <h3 className="text-[19px] leading-[1.1]">{step.title}</h3>
              <p className="text-[15px] leading-[1.5] text-ink-soft">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
