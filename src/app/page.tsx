"use client";
import { useState } from "react";
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
  const [activeSection, setActiveSection] = useState("home");

  return (
    <SmoothScroll>
      <Preloader />
      <Navbar activeSection={activeSection} setActiveSection={setActiveSection} />
      <CanvasBackground />
      <main className="relative z-10 min-h-screen">
        {activeSection === "home" && <Hero />}
        {activeSection === "work" && <Work />}
        {activeSection === "about" && <About />}
        {activeSection === "contact" && <Contact />}
      </main>
      <Footer />
    </SmoothScroll>
  );
}
