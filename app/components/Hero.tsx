import Button from "./Button";
import ContactSocials from "./ContactSocials";

export default function Hero() {
    return (
        <main id="about" className="px-6 py-16 flex flex-col justify-center items-center">
            <h1 className="text-4xl/none text-neutral-200 font-semibold sm:text-6xl/none">
                Billy Flowers
            </h1>
            <p className="mt-2 text-base/none font-normal tracking-wide text-orange-500 sm:text-lg/none">
                Software Engineer
            </p>
            <ContactSocials className="mt-4" />
            <Button className="mt-4" text="Download CV" />
        </main>
    );
}
