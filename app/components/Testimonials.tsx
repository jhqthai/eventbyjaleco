const testimonials = [
  {
    quote:
      "Jaleco quietly orchestrated the most extraordinary day of our lives. Every detail felt like ours — only somehow more beautiful than we could have dreamed.",
    couple: "Eloise & Marc",
    where: "Ravello, Italy · Sept 2025",
    rating: 5,
  },
  {
    quote:
      "We arrived at our own wedding and burst into tears. The styling, the florals, the calm — it all felt like stepping into a love letter to our family.",
    couple: "Hanna & Theo",
    where: "Byron Bay, AU · Mar 2025",
    rating: 5,
  },
  {
    quote:
      "What surprised us most was how present we were able to be. Jaleco held everything so gracefully that we never once needed to think about logistics.",
    couple: "Priya & James",
    where: "Hudson Valley, NY · Oct 2024",
    rating: 5,
  },
  {
    quote:
      "From the first mood board to the very last dance, Jaleco's eye for restraint and softness shaped a wedding our guests are still talking about.",
    couple: "Cordelia & Wren",
    where: "Provence, France · Jun 2024",
    rating: 5,
  },
];

function Stars({ count }: { count: number }) {
  return (
    <div className="flex gap-1" aria-label={`${count} out of 5 stars`}>
      {Array.from({ length: count }).map((_, i) => (
        <svg
          key={i}
          aria-hidden
          viewBox="0 0 24 24"
          className="w-4 h-4 text-accent"
          fill="currentColor"
        >
          <path d="m12 2 3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
        </svg>
      ))}
    </div>
  );
}

export default function Testimonials() {
  return (
    <section
      id="testimonials"
      className="relative py-32 bg-gradient-to-b from-background via-secondary/20 to-background overflow-hidden"
    >
      <div className="container-px max-w-7xl mx-auto">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <p className="eyebrow mb-6">Love Notes</p>
          <h2 className="text-4xl md:text-5xl lg:text-6xl leading-[1.1] text-balance">
            Words from{" "}
            <span className="display-script text-accent text-5xl md:text-6xl lg:text-7xl">
              our couples
            </span>
          </h2>
        </div>

        <div className="relative">
          <div
            aria-hidden
            className="pointer-events-none absolute inset-y-0 left-0 w-12 md:w-24 bg-gradient-to-r from-background to-transparent z-10"
          />
          <div
            aria-hidden
            className="pointer-events-none absolute inset-y-0 right-0 w-12 md:w-24 bg-gradient-to-l from-background to-transparent z-10"
          />

          <div className="flex gap-6 lg:gap-8 overflow-x-auto pb-8 px-4 snap-x snap-mandatory scroll-smooth [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
            {testimonials.map((t) => (
              <article
                key={t.couple}
                className="snap-center flex-shrink-0 w-[88%] sm:w-[480px] soft-card rounded-3xl p-8 lg:p-10"
              >
                <span
                  aria-hidden
                  className="display-script text-7xl text-accent/40 leading-none block -mb-2"
                >
                  &ldquo;
                </span>
                <Stars count={t.rating} />
                <blockquote className="mt-6 font-serif text-2xl lg:text-3xl leading-snug text-balance">
                  {t.quote}
                </blockquote>
                <footer className="mt-8 pt-6 border-t border-border/60">
                  <div className="display-script text-3xl text-accent">
                    {t.couple}
                  </div>
                  <div className="text-xs uppercase tracking-widest2 text-muted-foreground mt-1">
                    {t.where}
                  </div>
                </footer>
              </article>
            ))}
          </div>
        </div>

        <p className="mt-12 text-center text-sm text-muted-foreground">
          Drag, scroll, or swipe to read more love notes.
        </p>
      </div>
    </section>
  );
}
