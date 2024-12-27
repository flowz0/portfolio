import Link from "next/link";
import { arimo } from "@/app/fonts";

export default function Footer() {
  return (
    <footer className="relative mx-6 text-center">
      <h6
        className={`${arimo.className} pt-8 pb-12 text-base leading-normal tracking-normal text-neutral-500 sm:text-lg`}
      >
        © 2024 Billy Flowers. All rights reserved. Created by{" "}
        <Link
          href="/"
          className="underline transition ease-in-out delay-75 duration-300 hover:text-teal-400"
        >
          flowz0
        </Link>
      </h6>
    </footer>
  );
}
