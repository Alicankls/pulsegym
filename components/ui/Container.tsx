import { cn } from "@/lib/utils";

export function Container({
  className,
  wide = false,
  children,
}: {
  className?: string;
  wide?: boolean;
  children: React.ReactNode;
}) {
  return (
    <div
      className={cn(
        "mx-auto w-full px-5 md:px-8 lg:px-10",
        wide ? "max-w-[1440px]" : "max-w-7xl",
        className
      )}
    >
      {children}
    </div>
  );
}
