import Link from "next/link";
import { noto_sans } from "../fonts";

export default function Footer() {
  return (
    <div className="mx-6 text-center">
      <p className={`${noto_sans.className} pt-8 pb-12 text-sm/6 font-light tracking-widest bg-gradient-to-r from-neutral-300 to-neutral-400 inline-block text-transparent bg-clip-text`}>
        © 2024 Billy Flowers. All rights reserved. Created by{" "}
        <Link
          href="/"
          className="font-medium bg-gradient-to-r from-cyan-500 to-teal-400 inline-block text-transparent bg-clip-text"
        >
          flowz0
        </Link>
      </p>
    </div>
  );
}
