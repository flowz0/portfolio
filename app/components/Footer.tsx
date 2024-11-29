import { Link } from "@nextui-org/link";

export default function Footer() {
    return (
        <div className="bg-neutral-900">
            <div className="flex justify-center border-t-1 border-t-neutral-700 mx-4">
                <p className="my-4 text-sm/none font-light tracking-widest">Powered by <Link href="#">flowz0</Link></p>
            </div>
        </div>
    );
}
