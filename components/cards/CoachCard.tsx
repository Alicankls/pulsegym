import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import type { Coach } from "@/data/coaches";
import { ImagePlaceholder } from "@/components/ui/ImagePlaceholder";

export function CoachCard({ coach }: { coach: Coach }) {
  return (
    <Link
      href={`/egitmenler/${coach.slug}`}
      className="group block focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-lime"
    >
      <div className="relative overflow-hidden border border-line">
        <div className="transition-transform duration-500 group-hover:scale-105">
          <ImagePlaceholder label={coach.alt} src={coach.image} ratio="aspect-[3/4]" />
        </div>
        <span
          aria-hidden
          className="absolute right-3 top-3 flex h-10 w-10 items-center justify-center bg-carbon/70 text-ink opacity-0 backdrop-blur-sm transition-opacity duration-200 group-hover:opacity-100"
        >
          <ArrowUpRight size={16} />
        </span>
      </div>
      <div className="border-b-2 border-transparent pb-3 pt-4 transition-colors duration-200 group-hover:border-lime">
        <h3 className="font-display text-3xl leading-none text-ink">{coach.name}</h3>
        <p className="mt-1.5 text-[0.7rem] font-semibold uppercase tracking-[0.18em] text-lime">
          {coach.role}
        </p>
        <p className="mt-1 text-sm text-steel">{coach.specialty}</p>
      </div>
    </Link>
  );
}
