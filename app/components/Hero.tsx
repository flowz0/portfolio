import { arimo, nunito } from "@/app/fonts";
import Link from "next/link";
import Button from "./Button";
import Image from "next/image";
import Developer from "@/public/img/developer.png";

export default function Hero() {
  return (
    <article className="px-6 mt-12 py-12 flex justify-center sm:py-24">
      <section className="max-w-5xl flex items-center justify-center flex-col md:flex-row md:gap-x-8">
        <header className="flex flex-col md:w-3/5">
          <p
            className={`${nunito.className} text-lg/normal tracking-normal font-semibold bg-gradient-to-r from-teal-400 to-cyan-600 inline-block text-transparent bg-clip-text`}
          >
            Hello, my name is
          </p>
          <h1
            className={`${arimo.className} text-4xl/normal font-bold tracking-normal sm:text-6xl/normal`}
          >
            Billy Flowers
          </h1>
          <p
            className={`${nunito.className} mt-4 text-base/relaxed tracking-normal text-neutral-400 sm:mt-4`}
          >
            I&apos;m a software engineer specializing in creating accessible and
            user-centric digital experiences. Bridging the gap between design
            and development to craft memorable user interfaces that drive
            engagement and conversion. Certified in core web technologies with a
            keen eye for both aesthetics and functionality.
          </p>
          <Link
            href="/resume/billys-resume.pdf"
            target="_blank"
            className="mt-8 w-fit"
          >
            <Button text="View CV" variant="outlined" className="text-xl" />
          </Link>
        </header>
        <div className="flex justify-center">
          <Image
            src={Developer}
            alt="Developer icon"
            className="mt-8 w-full h-auto animate-floating-effect md:mt-0"
            priority
          />
        </div>
      </section>
    </article>
  );
}
