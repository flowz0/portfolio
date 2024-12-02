import Project from "../components/Project";
import Footer from "../components/Footer";
import Divider from "../components/Divider";

export default function page() {
  return (
    <div className="pt-14 flex flex-col items-center justify-center bg-neutral-950">
      <div className="mx-4 my-4 flex flex-col items-center justify-center w-full">
        <h2 className="text-sm/none font-light mt-6 text-orange-500">Projects</h2>
        <h3 className="text-4xl/none font-semibold mt-3.5 sm:text-5xl">My Work</h3>
      </div>
      <Divider isFlipped className="w-full" />
      <div className='flex flex-col items-center justify-center w-full bg-neutral-900'>
        <div className="mx-4 pt-8 mb-4 flex flex-wrap justify-center gap-4 max-w-7xl">
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
    </div>
  )
}
