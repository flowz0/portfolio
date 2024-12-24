import { noto_sans, poppins } from "../fonts";
import ContactForm from "./ContactForm";

export default function Contact() {
  return (
    <section className="px-6 py-12 rounded-lg flex flex-col items-center justify-center sm:py-16">
      <div className="w-full flex flex-col items-center">
        <h2 className={`${noto_sans.className} text-sm font-light bg-gradient-to-r from-cyan-500 to-teal-400 inline-block text-transparent bg-clip-text`}>
          Contact
        </h2>
        <h3 className={`${poppins.className} mt-4 text-4xl font-semibold bg-gradient-to-r from-neutral-300 to-neutral-400 inline-block text-transparent bg-clip-text sm:text-5xl`}>
          Let&apos;s Work
        </h3>
      </div>
      <div className="mt-8 w-full max-w-lg">
        <ContactForm />
      </div>
    </section>
  );
}
