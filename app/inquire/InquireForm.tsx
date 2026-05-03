"use client";

import { FormEvent, useState } from "react";

type FormState = {
  name: string;
  partner: string;
  email: string;
  date: string;
  location: string;
  guests: string;
  message: string;
};

const INITIAL: FormState = {
  name: "",
  partner: "",
  email: "",
  date: "",
  location: "",
  guests: "",
  message: "",
};

export default function InquireForm() {
  const [form, setForm] = useState<FormState>(INITIAL);
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
    setForm(INITIAL);
    setTimeout(() => setStatus("idle"), 8000);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-10">
      {status === "success" && (
        <div
          role="status"
          className="border border-border py-4 px-5 flex items-baseline gap-3"
        >
          <span aria-hidden className="display-italic text-fluid-lg text-accent">
            ✓
          </span>
          <div>
            <p className="display-italic text-fluid-lg text-foreground">
              Thank you, beautifully sent.
            </p>
            <p className="text-fluid-sm text-muted-foreground mt-1">
              We will be in touch within two business days.
            </p>
          </div>
        </div>
      )}

      <div className="grid sm:grid-cols-2 gap-x-8 gap-y-10">
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

      <div className="grid sm:grid-cols-2 gap-x-8 gap-y-10">
        <Field
          label="Wedding date or season"
          placeholder="e.g. Autumn 2026"
          value={form.date}
          onChange={(v) => update("date", v)}
        />
        <Field
          label="Location or city"
          placeholder="e.g. Provence, France"
          value={form.location}
          onChange={(v) => update("location", v)}
        />
      </div>

      <Field
        label="Approximate guest count"
        value={form.guests}
        onChange={(v) => update("guests", v)}
      />

      <div>
        <label
          htmlFor="message"
          className="block text-[11px] uppercase tracking-label text-muted-foreground mb-3"
        >
          Tell us your story
        </label>
        <textarea
          id="message"
          rows={6}
          value={form.message}
          onChange={(e) => update("message", e.target.value)}
          required
          placeholder="Where are you imagining? What feeling do you want guests to leave with?"
          className="w-full bg-transparent border-0 border-b border-border px-0 py-3 text-foreground placeholder:text-muted-foreground/60 focus:outline-none focus:border-foreground transition-colors resize-none font-body text-fluid-base"
        />
      </div>

      <div className="flex flex-col-reverse sm:flex-row sm:items-center sm:justify-between gap-6 pt-4 border-t border-border">
        <p className="text-[11px] text-muted-foreground max-w-md leading-relaxed">
          By sending this enquiry you agree to be contacted by Event by Jaleco
          regarding your wedding.
        </p>
        <button
          type="submit"
          disabled={status === "submitting"}
          className="inline-flex items-center gap-3 text-[12px] uppercase tracking-label text-foreground link-underline disabled:opacity-50 disabled:cursor-not-allowed self-start sm:self-center py-2"
        >
          {status === "submitting" ? "Sending…" : "Submit enquiry"}
          <span aria-hidden>→</span>
        </button>
      </div>
    </form>
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
  const id = label.toLowerCase().replace(/[^a-z]+/g, "-");
  return (
    <div>
      <label
        htmlFor={id}
        className="block text-[11px] uppercase tracking-label text-muted-foreground mb-3"
      >
        {label}
        {required && (
          <span aria-hidden className="text-accent ml-1">
            *
          </span>
        )}
      </label>
      <input
        id={id}
        type={type}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        required={required}
        placeholder={placeholder}
        className="w-full bg-transparent border-0 border-b border-border px-0 py-3 text-foreground placeholder:text-muted-foreground/60 focus:outline-none focus:border-foreground transition-colors font-body text-fluid-base"
      />
    </div>
  );
}
