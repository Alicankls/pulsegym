import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { faqs } from "@/data/faqs";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { Reveal } from "@/components/ui/Reveal";
import { Accordion } from "@/components/ui/Accordion";
import { JsonLd } from "@/components/ui/JsonLd";
import { faqSchema } from "@/lib/schema";

export function FaqSection({ limit = 6 }: { limit?: number }) {
  const items = faqs.slice(0, limit);
  return (
    <Section ariaLabel="Sık sorulan sorular" tone="graphite" className="border-t border-line">
      {/* Şema yalnızca sayfada görünen sorularla beslenir — Google'ın koşulu bu. */}
      <JsonLd data={faqSchema(items)} />
      <Container>
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <Reveal>
              <p className="mb-4 text-xs font-semibold uppercase tracking-[0.2em] text-lime">
                SSS
              </p>
              <h2 className="font-display text-[clamp(2.2rem,4.5vw,3.5rem)] leading-[0.95] text-ink">
                Aklına takılanların cevabı burada.
              </h2>
              <p className="mt-5 leading-relaxed text-steel">
                Cevabını bulamadığın bir soru mu var? Bize WhatsApp'tan yazman yeterli.
              </p>
              <Link
                href="/sss"
                className="mt-6 inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-[0.14em] text-ink transition-colors hover:text-lime"
              >
                Tüm sorular <ArrowRight size={16} aria-hidden />
              </Link>
            </Reveal>
          </div>
          <Reveal delay={0.1} className="lg:col-span-7 lg:col-start-6">
            <Accordion items={items} />
          </Reveal>
        </div>
      </Container>
    </Section>
  );
}
