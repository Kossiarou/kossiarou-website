// Le français est la langue de référence : `en.ts` est typé sur `Dictionary`,
// donc toute clé ajoutée ici doit aussi être traduite en anglais (sinon `tsc` échoue).
export const fr = {
  meta: {
    title: "Payer à l’étranger sans blocage depuis l’Afrique | Kossiarou",
    description:
      "Payez vos fournisseurs en Chine, la scolarité en France, vos voyages à Dubaï ou aux États-Unis depuis votre téléphone. Bientôt en Afrique de l’Ouest.",
    ogTitle: "Payez à l’étranger. Sans blocage. | Kossiarou",
    ogDescription:
      "Fournisseur en Chine, scolarité en France, voyage à Dubaï ou aux USA : payez depuis votre téléphone. Bientôt en Afrique de l’Ouest.",
    ogImageAlt: "Kossiarou : Payez à l’étranger. Sans blocage.",
    schema: {
      slogan: "Payez à l’étranger. Sans blocage.",
      organizationDescription:
        "Application mobile pour payer à l’étranger (Europe, Chine, États-Unis, Dubaï) depuis l’Afrique de l’Ouest.",
      serviceName: "Paiements à l’étranger depuis l’Afrique de l’Ouest",
      serviceType: "Paiement international",
    },
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
    menu: "Menu",
    navLabel: "Navigation principale",
    skip: "Aller au contenu principal",
  },

  hero: {
    badge: "Bientôt disponible en Afrique de l’Ouest",
    titleBefore: "Payez à l’étranger. ",
    titleHighlight: "Sans blocage",
    titleAfter: ".",
    description:
      "Fournisseur en Chine, scolarité en France, voyage à Dubaï ou aux États-Unis : avec Kossiarou, vous réglez tout depuis votre téléphone, sans chercher les devises et sans passer par un intermédiaire.",
    primaryCta: "Rejoindre les premiers utilisateurs",
    secondaryCta: "Écrire sur WhatsApp",
    destinationsLabel: "Destinations",
    destinations: ["Europe · EUR", "Chine · CNY", "États-Unis · USD", "Dubaï · AED"],
    conversionLabel: "Conversion instantanée",
    conversionValue: "300 000 F → 3 846 ¥",
    paymentDelivered: "Paiement livré",
    paymentAmount: "3 000,00 CNY",
    paymentBeneficiary: "Yiwu Trading Co.",
    imageAlt: "Commerçante d’Afrique de l’Ouest souriante, téléphone en main, dans sa boutique",
  },

  pain: {
    eyebrow: "Vous connaissez ça",
    title: "Payer à l’étranger depuis l’Afrique, c’est souvent bloqué.",
    quotes: [
      {
        quote: "« Ma carte ne passe pas. »",
        detail: "Paiement refusé en ligne ou au comptoir, à Dubaï comme sur Alibaba.",
      },
      {
        quote: "« Il faut chercher les euros. »",
        detail: "Devises introuvables, changeurs informels, valise de billets.",
      },
      {
        quote: "« Le fournisseur attend toujours. »",
        detail: "Virement bloqué, justificatifs demandés, commande en retard.",
      },
    ],
    answer:
      "Avec Kossiarou, ça passe : vous payez directement, au taux affiché, depuis votre téléphone.",
  },

  destinations: {
    eyebrow: "Quatre destinations, une seule application",
    title: "Où voulez-vous payer ?",
    items: [
      {
        code: "CHINE · CNY",
        title: "Payer un fournisseur en Chine",
        text: "Réglez vos commandes à Guangzhou ou Yiwu par virement, facture jointe, au taux affiché avant validation.",
        href: "/fr/payer-fournisseur-chine",
        cta: "Payer la Chine",
      },
      {
        code: "FRANCE · EUR",
        title: "Payer la scolarité en France",
        text: "Frais de scolarité, logement, dépenses de votre enfant étudiant : payez directement l’école ou le bailleur.",
        href: "/fr/payer-scolarite-france",
        cta: "Payer les études",
      },
      {
        code: "DUBAÏ · AED",
        title: "Voyager et acheter à Dubaï",
        text: "Hôtel, achats, fournisseurs : une carte qui passe sur place et en ligne, sans valise de billets.",
        href: "/fr/payer-a-dubai",
        cta: "Payer à Dubaï",
      },
      {
        code: "ÉTATS-UNIS · USD",
        title: "Payer aux États-Unis",
        text: "Abonnements, achats en ligne, frais de dossier, voyages : payez en dollars depuis votre téléphone.",
        href: "/fr/payer-aux-etats-unis",
        cta: "Payer en dollars",
      },
    ],
  },

  countries: {
    eyebrow: "Lancement",
    title: "Bientôt dans six pays d’Afrique de l’Ouest.",
    text: "Le lancement commence au Bénin, puis s’étend à la Côte d’Ivoire, au Burkina Faso, au Togo, au Mali et au Sénégal.",
    items: [
      { code: "BJ", name: "Bénin", href: "/fr/benin" },
      { code: "CI", name: "Côte d’Ivoire", href: "/fr/cote-divoire" },
      { code: "BF", name: "Burkina Faso", href: "/fr/burkina-faso" },
      { code: "TG", name: "Togo", href: "/fr/togo" },
      { code: "ML", name: "Mali", href: "/fr/mali" },
      { code: "SN", name: "Sénégal", href: "/fr/senegal" },
    ],
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
          "Un avantage premiers utilisateurs, dévoilé avant l’ouverture",
        ],
        cta: "M’inscrire comme premier utilisateur",
        imageAlt: "Un homme et une femme regardent ensemble l’écran d’un smartphone",
      },
      {
        tag: "Liste 2",
        title: "Devenir ambassadeur",
        description:
          "Vous animez un marché, une école, une association ou une communauté en ligne ? Faites connaître Kossiarou autour de vous.",
        bullets: [
          "Une commission par client actif, montant communiqué avant l’ouverture",
          "Lien personnel, kit de communication et QR code",
          "Tableau de bord et référent Kossiarou dédié",
        ],
        cta: "Candidater comme ambassadeur",
        imageAlt: "Deux jeunes femmes rient en regardant un téléphone, accoudées à une rambarde",
      },
    ],
  },

  story: {
    eyebrow: "Quatre trajets, une seule app",
    title: "Là où votre argent doit aller, Kossiarou l’emmène.",
    description:
      "Vous déposez en francs CFA depuis vos comptes, la conversion est instantanée, puis vous payez par virement bancaire, avec la facture de la commande, ou directement avec votre carte.",
    tabsLabel: "Trajets",
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
        imageAlt: "Voyageuse souriante au téléphone dans la salle d’attente d’un aéroport",
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
        title: "Payer la scolarité à Lyon, depuis Ouagadougou",
        persona: "Moussa · parent d’étudiante, Ouagadougou → Lyon, France",
        description:
          "Moussa convertit ses francs CFA en euros à la parité fixe et règle les frais de scolarité de sa fille par virement bancaire, directement à l’école, facture d’inscription jointe. Chaque mois, il lui envoie aussi de quoi payer son loyer et ses courses.",
        steps: [
          { title: "Dépôt", detail: "655 957 FCFA depuis son compte bancaire" },
          { title: "Conversion", detail: "XOF → EUR, parité fixe : 655,957 FCFA pour 1 €" },
          {
            title: "Virement à l’école",
            detail: "Frais de scolarité, facture d’inscription jointe",
          },
          { title: "Chaque mois", detail: "Un virement sur le compte bancaire de sa fille" },
        ],
        imageAlt: "Étudiante souriante, assise sur un banc, son ordinateur portable sur les genoux",
        receipt: {
          status: "Livré",
          amount: "1 000,00 EUR",
          debited: "= 655 957 FCFA convertis · parité fixe",
          rows: [
            { label: "Bénéficiaire", value: "Institut Horizon, Lyon" },
            { label: "Justificatif", value: "Facture d’inscription" },
            { label: "Délai", value: "Selon la banque, jusqu’à 24 h" },
          ],
        },
      },
      {
        label: "Les Émirats",
        title: "Payer un fournisseur à Dubaï, sans quitter Abidjan",
        persona: "Koffi · importateur, Abidjan → Dubaï, Émirats arabes unis",
        description:
          "Koffi importe des téléphones et des accessoires. Il convertit ses francs CFA en dirhams et paie son fournisseur de Dubaï par virement bancaire, facture de la commande jointe. Quand il se rend sur place, il règle ses dépenses avec sa carte, sans frais.",
        steps: [
          { title: "Dépôt", detail: "1 500 000 FCFA depuis son compte Wave, instantané" },
          { title: "Conversion", detail: "XOF → AED, instantanée" },
          {
            title: "Virement au fournisseur",
            detail: "Vers sa banque à Dubaï, facture de la commande jointe",
          },
          { title: "Sur place", detail: "Paiements par carte bancaire, sans frais" },
        ],
        imageAlt: "Homme souriant en chemise, assis sur un muret, sa veste à la main",
        receipt: {
          status: "Livré",
          amount: "9 000,00 AED",
          debited: "≈ 1 368 000 FCFA débités",
          rows: [
            { label: "Bénéficiaire", value: "Al Noor General Trading" },
            { label: "Justificatif", value: "Facture de la commande" },
            { label: "Délai", value: "Selon la banque, jusqu’à 24 h" },
          ],
        },
      },
      {
        label: "Les États-Unis",
        title: "Des dollars pour travailler avec les États-Unis",
        persona: "Fatou · développeuse freelance, Dakar → clients aux États-Unis",
        description:
          "Les clients américains de Fatou la paient par virement sur son compte USD, crédité sur son wallet en dollars. Elle règle ses abonnements et ses achats en ligne avec sa carte virtuelle USD, sans frais, rechargée depuis son solde XOF si besoin.",
        steps: [
          { title: "Réception", detail: "Virement d’un client américain sur son compte USD" },
          { title: "Wallet USD", detail: "Montant crédité sur son wallet en dollars" },
          {
            title: "Carte virtuelle USD",
            detail: "Abonnements et achats en ligne, sans frais",
          },
          { title: "Recharge auto", detail: "Si besoin, la carte se recharge depuis son solde XOF" },
        ],
        imageAlt: "Jeune femme concentrée devant son ordinateur portable, près d’une fenêtre",
        receipt: {
          status: "Reçu",
          amount: "1 200,00 USD",
          debited: "Crédité sur le wallet USD",
          rows: [
            { label: "Émetteur", value: "Northfield Studio LLC" },
            { label: "Compte", value: "Compte USD à son nom" },
            { label: "Délai", value: "Selon la banque de l’émetteur" },
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
        note: "MTN MoMo · Moov · Orange · Wave · banques bientôt",
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
    feesTitle: "Frais et délais",
    feesIntro: "Montants des frais communiqués avant l’ouverture.",
    feesHeaders: { operation: "OPÉRATION", fee: "FRAIS", delay: "DÉLAI" },
    feesRows: [
      { operation: "Dépôt Mobile Money", fee: "Communiqués au lancement", free: false, delay: "Instantané" },
      {
        operation: "Dépôt bancaire",
        fee: "Communiqués au lancement",
        free: false,
        delay: "Selon la banque, jusqu’à 24 h",
      },
      {
        operation: "Conversion XOF → EUR / USD / CNY / AED",
        fee: "Communiqués au lancement",
        free: false,
        delay: "Instantanée",
      },
      {
        operation: "Envoi à un bénéficiaire via compte bancaire",
        fee: "Communiqués au lancement",
        free: false,
        delay: "Selon la banque, jusqu’à 24 h",
      },
      {
        operation: "Paiement par carte (en ligne ou sur place)",
        fee: "Sans frais",
        free: true,
        delay: "Immédiat",
      },
      {
        operation: "Retrait vers Mobile Money ou banque",
        fee: "Communiqués au lancement",
        free: false,
        delay: "Mobile Money : instantané · banque : jusqu’à 24 h",
      },
    ],
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

  trust: {
    eyebrow: "Confiance",
    title: "Avant de nous confier votre argent.",
    cards: [
      {
        label: "Statut réglementaire",
        title: "Édité par Kossiarou Technology SARL",
        text: "Notre statut réglementaire et nos agréments seront publiés ici avant l’ouverture.",
        action: "Bientôt",
      },
      {
        label: "Partenaires agréés",
        title: "Des partenaires agréés",
        text: "Les banques et établissements de paiement partenaires seront présentés ici avant l’ouverture.",
        action: "Bientôt",
      },
      {
        label: "Témoignages",
        title: "Leurs mots, bientôt ici",
        text: "Les premiers retours d’utilisateurs seront publiés après l’ouverture, avec leur accord.",
        action: "Rejoindre une liste d’attente",
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
      "Qu’est-ce que Kossiarou ?",
      "Comment payer un fournisseur en Chine depuis le Bénin ou la Côte d’Ivoire ?",
      "Comment payer la scolarité de mon enfant en France ?",
      "Dans quels pays Kossiarou sera-t-il disponible ?",
      "Vers quelles devises puis-je payer ?",
      "Quels documents faut-il pour ouvrir un compte ?",
      "Combien de temps prend un paiement ?",
      "Que se passe-t-il après mon inscription ?",
    ],
    answers: [
      "Kossiarou est une application mobile qui permet aux particuliers et aux commerçants d’Afrique de l’Ouest de payer à l’étranger, en Europe, en Chine, aux États-Unis et à Dubaï, depuis leur téléphone, sans chercher les devises.",
      "Vous déposez depuis votre Mobile Money ou votre banque, vous voyez le montant en yuans avant de valider, puis vous payez votre fournisseur par virement avec la facture de la commande.",
      "Vous ajoutez l’école comme bénéficiaire une seule fois, puis vous payez les frais en euros par virement, avec le justificatif demandé. Vous suivez le paiement jusqu’à la réception.",
      "Au Bénin d’abord, puis en Côte d’Ivoire, au Burkina Faso, au Togo, au Mali et au Sénégal.",
      "Euro, dollar américain, yuan chinois et dirham des Émirats.",
      "Une pièce d’identité valide et un selfie pris dans l’application. Pour les plafonds Pro et Business, des justificatifs d’activité et d’origine des fonds.",
      "La conversion est immédiate. Un virement arrive selon la banque du bénéficiaire, en général sous 24 heures.",
      "Vous rejoignez le groupe WhatsApp des premiers utilisateurs : vous recevez les dates d’ouverture et un accès prioritaire dès le lancement dans votre pays.",
    ],
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
    countryCode: "Indicatif du pays",
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

  notFound: {
    metaTitle: "Page introuvable — Kossiarou",
    code: "404",
    title: "Cette page n’existe pas.",
    text: "Le lien est peut-être incorrect, ou la page a été déplacée. Revenez à l’accueil ou rejoignez une liste d’attente.",
    home: "Retour à l’accueil",
    waitlist: "Rejoindre une liste d’attente",
  },

  consent: {
    title: "Cookies et mesure d’audience",
    text: "Avec votre accord, nous mesurons les visites et les inscriptions pour améliorer le site et nos publicités. Refuser est aussi simple qu’accepter.",
    accept: "Accepter",
    refuse: "Refuser",
    privacy: "Confidentialité",
    privacyHref: "/fr/confidentialite",
  },

  footer: {
    tagline: "« Kossiarou » signifie « paiement » en bariba. Payez à l’étranger, sans blocage.",
    cookieSettings: "Gérer les cookies",
    columns: [
      {
        title: "PRODUIT",
        showContact: false,
        links: [
          { href: "#app", label: "L’app" },
          { href: "#tarifs", label: "Tarifs" },
          { href: "#listes", label: "Listes d’attente" },
        ],
      },
      {
        title: "PAYER",
        showContact: false,
        links: [
          { href: "/fr/payer-fournisseur-chine", label: "En Chine" },
          { href: "/fr/payer-scolarite-france", label: "En France" },
          { href: "/fr/payer-a-dubai", label: "À Dubaï" },
          { href: "/fr/payer-aux-etats-unis", label: "Aux États-Unis" },
        ],
      },
      {
        title: "AIDE",
        showContact: true,
        links: [
          { href: "/fr/faq", label: "FAQ" },
          { href: "/fr/securite", label: "Sécurité" },
          { href: "/fr/guides", label: "Guides" },
          { href: "/fr/ambassadeurs", label: "Ambassadeurs" },
        ],
      },
      {
        title: "LÉGAL",
        showContact: false,
        links: [
          { href: "/fr/mentions-legales", label: "Mentions légales" },
          { href: "/fr/confidentialite", label: "Confidentialité" },
          { href: "/fr/conditions", label: "Conditions d’utilisation" },
        ],
      },
    ],
    legal:
      "© 2026 Kossiarou Technology SARL, Parakou, Bénin. Statut réglementaire et partenaires agréés publiés avant l’ouverture.",
  },
};

export type Dictionary = typeof fr;
