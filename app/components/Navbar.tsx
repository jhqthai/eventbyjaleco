"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

const NAV_LINKS = [
  { href: "/work", label: "Work" },
  { href: "/about", label: "About" },
  { href: "/press", label: "Press" },
  { href: "/journal", label: "Journal" },
  { href: "/inquire", label: "Contact" },
];

type NavbarProps = {
  /** When true, the nav rests on top of dark imagery and starts in inverted (light) colors. */
  overImage?: boolean;
};

export default function Navbar({ overImage = false }: NavbarProps) {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    let ticking = false;
    const update = () => {
      const y = window.scrollY;
      setScrolled((prev) => (prev ? y > 48 : y > 96));
      ticking = false;
    };
    const onScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(update);
        ticking = true;
      }
    };
    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  // When sitting over a dark hero image and not scrolled, render text white.
  const inverted = overImage && !scrolled && !open;

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-[background-color,backdrop-filter,border-color] duration-500 ${
        scrolled || open
          ? "bg-background/92 backdrop-blur-xl border-b border-border"
          : "bg-transparent"
      }`}
    >
      <nav
        className={`container-px container-max flex items-center justify-between transition-[height] duration-500 ease-out ${
          scrolled || open ? "h-14" : "h-20"
        }`}
      >
        <Link
          href="/"
          aria-label="Event by Jaleco — Weddings & Events"
          className={`font-display transition-[font-size,color] duration-500 ${
            scrolled || open ? "text-lg" : "text-2xl"
          } ${inverted ? "text-background" : "text-foreground"}`}
          style={{ letterSpacing: "-0.02em", lineHeight: 1.1 }}
        >
          Event by Jaleco
        </Link>

        <ul className="hidden lg:flex items-center gap-10">
          {NAV_LINKS.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className={`text-[12px] uppercase tracking-label py-3 transition-colors duration-300 ${
                  inverted
                    ? "text-background/85 hover:text-background"
                    : "text-foreground/85 hover:text-accent"
                }`}
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>

        <Link
          href="/inquire"
          className={`hidden lg:inline-block text-[12px] uppercase tracking-label link-underline py-3 transition-colors duration-500 ${
            inverted ? "text-background" : "text-foreground"
          }`}
        >
          Inquire
        </Link>

        <button
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          className={`lg:hidden flex flex-col gap-1.5 p-3 -mr-3 ${
            inverted
              ? "[&>span]:drop-shadow-[0_1px_2px_rgba(0,0,0,0.45)]"
              : ""
          }`}
          onClick={() => setOpen((v) => !v)}
        >
          <span
            className={`block h-0.5 w-6 transition-all duration-300 ${
              inverted ? "bg-background" : "bg-foreground"
            } ${open ? "translate-y-[7px] rotate-45" : ""}`}
          />
          <span
            className={`block h-0.5 w-6 transition-all duration-300 ${
              inverted ? "bg-background" : "bg-foreground"
            } ${open ? "opacity-0" : ""}`}
          />
          <span
            className={`block h-0.5 w-6 transition-all duration-300 ${
              inverted ? "bg-background" : "bg-foreground"
            } ${open ? "-translate-y-[7px] -rotate-45" : ""}`}
          />
        </button>
      </nav>

      <div
        className={`lg:hidden overflow-hidden bg-background/98 backdrop-blur-xl transition-[max-height] duration-500 ${
          open ? "max-h-[480px] border-t border-border" : "max-h-0"
        }`}
      >
        <ul className="container-px container-max py-8 flex flex-col gap-1">
          {NAV_LINKS.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                onClick={() => setOpen(false)}
                className="block py-3 font-display text-2xl text-foreground"
              >
                {link.label}
              </Link>
            </li>
          ))}
          <li className="mt-4 pt-4 border-t border-border">
            <a
              href="mailto:hello@eventbyjaleco.com"
              onClick={() => setOpen(false)}
              className="block py-2 text-[12px] uppercase tracking-label text-muted-foreground"
            >
              hello@eventbyjaleco.com
            </a>
          </li>
        </ul>
      </div>
    </header>
  );
}
