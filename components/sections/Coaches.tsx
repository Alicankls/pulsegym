import { coaches } from "@/data/coaches";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { Reveal } from "@/components/ui/Reveal";
import { CoachCard } from "@/components/cards/CoachCard";
import { ButtonLink } from "@/components/ui/Button";

export function Coaches() {
  return (
    <Section ariaLabel="Eğitmen kadrosu" tone="carbon" className="border-t border-line">
      <Container wide>
        <div className="flex flex-wrap items-end justify-between gap-6">
          <SectionHeader
            eyebrow="Eğitmenler"
            title="Seni takip eden bir ekip var."
            lead="Programını yazan, tekniğine bakan ve gelişimini kayıt altında tutan 12 kişilik eğitmen kadrosu."
            className="mb-0 md:mb-0"
          />
          <Reveal delay={0.1}>
            <ButtonLink href="/egitmenler" variant="ghost" withArrow className="mb-2">
              Tüm eğitmenlerle tanış
            </ButtonLink>
          </Reveal>
        </div>
        <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4 md:mt-16">
          {coaches.map((c, i) => (
            <Reveal key={c.slug} delay={i * 0.08}>
              <CoachCard coach={c} />
            </Reveal>
          ))}
        </div>
      </Container>
    </Section>
  );
}
