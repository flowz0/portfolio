import Project from "../components/Project";
import GoHome from "../components/GoHome";
import Footer from "../components/Footer";

export default function page() {
  return (
    <div className="flex flex-col items-center justify-center">
      <div id="projects" className='mx-4 max-w-7xl flex flex-col items-center justify-center pt-14 pb-20 sm:py-28'>
        <GoHome />
        <h2 className="text-sm/none font-light mt-6 text-orange-500">Projects</h2>
        <h3 className="text-4xl/none font-semibold mt-3.5">My Work</h3>
        <div className="flex flex-wrap justify-center gap-4 mt-8">

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
          <Project
            // img={}
            title="Project Title"
            desc="Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate explicabo nostrum error consectetur..."
            site="https://bflows.dev"
            code="https://github.com/bflows/portfolio"
          />


        </div>
      <Footer />
      </div>
    </div>
  )
}
