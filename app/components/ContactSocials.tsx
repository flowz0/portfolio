import Link from "next/link";
import { FaLinkedinIn, FaGithub } from "react-icons/fa";

interface SocialsProps {
    className?: string;
    vertical?: boolean;
}

export default function ContactSocials({className, vertical = false}: SocialsProps) {
    return (
        <ul className={vertical ? `flex flex-col gap-y-3` : `flex gap-x-3 ${className}`}>
            <li>
                <Link href="https://www.linkedin.com/in/billyflowers/" target="_blank" className="text-2xl text-neutral-500 hover:text-orange-500">
                    <FaLinkedinIn />
                </Link>
            </li>
            <li>
                <Link href="https://github.com/flowz0" target="_blank" className="text-2xl text-neutral-500 hover:text-orange-500">
                    <FaGithub />
                </Link>
            </li>
        </ul>
    )
}
