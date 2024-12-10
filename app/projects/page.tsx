import Project from "../components/Project";
import projectsData from "../data/projectsData";

export default function page() {
  return (
    <div className="m-4 flex flex-col gap-y-4">
      <div className="mt-16 py-8 rounded-lg flex flex-col items-center bg-neutral-900">
        <h2 className="text-sm/none text-orange-500">Projects</h2>
        <h3 className="mt-4 text-4xl/none text-neutral-300 font-semibold sm:text-5xl/none">My Work</h3>
      </div>
      <div className='px-4 py-6 rounded-lg flex flex-col items-center bg-neutral-900 sm:py-10'>
        <div className="flex flex-wrap justify-center gap-8 sm:gap-4 sm:max-w-7xl">
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

    </div>
  )
}
