export default function Hero() {
  return (
    <section
      id="top"
      className="relative min-h-screen flex items-center pt-24 overflow-hidden"
    >
      <div
        aria-hidden
        className="absolute inset-0 -z-10 bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=2400&q=80')",
        }}
      />
      <div
        aria-hidden
        className="absolute inset-0 -z-10 bg-gradient-to-b from-background/85 via-background/70 to-background"
      />
      <div
        aria-hidden
        className="absolute -top-32 -left-32 w-[480px] h-[480px] rounded-full bg-secondary/40 blur-3xl -z-10"
      />
      <div
        aria-hidden
        className="absolute -bottom-40 -right-32 w-[520px] h-[520px] rounded-full bg-primary/20 blur-3xl -z-10"
      />

      <div className="container-px max-w-7xl mx-auto grid lg:grid-cols-12 gap-12 items-center w-full py-20">
        <div className="lg:col-span-7 animate-fade-up">
          <p className="eyebrow mb-6">Boutique Wedding Atelier · Est. 2014</p>
          <h1 className="text-5xl md:text-7xl lg:text-[5.5rem] leading-[1.05] text-balance">
            Weddings written
            <br />
            <span className="display-script text-accent text-6xl md:text-8xl lg:text-[7rem] block leading-[0.9] mt-2">
              like a love letter
            </span>
          </h1>
          <p className="mt-8 max-w-xl text-lg text-muted-foreground leading-relaxed text-pretty">
            Bespoke design, full-service planning, and quietly indulgent details
            for couples who believe the most beautiful weddings feel like
            stepping into a story.
          </p>

          <div className="mt-10 flex flex-wrap items-center gap-4">
            <a href="#gallery" className="btn-primary">
              View Our Work
            </a>
            <a href="#contact" className="btn-secondary">
              Get in Touch
            </a>
          </div>

          <div className="mt-14 flex items-center gap-8 text-xs uppercase tracking-widest2 text-muted-foreground">
            <div>
              <div className="font-serif text-3xl text-foreground">12+</div>
              years of craft
            </div>
            <div className="h-10 w-px bg-border" />
            <div>
              <div className="font-serif text-3xl text-foreground">240</div>
              celebrations
            </div>
            <div className="h-10 w-px bg-border" />
            <div>
              <div className="font-serif text-3xl text-foreground">38</div>
              destinations
            </div>
          </div>
        </div>

        <div className="lg:col-span-5 hidden lg:block animate-fade-in">
          <div className="relative h-[560px]">
            <div className="absolute top-0 right-8 w-64 h-80 rounded-[140px] overflow-hidden soft-card animate-float">
              <img
                src="https://images.unsplash.com/photo-1606490194859-07c18c9f0968?auto=format&fit=crop&w=800&q=80"
                alt="Soft pink florals on a wedding table"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute bottom-0 left-0 w-72 h-96 rounded-[140px] overflow-hidden soft-card">
              <img
                src="https://images.unsplash.com/photo-1519225421980-715cb0215aed?auto=format&fit=crop&w=800&q=80"
                alt="Bride in soft natural light"
                className="w-full h-full object-cover"
              />
            </div>
            <div
              aria-hidden
              className="absolute top-32 left-12 w-20 h-20 rounded-full bg-card shadow-soft-sm flex items-center justify-center"
            >
              <span className="display-script text-3xl text-accent">J</span>
            </div>
          </div>
        </div>
      </div>

      <a
        href="#about"
        aria-label="Scroll to next section"
        className="absolute bottom-10 left-1/2 -translate-x-1/2 text-xs uppercase tracking-widest2 text-muted-foreground hover:text-accent transition-colors flex flex-col items-center gap-3"
      >
        Scroll
        <span className="block w-px h-10 bg-gradient-to-b from-border to-transparent" />
      </a>
    </section>
  );
}
