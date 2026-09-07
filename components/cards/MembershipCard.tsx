import { Check } from "lucide-react";
import type { Membership } from "@/data/memberships";
import { cn } from "@/lib/utils";
import { ButtonLink } from "@/components/ui/Button";

export function MembershipCard({ plan }: { plan: Membership }) {
  return (
    <article
      className={cn(
        "relative flex h-full flex-col border bg-charcoal p-7 md:p-8",
        plan.popular ? "border-lime" : "border-line"
      )}
    >
      {plan.popular && (
        <span className="absolute -top-px right-6 bg-lime px-3 py-1.5 text-[0.65rem] font-bold uppercase tracking-[0.16em] text-carbon">
          En Çok Tercih Edilen
        </span>
      )}
      <h3 className="font-display text-4xl tracking-wide text-ink">{plan.name}</h3>
      <p className="mt-2 text-sm text-steel">{plan.tagline}</p>
      <div className="mt-6 flex items-baseline gap-1.5">
        <span className="font-display text-6xl leading-none text-ink">{plan.price}</span>
        <span className="text-sm text-steel">{plan.period}</span>
      </div>
      <ul className="mt-7 flex flex-1 flex-col gap-3.5 border-t border-line pt-7">
        {plan.features.map((f) => (
          <li key={f} className="flex items-start gap-3 text-sm text-ink">
            <Check size={16} aria-hidden className="mt-0.5 shrink-0 text-lime" />
            <span className="text-steel">{f}</span>
          </li>
        ))}
      </ul>
      <ButtonLink
        href="/ucretsiz-deneme"
        variant={plan.popular ? "primary" : "secondary"}
        className="mt-8 w-full"
      >
        Ücretsiz Deneme ile Başla
      </ButtonLink>
    </article>
  );
}
