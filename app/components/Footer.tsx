import { Link } from "@nextui-org/link";

interface PrimaryProp {
    isPrimary?: boolean;
}

export default function Footer({ isPrimary = false }: PrimaryProp) {
    return (
        <div className={isPrimary ? "bg-neutral-900 text-center" : "bg-neutral-950 text-center"}>
            <p className="py-6 text-sm/none font-light tracking-widest text-neutral-300">
                Powered by {' '}
                <Link href="https://www.linkedin.com/in/billyflowers/" className="text-orange-500" isExternal>flowz0</Link>
            </p>
        </div>
    );
}
