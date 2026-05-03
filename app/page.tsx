import Footer from "./components/Footer";
import Hero from "./components/Hero";
import InquireBand from "./components/InquireBand";
import Navbar from "./components/Navbar";
import PressWall from "./components/PressWall";
import PullQuote from "./components/PullQuote";
import SelectedWork from "./components/SelectedWork";
import StudioStatement from "./components/StudioStatement";

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
    </>
  );
}
