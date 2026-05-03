"use client";

import { useState } from "react";

const faqs = [
  {
    q: "How far in advance should we book?",
    a: "We typically open our calendar 12–18 months in advance, though we occasionally accept shorter timelines for the right fit. For destination weddings or peak-season Saturdays, the earlier the better.",
  },
  {
    q: "Do you take on weddings outside our home city?",
    a: "Yes — roughly half our weddings are destination celebrations. We have trusted vendor relationships across the US, Europe, Australia, and Asia, and we travel for site visits as part of every package.",
  },
  {
    q: "What is your design process like?",
    a: "It begins with an unhurried conversation about who you are as a couple. From there we build a bespoke moodboard, a written design narrative, and a tactile materials palette before any vendor is booked. Nothing is templated.",
  },
  {
    q: "Do you offer partial planning?",
    a: "Our packages are intentionally distinct, but we are happy to design a custom scope if your wedding sits between two offerings. Reach out and we can talk through the right fit.",
  },
  {
    q: "What about budget?",
    a: "Our minimum investment for full planning is $24,000 in fees alone, with overall wedding budgets typically starting at $90,000. Intimate ceremonies and destination weddings have their own structures — we'll always be transparent on the first call.",
  },
  {
    q: "How many weddings do you take on each year?",
    a: "We deliberately keep our calendar to 14–16 weddings a year so every couple has the bandwidth they deserve. This is part of why we book early.",
  },
];

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section id="faq" className="relative py-32">
      <div className="container-px max-w-5xl mx-auto">
        <div className="text-center mb-16">
          <p className="eyebrow mb-6">Frequently Asked</p>
          <h2 className="text-4xl md:text-5xl lg:text-6xl leading-[1.1] text-balance">
            The little things,{" "}
            <span className="display-script text-accent text-5xl md:text-6xl lg:text-7xl block mt-3">
              answered
            </span>
          </h2>
        </div>

        <ul className="space-y-4">
          {faqs.map((item, i) => {
            const isOpen = open === i;
            return (
              <li
                key={item.q}
                className={`soft-card rounded-2xl overflow-hidden transition-all duration-500 ${
                  isOpen ? "ring-1 ring-accent/30" : ""
                }`}
              >
                <button
                  type="button"
                  aria-expanded={isOpen}
                  aria-controls={`faq-panel-${i}`}
                  onClick={() => setOpen(isOpen ? null : i)}
                  className="w-full flex items-center justify-between gap-6 p-6 lg:p-8 text-left"
                >
                  <span className="font-serif text-xl lg:text-2xl text-pretty">
                    {item.q}
                  </span>
                  <span
                    aria-hidden
                    className={`flex-shrink-0 w-10 h-10 rounded-full bg-background flex items-center justify-center transition-transform duration-500 ${
                      isOpen ? "rotate-45 bg-accent text-background" : ""
                    }`}
                  >
                    <svg
                      viewBox="0 0 24 24"
                      className="w-4 h-4"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.5"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M12 5v14M5 12h14"
                      />
                    </svg>
                  </span>
                </button>
                <div
                  id={`faq-panel-${i}`}
                  role="region"
                  className={`grid transition-all duration-500 ease-out ${
                    isOpen
                      ? "grid-rows-[1fr] opacity-100"
                      : "grid-rows-[0fr] opacity-0"
                  }`}
                >
                  <div className="overflow-hidden">
                    <p className="px-6 lg:px-8 pb-8 text-muted-foreground leading-relaxed text-pretty max-w-3xl">
                      {item.a}
                    </p>
                  </div>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
