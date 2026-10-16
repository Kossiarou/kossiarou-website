// Contenu des pages d'atterrissage en français (pages d'usage, pays, information).
// Ces pages n'existent qu'en français : elles sont absentes de `i18n/dictionaries`, qui
// doit rester identique dans les deux langues. Titres, descriptions et H1 suivent le
// tableau « Architecture et balises par page » du cahier des charges SEO.

export type Faq = { q: string; a: string };

export type Section = {
  title: string;
  paragraphs?: string[];
  list?: string[];
  ordered?: boolean;
  example?: string;
};

export type PageKind = "usage" | "country" | "info" | "legal";

export type LandingPage = {
  slug: string;
  kind: PageKind;
  /** Libellé court dans le fil d'Ariane. */
  crumb: string;
  /** Mot-clé principal visé (documentation, non affiché). */
  keyword: string;
  title: string;
  description: string;
  h1: string;
  /** Paragraphe-réponse de 40 à 60 mots, cité par Google et par les IA. */
  answer: string;
  sections: Section[];
  /** Tableau de comparaison et encadré de confiance (pages d'usage et pays). */
  showCompare: boolean;
  faq: Faq[];
  /** Pages liées (maillage interne). */
  related: string[];
  /** Sans formulaire d'inscription (pages légales). */
  hideSignup?: boolean;
};

export const LABELS = {
  home: "Accueil",
  breadcrumbLabel: "Fil d’Ariane",
  updated: "Mis à jour le 15 octobre 2026",
  faqTitle: "Questions fréquentes",
  relatedTitle: "À lire aussi",
  signupTitle: "Rejoignez les premiers utilisateurs",
  signupText:
    "Laissez votre prénom et votre numéro WhatsApp, puis rejoignez le groupe des premiers utilisateurs. Vous serez prévenu dès l’ouverture dans votre pays.",
  signupCta: "Rejoindre les premiers utilisateurs",
  whatsappCta: "Écrire sur WhatsApp",
  trustTitle: "Votre argent reste à votre nom",
  trustItems: [
    "Vérification d’identité (pièce et selfie) pour chaque client",
    "Code secret à chaque opération",
    "Dépôts et retraits uniquement depuis et vers vos propres comptes",
  ],
  compareTitle: "Kossiarou ou les solutions actuelles",
  compareCaption: "Comparaison factuelle des solutions pour payer à l’étranger",
  compareHeaders: ["Critère", "Agent ou changeur", "Banque", "Kossiarou"],
  compareRows: [
    ["Délai", "Variable", "Selon la banque", "Suivi en direct dans l’app"],
    ["Taux connu à l’avance", "Variable", "Variable", "Oui, affiché avant de valider"],
    ["Justificatif", "Variable", "Demandé", "Facture jointe à chaque virement"],
    ["Déplacement", "Selon le cas", "Selon le cas", "Non, depuis votre téléphone"],
  ],
  compareNote: "Frais et délais définitifs communiqués au lancement.",
  guidesTitle: "Guides",
};

const SHARED_NOTE =
  "Le lancement se fait pays par pays : tant que votre pays n’est pas ouvert, Kossiarou est « bientôt disponible » et l’inscription vous place parmi les premiers utilisateurs.";

