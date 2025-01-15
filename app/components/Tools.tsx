"use client";

import { FaCss3Alt, FaHtml5, FaServer } from "react-icons/fa";
import {
  TbBrandJavascript,
  TbBrandTailwind,
  TbBrandReact,
  TbBrandNodejs,
  TbBrandMongodb,
} from "react-icons/tb";
import Tool from "./Tool";
import { arimo } from "../fonts";

export default function Tools() {
  const logos = [
    { logo: TbBrandMongodb, name: "MongoDB" },
    { logo: FaServer, name: "Express.js" },
    { logo: TbBrandNodejs, name: "Node.js" },
    { logo: TbBrandReact, name: "React" },
    { logo: TbBrandTailwind, name: "Tailwind" },
    { logo: TbBrandJavascript, name: "JavaScript" },
    { logo: FaHtml5, name: "HTML" },
    { logo: FaCss3Alt, name: "CSS" },
  ];

  return (
    <section id="skills" className="py-12 bg-neutral-950 overflow-hidden">
      <div className="max-w-4xl mx-auto px-4">
        <header className="flex flex-col items-center">
          <h3
            className={`${arimo.className} mt-2 tracking-normal text-4xl/normal font-bold text-center sm:text-left sm:text-5xl/normal`}
          >
            <span className="bg-gradient-to-r from-teal-400 to-cyan-600 inline-block text-transparent bg-clip-text">
              Tools
            </span>{" "}
            and technologies
          </h3>
        </header>

        <div className="mt-8 group relative overflow-hidden whitespace-nowrap [mask-image:_linear-gradient(to_right,_transparent_0,_white_128px,white_calc(100%-128px),_transparent_100%)]">
          <div className="animate-slide-left-fast sm:animate-slide-left group-hover:animation-pause inline-block w-max">
            {logos.map((logo, index) => (
              <div key={index} className="mx-6 inline-block">
                <Tool icon={logo.logo} name={logo.name} />
              </div>
            ))}
          </div>

          <div className="group animate-slide-left-fast sm:animate-slide-left group-hover:animation-pause inline-block w-max">
            {logos.map((logo, index) => (
              <div key={`duplicate-${index}`} className="mx-6 inline-block">
                <Tool icon={logo.logo} name={logo.name} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
