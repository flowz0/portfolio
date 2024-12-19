import { StaticImageData } from "next/image";
import TestImage from "@/assets/test.png";
import ProjectImgDDDC from "@/assets/project-dddc.png";
import NodeJSBlog from "@/assets/nodejs-blog.png";

export interface ProjectData {
  id: number;
  img: string | StaticImageData;
  title: string;
  desc: string;
  site?: string;
  code?: string;
  date: string;
}

const projectsData: ProjectData[] = [
  {
    id: 1,
    img: ProjectImgDDDC,
    title: "Duct Daddy Duct Cleaning",
    desc: "I built an HVAC cleaning service marketing website with Next.js and Tailwind CSS. I learned how to integrate SendGrid for email automation and how to use TypeScript with Next.js.",
    site: "https://www.ductdaddykc.com/",
    code: "https://github.com/flowz0/dddc",
    date: "2024-12-09"
  },
  {
    id: 2,
    img: NodeJSBlog,
    title: "Node.js Blog Website",
    desc: "A simple blog site to view all blogs and an admin page to create posts. Built with Node.js, Express.js, EJS, and Mongoose.",
    code: "https://github.com/flowz0/nodejs-blog",
    date: "2024-11-15"
  },
  {
    id: 3,
    img: TestImage,
    title: "Another Really Cool Project",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia ex sint ipsa repellendus expedita corrupti rerum laborum, quos vitae perspiciatis delectus impedit qui, quidem esse libero iure! Inventore, quam est!",
    date: "2023-12-22"
  },
  {
    id: 4,
    img: TestImage,
    title: "Another Really Cool Project",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia ex sint ipsa repellendus expedita corrupti rerum laborum, quos vitae perspiciatis delectus impedit qui, quidem esse libero iure! Inventore, quam est!",
    date: "2023-12-22"
  },
  {
    id: 5,
    img: TestImage,
    title: "Another Really Cool Project",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia ex sint ipsa repellendus expedita corrupti rerum laborum, quos vitae perspiciatis delectus impedit qui, quidem esse libero iure! Inventore, quam est!",
    date: "2023-12-22"
  },
];

export default projectsData;