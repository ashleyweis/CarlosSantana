"use client";

import { FormEvent, useState } from "react";
import { placeholders } from "../content/site";

export default function ContactForm() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    
    const form = e.currentTarget;
    const formData = new FormData(form);

    fetch(
      "https://docs.google.com/forms/d/e/1FAIpQLSeADVPz2P6jaEcx5NqL9FATO7wGou2RqxeHljKB6I3V_wgiAQ/formResponse",
      {
        method: "POST",
        mode: "no-cors",
        body: formData,
      }
    )
      .then(() => {
        setSubmitted(true);
      })
      .catch((error) => {
        console.error("Error submitting form:", error);
      });
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
          Carlos will follow up with you shortly. You can also
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
            name="entry.299544885"
            type="text"
            className="mt-1 w-full rounded-md border border-slate-300 px-3 py-2 text-foreground outline-none ring-brand-gold focus:ring-2"
            autoComplete="name"
          />
        </label>
        <label className="block text-sm">
          <span className="font-medium text-brand-slate">Email</span>
          <input
            required
            name="entry.828714478"
            type="email"
            className="mt-1 w-full rounded-md border border-slate-300 px-3 py-2 text-foreground outline-none ring-brand-gold focus:ring-2"
            autoComplete="email"
          />
        </label>
      </div>
      <label className="block text-sm">
        <span className="font-medium text-brand-slate">Phone</span>
        <input
          name="entry.2037809002"
          type="tel"
          className="mt-1 w-full rounded-md border border-slate-300 px-3 py-2 text-foreground outline-none ring-brand-gold focus:ring-2"
          autoComplete="tel"
        />
      </label>
      <label className="block text-sm">
        <span className="font-medium text-brand-slate">I am interested in</span>
        <select
          name="entry.1281975932"
          className="mt-1 w-full rounded-md border border-slate-300 px-3 py-2 text-foreground outline-none ring-brand-gold focus:ring-2"
          defaultValue="Buying"
        >
          <option value="Buying">Buying</option>
          <option value="Selling">Selling</option>
          <option value="Investing">Investing</option>
          <option value="Other">Other</option>
        </select>
      </label>
      <label className="block text-sm">
        <span className="font-medium text-brand-slate">Message</span>
        <textarea
          required
          name="entry.1910010670"
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
    </form>
  );
}
