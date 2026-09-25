import Link from "next/link";
import { broker, placeholders } from "../content/site";

export default function Footer() {
  return (
    <footer className="mt-auto border-t border-slate-200 bg-brand-blue-deep text-slate-100">
      <div className="mx-auto grid max-w-6xl gap-8 px-4 py-12 sm:px-6 md:grid-cols-3">
        <div>
          <p className="text-lg font-bold text-white">{broker.name}</p>
          <p className="mt-1 text-sm text-brand-gold-soft">{broker.title}</p>
          <p className="mt-3 text-sm text-slate-300">
            {broker.license} · {broker.brokerageShort}
          </p>
          <p className="mt-1 text-sm text-slate-300">{broker.stellarMls}</p>
          <p className="mt-1 text-sm text-slate-300">{broker.oscarFull}</p>
        </div>

        <div>
          <p className="text-sm font-semibold uppercase tracking-wide text-brand-gold">
            Contact
          </p>
          <ul className="mt-3 space-y-2 text-sm text-slate-200">
            <li>
              <span className="text-slate-400">Phone: </span>
              {placeholders.phone}
            </li>
            <li>
              <span className="text-slate-400">Email: </span>
              {placeholders.email}
            </li>
            <li>
              <span className="text-slate-400">Office: </span>
              {placeholders.officeAddress}
            </li>
            <li>
              <span className="text-slate-400">Web: </span>
              {placeholders.domain}
            </li>
          </ul>
        </div>

        <div>
          <p className="text-sm font-semibold uppercase tracking-wide text-brand-gold">
            Connect
          </p>
          <ul className="mt-3 space-y-2 text-sm text-slate-200">
            <li>Instagram: {placeholders.instagram}</li>
            <li>Facebook: {placeholders.facebook}</li>
            <li>
              MLS search:{" "}
              <a href="#" className="underline decoration-brand-gold/60 hover:text-white">
                {placeholders.mlsPublicSearchUrl}
              </a>
            </li>
          </ul>
          <p className="mt-4">
            <Link
              href="/privacy"
              className="text-sm text-brand-gold-soft underline-offset-2 hover:underline"
            >
              Privacy Policy
            </Link>
          </p>
        </div>
      </div>
      <div className="border-t border-white/10 py-4 text-center text-xs text-slate-400">
        © {new Date().getFullYear()} {broker.name} · {broker.brokerage} · Phase
        1A marketing site
      </div>
    </footer>
  );
}
