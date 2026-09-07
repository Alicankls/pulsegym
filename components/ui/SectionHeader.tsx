import { cn } from "@/lib/utils";
import { Reveal } from "./Reveal";

export function SectionHeader({
  eyebrow,
  title,
  lead,
  align = "left",
  className,
}: {
  eyebrow: string;
  title: string;
  lead?: string;
  align?: "left" | "center";
  className?: string;
}) {
  return (
    <Reveal
      className={cn(
        "mb-12 max-w-3xl md:mb-16",
        align === "center" && "mx-auto text-center",
        className
      )}
    >
      <p className="mb-4 text-xs font-semibold uppercase tracking-[0.2em] text-lime">
        {eyebrow}
      </p>
      <h2 className="font-display text-[clamp(2.6rem,6vw,5rem)] leading-[0.95] text-ink">
        {title}
      </h2>
      {lead && (
        <p className="mt-5 max-w-xl text-lg leading-relaxed text-steel">
          {align === "center" ? <span className="mx-auto block">{lead}</span> : lead}
        </p>
      )}
    </Reveal>
  );
}
