import Link from "next/link";
import Button from "@/app/components/Button";
import { arimo, nunito } from "@/app/fonts";

export default function ProjectNotFound() {
  return (
    <article className="px-6 mt-12 py-12 flex flex-col items-center">
      <h2
        className={`${nunito.className} text-base leading-normal tracking-normal text-teal-400 sm:text-lg`}
      >
        404
      </h2>
      <h3
        className={`${arimo.className} mt-2 leading-normal tracking-normal text-4xl font-bold sm:text-5xl`}
      >
        Project not found
      </h3>
      <p className={`${nunito.className} mt-8 text-base leading-normal tracking-normal text-neutral-400`}>
        Sorry, the project you&apos;re looking for doesn&apos;t exist.
      </p>
      <Link href="/projects" className="mt-16 px-6">
        <Button text="Back to projects" variant="animated" />
      </Link>
    </article>
  );
}
