import type { Metadata } from "next";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { StickyMobileCTA } from "@/components/layout/StickyMobileCTA";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { Reveal } from "@/components/ui/Reveal";
import { Accordion } from "@/components/ui/Accordion";
import { MembershipCard } from "@/components/cards/MembershipCard";
import { FinalCTA } from "@/components/sections/FinalCTA";
import { JsonLd } from "@/components/ui/JsonLd";
import { breadcrumbSchema, membershipSchema } from "@/lib/schema";
import { memberships, membershipQuestions } from "@/data/memberships";

export const metadata: Metadata = {
  alternates: { canonical: "/uyelik" },
  openGraph: { url: "/uyelik" },
  title: "Üyelik Planları",
  description:
    "START, PERFORMANCE ve UNLIMITED üyelik planları. Açık fiyatlar, net içerikler, taahhüt dayatması yok. Kadıköy PULSE Athletic Club üyelik seçeneklerini inceleyin.",
};

export default function MembershipsPage() {
  return (
    <>
      <JsonLd
        data={[
          membershipSchema(memberships),
          breadcrumbSchema([{ name: "Üyelik", href: "/uyelik" }]),
        ]}
      />
      <Navbar />
      <main id="icerik">
        <section className="border-b border-line bg-carbon pb-16 pt-40 md:pb-24 md:pt-48">
          <Container>
            <Reveal>
              <p className="mb-4 text-xs font-semibold uppercase tracking-[0.24em] text-lime">
                Üyelik
              </p>
              <h1 className="font-display text-[clamp(3rem,8vw,7rem)] leading-[0.92] text-ink">
                Açık fiyat.
                <br />
                Net içerik.
              </h1>
              <p className="mt-6 max-w-2xl text-lg leading-relaxed text-steel md:text-xl">
                Üç plan, üç farklı ihtiyaç. Kararsızsan sorun değil — ücretsiz denemede
                hedefini konuşur, doğru planı birlikte seçeriz.
              </p>
            </Reveal>
          </Container>
        </section>

        <Section ariaLabel="Üyelik planları" tone="carbon">
          <Container>
            <div className="grid grid-cols-1 gap-6 md:grid-cols-3 lg:gap-8">
              {memberships.map((plan, i) => (
                <Reveal key={plan.slug} delay={i * 0.08} className="h-full">
                  <MembershipCard plan={plan} />
                </Reveal>
              ))}
            </div>
            <Reveal className="mt-10">
              <div className="grid grid-cols-1 gap-4 border border-line bg-graphite p-7 text-sm text-steel sm:grid-cols-3">
                <p><span className="font-semibold text-ink">Taahhüt yok.</span> Üyelikler aylık yenilenir; 12 aylık peşin ödemede avantajlı fiyat uygulanır.</p>
                <p><span className="font-semibold text-ink">Kayıt ücreti yok.</span> İlk ay üyelik bedeli dışında kart, dosya ya da kayıt ücreti alınmaz.</p>
                <p><span className="font-semibold text-ink">Dondurma hakkı var.</span> Yılda 30 güne kadar üyeliğini tek taleple dondurabilirsin.</p>
              </div>
              <p className="mt-6 text-xs text-steel/80">
                Fiyatlar tanıtım amaçlı kurgusal demo fiyatlandırmasıdır.
              </p>
            </Reveal>
          </Container>
        </Section>

        <Section ariaLabel="Üyelik soruları" tone="graphite" className="border-t border-line">
          <Container>
            <div className="grid grid-cols-1 gap-10 lg:grid-cols-12">
              <div className="lg:col-span-4">
                <Reveal>
                  <p className="mb-4 text-xs font-semibold uppercase tracking-[0.2em] text-lime">
                    Üyelik Soruları
                  </p>
                  <h2 className="font-display text-[clamp(2.2rem,4.5vw,3.5rem)] leading-[0.95] text-ink">
                    Karar vermeden önce bilmen gerekenler.
                  </h2>
                  <p className="mt-5 leading-relaxed text-steel">
                    Detaylar için ayrıca <a href="/sss" className="text-ink underline underline-offset-4 transition-colors hover:text-lime">SSS sayfasına</a> göz atabilirsin.
                  </p>
                </Reveal>
              </div>
              <Reveal delay={0.1} className="lg:col-span-7 lg:col-start-6">
                <Accordion items={membershipQuestions} />
              </Reveal>
            </div>
          </Container>
        </Section>

        <FinalCTA />
      </main>
      <Footer />
      <StickyMobileCTA />
    </>
  );
}
