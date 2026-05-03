import type { Metadata } from "next";
import Link from "next/link";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import Reveal from "../components/Reveal";

export const metadata: Metadata = {
  title: "Journal",
  description: "Notes from the studio. Coming soon.",
};

export default function JournalPage() {
  return (
    <>
      <Navbar />
      <main id="main" className="min-h-[80svh] flex items-center pt-32 pb-32">
        <div className="container-px container-max">
          <Reveal>
            <div className="max-w-prose mx-auto text-center">
              <p className="eyebrow mb-6">Journal</p>
              <h1
                className="font-display text-foreground text-balance"
                style={{
                  fontSize: "var(--text-3xl)",
                  letterSpacing: "-0.025em",
                  lineHeight: 1.05,
                }}
              >
                Notes from the studio,{" "}
                <em className="display-italic">coming soon</em>
              </h1>
              <p className="mt-8 text-muted-foreground text-pretty">
                We are putting together a slow, considered journal — vendor
                spotlights, behind-the-scenes letters, and a few thoughts on
                designing celebrations. Until then, you can find us at the link
                below.
              </p>
              <div className="mt-12 flex flex-col items-center gap-3">
                <span aria-hidden className="block w-10 h-px bg-border" />
                <Link href="/inquire" className="link-quiet">
                  Begin a conversation
                  <span aria-hidden>→</span>
                </Link>
              </div>
            </div>
          </Reveal>
        </div>
      </main>
      <Footer />
    </>
  );
}
