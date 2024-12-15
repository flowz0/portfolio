import Link from "next/link";
import Project from "./Project";

import projectsData from "../data/projectsData";

export default function Projects() {
    // Sort projects by date (most recent first)
    const sortedProjects = projectsData.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());

    // For landing page, get only the three most recent projects
    const recentProjects = sortedProjects.slice(0, 3);

    return (
        <div id="projects" className='px-4 py-16 rounded-lg flex flex-col items-center bg-neutral-900'>
            <h2 className="text-base/none font-light text-orange-500 sm:text-sm/none">Projects</h2>
            <h3 className="mt-4 text-4xl/none font-semibold text-neutral-300 sm:text-5xl/none">My Work</h3>
            <div className="mt-8 flex flex-wrap justify-center gap-y-8 gap-x-4 sm:mx-4 sm:gap-y-4">
        
                {recentProjects.map((project, index) => (
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
            <Link href="/projects" className="mt-8 text-neutral-400 hover:text-orange-500">View All Projects</Link>
        </div>
    );
}
