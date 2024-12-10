import { StaticImageData } from "next/image";
import TestImage from "@/assets/test.png";
import ProjectImgDDDC from "@/assets/project-dddc.png";

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
    desc: "HVAC cleaning service website built with Next.js, TypeScript, SendGrid, and TailwindCSS...",
    site: "https://www.ductdaddykc.com/",
    code: "https://github.com/flowz0/dddc",
    date: "2024-12-09"
  },
  {
    id: 2,
    img: TestImage,
    title: "Another Really Cool Project",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate explicabo nostrum elit... Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate explicabo nostrum elit...",
    site: "https://www.ductdaddykc.com/",
    code: "https://github.com/flowz0/dddc",
    date: "2024-12-22"
  },
];

export default projectsData;