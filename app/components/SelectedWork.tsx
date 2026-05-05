import Link from "next/link";
import MediaImage from "./MediaImage";
import Reveal from "./Reveal";
import { WORKS } from "../lib/works";

const TILE_SLUGS = [
  "sonoma-2025",
  "florence-2024",
  "byron-bay-2025",
  "provence-2024",
  "lake-como-2025",
  "hudson-valley-2025",
];

const tileLayout = [
  { area: "lg:col-span-7 lg:row-span-2", aspect: "aspect-[4/5]", sizes: "(min-width: 1024px) 58vw, 100vw" },
  { area: "lg:col-span-5", aspect: "aspect-[16/10]", sizes: "(min-width: 1024px) 42vw, 100vw" },
  { area: "lg:col-span-5", aspect: "aspect-[16/10]", sizes: "(min-width: 1024px) 42vw, 100vw" },
  { area: "lg:col-span-4", aspect: "aspect-[4/5]", sizes: "(min-width: 1024px) 33vw, 100vw" },
  { area: "lg:col-span-4", aspect: "aspect-[4/5]", sizes: "(min-width: 1024px) 33vw, 100vw" },
  { area: "lg:col-span-4", aspect: "aspect-[4/5]", sizes: "(min-width: 1024px) 33vw, 100vw" },
];

export default function SelectedWork() {
  const works = TILE_SLUGS.map((slug) => WORKS.find((w) => w.slug === slug)!).filter(Boolean);

  return (
    <section id="work" className="section-y">
      <div className="container-px container-max">
        <Reveal>
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-16 lg:mb-20">
            <div>
              <p className="eyebrow mb-6">Selected work</p>
              <h2
                className="font-display text-foreground text-balance"
                style={{ fontSize: "var(--text-3xl)", letterSpacing: "-0.025em" }}
              >
                A few weddings, <em className="display-italic">worth lingering on</em>
              </h2>
            </div>
            <Link
              href="/work"
              className="link-quiet self-start md:self-end"
            >
              View all work
              <span aria-hidden>→</span>
            </Link>
          </div>
        </Reveal>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-y-12 gap-x-6 lg:gap-x-8">
          {works.map((work, i) => {
            const layout = tileLayout[i] ?? tileLayout[0];
            return (
              <Reveal
                key={work.slug}
                as="figure"
                className={`m-0 ${layout.area}`}
                delay={i * 60}
              >
                <Link href={`/work/${work.slug}`} className="block group">
                  <div className={`relative ${layout.aspect} overflow-hidden bg-muted`}>
                    <MediaImage
                      src={work.thumb}
                      alt={work.thumbAlt}
                      fill
                      sizes={layout.sizes}
                      className="object-cover transform-gpu transition-[opacity,transform] duration-[600ms] ease-out group-hover:scale-[1.04]"
                    />
                  </div>
                  <figcaption className="mt-5 flex items-baseline justify-between gap-4">
                    <span className="display-italic text-foreground text-fluid-lg transition-colors duration-500 group-hover:text-accent">
                      {work.place}
                    </span>
                    <span className="text-[11px] uppercase tracking-label text-muted-foreground">
                      {work.region} · {work.year}
                    </span>
                  </figcaption>
                </Link>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
