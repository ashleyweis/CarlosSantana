/**
 * Phase 1A contact & branding placeholders.
 * Replace these literal tokens with real values before launch.
 */
export const placeholders = {
  phone: "(Carlos Phone)",
  email: "(Carlos Email)",
  officeAddress: "(Carlos Office Address)",
  domain: "(Carlos Domain)",
  instagram: "(Carlos Instagram)",
  facebook: "(Carlos Facebook)",
  /** Browse listings CTA — replace with real public MLS search URL */
  mlsPublicSearchUrl: "(Carlos MLS Public Search URL)",
} as const;

export const broker = {
  name: "Carlos Santana",
  title: "Florida Real Estate Broker",
  license: "Lic.#BK3452049",
  stellarMls: "Stellar MLS #272561870",
  oscar: "Oscar / ORRA",
  oscarFull: "Oscar Member (Osceola Association of Realtors)",
  brokerage: "Realty Services of America",
  brokerageShort: "RSA",
  languages: ["EN", "ES", "DE", "FR"] as const,
  languagesSpoken: "English · Español · Deutsch · Français",
  headshot: "/carlos-santana.jpg",
  tagline:
    "Florida broker for buyers, sellers, and investors — honest guidance, no pressure.",
} as const;

export const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/buy", label: "Buy" },
  { href: "/sell", label: "Sell" },
  { href: "/investors", label: "Investors" },
  { href: "/contact", label: "Contact" },
] as const;
