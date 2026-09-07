import type { Metadata } from "next";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { StickyMobileCTA } from "@/components/layout/StickyMobileCTA";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { Reveal } from "@/components/ui/Reveal";
import { Accordion } from "@/components/ui/Accordion";
import { ButtonLink } from "@/components/ui/Button";
import { JsonLd } from "@/components/ui/JsonLd";
import { breadcrumbSchema, faqSchema } from "@/lib/schema";
import { faqs } from "@/data/faqs";
import { site } from "@/data/site";

export const metadata: Metadata = {
  alternates: { canonical: "/sss" },
  openGraph: { url: "/sss" },
  title: "Sık Sorulan Sorular",
  description:
    "Ücretsiz deneme, üyelik, grup dersleri, personal training ve tesis hakkında merak edilenler. PULSE Athletic Club SSS sayfası.",
};

export default function FaqPage() {
  return (
    <>
      <JsonLd
        data={[
          faqSchema(faqs),
          breadcrumbSchema([{ name: "Sık Sorulan Sorular", href: "/sss" }]),
        ]}
      />
      <Navbar />
      <main id="icerik">
        <section className="border-b border-line bg-carbon pb-16 pt-40 md:pb-24 md:pt-48">
          <Container>
            <Reveal>
              <p className="mb-4 text-xs font-semibold uppercase tracking-[0.24em] text-lime">
                SSS
              </p>
              <h1 className="font-display text-[clamp(3rem,8vw,7rem)] leading-[0.92] text-ink">
                Merak edilenler.
              </h1>
              <p className="mt-6 max-w-2xl text-lg leading-relaxed text-steel md:text-xl">
                Cevabını bulamadığın bir soru varsa WhatsApp'tan yaz; genellikle birkaç dakika
                içinde dönüş yapıyoruz.
              </p>
            </Reveal>
          </Container>
        </section>

        <Section ariaLabel="Sık sorulan sorular" tone="carbon">
          <Container>
            <Reveal>
              <Accordion items={faqs} headingLevel={2} />
            </Reveal>
            <Reveal delay={0.1} className="mt-12 flex flex-col items-start gap-4 border border-line bg-graphite p-7 sm:flex-row sm:items-center sm:justify-between">
              <p className="text-steel">Sorun cevapsız mı kaldı?</p>
              <div className="flex flex-col gap-3 sm:flex-row">
                <ButtonLink href={site.whatsappHref} variant="whatsapp" external>WhatsApp'tan Sor</ButtonLink>
                <ButtonLink href="/ucretsiz-deneme">Ücretsiz Deneme</ButtonLink>
              </div>
            </Reveal>
          </Container>
        </Section>
      </main>
      <Footer />
      <StickyMobileCTA />
    </>
  );
}
