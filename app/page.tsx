import type { Metadata } from "next";
import JsonLd from "./components/JsonLd";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import InquireBand from "./components/InquireBand";
import Navbar from "./components/Navbar";
import PressWall from "./components/PressWall";
import PullQuote from "./components/PullQuote";
import SelectedWork from "./components/SelectedWork";
import StudioStatement from "./components/StudioStatement";
import { buildGraph, faqLd, SITE_URL } from "./lib/seo";

export const metadata: Metadata = {
  title: {
    absolute:
      "Event by Jaleco — Boutique & Destination Wedding Planning, Sydney",
  },
  description:
    "A Sydney-based boutique studio designing quietly luxurious weddings worldwide — full-service planning and editorial design for couples who care about the difference candlelight makes.",
  alternates: { canonical: "/" },
  openGraph: {
    url: SITE_URL,
    title:
      "Event by Jaleco — Boutique & Destination Wedding Planning, Sydney",
    description:
      "A Sydney-based boutique studio designing quietly luxurious weddings worldwide.",
  },
};

const HOME_FAQ = [
  {
    question: "Where is Event by Jaleco based?",
    answer:
      "Event by Jaleco is a boutique wedding studio based in Surry Hills, Sydney, Australia. We work by appointment from our Florence Lane studio and design weddings for clients around the world.",
  },
  {
    question: "Do you plan destination weddings?",
    answer:
      "Yes. While we are based in Sydney, the majority of our work is destination — past celebrations include Italy (Florence, Lake Como, Ravello, Puglia), France (Provence), Greece (Santorini), the United States (Sonoma, Hudson Valley, Marfa), Japan (Kyoto), and Byron Bay and Sydney Harbour in Australia.",
  },
  {
    question: "How many weddings do you take on each year?",
    answer:
      "We design and produce twelve to fourteen weddings a year. Our calendar is intentionally small so every celebration receives the studio's full attention from concept to the morning after.",
  },
  {
    question: "What is your design philosophy?",
    answer:
      "We design with restraint. Every wedding is built from a blank page around the people the day belongs to — never from a template, never from a trend. Three principles guide every decision: joyful, editorial, seamless.",
  },
  {
    question: "How do I begin a conversation about my wedding?",
    answer:
      "Visit our inquire page and share a few details — your name, partner's name, wedding date or season, location, approximate guest count, and a short note about your story. We respond personally within two business days.",
  },
  {
    question: "Do you publish pricing?",
    answer:
      "We do not publish a price list. Every wedding is designed from a blank page, and pricing is shaped by the scale, location, and shape of the celebration. We share a clear scope and investment range after our first conversation.",
  },
];

const homeGraph = buildGraph([faqLd(HOME_FAQ)]);

export default function Home() {
  return (
    <>
      <Navbar overImage />
      <main id="main">
        <Hero />
        <StudioStatement />
        <SelectedWork />
        <PullQuote />
        <PressWall />
        <InquireBand />
      </main>
      <Footer />
      <JsonLd data={homeGraph} id="ld-home" />
    </>
  );
}
