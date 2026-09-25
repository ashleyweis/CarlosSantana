import Image from "next/image";
import Link from "next/link";
import PropertyCard from "../components/PropertyCard";
import { aboutTeaser } from "../content/bio";
import { featuredProperties } from "../content/featured";
import { broker, placeholders } from "../content/site";

const serviceCards = [
  {
    href: "/buy",
    title: "Buy",
    blurb:
      "Local guidance for new and existing homes across Osceola and Central Florida — clear options, strong negotiation, no pressure.",
  },
  {
    href: "/sell",
    title: "Sell",
    blurb:
      "Full-service listing support with honest pricing conversations and a hospitality-minded client experience.",
  },
  {
    href: "/investors",
    title: "Invest",
    blurb:
      "Certified Investors Advisor perspective for local and international buyers building Florida portfolios.",
  },
];

export default function HomePage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-to-br from-brand-cream via-white to-slate-50">
        <div className="mx-auto grid max-w-6xl items-center gap-10 px-4 py-14 sm:px-6 lg:grid-cols-2 lg:py-20">
          <div>
            <p className="text-sm font-semibold uppercase tracking-wider text-brand-gold">
              {broker.brokerage} · {broker.license}
            </p>
            <h1 className="mt-3 text-3xl font-bold tracking-tight text-brand-blue-deep sm:text-4xl lg:text-5xl">
              {broker.name}
            </h1>
            <p className="mt-4 text-lg text-brand-slate sm:text-xl">
              {broker.tagline}
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                href="/contact"
                className="rounded-md bg-brand-blue px-5 py-3 text-sm font-semibold text-white shadow-sm hover:bg-brand-blue-mid"
              >
                Contact
              </Link>
              <a
                href="#"
                aria-label={`Browse listings — ${placeholders.mlsPublicSearchUrl}`}
                className="rounded-md border-2 border-brand-gold bg-white px-5 py-3 text-sm font-semibold text-brand-blue-deep hover:bg-brand-gold-soft"
              >
                Browse listings
              </a>
            </div>
            <p className="mt-3 text-xs text-slate-500">
              Browse listings → {placeholders.mlsPublicSearchUrl}
            </p>
          </div>
          <div className="relative mx-auto w-full max-w-md">
            <div className="absolute -inset-3 rounded-2xl bg-brand-gold/20 blur-sm" />
            <Image
              src={broker.headshot}
              alt={`${broker.name}, Florida Real Estate Broker`}
              width={640}
              height={800}
              priority
              className="relative z-10 w-full rounded-2xl border-4 border-white object-cover shadow-xl"
            />
          </div>
        </div>
      </section>

      {/* Trust strip */}
      <section className="border-y border-slate-200 bg-brand-blue text-white">
        <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-center gap-x-6 gap-y-2 px-4 py-4 text-center text-sm sm:px-6">
          <span className="font-semibold">{broker.license}</span>
          <span className="hidden text-brand-gold sm:inline" aria-hidden>
            ·
          </span>
          <span>{broker.oscar}</span>
          <span className="hidden text-brand-gold sm:inline" aria-hidden>
            ·
          </span>
          <span>{broker.stellarMls}</span>
          <span className="hidden text-brand-gold sm:inline" aria-hidden>
            ·
          </span>
          <span>{broker.brokerage}</span>
          <span className="hidden text-brand-gold sm:inline" aria-hidden>
            ·
          </span>
          <span className="inline-flex gap-2 font-semibold tracking-wide text-brand-gold-soft">
            {broker.languages.map((lang) => (
              <span key={lang}>{lang}</span>
            ))}
          </span>
        </div>
      </section>

      {/* Buy / Sell / Invest */}
      <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
        <h2 className="text-center text-2xl font-bold text-brand-blue-deep sm:text-3xl">
          How Carlos can help
        </h2>
        <p className="mx-auto mt-2 max-w-2xl text-center text-brand-slate">
          Personalized service for buyers, sellers, and investors — rooted in
          Central Florida local knowledge.
        </p>
        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {serviceCards.map((card) => (
            <Link
              key={card.href}
              href={card.href}
              className="group rounded-xl border border-slate-200 bg-white p-6 shadow-sm transition hover:border-brand-gold hover:shadow-md"
            >
              <h3 className="text-xl font-bold text-brand-blue group-hover:text-brand-blue-mid">
                {card.title}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-brand-slate">
                {card.blurb}
              </p>
              <span className="mt-4 inline-block text-sm font-semibold text-brand-gold">
                Learn more →
              </span>
            </Link>
          ))}
        </div>
      </section>

      {/* Featured */}
      <section className="bg-brand-cream/60 py-16">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <div className="flex flex-wrap items-end justify-between gap-4">
            <div>
              <h2 className="text-2xl font-bold text-brand-blue-deep sm:text-3xl">
                Featured properties
              </h2>
              <p className="mt-2 text-sm text-brand-slate">
                Placeholder cards for Phase 1A — edit{" "}
                <code className="rounded bg-white px-1 text-xs">
                  src/content/featured.ts
                </code>
                .
              </p>
            </div>
            <a
              href="#"
              aria-label={`Browse listings — ${placeholders.mlsPublicSearchUrl}`}
              className="rounded-md bg-brand-gold px-4 py-2 text-sm font-semibold text-brand-blue-deep hover:bg-brand-gold-soft"
            >
              Browse listings
            </a>
          </div>
          <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {featuredProperties.map((p) => (
              <PropertyCard key={p.id} property={p} />
            ))}
          </div>
        </div>
      </section>

      {/* About teaser */}
      <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
        <div className="grid items-center gap-10 lg:grid-cols-2">
          <div className="relative mx-auto w-full max-w-sm lg:order-2">
            <Image
              src={broker.headshot}
              alt={`${broker.name} headshot`}
              width={480}
              height={600}
              className="w-full rounded-xl object-cover shadow-lg ring-4 ring-brand-gold/30"
            />
          </div>
          <div className="lg:order-1">
            <h2 className="text-2xl font-bold text-brand-blue-deep sm:text-3xl">
              About Carlos
            </h2>
            <p className="mt-4 leading-relaxed text-brand-slate">{aboutTeaser}</p>
            <Link
              href="/about"
              className="mt-6 inline-flex rounded-md border border-brand-blue px-4 py-2 text-sm font-semibold text-brand-blue hover:bg-brand-cream"
            >
              Read full bio
            </Link>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="bg-brand-blue py-14 text-white">
        <div className="mx-auto max-w-3xl px-4 text-center sm:px-6">
          <h2 className="text-2xl font-bold sm:text-3xl">
            Ready for honest guidance?
          </h2>
          <p className="mt-3 text-brand-gold-soft">
            Reach out for buyers, sellers, and investors — never pressured.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <Link
              href="/contact"
              className="rounded-md bg-brand-gold px-5 py-3 text-sm font-semibold text-brand-blue-deep hover:bg-brand-gold-soft"
            >
              Contact Carlos
            </Link>
            <a
              href="#"
              aria-label={`Browse listings — ${placeholders.mlsPublicSearchUrl}`}
              className="rounded-md border border-white/40 px-5 py-3 text-sm font-semibold text-white hover:bg-white/10"
            >
              Browse listings
            </a>
          </div>
          <p className="mt-4 text-sm text-slate-300">
            {placeholders.phone} · {placeholders.email}
          </p>
        </div>
      </section>
    </>
  );
}
