import Image from "next/image";

const HERO_IMAGE =
  "https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=2000&q=80";

export default function Hero() {
  return (
    <section
      id="top"
      className="relative h-[100svh] min-h-[640px] w-full overflow-hidden"
    >
      <div className="absolute inset-0 -z-10">
        <Image
          src={HERO_IMAGE}
          alt="Candle-lit wedding tablescape with garden roses at dusk — boutique wedding design by Event by Jaleco, Sydney."
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
        <div
          aria-hidden
          className="absolute inset-0 bg-gradient-to-b from-foreground/10 via-foreground/0 to-foreground/55"
        />
      </div>

      <div className="relative z-10 h-full flex flex-col">
        <div className="flex-1" />

        <div className="container-px container-max pb-32 sm:pb-24 lg:pb-28">
          <p className="eyebrow text-background/85 mb-6 reveal-on-load">
            Boutique Wedding Atelier · Est. 2014
          </p>

          <h1
            className="font-display text-background text-balance reveal-on-load"
            style={{
              fontSize: "var(--text-display)",
              lineHeight: 0.95,
              letterSpacing: "-0.03em",
              animationDelay: "120ms",
            }}
          >
            Weddings written
            <br />
            <em className="display-italic">like a love letter</em>
          </h1>

          <div
            className="mt-10 flex items-center gap-6 reveal-on-load"
            style={{ animationDelay: "220ms" }}
          >
            <span aria-hidden className="block w-12 h-px bg-background/60" />
            <p className="text-background/85 max-w-sub text-pretty">
              A boutique studio for couples who care about the difference
              candlelight makes.
            </p>
          </div>
        </div>
      </div>

      <a
        href="#statement"
        aria-label="Scroll to studio statement"
        className="absolute bottom-6 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-3 text-[10px] uppercase tracking-label text-background/80 hover:text-background transition-colors"
      >
        Scroll
        <span
          aria-hidden
          className="block w-px h-8 bg-background/50 scroll-cue-line"
        />
      </a>
    </section>
  );
}
