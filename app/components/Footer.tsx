import Link from "next/link";
import { noto_sans } from "../fonts";

export default function Footer() {
  return (
    <div className="mx-6 text-center">
      <p className={`${noto_sans.className} pt-8 pb-12 text-sm/6 font-light tracking-widest text-neutral-300`}>
        © 2024 Billy Flowers. All rights reserved. Created by{" "}
        <Link
          href="/"
          className="font-medium text-orange-500 hover:text-orange-600"
        >
          flowz0
        </Link>
      </p>
    </div>
  );
}
