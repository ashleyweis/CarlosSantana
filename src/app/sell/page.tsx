import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Sell",
  description:
    "List and sell with Carlos Santana — honest pricing conversations and full-service support.",
};

export default function SellPage() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-14 sm:px-6">
      <p className="text-sm font-semibold uppercase tracking-wider text-brand-gold">
        Sellers
      </p>
      <h1 className="mt-2 text-3xl font-bold text-brand-blue-deep sm:text-4xl">
        Sell with a trusted partner
      </h1>
      <p className="mt-4 text-lg leading-relaxed text-brand-slate">
        Carlos pairs hospitality-trained service with strong negotiation so you
        feel informed at every step. Expect clear communication, lasting
        relationships, and never a pressured pitch.
      </p>
      <ul className="mt-8 space-y-3 text-brand-slate">
        <li className="rounded-lg border border-slate-200 bg-brand-cream/40 px-4 py-3">
          Honest pricing and preparation guidance
        </li>
        <li className="rounded-lg border border-slate-200 bg-brand-cream/40 px-4 py-3">
          Marketing through RSA tools and Stellar MLS exposure
        </li>
        <li className="rounded-lg border border-slate-200 bg-brand-cream/40 px-4 py-3">
          Negotiation focused on your goals
        </li>
      </ul>
      <Link
        href="/contact"
        className="mt-10 inline-flex rounded-md bg-brand-blue px-5 py-3 text-sm font-semibold text-white hover:bg-brand-blue-mid"
      >
        Request a seller consult
      </Link>
    </div>
  );
}
