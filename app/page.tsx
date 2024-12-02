import Contact from "./components/Contact";
import Divider from "./components/Divider";
import Hero from "./components/Hero";
import Projects from "./components/Projects";
import Skills from "./components/Skills";

export default function Home() {
  return (
    <>
      <Hero />
      <Divider isFlipped={true} />
      <Skills />
      <Projects />
      <Contact />
    </>
  );
}
