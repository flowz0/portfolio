import Link from "next/link";
import { FaLinkedinIn, FaGithub } from "react-icons/fa";

interface SocialsProps {
  className?: string;
  vertical?: boolean;
}

const iconClass =
  "text-3xl text-neutral-500 transition ease-in-out delay-75 duration-300 hover:text-teal-500 hover:scale-105 active:scale-95";

export default function ContactSocials({
  className,
  vertical = false,
}: SocialsProps) {
  return (
    <ul
      className={
        vertical ? `flex flex-col gap-y-4` : `flex gap-x-4 ${className}`
      }
    >
      <li>
        <Link href="https://www.linkedin.com/in/billyflowers/" target="_blank">
          <FaLinkedinIn className={iconClass} />
        </Link>
      </li>
      <li>
        <Link href="https://github.com/flowz0" target="_blank">
          <FaGithub className={iconClass} />
        </Link>
      </li>
    </ul>
  );
}
