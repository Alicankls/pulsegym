import { site } from "@/data/site";
import { Container } from "@/components/ui/Container";
import { Stat } from "@/components/ui/Stat";
import { Reveal } from "@/components/ui/Reveal";

export function Stats() {
  return (
    <section aria-label="Kulüp istatistikleri" className="border-y border-line bg-graphite">
      <Container wide className="py-14 md:py-20">
        <div className="grid grid-cols-2 gap-x-4 gap-y-10 lg:grid-cols-4">
          {site.stats.map((s, i) => (
            <Reveal key={s.label} delay={i * 0.08}>
              <Stat value={s.value} suffix={s.suffix} label={s.label} />
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
