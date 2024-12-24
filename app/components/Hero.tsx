import ContactSocials from "./ContactSocials";
import RoleTypeWriter from "./RoleTypeWriter";
import { noto_sans, poppins } from "../fonts";
import Link from "next/link";

export default function Hero() {
  return (
    <main
      id="about"
      className="z-10 inset-0 x-6 pt-36 pb-24 sm:pt-56 sm:pb-44 flex flex-col justify-center items-center"
    >
      <h1
        className={`${poppins.className} text-4xl font-semibold bg-gradient-to-r from-neutral-300 to-neutral-400 inline-block text-transparent bg-clip-text sm:text-6xl`}
      >
        Billy Flowers
      </h1>
      <p
        className={`${noto_sans.className} mt-2 text-base font-light tracking-wide bg-gradient-to-r from-neutral-300 to-neutral-400 inline-block text-transparent bg-clip-text sm:text-lg`}
      >
        I&apos;m a {" "}
        <span className="bg-gradient-to-r from-cyan-500 to-teal-400 inline-block text-transparent bg-clip-text">
          <RoleTypeWriter />
        </span>
      </p>
      <ContactSocials className="mt-4" />
      <Link href={`/resume/billys-resume.pdf`} target="_blank">
        <button
          type="button"
          className={`${noto_sans.className} mt-4 py-2 px-3.5 rounded-lg transition ease-in-out delay-75 duration-300 bg-gradient-to-r from-neutral-700 to-neutral-800 inline-block text-neutral-400 hover:scale-105 hover:-translate-y-1 active:scale-95`}
        >
          View CV
        </button>
      </Link>
    </main>
  );
}
