import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { aboutTeaser, bioCredentials, bioParagraphs } from "../../content/bio";
import { broker } from "../../content/site";

export const metadata: Metadata = {
  title: "About",
  description: aboutTeaser,
};

export default function AboutPage() {
  return (
    <div className="bg-white">
      <section className="bg-brand-cream/70">
        <div className="mx-auto grid max-w-6xl items-center gap-10 px-4 py-14 sm:px-6 lg:grid-cols-[1fr_320px]">
          <div>
            <p className="text-sm font-semibold uppercase tracking-wider text-brand-gold">
              About
            </p>
            <h1 className="mt-2 text-3xl font-bold text-brand-blue-deep sm:text-4xl">
              {broker.name}
            </h1>
            <p className="mt-2 text-lg text-brand-slate">{broker.title}</p>
            <p className="mt-4 text-brand-slate">{broker.tagline}</p>
          </div>
          <Image
            src={broker.headshot}
            alt={`${broker.name}, Florida Real Estate Broker`}
            width={320}
            height={400}
            priority
            className="mx-auto w-full max-w-xs rounded-xl object-cover shadow-lg ring-4 ring-brand-gold/25"
          />
        </div>
      </section>

      <section className="mx-auto max-w-3xl px-4 py-12 sm:px-6">
        <div className="space-y-5 text-base leading-relaxed text-brand-slate">
          {bioParagraphs.map((p) => (
            <p key={p.slice(0, 40)}>{p}</p>
          ))}
        </div>

        <h2 className="mt-12 text-xl font-bold text-brand-blue-deep">
          Credentials & affiliations
        </h2>
        <ul className="mt-4 list-inside list-disc space-y-2 text-brand-slate">
          {bioCredentials.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>

        <div className="mt-10 flex flex-wrap gap-3">
          <Link
            href="/contact"
            className="rounded-md bg-brand-blue px-5 py-3 text-sm font-semibold text-white hover:bg-brand-blue-mid"
          >
            Contact Carlos
          </Link>
          <Link
            href="/buy"
            className="rounded-md border border-brand-blue px-5 py-3 text-sm font-semibold text-brand-blue hover:bg-brand-cream"
          >
            Explore buying
          </Link>
        </div>
      </section>
    </div>
  );
}
