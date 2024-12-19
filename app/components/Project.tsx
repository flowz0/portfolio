import Image, { StaticImageData } from "next/image";
import { FaExternalLinkAlt, FaGithub, FaCalendarAlt } from "react-icons/fa";
import TestImage from "@/assets/test.png";
import Link from "next/link";
import { noto_sans, poppins } from "../fonts";

interface ProjectProps {
  img?: string | StaticImageData;
  title: string;
  desc: string;
  date: string;
  site?: string;
  code?: string;
}

export default function Project({
  img = TestImage,
  title,
  desc,
  date,
  site,
  code,
}: ProjectProps) {
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
    <div className="h-full w-full max-w-sm sm:bg-neutral-900 sm:rounded-lg">
      <Image
        src={img}
        alt={`${title} project image`}
        quality={100}
        priority={false}
        className="object-cover h-64 w-full rounded-lg sm:h-72 sm:rounded-t-lg sm:rounded-b-none"
      />
      <div className="py-3 flex flex-col justify-between h-full sm:py-3.5 sm:px-5">
        <div>
          <h4 className={`${poppins.className} text-2xl/9 font-semibold text-neutral-300`}>
            <Link href={"/projects"}>{title}</Link>
          </h4>
          <p className={`${noto_sans.className} mt-2 text-base/7 line-clamp-3 text-neutral-300`}>
            {desc}
          </p>
          <p className={`${noto_sans.className} mt-3 flex items-center text-sm/none text-neutral-400`}>
            <FaCalendarAlt className="mr-2" />
            {formatDate(date)}
          </p>
        </div>
        <div className="mt-5 flex justify-between items-baseline">
          <Link href="/projects">
            <button
              type="button"
              className={`${noto_sans.className} flex py-2 px-3.5 rounded-lg bg-neutral-700 text-neutral-400 hover:bg-neutral-800 active:scale-95`}
            >
              Show details
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
