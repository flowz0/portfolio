import Link from "next/link";
import Button from "./components/Button";
import { arimo, nunito } from "./fonts";

export default function NotFoundPage() {
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
        Page not found
      </h3>
      <p className={`${nunito.className} mt-8 text-base leading-normal tracking-normal text-neutral-400`}>
        Sorry, the page you&apos;re looking for doesn&apos;t exist.
      </p>
      <Link href="/" className="mt-16 px-6">
        <Button text="Back to portfolio" variant="animated" />
      </Link>
    </article>
  );
}
