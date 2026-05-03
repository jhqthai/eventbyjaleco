import Link from "next/link";

const NAV_LINKS = [
  { href: "/work", label: "Work" },
  { href: "/about", label: "About" },
  { href: "/press", label: "Press" },
  { href: "/journal", label: "Journal" },
  { href: "/inquire", label: "Contact" },
];

const SOCIAL = [
  {
    label: "Instagram",
    href: "https://instagram.com",
    path:
      "M12 2.16c3.2 0 3.58 0 4.85.07 3.25.15 4.77 1.69 4.92 4.92.06 1.27.07 1.65.07 4.85 0 3.2 0 3.58-.07 4.85-.15 3.23-1.66 4.77-4.92 4.92-1.27.06-1.65.07-4.85.07-3.2 0-3.58 0-4.85-.07-3.26-.15-4.77-1.7-4.92-4.92C2.17 15.58 2.16 15.2 2.16 12s0-3.58.07-4.85C2.38 3.92 3.9 2.38 7.15 2.23 8.42 2.18 8.8 2.16 12 2.16zm0 1.92c-3.16 0-3.5.01-4.74.07-2.43.11-3.55 1.25-3.66 3.66-.06 1.24-.07 1.58-.07 4.74s.01 3.5.07 4.74c.11 2.41 1.23 3.55 3.66 3.66 1.24.06 1.58.07 4.74.07s3.5-.01 4.74-.07c2.43-.11 3.55-1.25 3.66-3.66.06-1.24.07-1.58.07-4.74s-.01-3.5-.07-4.74c-.11-2.41-1.23-3.55-3.66-3.66-1.24-.06-1.58-.07-4.74-.07zm0 3.27a4.65 4.65 0 1 1 0 9.3 4.65 4.65 0 0 1 0-9.3zm0 7.67a3.02 3.02 0 1 0 0-6.04 3.02 3.02 0 0 0 0 6.04zm5.92-7.86a1.09 1.09 0 1 1-2.17 0 1.09 1.09 0 0 1 2.17 0z",
  },
  {
    label: "Pinterest",
    href: "https://pinterest.com",
    path:
      "M12 2C6.48 2 2 6.48 2 12c0 4.24 2.64 7.86 6.36 9.32-.09-.79-.17-2 .03-2.86.18-.78 1.16-4.95 1.16-4.95s-.3-.59-.3-1.46c0-1.37.79-2.39 1.78-2.39.84 0 1.25.63 1.25 1.39 0 .85-.54 2.12-.82 3.3-.23 1 .5 1.81 1.48 1.81 1.78 0 3.14-1.87 3.14-4.58 0-2.39-1.72-4.07-4.18-4.07-2.85 0-4.52 2.13-4.52 4.34 0 .86.33 1.78.74 2.28.08.1.09.18.07.28-.07.31-.24.99-.27 1.13-.04.18-.14.22-.32.13-1.2-.56-1.95-2.31-1.95-3.72 0-3.03 2.2-5.81 6.34-5.81 3.32 0 5.91 2.37 5.91 5.54 0 3.31-2.09 5.97-4.99 5.97-.97 0-1.89-.5-2.2-1.1l-.6 2.28c-.22.83-.81 1.88-1.21 2.51A10 10 0 0 0 22 12c0-5.52-4.48-10-10-10z",
  },
];

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="border-t border-border pt-20 pb-10">
      <div className="container-px container-max">
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-8 pb-16">
          <div className="lg:col-span-5">
            <Link href="/" className="inline-flex flex-col leading-none">
              <span
                className="font-display text-3xl text-foreground"
                style={{ letterSpacing: "-0.02em" }}
              >
                Jaleco
              </span>
              <span className="text-[10px] uppercase tracking-label text-muted-foreground mt-1">
                Weddings &amp; Events
              </span>
            </Link>
            <p className="mt-8 text-fluid-sm text-muted-foreground max-w-md leading-relaxed">
              A boutique studio designing quietly luxurious celebrations for
              couples who care about the details. By appointment only.
            </p>
            <p className="mt-6 text-fluid-sm text-muted-foreground">
              14 Florence Lane, Surry Hills NSW 2010, Australia
              <br />
              <a
                href="mailto:hello@eventbyjaleco.com"
                className="text-foreground link-underline"
              >
                hello@eventbyjaleco.com
              </a>
            </p>
          </div>

          <div className="lg:col-span-3 lg:col-start-7">
            <p className="eyebrow mb-6">Studio</p>
            <ul className="space-y-3">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-fluid-sm text-foreground/80 hover:text-accent transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-3">
            <p className="eyebrow mb-6">Follow along</p>
            <ul className="flex gap-5">
              {SOCIAL.map((s) => (
                <li key={s.label}>
                  <a
                    href={s.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={s.label}
                    className="text-foreground/55 hover:text-foreground transition-colors"
                  >
                    <svg
                      viewBox="0 0 24 24"
                      className="w-5 h-5"
                      fill="currentColor"
                      aria-hidden
                    >
                      <path d={s.path} />
                    </svg>
                  </a>
                </li>
              ))}
            </ul>
            <p className="mt-8 text-[11px] uppercase tracking-label text-muted-foreground">
              Tuesday — Friday
              <br />
              10am — 5pm AEST
            </p>
          </div>
        </div>

        <div className="pt-8 border-t border-border flex flex-col sm:flex-row gap-4 sm:items-center sm:justify-between text-[11px] uppercase tracking-label text-muted-foreground">
          <p>© {year} Event by Jaleco. All rights reserved.</p>
          <div className="flex gap-6">
            <Link href="/privacy" className="hover:text-accent transition-colors">
              Privacy
            </Link>
            <Link href="/terms" className="hover:text-accent transition-colors">
              Terms
            </Link>
            <span>Photography credits on each story</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
