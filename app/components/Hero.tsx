import ContactSocials from "./ContactSocials";
import RoleTypeWriter from "./RoleTypeWriter";
import { noto_sans, poppins } from "../fonts";
import Link from "next/link";

export default function Hero() {
  return (
    <main
      id="about"
      className="mt-12 mx-6 py-24 rounded-lg flex flex-col justify-center items-center sm:py-44"
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
      <Link href={`/billys-resume.pdf`} target="_blank">
        <button
          type="button"
          className={`${noto_sans.className} mt-6 flex py-2 px-3.5 rounded-lg bg-neutral-700 text-neutral-400 hover:bg-neutral-800 active:scale-95`}
        >
          View CV
        </button>
      </Link>
    </main>
  );
}
