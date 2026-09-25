import type { FeaturedProperty } from "../content/featured";

export default function PropertyCard({
  property,
}: {
  property: FeaturedProperty;
}) {
  const typeLabel =
    property.propertyType === "new" ? "New construction" : "Existing home";

  const card = (
    <article className="flex h-full flex-col overflow-hidden rounded-xl border border-slate-200 bg-white shadow-sm transition hover:shadow-md">
      <div className="relative aspect-[4/3] overflow-hidden bg-slate-100">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={property.image}
          alt={property.imageAlt}
          className="h-full w-full object-cover"
          loading="lazy"
        />
        <span className="absolute left-3 top-3 rounded-full bg-brand-blue/90 px-2.5 py-1 text-xs font-semibold text-white">
          {property.status}
        </span>
      </div>
      <div className="flex flex-1 flex-col p-4">
        <p className="text-xs font-medium uppercase tracking-wide text-brand-gold">
          {typeLabel} · {property.city}
        </p>
        <h3 className="mt-1 text-base font-semibold text-brand-blue-deep">
          {property.title}
        </h3>
        {property.optionalBeds && (
          <p className="mt-1 text-sm text-slate-500">{property.optionalBeds}</p>
        )}
        <p className="mt-auto pt-3 text-lg font-bold text-brand-blue">
          {property.priceLabel}
        </p>
      </div>
    </article>
  );

  if (property.optionalExternalUrl) {
    return (
      <a
        href={property.optionalExternalUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="block h-full"
      >
        {card}
      </a>
    );
  }

  return card;
}
