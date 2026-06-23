import Navbar from "@/components/layout/navbar";
import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import Skills from "@/components/sections/Skills";
import Projects from "@/components/sections/Projects";
import LiveShowcase from "@/components/sections/LiveShowcase";
import Experience from "@/components/sections/Experience";
import Testimonials from "@/components/sections/Testimonials";

export default function HomePage() {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <LiveShowcase />
      <Experience />
      <Testimonials />
    </>
  );
}