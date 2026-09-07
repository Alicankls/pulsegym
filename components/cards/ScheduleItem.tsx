import type { ClassSession } from "@/data/schedule";
import { cn } from "@/lib/utils";

const intensityStyle: Record<ClassSession["intensity"], string> = {
  Yüksek: "text-lime",
  Orta: "text-ink",
  Düşük: "text-steel",
};

export function ScheduleItem({ session }: { session: ClassSession }) {
  return (
    <div className="flex items-center gap-4 border-b border-line py-4 md:gap-8">
      <span className="w-14 shrink-0 font-display text-2xl leading-none text-ink">
        {session.time}
      </span>
      <div className="min-w-0 flex-1">
        <p className="truncate font-semibold text-ink">{session.name}</p>
        <p className="mt-0.5 text-sm text-steel">{session.coach}</p>
      </div>
      <div className="flex shrink-0 flex-col items-end gap-1 text-xs">
        <span className="text-steel">{session.duration}</span>
        <span
          className={cn(
            "font-semibold uppercase tracking-[0.12em]",
            intensityStyle[session.intensity]
          )}
        >
          {session.intensity}
        </span>
      </div>
    </div>
  );
}
