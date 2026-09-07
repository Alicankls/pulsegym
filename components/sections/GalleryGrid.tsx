"use client";

import { useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { ImagePlaceholder } from "@/components/ui/ImagePlaceholder";
import { cn } from "@/lib/utils";

type GalleryItem = {
  label: string;
  src: string;
  category: string;
  ratio: string;
  span: string;
};

const categories = ["Tümü", "Tesis", "Antrenman", "Dersler", "Topluluk", "Ekipman"] as const;

const items: GalleryItem[] = [
  { label: "PULSE güç bölümü geniş açı", src: "/images/facility-strength.webp", category: "Tesis", ratio: "aspect-[16/10]", span: "md:col-span-7" },
  { label: "PULSE stüdyosunda HIIT dersi", src: "/images/group-hiit.webp", category: "Dersler", ratio: "aspect-[4/3]", span: "md:col-span-5" },
  { label: "PULSE plaka ve bar detayı", src: "/images/equipment-detail.webp", category: "Ekipman", ratio: "aspect-[3/4] md:h-full md:aspect-auto", span: "md:col-span-4 md:row-span-2" },
  { label: "PULSE turf şeritte antrenman", src: "/images/program-functional.webp", category: "Antrenman", ratio: "aspect-[16/10]", span: "md:col-span-8" },
  { label: "PULSE antrenman sonrası sohbet", src: "/images/community-01.webp", category: "Topluluk", ratio: "aspect-[4/3]", span: "md:col-span-5" },
  { label: "PULSE soyunma odası", src: "/images/facility-locker.webp", category: "Tesis", ratio: "aspect-[4/3]", span: "md:col-span-7" },
  { label: "PULSE eğitmenle bire bir seans", src: "/images/pt-session.webp", category: "Antrenman", ratio: "aspect-[16/10]", span: "md:col-span-8" },
  { label: "PULSE recovery alanı", src: "/images/facility-recovery.webp", category: "Tesis", ratio: "aspect-[3/4] md:h-full md:aspect-auto", span: "md:col-span-4 md:row-span-2" },
  { label: "PULSE partner antrenmanı", src: "/images/community-02.webp", category: "Topluluk", ratio: "aspect-[16/10]", span: "md:col-span-8" },
  { label: "PULSE kardiyo bölümü", src: "/images/facility-cardio.webp", category: "Tesis", ratio: "aspect-[16/10]", span: "md:col-span-7" },
  { label: "PULSE grup dersi senkron an", src: "/images/program-group.webp", category: "Dersler", ratio: "aspect-[4/3]", span: "md:col-span-5" },
  { label: "PULSE malzeme ve ışık detayı", src: "/images/facility-detail-01.webp", category: "Ekipman", ratio: "aspect-[4/3]", span: "md:col-span-6" },
  { label: "PULSE bench detayı", src: "/images/facility-detail-02.webp", category: "Ekipman", ratio: "aspect-[4/3]", span: "md:col-span-6" },
];

export function GalleryGrid() {
  const [filter, setFilter] = useState<(typeof categories)[number]>("Tümü");
  const reduce = useReducedMotion();
  const visible = filter === "Tümü" ? items : items.filter((i) => i.category === filter);

  return (
    <div>
      <div className="flex flex-wrap gap-2" role="group" aria-label="Galeri kategori filtresi">
        {categories.map((c) => (
          <button
            key={c}
            type="button"
            onClick={() => setFilter(c)}
            aria-pressed={filter === c}
            className={cn(
              "min-h-[44px] border px-5 text-sm font-semibold uppercase tracking-[0.1em] transition-colors duration-200 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-lime",
              filter === c
                ? "border-lime bg-lime text-carbon"
                : "border-line text-steel hover:border-steel hover:text-ink"
            )}
          >
            {c}
          </button>
        ))}
      </div>

      {/* Filtre görsel bir değişiklik; ekran okuyucu için sonuç sayısı duyurulur. */}
      <p aria-live="polite" className="sr-only">
        {filter === "Tümü"
          ? `Tüm kategoriler gösteriliyor, ${visible.length} görsel.`
          : `${filter} kategorisi, ${visible.length} görsel.`}
      </p>

      <motion.div
        key={filter}
        initial={reduce ? false : { opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.35 }}
        className="mt-10 grid grid-cols-1 gap-5 md:grid-cols-12 md:auto-rows-fr"
      >
        {visible.map((item) => (
          <figure key={item.label} className={cn("group relative overflow-hidden border border-line", item.span)}>
            <div className="h-full transition-transform duration-500 group-hover:scale-105">
              <ImagePlaceholder label={item.label} src={item.src} ratio={item.ratio} className="h-full" />
            </div>
            <figcaption className="absolute right-3 top-3 bg-carbon/70 px-2.5 py-1 text-[0.65rem] font-semibold uppercase tracking-[0.14em] text-lime backdrop-blur-sm">
              {item.category}
            </figcaption>
          </figure>
        ))}
      </motion.div>
    </div>
  );
}
