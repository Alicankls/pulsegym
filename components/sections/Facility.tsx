import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { Reveal } from "@/components/ui/Reveal";
import { ImagePlaceholder } from "@/components/ui/ImagePlaceholder";

const zones = [
  {
    name: "Strength Zone",
    desc: "Rack'ler, platformlar ve 50 kg'a kadar dambıl hattı.",
    label: "PULSE güç bölümü geniş açı",
    src: "/images/facility-strength.webp",
    span: "lg:col-span-7",
    ratio: "aspect-[16/10]",
  },
  {
    name: "Fonksiyonel Alan",
    desc: "20 m turf şerit, rig ve açık zemin.",
    label: "PULSE fonksiyonel alan, dikey",
    src: "/images/facility-functional.webp",
    span: "lg:col-span-5",
    ratio: "aspect-[4/5] lg:h-full lg:aspect-auto",
  },
  {
    name: "Kardiyo",
    desc: "Pencere önünde 20+ cihazlık kardiyo hattı.",
    label: "PULSE kardiyo bölümü",
    src: "/images/facility-cardio.webp",
    span: "lg:col-span-5",
    ratio: "aspect-[16/10]",
  },
  {
    name: "Recovery",
    desc: "Esneme, mobilite ve sessiz toparlanma bölümü.",
    label: "PULSE recovery alanı",
    src: "/images/facility-recovery.webp",
    span: "lg:col-span-4",
    ratio: "aspect-[16/10]",
  },
  {
    name: "Soyunma Odaları",
    desc: "Duşlar, kilitli dolaplar, günlük temizlik düzeni.",
    label: "PULSE soyunma odası",
    src: "/images/facility-locker.webp",
    span: "lg:col-span-3",
    ratio: "aspect-[4/5] lg:h-full lg:aspect-auto",
  },
];

export function Facility() {
  return (
    <Section ariaLabel="Tesis tanıtımı" tone="graphite" className="border-t border-line">
      <Container wide>
        <SectionHeader
          eyebrow="Tesis"
          title="1.800 m², santimi boşa harcanmamış."
          lead="Gelmeden önce görmek istediğini biliyoruz. İşte salon, olduğu gibi."
        />
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-12">
          {zones.map((z, i) => (
            <Reveal key={z.name} delay={(i % 3) * 0.08} className={z.span}>
              <figure className="group relative h-full overflow-hidden border border-line">
                <div className="h-full transition-transform duration-500 group-hover:scale-105">
                  <ImagePlaceholder label={z.label} src={z.src} ratio={z.ratio} className="h-full" />
                </div>
                <figcaption className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-carbon/95 via-carbon/60 to-transparent p-5 pt-14">
                  <h3 className="font-display text-2xl tracking-wide text-ink">{z.name}</h3>
                  <p className="mt-1 text-sm text-steel">{z.desc}</p>
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
        <Reveal delay={0.1} className="mt-10">
          <Link
            href="/galeri"
            className="inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-[0.14em] text-ink transition-colors hover:text-lime"
          >
            Tüm tesisi galeride gör <ArrowRight size={16} aria-hidden />
          </Link>
        </Reveal>
      </Container>
    </Section>
  );
}
