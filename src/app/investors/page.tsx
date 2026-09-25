import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Investors",
  description:
    "Certified Investors Advisor support for local and international Florida real estate investors.",
};

export default function InvestorsPage() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-14 sm:px-6">
      <p className="text-sm font-semibold uppercase tracking-wider text-brand-gold">
        Investors
      </p>
      <h1 className="mt-2 text-3xl font-bold text-brand-blue-deep sm:text-4xl">
        Invest with local clarity
      </h1>
      <p className="mt-4 text-lg leading-relaxed text-brand-slate">
        As a Certified Investors Advisor, Carlos helps local and international
        clients evaluate opportunities with Florida market context —
        personalized service, strong negotiation, and straightforward
        conversations.
      </p>
      <ul className="mt-8 space-y-3 text-brand-slate">
        <li className="rounded-lg border border-slate-200 bg-brand-cream/40 px-4 py-3">
          Certified Investors Advisor
        </li>
        <li className="rounded-lg border border-slate-200 bg-brand-cream/40 px-4 py-3">
          Florida certified — local and international
        </li>
        <li className="rounded-lg border border-slate-200 bg-brand-cream/40 px-4 py-3">
          Multilingual support: English · Español · Deutsch · Français
        </li>
      </ul>
      <Link
        href="/contact"
        className="mt-10 inline-flex rounded-md bg-brand-blue px-5 py-3 text-sm font-semibold text-white hover:bg-brand-blue-mid"
      >
        Talk investment goals
      </Link>
    </div>
  );
}
