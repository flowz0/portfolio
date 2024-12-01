import Contact from "./components/Contact";
import Divider from "./components/Divider";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Projects from "./components/Projects";
import Skills from "./components/Skills";

export default function Home() {
  return (
    <div>
      <Hero />
      <Divider isFlipped={true} />
      <Skills />
      {/* <Divider isFlipped={false} /> */}
      <Projects />
      <Divider isFlipped={false} />
      <Contact />
    </div>
  );
}
