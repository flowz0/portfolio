import Contact from "./components/Contact";
import Hero from "./components/Hero";
import Projects from "./components/Projects";
import Skills from "./components/Skills";

export default function Home() {
  return (
    <div className="p-4 flex flex-col gap-y-4">
      <Hero />
      <Skills />
      <Projects />
      <Contact />
    </div>
  );
}
