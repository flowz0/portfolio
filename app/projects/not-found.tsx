import Link from "next/link";
import { noto_sans } from "../fonts";

export default function ProjectNotFound() {
  return (
    <main className="flex flex-col items-center justify-center min-h-[calc(100vh-160px)] px-6 text-center bg-neutral-950">
      <h2
        className={`${noto_sans.className} text-4xl font-semibold text-neutral-300 sm:text-5xl`}
      >
        <span className="text-orange-500">404</span> - Project Not Found
      </h2>
      <p className="mt-6 text-neutral-300">
        Sorry, the project you&apos;re looking for doesn&apos;t exist.
      </p>
      <Link
        href="/projects"
        className="mt-8 px-6 py-2 bg-orange-500 text-white rounded-full hover:bg-orange-600 transition-colors"
      >
        Return to Projects
      </Link>
    </main>
  );
}
