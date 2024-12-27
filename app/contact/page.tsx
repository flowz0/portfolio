import ContactForm from "../components/ContactForm";
import ContactSocials from "../components/ContactSocials";
import { arimo, nunito } from "../fonts";

export default function page() {
  return (
    <article className="mx-6 mt-12 py-12 flex flex-col items-center">
      <section className="w-full max-w-md">
        <header className="flex flex-col items-center">
          <h2
            className={`${nunito.className} text-base leading-normal tracking-normal text-teal-400 sm:text-lg`}
          >
            Contact
          </h2>
          <h3
            className={`${arimo.className} mt-2 leading-normal tracking-normal text-4xl font-bold sm:text-5xl`}
          >
            Let&apos;s Work
          </h3>
        </header>
        <ul className="mt-8">
          <li className="flex justify-center">
            <ContactSocials />
          </li>
          <li className="mt-6">
            <ContactForm />
          </li>
        </ul>
      </section>
    </article>
  );
}
