"use client";

import Link from "next/link";
import { useMemo, useState } from "react";
import { flushSync } from "react-dom";
import MediaImage from "../components/MediaImage";
import Reveal from "../components/Reveal";
import { WORKS, type Work } from "../lib/works";

type Filter = "All" | "2025" | "2024" | "Destination" | "Intimate" | "Estate";

const FILTERS: Filter[] = ["All", "2025", "2024", "Destination", "Intimate", "Estate"];

type ViewTransitionDocument = Document & {
  startViewTransition?: (cb: () => void) => unknown;
};

function applyFilter(works: Work[], filter: Filter) {
  if (filter === "All") return works;
  if (filter === "2025" || filter === "2024") {
    return works.filter((w) => String(w.year) === filter);
  }
  return works.filter((w) => w.category === filter);
}

export default function WorkGrid() {
  const [filter, setFilter] = useState<Filter>("All");
  const works = useMemo(() => applyFilter(WORKS, filter), [filter]);

  const handleFilter = (next: Filter) => {
    if (next === filter) return;
    if (typeof document !== "undefined") {
      const doc = document as ViewTransitionDocument;
      if (typeof doc.startViewTransition === "function") {
        doc.startViewTransition(() => {
          flushSync(() => setFilter(next));
        });
        return;
      }
    }
    setFilter(next);
  };

  return (
    <>
      <div className="container-px container-max mt-16 lg:mt-20 mb-12 lg:mb-16">
        <ul className="flex flex-wrap gap-x-8 gap-y-3 border-y border-border py-5">
          {FILTERS.map((f) => {
            const active = filter === f;
            return (
              <li key={f}>
                <button
                  type="button"
                  onClick={() => handleFilter(f)}
                  className={`relative text-[12px] uppercase tracking-label py-2 transition-colors ${
                    active
                      ? "text-accent"
                      : "text-foreground/70 hover:text-foreground"
                  }`}
                  aria-pressed={active}
                >
                  {f}
                  {active && (
                    <span
                      aria-hidden
                      className="absolute -bottom-px left-0 right-0 h-px bg-accent"
                    />
                  )}
                </button>
              </li>
            );
          })}
        </ul>
      </div>

      <div className="container-px container-max">
        {works.length === 0 ? (
          <p className="text-muted-foreground text-center py-32">
            No celebrations match this view yet.
          </p>
        ) : (
          <div
            key={filter}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-y-14 gap-x-6 lg:gap-x-8"
          >
            {works.map((work, i) => (
              <Reveal
                key={work.slug}
                as="figure"
                className="m-0"
                delay={(i % 6) * 60}
              >
                <Link
                  href={`/work/${work.slug}`}
                  className="block group"
                  style={{ viewTransitionName: `work-${work.slug}` }}
                >
                  <div
                    className={`relative overflow-hidden bg-muted ${
                      work.aspect === "portrait"
                        ? "aspect-[4/5]"
                        : "aspect-[16/10]"
                    }`}
                  >
                    <MediaImage
                      src={work.thumb}
                      alt={work.thumbAlt}
                      fill
                      sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                      className="object-cover transform-gpu transition-[opacity,transform] duration-[600ms] ease-out group-hover:scale-[1.04]"
                    />
                  </div>
                  <figcaption className="mt-4 flex items-baseline justify-between gap-4">
                    <span className="display-italic text-foreground text-fluid-lg transition-colors duration-500 group-hover:text-accent">
                      {work.place}
                    </span>
                    <span className="text-[11px] uppercase tracking-label text-muted-foreground">
                      {work.region} · {work.year}
                    </span>
                  </figcaption>
                </Link>
              </Reveal>
            ))}
          </div>
        )}
      </div>
    </>
  );
}
