import Navbar from "@/components/layout/navbar";
import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import Skills from "@/components/sections/Skills";

export default function HomePage() {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Skills />
    </>
  );
}