import Reveal from "./Reveal";

export default function PullQuote() {
  return (
    <section className="section-y bg-muted">
      <div className="container-px container-max">
        <Reveal>
          <figure className="max-w-quote mx-auto text-center">
            <blockquote
              className="display-italic text-foreground text-balance"
              style={{
                fontSize: "clamp(1.75rem, 1.3rem + 1.8vw, 2.75rem)",
                lineHeight: 1.25,
              }}
            >
              Calmly extraordinary. Our wedding felt like a place we had been
              dreaming of for years, even though we had never been there
              before.
            </blockquote>
            <figcaption className="mt-10 flex flex-col items-center gap-3">
              <span aria-hidden className="block w-10 h-px bg-border" />
              <p className="display-italic text-muted-foreground text-fluid-base">
                A bride · Provence, 2024
              </p>
            </figcaption>
          </figure>
        </Reveal>
      </div>
    </section>
  );
}
