import Project from "../components/Project";

export default function page() {
  return (
    <div className="m-4 flex flex-col gap-y-4">
      <div className="mt-16 py-8 rounded-lg flex flex-col items-center bg-neutral-900">
        <h2 className="text-base/none font-light text-orange-500 sm:text-sm/none">Projects</h2>
        <h3 className="mt-4 text-4xl/none text-neutral-300 font-semibold sm:text-5xl/none">My Work</h3>
      </div>
      <div className='px-4 py-6 rounded-lg flex flex-col items-center bg-neutral-900 sm:py-10'>
        <div className="flex flex-wrap justify-center gap-6 sm:gap-4 sm:max-w-7xl">
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
      </div>

    </div>
  )
}
