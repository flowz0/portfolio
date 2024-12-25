import Link from "next/link";
import { noto_sans } from "../fonts";
import Button from "../components/Button";

export default function ProjectNotFound() {
  return (
    <main className="flex flex-col items-center justify-center min-h-[calc(100vh-160px)] px-6 text-center bg-neutral-950">
      <h3 className="text-4xl font-semibold bg-gradient-to-r from-cyan-500 to-teal-400 inline-block text-transparent bg-clip-text sm:text-6xl">404</h3>
      <h2
        className={`${noto_sans.className} mt-2 text-4xl bg-gradient-to-r from-neutral-300 to-neutral-400 inline-block text-transparent bg-clip-text sm:text-5xl/normal`}
      >
        Project Not Found
      </h2>
      <p className="mt-4 text-neutral-400">
        Sorry, the project you&apos;re looking for doesn&apos;t exist.
      </p>
      <Link
        href="/projects"
        className="mt-12 px-6"
      >
        <Button text="Back to projects" variant="animated" />
      </Link>
    </main>
  );
}
