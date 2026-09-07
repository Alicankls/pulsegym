import type { Metadata } from "next";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { StickyMobileCTA } from "@/components/layout/StickyMobileCTA";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { Reveal } from "@/components/ui/Reveal";
import { Stat } from "@/components/ui/Stat";
import { ImagePlaceholder } from "@/components/ui/ImagePlaceholder";
import { FinalCTA } from "@/components/sections/FinalCTA";
import { site } from "@/data/site";
import { JsonLd } from "@/components/ui/JsonLd";
import { breadcrumbSchema } from "@/lib/schema";

export const metadata: Metadata = {
  alternates: { canonical: "/kulup" },
  openGraph: { url: "/kulup" },
  title: "Kulüp Hakkında",
  description:
    "2019'dan beri Kadıköy'de. PULSE Athletic Club'ın antrenman felsefesi, koçluk yaklaşımı ve 1.800 m²'lik tesisi hakkında bilgi edinin.",
};

const milestones = [
  { year: "2019", text: "PULSE, Bağdat Caddesi'nde 400 m²'lik ilk stüdyosuyla açıldı. İlk yılın sonunda 380 üye." },
  { year: "2021", text: "Büyüyen toplulukla birlikte bugünkü 1.800 m²'lik tesise taşınıldı; grup dersi stüdyosu ve recovery alanı eklendi." },
  { year: "2023", text: "Eğitmen kadrosu 12 kişiye ulaştı; haftalık ders sayısı 45'i geçti. Aylık ölçüm sistemi tüm üyeliklere standart oldu." },
  { year: "2026", text: "Bugün 2.400'den fazla aktif üye. Değişmeyen tek şey: her üyenin bir programı, her programın bir sorumlusu var." },
];

const values = [
  { title: "Teknik önce gelir", text: "Ağırlık artırmak kolay; doğru hareket etmek öğretilir. Bizim işimiz ikincisi." },
  { title: "Veri hissi yener", text: "Aylık ölçümlerle ilerleme rakamlarla konuşulur; motivasyon iniş çıkışına bağlı kalmaz." },
  { title: "Ortam saygıyla işler", text: "Ekipman yerine bırakılır, sıra paylaşılır, herkesin antrenmanı ciddiye alınır." },
  { title: "Herkes başlayabilir", text: "PULSE'ta üyelerin yarısından fazlası spora burada başladı. Seviye değil, düzen önemli." },
];

export default function AboutPage() {
  return (
    <>
      <JsonLd data={breadcrumbSchema([{ name: "Kulüp", href: "/kulup" }])} />
      <Navbar />
      <main id="icerik">
        <section className="border-b border-line bg-carbon pb-16 pt-40 md:pb-24 md:pt-48">
          <Container>
            <Reveal>
              <p className="mb-4 text-xs font-semibold uppercase tracking-[0.24em] text-lime">
                Kulüp — Est. {site.founded}
              </p>
              <h1 className="font-display text-[clamp(3rem,8vw,7rem)] leading-[0.92] text-ink">
                TRAIN WITH
                <br />
                PURPOSE<span className="text-lime">.</span>
              </h1>
              <p className="mt-6 max-w-2xl text-lg leading-relaxed text-steel md:text-xl">
                PULSE, "salona üye olup yalnız kalmak" fikrine bir cevap olarak kuruldu.
                Amacımız basit: her üyenin hedefine, doğru program ve doğru koçlukla ulaşması.
              </p>
            </Reveal>
          </Container>
        </section>

        <Section ariaLabel="Kulüp hikâyesi" tone="carbon">
          <Container>
            <div className="grid grid-cols-1 gap-12 lg:grid-cols-12">
              <div className="lg:col-span-5">
                <Reveal>
                  <h2 className="font-display text-[clamp(2.2rem,4.5vw,3.5rem)] leading-[0.95] text-ink">
                    Kadıköy'de bir stüdyodan, bölgenin kulübüne.
                  </h2>
                  <p className="mt-5 max-w-md leading-relaxed text-steel">
                    Kurucu ekibimiz yıllarca hem büyük zincir salonlarda hem butik stüdyolarda çalıştı.
                    İkisinin de eksik kaldığı yeri gördüler: zincirlerde koçluk yoktu, butiklerde alan ve ekipman.
                    PULSE ikisini bir araya getirmek için kuruldu.
                  </p>
                </Reveal>
                <Reveal delay={0.12} className="mt-10">
                  <ImagePlaceholder
                    label="PULSE ilk stüdyodan bugüne salon atmosferi"
                    src="/images/club-intro.webp"
                    ratio="aspect-[4/3]"
                    icon
                    sizes="(max-width: 1024px) 100vw, 50vw"
                  />
                </Reveal>
              </div>
              <div className="lg:col-span-6 lg:col-start-7">
                <ul className="flex flex-col">
                  {milestones.map((m, i) => (
                    <Reveal as="li" key={m.year} delay={i * 0.07} className="border-t border-line py-7 last:border-b">
                      <div className="flex items-baseline gap-6">
                        <span className="font-display text-4xl leading-none text-lime">{m.year}</span>
                        <p className="leading-relaxed text-steel">{m.text}</p>
                      </div>
                    </Reveal>
                  ))}
                </ul>
              </div>
            </div>
          </Container>
        </Section>

        <Section ariaLabel="Koçluk felsefesi" tone="graphite" className="border-t border-line">
          <Container>
            <div className="grid grid-cols-1 gap-12 lg:grid-cols-12">
              <div className="lg:col-span-4">
                <Reveal>
                  <p className="mb-4 text-xs font-semibold uppercase tracking-[0.2em] text-lime">
                    Yaklaşımımız
                  </p>
                  <h2 className="font-display text-[clamp(2.2rem,4.5vw,3.5rem)] leading-[0.95] text-ink">
                    Koçluk bizde laf değil, iş tanımı.
                  </h2>
                  <p className="mt-5 leading-relaxed text-steel">
                    PULSE'ta eğitmenler "salonda duran kişiler" değildir. Her üyenin programı bir
                    eğitmene atanır, her ay ölçümü yapılır, her dönem programı güncellenir.
                  </p>
                </Reveal>
              </div>
              <div className="grid grid-cols-1 gap-x-10 gap-y-8 sm:grid-cols-2 lg:col-span-7 lg:col-start-6">
                {values.map((v, i) => (
                  <Reveal key={v.title} delay={i * 0.07}>
                    <div className="border-t-2 border-line pt-5">
                      <h3 className="text-lg font-semibold text-ink">{v.title}</h3>
                      <p className="mt-2 text-sm leading-relaxed text-steel">{v.text}</p>
                    </div>
                  </Reveal>
                ))}
              </div>
            </div>
          </Container>
        </Section>

        <section aria-label="Tesis metrikleri" className="border-y border-line bg-carbon">
          <Container wide className="py-14 md:py-20">
            <div className="grid grid-cols-2 gap-x-4 gap-y-10 lg:grid-cols-4">
              {site.stats.map((s, i) => (
                <Reveal key={s.label} delay={i * 0.08}>
                  <Stat value={s.value} suffix={s.suffix} label={s.label} />
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