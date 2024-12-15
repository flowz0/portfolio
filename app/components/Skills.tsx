import { FaCss3Alt, FaHtml5, FaServer  } from "react-icons/fa";
import { TbBrandJavascript, TbBrandTailwind, TbBrandReact, TbBrandNodejs, TbBrandMongodb } from "react-icons/tb";
import Skill from "./Skill";

export default function Skills() {
  return (
    <section id="skills" className='py-16 rounded-lg flex flex-col items-center bg-neutral-900'>
        <h2 className="text-base/none font-light text-orange-500 sm:text-sm/none">Skills</h2>
        <h3 className="mt-4 text-4xl/none text-neutral-300 font-semibold sm:text-5xl/none">Tech Stack</h3>
        <div className='mt-8 grid grid-cols-2 gap-x-2 gap-y-2 sm:grid-cols-4'>
            <Skill
                icon={TbBrandMongodb}
                name={'MongoDB'}
            />
            <Skill
                icon={FaServer}
                name={'Express.js'}
            />
            <Skill
                icon={TbBrandNodejs}
                name={'Node.js'}
            />
            <Skill
                icon={TbBrandReact}
                name={'React'}
            />
            <Skill
                icon={TbBrandTailwind}
                name={'Tailwind'}
            />
            <Skill
                icon={TbBrandJavascript}
                name={'JavaScript'}
            />
            <Skill
                icon={FaHtml5}
                name={'HTML'}
            />
            <Skill
                icon={FaCss3Alt}
                name={'CSS'}
            />
        </div>
    </section>
  );
}
