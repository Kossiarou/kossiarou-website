import type { Dictionary } from "./fr";

// Typed on the French dictionary: a missing or extra key is a compile error.
// Amounts use English number formatting (3,000.00) while keeping the same values as FR.
export const en: Dictionary = {
  meta: {
    title: "Kossiarou — Your CFA francs travel. So can you.",
    description:
      "Kossiarou instantly converts your money into euros, dollars, yuan or dirhams. Pay your suppliers by bank transfer, travel with your card, send money to your loved ones.",
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
  },

  hero: {
    badge: "Coming soon · Benin, Burkina Faso, Côte d’Ivoire, Mali, Senegal, Togo",
    titleBefore: "Your CFA francs ",
    titleHighlight: "travel",
    titleAfter: ". So can you, without carrying cash.",
    description:
      "Kossiarou instantly converts your money into euros, dollars, yuan or dirhams. Pay your suppliers by bank transfer from home, or on the spot with your card, and send money to your children studying abroad.",
    primaryCta: "Become a first user",
    secondaryCta: "Become an ambassador",
    conversionLabel: "Instant conversion",
    conversionValue: "300,000 F → 3,846 ¥",
    paymentDelivered: "Payment delivered",
    paymentAmount: "3,000.00 CNY",
    paymentBeneficiary: "Yiwu Trading Co.",
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
          "First-user perk: [BENEFIT]",
        ],
        cta: "Sign up as a first user",
      },
      {
        tag: "List 2",
        title: "Become an ambassador",
        description:
          "Do you run a market, a school, an association or an online community? Spread the word about Kossiarou around you.",
        bullets: [
          "Commission: [COMMISSION] per active customer",
          "Personal link, communication kit and QR code",
          "Dashboard and a dedicated Kossiarou contact",
        ],
        cta: "Apply as an ambassador",
      },
    ],
  },

  story: {
    eyebrow: "Four journeys, one app",
    title: "Wherever your money needs to go, Kossiarou takes it there.",
    description:
      "You deposit in CFA francs from your accounts, the conversion is instant, then you pay by bank transfer, with the order invoice, or directly with your card.",
    tabsLabel: "Destinations",
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
        title: "Pay tuition fees without the stress",
        persona: "Marcel · parent, Porto-Novo → Lyon, France",
        description:
          "Marcel converts his CFA francs into euros at the fixed rate and pays his daughter’s tuition directly into the university’s account. Every month, he sends her allowance to her euro account.",
        steps: [
          { title: "Deposit", detail: "330,000 FCFA from his bank account, instant" },
          { title: "Conversion", detail: "XOF → EUR at the fixed rate, 655.957 FCFA for €1" },
          {
            title: "Transfer to the school",
            detail: "To the university’s bank details, fee notice attached",
          },
          { title: "Monthly allowance", detail: "Sent to his daughter’s euro account" },
        ],
        receipt: {
          status: "Delivered",
          amount: "500.00 EUR",
          debited: "≈ 327,979 FCFA debited",
          rows: [
            { label: "Beneficiary", value: "Université de Lyon" },
            { label: "Supporting document", value: "Tuition fee notice" },
            { label: "Timing", value: "Depends on the bank, up to 24 h" },
          ],
        },
      },
      {
        label: "The Emirates",
        title: "Order from Dubai, pay from Cotonou",
        persona: "Fatou · reseller, Cotonou → Dubai, United Arab Emirates",
        description:
          "Fatou converts her CFA francs into dirhams and pays her Dubai supplier by bank transfer, backed by an invoice. When she travels, she pays for her hotel and purchases with her card, with no fees.",
        steps: [
          { title: "Deposit", detail: "330,000 FCFA from her MTN MoMo, instant" },
          { title: "Conversion", detail: "XOF → AED, instant" },
          {
            title: "Transfer to the supplier",
            detail: "From Benin, with the order invoice attached",
          },
          { title: "On site", detail: "Card payments, no fees" },
        ],
        receipt: {
          status: "Delivered",
          amount: "2,000.00 AED",
          debited: "≈ 326,000 FCFA debited",
          rows: [
            { label: "Beneficiary", value: "Al Noor Trading LLC" },
            { label: "Supporting document", value: "Order invoice" },
            { label: "Timing", value: "Depends on the bank, up to 24 h" },
          ],
        },
      },
      {
        label: "The United States",
        title: "Pay for subscriptions and purchases in dollars",
        persona: "Koffi · developer, Cotonou → United States",
        description:
          "Koffi converts his CFA francs into dollars and tops up his USD virtual card for his online tools and purchases. He also receives payments from his American clients directly into his USD wallet.",
        steps: [
          { title: "Deposit", detail: "480,000 FCFA from his MTN MoMo, instant" },
          { title: "Conversion", detail: "XOF → USD, instant" },
          {
            title: "USD virtual card",
            detail: "Topped up automatically from his XOF balance",
          },
          { title: "Receiving", detail: "Transfers from the US credited to his wallet" },
        ],
        receipt: {
          status: "Credited",
          amount: "800.00 USD",
          debited: "≈ 480,000 FCFA debited",
          rows: [
            { label: "Destination", value: "USD virtual card" },
            { label: "Top-up", value: "Automatic from the XOF balance" },
            { label: "Timing", value: "Instant" },
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
        note: "MTN MoMo · Moov · Orange · Wave · [BANKS]",
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
      "In which countries can I open an account?",
      "Which currencies can I convert to and pay in?",
      "Which documents do I need to provide?",
      "Can I pay from Benin or on the spot?",
      "How long does a transfer take?",
      "What happens after I sign up?",
    ],
    answerSoon: "Answer coming soon.",
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

  footer: {
    tagline: "“Kossiarou” means “payment” in Bariba.",
    taglineOwner: "An app by KryptaPay.",
    columns: [
      {
        title: "PRODUCT",
        links: [
          { href: "#app", label: "The app" },
          { href: "#tarifs", label: "Pricing" },
          { href: "#listes", label: "Waitlists" },
        ],
      },
      {
        title: "HELP",
        links: [{ href: "#faq", label: "FAQ" }],
      },
      {
        title: "LEGAL",
        links: [
          { href: "#", label: "Legal notice" },
          { href: "#", label: "Privacy" },
          { href: "#", label: "Terms of use" },
        ],
      },
    ],
    photoCredit:
      "Photos: Ali Mkumbwa, Gylain Omer, Yingchou Han, Joyce Busola, David Rotimi and Sandisk, on Unsplash (Unsplash license).",
  },
};
