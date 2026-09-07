import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Check, ChevronRight, ArrowRight } from "lucide-react";
import { programs, getProgram } from "@/data/programs";
import { getCoachesByProgram } from "@/data/coaches";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { StickyMobileCTA } from "@/components/layout/StickyMobileCTA";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { Reveal } from "@/components/ui/Reveal";
import { Accordion } from "@/components/ui/Accordion";
import { ImagePlaceholder } from "@/components/ui/ImagePlaceholder";
import { ButtonLink } from "@/components/ui/Button";
import { CoachCard } from "@/components/cards/CoachCard";
import { FinalCTA } from "@/components/sections/FinalCTA";
import { JsonLd } from "@/components/ui/JsonLd";
import { breadcrumbSchema, faqSchema, programSchema } from "@/lib/schema";

export function generateStaticParams() {
  return programs.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const program = getProgram(slug);
  if (!program) return {};
  const url = `/programlar/${program.slug}`;
  return {
    title: program.name,
    description: `${program.short} Kadıköy PULSE Athletic Club'da program detaylarını inceleyin.`,
    alternates: { canonical: url },
    openGraph: {
      url,
      title: `${program.name} — PULSE Athletic Club`,
      description: program.short,
      images: [{ url: program.image, alt: program.alt }],
    },
  };
}

