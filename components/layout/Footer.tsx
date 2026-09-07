import Link from "next/link";
import { MapPin, Phone, Mail, MessageCircle, Clock } from "lucide-react";
import { site } from "@/data/site";
import { programs } from "@/data/programs";
import { Container } from "@/components/ui/Container";

const explore = [
  { label: "Ana Sayfa", href: "/" },
  { label: "Kulüp", href: "/kulup" },
  { label: "Eğitmenler", href: "/egitmenler" },
  { label: "Ders Programı", href: "/ders-programi" },
  { label: "Üyelik", href: "/uyelik" },
  { label: "Galeri", href: "/galeri" },
  { label: "SSS", href: "/sss" },
];

export function Footer() {
  return (
    <footer className="border-t border-line bg-carbon">
      <Container wide className="py-16 md:py-20">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-12">
          {/* Marka */}
          <div className="lg:col-span-4">
            <Link href="/" className="font-display text-3xl tracking-wide text-ink">
              PULSE<span className="text-lime">.</span>
            </Link>
            <p className="mt-1 text-[0.7rem] font-semibold uppercase tracking-[0.24em] text-steel">
              Athletic Club
            </p>
            <p className="mt-5 max-w-xs leading-relaxed text-steel">
              {site.tagline} {site.positioning}
            </p>
            <p className="mt-4 text-sm text-steel">
              {site.founded}'den beri Kadıköy'de.
            </p>
          </div>

          {/* Keşfet */}
          <div className="lg:col-span-2">
            <h3 className="mb-5 text-xs font-semibold uppercase tracking-[0.2em] text-ink">
              Keşfet
            </h3>
            <ul className="flex flex-col gap-3">
              {explore.map((l) => (
                <li key={l.href}>
                  <Link href={l.href} className="text-sm text-steel transition-colors hover:text-lime">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Programlar */}
          <div className="lg:col-span-3">
            <h3 className="mb-5 text-xs font-semibold uppercase tracking-[0.2em] text-ink">
              Programlar
            </h3>
            <ul className="flex flex-col gap-3">
              {programs.map((p) => (
                <li key={p.slug}>
                  <Link
                    href={`/programlar/${p.slug}`}
                    className="text-sm text-steel transition-colors hover:text-lime"
                  >
                    {p.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* İletişim */}
          <div className="lg:col-span-3">
            <h3 className="mb-5 text-xs font-semibold uppercase tracking-[0.2em] text-ink">
              İletişim
            </h3>
            <ul className="flex flex-col gap-4 text-sm text-steel">
              <li className="flex gap-3">
                <MapPin size={16} aria-hidden className="mt-0.5 shrink-0 text-lime" />
                <span>
                  {site.address.street}
                  <br />
                  {site.address.district}
                </span>
              </li>
              <li>
                <a href={site.phoneHref} className="flex gap-3 transition-colors hover:text-ink">
                  <Phone size={16} aria-hidden className="shrink-0 text-lime" />
                  {site.phone}
                </a>
              </li>
              <li>
                <a href={site.emailHref} className="flex gap-3 transition-colors hover:text-ink">
                  <Mail size={16} aria-hidden className="shrink-0 text-lime" />
                  {site.email}
                </a>
              </li>
              <li>
                <a
                  href={site.whatsappHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex gap-3 transition-colors hover:text-ink"
                >
                  <MessageCircle size={16} aria-hidden className="shrink-0 text-lime" />
                  WhatsApp hattı
                </a>
              </li>
              <li className="flex gap-3">
                <Clock size={16} aria-hidden className="mt-0.5 shrink-0 text-lime" />
                <span>
                  Hafta içi 06:00–23:00
                  <br />
                  Cmt 07:00–22:00 · Paz 08:00–21:00
                </span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-14 flex flex-col gap-4 border-t border-line pt-8 md:flex-row md:items-center md:justify-between">
          <p className="text-xs text-steel">
            © {new Date().getFullYear()} {site.name}. Tüm hakları saklıdır.
          </p>
          <div className="flex gap-6 text-xs">
            <Link href="/gizlilik-politikasi" className="text-steel transition-colors hover:text-ink">
              Gizlilik Politikası
            </Link>
            <Link href="/kvkk" className="text-steel transition-colors hover:text-ink">
              KVKK Aydınlatma Metni
            </Link>
          </div>
        </div>
        <p className="mt-6 border-t border-line pt-6 text-[0.7rem] leading-relaxed text-steel/80">
          {site.demoNote}
        </p>
      </Container>
    </footer>
  );
}
