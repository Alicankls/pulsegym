import { site } from "@/data/site";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { ButtonLink } from "@/components/ui/Button";
import { ImagePlaceholder } from "@/components/ui/ImagePlaceholder";

export function FinalCTA() {
  return (
    <section aria-label="Ücretsiz deneme çağrısı" className="relative overflow-hidden border-t border-line">
      <div className="absolute inset-0">
        <ImagePlaceholder
          label="PULSE karanlık salon silüeti"
          src="/images/cta-bg.webp"
          ratio="h-full"
          className="h-full"
          sizes="100vw"
        />
      </div>
      <div aria-hidden className="absolute inset-0 bg-carbon/80" />
      <Container className="relative py-24 md:py-36">
        <Reveal className="max-w-3xl">
          <p className="mb-4 text-xs font-semibold uppercase tracking-[0.24em] text-lime">
            Ücretsiz Deneme
          </p>
          <h2 className="font-display text-[clamp(2.8rem,8vw,6.5rem)] leading-[0.92] text-ink">
            BİR SONRAKİ ANTRENMANIN
            <br />
            HER ŞEYİ DEĞİŞTİREBİLİR.
          </h2>
          <p className="mt-6 max-w-xl text-lg leading-relaxed text-ink/85">
            Formu doldur, ekibimiz aynı gün seni arasın. Salon turu, kısa değerlendirme
            ve ilk antrenmanın — hepsi ücretsiz, hiçbir üyelik zorunluluğu yok.
          </p>
          <div className="mt-9 flex flex-col gap-3 sm:flex-row sm:gap-4">
            <ButtonLink href={site.cta.href} withArrow>
              Ücretsiz Denemeyi Planla
            </ButtonLink>
            <ButtonLink href={site.whatsappHref} variant="whatsapp" external>
              WhatsApp'tan Yaz
            </ButtonLink>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
