import { MapPin, Phone, Mail, Clock } from "lucide-react";
import { site } from "@/data/site";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { Reveal } from "@/components/ui/Reveal";
import { ButtonLink } from "@/components/ui/Button";
import { ImagePlaceholder } from "@/components/ui/ImagePlaceholder";

export function Location() {
  return (
    <Section ariaLabel="Konum ve iletişim" tone="carbon" className="border-t border-line">
      <Container>
        <SectionHeader
          eyebrow="Konum"
          title="Bağdat Caddesi'nde, ulaşımı kolay."
        />
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-12">
          <div className="flex flex-col gap-8 lg:col-span-5">
            <Reveal>
              <div className="flex gap-4">
                <MapPin size={20} aria-hidden className="mt-1 shrink-0 text-lime" />
                <div>
                  <h3 className="font-semibold text-ink">Adres</h3>
                  <p className="mt-1 leading-relaxed text-steel">
                    {site.address.street}
                    <br />
                    {site.address.district}
                  </p>
                  <p className="mt-2 text-sm text-steel">
                    Kadıköy İskelesi'ne 10 dk, anlaşmalı otoparka 2 dk yürüme.
                  </p>
                </div>
              </div>
            </Reveal>
            <Reveal delay={0.05}>
              <div className="flex gap-4">
                <Clock size={20} aria-hidden className="mt-1 shrink-0 text-lime" />
                <div>
                  <h3 className="font-semibold text-ink">Çalışma Saatleri</h3>
                  <ul className="mt-1 flex flex-col gap-1 text-steel">
                    {site.hours.map((h) => (
                      <li key={h.days} className="flex justify-between gap-6">
                        <span>{h.days}</span>
                        <span className="text-ink">{h.time}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </Reveal>
            <Reveal delay={0.1}>
              <div className="flex gap-4">
                <Phone size={20} aria-hidden className="mt-1 shrink-0 text-lime" />
                <div>
                  <h3 className="font-semibold text-ink">İletişim</h3>
                  <p className="mt-1 text-steel">
                    <a href={site.phoneHref} className="transition-colors hover:text-ink">
                      {site.phone}
                    </a>
                  </p>
                  <p className="mt-1 text-steel">
                    <a href={site.emailHref} className="flex items-center gap-2 transition-colors hover:text-ink">
                      <Mail size={14} aria-hidden /> {site.email}
                    </a>
                  </p>
                </div>
              </div>
            </Reveal>
            <Reveal delay={0.15} className="flex flex-col gap-3 sm:flex-row">
              <ButtonLink href={site.whatsappHref} variant="whatsapp" external>
                WhatsApp'tan Yaz
              </ButtonLink>
              <ButtonLink href="/iletisim" variant="secondary">
                İletişim Sayfası
              </ButtonLink>
            </Reveal>
          </div>

          <Reveal delay={0.1} className="lg:col-span-7">
            {/* Harita hazır alanı: gerçek projede buraya Google Maps embed gelir */}
            <div className="relative h-full min-h-[320px] border border-line">
              <ImagePlaceholder
                label="PULSE dış cephe, Bağdat Caddesi konumu"
                src="/images/facility-exterior.webp"
                ratio="h-full"
                className="h-full min-h-[320px]"
                icon
              />
            </div>
          </Reveal>
        </div>
      </Container>
    </Section>
  );
}
