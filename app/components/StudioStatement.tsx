import Reveal from "./Reveal";

export default function StudioStatement() {
  return (
    <section id="statement" className="section-y">
      <div className="container-px container-max">
        <Reveal>
          <div className="max-w-prose mx-auto text-center">
            <p className="eyebrow mb-10">From the studio</p>

            <p
              className="font-display text-foreground/95 text-pretty"
              style={{
                fontSize: "clamp(1.5rem, 1.1rem + 1.4vw, 2rem)",
                lineHeight: 1.35,
                letterSpacing: "-0.01em",
              }}
            >
              Event by Jaleco is a small studio for couples who care about the
              difference a folded napkin, a hand-written menu, or the way
              candlelight catches a glass can make. We design with restraint,
              and a deep respect for the people the day belongs to. From a
              private estate elopement to a multi-day celebration on the coast,
              every wedding is a one-of-one — never a template, never a trend.
              Just your story, told beautifully.
            </p>

            <div className="mt-12 flex flex-col items-center gap-3">
              <span aria-hidden className="block w-12 h-px bg-border" />
              <p className="display-italic text-muted-foreground text-fluid-base">
                Muelvi Jaleco, founder &amp; creative director
              </p>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
