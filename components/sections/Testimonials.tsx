import { testimonials } from "@/data/testimonials";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { Reveal } from "@/components/ui/Reveal";
import { TestimonialCard } from "@/components/cards/TestimonialCard";

export function Testimonials() {
  return (
    <Section ariaLabel="Üye görüşleri" tone="graphite" className="border-t border-line">
      <Container wide>
        <SectionHeader
          eyebrow="Üye Görüşleri"
          title="Salonu bizden değil, üyelerden dinle."
        />
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((t, i) => (
            <Reveal key={t.name} delay={(i % 3) * 0.08} className="h-full">
              <TestimonialCard item={t} />
            </Reveal>
          ))}
        </div>
        <p className="mt-8 text-xs text-steel/80">
          Görüşler tanıtım amaçlı hazırlanmış kurgusal demo içerikleridir.
        </p>
      </Container>
    </Section>
  );
}
