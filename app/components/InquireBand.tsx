import Link from "next/link";
import Reveal from "./Reveal";

export default function InquireBand() {
  return (
    <section className="section-y">
      <div className="container-px container-max">
        <Reveal>
          <div className="text-center max-w-prose mx-auto">
            <h2
              className="font-display text-foreground text-balance"
              style={{ fontSize: "var(--text-3xl)", letterSpacing: "-0.025em" }}
            >
              Begin a <em className="display-italic">conversation</em>
            </h2>

            <p className="mt-8 text-muted-foreground text-pretty max-w-sub mx-auto">
              We work with twelve to fourteen couples a year. If our work feels
              like a fit for yours, write to us — we read every word.
            </p>

            <div className="mt-12 flex flex-col items-center gap-3">
              <a
                href="mailto:hello@eventbyjaleco.com"
                className="display-italic text-foreground text-fluid-xl link-underline"
              >
                hello@eventbyjaleco.com
              </a>
              <span aria-hidden className="block w-10 h-px bg-border" />
            </div>

            <div className="mt-10">
              <Link href="/inquire" className="link-quiet">
                Inquire
                <span aria-hidden>→</span>
              </Link>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
