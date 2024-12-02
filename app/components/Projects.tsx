import Link from "next/link";
import Project from "./Project";

export default function Projects() {
    return (
        <div id="projects" className='flex flex-col items-center pt-14 pb-20 sm:py-28 bg-neutral-900'>
            <h2 className="text-sm/none font-light text-orange-500">Projects</h2>
            <h3 className="text-4xl/none font-semibold mt-3.5">My Work</h3>
            <div className="mt-8 mx-4 flex flex-wrap justify-center gap-4">

                <Project
                    // img={}
                    title="Project Title"
                    desc="Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate explicabo nostrum error consectetur..."
                    site="https://bflows.dev"
                    code="https://github.com/bflows/portfolio"
                />
                <Project
                    // img={}
                    title="Project Title"
                    desc="Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate explicabo nostrum error consectetur..."
                    site="https://bflows.dev"
                    code="https://github.com/bflows/portfolio"
                />
                <Project
                    // img={}
                    title="Project Title"
                    desc="Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate explicabo nostrum error consectetur..."
                    site="https://bflows.dev"
                    code="https://github.com/bflows/portfolio"
                />
                

            </div>
            <Link href="/projects" className="mt-8 text-neutral-400 hover:text-orange-500">View All Projects</Link>
        </div>
    );
}
