import Button from "./Button";
import ContactSocials from "./ContactSocials";

export default function Hero() {
    return (
        <main id="about" className="mx-4 py-16 flex flex-col justify-center items-center">
            <h1 className="text-5xl/none font-semibold">
                Billy Flowers
            </h1>
            <p className="text-lg/none font-light tracking-wide mt-2.5 text-orange-500">
                Software Engineer
            </p>
            <ContactSocials className="mt-5" />
            <Button className="mt-6" text="Download CV" />
        </main>
    );
}
