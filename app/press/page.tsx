import type { Metadata } from "next";
import Footer from "../components/Footer";
import JsonLd from "../components/JsonLd";
import Navbar from "../components/Navbar";
import Reveal from "../components/Reveal";
import { FEATURES, PUBLICATIONS } from "../lib/press";
import {
  breadcrumbLd,
  buildGraph,
  collectionPageLd,
  pressItemListLd,
  SITE_URL,
} from "../lib/seo";

const PRESS_URL = `${SITE_URL}/press`;
const PRESS_DESCRIPTION =
  "Event by Jaleco in the press — selected features in Vogue, Harper's Bazaar, Town & Country, Brides, Martha Stewart, and Kinfolk on our boutique and destination weddings.";

export const metadata: Metadata = {
  title: "Press — featured in Vogue, Harper's Bazaar, Town & Country",
  description: PRESS_DESCRIPTION,
  alternates: { canonical: "/press" },
  openGraph: {
    url: PRESS_URL,
    title: "Press — Event by Jaleco in Vogue, Harper's Bazaar, Town & Country",
    description: PRESS_DESCRIPTION,
  },
};

const pressGraph = buildGraph([
  collectionPageLd({
    name: "Press — Event by Jaleco",
    description: PRESS_DESCRIPTION,
    url: PRESS_URL,
  }),
  breadcrumbLd([
    { name: "Home", url: "/" },
    { name: "Press", url: "/press" },
  ]),
  pressItemListLd(FEATURES),
]);

export default function PressPage() {
  return (
    <>
      <Navbar />
      <main id="main">
        <header className="pt-32 lg:pt-40 pb-20">
          <div className="container-px container-max">
            <Reveal>
              <p className="eyebrow mb-6">Press</p>
              <h1
                className="font-display text-foreground text-balance max-w-3xl"
                style={{
                  fontSize: "var(--text-3xl)",
                  letterSpacing: "-0.025em",
                  lineHeight: 1.05,
                }}
              >
                Quiet words from{" "}
                <em className="display-italic">good company</em>
              </h1>
            </Reveal>
          </div>
        </header>

        <section className="pb-[var(--space-section-sm)]">
          <div className="container-px container-max">
            <Reveal>
              <ul className="flex flex-wrap items-center justify-center gap-x-12 gap-y-8 lg:gap-x-20 border-y border-border py-12">
                {PUBLICATIONS.map((p) => (
                  <li
                    key={p.name}
                    className="font-display text-foreground/55"
                    style={{
                      fontSize: "clamp(1.25rem, 0.95rem + 0.9vw, 1.625rem)",
                      letterSpacing: "0.02em",
                    }}
                  >
                    {p.name}
                  </li>
                ))}
              </ul>
            </Reveal>
          </div>
        </section>

        <section className="pb-[var(--space-section)]">
          <div className="container-px container-max max-w-4xl">
            <p className="eyebrow mb-10">Selected features</p>
            <ul className="divide-y divide-border border-y border-border">
              {FEATURES.map((f, i) => (
                <Reveal key={i} as="li" delay={(i % 4) * 60}>
                  <a
                    href={f.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex flex-col gap-3 lg:flex-row lg:items-baseline lg:gap-10 py-8 transition-colors"
                  >
                    <span className="display-italic text-fluid-xl text-foreground lg:w-48 lg:flex-shrink-0">
                      {f.publication}
                    </span>
                    <span className="flex-1 text-foreground/85 text-fluid-base text-pretty group-hover:text-accent transition-colors">
                      {f.headline}
                    </span>
                    <span className="text-[11px] uppercase tracking-label text-muted-foreground lg:flex-shrink-0">
                      {f.date}
                      <span aria-hidden className="ml-3">↗</span>
                    </span>
                  </a>
                </Reveal>
              ))}
            </ul>
          </div>
        </section>
      </main>
      <Footer />
      <JsonLd data={pressGraph} id="ld-press" />
    </>
  );
}
