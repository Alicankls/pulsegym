"use client";

import { useId, useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { Plus } from "lucide-react";
import { cn } from "@/lib/utils";

/** Soru başlığının belge hiyerarşisindeki seviyesi. Accordion'ın üstündeki
 *  en yakın başlığın bir altı verilmeli — /sss'te h1 var, o yüzden 2. */
type HeadingLevel = 2 | 3 | 4;

export function AccordionItem({
  question,
  answer,
  defaultOpen = false,
  headingLevel = 3,
}: {
  question: string;
  answer: string;
  defaultOpen?: boolean;
  headingLevel?: HeadingLevel;
}) {
  const [open, setOpen] = useState(defaultOpen);
  const reduce = useReducedMotion();
  const uid = useId();
  const buttonId = `${uid}-baslik`;
  const panelId = `${uid}-panel`;
  const Heading = `h${headingLevel}` as const;

  return (
    <div className="border-b border-line">
      <Heading>
        <button
          type="button"
          id={buttonId}
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
          aria-controls={panelId}
          className="flex w-full items-center justify-between gap-6 py-6 text-left"
        >
          <span className="text-base font-semibold text-ink md:text-lg">
            {question}
          </span>
          <span
            aria-hidden
            className={cn(
              "flex h-9 w-9 shrink-0 items-center justify-center border border-line text-steel transition-all duration-200",
              open && "rotate-45 border-lime text-lime"
            )}
          >
            <Plus size={16} />
          </span>
        </button>
      </Heading>
      {/* Panel hiç unmount edilmez: kapalı cevaplar da HTML'de kalır ve
          taranabilir. Kapalıyken `aria-hidden` ile ekran okuyucudan gizlenir. */}
      <motion.div
        id={panelId}
        role="region"
        aria-labelledby={buttonId}
        aria-hidden={!open}
        initial={false}
        animate={{ height: open ? "auto" : 0, opacity: open ? 1 : 0 }}
        transition={reduce ? { duration: 0 } : { duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
        className="overflow-hidden"
      >
        <p className="max-w-2xl pb-6 leading-relaxed text-steel">{answer}</p>
      </motion.div>
    </div>
  );
}

export function Accordion({
  items,
  headingLevel = 3,
}: {
  items: readonly { q: string; a: string }[];
  headingLevel?: HeadingLevel;
}) {
  return (
    <div className="border-t border-line">
      {items.map((item, i) => (
        <AccordionItem
          key={item.q}
          question={item.q}
          answer={item.a}
          defaultOpen={i === 0}
          headingLevel={headingLevel}
        />
      ))}
    </div>
  );
}
