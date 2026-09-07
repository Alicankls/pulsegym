import { site } from "@/data/site";
import { ButtonLink } from "@/components/ui/Button";
import { ImagePlaceholder } from "@/components/ui/ImagePlaceholder";

export function Hero() {
  return (
    <section aria-label="PULSE tanıtım" className="relative flex min-h-[100svh] items-end overflow-hidden">
      {/* Zemin görseli (placeholder → hero-gym-wide.jpg) */}
      <div className="absolute inset-0">
        <ImagePlaceholder
          label="PULSE ana antrenman salonu, geniş açı"
          src="/images/hero-gym-wide.webp"
          ratio="h-full"
          className="h-full"
          priority
          sizes="100vw"
        />
      </div>
      {/* Karartma: metin okunabilirliği için */}
      <div aria-hidden className="absolute inset-0 bg-gradient-to-t from-carbon via-carbon/55 to-carbon/30" />
      <div aria-hidden className="absolute inset-0 bg-gradient-to-r from-carbon/70 via-transparent to-transparent" />

      <div className="relative mx-auto w-full max-w-[1440px] px-5 pb-16 pt-40 md:px-8 md:pb-24 lg:px-10">
        <p className="mb-5 text-xs font-semibold uppercase tracking-[0.24em] text-lime">
          {site.name} — Kadıköy / İstanbul
        </p>
        <h1 className="font-display text-[clamp(3.6rem,11.5vw,9.5rem)] leading-[0.9] text-ink">
          BUILD STRENGTH.
          <br />
          MOVE BETTER.
          <br />
          <span className="text-lime">LIVE STRONGER.</span>
        </h1>
        <p className="mt-6 max-w-xl text-lg leading-relaxed text-ink/90 md:text-xl">
          Modern antrenman, uzman eğitmen kadrosu ve ilerlemeni merkeze alan bir ortam.
          Daha güçlü bir versiyonun burada başlar.
        </p>
        <div className="mt-9 flex flex-col gap-3 sm:flex-row sm:gap-4">
          <ButtonLink href={site.cta.href} withArrow>
            {site.cta.label}
          </ButtonLink>
          <ButtonLink href="/kulup" variant="secondary">
            Kulübü Keşfet
          </ButtonLink>
        </div>

        {/* alt bilgi şeridi */}
        <div className="mt-14 flex flex-wrap items-center gap-x-8 gap-y-3 border-t border-ink/15 pt-6 text-xs font-medium uppercase tracking-[0.16em] text-ink/70">
          <span>Hafta içi 06:00 – 23:00</span>
          <span className="hidden h-3 w-px bg-ink/30 sm:block" aria-hidden />
          <span>Bağdat Caddesi No:124, Kadıköy</span>
          <span className="hidden h-3 w-px bg-ink/30 sm:block" aria-hidden />
          <span>2019'dan beri</span>
        </div>
      </div>
    </section>
  );
}
