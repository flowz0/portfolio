import Link from "next/link";
import Project from "./Project";

import ProjectDDDC from "@/assets/project-dddc.png";

export default function Projects() {
    return (
        <div id="projects" className='py-16 flex flex-col items-center bg-neutral-900'>
            <h2 className="text-sm/none font-light text-orange-500">Projects</h2>
            <h3 className="text-4xl/none font-semibold mt-3.5">My Work</h3>
            <div className="mt-8 mx-4 flex flex-wrap justify-center gap-4">

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
