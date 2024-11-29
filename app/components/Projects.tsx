import Project from "./Project";

export default function Projects() {
    return (
        <div className='flex flex-col items-center pt-14 pb-20'>
            <h2 className="text-sm/none font-light text-orange-500">Projects</h2>
            <h3 className="text-4xl/none font-semibold mt-3.5">My Work</h3>
            <div className="flex flex-wrap justify-center gap-4 mt-8 mx-4">

                <Project />
                <Project />
                <Project />
                <Project />
                <Project />

            </div>
        </div>
    );
}
