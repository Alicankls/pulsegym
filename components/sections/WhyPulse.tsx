import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { Reveal } from "@/components/ui/Reveal";
import { ImagePlaceholder } from "@/components/ui/ImagePlaceholder";

const reasons = [
  {
    title: "Uzman Koçluk",
    text: "12 eğitmenin her biri kendi alanında sertifikalı. Programını yazan da, sahada tekniğine bakan da aynı ekip.",
  },
  {
    title: "Premium Ekipman",
    text: "Plate-loaded makineler, 5 rack/platform hattı, modern kardiyo donanımı. Bakım takvimi var, arızalı alet köşesi yok.",
  },
  {
    title: "Yapılandırılmış İlerleme",
    text: "Aylık ölçüm ve program güncellemesi standart. İlerleyip ilerlemediğini tahminle değil, veriyle bilirsin.",
  },
  {
    title: "Performans İçin Tasarım",
    text: "Salon yerleşimi antrenman akışına göre kuruldu: ısınma alanı, ana bölümler, recovery. Zaman kaybettiren düzen yok.",
  },
];

export function WhyPulse() {
  return (
    <Section ariaLabel="PULSE farklılaştırıcıları" tone="carbon" className="border-t border-line">
      <Container>
        <SectionHeader
          eyebrow="PULSE Farkı"
          title="Üyelik değil, sistem."
          lead="Birçok salon sana anahtar verir ve yalnız bırakır. PULSE'ta üyelik; program, takip ve koçlukla birlikte gelir."
        />
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-12">
          <div className="grid grid-cols-1 gap-x-10 gap-y-10 sm:grid-cols-2 lg:col-span-7">
            {reasons.map((r, i) => (
              <Reveal key={r.title} delay={i * 0.07}>
                <div className="border-t-2 border-line pt-5">
                  <h3 className="text-xl font-semibold text-ink">{r.title}</h3>
                  <p className="mt-3 leading-relaxed text-steel">{r.text}</p>
                </div>
              </Reveal>
            ))}
          </div>
          <Reveal delay={0.15} className="lg:col-span-5">
            <div className="grid h-full grid-rows-2 gap-6">
              <ImagePlaceholder label="PULSE eğitmenle teknik düzeltme anı" src="/images/pt-session.webp" ratio="h-full" />
              <ImagePlaceholder label="PULSE plaka ve bar detayı" src="/images/equipment-detail.webp" ratio="h-full" icon />
            </div>
          </Reveal>
        </div>
      </Container>
    </Section>
  );
}
