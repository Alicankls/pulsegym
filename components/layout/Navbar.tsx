"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu } from "lucide-react";
import { site } from "@/data/site";
import { cn } from "@/lib/utils";
import { ButtonLink } from "@/components/ui/Button";
import { MobileNav } from "./MobileNav";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setMenuOpen(false);
  }, [pathname]);

  return (
    <>
      <header
        className={cn(
          "fixed inset-x-0 top-0 z-50 transition-all duration-300",
          scrolled
            ? "border-b border-line bg-carbon/95 backdrop-blur-sm"
            : "border-b border-transparent bg-transparent"
        )}
      >
        <div className="mx-auto flex h-[72px] max-w-[1440px] items-center justify-between px-5 md:px-8 lg:px-10">
          <Link
            href="/"
            className="font-display text-2xl tracking-wide text-ink focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-lime"
            aria-label="PULSE Athletic Club ana sayfa"
          >
            PULSE<span className="text-lime">.</span>
          </Link>

          <nav aria-label="Ana navigasyon" className="hidden items-center gap-8 lg:flex">
            {site.nav.map((item) => {
              const active = pathname.startsWith(item.href);
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  aria-current={active ? "page" : undefined}
                  className={cn(
                    "text-[0.8125rem] font-medium uppercase tracking-[0.12em] transition-colors duration-200 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-lime",
                    active ? "text-lime" : "text-steel hover:text-ink"
                  )}
                >
                  {item.label}
                </Link>
              );
            })}
          </nav>

          <div className="flex items-center gap-3">
            <ButtonLink href={site.cta.href} className="hidden min-h-[44px] px-6 py-2.5 text-xs sm:inline-flex">
              {site.cta.label}
            </ButtonLink>
            <button
              type="button"
              onClick={() => setMenuOpen(true)}
              aria-label="Menüyü aç"
              aria-expanded={menuOpen}
              className="flex h-11 w-11 items-center justify-center border border-line text-ink transition-colors hover:border-steel focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-lime lg:hidden"
            >
              <Menu size={20} aria-hidden />
            </button>
          </div>
        </div>
      </header>

      <MobileNav open={menuOpen} onClose={() => setMenuOpen(false)} />
    </>
  );
}
