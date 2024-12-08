import Footer from "./Footer";
import Divider from "./Divider";
import ContactForm from "./ContactForm";

export default function Contact() {
    return (
        <div>
            <div className="px-6 py-16 flex flex-col items-center justify-center bg-neutral-900">
                <div className="w-full flex flex-col items-center">
                    <h2 className="text-base/none font-light text-orange-500 sm:text-sm/none">Contact</h2>
                    <h3 className="mt-4 text-4xl/none font-semibold text-neutral-200 sm:text-5xl/none">Let's Work</h3>
                </div>
                <div className="w-full max-w-xl">
                    <ContactForm />
                </div>
            </div>
            <Divider className="w-full" />
            <Footer />
        </div>
    );
}
