// Le français est la langue de référence : `en.ts` est typé sur `Dictionary`,
// donc toute clé ajoutée ici doit aussi être traduite en anglais (sinon `tsc` échoue).
export const fr = {
  meta: {
    title: "Kossiarou — Vos francs CFA voyagent. Vous aussi.",
    description:
      "Kossiarou convertit instantanément votre argent en euros, dollars, yuans ou dirhams. Payez vos fournisseurs par virement, voyagez avec votre carte, envoyez de l'argent à vos proches.",
  },

  header: {
    nav: [
      { href: "#histoires", label: "Histoires" },
      { href: "#app", label: "L’app" },
      { href: "#tarifs", label: "Tarifs" },
      { href: "#listes", label: "Listes d’attente" },
      { href: "#faq", label: "FAQ" },
    ],
    signup: "S’inscrire",
    languageLabel: "Langue",
  },

  hero: {
    badge: "Bientôt disponible · Bénin, Burkina Faso, Côte d’Ivoire, Mali, Sénégal, Togo",
    titleBefore: "Vos francs CFA ",
    titleHighlight: "voyagent",
    titleAfter: ". Vous aussi, sans liquidité.",
    description:
      "Kossiarou convertit instantanément votre argent en euros, dollars, yuans ou dirhams. Payez vos fournisseurs par virement depuis chez vous, ou sur place avec votre carte, et envoyez de l’argent à vos enfants étudiants.",
    primaryCta: "Devenir premier utilisateur",
    secondaryCta: "Devenir ambassadeur",
    conversionLabel: "Conversion instantanée",
    conversionValue: "300 000 F → 3 846 ¥",
    paymentDelivered: "Paiement livré",
    paymentAmount: "3 000,00 CNY",
    paymentBeneficiary: "Yiwu Trading Co.",
  },

  waitlist: {
    eyebrow: "Deux listes d’attente",
    title: "Choisissez votre place avant l’ouverture.",
    description:
      "Inscrivez-vous sur la liste qui vous correspond. Juste après, vous rejoignez le groupe WhatsApp d’attente de votre liste.",
    cards: [
      {
        tag: "Liste 1",
        title: "Premiers utilisateurs",
        description:
          "Pour celles et ceux qui veulent payer, envoyer et voyager avec Kossiarou dès le premier jour.",
        bullets: [
          "Accès à l’app dès l’ouverture dans votre pays",
          "Groupe WhatsApp d’attente : nouvelles et dates en avant-première",
          "Avantage premiers utilisateurs : [AVANTAGE]",
        ],
        cta: "M’inscrire comme premier utilisateur",
      },
      {
        tag: "Liste 2",
        title: "Devenir ambassadeur",
        description:
          "Vous animez un marché, une école, une association ou une communauté en ligne ? Faites connaître Kossiarou autour de vous.",
        bullets: [
          "Commission : [COMMISSION] par client actif",
          "Lien personnel, kit de communication et QR code",
          "Tableau de bord et référent Kossiarou dédié",
        ],
        cta: "Candidater comme ambassadeur",
      },
    ],
  },

  story: {
    eyebrow: "Quatre trajets, une seule app",
    title: "Là où votre argent doit aller, Kossiarou l’emmène.",
    description:
      "Vous déposez en francs CFA depuis vos comptes, la conversion est instantanée, puis vous payez par virement bancaire, avec la facture de la commande, ou directement avec votre carte.",
    tabsLabel: "Destinations",
    disclaimer:
      "Scénarios d’illustration. Taux de démonstration (EUR : parité fixe 655,957 FCFA). Frais et délais définitifs communiqués au lancement.",
    scenarios: [
      {
        label: "Voyager en Chine",
        title: "Acheter à Yiwu, payer depuis Cotonou ou sur place",
        persona: "Aïcha · commerçante, Cotonou → Yiwu, Chine",
        description:
          "Avant de partir, Aïcha convertit ses francs CFA en yuans et paie son fournisseur par virement bancaire depuis le Bénin, facture de la commande jointe. Sur place, elle règle l’hôtel, les taxis et ses petits achats avec sa carte, sans frais.",
        steps: [
          { title: "Dépôt", detail: "300 000 FCFA depuis son MTN MoMo, instantané" },
          { title: "Conversion", detail: "XOF → CNY, instantanée" },
          {
            title: "Virement au fournisseur",
            detail: "Depuis le Bénin, facture de la commande jointe",
          },
          { title: "Sur place", detail: "Paiements par carte bancaire, sans frais" },
        ],
        receipt: {
          status: "Livré",
          amount: "3 000,00 CNY",
          debited: "≈ 234 000 FCFA débités",
          rows: [
            { label: "Bénéficiaire", value: "Yiwu Trading Co." },
            { label: "Justificatif", value: "Facture de la commande" },
            { label: "Délai", value: "Selon la banque, jusqu’à 24 h" },
          ],
        },
      },
      {
        label: "Un enfant étudiant",
        title: "Payer les frais de scolarité sans stress",
        persona: "Marcel · parent, Porto-Novo → Lyon, France",
        description:
          "Marcel convertit ses francs CFA en euros au taux fixe et règle la scolarité de sa fille directement sur le compte de l’université. Chaque mois, il lui envoie son allocation sur son compte en euros.",
        steps: [
          { title: "Dépôt", detail: "330 000 FCFA depuis son compte bancaire, instantané" },
          { title: "Conversion", detail: "XOF → EUR à parité fixe, 655,957 FCFA pour 1 €" },
          {
            title: "Virement à l’école",
            detail: "Sur le RIB de l’université, appel de frais joint",
          },
          { title: "Allocation mensuelle", detail: "Envoyée à sa fille sur son compte en euros" },
        ],
        receipt: {
          status: "Livré",
          amount: "500,00 EUR",
          debited: "≈ 327 979 FCFA débités",
          rows: [
            { label: "Bénéficiaire", value: "Université de Lyon" },
            { label: "Justificatif", value: "Appel de frais de scolarité" },
            { label: "Délai", value: "Selon la banque, jusqu’à 24 h" },
          ],
        },
      },
      {
        label: "Les Émirats",
        title: "Commander à Dubaï, payer depuis Cotonou",
        persona: "Fatou · revendeuse, Cotonou → Dubaï, Émirats arabes unis",
        description:
          "Fatou convertit ses francs CFA en dirhams et règle son fournisseur de Dubaï par virement bancaire, facture à l’appui. Lors de ses déplacements, elle paie l’hôtel et ses achats avec sa carte, sans frais.",
        steps: [
          { title: "Dépôt", detail: "330 000 FCFA depuis son MTN MoMo, instantané" },
          { title: "Conversion", detail: "XOF → AED, instantanée" },
          {
            title: "Virement au fournisseur",
            detail: "Depuis le Bénin, facture de la commande jointe",
          },
          { title: "Sur place", detail: "Paiements par carte bancaire, sans frais" },
        ],
        receipt: {
          status: "Livré",
          amount: "2 000,00 AED",
          debited: "≈ 326 000 FCFA débités",
          rows: [
            { label: "Bénéficiaire", value: "Al Noor Trading LLC" },
            { label: "Justificatif", value: "Facture de la commande" },
            { label: "Délai", value: "Selon la banque, jusqu’à 24 h" },
          ],
        },
      },
      {
        label: "Les États-Unis",
        title: "Payer vos abonnements et achats en dollars",
        persona: "Koffi · développeur, Cotonou → États-Unis",
        description:
          "Koffi convertit ses francs CFA en dollars et alimente sa carte virtuelle USD pour ses outils en ligne et ses achats. Il reçoit aussi les paiements de ses clients américains directement sur son wallet USD.",
        steps: [
          { title: "Dépôt", detail: "480 000 FCFA depuis son MTN MoMo, instantané" },
          { title: "Conversion", detail: "XOF → USD, instantanée" },
          {
            title: "Carte virtuelle USD",
            detail: "Rechargée automatiquement depuis son solde XOF",
          },
          { title: "Réception", detail: "Virements des États-Unis crédités sur son wallet" },
        ],
        receipt: {
          status: "Crédité",
          amount: "800,00 USD",
          debited: "≈ 480 000 FCFA débités",
          rows: [
            { label: "Destination", value: "Carte virtuelle USD" },
            { label: "Recharge", value: "Automatique depuis le solde XOF" },
            { label: "Délai", value: "Instantané" },
          ],
        },
      },
    ],
  },

  app: {
    eyebrow: "L’app en images",
    title: "Tout se passe sur votre téléphone.",
    items: [
      {
        title: "Un compte, plusieurs devises",
        description: "Votre solde XOF et vos wallets EUR, USD, CNY et AED au même endroit.",
      },
      {
        title: "Conversion instantanée",
        description: "Le montant arrive aussitôt sur le wallet de la devise choisie.",
      },
      {
        title: "Virement avec facture",
        description:
          "Payez un bénéficiaire vérifié par virement bancaire, avec la facture de votre commande.",
      },
      {
        title: "Carte bancaire en voyage",
        description:
          "Payez sur place sans frais avec votre carte virtuelle, rechargée depuis votre solde XOF.",
      },
    ],
    screens: {
      balance: {
        mainBalance: "Solde principal · Bénin",
        mainBalanceValue: "485 000 FCFA",
        depositAccounts: "2 comptes de dépôt à mon nom",
        actions: ["Déposer", "Retirer", "Convertir", "Envoyer"],
        cnyValue: "3 846,00 ¥",
        eurValue: "120,00 €",
        monthlyCap: "Plafond du mois",
        monthlyCapValue: "3,2 M / 9,8 M",
      },
      convert: {
        title: "Convertir",
        from: "Depuis mon solde XOF",
        fromValue: "300 000 FCFA",
        to: "Je reçois en CNY",
        toValue: "3 846,15 ¥",
        rate: "Taux",
        rateValue: "1 CNY ≈ 78 F",
        delay: "Délai",
        instant: "Instantané",
        cta: "Convertir 300 000 FCFA",
      },
      send: {
        title: "Envoyer",
        beneficiary: "Yiwu Trading Co.",
        verified: "Vérifié",
        account: "Compte bancaire · Chine · CNY",
        amount: "Montant",
        amountValue: "3 000,00 ¥",
        invoice: "Facture de la commande · ajoutée",
        invoiceFile: "facture_yiwu_0948.pdf",
        delay: "Délai",
        delayValue: "Selon la banque · jusqu’à 24 h",
        cta: "Envoyer 3 000,00 ¥",
      },
      card: {
        title: "Carte USD",
        onSitePayment: "Paiement sur place",
        noFees: "Sans frais",
        onSiteValue: "−450,00 ¥",
        toggles: ["Achats en ligne", "Paiements en voyage", "Recharge auto depuis XOF"],
      },
    },
  },

  features: {
    eyebrow: "Fonctionnalités",
    title: "Un compte en francs CFA, ouvert sur le monde.",
    items: [
      {
        title: "Compte XOF",
        description:
          "Déposez et retirez depuis vos comptes Mobile Money et bancaires à votre nom. Ajoutez-en autant que vous voulez.",
        note: "MTN MoMo · Moov · Orange · Wave · [BANQUES]",
      },
      {
        title: "Conversion instantanée",
        description:
          "Passez de XOF à EUR, USD, CNY ou AED en un instant. Chaque devise a son propre wallet.",
        note: "EUR · USD · CNY · AED",
      },
      {
        title: "Virement bancaire international",
        description:
          "Payez un fournisseur, une école ou un proche sur son compte bancaire. Le bénéficiaire est vérifié une fois, par son RIB ou par un lien envoyé par e-mail.",
        note: "Facture de la commande pour chaque virement",
      },
      {
        title: "Cartes virtuelles XOF et USD",
        description:
          "Achats en ligne et paiements sur place, sans frais. La carte USD se recharge automatiquement depuis votre solde XOF.",
        note: "Gel instantané · détails protégés par PIN",
      },
      {
        title: "Comptes USD et EUR",
        description:
          "Recevez des virements depuis la zone euro ou les États-Unis, crédités sur vos wallets.",
        note: "Réception uniquement",
      },
      {
        title: "Assistance 24h/24",
        description:
          "Un conseiller dans l’app, en français et en anglais. Suivi de chaque opération, de l’envoi à la livraison.",
        note: "Réponse en quelques minutes",
      },
    ],
  },

  steps: {
    eyebrow: "Ouvrir un compte",
    title: "Quatre étapes, quelques minutes.",
    items: [
      {
        title: "Votre numéro",
        description:
          "Recevez votre code par WhatsApp ou SMS. Un code de parrainage ? Saisissez-le ici.",
      },
      {
        title: "Votre code PIN",
        description: "Six chiffres pour vous connecter et valider chaque opération.",
      },
      {
        title: "Vérification d’identité obligatoire",
        description: "Pièce d’identité et selfie, pour chaque client. Suivez l’avancement en direct.",
      },
      {
        title: "Votre premier dépôt",
        description: "Depuis votre Mobile Money ou votre banque. Vous pouvez convertir et payer.",
      },
    ],
  },

  pricing: {
    eyebrow: "Tarifs et plafonds",
    title: "Des plafonds qui grandissent avec votre activité.",
    description:
      "Tout le monde commence en Standard. Commerçants et entrepreneurs peuvent demander un plafond plus élevé en justifiant l’origine de leurs fonds et leur activité.",
    upTo: "JUSQU’À",
    tiers: [
      {
        name: "Standard",
        badge: "Par défaut",
        perOperation: "2 000 000 FCFA",
        perOperationNote: "par opération · ≈ 3 000 €",
        perMonth: "15 000 €",
        perMonthNote: "par mois · ≈ 9 839 355 FCFA",
        bullets: [
          "Compte XOF, conversion et virements",
          "Cartes virtuelles XOF et USD",
          "Vérification d’identité obligatoire",
        ],
      },
      {
        name: "Pro",
        badge: "Sur demande",
        perOperation: "10 000 €",
        perOperationNote: "par opération",
        perMonth: "50 000 €",
        perMonthNote: "par mois",
        bullets: [
          "Pour les commerçants et freelances",
          "Justificatifs : origine des fonds, activité",
          "Validation par notre équipe",
        ],
      },
      {
        name: "Business",
        badge: "Sur demande",
        perOperation: "25 000 €",
        perOperationNote: "par opération",
        perMonth: "150 000 €",
        perMonthNote: "par mois",
        bullets: [
          "Pour les importateurs et entreprises",
          "Au-delà : plafond sur mesure",
          "Interlocuteur dédié",
        ],
      },
    ],
  },

  faq: {
    eyebrow: "Sécurité et questions",
    title: "Votre argent, sous contrôle.",
    securityPoints: [
      {
        title: "Vérification d’identité obligatoire",
        description: "Pour chaque client, sans exception.",
      },
      {
        title: "PIN à chaque opération",
        description: "Rien ne part sans votre code.",
      },
      {
        title: "Comptes à votre nom",
        description: "Dépôts et retraits uniquement vers vos propres comptes.",
      },
      {
        title: "Facture pour chaque virement",
        description: "Le justificatif de la commande accompagne chaque paiement bancaire.",
      },
    ],
    questions: [
      "Dans quels pays puis-je ouvrir un compte ?",
      "Vers quelles devises puis-je convertir et payer ?",
      "Quels documents faut-il fournir ?",
      "Puis-je payer depuis le Bénin ou sur place ?",
      "Combien de temps prend un virement ?",
      "Que se passe-t-il après mon inscription ?",
    ],
    answerSoon: "Réponse à venir prochainement.",
  },

  signup: {
    title: "Soyez parmi les premiers.",
    description:
      "Choisissez votre liste, laissez votre numéro WhatsApp, puis rejoignez le groupe d’attente.",
    steps: [
      "Choisissez : premier utilisateur ou ambassadeur",
      "Indiquez votre prénom, votre pays et votre numéro",
      "Rejoignez le groupe WhatsApp d’attente de votre liste",
    ],
    firstUser: "Premier utilisateur",
    ambassador: "Ambassadeur",
    firstName: "Prénom",
    firstNamePlaceholder: "Ex. Aïcha",
    whatsapp: "Numéro WhatsApp",
    whatsappPlaceholder: "01 97 00 00 00",
    intentLabel: "Vous voulez surtout",
    intents: [
      "Payer des fournisseurs en Chine",
      "Envoyer de l’argent à un enfant étudiant",
      "Voyager aux Émirats",
      "Payer aux États-Unis",
    ],
    submit: "S’inscrire et rejoindre le groupe WhatsApp",
    submitAmbassadorSuffix: " (ambassadeur)",
    thanks: "Merci ! On vous recontacte bientôt.",
    referral: "Un code de parrainage ? Vous le saisirez à l’inscription dans l’app.",
  },

  footer: {
    tagline: "« Kossiarou » signifie « paiement » en bariba.",
    taglineOwner: "Une application de KryptaPay.",
    columns: [
      {
        title: "PRODUIT",
        links: [
          { href: "#app", label: "L’app" },
          { href: "#tarifs", label: "Tarifs" },
          { href: "#listes", label: "Listes d’attente" },
        ],
      },
      {
        title: "AIDE",
        links: [{ href: "#faq", label: "FAQ" }],
      },
      {
        title: "LÉGAL",
        links: [
          { href: "#", label: "Mentions légales" },
          { href: "#", label: "Confidentialité" },
          { href: "#", label: "Conditions d’utilisation" },
        ],
      },
    ],
    photoCredit:
      "Photos : Ali Mkumbwa, Gylain Omer, Yingchou Han, Joyce Busola, David Rotimi et Sandisk, sur Unsplash (licence Unsplash).",
  },
};

export type Dictionary = typeof fr;
