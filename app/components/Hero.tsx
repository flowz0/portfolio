import { arimo, nunito } from "@/app/fonts";
import Link from "next/link";
import Button from "./Button";
import Image from "next/image";
import Developer from "@/public/img/developer.png";

export default function Hero() {
  return (
    <article className="px-6 mt-16 py-12 sm:py-24">
      <section className="max-w-6xl mx-auto grid items-center grid-cols-1 md:grid-cols-2 gap-x-2">
        <header className="flex flex-col">
          <p
            className={`${nunito.className} text-lg font-semibold text-teal-500`}
          >
            Hello, my name is
          </p>
          <h1
            className={`${arimo.className} mt-2 text-6xl font-bold sm:text-7xl`}
          >
            Billy Flowers
          </h1>
          <p
            className={`${nunito.className} mt-4 text-base text-neutral-400`}
          >
            I&apos;m a <strong>software engineer</strong> specializing in creating accessible and
            user-centric digital experiences. Bridging the gap between design
            and development to craft impactful user interfaces that drive
            engagement and conversion.
          </p>
          <div className="mt-8 flex gap-x-4">
            <Link href="#contact" passHref>
              <Button text="Contact me" className="text-lg" />
            </Link>
            <Link
              href="/resume/billy-flowers.pdf"
              target="_blank"
              className="w-fit"
              passHref
            >
              <Button text="View CV" variant="outlined" className="text-lg" />
            </Link>
          </div>
        </header>
        <div className="flex justify-center md:justify-end">
          <Image
            src={Developer}
            alt="Developer icon"
            height={512}
            width={512}
            className="mt-8 h-auto w-96 animate-floating-effect md:mt-0"
            priority
          />
        </div>
      </section>
    </article>
  );
}
