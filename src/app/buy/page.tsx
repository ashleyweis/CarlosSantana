import type { Metadata } from "next";
import Link from "next/link";
import { placeholders } from "../../content/site";

export const metadata: Metadata = {
  title: "Buy",
  description:
    "Work with Carlos Santana to buy new or existing homes in Osceola and Central Florida.",
};

export default function BuyPage() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-14 sm:px-6">
      <p className="text-sm font-semibold uppercase tracking-wider text-brand-gold">
        Buyers
      </p>
      <h1 className="mt-2 text-3xl font-bold text-brand-blue-deep sm:text-4xl">
        Buy with confidence
      </h1>
      <p className="mt-4 text-lg leading-relaxed text-brand-slate">
        Whether you want a new construction home or an existing property,
        Carlos brings local Osceola and Central Florida knowledge, personalized
        service, and strong negotiation — with honest guidance and no pressure.
      </p>
      <ul className="mt-8 space-y-3 text-brand-slate">
        <li className="rounded-lg border border-slate-200 bg-brand-cream/40 px-4 py-3">
          New and existing homes
        </li>
        <li className="rounded-lg border border-slate-200 bg-brand-cream/40 px-4 py-3">
          Local + international buyer support (EN · ES · DE · FR)
        </li>
        <li className="rounded-lg border border-slate-200 bg-brand-cream/40 px-4 py-3">
          Full-service representation with RSA mentorship and tools
        </li>
      </ul>
      <div className="mt-10 flex flex-wrap gap-3">
        <Link
          href="/contact"
          className="rounded-md bg-brand-blue px-5 py-3 text-sm font-semibold text-white hover:bg-brand-blue-mid"
        >
          Start a buyer conversation
        </Link>
        <a
          href="#"
          aria-label={`Browse listings — ${placeholders.mlsPublicSearchUrl}`}
          className="rounded-md border-2 border-brand-gold px-5 py-3 text-sm font-semibold text-brand-blue-deep hover:bg-brand-gold-soft"
        >
          Browse listings
        </a>
      </div>
      <p className="mt-3 text-xs text-slate-500">
        Public search placeholder: {placeholders.mlsPublicSearchUrl}
      </p>
    </div>
  );
}
