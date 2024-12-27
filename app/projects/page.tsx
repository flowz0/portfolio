import Project from "../components/Project";
import projectsData from "../data/projectsData";
import { arimo, nunito } from "../fonts";

export default function page() {
  return (
    <article className="px-6 mt-12 py-12 flex flex-col items-center">
      <header className="flex flex-col items-center">
        <h2
          className={`${nunito.className} text-base leading-normal tracking-normal text-teal-400 sm:text-lg`}
        >
          <small>Projects</small>
        </h2>
        <h3
          className={`${arimo.className} mt-2 leading-normal tracking-normal text-4xl font-bold sm:text-5xl`}
        >
          My Work
        </h3>
      </header>
      <section className="mt-8 flex flex-wrap justify-center gap-6 max-w-7xl">
        {projectsData.map((project) => (
          <Project key={project.id} {...project} />
        ))}
      </section>
    </article>
  );
}
