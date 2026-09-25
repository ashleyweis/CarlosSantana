"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { broker, navLinks, placeholders } from "../content/site";

export default function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-slate-200/80 bg-white/95 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 py-3 sm:px-6">
        <Link href="/" className="group flex flex-col leading-tight">
          <span className="text-lg font-bold tracking-tight text-brand-blue group-hover:text-brand-blue-mid">
            {broker.name}
          </span>
          <span className="text-xs font-medium text-brand-gold">
            {broker.title} · {broker.license}
          </span>
        </Link>

        <nav className="hidden items-center gap-1 md:flex" aria-label="Main">
          {navLinks.map((link) => {
            const active =
              link.href === "/"
                ? pathname === "/"
                : pathname.startsWith(link.href);
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`rounded-md px-3 py-2 text-sm font-medium transition ${
                  active
                    ? "bg-brand-blue text-white"
                    : "text-brand-slate hover:bg-brand-cream hover:text-brand-blue"
                }`}
              >
                {link.label}
              </Link>
            );
          })}
          <a
            href="#"
            aria-label={`Browse listings — ${placeholders.mlsPublicSearchUrl}`}
            className="ml-2 rounded-md border border-brand-gold bg-brand-gold px-3 py-2 text-sm font-semibold text-brand-blue-deep shadow-sm hover:bg-brand-gold-soft"
          >
            Browse listings
          </a>
        </nav>

        <button
          type="button"
          className="inline-flex items-center justify-center rounded-md border border-slate-200 p-2 text-brand-blue md:hidden"
          aria-expanded={open}
          aria-controls="mobile-nav"
          onClick={() => setOpen((v) => !v)}
        >
          <span className="sr-only">Toggle menu</span>
          <svg
            className="h-5 w-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            aria-hidden
          >
            {open ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </button>
      </div>

      {open && (
        <div
          id="mobile-nav"
          className="border-t border-slate-100 bg-white px-4 py-3 md:hidden"
        >
          <nav className="flex flex-col gap-1" aria-label="Mobile">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="rounded-md px-3 py-2 text-sm font-medium text-brand-slate hover:bg-brand-cream"
              >
                {link.label}
              </Link>
            ))}
            <a
              href="#"
              aria-label={`Browse listings — ${placeholders.mlsPublicSearchUrl}`}
              className="mt-1 rounded-md bg-brand-gold px-3 py-2 text-center text-sm font-semibold text-brand-blue-deep"
              onClick={() => setOpen(false)}
            >
              Browse listings
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
