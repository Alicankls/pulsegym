import { site, absoluteUrl } from "@/data/site";
import type { Coach } from "@/data/coaches";
import type { Program } from "@/data/programs";
import type { Faq } from "@/data/faqs";

/**
 * schema.org JSON-LD üreticileri.
 *
 * Yerel işletme aramalarında (Kadıköy spor salonu vb.) zengin sonuç alabilmek
 * için Google'ın beklediği tipler: HealthClub, FAQPage, BreadcrumbList, Person.
 * Tüm çıktılar `<JsonLd>` bileşeniyle sayfaya gömülür.
 */

const ORG_ID = absoluteUrl("/#organization");

/** Sitedeki her sayfanın referans verdiği ana işletme kaydı. */
export function healthClubSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "HealthClub",
    "@id": ORG_ID,
    name: site.name,
    alternateName: site.shortName,
    description: site.positioning,
    slogan: site.tagline,
    url: absoluteUrl("/"),
    telephone: site.phone,
    email: site.email,
    priceRange: site.priceRange,
    foundingDate: String(site.founded),
    currenciesAccepted: "TRY",
    image: absoluteUrl("/images/og-image.jpg"),
    logo: absoluteUrl("/images/og-image.jpg"),
    address: {
      "@type": "PostalAddress",
      streetAddress: site.address.street,
      addressLocality: site.address.locality,
      addressRegion: site.address.region,
      postalCode: site.address.postalCode,
      addressCountry: site.address.country,
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: site.geo.lat,
      longitude: site.geo.lng,
    },
    openingHoursSpecification: site.openingHours.map((h) => ({
      "@type": "OpeningHoursSpecification",
      dayOfWeek: h.days,
      opens: h.opens,
      closes: h.closes,
    })),
    amenityFeature: [
      "Kuvvet bölümü",
      "Fonksiyonel antrenman alanı",
      "Kardiyo alanı",
      "Grup ders stüdyosu",
      "Recovery alanı",
      "Soyunma odası ve duş",
    ].map((name) => ({ "@type": "LocationFeatureSpecification", name, value: true })),
    areaServed: [
      { "@type": "City", name: "İstanbul" },
      { "@type": "AdministrativeArea", name: "Kadıköy" },
    ],
    potentialAction: {
      "@type": "ReserveAction",
      name: "Ücretsiz deneme antrenmanı planla",
      target: absoluteUrl(site.cta.href),
    },
  };
}

/** Google'ın SSS zengin sonucu için. Sadece sayfada görünen sorular verilmeli. */
export function faqSchema(items: readonly Faq[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };
}

/** Arama sonucunda kırıntı navigasyonu gösterir. Ana sayfa için çağrılmaz. */
export function breadcrumbSchema(trail: { name: string; href: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [{ name: "Ana Sayfa", href: "/" }, ...trail].map((item, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: item.name,
      item: absoluteUrl(item.href),
    })),
  };
}

export function coachSchema(coach: Coach) {
  return {
    "@context": "https://schema.org",
    "@type": "Person",
    "@id": absoluteUrl(`/egitmenler/${coach.slug}#person`),
    name: coach.name,
    jobTitle: coach.role,
    description: coach.specialty,
    image: absoluteUrl(coach.image),
    url: absoluteUrl(`/egitmenler/${coach.slug}`),
    knowsAbout: coach.expertise,
    hasCredential: coach.certifications.map((c) => ({
      "@type": "EducationalOccupationalCredential",
      name: c,
    })),
    worksFor: { "@id": ORG_ID },
  };
}

export function programSchema(program: Program) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    "@id": absoluteUrl(`/programlar/${program.slug}#service`),
    name: program.name,
    description: program.short,
    image: absoluteUrl(program.image),
    url: absoluteUrl(`/programlar/${program.slug}`),
    serviceType: "Fitness antrenman programı",
    provider: { "@id": ORG_ID },
    areaServed: { "@type": "City", name: "İstanbul" },
  };
}

/**
 * Üyelik planlarını fiyat listesi olarak işaretler.
 * `price` "₺1.790" biçiminde geldiği için sayısal karşılığı ayrıştırılır.
 */
export function membershipSchema(
  plans: readonly { name: string; price: string; tagline: string; features: readonly string[] }[]
) {
  return {
    "@context": "https://schema.org",
    "@type": "OfferCatalog",
    name: `${site.name} üyelik planları`,
    url: absoluteUrl("/uyelik"),
    itemListElement: plans.map((p, i) => ({
      "@type": "Offer",
      position: i + 1,
      name: p.name,
      description: p.tagline,
      price: p.price.replace(/[^\d,]/g, "").replace(",", "."),
      priceCurrency: "TRY",
      availability: "https://schema.org/InStock",
      category: "Aylık üyelik",
      itemOffered: {
        "@type": "Service",
        name: `${p.name} üyeliği`,
        provider: { "@id": ORG_ID },
      },
    })),
  };
}
