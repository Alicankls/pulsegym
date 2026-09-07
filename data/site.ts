/** Kanonik origin. robots.ts, sitemap.ts ve metadata tek bu değerden beslenir. */
export const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://pulseathletic.com";

/** Mutlak URL üretir: absoluteUrl("/uyelik") -> "https://.../uyelik" */
export function absoluteUrl(path = "/") {
  return new URL(path, SITE_URL).toString();
}

export const site = {
  name: "PULSE Athletic Club",
  shortName: "PULSE",
  tagline: "Train With Purpose.",
  coreMessage: "Your stronger self starts here.",
  positioning:
    "Hedefin ne olursa olsun, daha güçlü bir versiyonun burada başlar.",
  founded: 2019,
  address: {
    street: "Bağdat Caddesi No:124",
    district: "Kadıköy / İstanbul",
    locality: "Kadıköy",
    region: "İstanbul",
    postalCode: "34728",
    country: "TR",
  },
  /** Demo koordinat — Bağdat Caddesi / Kadıköy civarı. */
  geo: { lat: 40.9716, lng: 29.0632 },
  priceRange: "₺₺",
  phone: "+90 212 555 24 73",
  phoneHref: "tel:+902125552473",
  whatsapp: "+90 532 555 24 73",
  whatsappHref:
    "https://wa.me/905325552473?text=Merhaba%2C%20PULSE%20hakk%C4%B1nda%20bilgi%20almak%20istiyorum.",
  email: "hello@pulseathletic.com",
  emailHref: "mailto:hello@pulseathletic.com",
  hours: [
    { days: "Pazartesi – Cuma", time: "06:00 – 23:00" },
    { days: "Cumartesi", time: "07:00 – 22:00" },
    { days: "Pazar", time: "08:00 – 21:00" },
  ],
  /** schema.org OpeningHoursSpecification için makine-okunur karşılığı. */
  openingHours: [
    { days: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"], opens: "06:00", closes: "23:00" },
    { days: ["Saturday"], opens: "07:00", closes: "22:00" },
    { days: ["Sunday"], opens: "08:00", closes: "21:00" },
  ],
  stats: [
    { value: 2400, suffix: "+", label: "Aktif Üye" },
    { value: 12, suffix: "", label: "Uzman Eğitmen" },
    { value: 45, suffix: "+", label: "Haftalık Grup Dersi" },
    { value: 1800, suffix: " m²", label: "Antrenman Alanı" },
  ],
  nav: [
    { label: "Kulüp", href: "/kulup" },
    { label: "Programlar", href: "/programlar" },
    { label: "Eğitmenler", href: "/egitmenler" },
    { label: "Dersler", href: "/ders-programi" },
    { label: "Üyelik", href: "/uyelik" },
    { label: "İletişim", href: "/iletisim" },
  ],
  cta: { label: "Ücretsiz Deneme", href: "/ucretsiz-deneme" },
  demoNote:
    "Bu site tanıtım amaçlı hazırlanmış kurgusal bir demodur. Tüm işletme bilgileri, fiyatlar ve üye görüşleri örnek içeriktir.",
} as const;
