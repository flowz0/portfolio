import { Link } from "@nextui-org/link";
import { FaLinkedinIn, FaGithub } from "react-icons/fa";

export default function Hero() {
    return (
        <main className="flex flex-col items-center py-28 px-4">
            <h1 className="text-5xl/none font-semibold">
                Billy Flowers
            </h1>
            <p className="text-lg/none font-light tracking-wide mt-4 text-orange-500">
                Software Developer
            </p>
            <ul className="flex gap-x-6 mt-8">
                <li>
                    <Link href="#" target="_blank" className="text-xl text-neutral-400">
                        <FaLinkedinIn />
                    </Link>
                </li>
                <li>
                    <Link href="#" target="_blank" className="text-xl text-neutral-400">
                        <FaGithub />
                    </Link>
                </li>
            </ul>
        </main>
    );
}
