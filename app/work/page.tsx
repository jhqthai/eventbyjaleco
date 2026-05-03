import type { Metadata } from "next";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import WorkGrid from "./WorkGrid";

export const metadata: Metadata = {
  title: "Work",
  description: "A small selection of weddings designed and produced by Jaleco.",
};

export default function WorkPage() {
  return (
    <>
      <Navbar />
      <main id="main" className="pt-32 lg:pt-40 pb-[var(--space-section)]">
        <header className="container-px container-max">
          <p className="eyebrow mb-6">Selected work</p>
          <h1
            className="font-display text-foreground text-balance"
            style={{
              fontSize: "var(--text-3xl)",
              letterSpacing: "-0.025em",
              lineHeight: 1.05,
              maxWidth: "20ch",
            }}
          >
            A few weddings, <em className="display-italic">worth lingering on</em>
          </h1>
          <p className="mt-8 text-muted-foreground max-w-prose text-pretty">
            A selection from the past few seasons. Every celebration is
            designed from a blank page, photographed with light, restraint, and
            love.
          </p>
        </header>

        <WorkGrid />
      </main>
      <Footer />
    </>
  );
}
