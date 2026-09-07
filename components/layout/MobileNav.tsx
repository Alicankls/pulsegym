"use client";

import { useCallback, useEffect, useRef } from "react";
import Link from "next/link";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import { X, Phone, MessageCircle } from "lucide-react";
import { site } from "@/data/site";

const FOCUSABLE =
  'a[href], button:not([disabled]), input, select, textarea, [tabindex]:not([tabindex="-1"])';

export function MobileNav({ open, onClose }: { open: boolean; onClose: () => void }) {
  const reduce = useReducedMotion();
  const panelRef = useRef<HTMLDivElement>(null);
  const closeRef = useRef<HTMLButtonElement>(null);
  /** Menü açılmadan önce odakta olan öğe; kapanışta odak buraya döner. */
  const restoreRef = useRef<HTMLElement | null>(null);

  const focusables = useCallback(
    () => Array.from(panelRef.current?.querySelectorAll<HTMLElement>(FOCUSABLE) ?? []),
    []
  );

  useEffect(() => {
    if (!open) return;

    restoreRef.current = document.activeElement as HTMLElement | null;
    document.body.style.overflow = "hidden";
    // Panel mount edildikten sonra odağı içeri al.
    const raf = requestAnimationFrame(() => closeRef.current?.focus());

    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        onClose();
        return;
      }
      if (e.key !== "Tab") return;

      // Odağı panel içinde döngüye sok: aria-modal="true" iddiasının karşılığı.
      const items = focusables();
      if (items.length === 0) return;
      const first = items[0];
      const last = items[items.length - 1];
      const active = document.activeElement;

      if (e.shiftKey && (active === first || !panelRef.current?.contains(active))) {
        e.preventDefault();
        last.focus();
      } else if (!e.shiftKey && active === last) {
        e.preventDefault();
        first.focus();
      }
    };

    window.addEventListener("keydown", onKey);
    return () => {
      cancelAnimationFrame(raf);
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
      restoreRef.current?.focus();
    };
  }, [open, onClose, focusables]);

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          ref={panelRef}
          initial={reduce ? false : { opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.25 }}
          className="fixed inset-0 z-[60] flex flex-col bg-carbon"
          role="dialog"
          aria-modal="true"
          aria-label="Mobil menü"
        >
          <div className="flex h-[72px] items-center justify-between border-b border-line px-5">
            <span className="font-display text-2xl tracking-wide text-ink">
              PULSE<span className="text-lime">.</span>
            </span>
            <button
              ref={closeRef}
              type="button"
              onClick={onClose}
              aria-label="Menüyü kapat"
              className="flex h-11 w-11 items-center justify-center border border-line text-ink transition-colors hover:border-steel"
            >
              <X size={20} aria-hidden />
            </button>
          </div>

          <nav aria-label="Mobil navigasyon" className="flex-1 overflow-y-auto px-5 py-8">
            <ul className="flex flex-col">
              {[{ label: "Ana Sayfa", href: "/" }, ...site.nav].map((item, i) => (
                <motion.li
                  key={item.href}
                  initial={reduce ? false : { opacity: 0, x: -16 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.05 + i * 0.05, duration: 0.35 }}
                  className="border-b border-line"
                >
                  <Link
                    href={item.href}
                    onClick={onClose}
                    className="flex min-h-[60px] items-center justify-between py-2 font-display text-4xl tracking-wide text-ink transition-colors hover:text-lime"
                  >
                    {item.label}
                  </Link>
                </motion.li>
              ))}
            </ul>
          </nav>

          <div className="border-t border-line px-5 py-6">
            <Link
              href={site.cta.href}
              onClick={onClose}
              className="flex min-h-[52px] w-full items-center justify-center bg-lime text-sm font-semibold uppercase tracking-[0.14em] text-carbon"
            >
              {site.cta.label}
            </Link>
            <div className="mt-4 flex gap-3">
              <a
                href={site.phoneHref}
                className="flex min-h-[48px] flex-1 items-center justify-center gap-2 border border-line text-sm text-ink"
              >
                <Phone size={16} aria-hidden /> Ara
              </a>
              <a
                href={site.whatsappHref}
                target="_blank"
                rel="noopener noreferrer"
                className="flex min-h-[48px] flex-1 items-center justify-center gap-2 border border-line text-sm text-ink"
              >
                <MessageCircle size={16} aria-hidden /> WhatsApp
              </a>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
