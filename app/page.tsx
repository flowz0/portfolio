import Contact from "./components/Contact";
import Hero from "./components/Hero";
import ParticlesEffect from "./components/ParticlesEffect";
import Projects from "./components/Projects";
import Skills from "./components/Skills";

export default function Home() {
  return (
    <>
      <ParticlesEffect />
      <div className="relative">
        <Hero />
        <Skills />
        <Projects />
        <Contact />
      </div>
    </>
  );
}
