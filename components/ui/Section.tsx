import { cn } from "@/lib/utils";

export function Section({
  id,
  className,
  tone = "carbon",
  children,
  ariaLabel,
}: {
  id?: string;
  className?: string;
  tone?: "carbon" | "graphite";
  children: React.ReactNode;
  ariaLabel?: string;
}) {
  return (
    <section
      id={id}
      aria-label={ariaLabel}
      className={cn(
        "py-20 md:py-28 lg:py-32",
        tone === "graphite" ? "bg-graphite" : "bg-carbon",
        className
      )}
    >
      {children}
    </section>
  );
}
