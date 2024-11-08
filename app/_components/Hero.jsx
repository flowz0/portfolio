import Button from "./Button";
import TypeWriter from "./TypeWriter";

export default function Hero() {
    return (
        <header className="h-screen flex flex-col items-center justify-center bg-neutral-800 text-neutral-50">
            <h2 className="text-sm font-light tracking-widest text-sky-500">Portfolio</h2>
            <h1 className="text-4xl font-bold tracking-wide mt-6">Billy Flowers</h1>
            <div className="text-lg tracking-wider mt-4 text-neutral-400">
                I'm a {" "}
                <div className="inline font-medium text-neutral-200">
                    <TypeWriter />
                </div>
            </div>
            <div className="flex flex-col gap-y-4 gap-x-6 px-8 mt-8 w-full md:w-auto md:flex-row">
                <Button variant={"primary"}>View Portfolio</Button>
                <Button variant={"secondary"}>Contact</Button>
            </div>
        </header>
    )
}
