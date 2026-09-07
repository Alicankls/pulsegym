import Link from "next/link";
import { ArrowRight, MessageCircle } from "lucide-react";
import { cn } from "@/lib/utils";

type Variant = "primary" | "secondary" | "ghost" | "whatsapp";

const base =
  "inline-flex min-h-[52px] items-center justify-center gap-2 px-7 py-3.5 text-sm font-semibold uppercase tracking-[0.14em] transition-colors duration-200 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-lime";

const variants: Record<Variant, string> = {
  primary: "bg-lime text-carbon hover:bg-lime-dark",
  secondary: "border border-line bg-transparent text-ink hover:border-steel",
  ghost:
    "min-h-0 px-0 py-0 text-ink hover:text-lime focus-visible:outline-lime",
  whatsapp: "border border-line bg-charcoal text-ink hover:border-steel",
};

type CommonProps = {
  variant?: Variant;
  className?: string;
  children: React.ReactNode;
  withArrow?: boolean;
};

export function ButtonLink({
  href,
  variant = "primary",
  className,
  children,
  withArrow = false,
  external = false,
}: CommonProps & { href: string; external?: boolean }) {
  const cls = cn(base, variants[variant], className);
  const content = (
    <>
      {variant === "whatsapp" && <MessageCircle size={18} aria-hidden />}
      <span>{children}</span>
      {withArrow && (
        <ArrowRight
          size={16}
          aria-hidden
          className="transition-transform duration-200 group-hover:translate-x-1"
        />
      )}
    </>
  );
  if (external) {
    return (
      <a href={href} className={cn(cls, "group")} target="_blank" rel="noopener noreferrer">
        {content}
      </a>
    );
  }
  return (
    <Link href={href} className={cn(cls, "group")}>
      {content}
    </Link>
  );
}

export function Button({
  variant = "primary",
  className,
  children,
  withArrow = false,
  type = "button",
  disabled = false,
  onClick,
}: CommonProps & {
  type?: "button" | "submit";
  disabled?: boolean;
  onClick?: () => void;
}) {
  return (
    <button
      type={type}
      disabled={disabled}
      onClick={onClick}
      className={cn(
        base,
        variants[variant],
        disabled && "cursor-not-allowed opacity-60",
        "group",
        className
      )}
    >
      <span>{children}</span>
      {withArrow && (
        <ArrowRight
          size={16}
          aria-hidden
          className="transition-transform duration-200 group-hover:translate-x-1"
        />
      )}
    </button>
  );
}
