export default function About() {
  return (
    <section id="about" className="relative py-32 overflow-hidden">
      <div className="container-px max-w-7xl mx-auto grid lg:grid-cols-12 gap-16 lg:gap-20 items-center">
        <div className="lg:col-span-5 order-2 lg:order-1">
          <div className="relative">
            <div className="relative w-full aspect-[4/5] rounded-[200px] overflow-hidden soft-card">
              <img
                src="https://images.unsplash.com/photo-1525258946800-98cfd641d0de?auto=format&fit=crop&w=1000&q=80"
                alt="Jaleco arranging wedding florals"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -bottom-8 -right-4 md:-right-12 w-44 h-56 rounded-[100px] overflow-hidden soft-card-inset border-4 border-background">
              <img
                src="https://images.unsplash.com/photo-1511795409834-ef04bbd61622?auto=format&fit=crop&w=600&q=80"
                alt="Wedding ceremony detail"
                className="w-full h-full object-cover"
              />
            </div>
            <span
              aria-hidden
              className="absolute -top-6 -left-6 display-script text-7xl text-secondary/80"
            >
              &amp;
            </span>
          </div>
        </div>

        <div className="lg:col-span-7 order-1 lg:order-2">
          <p className="eyebrow mb-6">Our Story</p>
          <h2 className="text-4xl md:text-5xl lg:text-6xl leading-[1.1] text-balance">
            Quietly luxurious weddings,{" "}
            <span className="display-script text-accent text-5xl md:text-6xl lg:text-7xl block mt-3">
              made with intention
            </span>
          </h2>

          <div className="mt-10 space-y-6 text-muted-foreground leading-relaxed text-pretty max-w-xl">
            <p>
              Jaleco is a boutique studio for couples who care about the
              difference a folded napkin, a hand-written menu, or the way
              candlelight catches a glass can make. We design with restraint,
              and a deep respect for the people the day belongs to.
            </p>
            <p>
              From a private estate elopement to a multi-day celebration on the
              coast, our team builds every wedding as a one-of-one — never a
              template, never a trend. Just your story, told beautifully.
            </p>
          </div>

          <div className="mt-12 grid sm:grid-cols-2 gap-6 max-w-xl">
            <div className="soft-card rounded-2xl p-6">
              <div className="font-serif text-4xl text-accent">01</div>
              <h3 className="mt-3 text-xl">Bespoke Design</h3>
              <p className="mt-2 text-sm text-muted-foreground">
                Every detail drawn from your story — never recycled.
              </p>
            </div>
            <div className="soft-card rounded-2xl p-6">
              <div className="font-serif text-4xl text-accent">02</div>
              <h3 className="mt-3 text-xl">Considered Calm</h3>
              <p className="mt-2 text-sm text-muted-foreground">
                Logistics handled quietly so you stay fully present.
              </p>
            </div>
          </div>

          <div className="mt-12 flex items-center gap-6">
            <div className="display-script text-5xl text-accent">Jaleco</div>
            <div className="text-xs uppercase tracking-widest2 text-muted-foreground">
              Founder &amp;<br />
              Creative Director
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
