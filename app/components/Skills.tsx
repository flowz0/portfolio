import { FaCss3Alt, FaHtml5, FaServer  } from "react-icons/fa";
import { TbBrandJavascript, TbBrandTailwind, TbBrandReact, TbBrandNodejs, TbBrandMongodb } from "react-icons/tb";
import Skill from "./Skill";

export default function Skills() {
  return (
    <section id="skills" className='pt-16 pb-24 sm:py-20 flex flex-col items-center bg-neutral-900'>
        <h2 className="text-sm/none font-light text-orange-500">Skills</h2>
        <h3 className="mt-4 text-4xl/none font-semibold">Tech Stack</h3>
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
