import Link from "next/link";
import { ArrowRight } from "lucide-react";
import type { Program } from "@/data/programs";
import { ImagePlaceholder } from "@/components/ui/ImagePlaceholder";

export function ProgramCard({ program, index }: { program: Program; index: number }) {
  return (
    <Link
      href={`/programlar/${program.slug}`}
      className="group relative block overflow-hidden border border-line bg-charcoal focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-lime"
    >
      <div className="overflow-hidden">
        <div className="transition-transform duration-500 group-hover:scale-105">
          <ImagePlaceholder
            label={program.alt}
            src={program.image}
            ratio={index % 3 === 0 ? "aspect-[4/3]" : "aspect-[16/10]"}
          />
        </div>
      </div>
      <div className="border-t border-line p-6 md:p-7">
        <div className="flex items-start justify-between gap-4">
          <div>
            <span className="text-[0.7rem] font-semibold uppercase tracking-[0.2em] text-lime">
              {String(index + 1).padStart(2, "0")}
            </span>
            <h3 className="mt-1.5 font-display text-3xl leading-none text-ink">
              {program.name}
            </h3>
          </div>
          <span
            aria-hidden
            className="mt-1 flex h-10 w-10 shrink-0 items-center justify-center border border-line text-steel transition-all duration-200 group-hover:border-lime group-hover:bg-lime group-hover:text-carbon"
          >
            <ArrowRight size={16} />
          </span>
        </div>
        <p className="mt-3 text-sm leading-relaxed text-steel">{program.short}</p>
      </div>
    </Link>
  );
}
