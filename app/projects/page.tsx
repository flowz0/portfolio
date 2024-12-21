import Project from "../components/Project";
import projectsData from "../data/projectsData";
import { noto_sans, poppins } from "../fonts";

export default function page() {
  return (
    <div className="mx-6 pt-20 pb-16 flex flex-col items-center">
      <div className="flex flex-col items-center">
        <h2 className={`${noto_sans.className} text-sm/none font-light text-orange-500`}>Projects</h2>
        <h3 className={`${poppins.className} mt-4 text-4xl/none font-semibold text-neutral-300 sm:text-5xl/none`}>
          My Work
        </h3>
      </div>
      <div className="mt-8 flex flex-wrap justify-center gap-8 sm:gap-6 max-w-7xl">
        {projectsData.map((project, index) => (
          <Project
            key={index}
            img={project.img}
            title={project.title}
            desc={project.desc}
            site={project.site}
            code={project.code}
            date={project.date}
          />
        ))}
      </div>
    </div>
  );
}
