import type { Metadata } from "next";
import Image from "next/image";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import Reveal from "../components/Reveal";

export const metadata: Metadata = {
  title: "About",
  description:
    "Event by Jaleco is a boutique studio designing quietly luxurious weddings for couples who care about the difference candlelight makes.",
};

const PILLARS = [
  {
    title: "Joyful",
    body: "We design from the people the day belongs to — never from a template, never from a trend. Every choice is filtered through the small question: does this feel like them?",
  },
  {
    title: "Editorial",
    body: "Light, restraint, considered material — we approach every wedding with the discipline of a magazine cover and the warmth of a hand-written letter.",
  },
  {
    title: "Seamless",
    body: "Logistics handled quietly so you stay fully present. By the morning of the wedding the only thing in your hands is a glass of something good.",
  },
];

const TEAM = [
  {
    name: "Muelvi Jaleco",
    role: "Founder & Creative Director",
    photo:
      "https://images.unsplash.com/photo-1525258946800-98cfd641d0de?auto=format&fit=crop&w=800&q=85",
    alt: "Muelvi Jaleco arranging florals in studio.",
  },
  {
    name: "Mira",
    role: "Senior Designer",
    photo:
      "https://images.unsplash.com/photo-1611601322175-ef8ec8c85f01?auto=format&fit=crop&w=800&q=85",
    alt: "Mira in soft daylight at the studio.",
  },
  {
    name: "Theo",
    role: "Production Lead",
    photo:
      "https://images.unsplash.com/photo-1542596594-649edbc13630?auto=format&fit=crop&w=800&q=85",
    alt: "Theo reviewing a production schedule.",
  },
  {
    name: "Anouk",
    role: "Client Experience",
    photo:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=800&q=85",
    alt: "Anouk on a client call in the studio.",
  },
];

const STATS = [
  { figure: "12+", label: "years of craft" },
  { figure: "240", label: "celebrations" },
  { figure: "38", label: "destinations" },
  { figure: "14", label: "weddings a year" },
];

export default function AboutPage() {
  return (
    <>
      <Navbar />
      <main id="main">
        <section className="pt-32 lg:pt-40 pb-[var(--space-section)]">
          <div className="container-px container-max grid gap-16 lg:gap-y-24 lg:gap-x-[var(--col-gutter)] lg:grid-cols-12 items-end">
            <div className="lg:col-span-6 order-2 lg:order-1">
              <Reveal as="figure" className="m-0">
                <div className="relative aspect-[4/5] w-full overflow-hidden bg-muted">
                  <Image
                    src="https://images.unsplash.com/photo-1525258946800-98cfd641d0de?auto=format&fit=crop&w=1600&q=85"
                    alt="Muelvi Jaleco arranging garden roses in the studio."
                    fill
                    priority
                    sizes="(min-width: 1024px) 50vw, 100vw"
                    className="object-cover"
                  />
                </div>
                <figcaption className="mt-4 text-[11px] uppercase tracking-label text-muted-foreground">
                  Photographed by Adrienne Vaughn
                </figcaption>
              </Reveal>
            </div>

            <div className="lg:col-span-6 order-1 lg:order-2">
              <Reveal>
                <p className="eyebrow mb-6">About the studio</p>
                <h1
                  className="font-display text-foreground text-balance"
                  style={{
                    fontSize: "var(--text-3xl)",
                    letterSpacing: "-0.025em",
                    lineHeight: 1.05,
                  }}
                >
                  Quietly luxurious weddings,{" "}
                  <em className="display-italic">made with intention</em>
                </h1>
              </Reveal>
              <Reveal delay={120}>
                <div className="mt-10 space-y-6 text-pretty max-w-prose text-foreground/90 leading-relaxed">
                  <p>
                    Event by Jaleco is a small studio for couples who care
                    about the difference a folded napkin, a hand-written
                    menu, or the way candlelight catches a glass can make.
                    We design with restraint, and a deep respect for the
                    people the day belongs to.
                  </p>
                  <p>
                    From a private estate elopement to a multi-day celebration
                    on the coast, our team builds every wedding as a one-of-one
                    — never a template, never a trend. Just your story, told
                    beautifully.
                  </p>
                </div>
              </Reveal>
            </div>
          </div>
        </section>

        <section className="section-y bg-muted">
          <div className="container-px container-max">
            <Reveal>
              <p className="eyebrow text-center mb-8">Our approach</p>
              <h2
                className="font-display text-foreground text-center text-balance max-w-3xl mx-auto"
                style={{ fontSize: "var(--text-2xl)", letterSpacing: "-0.02em" }}
              >
                Three things we hold,{" "}
                <em className="display-italic">all the way through</em>
              </h2>
            </Reveal>

            <div className="mt-16 lg:mt-20 grid gap-12 md:gap-10 md:grid-cols-3">
              {PILLARS.map((p, i) => (
                <Reveal key={p.title} delay={i * 90}>
                  <div className="border-t border-border pt-8">
                    <p className="text-[11px] uppercase tracking-label text-secondary">
                      0{i + 1}
                    </p>
                    <h3
                      className="mt-4 font-display text-foreground"
                      style={{ fontSize: "var(--text-xl)" }}
                    >
                      {p.title}
                    </h3>
                    <p className="mt-4 text-foreground/85 text-pretty leading-relaxed">
                      {p.body}
                    </p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        <section className="section-y">
          <div className="container-px container-max">
            <Reveal>
              <p className="eyebrow mb-8">The team</p>
            </Reveal>
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-x-6 gap-y-12">
              {TEAM.map((member, i) => (
                <Reveal key={member.name} as="figure" className="m-0" delay={i * 60}>
                  <div className="relative aspect-[3/4] w-full overflow-hidden bg-muted">
                    <Image
                      src={member.photo}
                      alt={member.alt}
                      fill
                      sizes="(min-width: 1024px) 22vw, 50vw"
                      className="object-cover"
                    />
                  </div>
                  <figcaption className="mt-4">
                    <p className="display-italic text-foreground text-fluid-lg">
                      {member.name}
                    </p>
                    <p className="mt-1 text-[11px] uppercase tracking-label text-muted-foreground">
                      {member.role}
                    </p>
                  </figcaption>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        <section className="section-y border-t border-border">
          <div className="container-px container-max">
            <Reveal>
              <ul className="grid grid-cols-2 lg:grid-cols-4 gap-y-10 gap-x-8">
                {STATS.map((s) => (
                  <li key={s.label} className="flex flex-col items-start">
                    <span
                      className="display-italic text-foreground"
                      style={{
                        fontSize: "clamp(2.5rem, 1.7rem + 3vw, 4.5rem)",
                        lineHeight: 1,
                      }}
                    >
                      {s.figure}
                    </span>
                    <span className="mt-3 text-[11px] uppercase tracking-label text-muted-foreground">
                      {s.label}
                    </span>
                  </li>
                ))}
              </ul>
            </Reveal>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