export default async function ProgramDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const program = getProgram(slug);
  if (!program) notFound();

  const relatedCoaches = getCoachesByProgram(program.coachSlugs);
  const others = programs.filter((p) => p.slug !== slug).slice(0, 3);

  return (
    <>
      <JsonLd
        data={[
          programSchema(program),
          breadcrumbSchema([
            { name: "Programlar", href: "/programlar" },
            { name: program.name, href: `/programlar/${program.slug}` },
          ]),
          ...(program.faq.length ? [faqSchema(program.faq)] : []),
        ]}
      />
      <Navbar />
      <main id="icerik">
        <section className="border-b border-line bg-carbon pb-16 pt-40 md:pb-24 md:pt-48">
          <Container>
            <Reveal>
              <nav aria-label="Breadcrumb" className="mb-6 flex items-center gap-2 text-xs uppercase tracking-[0.14em] text-steel">
                <Link href="/programlar" className="transition-colors hover:text-ink">Programlar</Link>
                <ChevronRight size={12} aria-hidden />
                <span className="text-lime">{program.name}</span>
              </nav>
              <h1 className="font-display text-[clamp(3rem,8vw,7rem)] leading-[0.92] text-ink">
                {program.name}
              </h1>
              <p className="mt-6 max-w-2xl text-lg leading-relaxed text-steel md:text-xl">
                {program.description}
              </p>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <ButtonLink href="/ucretsiz-deneme" withArrow>Ücretsiz Deneme</ButtonLink>
                <ButtonLink href="/programlar" variant="secondary">Diğer Programlar</ButtonLink>
              </div>
            </Reveal>
          </Container>
        </section>

        <Section ariaLabel="Program detayları" tone="carbon">
          <Container>
            <div className="grid grid-cols-1 gap-12 lg:grid-cols-12">
              <Reveal className="lg:col-span-7">
                <ImagePlaceholder
                  label={program.alt}
                  src={program.image}
                  ratio="aspect-[16/10]"
                  icon
                  sizes="(max-width: 1024px) 100vw, 58vw"
                />
              </Reveal>
              <div className="lg:col-span-5">
                <Reveal>
                  <h2 className="font-display text-4xl tracking-wide text-ink">Bu program kimin için?</h2>
                  <ul className="mt-6 flex flex-col gap-4">
                    {program.forWhom.map((f) => (
                      <li key={f} className="flex items-start gap-3 border-b border-line pb-4">
                        <Check size={18} aria-hidden className="mt-0.5 shrink-0 text-lime" />
                        <span className="text-steel">{f}</span>
                      </li>
                    ))}
                  </ul>
                </Reveal>
              </div>
            </div>
          </Container>
        </Section>

        <Section ariaLabel="Faydalar ve beklentiler" tone="graphite" className="border-t border-line">
          <Container>
            <div className="grid grid-cols-1 gap-12 lg:grid-cols-2">
              <Reveal>
                <h2 className="font-display text-4xl tracking-wide text-ink">Ne kazandırır?</h2>
                <ul className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2">
                  {program.benefits.map((b) => (
                    <li key={b} className="flex items-start gap-3 border border-line bg-charcoal p-4">
                      <Check size={16} aria-hidden className="mt-0.5 shrink-0 text-lime" />
                      <span className="text-sm text-steel">{b}</span>
                    </li>
                  ))}
                </ul>
              </Reveal>
              <Reveal delay={0.08}>
                <h2 className="font-display text-4xl tracking-wide text-ink">Seni ne bekliyor?</h2>
                <ul className="mt-6 flex flex-col gap-4">
                  {program.expect.map((e, i) => (
                    <li key={e} className="flex items-baseline gap-4 border-b border-line pb-4">
                      <span className="font-display text-xl text-lime">{String(i + 1).padStart(2, "0")}</span>
                      <span className="text-steel">{e}</span>
                    </li>
                  ))}
                </ul>
              </Reveal>
            </div>
            <Reveal className="mt-14">
              <div className="border border-line bg-carbon p-7 md:p-9">
                <h2 className="font-display text-3xl tracking-wide text-ink">Antrenman ortamı & ekipman</h2>
                <ul className="mt-5 grid grid-cols-1 gap-x-8 gap-y-3 sm:grid-cols-2">
                  {program.equipment.map((e) => (
                    <li key={e} className="flex items-start gap-3 text-sm text-steel">
                      <span aria-hidden className="mt-2 h-1.5 w-1.5 shrink-0 bg-lime" />
                      {e}
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          </Container>
        </Section>

        {/* İlgili eğitmenler */}
        <Section ariaLabel="Program eğitmenleri" tone="carbon" className="border-t border-line">
          <Container wide>
            <Reveal>
              <h2 className="font-display text-[clamp(2rem,4vw,3rem)] leading-none text-ink">
                Bu programın eğitmenleri
              </h2>
            </Reveal>
            <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {relatedCoaches.map((c, i) => (
                <Reveal key={c.slug} delay={i * 0.08}>
                  <CoachCard coach={c} />
                </Reveal>
              ))}
            </div>
          </Container>
        </Section>

        {/* Program SSS + ilişkili programlar */}
        <Section ariaLabel="Sık sorulan sorular" tone="graphite" className="border-t border-line">
          <Container>
            <div className="grid grid-cols-1 gap-12 lg:grid-cols-12">
              <div className="lg:col-span-6">
                <Reveal>
                  <h2 className="font-display text-[clamp(2rem,4vw,3rem)] leading-none text-ink">
                    {program.name} hakkında sorular
                  </h2>
                </Reveal>
                <Reveal delay={0.08} className="mt-8">
                  <Accordion items={program.faq} />
                </Reveal>
              </div>
              <div className="lg:col-span-5 lg:col-start-8">
                <Reveal>
                  <h3 className="text-xs font-semibold uppercase tracking-[0.2em] text-lime">
                    Diğer programlar
                  </h3>
                  <ul className="mt-6 flex flex-col">
                    {others.map((p) => (
                      <li key={p.slug} className="border-b border-line first:border-t">
                        <Link
                          href={`/programlar/${p.slug}`}
                          className="group flex items-center justify-between gap-4 py-5 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-lime"
                        >
                          <div>
                            <p className="font-display text-2xl tracking-wide text-ink transition-colors group-hover:text-lime">
                              {p.name}
                            </p>
                            <p className="mt-1 text-sm text-steel">{p.short}</p>
                          </div>
                          <ArrowRight size={18} aria-hidden className="shrink-0 text-steel transition-all group-hover:translate-x-1 group-hover:text-lime" />
                        </Link>
                      </li>
                    ))}
                  </ul>
                </Reveal>
              </div>
            </div>
          </Container>
        </Section>

        <FinalCTA />
      </main>
      <Footer />
      <StickyMobileCTA />
    </>
  );
}