import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { Reveal } from "@/components/ui/Reveal";
import { ImagePlaceholder } from "@/components/ui/ImagePlaceholder";

const themes = [
  { n: "01", title: "Antrenman", text: "Programın hedefe göre yazılır; salonda ne yapacağını bilerek gelirsin." },
  { n: "02", title: "Koçluk", text: "Eğitmenler sahada, gözü üzerinde. Soru sormak için randevu gerekmez." },
  { n: "03", title: "Ortam", text: "1.800 m²; kalabalık kontrolü, temizlik düzeni ve gerçek çalışma alanı." },
  { n: "04", title: "İlerleme", text: "Aylık ölçüm, takip edilen program. Gelişim hisle değil rakamla konuşulur." },
  { n: "05", title: "Topluluk", text: "Aynı saatte gelen aynı yüzler. Motivasyonun çoğu buradan gelir." },
];

export function ClubIntro() {
  return (
    <Section ariaLabel="PULSE farkı" tone="carbon">
      <Container>
        <div className="grid grid-cols-1 gap-14 lg:grid-cols-12 lg:gap-10">
          <div className="lg:col-span-5">
            <Reveal>
              <p className="mb-4 text-xs font-semibold uppercase tracking-[0.2em] text-lime">
                Neden PULSE
              </p>
              <h2 className="font-display text-[clamp(2.6rem,6vw,5rem)] leading-[0.95] text-ink">
                Burada antrenman
                <br />
                tesadüfe
                <br />
                bırakılmaz.
              </h2>
              <p className="mt-6 max-w-md text-lg leading-relaxed text-steel">
                PULSE bir makine deposu değil. Her üyenin bir programı, her programın bir
                sorumlusu, her ayın bir ölçümü var. Salona ilk kez giriyorsan da, yıllardır
                antrenman yapıyorsan da sistem aynı ciddiyetle işler.
              </p>
            </Reveal>
            <Reveal delay={0.15} className="mt-10 hidden lg:block">
              <ImagePlaceholder
                label="PULSE salon genel atmosfer, dikey kadraj"
                src="/images/club-intro.webp"
                ratio="aspect-[4/5]"
                icon
              />
            </Reveal>
          </div>

          <div className="lg:col-span-6 lg:col-start-7">
            <ul className="flex flex-col">
              {themes.map((t, i) => (
                <Reveal as="li" key={t.n} delay={i * 0.07} className="border-t border-line py-7 first:border-t-0 lg:first:border-t">
                  <div className="flex items-baseline gap-5">
                    <span className="font-display text-xl text-lime">{t.n}</span>
                    <div>
                      <h3 className="text-xl font-semibold text-ink">{t.title}</h3>
                      <p className="mt-2 leading-relaxed text-steel">{t.text}</p>
                    </div>
                  </div>
                </Reveal>
              ))}
            </ul>
            <Reveal delay={0.1} className="mt-10 lg:hidden">
              <ImagePlaceholder
                label="PULSE salon genel atmosfer"
                src="/images/club-intro.webp"
                ratio="aspect-[4/3]"
                icon
              />
            </Reveal>
          </div>
        </div>
      </Container>
    </Section>
  );
}
