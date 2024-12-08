import Link from "next/link";

interface PrimaryProp {
    isPrimary?: boolean;
}

export default function Footer({ isPrimary = false }: PrimaryProp) {
    return (
        <div className={isPrimary ? "w-full text-center bg-neutral-900" : "w-full text-center bg-neutral-950"}>
            <p className="pt-8 pb-10 text-sm/none font-light tracking-widest text-neutral-300">
                © 2025 {' '}
                <Link href="https://www.linkedin.com/in/billyflowers/" className="text-orange-500 font-bold hover:text-orange-600" target="_blank">flowz0</Link>
            </p>
        </div>
    );
}
