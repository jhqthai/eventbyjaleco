import Link from "next/link";
import Reveal from "./Reveal";
import { PUBLICATIONS } from "../lib/press";

export default function PressWall() {
  return (
    <section className="section-y">
      <div className="container-px container-max">
        <Reveal>
          <p className="eyebrow text-center mb-12">As featured in</p>
          <Link
            href="/press"
            aria-label="View press features"
            className="block group"
          >
            <ul className="flex flex-wrap items-center justify-center gap-x-12 gap-y-8 lg:gap-x-20">
              {PUBLICATIONS.map((p) => (
                <li
                  key={p.name}
                  className="font-display text-foreground/55 group-hover:text-foreground/80 transition-colors duration-500"
                  style={{
                    fontSize: "clamp(1.25rem, 0.95rem + 0.9vw, 1.625rem)",
                    letterSpacing: "0.02em",
                  }}
                >
                  {p.name}
                </li>
              ))}
            </ul>
          </Link>
        </Reveal>
      </div>
    </section>
  );
}
