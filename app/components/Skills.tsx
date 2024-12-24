import { FaCss3Alt, FaHtml5, FaServer } from "react-icons/fa";
import {
  TbBrandJavascript,
  TbBrandTailwind,
  TbBrandReact,
  TbBrandNodejs,
  TbBrandMongodb,
} from "react-icons/tb";
import Skill from "./Skill";
import { noto_sans, poppins } from "../fonts";

export default function Skills() {
  return (
    <section
      id="skills"
      className="py-12 rounded-lg flex flex-col items-center sm:py-16"
    >
      <h2 className={`${noto_sans.className} text-sm font-light bg-gradient-to-r from-cyan-500 to-teal-400 inline-block text-transparent bg-clip-text`}>Skills</h2>
      <h3 className={`${poppins.className} mt-4 text-4xl font-semibold bg-gradient-to-r from-neutral-300 to-neutral-400 inline-block text-transparent bg-clip-text sm:text-5xl`}>
        Tech Stack
      </h3>
      <div className="mt-8 grid grid-cols-2 gap-3 sm:gap-2.5 sm:grid-cols-4">
        <Skill icon={TbBrandMongodb} name={"MongoDB"} />
        <Skill icon={FaServer} name={"Express.js"} />
        <Skill icon={TbBrandNodejs} name={"Node.js"} />
        <Skill icon={TbBrandReact} name={"React"} />
        <Skill icon={TbBrandTailwind} name={"Tailwind"} />
        <Skill icon={TbBrandJavascript} name={"JavaScript"} />
        <Skill icon={FaHtml5} name={"HTML"} />
        <Skill icon={FaCss3Alt} name={"CSS"} />
      </div>
    </section>
  );
}
