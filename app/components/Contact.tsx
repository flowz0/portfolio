import { noto_sans, poppins } from "../fonts";
import ContactForm from "./ContactForm";

export default function Contact() {
  return (
    <section className="px-6 py-12 rounded-lg flex flex-col items-center justify-center sm:py-16">
      <div className="w-full flex flex-col items-center">
        <h2 className={`${noto_sans.className} text-sm/none font-light text-orange-500`}>
          Contact
        </h2>
        <h3 className={`${poppins.className} mt-4 text-4xl/none font-semibold text-neutral-300 sm:text-5xl/none`}>
          Let&apos;s Work
        </h3>
      </div>
      <div className="mt-8 w-full max-w-lg">
        <ContactForm />
      </div>
    </section>
  );
}
