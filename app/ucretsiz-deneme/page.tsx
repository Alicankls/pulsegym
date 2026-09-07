import type { Metadata } from "next";
import { Check } from "lucide-react";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { TrialForm } from "@/components/forms/TrialForm";
import { ImagePlaceholder } from "@/components/ui/ImagePlaceholder";
import { site } from "@/data/site";
import { JsonLd } from "@/components/ui/JsonLd";
import { breadcrumbSchema } from "@/lib/schema";

export const metadata: Metadata = {
  alternates: { canonical: "/ucretsiz-deneme" },
  openGraph: { url: "/ucretsiz-deneme" },
  title: "Ücretsiz Deneme",
  description:
    "PULSE Athletic Club'da ücretsiz deneme antrenmanı planlayın. Salon turu, kısa değerlendirme ve ilk antrenman — üyelik zorunluluğu olmadan.",
};

const steps = [
  { n: "01", title: "Formu doldur", text: "30 saniye sürer. Alanını ve uygun gününü seç." },
  { n: "02", title: "Seni arayalım", text: "Aynı gün içinde arayıp saati birlikte netleştirelim." },
  { n: "03", title: "Salona gel", text: "Tur, kısa değerlendirme ve ilk antrenmanın. Hepsi ücretsiz." },
];

const includes = [
  "Salon turu ve tesis tanıtımı",
  "Kısa hareket ve hedef değerlendirmesi",
  "Seçtiğin alanda bir antrenman ya da grup dersi",
  "Sana uygun üyelik planı önerisi",
  "Üyelik zorunluluğu yok, satış baskısı yok",
];

export default function TrialPage() {
  return (
    <>
      <JsonLd data={breadcrumbSchema([{ name: "Ücretsiz Deneme", href: "/ucretsiz-deneme" }])} />
      <Navbar />
      <main id="icerik">
        <section className="border-b border-line bg-carbon pb-16 pt-40 md:pb-24 md:pt-48">
          <Container>
            <div className="grid grid-cols-1 gap-12 lg:grid-cols-12">
              <div className="lg:col-span-6">
                <Reveal>
                  <p className="mb-4 text-xs font-semibold uppercase tracking-[0.24em] text-lime">
                    Ücretsiz Deneme
                  </p>
                  <h1 className="font-display text-[clamp(3rem,7vw,6rem)] leading-[0.92] text-ink">
                    İlk antrenmanın
                    <br />
                    bizden.
                  </h1>
                  <p className="mt-6 max-w-lg text-lg leading-relaxed text-steel">
                    Karar vermeden önce yaşaman gereken tek şey bir antrenman.
                    Formu doldur, gerisini birlikte planlayalım.
                  </p>
                </Reveal>
                <Reveal delay={0.1} className="mt-10">
                  <ul className="flex flex-col">
                    {steps.map((s) => (
                      <li key={s.n} className="flex items-baseline gap-5 border-t border-line py-5 last:border-b">
                        <span className="font-display text-2xl text-lime">{s.n}</span>
                        <div>
                          <h2 className="font-semibold text-ink">{s.title}</h2>
                          <p className="mt-1 text-sm text-steel">{s.text}</p>
                        </div>
                      </li>
                    ))}
                  </ul>
                </Reveal>
                <Reveal delay={0.15} className="mt-8 hidden lg:block">
                  <ImagePlaceholder label="PULSE deneme gününden bir kare" src="/images/pt-session.webp" ratio="aspect-[16/10]" />
                </Reveal>
              </div>

              <div className="lg:col-span-5 lg:col-start-8">
                <Reveal delay={0.1}>
                  <TrialForm />
                </Reveal>
                <Reveal delay={0.15} className="mt-6">
                  <div className="border border-line bg-graphite p-6">
                    <h2 className="text-xs font-semibold uppercase tracking-[0.2em] text-lime">
                      Deneme gününe dahil olanlar
                    </h2>
                    <ul className="mt-4 flex flex-col gap-2.5">
                      {includes.map((i) => (
                        <li key={i} className="flex items-start gap-2.5 text-sm text-steel">
                          <Check size={15} aria-hidden className="mt-0.5 shrink-0 text-lime" />
                          {i}
                        </li>
                      ))}
                    </ul>
                  </div>
                </Reveal>
                <Reveal delay={0.2} className="mt-6 text-center">
                  <p className="text-sm text-steel">
                    Form doldurmayı sevmiyor musun?{" "}
                    <a href={site.whatsappHref} target="_blank" rel="noopener noreferrer" className="font-semibold text-ink underline underline-offset-4 transition-colors hover:text-lime">
                      WhatsApp'tan yaz
                    </a>{" "}
                    veya <a href={site.phoneHref} className="font-semibold text-ink underline underline-offset-4 transition-colors hover:text-lime">ara</a>.
                  </p>
                </Reveal>
              </div>
            </div>
          </Container>
        </section>
      </main>
      <Footer />
    </>
  );
}
