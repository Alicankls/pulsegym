import type { Metadata } from "next";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { StickyMobileCTA } from "@/components/layout/StickyMobileCTA";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { ProgramCard } from "@/components/cards/ProgramCard";
import { FinalCTA } from "@/components/sections/FinalCTA";
import { programs } from "@/data/programs";
import { JsonLd } from "@/components/ui/JsonLd";
import { breadcrumbSchema } from "@/lib/schema";

export const metadata: Metadata = {
  alternates: { canonical: "/programlar" },
  openGraph: { url: "/programlar" },
  title: "Programlar",
  description:
    "Kuvvet antrenmanı, fonksiyonel antrenman, personal training, grup dersleri, kardiyo ve recovery. PULSE Athletic Club'ın altı antrenman disiplinini keşfedin.",
};

export default function ProgramsPage() {
  return (
    <>
      <JsonLd data={breadcrumbSchema([{ name: "Programlar", href: "/programlar" }])} />
      <Navbar />
      <main id="icerik">
        <section className="border-b border-line bg-carbon pb-16 pt-40 md:pb-24 md:pt-48">
          <Container>
            <Reveal>
              <p className="mb-4 text-xs font-semibold uppercase tracking-[0.24em] text-lime">
                Programlar
              </p>
              <h1 className="font-display text-[clamp(3rem,8vw,7rem)] leading-[0.92] text-ink">
                Altı disiplin.
                <br />
                Tek çatı.
              </h1>
              <p className="mt-6 max-w-2xl text-lg leading-relaxed text-steel md:text-xl">
                Her program bir amaca hizmet eder. Hangisinin sana uygun olduğunu bilmiyorsan,
                ücretsiz denemedeki başlangıç değerlendirmesi tam olarak bunun için var.
              </p>
            </Reveal>
          </Container>
        </section>

        <section aria-label="Program listesi" className="bg-carbon py-20 md:py-28">
          <Container wide>
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {programs.map((p, i) => (
                <Reveal key={p.slug} delay={(i % 3) * 0.08}>
                  <ProgramCard program={p} index={i} />
                </Reveal>
              ))}
            </div>
          </Container>
        </section>

        <FinalCTA />
      </main>
      <Footer />
      <StickyMobileCTA />
    </>
  );
}
