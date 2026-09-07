import type { Metadata } from "next";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { site } from "@/data/site";

export const metadata: Metadata = {
  alternates: { canonical: "/gizlilik-politikasi" },
  openGraph: { url: "/gizlilik-politikasi" },
  title: "Gizlilik Politikası",
  description: "PULSE Athletic Club gizlilik politikası — kurgusal demo içeriği.",
};

const sections = [
  {
    h: "1. Veri Sorumlusu",
    p: `${site.name} (kurgusal demo işletme), ${site.address.street}, ${site.address.district} adresinde faaliyet göstermektedir. Bu sayfa, web sitesi üzerinden paylaşılan kişisel verilerin işlenmesine ilişkin bilgilendirme amaçlıdır.`,
  },
  {
    h: "2. Toplanan Veriler",
    p: "İletişim ve ücretsiz deneme formları aracılığıyla ad-soyad, telefon numarası, e-posta adresi ve paylaşmayı tercih ettiğiniz mesaj içerikleri toplanır. Site, zorunlu olmayan çerezler kullanmaz; analitik ölçüm yapılması durumunda bu ayrıca bildirilir.",
  },
  {
    h: "3. İşleme Amaçları",
    p: "Toplanan veriler yalnızca şu amaçlarla işlenir: deneme antrenmanı randevusunun planlanması, sorularınıza yanıt verilmesi, üyelik süreçlerinin yürütülmesi ve yasal yükümlülüklerin yerine getirilmesi. Verileriniz açık rızanız olmadan pazarlama amaçlı üçüncü taraflarla paylaşılmaz.",
  },
  {
    h: "4. Saklama ve Güvenlik",
    p: "Kişisel veriler, işleme amacının gerektirdiği süre boyunca ve yasal saklama süreleri çerçevesinde güvenli ortamlarda saklanır. Süre sonunda veriler silinir, yok edilir veya anonim hale getirilir.",
  },
  {
    h: "5. Haklarınız",
    p: `Kişisel verilerinize erişme, düzeltilmesini, silinmesini veya işlenmesine itiraz etme haklarına sahipsiniz. Talepleriniz için ${site.email} adresine yazabilirsiniz.`,
  },
  {
    h: "6. Demo Bildirimi",
    p: "Bu sayfa tanıtım amaçlı hazırlanmış kurgusal bir demo içeriğidir; gerçek bir işletmeye ait hukuki metin değildir. Gerçek projede bu sayfa hukuk danışmanı ile hazırlanır.",
  },
];

export default function PrivacyPage() {
  return (
    <>
      <Navbar />
      <main id="icerik">
        <section className="border-b border-line bg-carbon pb-12 pt-40 md:pb-16 md:pt-48">
          <Container>
            <p className="mb-4 text-xs font-semibold uppercase tracking-[0.24em] text-lime">Yasal</p>
            <h1 className="font-display text-[clamp(2.6rem,6vw,5rem)] leading-[0.95] text-ink">
              Gizlilik Politikası
            </h1>
            <p className="mt-4 text-sm text-steel">Son güncelleme: Ağustos 2026</p>
          </Container>
        </section>
        <Section ariaLabel="Gizlilik politikası içeriği" tone="carbon">
          <Container>
            <div className="max-w-3xl">
              {sections.map((s) => (
                <div key={s.h} className="border-b border-line py-7 first:pt-0">
                  <h2 className="text-lg font-semibold text-ink">{s.h}</h2>
                  <p className="mt-3 leading-relaxed text-steel">{s.p}</p>
                </div>
              ))}
            </div>
          </Container>
        </Section>
      </main>
      <Footer />
    </>
  );
}
