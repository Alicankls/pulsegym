import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { weekSchedule, classTypes } from "@/data/schedule";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { Reveal } from "@/components/ui/Reveal";
import { ScheduleItem } from "@/components/cards/ScheduleItem";
import { ImagePlaceholder } from "@/components/ui/ImagePlaceholder";

export function ClassPreview() {
  const today = weekSchedule[0]; // Pazartesi örneği
  const preview = today.sessions.slice(0, 5);

  return (
    <Section ariaLabel="Grup dersleri önizleme" tone="graphite" className="border-t border-line">
      <Container>
        <SectionHeader
          eyebrow="Ders Programı"
          title="Haftada 45+ canlı ders."
          lead="HIIT, Mobility, Core, Conditioning, Functional Strength. 14 kişilik kontenjan, eğitmen gözetimi, gerçek enerji."
        />
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-12">
          {/* ders türleri */}
          <div className="lg:col-span-5">
            <ul className="flex flex-col">
              {classTypes.map((c, i) => (
                <Reveal as="li" key={c.name} delay={i * 0.06} className="border-t border-line py-5 last:border-b">
                  <div className="flex items-baseline justify-between gap-4">
                    <h3 className="font-display text-3xl tracking-wide text-ink">{c.name}</h3>
                  </div>
                  <p className="mt-2 text-sm leading-relaxed text-steel">{c.desc}</p>
                </Reveal>
              ))}
            </ul>
            <Reveal delay={0.1} className="mt-8 hidden lg:block">
              <ImagePlaceholder label="PULSE stüdyosunda HIIT dersi" src="/images/group-hiit.webp" ratio="aspect-[16/10]" />
            </Reveal>
          </div>

          {/* günün dersleri */}
          <Reveal delay={0.1} className="lg:col-span-6 lg:col-start-7">
            <div className="border border-line bg-charcoal p-6 md:p-8">
              <div className="flex items-center justify-between gap-4">
                <h3 className="font-display text-2xl tracking-wide text-ink">
                  Bugünden örnek — {today.day}
                </h3>
                <span className="bg-lime px-2.5 py-1 text-[0.65rem] font-bold uppercase tracking-[0.14em] text-carbon">
                  Canlı Program
                </span>
              </div>
              <div className="mt-4 border-t border-line">
                {preview.map((s) => (
                  <ScheduleItem key={`${s.time}-${s.name}`} session={s} />
                ))}
              </div>
              <p className="mt-4 text-xs text-steel">
                Örnek gün görünümü — tam program haftalık olarak güncellenir.
              </p>
              <Link
                href="/ders-programi"
                className="mt-6 inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-[0.14em] text-ink transition-colors hover:text-lime"
              >
                Tam haftalık program <ArrowRight size={16} aria-hidden />
              </Link>
            </div>
          </Reveal>
        </div>
      </Container>
    </Section>
  );
}
