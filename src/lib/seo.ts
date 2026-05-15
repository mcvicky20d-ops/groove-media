import type { Metadata } from "next";
import { services, site } from "./site";

export const SITE_URL = site.url;
export const OG_IMAGE = "/opengraph-image";

type PageMetaInput = {
  title: string;
  description: string;
  /** Route path, e.g. "/weddings". Use "/" for home. */
  path: string;
  keywords?: string[];
};

/**
 * Builds consistent, fully-resolved metadata for a page:
 * canonical URL, Open Graph and Twitter cards.
 */
export function pageMeta({
  title,
  description,
  path,
  keywords,
}: PageMetaInput): Metadata {
  const url = path === "/" ? SITE_URL : `${SITE_URL}${path}`;
  return {
    title,
    description,
    keywords,
    alternates: { canonical: path === "/" ? "/" : path },
    openGraph: {
      title: `${title} · ${site.name}`,
      description,
      url,
      siteName: site.name,
      locale: "en_IN",
      type: "website",
      images: [
        {
          url: OG_IMAGE,
          width: 1200,
          height: 630,
          alt: `${site.legalName} — ${site.city}`,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: `${title} · ${site.name}`,
      description,
      images: [OG_IMAGE],
    },
  };
}

/** Site-wide JSON-LD graph: Organization + WebSite + LocalBusiness. */
export function organizationJsonLd() {
  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": `${SITE_URL}/#organization`,
        name: site.legalName,
        url: SITE_URL,
        logo: `${SITE_URL}/logo.png`,
        email: site.email,
        telephone: site.phoneE164,
        foundingDate: site.foundingDate,
        sameAs: [site.social.instagram, site.social.google],
      },
      {
        "@type": "WebSite",
        "@id": `${SITE_URL}/#website`,
        url: SITE_URL,
        name: site.name,
        publisher: { "@id": `${SITE_URL}/#organization` },
        inLanguage: "en-IN",
      },
      {
        "@type": ["LocalBusiness", "ProfessionalService"],
        "@id": `${SITE_URL}/#localbusiness`,
        name: site.legalName,
        image: `${SITE_URL}/logo.png`,
        url: SITE_URL,
        telephone: site.phoneE164,
        email: site.email,
        priceRange: site.priceRange,
        foundingDate: site.foundingDate,
        address: {
          "@type": "PostalAddress",
          addressLocality: site.city,
          addressRegion: site.region,
          addressCountry: "IN",
        },
        geo: {
          "@type": "GeoCoordinates",
          latitude: site.geo.lat,
          longitude: site.geo.lng,
        },
        areaServed: site.areaServed.map((name) => ({
          "@type": "AdministrativeArea",
          name,
        })),
        openingHours: site.openingHours,
        sameAs: [site.social.instagram, site.social.google],
        aggregateRating: {
          "@type": "AggregateRating",
          ratingValue: site.rating.value,
          reviewCount: site.rating.reviewCount,
          bestRating: 5,
        },
        hasOfferCatalog: {
          "@type": "OfferCatalog",
          name: "Film & Visual Production Services",
          itemListElement: services.map((s) => ({
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: s.title,
              description: s.short,
              url: `${SITE_URL}/${s.slug}`,
            },
          })),
        },
      },
    ],
  };
}

/** BreadcrumbList for an inner page. */
export function breadcrumbJsonLd(
  trail: { name: string; path: string }[]
) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: trail.map((t, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: t.name,
      item: `${SITE_URL}${t.path === "/" ? "" : t.path}`,
    })),
  };
}

/** Service schema for a service/landing page. */
export function serviceJsonLd(opts: {
  name: string;
  description: string;
  path: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    name: opts.name,
    description: opts.description,
    serviceType: opts.name,
    url: `${SITE_URL}${opts.path}`,
    areaServed: site.areaServed,
    provider: { "@id": `${SITE_URL}/#localbusiness` },
  };
}
