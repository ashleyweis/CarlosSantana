"use client";

import { FormEvent, useState } from "react";
import { placeholders } from "../content/site";

export default function ContactForm() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    // Phase 1A: client-side success only. Wire Formspree later (see README).
    setSubmitted(true);
  }

  if (submitted) {
    return (
      <div
        role="status"
        className="rounded-xl border border-brand-gold/40 bg-brand-cream p-8 text-center"
      >
        <p className="text-lg font-semibold text-brand-blue">
          Thank you — your message was received.
        </p>
        <p className="mt-2 text-sm text-brand-slate">
          This is a demo confirmation (no backend yet). Carlos will follow up
          once Formspree or another form endpoint is connected. You can also
          reach him at {placeholders.phone} or {placeholders.email}.
        </p>
        <button
          type="button"
          onClick={() => setSubmitted(false)}
          className="mt-6 rounded-md border border-brand-blue px-4 py-2 text-sm font-medium text-brand-blue hover:bg-white"
        >
          Send another message
        </button>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="space-y-4 rounded-xl border border-slate-200 bg-white p-6 shadow-sm sm:p-8"
      noValidate
    >
      <div className="grid gap-4 sm:grid-cols-2">
        <label className="block text-sm">
          <span className="font-medium text-brand-slate">Name</span>
          <input
            required
            name="name"
            type="text"
            className="mt-1 w-full rounded-md border border-slate-300 px-3 py-2 text-foreground outline-none ring-brand-gold focus:ring-2"
            autoComplete="name"
          />
        </label>
        <label className="block text-sm">
          <span className="font-medium text-brand-slate">Email</span>
          <input
            required
            name="email"
            type="email"
            className="mt-1 w-full rounded-md border border-slate-300 px-3 py-2 text-foreground outline-none ring-brand-gold focus:ring-2"
            autoComplete="email"
          />
        </label>
      </div>
      <label className="block text-sm">
        <span className="font-medium text-brand-slate">Phone</span>
        <input
          name="phone"
          type="tel"
          className="mt-1 w-full rounded-md border border-slate-300 px-3 py-2 text-foreground outline-none ring-brand-gold focus:ring-2"
          autoComplete="tel"
        />
      </label>
      <label className="block text-sm">
        <span className="font-medium text-brand-slate">I am interested in</span>
        <select
          name="interest"
          className="mt-1 w-full rounded-md border border-slate-300 px-3 py-2 text-foreground outline-none ring-brand-gold focus:ring-2"
          defaultValue="buying"
        >
          <option value="buying">Buying</option>
          <option value="selling">Selling</option>
          <option value="investing">Investing</option>
          <option value="other">Other</option>
        </select>
      </label>
      <label className="block text-sm">
        <span className="font-medium text-brand-slate">Message</span>
        <textarea
          required
          name="message"
          rows={5}
          className="mt-1 w-full rounded-md border border-slate-300 px-3 py-2 text-foreground outline-none ring-brand-gold focus:ring-2"
        />
      </label>
      <button
        type="submit"
        className="w-full rounded-md bg-brand-blue px-4 py-3 text-sm font-semibold text-white hover:bg-brand-blue-mid sm:w-auto"
      >
        Send message
      </button>
      <p className="text-xs text-slate-500">
        Form UI only in Phase 1A — submissions are not emailed yet. See README
        for Formspree wiring.
      </p>
    </form>
  );
}
