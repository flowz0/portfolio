import Image, { StaticImageData } from "next/image";
import Link from "next/link";
import { FaExternalLinkAlt, FaGithub, FaCalendarAlt } from "react-icons/fa";
import { noto_sans, poppins } from "../fonts";
import { ProjectData } from "../data/projectsData";
import TestImage from "@/public/img/test.png";

type ProjectProps = ProjectData & {
  img?: string | StaticImageData;
}

export default function Project({
  id,
  img = TestImage,
  title,
  desc,
  date,
  site,
  code,
}: ProjectProps & { id: number }) {
  // Function to form date
  const formatDate = (dateString: string) => {
    const options: Intl.DateTimeFormatOptions = {
      year: "numeric",
      month: "long",
      day: "numeric",
    };
    return new Date(dateString).toLocaleDateString(undefined, options);
  };

  // const projectId = title.toLowerCase().replace(/\s+/g, '-');

  return (
    <div className="h-full w-full max-w-sm sm:bg-neutral-900 sm:rounded">
      <Image
        src={img}
        alt={`${title} project image`}
        className="object-cover h-64 rounded sm:rounded-t sm:rounded-b-none"
        priority={true}
      />
      <div className="pt-2 pb-3 px-2 flex flex-col justify-between h-full sm:pt-2.5 sm:pb-4 sm:px-5 bg-neutral-950 sm:bg-transparent">
        <div>
          <h4 className={`${poppins.className} text-2xl/9 font-semibold text-neutral-300 hover:text-orange-500`}>
            <Link href={`/projects/${id}`}>{title}</Link>
          </h4>
          <p className={`${noto_sans.className} mt-1 text-base/6 line-clamp-3 text-neutral-300 sm:mt-0.5`}>
            {desc}
          </p>
          <p className={`${noto_sans.className} mt-3 flex items-center text-sm/none text-neutral-400`}>
            <FaCalendarAlt className="mr-2" />
            {formatDate(date)}
          </p>
        </div>
        <div className="mt-5 flex justify-between items-baseline">
          <Link href={`/projects/${id}`}>
            <button
              type="button"
              className={`${noto_sans.className} flex py-2 px-3.5 rounded-lg bg-neutral-700 text-neutral-400 hover:bg-neutral-800 active:scale-95`}
            >
              View project
            </button>
          </Link>
          <div className="flex gap-x-3">
            {site && (
              <Link
                href={site}
                target="_blank"
                className="text-xl/none text-neutral-500 hover:text-orange-500"
              >
                <FaExternalLinkAlt />
              </Link>
            )}
            {code && (
              <Link
                href={code}
                target="_blank"
                className="text-xl/none text-neutral-500 hover:text-orange-500"
              >
                <FaGithub />
              </Link>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
