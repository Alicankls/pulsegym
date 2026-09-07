import type { Metadata } from "next";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { StickyMobileCTA } from "@/components/layout/StickyMobileCTA";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { Reveal } from "@/components/ui/Reveal";
import { ScheduleBoard } from "@/components/sections/ScheduleBoard";
import { FinalCTA } from "@/components/sections/FinalCTA";
import { classTypes } from "@/data/schedule";
import { JsonLd } from "@/components/ui/JsonLd";
import { breadcrumbSchema } from "@/lib/schema";

export const metadata: Metadata = {
  alternates: { canonical: "/ders-programi" },
  openGraph: { url: "/ders-programi" },
  title: "Ders Programı",
  description:
    "Haftalık grup dersi programı: HIIT, Mobility, Core, Conditioning ve Functional Strength dersleri. Gününü seç, dersini bul, yerini ayırt.",
};

export default function SchedulePage() {
  return (
    <>
      <JsonLd data={breadcrumbSchema([{ name: "Ders Programı", href: "/ders-programi" }])} />
      <Navbar />
      <main id="icerik">
        <section className="border-b border-line bg-carbon pb-16 pt-40 md:pb-24 md:pt-48">
          <Container>
            <Reveal>
              <p className="mb-4 text-xs font-semibold uppercase tracking-[0.24em] text-lime">
                Ders Programı
              </p>
              <h1 className="font-display text-[clamp(3rem,8vw,7rem)] leading-[0.92] text-ink">
                Gününü seç.
                <br />
                Dersini bul.
              </h1>
              <p className="mt-6 max-w-2xl text-lg leading-relaxed text-steel md:text-xl">
                Haftada 45'ten fazla ders; sabah 07:00'den akşam 20:30'a. Tüm dersler
                PERFORMANCE ve UNLIMITED üyeliklerde sınırsız.
              </p>
            </Reveal>
            <Reveal delay={0.1} className="mt-8 flex flex-wrap gap-2">
              {classTypes.map((c) => (
                <span
                  key={c.name}
                  className="border border-line px-3.5 py-1.5 text-xs font-semibold uppercase tracking-[0.12em] text-steel"
                >
                  {c.name}
                </span>
              ))}
            </Reveal>
          </Container>
        </section>

        <Section ariaLabel="Haftalık ders takvimi" tone="carbon">
          <Container>
            <ScheduleBoard />
          </Container>
        </Section>

        <FinalCTA />
      </main>
      <Footer />
      <StickyMobileCTA />
    </>
  );
}
