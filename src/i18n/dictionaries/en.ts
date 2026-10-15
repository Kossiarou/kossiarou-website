import type { Dictionary } from "./fr";

// Typed on the French dictionary: a missing or extra key is a compile error.
// Amounts use English number formatting (3,000.00) while keeping the same values as FR.
export const en: Dictionary = {
  meta: {
    title: "Pay abroad from West Africa, without blocks | Kossiarou",
    description:
      "Pay suppliers in China, school fees in France, trips to Dubai or the US from your phone. Coming soon to West Africa.",
    ogTitle: "Pay abroad. No blocks. | Kossiarou",
    ogDescription:
      "Supplier in China, school fees in France, trip to Dubai or the USA: pay from your phone. Coming soon to West Africa.",
    ogImageAlt: "Kossiarou: Pay abroad. No blocks.",
    schema: {
      slogan: "Pay abroad. No blocks.",
      organizationDescription:
        "Mobile app to pay abroad (Europe, China, United States, Dubai) from West Africa.",
      serviceName: "Payments abroad from West Africa",
      serviceType: "International payment",
    },
  },

  header: {
    nav: [
      { href: "#histoires", label: "Stories" },
      { href: "#app", label: "The app" },
      { href: "#tarifs", label: "Pricing" },
      { href: "#listes", label: "Waitlists" },
      { href: "#faq", label: "FAQ" },
    ],
    signup: "Sign up",
    languageLabel: "Language",
    menu: "Menu",
    navLabel: "Main navigation",
    skip: "Skip to main content",
  },

  hero: {
    badge: "Coming soon to West Africa",
    titleBefore: "Pay abroad. ",
    titleHighlight: "No blocks",
    titleAfter: ".",
    description:
      "Supplier in China, school fees in France, a trip to Dubai or the United States: with Kossiarou, you pay for everything from your phone, without hunting for currency and without a middleman.",
    primaryCta: "Join the first users",
    secondaryCta: "Write on WhatsApp",
    destinationsLabel: "Destinations",
    destinations: ["Europe · EUR", "China · CNY", "United States · USD", "Dubai · AED"],
    conversionLabel: "Instant conversion",
    conversionValue: "300,000 F → 3,846 ¥",
    paymentDelivered: "Payment delivered",
    paymentAmount: "3,000.00 CNY",
    paymentBeneficiary: "Yiwu Trading Co.",
    imageAlt: "Smiling West African shopkeeper in her shop, phone in hand",
  },

  pain: {
    eyebrow: "You know the feeling",
    title: "Paying abroad from Africa is often blocked.",
    quotes: [
      {
        quote: "“My card won’t go through.”",
        detail: "Payment refused online or at the counter, in Dubai as on Alibaba.",
      },
      {
        quote: "“I have to hunt for euros.”",
        detail: "Currency nowhere to be found, informal changers, a suitcase of cash.",
      },
      {
        quote: "“The supplier is still waiting.”",
        detail: "Transfer blocked, documents requested, order delayed.",
      },
    ],
    answer:
      "With Kossiarou, it goes through: you pay directly, at the displayed rate, from your phone.",
  },

  destinations: {
    eyebrow: "Four destinations, one app",
    title: "Where do you want to pay?",
    items: [
      {
        code: "CHINA · CNY",
        title: "Pay a supplier in China",
        text: "Pay your orders in Guangzhou or Yiwu by transfer, invoice attached, at the rate shown before you confirm.",
        href: "",
        cta: "Pay China",
      },
      {
        code: "FRANCE · EUR",
        title: "Pay school fees in France",
        text: "Tuition, housing, your student child’s expenses: pay the school or the landlord directly.",
        href: "",
        cta: "Pay for studies",
      },
      {
        code: "DUBAI · AED",
        title: "Travel and shop in Dubai",
        text: "Hotel, purchases, suppliers: a card that works on the spot and online, no suitcase of cash.",
        href: "",
        cta: "Pay in Dubai",
      },
      {
        code: "UNITED STATES · USD",
        title: "Pay in the United States",
        text: "Subscriptions, online purchases, application fees, trips: pay in dollars from your phone.",
        href: "",
        cta: "Pay in dollars",
      },
    ],
  },

  countries: {
    eyebrow: "Launch",
    title: "Coming soon in six West African countries.",
    text: "The launch starts in Benin, then extends to Côte d’Ivoire, Burkina Faso, Togo, Mali and Senegal.",
    items: [
      { code: "BJ", name: "Benin", href: "" },
      { code: "CI", name: "Côte d’Ivoire", href: "" },
      { code: "BF", name: "Burkina Faso", href: "" },
      { code: "TG", name: "Togo", href: "" },
      { code: "ML", name: "Mali", href: "" },
      { code: "SN", name: "Senegal", href: "" },
    ],
  },

  waitlist: {
    eyebrow: "Two waitlists",
    title: "Choose your spot before we open.",
    description:
      "Sign up for the list that suits you. Right after, you join the waiting WhatsApp group for your list.",
    cards: [
      {
        tag: "List 1",
        title: "First users",
        description:
          "For those who want to pay, send money and travel with Kossiarou from day one.",
        bullets: [
          "Access to the app as soon as we open in your country",
          "Waiting WhatsApp group: news and dates before everyone else",
          "A first-user perk, revealed before we open",
        ],
        cta: "Sign up as a first user",
        imageAlt: "A man and a woman look at a smartphone screen together",
      },
      {
        tag: "List 2",
        title: "Become an ambassador",
        description:
          "Do you run a market, a school, an association or an online community? Spread the word about Kossiarou around you.",
        bullets: [
          "A commission per active customer, amount announced before we open",
          "Personal link, communication kit and QR code",
          "Dashboard and a dedicated Kossiarou contact",
        ],
        cta: "Apply as an ambassador",
        imageAlt: "Two young women laugh while looking at a phone, leaning on a railing",
      },
    ],
  },

  story: {
    eyebrow: "Four journeys, one app",
    title: "Wherever your money needs to go, Kossiarou takes it there.",
    description:
      "You deposit in CFA francs from your accounts, the conversion is instant, then you pay by bank transfer, with the order invoice, or directly with your card.",
    tabsLabel: "Journeys",
    disclaimer:
      "Illustrative scenarios. Demo rates (EUR: fixed rate of 655.957 FCFA). Final fees and timings will be announced at launch.",
    scenarios: [
      {
        label: "Travel to China",
        title: "Buy in Yiwu, pay from Cotonou or on the spot",
        persona: "Aïcha · trader, Cotonou → Yiwu, China",
        description:
          "Before leaving, Aïcha converts her CFA francs into yuan and pays her supplier by bank transfer from Benin, with the order invoice attached. On site, she pays for her hotel, taxis and small purchases with her card, with no fees.",
        steps: [
          { title: "Deposit", detail: "300,000 FCFA from her MTN MoMo, instant" },
          { title: "Conversion", detail: "XOF → CNY, instant" },
          {
            title: "Transfer to the supplier",
            detail: "From Benin, with the order invoice attached",
          },
          { title: "On site", detail: "Card payments, no fees" },
        ],
        imageAlt: "Smiling traveler on the phone in an airport waiting area",
        receipt: {
          status: "Delivered",
          amount: "3,000.00 CNY",
          debited: "≈ 234,000 FCFA debited",
          rows: [
            { label: "Beneficiary", value: "Yiwu Trading Co." },
            { label: "Supporting document", value: "Order invoice" },
            { label: "Timing", value: "Depends on the bank, up to 24 h" },
          ],
        },
      },
      {
        label: "A student child",
        title: "Pay tuition in Lyon, from Ouagadougou",
        persona: "Moussa · parent of a student, Ouagadougou → Lyon, France",
        description:
          "Moussa converts his CFA francs into euros at the fixed rate and pays his daughter’s tuition fees by bank transfer, directly to the school, with the enrollment invoice attached. Every month, he also sends her enough to cover her rent and groceries.",
        steps: [
          { title: "Deposit", detail: "655,957 FCFA from his bank account" },
          { title: "Conversion", detail: "XOF → EUR, fixed rate: 655.957 FCFA for €1" },
          {
            title: "Transfer to the school",
            detail: "Tuition fees, enrollment invoice attached",
          },
          { title: "Every month", detail: "A transfer to his daughter’s bank account" },
        ],
        imageAlt: "Smiling student sitting on a bench with her laptop on her knees",
        receipt: {
          status: "Delivered",
          amount: "1,000.00 EUR",
          debited: "= 655,957 FCFA converted · fixed rate",
          rows: [
            { label: "Beneficiary", value: "Institut Horizon, Lyon" },
            { label: "Supporting document", value: "Enrollment invoice" },
            { label: "Timing", value: "Depends on the bank, up to 24 h" },
          ],
        },
      },
      {
        label: "The Emirates",
        title: "Pay a supplier in Dubai, without leaving Abidjan",
        persona: "Koffi · importer, Abidjan → Dubai, United Arab Emirates",
        description:
          "Koffi imports phones and accessories. He converts his CFA francs into dirhams and pays his Dubai supplier by bank transfer, with the order invoice attached. When he travels there, he pays his expenses with his card, with no fees.",
        steps: [
          { title: "Deposit", detail: "1,500,000 FCFA from his Wave account, instant" },
          { title: "Conversion", detail: "XOF → AED, instant" },
          {
            title: "Transfer to the supplier",
            detail: "To his bank in Dubai, with the order invoice attached",
          },
          { title: "On site", detail: "Card payments, no fees" },
        ],
        imageAlt: "Smiling man in a shirt sitting on a low wall, jacket in hand",
        receipt: {
          status: "Delivered",
          amount: "9,000.00 AED",
          debited: "≈ 1,368,000 FCFA debited",
          rows: [
            { label: "Beneficiary", value: "Al Noor General Trading" },
            { label: "Supporting document", value: "Order invoice" },
            { label: "Timing", value: "Depends on the bank, up to 24 h" },
          ],
        },
      },
      {
        label: "The United States",
        title: "Dollars to work with the United States",
        persona: "Fatou · freelance developer, Dakar → clients in the United States",
        description:
          "Fatou’s American clients pay her by transfer to her USD account, credited to her dollar wallet. She pays for her subscriptions and online purchases with her USD virtual card, with no fees, topped up from her XOF balance when needed.",
        steps: [
          { title: "Receiving", detail: "Transfer from an American client to her USD account" },
          { title: "USD wallet", detail: "Amount credited to her dollar wallet" },
          {
            title: "USD virtual card",
            detail: "Subscriptions and online purchases, no fees",
          },
          { title: "Auto top-up", detail: "If needed, the card tops up from her XOF balance" },
        ],
        imageAlt: "Young woman focused on her laptop, next to a window",
        receipt: {
          status: "Received",
          amount: "1,200.00 USD",
          debited: "Credited to the USD wallet",
          rows: [
            { label: "Sender", value: "Northfield Studio LLC" },
            { label: "Account", value: "USD account in her name" },
            { label: "Timing", value: "Depends on the sender’s bank" },
          ],
        },
      },
    ],
  },

  app: {
    eyebrow: "The app in pictures",
    title: "Everything happens on your phone.",
    items: [
      {
        title: "One account, several currencies",
        description: "Your XOF balance and your EUR, USD, CNY and AED wallets in one place.",
      },
      {
        title: "Instant conversion",
        description: "The amount lands right away in the wallet of the currency you chose.",
      },
      {
        title: "Transfer with invoice",
        description:
          "Pay a verified beneficiary by bank transfer, with the invoice for your order.",
      },
      {
        title: "Bank card while traveling",
        description:
          "Pay on the spot with no fees using your virtual card, topped up from your XOF balance.",
      },
    ],
    screens: {
      balance: {
        mainBalance: "Main balance · Benin",
        mainBalanceValue: "485,000 FCFA",
        depositAccounts: "2 deposit accounts in my name",
        actions: ["Deposit", "Withdraw", "Convert", "Send"],
        cnyValue: "3,846.00 ¥",
        eurValue: "120.00 €",
        monthlyCap: "Monthly limit",
        monthlyCapValue: "3.2 M / 9.8 M",
      },
      convert: {
        title: "Convert",
        from: "From my XOF balance",
        fromValue: "300,000 FCFA",
        to: "I receive in CNY",
        toValue: "3,846.15 ¥",
        rate: "Rate",
        rateValue: "1 CNY ≈ 78 F",
        delay: "Timing",
        instant: "Instant",
        cta: "Convert 300,000 FCFA",
      },
      send: {
        title: "Send",
        beneficiary: "Yiwu Trading Co.",
        verified: "Verified",
        account: "Bank account · China · CNY",
        amount: "Amount",
        amountValue: "3,000.00 ¥",
        invoice: "Order invoice · added",
        invoiceFile: "invoice_yiwu_0948.pdf",
        delay: "Timing",
        delayValue: "Depends on the bank · up to 24 h",
        cta: "Send 3,000.00 ¥",
      },
      card: {
        title: "USD card",
        onSitePayment: "On-site payment",
        noFees: "No fees",
        onSiteValue: "−450.00 ¥",
        toggles: ["Online purchases", "Payments while traveling", "Auto top-up from XOF"],
      },
    },
  },

  features: {
    eyebrow: "Features",
    title: "A CFA franc account, open to the world.",
    items: [
      {
        title: "XOF account",
        description:
          "Deposit and withdraw from your Mobile Money and bank accounts in your name. Add as many as you like.",
        note: "MTN MoMo · Moov · Orange · Wave · banks soon",
      },
      {
        title: "Instant conversion",
        description:
          "Switch from XOF to EUR, USD, CNY or AED in an instant. Each currency has its own wallet.",
        note: "EUR · USD · CNY · AED",
      },
      {
        title: "International bank transfer",
        description:
          "Pay a supplier, a school or a loved one into their bank account. The beneficiary is verified once, with their bank details (RIB) or a link sent by email.",
        note: "Order invoice for every transfer",
      },
      {
        title: "XOF and USD virtual cards",
        description:
          "Online purchases and on-site payments, with no fees. The USD card tops up automatically from your XOF balance.",
        note: "Instant freeze · details protected by PIN",
      },
      {
        title: "USD and EUR accounts",
        description:
          "Receive transfers from the eurozone or the United States, credited to your wallets.",
        note: "Receiving only",
      },
      {
        title: "24/7 support",
        description:
          "An advisor in the app, in French and English. Every operation tracked, from sending to delivery.",
        note: "Reply within minutes",
      },
    ],
  },

  steps: {
    eyebrow: "Open an account",
    title: "Four steps, a few minutes.",
    items: [
      {
        title: "Your number",
        description:
          "Receive your code by WhatsApp or SMS. Got a referral code? Enter it here.",
      },
      {
        title: "Your PIN",
        description: "Six digits to log in and confirm every operation.",
      },
      {
        title: "Mandatory identity verification",
        description: "ID document and selfie, for every customer. Follow progress live.",
      },
      {
        title: "Your first deposit",
        description: "From your Mobile Money or your bank. You can then convert and pay.",
      },
    ],
  },

  pricing: {
    eyebrow: "Pricing and limits",
    title: "Limits that grow with your business.",
    description:
      "Everyone starts on Standard. Traders and entrepreneurs can ask for a higher limit by documenting the source of their funds and their activity.",
    upTo: "UP TO",
    feesTitle: "Fees and timings",
    feesIntro: "Fee amounts will be announced before we open.",
    feesHeaders: { operation: "OPERATION", fee: "FEES", delay: "TIMING" },
    feesRows: [
      { operation: "Mobile Money deposit", fee: "Announced at launch", free: false, delay: "Instant" },
      {
        operation: "Bank deposit",
        fee: "Announced at launch",
        free: false,
        delay: "Depends on the bank, up to 24 h",
      },
      {
        operation: "Conversion XOF → EUR / USD / CNY / AED",
        fee: "Announced at launch",
        free: false,
        delay: "Instant",
      },
      {
        operation: "Transfer to a beneficiary via bank account",
        fee: "Announced at launch",
        free: false,
        delay: "Depends on the bank, up to 24 h",
      },
      {
        operation: "Card payment (online or on site)",
        fee: "No fees",
        free: true,
        delay: "Immediate",
      },
      {
        operation: "Withdrawal to Mobile Money or bank",
        fee: "Announced at launch",
        free: false,
        delay: "Mobile Money: instant · bank: up to 24 h",
      },
    ],
    tiers: [
      {
        name: "Standard",
        badge: "Default",
        perOperation: "2,000,000 FCFA",
        perOperationNote: "per operation · ≈ €3,000",
        perMonth: "€15,000",
        perMonthNote: "per month · ≈ 9,839,355 FCFA",
        bullets: [
          "XOF account, conversion and transfers",
          "XOF and USD virtual cards",
          "Mandatory identity verification",
        ],
      },
      {
        name: "Pro",
        badge: "On request",
        perOperation: "€10,000",
        perOperationNote: "per operation",
        perMonth: "€50,000",
        perMonthNote: "per month",
        bullets: [
          "For traders and freelancers",
          "Supporting documents: source of funds, activity",
          "Review by our team",
        ],
      },
      {
        name: "Business",
        badge: "On request",
        perOperation: "€25,000",
        perOperationNote: "per operation",
        perMonth: "€150,000",
        perMonthNote: "per month",
        bullets: [
          "For importers and companies",
          "Beyond that: custom limit",
          "Dedicated contact",
        ],
      },
    ],
  },

  trust: {
    eyebrow: "Trust",
    title: "Before you trust us with your money.",
    cards: [
      {
        label: "Regulatory status",
        title: "Published by Kossiarou Technology SARL",
        text: "Our regulatory status and licenses will be published here before we open.",
        action: "Soon",
      },
      {
        label: "Licensed partners",
        title: "Licensed partners",
        text: "The partner banks and payment institutions will be presented here before we open.",
        action: "Soon",
      },
      {
        label: "Testimonials",
        title: "Their words, soon here",
        text: "The first user feedback will be published after we open, with their consent.",
        action: "Join a waitlist",
      },
    ],
  },

  faq: {
    eyebrow: "Security and questions",
    title: "Your money, under control.",
    securityPoints: [
      {
        title: "Mandatory identity verification",
        description: "For every customer, no exceptions.",
      },
      {
        title: "PIN for every operation",
        description: "Nothing leaves without your code.",
      },
      {
        title: "Accounts in your name",
        description: "Deposits and withdrawals only to your own accounts.",
      },
      {
        title: "Invoice for every transfer",
        description: "The order invoice goes with every bank payment.",
      },
    ],
    questions: [
      "What is Kossiarou?",
      "How do I pay a supplier in China from Benin or Côte d’Ivoire?",
      "How do I pay my child’s school fees in France?",
      "In which countries will Kossiarou be available?",
      "Which currencies can I pay in?",
      "What documents do I need to open an account?",
      "How long does a payment take?",
      "What happens after I sign up?",
    ],
    answers: [
      "Kossiarou is a mobile app that lets individuals and merchants in West Africa pay abroad, in Europe, China, the United States and Dubai, from their phone, without hunting for currency.",
      "You deposit from your Mobile Money or your bank, you see the amount in yuan before you confirm, then you pay your supplier by transfer with the order invoice.",
      "You add the school as a beneficiary once, then you pay the fees in euros by transfer, with the document required. You follow the payment until it arrives.",
      "Benin first, then Côte d’Ivoire, Burkina Faso, Togo, Mali and Senegal.",
      "Euro, US dollar, Chinese yuan and UAE dirham.",
      "A valid ID and a selfie taken in the app. For Pro and Business limits, documents showing your activity and the origin of your funds.",
      "The conversion is immediate. A transfer arrives depending on the beneficiary’s bank, usually within 24 hours.",
      "You join the WhatsApp group of the first users: you get the opening dates and priority access as soon as we launch in your country.",
    ],
  },

  signup: {
    title: "Be among the first.",
    description:
      "Choose your list, leave your WhatsApp number, then join the waiting group.",
    steps: [
      "Choose: first user or ambassador",
      "Enter your first name, your country and your number",
      "Join the waiting WhatsApp group for your list",
    ],
    firstUser: "First user",
    ambassador: "Ambassador",
    firstName: "First name",
    firstNamePlaceholder: "e.g. Aïcha",
    whatsapp: "WhatsApp number",
    whatsappPlaceholder: "01 97 00 00 00",
    countryCode: "Country code",
    intentLabel: "What you mostly want to do",
    intents: [
      "Pay suppliers in China",
      "Send money to a student child",
      "Travel to the Emirates",
      "Pay in the United States",
    ],
    submit: "Sign up and join the WhatsApp group",
    submitAmbassadorSuffix: " (ambassador)",
    thanks: "Thank you! We’ll be in touch soon.",
    referral: "Got a referral code? You’ll enter it when you sign up in the app.",
  },

  notFound: {
    metaTitle: "Page not found — Kossiarou",
    code: "404",
    title: "This page doesn’t exist.",
    text: "The link may be wrong, or the page may have moved. Go back to the home page or join a waitlist.",
    home: "Back to home",
    waitlist: "Join a waitlist",
  },

  consent: {
    title: "Cookies and audience measurement",
    text: "With your consent, we measure visits and sign-ups to improve the site and our ads. Refusing is as easy as accepting.",
    accept: "Accept",
    refuse: "Refuse",
    privacy: "Privacy (in French)",
    privacyHref: "/fr/confidentialite",
  },

  footer: {
    tagline: "“Kossiarou” means “payment” in Bariba. Pay abroad, no blocks.",
    cookieSettings: "Cookie settings",
    columns: [
      {
        title: "PRODUCT",
        showContact: false,
        links: [
          { href: "#app", label: "The app" },
          { href: "#tarifs", label: "Pricing" },
          { href: "#listes", label: "Waitlists" },
        ],
      },
      {
        title: "HELP",
        showContact: true,
        links: [{ href: "#faq", label: "FAQ" }],
      },
      {
        title: "LEGAL",
        showContact: false,
        links: [
          { href: "/fr/mentions-legales", label: "Legal notice (in French)" },
          { href: "/fr/confidentialite", label: "Privacy (in French)" },
          { href: "/fr/conditions", label: "Terms of use (in French)" },
        ],
      },
    ],
    legal:
      "© 2026 Kossiarou Technology SARL, Parakou, Benin. Regulatory status and licensed partners will be published before we open.",
  },
};
