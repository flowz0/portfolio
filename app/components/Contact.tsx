import { arimo, nunito } from "../fonts";
import ContactForm from "./ContactForm";

export default function Contact() {
  return (
    <article className="px-6 py-12 flex flex-col items-center bg-neutral-950 sm:py-24">
      <header className="w-full flex flex-col items-center">
        <h2 className={`${nunito.className} text-base leading-normal tracking-normal text-teal-400 sm:text-lg`}>
          <small>Contact</small>
        </h2>
        <h3 className={`${arimo.className} mt-2 leading-normal tracking-normal text-4xl font-bold sm:text-5xl`}>
          Let&apos;s Work
        </h3>
      </header>
      <section className="mt-8 w-full max-w-md">
        <ContactForm />
      </section>
    </article>
  );
}
