import type { Metadata } from "next";
import ContactForm from "../../components/ContactForm";
import { broker, placeholders } from "../../content/site";

export const metadata: Metadata = {
  title: "Contact",
  description: `Contact ${broker.name} — ${placeholders.phone}, ${placeholders.email}.`,
};

export default function ContactPage() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6">
      <div className="max-w-2xl">
        <p className="text-sm font-semibold uppercase tracking-wider text-brand-gold">
          Contact
        </p>
        <h1 className="mt-2 text-3xl font-bold text-brand-blue-deep sm:text-4xl">
          Let&apos;s talk
        </h1>
        <p className="mt-4 text-brand-slate">
          Share a little about your goals. Phase 1A shows a success message on
          submit; Formspree (or similar) can be wired later — see the README.
        </p>
      </div>

      <div className="mt-10 grid gap-10 lg:grid-cols-2">
        <ContactForm />
        <aside className="rounded-xl border border-slate-200 bg-brand-cream/50 p-6 sm:p-8">
          <h2 className="text-lg font-bold text-brand-blue-deep">
            Direct details
          </h2>
          <dl className="mt-4 space-y-3 text-sm text-brand-slate">
            <div>
              <dt className="font-semibold text-brand-blue">Phone</dt>
              <dd>{placeholders.phone}</dd>
            </div>
            <div>
              <dt className="font-semibold text-brand-blue">Email</dt>
              <dd>{placeholders.email}</dd>
            </div>
            <div>
              <dt className="font-semibold text-brand-blue">Office</dt>
              <dd>{placeholders.officeAddress}</dd>
            </div>
            <div>
              <dt className="font-semibold text-brand-blue">Website</dt>
              <dd>{placeholders.domain}</dd>
            </div>
            <div>
              <dt className="font-semibold text-brand-blue">Instagram</dt>
              <dd>{placeholders.instagram}</dd>
            </div>
            <div>
              <dt className="font-semibold text-brand-blue">Facebook</dt>
              <dd>{placeholders.facebook}</dd>
            </div>
            <div>
              <dt className="font-semibold text-brand-blue">MLS public search</dt>
              <dd>
                <a href="#" className="underline decoration-brand-gold">
                  {placeholders.mlsPublicSearchUrl}
                </a>
              </dd>
            </div>
          </dl>
          <p className="mt-6 text-xs text-slate-500">
            {broker.license} · {broker.brokerage} · {broker.stellarMls}
          </p>
        </aside>
      </div>
    </div>
  );
}
