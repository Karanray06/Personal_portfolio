import Preloader from "@/components/Preloader";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Work from "@/components/Work";
import About from "@/components/About";
import Contact from "@/components/Contact";
import CanvasBackground from "@/components/CanvasBackground";
import SmoothScroll from "@/components/SmoothScroll";

export default function Home() {
  return (
    <SmoothScroll>
      <Preloader />
      <Navbar />
      <CanvasBackground />
      <main className="relative z-10">
        <Hero />
        <Work />
        <About />
        <Contact />
      </main>
      <Footer />
    </SmoothScroll>
  );
}
