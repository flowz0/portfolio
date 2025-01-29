import { arimo } from "../fonts";
import ContactForm from "./ContactForm";
import ContactSocials from "./ContactSocials";

export default function Contact() {
  return (
    <article id="contact" className="max-w-4xl mx-auto px-6 py-12 flex flex-col items-center bg-neutral-950 sm:py-16">
      <header className="w-full flex flex-col items-center">
        <h3
          className={`${arimo.className} tracking-normal text-4xl/normal font-bold sm:text-5xl/normal`}
        >
          Let&apos;s <span className="text-teal-500">Connect</span>
        </h3>
      </header>
      <section className="mt-8 w-full">
        <ul className="flex flex-col justify-center gap-x-8 sm:flex-row">
          <li className="flex justify-center">
            <ContactSocials className="sm:flex-col sm:gap-y-4" />
          </li>
          <li className="mt-4 sm:mt-0">
            <ContactForm />
          </li>
        </ul>
      </section>
    </article>
  );
}
