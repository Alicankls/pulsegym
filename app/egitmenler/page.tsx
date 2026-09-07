import type { Metadata } from "next";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { StickyMobileCTA } from "@/components/layout/StickyMobileCTA";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { Reveal } from "@/components/ui/Reveal";
import { CoachCard } from "@/components/cards/CoachCard";
import { FinalCTA } from "@/components/sections/FinalCTA";
import { coaches } from "@/data/coaches";
import { JsonLd } from "@/components/ui/JsonLd";
import { breadcrumbSchema } from "@/lib/schema";

export const metadata: Metadata = {
  alternates: { canonical: "/egitmenler" },
  openGraph: { url: "/egitmenler" },
  title: "Eğitmenler",
  description:
    "PULSE Athletic Club'ın 12 kişilik eğitmen kadrosuyla tanışın. Kuvvet, fonksiyonel antrenman, personal training ve grup dersi eğitmenlerimizin profilleri.",
};

export default function CoachesPage() {
  return (
    <>
      <JsonLd data={breadcrumbSchema([{ name: "Eğitmenler", href: "/egitmenler" }])} />
      <Navbar />
      <main id="icerik">
        <section className="border-b border-line bg-carbon pb-16 pt-40 md:pb-24 md:pt-48">
          <Container>
            <Reveal>
              <p className="mb-4 text-xs font-semibold uppercase tracking-[0.24em] text-lime">
                Eğitmen Kadrosu
              </p>
              <h1 className="font-display text-[clamp(3rem,8vw,7rem)] leading-[0.92] text-ink">
                Sizi takip eden
                <br />
                bir ekip var.
              </h1>
              <p className="mt-6 max-w-2xl text-lg leading-relaxed text-steel md:text-xl">
                Programını yazan, tekniğini düzelten ve gelişimini kayıt altında tutan insanlar.
                Kadronun öne çıkan dört ismiyle tanış; tamamı salonda, her gün sahada.
              </p>
            </Reveal>
          </Container>
        </section>

        <Section ariaLabel="Eğitmen listesi" tone="carbon">
          <Container wide>
            <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
              {coaches.map((c, i) => (
                <Reveal key={c.slug} delay={i * 0.08}>
                  <CoachCard coach={c} />
                  <blockquote className="mt-5 border-l-2 border-lime pl-4 text-sm italic leading-relaxed text-steel">
                    "{c.quote}"
                  </blockquote>
                </Reveal>
              ))}
            </div>
            <Reveal delay={0.1} className="mt-14 border border-line bg-graphite p-7 md:p-9">
              <p className="max-w-3xl leading-relaxed text-steel">
                Kadronun tamamı 12 eğitmenden oluşur; tümü kendi alanında sertifikalıdır ve
                her biri her ay iç eğitimden geçer. Üyelik durumundan bağımsız olarak salondaki
                her eğitmene soru sorabilirsin — bu, PULSE'ta işlerin doğal akışıdır.
              </p>
            </Reveal>
          </Container>
        </Section>

        <FinalCTA />
      </main>
      <Footer />
      <StickyMobileCTA />
    </>
  );
}
