import Link from "next/link";
import { FaLinkedinIn, FaGithub } from "react-icons/fa";

export default function Hero() {
    return (
        <main id="about" className="flex flex-col items-center mx-4 pt-16 pb-24 sm:py-32">
            <h1 className="text-5xl/none font-semibold">
                Billy Flowers
            </h1>
            <p className="text-lg/none font-light tracking-wide mt-4 text-orange-500">
                Software Engineer
            </p>
            <ul className="flex gap-x-6 mt-6">
                <li>
                    <Link href="https://www.linkedin.com/in/billyflowers/" target="_blank" className="text-xl text-neutral-400 hover:text-orange-500">
                        <FaLinkedinIn />
                    </Link>
                </li>
                <li>
                    <Link href="https://github.com/flowz0" target="_blank" className="text-xl text-neutral-400 hover:text-orange-500">
                        <FaGithub />
                    </Link>
                </li>
            </ul>
        </main>
    );
}
