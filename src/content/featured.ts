/**
 * Featured properties — manual Phase 1A data only.
 * Edit this file to change Home “Featured” cards. No MLS/IDX sync.
 */
export type PropertyType = "new" | "existing";

export type FeaturedProperty = {
  id: string;
  title: string;
  city: string;
  status: string;
  propertyType: PropertyType;
  priceLabel: string;
  /** Unsplash URL or local path under /public */
  image: string;
  imageAlt: string;
  optionalBeds?: string;
  optionalExternalUrl?: string;
};

export const featuredProperties: FeaturedProperty[] = [
  {
    id: "kissimmee-new-construction",
    title: "New Construction near Lake Tohopekaliga",
    city: "Kissimmee, FL",
    status: "Coming Soon",
    propertyType: "new",
    priceLabel: "From the mid $400s",
    image:
      "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=1200&q=80",
    imageAlt: "Modern new-construction home exterior in Central Florida",
    optionalBeds: "4 bed · 3 bath",
  },
  {
    id: "st-cloud-family",
    title: "Updated Family Home in St. Cloud",
    city: "St. Cloud, FL",
    status: "Featured",
    propertyType: "existing",
    priceLabel: "$389,000",
    image:
      "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?auto=format&fit=crop&w=1200&q=80",
    imageAlt: "Suburban family home with landscaped front yard",
    optionalBeds: "3 bed · 2 bath",
  },
  {
    id: "poinciana-investment",
    title: "Investor-Ready Home in Poinciana",
    city: "Poinciana, FL",
    status: "For Investors",
    propertyType: "existing",
    priceLabel: "$325,000",
    image:
      "https://images.unsplash.com/photo-1570129477492-45c003edd2be?auto=format&fit=crop&w=1200&q=80",
    imageAlt: "Single-family home suitable for rental investment",
    optionalBeds: "3 bed · 2 bath",
  },
  {
    id: "celebration-area",
    title: "Near Celebration — Bright & Open Floor Plan",
    city: "Osceola County, FL",
    status: "Featured",
    propertyType: "existing",
    priceLabel: "$475,000",
    image:
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80",
    imageAlt: "Contemporary home with open living spaces",
    optionalBeds: "4 bed · 3 bath",
  },
];
