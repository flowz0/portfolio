import { arimo, nunito } from "@/app/fonts";
import Link from "next/link";
import Button from "./Button";

// Components
import RoleTypeWriter from "./RoleTypeWriter";
import ContactSocials from "./ContactSocials";

export default function Hero() {
  return (
    <article
      id="about"
      className={`${arimo.className} px-6 mt-12 py-12 flex justify-center sm:py-24`}
    >
      <header className="max-w-2xl flex flex-col items-center">
        <h1 className="text-4xl leading-normal tracking-normal font-bold sm:text-6xl">
          Billy Flowers
        </h1>
        <p
          className={`${nunito.className} mt-2 text-base leading-normal tracking-normal text-neutral-200 sm:text-lg sm:mt-4`}
        >
          I&apos;m a{" "}
          <span className="text-teal-400">
            <RoleTypeWriter />
          </span>
        </p>
        <ContactSocials className="mt-4" />
        <Link
          href={`/resume/billys-resume.pdf`}
          target="_blank"
          className="mt-6 text-lg w-fit"
        >
          <Button text="View CV" variant="animated" className="w-fit" />
        </Link>
      </header>
    </article>
  );
}
