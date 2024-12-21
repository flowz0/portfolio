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
          className={`${poppins.className} text-4xl/none font-semibold text-neutral-300 sm:text-6xl/none`}
        >
          Billy Flowers
        </h1>
        <p
          className={`${noto_sans.className} mt-5 text-base/none font-light tracking-wide text-orange-500 sm:text-lg/none`}
        >
          I&apos;m a <RoleTypeWriter />
        </p>
        <ContactSocials className="mt-5" />
        <Link href={`/resume/billys-resume.pdf`} target="_blank">
          <button
            type="button"
            className={`${noto_sans.className} mt-6 flex py-2 px-3.5 rounded-lg bg-neutral-700 text-neutral-400 hover:bg-neutral-800 active:scale-95`}
          >
            CV
          </button>
        </Link>
      </main>
  );
}
