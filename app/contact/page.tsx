import ContactForm from "../components/ContactForm";
import ContactSocials from "../components/ContactSocials";
import { arimo } from "../fonts";

export default function page() {
  return (
    <article className="mx-6 mt-12 py-12 flex flex-col items-center">
      <section className="w-full max-w-md">
        <header className="flex flex-col items-center">
          <h3
            className={`${arimo.className} mt-2 tracking-normal text-4xl/normal font-bold sm:text-5xl/normal`}
          >
            Let&apos;s{" "}
            <span className="text-teal-500">
              Connect
            </span>
          </h3>
        </header>
        <ul className="mt-8">
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
