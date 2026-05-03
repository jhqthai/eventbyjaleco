const services = [
  {
    name: "Intimate Ceremony",
    tagline: "Up to 40 guests",
    description:
      "A quietly beautiful day designed for the people who matter most. Styling, florals, and on-the-day coordination — distilled to its loveliest essentials.",
    includes: [
      "Concept & moodboard",
      "Florals & styling",
      "On-the-day coordination",
      "Vendor curation",
    ],
    price: "From $8,500",
  },
  {
    name: "Full Planning",
    tagline: "Our signature offering",
    description:
      "End-to-end planning, design, and production for celebrations of any scale. We become an extension of you — the steady hands behind every decision.",
    includes: [
      "Full creative direction",
      "Production & logistics",
      "Guest experience design",
      "Unlimited consultations",
    ],
    price: "From $24,000",
    featured: true,
  },
  {
    name: "Destination Wedding",
    tagline: "Anywhere in the world",
    description:
      "Multi-day celebrations in places that hold meaning — a vineyard in Tuscany, a private island, a chapel in the hills. We handle every border.",
    includes: [
      "Location scouting",
      "Travel & accommodation",
      "Local vendor liaison",
      "Welcome events & farewells",
    ],
    price: "From $42,000",
  },
];

export default function Services() {
  return (
    <section
      id="services"
      className="relative py-32 bg-gradient-to-b from-background via-card to-background"
    >
      <div className="container-px max-w-7xl mx-auto">
        <div className="text-center max-w-2xl mx-auto mb-20">
          <p className="eyebrow mb-6">Our Services</p>
          <h2 className="text-4xl md:text-5xl lg:text-6xl leading-[1.1] text-balance">
            A way to work together,{" "}
            <span className="display-script text-accent text-5xl md:text-6xl lg:text-7xl block mt-3">
              for every kind of love
            </span>
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8 lg:gap-10">
          {services.map((service) => (
            <article
              key={service.name}
              className={`relative rounded-3xl p-8 lg:p-10 transition-all duration-500 hover:-translate-y-2 ${
                service.featured
                  ? "soft-card ring-1 ring-accent/30 shadow-glow"
                  : "soft-card"
              }`}
            >
              {service.featured && (
                <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-accent text-background text-[0.65rem] uppercase tracking-widest2 px-4 py-1.5 rounded-full">
                  Most loved
                </span>
              )}

              <div className="flex flex-col h-full">
                <div>
                  <p className="eyebrow mb-3">{service.tagline}</p>
                  <h3 className="text-3xl lg:text-4xl">{service.name}</h3>
                  <p className="mt-5 text-muted-foreground leading-relaxed text-pretty">
                    {service.description}
                  </p>
                </div>

                <ul className="mt-8 space-y-3 flex-1">
                  {service.includes.map((item) => (
                    <li
                      key={item}
                      className="flex items-start gap-3 text-sm text-foreground/80"
                    >
                      <svg
                        aria-hidden
                        viewBox="0 0 24 24"
                        className="w-4 h-4 mt-0.5 flex-shrink-0 text-accent"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="1.5"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="m4.5 12.75 6 6 9-13.5"
                        />
                      </svg>
                      {item}
                    </li>
                  ))}
                </ul>

                <div className="mt-10 pt-6 border-t border-border/60 flex items-center justify-between">
                  <span className="font-serif text-2xl text-accent">
                    {service.price}
                  </span>
                  <a
                    href="#contact"
                    className="text-xs uppercase tracking-widest2 text-foreground/80 hover:text-accent transition-colors flex items-center gap-2"
                  >
                    Enquire
                    <svg
                      aria-hidden
                      viewBox="0 0 24 24"
                      className="w-4 h-4"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.5"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M17 8l4 4m0 0-4 4m4-4H3"
                      />
                    </svg>
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>

        <p className="mt-12 text-center text-sm text-muted-foreground">
          Every package is tailored. Pricing reflects guest count, location, and
          design complexity.
        </p>
      </div>
    </section>
  );
}
