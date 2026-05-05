import type { Metadata } from "next";
import Footer from "../components/Footer";
import JsonLd from "../components/JsonLd";
import Navbar from "../components/Navbar";
import { WORKS } from "../lib/works";
import {
  breadcrumbLd,
  buildGraph,
  collectionPageLd,
  SITE_URL,
  workItemListLd,
} from "../lib/seo";
import WorkGrid from "./WorkGrid";

const WORK_URL = `${SITE_URL}/work`;
const WORK_DESCRIPTION =
  "A selection of weddings designed and produced by Event by Jaleco — destination, intimate, and private estate celebrations across Italy, France, Greece, the United States, Japan, and Australia.";

export const metadata: Metadata = {
  title: "Work — Selected destination & boutique weddings",
  description: WORK_DESCRIPTION,
  alternates: { canonical: "/work" },
  openGraph: {
    url: WORK_URL,
    title: "Work — Selected destination & boutique weddings by Event by Jaleco",
    description: WORK_DESCRIPTION,
  },
};

const workGraph = buildGraph([
  collectionPageLd({
    name: "Selected work — Event by Jaleco",
    description: WORK_DESCRIPTION,
    url: WORK_URL,
  }),
  breadcrumbLd([
    { name: "Home", url: "/" },
    { name: "Work", url: "/work" },
  ]),
  workItemListLd(WORKS),
]);

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
      <JsonLd data={workGraph} id="ld-work" />
    </>
  );
}
