"use client";

import { FormEvent, useState } from "react";

type FormState = {
  name: string;
  email: string;
  partner: string;
  date: string;
  guests: string;
  service: string;
  message: string;
};

const initial: FormState = {
  name: "",
  email: "",
  partner: "",
  date: "",
  guests: "",
  service: "Full Planning",
  message: "",
};

export default function Contact() {
  const [form, setForm] = useState<FormState>(initial);
  const [status, setStatus] = useState<"idle" | "submitting" | "success">(
    "idle"
  );

  const update = (key: keyof FormState, value: string) =>
    setForm((prev) => ({ ...prev, [key]: value }));

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("submitting");
    await new Promise((r) => setTimeout(r, 900));
    setStatus("success");
    setForm(initial);
    setTimeout(() => setStatus("idle"), 6000);
  };

  return (
    <section
      id="contact"
      className="relative py-32 bg-gradient-to-b from-background via-card to-background"
    >
      <div className="container-px max-w-7xl mx-auto grid lg:grid-cols-12 gap-12 lg:gap-20 items-start">
        <div className="lg:col-span-5">
          <p className="eyebrow mb-6">Begin</p>
          <h2 className="text-4xl md:text-5xl lg:text-6xl leading-[1.1] text-balance">
            Tell us about{" "}
            <span className="display-script text-accent text-5xl md:text-6xl lg:text-7xl block mt-3">
              your day
            </span>
          </h2>
          <p className="mt-8 text-muted-foreground leading-relaxed text-pretty max-w-md">
            Share a few details about your wedding and we&apos;ll be in touch
            within two business days. We promise we read every word.
          </p>

          <dl className="mt-12 space-y-6 text-sm">
            <div>
              <dt className="eyebrow mb-2">Studio</dt>
              <dd className="font-serif text-xl text-foreground">
                14 Florence Lane, Surry Hills NSW
              </dd>
            </div>
            <div>
              <dt className="eyebrow mb-2">By appointment</dt>
              <dd className="font-serif text-xl text-foreground">
                hello@eventbyjaleco.com
              </dd>
            </div>
            <div>
              <dt className="eyebrow mb-2">Follow along</dt>
              <dd className="flex gap-4 mt-1">
                {["Instagram", "Pinterest", "Vogue"].map((s) => (
                  <a
                    key={s}
                    href="#"
                    className="font-serif text-lg text-accent hover:text-foreground transition-colors"
                  >
                    {s}
                  </a>
                ))}
              </dd>
            </div>
          </dl>
        </div>

        <form
          onSubmit={handleSubmit}
          className="lg:col-span-7 soft-card rounded-3xl p-8 lg:p-12 space-y-6"
        >
          {status === "success" && (
            <div
              role="status"
              className="rounded-2xl bg-secondary/60 border border-accent/30 p-5 flex items-start gap-3 animate-fade-up"
            >
              <span className="display-script text-3xl text-accent leading-none">
                &#10003;
              </span>
              <div>
                <p className="font-serif text-xl">Thank you, beautifully sent.</p>
                <p className="text-sm text-muted-foreground mt-1">
                  We&apos;ll be in touch within two business days.
                </p>
              </div>
            </div>
          )}

          <div className="grid sm:grid-cols-2 gap-6">
            <Field
              label="Your name"
              required
              value={form.name}
              onChange={(v) => update("name", v)}
            />
            <Field
              label="Partner's name"
              value={form.partner}
              onChange={(v) => update("partner", v)}
            />
          </div>

          <Field
            label="Email"
            type="email"
            required
            value={form.email}
            onChange={(v) => update("email", v)}
          />

          <div className="grid sm:grid-cols-2 gap-6">
            <Field
              label="Wedding date (or season)"
              type="text"
              placeholder="e.g. Autumn 2026"
              value={form.date}
              onChange={(v) => update("date", v)}
            />
            <Field
              label="Approximate guest count"
              type="text"
              value={form.guests}
              onChange={(v) => update("guests", v)}
            />
          </div>

          <div>
            <label className="block eyebrow mb-3">Interested in</label>
            <div className="flex flex-wrap gap-3">
              {["Intimate Ceremony", "Full Planning", "Destination"].map(
                (option) => {
                  const active = form.service === option;
                  return (
                    <button
                      key={option}
                      type="button"
                      onClick={() => update("service", option)}
                      className={`px-5 py-2.5 rounded-full text-xs uppercase tracking-widest2 transition-all duration-300 ${
                        active
                          ? "bg-foreground text-background"
                          : "border border-border text-foreground/70 hover:border-accent hover:text-accent"
                      }`}
                    >
                      {option}
                    </button>
                  );
                }
              )}
            </div>
          </div>

          <div>
            <label htmlFor="message" className="block eyebrow mb-3">
              Tell us your story
            </label>
            <textarea
              id="message"
              rows={5}
              value={form.message}
              onChange={(e) => update("message", e.target.value)}
              required
              placeholder="Where are you imagining? What feeling do you want guests to leave with?"
              className="w-full bg-background rounded-2xl px-5 py-4 text-foreground placeholder:text-muted-foreground/70 border border-transparent shadow-soft-inset focus:outline-none focus:border-accent transition-colors resize-none"
            />
          </div>

          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 pt-2">
            <p className="text-xs text-muted-foreground max-w-sm">
              By sending this enquiry you agree to be contacted by Event by
              Jaleco regarding your wedding.
            </p>
            <button
              type="submit"
              disabled={status === "submitting"}
              className="btn-primary disabled:opacity-60 disabled:cursor-not-allowed"
            >
              {status === "submitting" ? "Sending…" : "Send Enquiry"}
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}

type FieldProps = {
  label: string;
  value: string;
  onChange: (v: string) => void;
  type?: string;
  required?: boolean;
  placeholder?: string;
};

function Field({
  label,
  value,
  onChange,
  type = "text",
  required,
  placeholder,
}: FieldProps) {
  const id = label.toLowerCase().replace(/\s+/g, "-");
  return (
    <div>
      <label htmlFor={id} className="block eyebrow mb-3">
        {label}
        {required && <span className="text-accent ml-1">*</span>}
      </label>
      <input
        id={id}
        type={type}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        required={required}
        placeholder={placeholder}
        className="w-full bg-background rounded-2xl px-5 py-3.5 text-foreground placeholder:text-muted-foreground/70 border border-transparent shadow-soft-inset focus:outline-none focus:border-accent transition-colors"
      />
    </div>
  );
}
