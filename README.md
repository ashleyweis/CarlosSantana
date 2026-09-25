# Carlos Santana — Phase 1A Marketing Site

Personal Florida real estate marketing website for broker **Carlos Santana** (Lic.#BK3452049).  
Stack: **Next.js (App Router) + TypeScript + Tailwind CSS**.

Phase 1A is marketing-only: no auth, no database, no MLS/IDX sync, no CMS, no blog, no calculators.

## Run locally

```bash
cd /workspace/carlos-santana-site
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

Production build:

```bash
npm run build
npm start
```

## Routes

| Path | Purpose |
|------|---------|
| `/` | Home (hero, trust strip, Buy/Sell/Invest, featured, about teaser, CTA) |
| `/about` | Full bio + credentials |
| `/buy` | Buyer page + Browse listings CTA |
| `/sell` | Seller page |
| `/investors` | Investor page |
| `/contact` | Contact form (client-side success) + placeholders |
| `/privacy` | Privacy policy placeholder |

Shared sticky header + footer include Lic.#BK3452049, RSA, contact placeholders, and Privacy link.

## Where placeholders live

Edit **`src/content/site.ts`** — tokens must stay literal until real values are ready:

- `(Carlos Phone)`
- `(Carlos Email)`
- `(Carlos Office Address)`
- `(Carlos Domain)`
- `(Carlos Instagram)`
- `(Carlos Facebook)`
- `(Carlos MLS Public Search URL)`

Broker branding (license, Stellar MLS #, Oscar/ORRA, languages, headshot path) is also in that file.

## Featured properties

Edit **`src/content/featured.ts`**.

Each card supports: `title`, `city`, `status`, `propertyType` (`new` | `existing`), `priceLabel`, `image`, `imageAlt`, optional `optionalBeds`, optional `optionalExternalUrl`.

Images can be Unsplash URLs (configured in `next.config.ts`) or files under `public/`.

## Browse listings / MLS URL

“Browse listings” buttons use `href="#"` for Phase 1A and surface the placeholder label  
`(Carlos MLS Public Search URL)` in accessible text / nearby copy.

When you have Carlos’s public MLS search URL:

1. Put the real URL in `placeholders.mlsPublicSearchUrl` in `src/content/site.ts`.
2. Change Browse listings anchors from `href="#"` to that URL (Header, Home, Buy, Footer, etc.).

Do **not** add scrapers, IDX, or listing sync in Phase 1A.

## Contact form → Formspree (later)

`src/components/ContactForm.tsx` is client-side only: on submit it shows a success message and does not POST anywhere.

To wire Formspree later:

1. Create a Formspree form and copy the endpoint (`https://formspree.io/f/xxxx`).
2. In `ContactForm.tsx`, either:
   - set the form `action` to the Formspree URL and `method="POST"`, and remove the fake `preventDefault` success path; or
   - `fetch` the Formspree endpoint in `handleSubmit`, then show success/error.
3. Keep `name` attributes on fields (`name`, `email`, `phone`, `interest`, `message`).

## Brand assets

- Headshot: `public/carlos-santana.jpg` (used on Home + About)
- Colors: royal blue primary, gold accents, cream/light neutrals (`src/app/globals.css`)
- Trust strip languages (visual only): **EN · ES · DE · FR**

## Bio copy

Polished bio paragraphs and credentials: **`src/content/bio.ts`**.

## Out of scope (do not add in Phase 1A)

IDX / MLS sync, auth, database, CMS, blog, mortgage calculators, scrapers.
