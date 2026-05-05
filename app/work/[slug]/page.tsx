import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import Footer from "../../components/Footer";
import JsonLd from "../../components/JsonLd";
import Navbar from "../../components/Navbar";
import Reveal from "../../components/Reveal";
import {
  breadcrumbLd,
  buildGraph,
  SITE_URL,
  workArticleLd,
} from "../../lib/seo";
import { WORKS, adjacentWorks, workBySlug } from "../../lib/works";

export function generateStaticParams() {
  return WORKS.map((w) => ({ slug: w.slug }));
}

export function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Metadata {
  const work = workBySlug(params.slug);
  if (!work) return { title: "Work" };
  const title = `${work.place} Wedding Planning — ${work.region}, ${work.year}`;
  const url = `${SITE_URL}/work/${work.slug}`;
  return {
    title,
    description: work.narrative,
    alternates: { canonical: `/work/${work.slug}` },
    keywords: [
      `${work.place} wedding planner`,
      `${work.region} wedding planner`,
      `${work.category.toLowerCase()} wedding`,
      "destination wedding",
      "luxury wedding designer",
    ],
    openGraph: {
      type: "article",
      url,
      title,
      description: work.narrative,
      images: [
        {
          url: work.hero,
          width: 2400,
          height: 1600,
          alt: work.thumbAlt,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description: work.narrative,
      images: [work.hero],
    },
  };
}

export default function WorkDetailPage({
  params,
}: {
  params: { slug: string };
}) {
  const work = workBySlug(params.slug);
  if (!work) notFound();

  const { prev, next } = adjacentWorks(work.slug);

  const workGraph = buildGraph([
    breadcrumbLd([
      { name: "Home", url: "/" },
      { name: "Work", url: "/work" },
      { name: `${work.place}, ${work.year}`, url: `/work/${work.slug}` },
    ]),
    workArticleLd(work),
  ]);

  return (
    <>
      <Navbar overImage />
      <main id="main">
        <section className="relative h-[80svh] min-h-[520px] w-full overflow-hidden">
          <div className="absolute inset-0 -z-10">
            <Image
              src={work.hero}
              alt={work.thumbAlt}
              fill
              priority
              sizes="100vw"
              className="object-cover"
            />
            <div
              aria-hidden
              className="absolute inset-0 bg-gradient-to-b from-foreground/15 to-foreground/55"
            />
          </div>

          <div className="relative z-10 h-full flex flex-col">
            <div className="flex-1" />
            <div className="container-px container-max pb-16 lg:pb-24">
              <Reveal>
                <p className="eyebrow text-background/85 mb-5">
                  {work.category} · {work.year}
                </p>
              </Reveal>
              <Reveal delay={120}>
                <h1
                  className="font-display text-background text-balance"
                  style={{
                    fontSize: "clamp(2.5rem, 1.8rem + 4vw, 5.5rem)",
                    lineHeight: 0.98,
                    letterSpacing: "-0.03em",
                  }}
                >
                  {work.place},{" "}
                  <em className="display-italic">{work.region}</em>
                </h1>
              </Reveal>
            </div>
          </div>
        </section>

        <section className="section-y">
          <div className="container-px container-max">
            <Reveal>
              <p
                className="font-display text-foreground/95 text-pretty max-w-prose mx-auto"
                style={{
                  fontSize: "clamp(1.25rem, 1rem + 0.8vw, 1.625rem)",
                  lineHeight: 1.5,
                }}
              >
                {work.narrative}
              </p>
            </Reveal>
          </div>
        </section>

        {work.essay.length > 0 && (
          <section className="pb-[var(--space-section)]">
            <div className="space-y-12 lg:space-y-20">
              {work.essay.map((img, i) => (
                <Reveal key={i} as="figure" className="m-0">
                  {img.full ? (
                    <div className="relative aspect-[16/9] w-full overflow-hidden bg-muted">
                      <Image
                        src={img.src}
                        alt={img.alt}
                        fill
                        sizes="100vw"
                        className="object-cover"
                      />
                    </div>
                  ) : (
                    <div className="container-px container-max">
                      <div className="relative aspect-[4/5] sm:aspect-[16/10] w-full overflow-hidden bg-muted max-w-4xl mx-auto">
                        <Image
                          src={img.src}
                          alt={img.alt}
                          fill
                          sizes="(min-width: 1024px) 880px, 100vw"
                          className="object-cover"
                        />
                      </div>
                    </div>
                  )}
                  {img.caption && (
                    <figcaption className="container-px container-max">
                      <p className="display-italic text-fluid-sm text-muted-foreground mt-4 text-center">
                        {img.caption}
                      </p>
                    </figcaption>
                  )}
                </Reveal>
              ))}
            </div>
          </section>
        )}

        <section className="section-y border-t border-border">
          <div className="container-px container-max grid gap-12 lg:grid-cols-12">
            <div className="lg:col-span-4">
              <p className="eyebrow mb-6">Photography</p>
              <p className="display-italic text-fluid-xl text-foreground">
                {work.photographer}
              </p>
            </div>

            <div className="lg:col-span-8">
              <p className="eyebrow mb-6">Vendors</p>
              <dl className="grid sm:grid-cols-2 gap-y-5 gap-x-10">
                {work.vendors.map((v) => (
                  <div key={v.role} className="flex items-baseline gap-4">
                    <dt className="text-[11px] uppercase tracking-label text-muted-foreground min-w-24">
                      {v.role}
                    </dt>
                    <dd className="display-italic text-fluid-base text-foreground">
                      {v.name}
                    </dd>
                  </div>
                ))}
              </dl>
            </div>
          </div>
        </section>

        {(prev || next) && (
          <nav
            aria-label="Other celebrations"
            className="border-t border-border pt-12 pb-20 lg:py-16"
          >
            <div className="container-px container-max grid grid-cols-2 gap-8">
              {prev ? (
                <Link
                  href={`/work/${prev.slug}`}
                  className="group flex flex-col items-start gap-2"
                >
                  <span className="text-[11px] uppercase tracking-label text-muted-foreground">
                    ← Previous
                  </span>
                  <span className="display-italic text-fluid-lg text-foreground group-hover:text-accent transition-colors">
                    {prev.place}, {prev.year}
                  </span>
                </Link>
              ) : (
                <span />
              )}
              {next ? (
                <Link
                  href={`/work/${next.slug}`}
                  className="group flex flex-col items-end gap-2 text-right"
                >
                  <span className="text-[11px] uppercase tracking-label text-muted-foreground">
                    Next →
                  </span>
                  <span className="display-italic text-fluid-lg text-foreground group-hover:text-accent transition-colors">
                    {next.place}, {next.year}
                  </span>
                </Link>
              ) : (
                <span />
              )}
            </div>
          </nav>
        )}
      </main>
      <Footer />
      <JsonLd data={workGraph} id={`ld-work-${work.slug}`} />
    </>
  );
}
