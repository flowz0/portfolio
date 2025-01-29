import Project from "../components/Project";
import projectsData from "../data/projectsData";
import { arimo } from "../fonts";

export default function page() {
  return (
    <article className="px-6 mt-12 py-12 flex flex-col items-center">
      <header className="flex flex-col items-center">
        <h3
          className={`${arimo.className} mt-2 tracking-normal text-4xl/normal font-bold sm:text-5xl/normal`}
        >
          All My{" "}
          <span className="text-teal-500">
            Projects
          </span>
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
