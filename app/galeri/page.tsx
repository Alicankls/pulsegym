import type { Metadata } from "next";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { StickyMobileCTA } from "@/components/layout/StickyMobileCTA";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { Reveal } from "@/components/ui/Reveal";
import { GalleryGrid } from "@/components/sections/GalleryGrid";
import { FinalCTA } from "@/components/sections/FinalCTA";
import { JsonLd } from "@/components/ui/JsonLd";
import { breadcrumbSchema } from "@/lib/schema";

export const metadata: Metadata = {
  alternates: { canonical: "/galeri" },
  openGraph: { url: "/galeri" },
  title: "Galeri",
  description:
    "PULSE Athletic Club tesis fotoğrafları: güç bölümü, fonksiyonel alan, kardiyo, recovery, stüdyo ve soyunma odaları. Salonu gelmeden önce görün.",
};

export default function GalleryPage() {
  return (
    <>
      <JsonLd data={breadcrumbSchema([{ name: "Galeri", href: "/galeri" }])} />
      <Navbar />
      <main id="icerik">
        <section className="border-b border-line bg-carbon pb-16 pt-40 md:pb-24 md:pt-48">
          <Container>
            <Reveal>
              <p className="mb-4 text-xs font-semibold uppercase tracking-[0.24em] text-lime">
                Galeri
              </p>
              <h1 className="font-display text-[clamp(3rem,8vw,7rem)] leading-[0.92] text-ink">
                Salonu gör,
                <br />
                sonra gel.
              </h1>
              <p className="mt-6 max-w-2xl text-lg leading-relaxed text-steel md:text-xl">
                Filtrele, gez, incele. Burada gördüğün her kare tek bir tesise ait —
                geldiğinde aynısını bulacaksın.
              </p>
            </Reveal>
          </Container>
        </section>

        <Section ariaLabel="Fotoğraf galerisi" tone="carbon">
          <Container wide>
            <GalleryGrid />
          </Container>
        </Section>

        <FinalCTA />
      </main>
      <Footer />
      <StickyMobileCTA />
    </>
  );
}
