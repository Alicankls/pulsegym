import type { Metadata } from "next";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { site } from "@/data/site";

export const metadata: Metadata = {
  alternates: { canonical: "/kvkk" },
  openGraph: { url: "/kvkk" },
  title: "KVKK Aydınlatma Metni",
  description: "PULSE Athletic Club KVKK aydınlatma metni — kurgusal demo içeriği.",
};

const sections = [
  {
    h: "1. Veri Sorumlusunun Kimliği",
    p: `6698 sayılı Kişisel Verilerin Korunması Kanunu ("KVKK") uyarınca veri sorumlusu sıfatıyla ${site.name} (kurgusal demo işletme), ${site.address.street}, ${site.address.district}.`,
  },
  {
    h: "2. Kişisel Verilerin İşlenme Amacı",
    p: "Ücretsiz deneme ve iletişim formlarında paylaştığınız ad-soyad, telefon ve e-posta bilgileri; randevu planlaması, taleplerinizin yanıtlanması ve üyelik süreçlerinin yürütülmesi amaçlarıyla sınırlı olarak işlenir.",
  },
  {
    h: "3. İşlemenin Hukuki Sebebi",
    p: "Verileriniz, KVKK m.5 kapsamında bir hakkın tesisi ve sözleşmenin kurulmasıyla doğrudan ilgili olması sebebiyle, ayrıca meşru menfaat kapsamında işlenmektedir.",
  },
  {
    h: "4. Aktarım",
    p: "Kişisel verileriniz yurt içinde veya yurt dışında üçüncü kişilere aktarılmaz; yalnızca randevu ve iletişim altyapısı sağlayan hizmet sağlayıcılarla, sözleşme gereği gizlilik yükümlülüğü çerçevesinde paylaşılabilir.",
  },
  {
    h: "5. Haklarınız (KVKK m.11)",
    p: `Verilerinize erişme, düzeltilmesini veya silinmesini talep etme, işlemeye itiraz etme ve aktarıldığı üçüncü kişileri öğrenme haklarına sahipsiniz. Başvurularınızı ${site.email} adresine iletebilirsiniz; talepler en geç 30 gün içinde yanıtlanır.`,
  },
  {
    h: "6. Demo Bildirimi",
    p: "Bu sayfa tanıtım amaçlı hazırlanmış kurgusal bir demo içeriğidir; gerçek bir işletmeye ait hukuki metin değildir. Gerçek projede bu sayfa hukuk danışmanı ile hazırlanır.",
  },
];

export default function KvkkPage() {
  return (
    <>
      <Navbar />
      <main id="icerik">
        <section className="border-b border-line bg-carbon pb-12 pt-40 md:pb-16 md:pt-48">
          <Container>
            <p className="mb-4 text-xs font-semibold uppercase tracking-[0.24em] text-lime">Yasal</p>
            <h1 className="font-display text-[clamp(2.6rem,6vw,5rem)] leading-[0.95] text-ink">
              KVKK Aydınlatma Metni
            </h1>
            <p className="mt-4 text-sm text-steel">Son güncelleme: Ağustos 2026</p>
          </Container>
        </section>
        <Section ariaLabel="KVKK aydınlatma metni içeriği" tone="carbon">
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
