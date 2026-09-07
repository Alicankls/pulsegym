import Image from "next/image";
import { cn } from "@/lib/utils";

/**
 * Görsel alanı. `src` verilirse next/image ile gerçek görseli render eder;
 * verilmezse (görsel henüz üretilmediyse) oran/yön bilgisini koruyan koyu
 * grafik placeholder'a düşer. Manifest: docs/image-manifest.md
 */
export function ImagePlaceholder({
  label,
  ratio = "aspect-[16/10]",
  className,
  icon = false,
  src,
  priority = false,
  sizes = "(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 33vw",
}: {
  label: string;
  ratio?: string;
  className?: string;
  icon?: boolean;
  src?: string;
  priority?: boolean;
  sizes?: string;
}) {
  if (src) {
    return (
      <div className={cn("relative w-full overflow-hidden bg-charcoal", ratio, className)}>
        <Image
          src={src}
          alt={label}
          fill
          priority={priority}
          sizes={sizes}
          className="object-cover"
        />
      </div>
    );
  }

  return (
    <div
      role="img"
      aria-label={label}
      className={cn(
        "relative flex w-full items-end overflow-hidden bg-charcoal",
        ratio,
        className
      )}
    >
      {/* köşegen doku */}
      <div
        aria-hidden
        className="absolute inset-0 opacity-[0.5]"
        style={{
          backgroundImage:
            "repeating-linear-gradient(135deg, transparent 0 14px, #1a1a1a 14px 15px)",
        }}
      />
      {/* ince lime köşe aksanı */}
      <div aria-hidden className="absolute left-0 top-0 h-10 w-px bg-lime/60" />
      <div aria-hidden className="absolute left-0 top-0 h-px w-10 bg-lime/60" />
      <div className="relative flex w-full items-center justify-between gap-3 border-t border-line bg-carbon/60 px-4 py-3 backdrop-blur-sm">
        <span className="text-[0.7rem] font-semibold uppercase tracking-[0.18em] text-steel">
          {label}
        </span>
        {icon && (
          <span aria-hidden className="font-display text-lg leading-none text-lime">
            P.
          </span>
        )}
      </div>
    </div>
  );
}

