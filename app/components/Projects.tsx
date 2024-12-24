import Link from "next/link";
import Project from "./Project";

import projectsData from "../data/projectsData";
import { noto_sans, poppins } from "../fonts";

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
      className="px-6 py-12 rounded-lg flex flex-col items-center sm:py-16"
    >
      <h2 className={`${noto_sans.className} text-sm font-light bg-gradient-to-r from-cyan-500 to-teal-400 inline-block text-transparent bg-clip-text`}>
        Projects
      </h2>
      <h3 className={`${poppins.className} mt-4 text-4xl font-semibold bg-gradient-to-r from-neutral-300 to-neutral-400 inline-block text-transparent bg-clip-text sm:text-5xl`}>
        My Work
      </h3>
      <div className="mt-8 flex flex-wrap justify-center gap-y-8 gap-x-4 sm:mx-4 sm:gap-y-4">
        {recentProjects.map((project) => (
          <Project key={project.id} {...project} />
        ))}
      </div>
      <Link
        href="/projects"
        className="mt-6 transition ease-in-out delay-75 duration-300 text-neutral-500 hover:text-teal-500 hover:scale-105 hover:-translate-y-1 active:scale-95"
      >
        Show All Projects
      </Link>
    </section>
  );
}
