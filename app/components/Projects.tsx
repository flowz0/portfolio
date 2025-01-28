import Link from "next/link";
import Project from "./Project";

import projectsData from "../data/projectsData";
import { arimo } from "../fonts";

export default function Projects() {
  // Sort projects by date (most recent first)
  const sortedProjects = projectsData.sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
  );

  // For landing page, get only the three most recent projects
  const recentProjects = sortedProjects.slice(0, 3);

  return (
    <section
      id="projects"
      className="px-6 py-12 rounded-lg flex flex-col items-center bg-neutral-950 sm:py-16"
    >
      <header className="flex flex-col items-center">
        <h3
          className={`${arimo.className} mt-2 tracking-normal text-4xl/normal font-bold text-center sm:text-left sm:text-5xl/normal`}
        >
          Projects in the <span className="text-teal-500">Spotlight</span>
        </h3>
      </header>
      <div className="mt-8 flex flex-wrap justify-center gap-6 sm:mx-4">
        {recentProjects.map((project) => (
          <Project key={project.id} {...project} />
        ))}
      </div>
      <Link
        href="/projects"
        className={`${arimo.className} mt-6 text-lg text-neutral-500 transition ease-in-out delay-75 duration-300 hover:text-teal-400 hover:scale-105 active:scale-95`}
      >
        Show All Projects
      </Link>
    </section>
  );
}
