"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import { site } from "@/data/site";

export function StickyMobileCTA() {
  const [visible, setVisible] = useState(false);
  const pathname = usePathname();
  const reduce = useReducedMotion();
  const hidden = pathname === site.cta.href;

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > window.innerHeight * 0.9);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const show = visible && !hidden;

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          initial={reduce ? false : { y: 80 }}
          animate={{ y: 0 }}
          exit={{ y: 80 }}
          transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
          className="fixed inset-x-0 bottom-0 z-40 border-t border-line bg-carbon/95 p-3 backdrop-blur-sm lg:hidden"
        >
          <Link
            href={site.cta.href}
            className="flex min-h-[52px] w-full items-center justify-center bg-lime text-sm font-semibold uppercase tracking-[0.14em] text-carbon"
          >
            {site.cta.label}
          </Link>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
