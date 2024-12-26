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
  const { id } = await params;
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
      <div className="flex flex-col items-center">
        <h2
          className={`${noto_sans.className} text-sm/5 font-light bg-gradient-to-r from-cyan-500 to-teal-400 inline-block text-transparent bg-clip-text`}
        >
          Details
        </h2>
        <h3
          className={`${poppins.className} mt-4 text-4xl/normal font-semibold bg-gradient-to-r from-neutral-300 to-neutral-400 inline-block text-transparent bg-clip-text sm:text-5xl/normal`}
        >
          Project {" "}
          <span className="bg-gradient-to-r from-cyan-500 to-teal-400 inline-block text-transparent bg-clip-text">
            00{project.id}
          </span>
        </h3>
      </div>
      <div className="mt-8 flex justify-between items-center sm:mt-12">
        <p
          className={`${noto_sans.className} flex items-center text-neutral-400`}
        >
          <FaCalendarAlt className="mr-2" />
          {formatDate(project.date)}
        </p>
        <div className="flex gap-2 text-xl">
          {project.site && (
            <Link
              href={project.site}
              target="_blank"
              className="transition ease-in-out delay-75 duration-300 text-neutral-500 hover:text-teal-500 hover:scale-105 hover:-translate-y-1 active:scale-95"
            >
              <FaExternalLinkAlt />
            </Link>
          )}
          {project.code && (
            <Link
              href={project.code}
              target="_blank"
              className="transition ease-in-out delay-75 duration-300 text-neutral-500 hover:text-teal-500 hover:scale-105 hover:-translate-y-1 active:scale-95"
            >
              <FaGithub />
            </Link>
          )}
        </div>
      </div>
      <Image
        src={project.img}
        alt={`${project.title} project image`}
        className="mt-4 h-auto w-full rounded"
      />

      <h2
        className={`${poppins.className} mt-6 text-3xl/10 font-semibold bg-gradient-to-r from-neutral-300 to-neutral-400 inline-block text-transparent bg-clip-text sm:text-4xl/relaxed`}
      >
        {project.title}
      </h2>
      <p className={`${noto_sans.className} mt-4 text-lg/8 text-neutral-400`}>
        {project.desc}
      </p>
      <ul className="mt-12 flex flex-col gap-y-12">
        {project.lessons && (
          <li>
            <h3
              className={`${poppins.className} text-3xl font-semibold bg-gradient-to-r from-neutral-400 to-neutral-500 inline-block text-transparent leading-noraml bg-clip-text sm:text-4xl/relaxed`}
            >
              What I Learned
            </h3>
            <p
              className={`${noto_sans.className} mt-4 text-lg text-neutral-400`}
            >
              {project.lessons}
            </p>
          </li>
        )}
        {project.challenges && (
          <li>
            <h3
              className={`${poppins.className} text-3xl font-semibold bg-gradient-to-r from-neutral-400 to-neutral-500 inline-block text-transparent bg-clip-text sm:text-4xl/relaxed`}
            >
              Challenges I Faced
            </h3>
            <p
              className={`${noto_sans.className} mt-4 text-lg text-neutral-400`}
            >
              {project.challenges}
            </p>
          </li>
        )}
      </ul>
    </main>
  );
}
