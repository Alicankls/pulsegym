import { programs } from "@/data/programs";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { Reveal } from "@/components/ui/Reveal";
import { ProgramCard } from "@/components/cards/ProgramCard";
import { ButtonLink } from "@/components/ui/Button";

export function Programs() {
  return (
    <Section ariaLabel="Antrenman programları" tone="graphite">
      <Container wide>
        <div className="flex flex-wrap items-end justify-between gap-6">
          <SectionHeader
            eyebrow="Programlar"
            title="Hedefine göre antrenman."
            lead="Altı farklı disiplin, tek çatı. Nereden başlayacağını bilmiyorsan ilk değerlendirme bunun için var."
            className="mb-0 md:mb-0"
          />
          <Reveal delay={0.1}>
            <ButtonLink href="/programlar" variant="ghost" withArrow className="mb-2">
              Tüm programları incele
            </ButtonLink>
          </Reveal>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 md:mt-16">
          {programs.map((p, i) => (
            <Reveal key={p.slug} delay={(i % 3) * 0.08}>
              <ProgramCard program={p} index={i} />
            </Reveal>
          ))}
        </div>
      </Container>
    </Section>
  );
}
