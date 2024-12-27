import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { FaExternalLinkAlt, FaGithub, FaCalendarAlt } from "react-icons/fa";
import projectsData from "../../data/projectsData";
import { arimo, nunito } from "@/app/fonts";

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
  const iconClass =
    "text-2xl text-neutral-500 transition ease-in-out delay-75 duration-300 hover:text-teal-500 hover:scale-105 active:scale-95";

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
    <article className="mx-6 mt-12 py-12 flex flex-col items-center">
      <section className="max-w-3xl">
        <header className="flex flex-col items-center">
          <h2
            className={`${nunito.className} text-base leading-normal tracking-normal text-teal-400 sm:text-lg`}
          >
            Detail
          </h2>
          <h3
            className={`${arimo.className} mt-2 leading-normal tracking-normal text-4xl font-bold text-neutral-200 sm:text-6xl`}
          >
            Project 00{project.id}
          </h3>
        </header>
        <section className="mt-8 flex justify-between items-baseline text-neutral-400">
          <p className="flex items-center">
            <FaCalendarAlt className="mr-2" />
            {formatDate(project.date)}
          </p>
          <section className="flex gap-4">
            {project.site && (
              <Link href={project.site} target="_blank" className={iconClass}>
                <FaExternalLinkAlt />
              </Link>
            )}
            {project.code && (
              <Link href={project.code} target="_blank" className={iconClass}>
                <FaGithub />
              </Link>
            )}
          </section>
        </section>
        <Image
          src={project.img}
          alt={`${project.title} project image`}
          className="mt-4 h-auto w-full rounded"
          priority={true}
        />
        <h4
          className={`${arimo.className} mt-6 leading-normal tracking-normal text-3xl font-bold text-neutral-300 sm:text-5xl`}
        >
          {project.title}
        </h4>
        <p
          className={`${nunito.className} mt-4 text-base leading-normal tracking-normal text-neutral-400`}
        >
          {project.desc}
        </p>
        <ul className="mt-12 flex flex-col gap-y-8">
          {project.lessons && (
            <li>
              <h5
                className={`${arimo.className} leading-normal tracking-normal text-2xl font-bold text-neutral-300 sm:text-4xl`}
              >
                What I Learned
              </h5>
              <p
                className={`${nunito.className} mt-4 text-base leading-normal tracking-normal text-neutral-400`}
              >
                {project.lessons}
              </p>
            </li>
          )}
          {project.challenges && (
            <li>
              <h5
                className={`${arimo.className} leading-normal tracking-normal text-2xl font-bold text-neutral-300 sm:text-4xl`}
              >
                Challenges I Faced
              </h5>
              <p
                className={`${nunito.className} mt-4 text-base leading-normal tracking-normal text-neutral-400`}
              >
                {project.challenges}
              </p>
            </li>
          )}
        </ul>
      </section>
    </article>
  );
}
