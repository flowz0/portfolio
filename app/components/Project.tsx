import Image, { StaticImageData } from "next/image";
import Link from "next/link";
import { FaExternalLinkAlt, FaGithub, FaCalendarAlt } from "react-icons/fa";
import { ProjectData } from "../data/projectsData";
import TestImage from "@/public/img/test.png";
import Button from "./Button";
import { arimo, nunito } from "@/app/fonts";

type ProjectProps = ProjectData & {
  img?: string | StaticImageData;
};

export default function Project({
  id,
  img = TestImage,
  title,
  desc,
  date,
  site,
  code,
}: ProjectProps & { id: number }) {
  const iconClass =
    "text-2xl text-neutral-500 transition ease-in-out delay-75 duration-300 hover:text-teal-500 hover:scale-105 active:scale-95";

  // Function to form date
  const formatDate = (dateString: string) => {
    const options: Intl.DateTimeFormatOptions = {
      year: "numeric",
      month: "long",
      day: "numeric",
    };
    return new Date(dateString).toLocaleDateString(undefined, options);
  };

  return (
    <article className="max-w-sm sm:bg-neutral-900 sm:rounded-lg">
      <Image
        src={img}
        alt={`${title} project image`}
        className="object-cover h-48 sm:h-60 w-full rounded sm:rounded-t-lg sm:rounded-b-none"
        priority={true}
      />
      <header className="py-2 flex flex-col bg-neutral-950 sm:pt-4 sm:pb-6 sm:px-5 sm:bg-transparent">
        <section>
          <Link href={`/projects/${id}`} className="w-full" passHref>
            <h4
              className={`${arimo.className} text-2xl font-semibold leading-normal tracking-normal text-neutral-300 hover:underline sm:text-3xl`}
            >
              {title}
            </h4>
          </Link>
          <p
            className={`${nunito.className} mt-2 text-base leading-normal tracking-normal line-clamp-3 text-neutral-400`}
          >
            {desc}
          </p>
          <p
            className={`${arimo.className} mt-2 text-base leading-normal tracking-normal text-neutral-400`}
          >
            <small className="flex items-center">
              <FaCalendarAlt className="mr-2" />
              {formatDate(date)}
            </small>
          </p>
        </section>
        <section className="mt-5 flex justify-between items-center">
          <Link href={`/projects/${id}`} passHref>
            <Button text="View Project" variant="outlined" />
          </Link>
          <div className="flex gap-x-3">
            {site && (
              <Link href={site} target="_blank" className={iconClass}>
                <FaExternalLinkAlt />
              </Link>
            )}
            {code && (
              <Link href={code} target="_blank" className={iconClass}>
                <FaGithub />
              </Link>
            )}
          </div>
        </section>
      </header>
    </article>
  );
}
