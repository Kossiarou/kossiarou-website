import type { Dictionary } from "./fr";

// Typed on the French dictionary: a missing or extra key is a compile error.
// Amounts use English number formatting (3,000.00) while keeping the same values as FR.
export const en: Dictionary = {
  meta: {
    title: "Kossiarou — Your CFA francs travel. So can you.",
    description:
      "Kossiarou instantly converts your money into euros, dollars, yuan or dirhams. Pay your suppliers by bank transfer, travel with your card, send money to your loved ones.",
    ogTitle: "Kossiarou",
    ogDescription: "Your CFA francs travel. So can you.",
    ogImageAlt:
      "Kossiarou logo and the message “Vos francs CFA voyagent. Vous aussi.” (Your CFA francs travel. So can you.)",
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
    imageAlt: "Smiling shopkeeper in her shop, phone in hand",
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
        imageAlt: "Smiling student on her campus, phone in hand",
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
        imageAlt: "Smiling merchant in a goods warehouse, phone in hand",
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
        imageAlt: "Young woman working on her laptop, phone beside her",
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
      { operation: "Mobile Money deposit", fee: "[FEES]", free: false, delay: "Instant" },
      {
        operation: "Bank deposit",
        fee: "[FEES]",
        free: false,
        delay: "Depends on the bank, up to 24 h",
      },
      {
        operation: "Conversion XOF → EUR / USD / CNY / AED",
        fee: "[FEES]",
        free: false,
        delay: "Instant",
      },
      {
        operation: "Transfer to a beneficiary via bank account",
        fee: "[FEES]",
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
        fee: "[FEES]",
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
        title: "A KryptaPay service",
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
      "In which countries can I open an account?",
      "Which currencies can I convert to and pay in?",
      "Which documents do I need to provide?",
      "Can I pay from Benin or on the spot?",
      "How long does a transfer take?",
      "What happens after I sign up?",
    ],
    answers: [
      "At launch: Benin, Burkina Faso, Côte d’Ivoire, Mali, Senegal and Togo. Opening dates are announced first in the waiting WhatsApp group.",
      "From your CFA franc (XOF) balance, you convert into euros, US dollars, yuan and dirhams. Each currency has its own wallet.",
      "An ID document and a selfie, for every customer. For a Pro or Business limit, you are asked for documents showing the source of your funds and your activity.",
      "Both. From home, you pay your suppliers by bank transfer, with the order invoice attached. On site, you pay with your virtual card, with no fees.",
      "Depending on the beneficiary’s bank, up to 24 h. You track every transfer in the app, from sending to delivery.",
      "You join the waiting WhatsApp group for your list. There you get the news and the opening date in your country before everyone else.",
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
    legal:
      "Kossiarou is a KryptaPay service. Regulatory status and licensed partners will be published before we open. © 2026 KryptaPay.",
    photoCredit:
      "Photos: Ali Mkumbwa, Gylain Omer, Yingchou Han, Joyce Busola, David Rotimi and Sandisk, on Unsplash (Unsplash license).",
  },
};
