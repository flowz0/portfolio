import Project from "../components/Project";
import Footer from "../components/Footer";
import Divider from "../components/Divider";

export default function page() {
  return (
    <>
      <div className="pt-16 pb-6 flex flex-col items-center bg-neutral-950">
        <h2 className="text-base/none font-light text-orange-500 sm:text-sm/none">Projects</h2>
        <h3 className="mt-4 text-4xl/none text-neutral-200 font-semibold sm:text-5xl/none">My Work</h3>
      </div>
      <Divider className="w-full" flipped />
      <div className='px-6 py-16 flex flex-col items-center bg-neutral-900'>
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
      <Divider className="w-full" />
      <Footer />

    </>
  )
}