export const LANDING_PAGES: LandingPage[] = [
  {
    slug: "payer-fournisseur-chine",
    kind: "usage",
    crumb: "Payer en Chine",
    keyword: "payer un fournisseur en Chine depuis l’Afrique",
    title: "Payer un fournisseur en Chine depuis l’Afrique | Kossiarou",
    description:
      "Réglez vos commandes à Guangzhou ou Yiwu par virement, facture jointe, au taux affiché, depuis votre Mobile Money.",
    h1: "Payez votre fournisseur en Chine, sans blocage.",
    answer:
      "Pour payer un fournisseur en Chine depuis le Bénin ou la Côte d’Ivoire, Kossiarou vous permet de déposer depuis votre Mobile Money, de voir le montant exact en yuans avant de valider, puis de régler votre fournisseur par virement avec la facture de la commande. Pas de changeur, pas d’espèces, et un suivi jusqu’à la réception.",
    sections: [
      {
        title: "Pourquoi ça bloque aujourd’hui",
        list: [
          "« Ma carte ne passe pas » : le paiement est refusé en ligne, sur Alibaba comme sur 1688.",
          "« Il faut chercher les yuans » : devises introuvables, changeurs informels, valise de billets.",
          "« Le fournisseur attend toujours » : virement bloqué, justificatifs demandés, commande en retard.",
        ],
      },
      {
        title: "Comment payer avec Kossiarou",
        ordered: true,
        list: [
          "Vous déposez depuis votre Mobile Money ou votre banque, sur un compte à votre nom.",
          "Vous convertissez vos francs CFA en yuans et vous voyez le montant exact avant de valider.",
          "Vous ajoutez votre fournisseur comme bénéficiaire, une seule fois, puis vous joignez la facture de la commande.",
          "Vous suivez le virement dans l’application, de l’envoi à la livraison.",
        ],
        example:
          "Exemple : 300 000 FCFA déposés depuis un MTN MoMo donnent environ 3 846 CNY au taux de démonstration de 1 CNY ≈ 78 F. Le virement est ensuite adressé au fournisseur, facture jointe.",
      },
    ],
    showCompare: true,
    faq: [
      {
        q: "Comment payer un fournisseur chinois depuis le Bénin ?",
        a: "Vous déposez depuis votre Mobile Money, vous convertissez en yuans, puis vous payez votre fournisseur par virement avec la facture de la commande.",
      },
      {
        q: "Puis-je payer sur Alibaba ou 1688 ?",
        a: "Vous payez par virement bancaire le compte du fournisseur, avec la facture de votre commande, ou avec votre carte virtuelle quand le site l’accepte.",
      },
      {
        q: "Puis-je voir le montant en yuans avant de payer ?",
        a: "Oui. Le montant exact à payer est affiché avant que vous validiez, sans surprise.",
      },
      {
        q: "Combien de temps prend un virement vers la Chine ?",
        a: "Selon la banque du bénéficiaire, jusqu’à 24 heures. Vous suivez chaque virement dans l’application.",
      },
      {
        q: "Quels documents faut-il fournir ?",
        a: "Une pièce d’identité et un selfie pour ouvrir votre compte, puis la facture de la commande pour chaque virement.",
      },
    ],
    related: ["payer-scolarite-france", "payer-a-dubai", "faq"],
  },
  {
    slug: "payer-scolarite-france",
    kind: "usage",
    crumb: "Payer les études en France",
    keyword: "payer frais de scolarité France depuis l’Afrique",
    title: "Payer la scolarité en France depuis l’Afrique | Kossiarou",
    description:
      "Frais d’école, logement, dépenses de votre enfant étudiant : payez directement l’école ou le bailleur en euros, depuis votre téléphone.",
    h1: "Payez les études de votre enfant en France.",
    answer:
      "Pour payer la scolarité de votre enfant en France depuis l’Afrique, Kossiarou vous permet d’ajouter l’école ou le bailleur comme bénéficiaire une seule fois, de voir le montant exact en euros avant de valider, puis de payer par virement avec le justificatif demandé. Vous suivez le paiement jusqu’à la réception.",
    sections: [
      {
        title: "Pourquoi ça bloque aujourd’hui",
        list: [
          "« L’école a relancé » : les frais sont à payer et le virement n’est pas parti.",
          "« Il faut chercher les euros » : devises difficiles à trouver, délais et déplacements.",
          "« Le loyer de mon enfant est en retard » : le bailleur attend et rien n’indique où en est le paiement.",
        ],
      },
      {
        title: "Comment payer avec Kossiarou",
        ordered: true,
        list: [
          "Vous déposez depuis votre Mobile Money ou votre banque, sur un compte à votre nom.",
          "Vous convertissez vos francs CFA en euros et vous voyez le montant exact avant de valider.",
          "Vous ajoutez l’école ou le bailleur comme bénéficiaire, une seule fois, avec son RIB.",
          "Vous payez par virement avec le justificatif demandé et vous suivez le paiement.",
        ],
        example:
          "Exemple : 300 000 FCFA représentent environ 457,35 € sur la parité fixe de 655,957 FCFA pour 1 €. Le montant exact est affiché avant que vous validiez.",
      },
    ],
    showCompare: true,
    faq: [
      {
        q: "Comment payer la scolarité de mon enfant en France ?",
        a: "Vous ajoutez l’école comme bénéficiaire une seule fois, puis vous payez les frais en euros par virement, avec le justificatif demandé.",
      },
      {
        q: "Puis-je aussi payer le loyer ou le logement ?",
        a: "Oui. Vous ajoutez le bailleur comme bénéficiaire et vous le payez par virement, comme l’école.",
      },
      {
        q: "Quels justificatifs faut-il joindre ?",
        a: "Le justificatif du paiement : facture de l’école, avis de frais ou contrat de location, selon le bénéficiaire.",
      },
      {
        q: "Combien de temps prend le virement ?",
        a: "Selon la banque du bénéficiaire, jusqu’à 24 heures. Vous suivez chaque virement dans l’application.",
      },
    ],
    related: ["payer-fournisseur-chine", "payer-aux-etats-unis", "faq"],
  },
  {
    slug: "payer-a-dubai",
    kind: "usage",
    crumb: "Payer à Dubaï",
    keyword: "payer à Dubaï depuis l’Afrique",
    title: "Payer à Dubaï sans espèces depuis l’Afrique | Kossiarou",
    description:
      "Hôtel, achats, fournisseurs : une carte qui passe sur place et en ligne, sans valise de billets.",
    h1: "Voyagez et achetez à Dubaï, sans valise de billets.",
    answer:
      "Pour payer à Dubaï depuis l’Afrique de l’Ouest, Kossiarou vous donne une carte virtuelle à utiliser sur place et en ligne, rechargée depuis votre solde en francs CFA, et un virement en dirhams pour vos fournisseurs. Vous voyez le montant exact avant de valider, sans valise de billets.",
    sections: [
      {
        title: "Pourquoi ça bloque aujourd’hui",
        list: [
          "« Ma carte ne passe pas » : paiement refusé à l’hôtel, au comptoir ou en ligne.",
          "« Je pars avec une valise de billets » : des espèces à transporter et à changer sur place.",
          "« Mon fournisseur attend » : le virement en dirhams n’arrive pas.",
        ],
      },
      {
        title: "Comment payer avec Kossiarou",
        ordered: true,
        list: [
          "Vous déposez depuis votre Mobile Money ou votre banque, sur un compte à votre nom.",
          "Vous convertissez vos francs CFA en dirhams et vous voyez le montant avant de valider.",
          "Vous payez sur place et en ligne avec votre carte virtuelle, ou par virement pour un fournisseur.",
          "Vous suivez chaque opération dans l’application, et vous gelez la carte en un geste si besoin.",
        ],
      },
    ],
    showCompare: true,
    faq: [
      {
        q: "Puis-je payer mon hôtel à Dubaï avec Kossiarou ?",
        a: "Oui, avec votre carte virtuelle, sur place comme en ligne.",
      },
      {
        q: "Puis-je payer un fournisseur à Dubaï ?",
        a: "Oui, par virement en dirhams, avec la facture de la commande.",
      },
      {
        q: "Puis-je geler ma carte ?",
        a: "Oui, en un geste depuis l’application. Chaque opération demande aussi votre code secret.",
      },
      {
        q: "Les frais sont-ils connus à l’avance ?",
        a: "Les frais et les délais définitifs sont communiqués avant le lancement. Le montant exact est affiché avant chaque validation.",
      },
    ],
    related: ["payer-aux-etats-unis", "payer-fournisseur-chine", "securite"],
  },
  {
    slug: "payer-aux-etats-unis",
    kind: "usage",
    crumb: "Payer aux États-Unis",
    keyword: "payer en dollars depuis l’Afrique",
    title: "Payer en dollars aux États-Unis depuis l’Afrique | Kossiarou",
    description:
      "Abonnements, achats en ligne, frais de dossier, voyages : payez en dollars depuis votre téléphone.",
    h1: "Payez en dollars, sans blocage.",
    answer:
      "Pour payer en dollars depuis l’Afrique de l’Ouest, Kossiarou vous donne une carte virtuelle en dollars, rechargée depuis votre solde en francs CFA, pour vos abonnements et vos achats en ligne, et un virement en dollars pour vos frais de dossier. Vous voyez le montant exact avant de valider.",
    sections: [
      {
        title: "Pourquoi ça bloque aujourd’hui",
        list: [
          "« Ma carte ne passe pas » : abonnement ou achat en ligne refusé.",
          "« Il faut chercher les dollars » : devises difficiles à trouver et à justifier.",
          "« Les frais de dossier sont dus » : le virement vers les États-Unis n’aboutit pas.",
        ],
      },
      {
        title: "Comment payer avec Kossiarou",
        ordered: true,
        list: [
          "Vous déposez depuis votre Mobile Money ou votre banque, sur un compte à votre nom.",
          "Vous convertissez vos francs CFA en dollars et vous voyez le montant avant de valider.",
          "Vous payez en ligne avec votre carte virtuelle en dollars, ou par virement pour les frais de dossier.",
          "Vous suivez chaque opération dans l’application.",
        ],
      },
    ],
    showCompare: true,
    faq: [
      {
        q: "Puis-je payer mes abonnements en dollars ?",
        a: "Oui, avec la carte virtuelle en dollars, rechargée depuis votre solde en francs CFA.",
      },
      {
        q: "Puis-je recevoir de l’argent des États-Unis ?",
        a: "Oui, les virements reçus depuis les États-Unis sont crédités sur votre wallet en dollars.",
      },
      {
        q: "Puis-je payer des frais de dossier ou de visa ?",
        a: "Oui, par virement en dollars, avec le justificatif demandé.",
      },
      {
        q: "Combien de temps prend un virement ?",
        a: "Selon la banque du bénéficiaire, jusqu’à 24 heures. Vous suivez chaque virement dans l’application.",
      },
    ],
    related: ["payer-a-dubai", "payer-scolarite-france", "faq"],
  },
  ...countryPages(),
  {
    slug: "ambassadeurs",
    kind: "info",
    crumb: "Ambassadeurs",
    keyword: "devenir ambassadeur Kossiarou",
    title: "Devenir ambassadeur Kossiarou",
    description:
      "Faites connaître Kossiarou dans votre marché, votre école ou votre communauté. Candidature en 2 minutes.",
    h1: "Devenez un visage de Kossiarou.",
    answer:
      "Devenir ambassadeur Kossiarou, c’est faire connaître l’application dans votre marché, votre école, votre association ou votre communauté en ligne, avec un lien personnel, un kit de communication et un référent dédié. Le montant de la commission par client actif est communiqué avant l’ouverture.",
    sections: [
      {
        title: "Ce que vous recevez",
        list: [
          "Une commission par client actif, montant communiqué avant l’ouverture",
          "Un lien personnel, un kit de communication et un QR code",
          "Un tableau de bord et un référent Kossiarou dédié",
        ],
      },
      {
        title: "Comment candidater",
        ordered: true,
        list: [
          "Vous choisissez « Ambassadeur » dans le formulaire d’inscription.",
          "Vous laissez votre prénom et votre numéro WhatsApp.",
          "Vous rejoignez le groupe WhatsApp des ambassadeurs, où vous recevez les prochaines étapes.",
        ],
      },
    ],
    showCompare: false,
    faq: [
      {
        q: "Qui peut devenir ambassadeur ?",
        a: "Toute personne qui anime un marché, une école, une association ou une communauté en ligne et veut faire connaître Kossiarou autour d’elle.",
      },
      {
        q: "Combien gagne un ambassadeur ?",
        a: "Une commission par client actif. Le montant est communiqué avant l’ouverture.",
      },
    ],
    related: ["faq", "securite", "payer-fournisseur-chine"],
  },
  {
    slug: "securite",
    kind: "info",
    crumb: "Sécurité",
    keyword: "Kossiarou est-il sûr",
    title: "Sécurité et protection de votre argent | Kossiarou",
    description:
      "Vérification d’identité, code secret à chaque opération, comptes à votre nom : comment Kossiarou protège vos paiements.",
    h1: "Votre argent reste à votre nom.",
    answer:
      "Kossiarou protège vos paiements par une vérification d’identité obligatoire pour chaque client, un code secret à six chiffres à chaque opération, des dépôts et retraits uniquement depuis et vers vos propres comptes, et une facture jointe à chaque virement. Le statut réglementaire sera publié avant l’ouverture.",
    sections: [
      {
        title: "Nos protections",
        list: [
          "Vérification d’identité obligatoire : pièce d’identité et selfie, pour chaque client, sans exception.",
          "Code secret à chaque opération : rien ne part sans votre code.",
          "Comptes à votre nom : dépôts et retraits uniquement depuis et vers vos propres comptes.",
          "Facture pour chaque virement : le justificatif de la commande accompagne chaque paiement.",
          "Carte virtuelle : gel instantané depuis l’application.",
        ],
      },
      {
        title: "Statut réglementaire",
        paragraphs: [
          "Notre statut réglementaire et nos partenaires agréés seront publiés ici avant l’ouverture. Kossiarou est édité par Kossiarou Technology SARL, à Parakou (Bénin).",
        ],
      },
    ],
    showCompare: false,
    faq: [
      {
        q: "Kossiarou est-il sûr ?",
        a: "Chaque client est vérifié, chaque opération demande son code secret et les comptes sont à son nom.",
      },
      {
        q: "Quels documents faut-il fournir ?",
        a: "Une pièce d’identité valide et un selfie pris dans l’application. Pour les plafonds Pro et Business, des justificatifs d’activité et d’origine des fonds.",
      },
    ],
    related: ["faq", "payer-fournisseur-chine", "payer-scolarite-france"],
  },
  {
    slug: "faq",
    kind: "info",
    crumb: "Questions fréquentes",
    keyword: "Kossiarou questions",
    title: "Questions fréquentes | Kossiarou",
    description: "Pays, devises, documents, délais, plafonds : toutes les réponses sur Kossiarou.",
    h1: "Vos questions, nos réponses.",
    answer:
      "Kossiarou est une application mobile qui permet de payer à l’étranger, en Europe, en Chine, aux États-Unis et à Dubaï, depuis son téléphone, sans chercher les devises. Voici les réponses aux questions les plus fréquentes sur les pays, les devises, les documents, les délais et les plafonds.",
    sections: [],
    showCompare: false,
    faq: [
      {
        q: "Qu’est-ce que Kossiarou ?",
        a: "Kossiarou est une application mobile qui permet aux particuliers et aux commerçants d’Afrique de l’Ouest de payer à l’étranger, en Europe, en Chine, aux États-Unis et à Dubaï, depuis leur téléphone, sans chercher les devises.",
      },
      {
        q: "Dans quels pays Kossiarou sera-t-il disponible ?",
        a: "Au Bénin d’abord, puis en Côte d’Ivoire, au Burkina Faso, au Togo, au Mali et au Sénégal.",
      },
      {
        q: "Vers quelles devises puis-je payer ?",
        a: "Euro, dollar américain, yuan chinois et dirham des Émirats.",
      },
      {
        q: "Quels documents faut-il pour ouvrir un compte ?",
        a: "Une pièce d’identité valide et un selfie pris dans l’application. Pour les plafonds Pro et Business, des justificatifs d’activité et d’origine des fonds.",
      },
      {
        q: "Quels sont les plafonds ?",
        a: "Le plafond Standard est de 2 000 000 FCFA par opération et 15 000 € par mois. Les plafonds Pro et Business sont accordés sur demande.",
      },
      {
        q: "Combien de temps prend un paiement ?",
        a: "La conversion est immédiate. Un virement arrive selon la banque du bénéficiaire, en général sous 24 heures.",
      },
      {
        q: "Que se passe-t-il après mon inscription ?",
        a: "Vous rejoignez le groupe WhatsApp des premiers utilisateurs : vous recevez les dates d’ouverture et un accès prioritaire dès le lancement dans votre pays.",
      },
    ],
    related: ["securite", "payer-fournisseur-chine", "ambassadeurs"],
  },
  {
    slug: "guides",
    kind: "info",
    crumb: "Guides",
    keyword: "guides paiement international Afrique",
    title: "Guides : payer à l’étranger depuis l’Afrique | Kossiarou",
    description:
      "Guides pratiques pour payer un fournisseur, une école ou un voyage à l’étranger depuis l’Afrique de l’Ouest.",
    h1: "Guides pratiques",
    answer:
      "Les guides de Kossiarou expliquent, pas à pas, comment payer un fournisseur, une école ou un voyage à l’étranger depuis l’Afrique de l’Ouest : démarches, justificatifs, délais. Un nouveau guide est publié chaque mois ; en attendant, les pages ci-dessous répondent déjà aux questions les plus fréquentes.",
    sections: [
      {
        title: "Les premiers guides",
        list: [
          "Payer un fournisseur chinois depuis le Bénin, la Côte d’Ivoire ou le Sénégal",
          "Payer les frais de scolarité en France depuis l’Afrique : démarches, justificatifs, délais",
          "Payer sur Alibaba et 1688 depuis l’Afrique de l’Ouest",
          "Voyager à Dubaï sans espèces : carte, plafonds, conseils",
        ],
      },
    ],
    showCompare: false,
    faq: [],
    related: ["payer-fournisseur-chine", "payer-scolarite-france", "payer-a-dubai"],
  },
  {
    slug: "mentions-legales",
    kind: "legal",
    crumb: "Mentions légales",
    keyword: "",
    title: "Mentions légales | Kossiarou",
    description: "Éditeur, siège et contact du site kossiarou.com.",
    h1: "Mentions légales",
    answer:
      "Le site kossiarou.com est édité par Kossiarou Technology SARL, dont le siège est à Parakou (Bénin).",
    sections: [
      {
        title: "Éditeur du site",
        list: [
          "Raison sociale : Kossiarou Technology SARL",
          "Capital : 1 000 000 FCFA",
          "RCCM : RB/PKO/26 B 1591",
          "Siège : Parakou, Bénin",
          "E-mail : contact@kossiarou.com",
          "WhatsApp : +33 7 45 54 37 36",
        ],
      },
      {
        title: "Publication et hébergement",
        paragraphs: [
          "Le directeur de la publication, le numéro IFU et l’hébergeur du site seront complétés avant l’ouverture au public.",
        ],
      },
      {
        title: "Établissement partenaire",
        paragraphs: [
          "L’établissement partenaire agréé qui exécute les paiements sera indiqué ici dès la signature du partenariat.",
        ],
      },
    ],
    showCompare: false,
    faq: [],
    related: ["confidentialite", "conditions"],
    hideSignup: true,
  },
  {
    slug: "confidentialite",
    kind: "legal",
    crumb: "Confidentialité",
    keyword: "",
    title: "Politique de confidentialité | Kossiarou",
    description: "Données collectées par le formulaire d’inscription, finalité, durée, droits et cookies.",
    h1: "Politique de confidentialité",
    answer:
      "Kossiarou collecte uniquement les données du formulaire d’inscription pour vous prévenir de l’ouverture du service dans votre pays.",
    sections: [
      {
        title: "Données collectées",
        list: [
          "Votre prénom, votre numéro WhatsApp et votre pays",
          "Votre besoin principal et la liste choisie (premier utilisateur ou ambassadeur)",
          "La page d’origine et les paramètres de campagne (UTM) du lien utilisé",
        ],
      },
      {
        title: "Finalité et durée",
        paragraphs: [
          "Ces données servent à vous contacter au sujet de l’ouverture de Kossiarou et à mesurer l’efficacité de nos publications. Elles sont conservées jusqu’à l’ouverture du service dans votre pays, ou jusqu’à ce que vous demandiez leur suppression.",
        ],
      },
      {
        title: "Vos droits",
        paragraphs: [
          "Vous pouvez demander l’accès, la rectification ou la suppression de vos données, ou vous opposer à leur traitement, en écrivant à contact@kossiarou.com.",
        ],
      },
      {
        title: "Cookies et mesure d’audience",
        paragraphs: [
          "Les outils de mesure d’audience et de publicité ne sont chargés qu’après votre accord. Vous pouvez refuser aussi simplement que vous pouvez accepter, et revenir sur votre choix à tout moment.",
        ],
      },
    ],
    showCompare: false,
    faq: [],
    related: ["mentions-legales", "conditions"],
    hideSignup: true,
  },
  {
    slug: "conditions",
    kind: "legal",
    crumb: "Conditions d’utilisation",
    keyword: "",
    title: "Conditions d’utilisation de la liste d’attente | Kossiarou",
    description: "Règles d’inscription à la liste d’attente et au groupe WhatsApp de Kossiarou.",
    h1: "Conditions d’utilisation",
    answer:
      "L’inscription à la liste d’attente de Kossiarou est gratuite et n’ouvre pas de compte de paiement : elle vous place parmi les premiers prévenus de l’ouverture du service.",
    sections: [
      {
        title: "Liste d’attente",
        list: [
          "L’inscription est gratuite et ne vous engage à rien.",
          "Elle ne constitue pas l’ouverture d’un compte : le compte est ouvert dans l’application, après vérification d’identité.",
          "Les dates d’ouverture, les frais et les délais définitifs sont communiqués avant le lancement.",
        ],
      },
      {
        title: "Groupe WhatsApp",
        paragraphs: [
          "Le groupe WhatsApp sert à diffuser les nouvelles et les dates d’ouverture. Chaque membre s’engage à y échanger avec respect.",
        ],
      },
      {
        title: "Informations sur le service",
        paragraphs: [
          "Les exemples chiffrés du site sont des illustrations. Aucune opération de paiement n’est possible avant l’ouverture du service.",
        ],
      },
    ],
    showCompare: false,
    faq: [],
    related: ["mentions-legales", "confidentialite"],
    hideSignup: true,
  },
];

