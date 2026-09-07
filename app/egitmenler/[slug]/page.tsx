import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ChevronRight, BadgeCheck } from "lucide-react";
import { coaches, getCoach } from "@/data/coaches";
import { programs } from "@/data/programs";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { StickyMobileCTA } from "@/components/layout/StickyMobileCTA";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { Reveal } from "@/components/ui/Reveal";
import { ImagePlaceholder } from "@/components/ui/ImagePlaceholder";
import { ButtonLink } from "@/components/ui/Button";
import { FinalCTA } from "@/components/sections/FinalCTA";
import { JsonLd } from "@/components/ui/JsonLd";
import { breadcrumbSchema, coachSchema } from "@/lib/schema";

export function generateStaticParams() {
  return coaches.map((c) => ({ slug: c.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const coach = getCoach(slug);
  if (!coach) return {};
  const url = `/egitmenler/${coach.slug}`;
  return {
    title: `${coach.name} — ${coach.role}`,
    description: `${coach.name}, ${coach.specialty} uzmanı. PULSE Athletic Club eğitmen profili, antrenman felsefesi ve uzmanlık alanları.`,
    alternates: { canonical: url },
    openGraph: {
      url,
      title: `${coach.name} — ${coach.role} | PULSE Athletic Club`,
      description: coach.specialty,
      images: [{ url: coach.image, alt: coach.alt }],
    },
  };
}

export default async function CoachDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const coach = getCoach(slug);
  if (!coach) notFound();

  const relatedPrograms = programs.filter((p) => p.coachSlugs.includes(coach.slug));

  return (
    <>
      <JsonLd
        data={[
          coachSchema(coach),
          breadcrumbSchema([
            { name: "Eğitmenler", href: "/egitmenler" },
            { name: coach.name, href: `/egitmenler/${coach.slug}` },
          ]),
        ]}
      />
      <Navbar />
      <main id="icerik">
        <section className="border-b border-line bg-carbon pb-16 pt-40 md:pb-24 md:pt-48">
          <Container>
            <Reveal>
              <nav aria-label="Breadcrumb" className="mb-8 flex items-center gap-2 text-xs uppercase tracking-[0.14em] text-steel">
                <Link href="/egitmenler" className="transition-colors hover:text-ink">Eğitmenler</Link>
                <ChevronRight size={12} aria-hidden />
                <span className="text-lime">{coach.name}</span>
              </nav>
            </Reveal>
            <div className="grid grid-cols-1 gap-10 lg:grid-cols-12">
              <Reveal className="lg:col-span-5">
                <ImagePlaceholder
                  label={coach.alt}
                  src={coach.image}
                  ratio="aspect-[3/4]"
                  icon
                  sizes="(max-width: 1024px) 100vw, 42vw"
                />
              </Reveal>
              <div className="flex flex-col justify-center lg:col-span-6 lg:col-start-7">
                <Reveal>
                  <p className="text-xs font-semibold uppercase tracking-[0.24em] text-lime">{coach.role}</p>
                  <h1 className="mt-3 font-display text-[clamp(3rem,7vw,6rem)] leading-[0.92] text-ink">
                    {coach.name}
                  </h1>
                  <p className="mt-3 text-lg text-steel">{coach.specialty}</p>
                  <blockquote className="mt-8 border-l-2 border-lime pl-5 text-xl italic leading-relaxed text-ink">
                    "{coach.quote}"
                  </blockquote>
                  <div className="mt-9 flex flex-col gap-3 sm:flex-row">
                    <ButtonLink href="/ucretsiz-deneme" withArrow>Bu Eğitmenle Tanış</ButtonLink>
                    <ButtonLink href="/egitmenler" variant="secondary">Tüm Eğitmenler</ButtonLink>
                  </div>
                </Reveal>
              </div>
            </div>
          </Container>
        </section>

        <Section ariaLabel="Eğitmen biyografisi" tone="carbon">
          <Container>
            <div className="grid grid-cols-1 gap-12 lg:grid-cols-12">
              <div className="lg:col-span-6">
                <Reveal>
                  <h2 className="font-display text-4xl tracking-wide text-ink">Hakkında</h2>
                  <div className="mt-5 flex flex-col gap-4">
                    {coach.bio.map((p) => (
                      <p key={p.slice(0, 24)} className="leading-relaxed text-steel">{p}</p>
                    ))}
                  </div>
                </Reveal>
                <Reveal delay={0.08}>
                  <h3 className="mt-10 font-display text-3xl tracking-wide text-ink">Antrenman felsefesi</h3>
                  <p className="mt-4 leading-relaxed text-steel">{coach.philosophy}</p>
                </Reveal>
              </div>
              <div className="lg:col-span-5 lg:col-start-8">
                <Reveal>
                  <div className="border border-line bg-graphite p-7">
                    <h3 className="text-xs font-semibold uppercase tracking-[0.2em] text-lime">Uzmanlık alanları</h3>
                    <ul className="mt-4 flex flex-col gap-3">
                      {coach.expertise.map((e) => (
                        <li key={e} className="flex items-start gap-3 text-sm text-steel">
                          <span aria-hidden className="mt-2 h-1.5 w-1.5 shrink-0 bg-lime" />
                          {e}
                        </li>
                      ))}
                    </ul>
                    <h3 className="mt-8 text-xs font-semibold uppercase tracking-[0.2em] text-lime">Sertifikalar</h3>
                    <ul className="mt-4 flex flex-col gap-3">
                      {coach.certifications.map((c) => (
                        <li key={c} className="flex items-center gap-2.5 text-sm text-ink">
                          <BadgeCheck size={16} aria-hidden className="shrink-0 text-lime" />
                          {c}
                        </li>
                      ))}
                    </ul>
                  </div>
                </Reveal>
                <Reveal delay={0.1} className="mt-8">
                  <h3 className="text-xs font-semibold uppercase tracking-[0.2em] text-lime">İlgili programlar</h3>
                  <ul className="mt-4 flex flex-col">
                    {relatedPrograms.map((p) => (
                      <li key={p.slug} className="border-b border-line first:border-t">
                        <Link
                          href={`/programlar/${p.slug}`}
                          className="group flex items-center justify-between py-4 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-lime"
                        >
                          <span className="font-display text-xl tracking-wide text-ink transition-colors group-hover:text-lime">
                            {p.name}
                          </span>
                          <ChevronRight size={16} aria-hidden className="text-steel transition-all group-hover:translate-x-1 group-hover:text-lime" />
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