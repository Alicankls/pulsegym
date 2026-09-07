"use client";

import { useRef, useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { weekSchedule } from "@/data/schedule";
import { ScheduleItem } from "@/components/cards/ScheduleItem";
import { useIsomorphicLayoutEffect } from "@/lib/use-isomorphic-layout-effect";
import { cn } from "@/lib/utils";

const tabId = (i: number) => `gun-sekmesi-${i}`;
const panelId = (i: number) => `gun-paneli-${i}`;

export function ScheduleBoard() {
  // Sunucuda her zaman Pazartesi ile başlar; "bugün" yalnızca mount'tan sonra
  // uygulanır. `new Date()` render sırasında çağrılırsa sunucu ve istemci farklı
  // gün üretip hydration uyuşmazlığına yol açıyordu.
  const [active, setActive] = useState(0);
  const reduce = useReducedMotion();
  const tabRefs = useRef<(HTMLButtonElement | null)[]>([]);

  // Boyama öncesi çalışır: kullanıcı Pazartesi'den bugüne atlamayı görmez.
  useIsomorphicLayoutEffect(() => {
    const jsDay = new Date().getDay(); // Paz=0
    setActive(jsDay === 0 ? 6 : jsDay - 1);
  }, []);

  /** APG tab deseni: ok tuşlarıyla gezinme, Home/End ile uçlara gitme. */
  function onKeyDown(e: React.KeyboardEvent) {
    const last = weekSchedule.length - 1;
    const next =
      e.key === "ArrowRight" ? (active === last ? 0 : active + 1)
      : e.key === "ArrowLeft" ? (active === 0 ? last : active - 1)
      : e.key === "Home" ? 0
      : e.key === "End" ? last
      : null;

    if (next === null) return;
    e.preventDefault();
    setActive(next);
    tabRefs.current[next]?.focus();
  }

  return (
    <div>
      {/* Gün seçici */}
      <div
        role="tablist"
        aria-label="Gün seçimi"
        onKeyDown={onKeyDown}
        className="flex gap-2 overflow-x-auto pb-2 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
      >
        {weekSchedule.map((d, i) => (
          <button
            key={d.day}
            ref={(el) => {
              tabRefs.current[i] = el;
            }}
            type="button"
            role="tab"
            id={tabId(i)}
            aria-selected={active === i}
            aria-controls={panelId(i)}
            // Roving tabindex: sekme grubu klavyede tek durak olur.
            tabIndex={active === i ? 0 : -1}
            onClick={() => setActive(i)}
            className={cn(
              "min-h-[48px] shrink-0 border px-5 text-sm font-semibold uppercase tracking-[0.1em] transition-colors duration-200",
              active === i
                ? "border-lime bg-lime text-carbon"
                : "border-line bg-transparent text-steel hover:border-steel hover:text-ink"
            )}
          >
            <span className="hidden sm:inline">{d.day}</span>
            <span className="sm:hidden">{d.short}</span>
            <span className={cn("ml-2 text-xs", active === i ? "text-carbon/70" : "text-steel/80")}>
              {d.sessions.length}
            </span>
          </button>
        ))}
      </div>

      {/* Tüm günler DOM'da kalır: haftalık programın tamamı taranabilir olsun diye
          seçili olmayanlar `hidden` ile gizlenir, kaldırılmaz. */}
      {weekSchedule.map((day, i) => (
        <motion.div
          key={day.day}
          id={panelId(i)}
          role="tabpanel"
          aria-labelledby={tabId(i)}
          hidden={active !== i}
          tabIndex={0}
          animate={active === i && !reduce ? { opacity: [0, 1], y: [12, 0] } : { opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
          className="mt-8 border border-line bg-charcoal p-6 md:p-9"
        >
          <div className="flex flex-wrap items-baseline justify-between gap-2 border-b border-line pb-5">
            <h2 className="font-display text-3xl tracking-wide text-ink">{day.day}</h2>
            <p className="text-sm text-steel">{day.sessions.length} ders · kontenjan 14 kişi</p>
          </div>
          <div>
            {day.sessions.map((s) => (
              <ScheduleItem key={`${day.day}-${s.time}-${s.name}`} session={s} />
            ))}
          </div>
          <p className="mt-5 text-xs leading-relaxed text-steel">
            Dersler 14 kişilik kontenjanla sınırlıdır; rezervasyon üye panelinden veya resepsiyondan yapılır.
            Program haftalık olarak güncellenir; örnek demo içeriktir.
          </p>
        </motion.div>
      ))}
    </div>
  );
}
