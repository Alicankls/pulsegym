import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { memberships } from "@/data/memberships";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { Reveal } from "@/components/ui/Reveal";
import { MembershipCard } from "@/components/cards/MembershipCard";

export function Memberships() {
  return (
    <Section ariaLabel="Üyelik planları" tone="carbon" className="border-t border-line">
      <Container>
        <div className="flex flex-wrap items-end justify-between gap-6">
          <SectionHeader
            eyebrow="Üyelik"
            title="Açık fiyat, net içerik."
            lead="Sürpriz ücret yok, taahhüt dayatması yok. Hangi planın sana uygun olduğundan emin değilsen ücretsiz denemede birlikte bakarız."
            className="mb-0 md:mb-0"
          />
          <Reveal delay={0.1}>
            <Link
              href="/uyelik"
              className="mb-2 inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-[0.14em] text-ink transition-colors hover:text-lime"
            >
              Planları karşılaştır <ArrowRight size={16} aria-hidden />
            </Link>
          </Reveal>
        </div>
        <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-3 md:mt-16 lg:gap-8">
          {memberships.map((plan, i) => (
            <Reveal key={plan.slug} delay={i * 0.08} className="h-full">
              <MembershipCard plan={plan} />
            </Reveal>
          ))}
        </div>
        <p className="mt-8 text-xs text-steel/80">
          Fiyatlar tanıtım amaçlı kurgusal demo fiyatlandırmasıdır.
        </p>
      </Container>
    </Section>
  );
}
