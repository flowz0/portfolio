import Project from "../components/Project";
import projectsData from "../data/projectsData";
import { noto_sans, poppins } from "../fonts";

export default function page() {
  return (
    <div className="mx-6 pt-20 pb-16 flex flex-col items-center">
      <div className="flex flex-col items-center">
        <h2 className={`${noto_sans.className} text-sm font-light bg-gradient-to-r from-cyan-500 to-teal-400 inline-block text-transparent bg-clip-text`}>Projects</h2>
        <h3 className={`${poppins.className} mt-4 text-4xl font-semibold bg-gradient-to-r from-neutral-300 to-neutral-400 inline-block text-transparent bg-clip-text sm:text-5xl`}>
          My Work
        </h3>
      </div>
      <div className="mt-8 flex flex-wrap justify-center gap-8 sm:gap-6 max-w-7xl">
        {projectsData.map((project) => (
          <Project key={project.id} {...project} />
        ))}
      </div>
    </div>
  );
}
