import { arimo } from "../fonts";
import ContactForm from "./ContactForm";
import ContactSocials from "./ContactSocials";

export default function Contact() {
  return (
    <article className="px-6 py-12 flex flex-col items-center bg-neutral-950 sm:py-24">
      <header className="w-full flex flex-col items-center">
        <h3
          className={`${arimo.className} mt-2 tracking-normal text-4xl/normal font-bold sm:text-5xl/normal`}
        >
          Let&apos;s <span className="bg-gradient-to-r from-teal-400 to-cyan-600 inline-block text-transparent bg-clip-text">Connect</span>
        </h3>
      </header>
      <section className="mt-8 w-full max-w-md">
        <ul>
          <li className="flex justify-center">
            <ContactSocials />
          </li>
          <li className="mt-4">
            <ContactForm />
          </li>
        </ul>
      </section>
    </article>
  );
}
