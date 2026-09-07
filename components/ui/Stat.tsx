"use client";

import { useEffect, useRef, useState } from "react";
import { useInView, useReducedMotion } from "framer-motion";
import { useIsomorphicLayoutEffect } from "@/lib/use-isomorphic-layout-effect";

function formatNumber(n: number) {
  return n.toLocaleString("tr-TR");
}

export function Stat({
  value,
  suffix,
  label,
}: {
  value: number;
  suffix: string;
  label: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  const reduce = useReducedMotion();
  /** null = sayaç kurulmadı; gerçek değer basılır. Sunucu HTML'i böylece
   *  "0" yerine "2.400" içerir — rakamlar JS olmadan da okunabilir. */
  const [display, setDisplay] = useState<number | null>(null);
  const armed = useRef(false);

  useIsomorphicLayoutEffect(() => {
    // Yalnızca ekran dışındayken sıfırla: mount anında görünürse
    // kullanıcı değerin sıfıra düşüp geri saymasını görmez.
    if (!reduce && !inView) {
      armed.current = true;
      setDisplay(0);
    }
    // Kasıtlı olarak yalnızca mount'ta.
  }, []);

  useEffect(() => {
    if (!inView || !armed.current) return;

    const duration = 1400;
    const start = performance.now();
    let raf: number;
    const tick = (now: number) => {
      const p = Math.min((now - start) / duration, 1);
      const eased = 1 - Math.pow(1 - p, 3);
      setDisplay(Math.round(eased * value));
      if (p < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [inView, value]);

  return (
    <div ref={ref} className="border-l border-line pl-5 md:pl-7">
      <div className="font-display text-[clamp(2.8rem,7vw,5.5rem)] leading-none text-ink">
        {formatNumber(display ?? value)}
        <span className="text-lime">{suffix}</span>
      </div>
      <p className="mt-2 text-xs font-semibold uppercase tracking-[0.18em] text-steel md:text-sm">
        {label}
      </p>
    </div>
  );
}
