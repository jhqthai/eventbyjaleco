"use client";

import { useEffect, useState } from "react";

const NAV_LINKS = [
  { href: "#about", label: "Story" },
  { href: "#services", label: "Services" },
  { href: "#gallery", label: "Gallery" },
  { href: "#testimonials", label: "Love Notes" },
  { href: "#faq", label: "FAQ" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-background/80 backdrop-blur-xl border-b border-border/60 shadow-[0_4px_24px_-12px_rgba(155,123,91,0.18)]"
          : "bg-transparent"
      }`}
    >
      <nav className="container-px max-w-7xl mx-auto flex items-center justify-between h-20">
        <a href="#top" className="flex flex-col leading-none">
          <span className="display-script text-3xl text-accent">Jaleco</span>
          <span className="text-[0.6rem] uppercase tracking-widest2 text-muted-foreground -mt-1">
            Weddings &amp; Events
          </span>
        </a>

        <ul className="hidden md:flex items-center gap-9">
          {NAV_LINKS.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="text-xs uppercase tracking-widest2 text-foreground/80 hover:text-accent transition-colors"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <a href="#contact" className="hidden md:inline-flex btn-primary !py-2.5 !px-6">
          Enquire
        </a>

        <button
          aria-label="Toggle menu"
          aria-expanded={open}
          className="md:hidden flex flex-col gap-1.5 p-2"
          onClick={() => setOpen((v) => !v)}
        >
          <span
            className={`block h-px w-6 bg-foreground transition-transform ${
              open ? "translate-y-[7px] rotate-45" : ""
            }`}
          />
          <span
            className={`block h-px w-6 bg-foreground transition-opacity ${
              open ? "opacity-0" : ""
            }`}
          />
          <span
            className={`block h-px w-6 bg-foreground transition-transform ${
              open ? "-translate-y-[7px] -rotate-45" : ""
            }`}
          />
        </button>
      </nav>

      <div
        className={`md:hidden overflow-hidden bg-background/95 backdrop-blur-xl transition-[max-height] duration-500 ${
          open ? "max-h-[400px] border-t border-border" : "max-h-0"
        }`}
      >
        <ul className="container-px max-w-7xl mx-auto py-6 flex flex-col gap-5">
          {NAV_LINKS.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                onClick={() => setOpen(false)}
                className="text-sm uppercase tracking-widest2 text-foreground/80"
              >
                {link.label}
              </a>
            </li>
          ))}
          <li>
            <a
              href="#contact"
              onClick={() => setOpen(false)}
              className="btn-primary w-full !py-3"
            >
              Enquire
            </a>
          </li>
        </ul>
      </div>
    </header>
  );
}
