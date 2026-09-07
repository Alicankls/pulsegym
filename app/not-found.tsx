import type { Metadata } from "next";
import Link from "next/link";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { ButtonLink } from "@/components/ui/Button";

export const metadata: Metadata = {
  title: "Sayfa bulunamadı",
  // 404 içeriği indekslenmemeli; bağlantılar taranmaya devam etsin.
  robots: { index: false, follow: true },
};

export default function NotFound() {
  return (
    <>
      <Navbar />
      <main id="icerik" className="flex min-h-[100svh] items-center bg-carbon">
        <div className="mx-auto w-full max-w-3xl px-5 py-32 text-center md:px-8">
          <p className="text-xs font-semibold uppercase tracking-[0.24em] text-lime">Hata 404</p>
          <h1 className="mt-4 font-display text-[clamp(4rem,14vw,10rem)] leading-[0.9] text-ink">
            BU SAYFA
            <br />
            ANTRENMANA
            <br />
            <span className="text-lime">GELMEMİŞ.</span>
          </h1>
          <p className="mx-auto mt-6 max-w-md leading-relaxed text-steel">
            Aradığın sayfa taşınmış ya da hiç var olmamış olabilir. Sen en iyisi ısınmadan devam et.
          </p>
          <div className="mt-9 flex flex-col justify-center gap-3 sm:flex-row">
            <ButtonLink href="/">Ana Sayfaya Dön</ButtonLink>
            <ButtonLink href="/ucretsiz-deneme" variant="secondary">Ücretsiz Deneme</ButtonLink>
          </div>
          <p className="mt-10 text-sm text-steel">
            Kaybolmak yerine <Link href="/programlar" className="text-ink underline underline-offset-4 hover:text-lime">programlara</Link> göz atabilirsin.
          </p>
        </div>
      </main>
      <Footer />
    </>
  );
}