type Country = {
  slug: string;
  name: string;
  from: string;
  in: string;
  deposits: string;
  prep: string;
};

function countryPages(): LandingPage[] {
  const countries: Country[] = [
    {
      slug: "benin",
      name: "Bénin",
      from: "depuis le Bénin",
      in: "au Bénin",
      deposits: "MTN MoMo ou Moov Money",
      prep: "Kossiarou arrive au Bénin",
    },
    {
      slug: "cote-divoire",
      name: "Côte d’Ivoire",
      from: "depuis la Côte d’Ivoire",
      in: "en Côte d’Ivoire",
      deposits: "Orange Money, MTN, Moov ou Wave",
      prep: "Kossiarou arrive en Côte d’Ivoire",
    },
    {
      slug: "senegal",
      name: "Sénégal",
      from: "depuis le Sénégal",
      in: "au Sénégal",
      deposits: "Orange Money ou Wave",
      prep: "Kossiarou arrive au Sénégal",
    },
    {
      slug: "togo",
      name: "Togo",
      from: "depuis le Togo",
      in: "au Togo",
      deposits: "votre Mobile Money ou votre banque",
      prep: "Kossiarou arrive au Togo",
    },
    {
      slug: "mali",
      name: "Mali",
      from: "depuis le Mali",
      in: "au Mali",
      deposits: "votre Mobile Money ou votre banque",
      prep: "Kossiarou arrive au Mali",
    },
    {
      slug: "burkina-faso",
      name: "Burkina Faso",
      from: "depuis le Burkina Faso",
      in: "au Burkina Faso",
      deposits: "votre Mobile Money ou votre banque",
      prep: "Kossiarou arrive au Burkina Faso",
    },
  ];

  return countries.map((c) => ({
    slug: c.slug,
    kind: "country",
    crumb: c.name,
    keyword: `payer à l’étranger ${c.from}`,
    title: `Payer à l’étranger ${c.from} | Kossiarou`,
    description: `${c.prep} : payez en Chine, en France, à Dubaï et aux USA depuis ${c.deposits}.`,
    h1: `Payez à l’étranger ${c.from}.`,
    answer: `Pour payer à l’étranger ${c.from}, Kossiarou vous permet de déposer depuis ${c.deposits}, de voir le montant exact avant de valider, puis de payer un fournisseur en Chine, une école en France, un hôtel à Dubaï ou un achat aux États-Unis, depuis votre téléphone, sans blocage.`,
    sections: [
      {
        title: "Quatre usages, une seule application",
        list: [
          "Payer un fournisseur en Chine, facture jointe",
          "Payer la scolarité et le logement en France",
          "Voyager et acheter à Dubaï avec une carte qui passe",
          "Payer en dollars aux États-Unis",
        ],
      },
      {
        title: "Comment déposer",
        paragraphs: [
          `Vous déposez depuis ${c.deposits}, sur un compte à votre nom. ${SHARED_NOTE}`,
        ],
      },
    ],
    showCompare: true,
    faq: [
      {
        q: `Kossiarou est-il disponible ${c.in} ?`,
        a: "Bientôt. Inscrivez-vous pour rejoindre le groupe WhatsApp des premiers utilisateurs : vous serez prévenu dès l’ouverture dans votre pays.",
      },
      {
        q: "Vers quelles devises puis-je payer ?",
        a: "Euro, dollar américain, yuan chinois et dirham des Émirats.",
      },
      {
        q: "Quels documents faut-il pour ouvrir un compte ?",
        a: "Une pièce d’identité valide et un selfie pris dans l’application.",
      },
    ],
    related: [
      "payer-fournisseur-chine",
      "payer-scolarite-france",
      ...(c.slug === "benin" ? ["payer-a-dubai"] : ["benin"]),
    ],
  }));
}

export const PAGE_SLUGS = LANDING_PAGES.map((page) => page.slug);

export function getLandingPage(slug: string) {
  return LANDING_PAGES.find((page) => page.slug === slug);
}
