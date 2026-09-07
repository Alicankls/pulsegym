import { Quote } from "lucide-react";
import type { Testimonial } from "@/data/testimonials";

export function TestimonialCard({ item }: { item: Testimonial }) {
  return (
    <figure className="flex h-full flex-col border border-line bg-charcoal p-7">
      <Quote size={22} aria-hidden className="text-lime" />
      <blockquote className="mt-4 flex-1 leading-relaxed text-ink">
        {item.text}
      </blockquote>
      <figcaption className="mt-6 border-t border-line pt-4">
        <p className="font-semibold text-ink">{item.name}</p>
        <p className="mt-0.5 text-xs uppercase tracking-[0.12em] text-steel">
          {item.meta}
        </p>
      </figcaption>
    </figure>
  );
}
