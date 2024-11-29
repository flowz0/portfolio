import { FaCss3Alt, FaHtml5, FaServer  } from "react-icons/fa";
import { TbBrandJavascript, TbBrandTailwind, TbBrandReact, TbBrandNodejs, TbBrandMongodb } from "react-icons/tb";

export default function Skills() {
  return (
    <div className='flex flex-col items-center pt-14 pb-20 bg-neutral-900'>
        <h2 className="text-sm/none font-light text-orange-500">Skills</h2>
        <h3 className="text-4xl/none font-semibold mt-4">Tech Stack</h3>
        <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-x-2 gap-y-2 mt-8'>
            <div className="flex gap-x-4 items-center py-3 px-6 rounded-lg bg-neutral-800">
                <TbBrandMongodb />
                <p>MongoDB</p>
            </div>
            <div className="flex gap-x-4 items-center py-3 px-6 rounded-lg bg-neutral-800">
                <FaServer />
                <p>Express.js</p>
            </div>
            <div className="flex gap-x-4 items-center py-3 px-6 rounded-lg bg-neutral-800">
                <TbBrandNodejs />
                <p>Node.js</p>
            </div>
            <div className="flex gap-x-4 items-center py-3 px-6 rounded-lg bg-neutral-800">
                <TbBrandReact />
                <p>React</p>
            </div>
            <div className="flex gap-x-4 items-center py-3 px-6 rounded-lg bg-neutral-800">
                <TbBrandTailwind />
                <p>Tailwind</p>
            </div>
            <div className="flex gap-x-4 items-center py-3 px-6 rounded-lg bg-neutral-800">
                <TbBrandJavascript  />
                <p>JavaScript</p>
            </div>
            <div className="flex gap-x-4 items-center py-3 px-6 rounded-lg bg-neutral-800">
                <FaHtml5 />
                <p>HTML</p>
            </div>
            <div className="flex gap-x-4 items-center py-3 px-6 rounded-lg bg-neutral-800">
                <FaCss3Alt />
                <p>CSS</p>
            </div>
        </div>
    </div>
  );
}
