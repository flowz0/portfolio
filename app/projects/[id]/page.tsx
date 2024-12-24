import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { FaExternalLinkAlt, FaGithub, FaCalendarAlt } from "react-icons/fa";
import projectsData from "../../data/projectsData";
import { noto_sans, poppins } from "../../fonts";

export async function generateStaticParams() {
  return projectsData.map((project) => ({
    id: project.id.toString(),
  }));
}

export default async function ProjectDetails({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const {id} = await params;
  const projectId = parseInt(id);
  const project = projectsData.find((p) => p.id === projectId);

  if (!project) {
    notFound();
  }

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString(undefined, {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  };

  return (
    <main className="mx-6 mt-20 max-w-2xl sm:mx-auto">
      <h2
        className={`${noto_sans.className} text-center text-sm/none font-light text-orange-500`}
      >
        Details
      </h2>
      <h3
        className={`${poppins.className} text-center mt-4 text-4xl/none font-semibold text-neutral-300 sm:text-5xl/none`}
      >
        Project 0{project.id}
      </h3>
      <div className="mt-8 flex justify-between items-baseline sm:mt-12">
        <p
          className={`${noto_sans.className} flex items-center text-neutral-500`}
        >
          <FaCalendarAlt className="mr-2" />
          {formatDate(project.date)}
        </p>
        <div className="flex gap-2.5 text-xl">
          {project.site && (
            <Link
              href={project.site}
              target="_blank"
              className="text-neutral-500 hover:scale-110 hover:text-orange-500"
            >
              <FaExternalLinkAlt />
            </Link>
          )}
          {project.code && (
            <Link
              href={project.code}
              target="_blank"
              className="text-neutral-500 hover:scale-110 hover:text-orange-500"
            >
              <FaGithub />
            </Link>
          )}
        </div>
      </div>
      <Image
        src={project.img}
        alt={`${project.title} project image`}
        className="mt-2 h-full w-auto rounded"
      />
      <h2
        className={`${poppins.className} mt-4 text-3xl font-semibold text-neutral-300 sm:text-5xl`}
      >
        {project.title}
      </h2>
      <p className={`${noto_sans.className} mt-4 text-lg text-neutral-300`}>
        {project.desc}
      </p>
      {/* 
        Project Article
      */}
      <ul className="mt-12 flex flex-col gap-y-12">
        {/* 
          SECTION 1
          SECTION 1
          SECTION 1
        */}
        {project.lessons && (
          <li>
            <h3
              className={`${poppins.className} text-3xl font-semibold text-neutral-300 sm:text-4xl`}
            >
              What I learned
            </h3>
            <p
              className={`${noto_sans.className} mt-4 text-lg text-neutral-300`}
            >
              {project.lessons}
            </p>
          </li>
        )}
        {/* 
          SECTION 2
          SECTION 2
          SECTION 2
        */}
        {project.challenges && (
          <li>
            <h3
              className={`${poppins.className} text-3xl font-semibold text-neutral-300 sm:text-4xl`}
            >
              Challenges I faced
            </h3>
            <p
              className={`${noto_sans.className} mt-4 text-lg text-neutral-300`}
            >
              {project.challenges}
            </p>
          </li>
        )}
      </ul>
    </main>
  );
}
