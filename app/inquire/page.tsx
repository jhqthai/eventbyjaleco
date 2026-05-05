import type { Metadata } from "next";
import Footer from "../components/Footer";
import JsonLd from "../components/JsonLd";
import Navbar from "../components/Navbar";
import Reveal from "../components/Reveal";
import {
  breadcrumbLd,
  buildGraph,
  contactPageLd,
  localBusinessLd,
  SITE_URL,
} from "../lib/seo";
import InquireForm from "./InquireForm";

const INQUIRE_URL = `${SITE_URL}/inquire`;
const INQUIRE_DESCRIPTION =
  "Begin a conversation with Event by Jaleco. Share a few details about your wedding and our Sydney studio will be in touch within two business days.";

export const metadata: Metadata = {
  title: "Inquire — Begin a conversation",
  description: INQUIRE_DESCRIPTION,
  alternates: { canonical: "/inquire" },
  openGraph: {
    url: INQUIRE_URL,
    title: "Inquire — Event by Jaleco",
    description: INQUIRE_DESCRIPTION,
  },
};

const inquireGraph = buildGraph([
  contactPageLd(),
  breadcrumbLd([
    { name: "Home", url: "/" },
    { name: "Inquire", url: "/inquire" },
  ]),
  localBusinessLd(),
]);

export default function InquirePage() {
  return (
    <>
      <Navbar />
      <main id="main" className="page-fade-in pt-32 lg:pt-40 pb-[var(--space-section)]">
        <div className="container-px container-max">
          <div className="grid gap-16 lg:gap-y-24 lg:gap-x-[var(--col-gutter)] lg:grid-cols-12">
            <div className="lg:col-span-5">
              <Reveal>
                <p className="eyebrow mb-6">Begin</p>
                <h1
                  className="font-display text-foreground text-balance"
                  style={{
                    fontSize: "var(--text-3xl)",
                    letterSpacing: "-0.025em",
                    lineHeight: 1.05,
                  }}
                >
                  Tell us about{" "}
                  <em className="display-italic">your day</em>
                </h1>
              </Reveal>
              <Reveal delay={120}>
                <p className="mt-8 text-foreground/85 text-pretty max-w-prose leading-relaxed">
                  Share a few details about your wedding and we will be in
                  touch within two business days. We promise we read every
                  word.
                </p>
              </Reveal>

              <Reveal delay={200}>
                <dl className="mt-12 space-y-8">
                  <div>
                    <dt className="text-[11px] uppercase tracking-label text-muted-foreground mb-2">
                      Studio
                    </dt>
                    <dd className="display-italic text-fluid-lg text-foreground">
                      14 Florence Lane, Surry Hills NSW
                    </dd>
                  </div>
                  <div>
                    <dt className="text-[11px] uppercase tracking-label text-muted-foreground mb-2">
                      By appointment
                    </dt>
                    <dd>
                      <a
                        href="mailto:hello@eventbyjaleco.com"
                        className="display-italic text-fluid-lg text-foreground link-underline"
                      >
                        hello@eventbyjaleco.com
                      </a>
                    </dd>
                  </div>
                  <div>
                    <dt className="text-[11px] uppercase tracking-label text-muted-foreground mb-2">
                      Hours
                    </dt>
                    <dd className="text-foreground/85 text-fluid-base">
                      Tuesday — Friday, 10am — 5pm AEST
                    </dd>
                  </div>
                </dl>
              </Reveal>
            </div>

            <div className="lg:col-span-7">
              <InquireForm />
            </div>
          </div>
        </div>
      </main>
      <Footer />
      <JsonLd data={inquireGraph} id="ld-inquire" />
    </>
  );
}
