import type { Metadata } from "next";
import { broker, placeholders } from "../../content/site";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: `Privacy policy for ${broker.name}'s marketing website.`,
};

export default function PrivacyPage() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-14 sm:px-6">
      <h1 className="text-3xl font-bold text-brand-blue-deep">Privacy Policy</h1>
      <p className="mt-2 text-sm text-slate-500">
        Phase 1A placeholder policy — update before public launch.
      </p>
      <div className="mt-8 space-y-4 text-brand-slate leading-relaxed">
        <p>
          This marketing website for {broker.name} ({broker.license}) collects
          only the information you voluntarily provide through the contact form
          (name, email, phone, interest, and an optional message). Submissions
          are sent to a Google Form so Carlos can follow up. Google receives
          those fields when you submit.
        </p>
        <p>
          We do not sell personal information. Contact details shown on this
          site — {placeholders.phone}, {placeholders.email},{" "}
          {placeholders.officeAddress} — are provided so you can reach Carlos
          directly.
        </p>
        <p>
          This site may use basic analytics or hosting logs provided by the
          deployment platform. Third-party images (for example Unsplash
          placeholders) and links to {placeholders.mlsPublicSearchUrl} or social
          profiles ({placeholders.instagram}, {placeholders.facebook}) are
          governed by those providers&apos; policies.
        </p>
        <p>
          For privacy questions, contact {placeholders.email} or{" "}
          {placeholders.phone}. Domain: {placeholders.domain}.
        </p>
      </div>
    </div>
  );
}
