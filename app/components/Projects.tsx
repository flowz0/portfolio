import Link from "next/link";
import Project from "./Project";

import ProjectDDDC from "@/assets/project-dddc.png";

export default function Projects() {
    return (
        <div id="projects" className='px-6 py-16 flex flex-col items-center bg-neutral-900'>
            <h2 className="text-base/none font-light text-orange-500 sm:text-sm/none">Projects</h2>
            <h3 className="mt-4 text-4xl/none font-semibold text-neutral-200 sm:text-5xl/none">My Work</h3>
            <div className="mt-6 flex flex-wrap justify-center gap-y-6 gap-x-4 sm:mx-4">

                <Project
                    img={ProjectDDDC}
                    title="Duct Daddy Duct Cleaning"
                    desc="HVAC cleaning service website built with Next.js, TypeScript, SendGrid, and TailwindCSS..."
                    site="https://www.ductdaddykc.com/"
                    code="https://github.com/flowz0/dddc"
                />
                <Project
                    // img={ProjectDDDC2}
                    title="Project Title"
                    desc="Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate explicabo nostrum..."
                    site="https://bflows.dev"
                    code="https://github.com/bflows/portfolio"
                />
                <Project
                    // img={}
                    title="Project Title"
                    desc="Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate explicabo nostrum..."
                    site="https://bflows.dev"
                    code="https://github.com/bflows/portfolio"
                />
                

            </div>
            <Link href="/projects" className="mt-8 text-neutral-400 hover:text-orange-500">View All Projects</Link>
        </div>
    );
}
