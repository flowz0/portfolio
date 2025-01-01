import { FaCss3Alt, FaHtml5, FaServer } from "react-icons/fa";
import {
  TbBrandJavascript,
  TbBrandTailwind,
  TbBrandReact,
  TbBrandNodejs,
  TbBrandMongodb,
} from "react-icons/tb";
import Skill from "./Skill";
import { arimo, nunito } from "../fonts";

export default function Skills() {
  return (
    <section
      id="skills"
      className="py-12 rounded-lg flex flex-col items-center bg-neutral-950 sm:py-24"
    >
      <h2
        className={`${nunito.className} text-base leading-normal tracking-normal text-teal-400 sm:text-lg`}
      >
        <small>Skills</small>
      </h2>
      <h3
        className={`${arimo.className} mt-2 leading-normal tracking-normal text-4xl font-bold sm:text-5xl`}
      >
        Tech Stack
      </h3>
      <div className="mt-8 grid grid-cols-2 gap-3 sm:gap-3.5 sm:grid-cols-4">
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
