import type { Metadata } from "next";
import { MapPin, Phone, Mail, Clock, MessageCircle } from "lucide-react";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { StickyMobileCTA } from "@/components/layout/StickyMobileCTA";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { Reveal } from "@/components/ui/Reveal";
import { ContactForm } from "@/components/forms/ContactForm";
import { ImagePlaceholder } from "@/components/ui/ImagePlaceholder";
import { site } from "@/data/site";
import { JsonLd } from "@/components/ui/JsonLd";
import { breadcrumbSchema } from "@/lib/schema";

export const metadata: Metadata = {
  alternates: { canonical: "/iletisim" },
  openGraph: { url: "/iletisim" },
  title: "İletişim",
  description:
    "PULSE Athletic Club iletişim: Bağdat Caddesi No:124, Kadıköy. Telefon, e-posta, WhatsApp ve çalışma saatleri. Sorularınız için bize ulaşın.",
};

const rows = [
  { icon: MapPin, title: "Adres", content: `${site.address.street}, ${site.address.district}`, href: undefined },
  { icon: Phone, title: "Telefon", content: site.phone, href: site.phoneHref },
  { icon: Mail, title: "E-posta", content: site.email, href: site.emailHref },
  { icon: MessageCircle, title: "WhatsApp", content: site.whatsapp, href: site.whatsappHref },
];

export default function ContactPage() {
  return (
    <>
      <JsonLd data={breadcrumbSchema([{ name: "İletişim", href: "/iletisim" }])} />
      <Navbar />
      <main id="icerik">
        <section className="border-b border-line bg-carbon pb-16 pt-40 md:pb-24 md:pt-48">
          <Container>
            <Reveal>
              <p className="mb-4 text-xs font-semibold uppercase tracking-[0.24em] text-lime">
                İletişim
              </p>
              <h1 className="font-display text-[clamp(3rem,8vw,7rem)] leading-[0.92] text-ink">
                Konuşalım.
              </h1>
              <p className="mt-6 max-w-2xl text-lg leading-relaxed text-steel md:text-xl">
                Üyelik, program ya da deneme hakkında aklına takılan her şey için buradayız.
                Formu doldur, WhatsApp'tan yaz ya da doğrudan ara.
              </p>
            </Reveal>
          </Container>
        </section>

        <Section ariaLabel="İletişim bilgileri ve form" tone="carbon">
          <Container>
            <div className="grid grid-cols-1 gap-12 lg:grid-cols-12">
              <div className="flex flex-col gap-8 lg:col-span-5">
                {rows.map((r, i) => (
                  <Reveal key={r.title} delay={i * 0.06}>
                    <div className="flex gap-4 border-b border-line pb-6">
                      <r.icon size={20} aria-hidden className="mt-1 shrink-0 text-lime" />
                      <div>
                        <h2 className="font-semibold text-ink">{r.title}</h2>
                        {r.href ? (
                          <a href={r.href} target={r.href.startsWith("http") ? "_blank" : undefined} rel={r.href.startsWith("http") ? "noopener noreferrer" : undefined} className="mt-1 inline-block text-steel transition-colors hover:text-ink">
                            {r.content}
                          </a>
                        ) : (
                          <p className="mt-1 text-steel">{r.content}</p>
                        )}
                      </div>
                    </div>
                  </Reveal>
                ))}
                <Reveal delay={0.25}>
                  <div className="flex gap-4 border-b border-line pb-6">
                    <Clock size={20} aria-hidden className="mt-1 shrink-0 text-lime" />
                    <div>
                      <h2 className="font-semibold text-ink">Çalışma Saatleri</h2>
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
                <Reveal delay={0.3}>
                  <div className="relative min-h-[240px] border border-line">
                    <ImagePlaceholder
                      label="PULSE dış cephe, Bağdat Caddesi konumu"
                      src="/images/facility-exterior.webp"
                      ratio="h-full"
                      className="min-h-[240px]"
                      icon
                    />
                  </div>
                </Reveal>
              </div>
              <Reveal delay={0.15} className="lg:col-span-6 lg:col-start-7">
                <ContactForm />
              </Reveal>
            </div>
          </Container>
        </Section>
      </main>
      <Footer />
      <StickyMobileCTA />
    </>
  );
}
