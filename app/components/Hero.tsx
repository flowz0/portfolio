import Button from "./Button";
import ContactSocials from "./ContactSocials";
import RoleTypeWriter from "./RoleTypeWriter";

export default function Hero() {
    return (
        <main id="about" className="mt-16 px-6 py-20 rounded-lg flex flex-col justify-center items-center bg-neutral-900 sm:py-24">
            <h1 className="text-4xl/none text-neutral-300 font-semibold sm:text-6xl/none">
                Billy Flowers
            </h1>
            <p className="mt-5 text-base/none font-light tracking-wide text-orange-500 sm:text-lg/none">
                I&apos;m a <RoleTypeWriter />
            </p>
            <ContactSocials className="mt-5" />
            <Button className="mt-4" text="Download CV" />
        </main>
    );
}
