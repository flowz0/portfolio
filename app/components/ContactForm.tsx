"use client";

import { sendContactEmailAction } from "../actions";
import { useRef, useTransition } from "react";
import toast from "react-hot-toast";
import Button from "./Button";
import { arimo } from "../fonts";

function ContactForm() {
  const formRef = useRef<HTMLFormElement>(null);
  const [isPending, startTransition] = useTransition();

  const handleSubmit = () => {
    const formData = new FormData(formRef.current as HTMLFormElement);
    startTransition(() => handleSubmitContactForm(formData));
  };

  const handleSubmitContactForm = (formData: FormData) => {
    const name = formData.get("name") as string;
    const email = formData.get("email") as string;
    const message = formData.get("message") as string;

    const emptyFields = [];
    if (!name.trim()) emptyFields.push("name");
    if (!email.trim()) emptyFields.push("email");
    if (!message.trim()) emptyFields.push("message");

    if (emptyFields.length > 0) {
      let errorMessage = "Enter your ";
      if (emptyFields.length === 1) {
        errorMessage += emptyFields[0];
      } else if (emptyFields.length === 2) {
        errorMessage += `${emptyFields[0]} and ${emptyFields[1]}`;
      } else {
        errorMessage +=
          emptyFields.slice(0, -1).join(", ") +
          ", and " +
          emptyFields.slice(-1);
      }
      toast.error(errorMessage);
      return;
    }

    const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
    if (!emailRegex.test(email)) {
      toast.error("Please enter a valid email address");
      return;
    }

    startTransition(async () => {
      const { errorMessage } = await sendContactEmailAction(formData);
      if (!errorMessage) {
        toast.success("Message sent!");
        formRef.current?.reset();
      } else {
        toast.error(errorMessage);
      }
    });
  };

  return (
    <form
      ref={formRef}
      onSubmit={(e) => {
        e.preventDefault();
        handleSubmit();
      }}
      className={`${arimo.className} w-full flex flex-col gap-y-4`}
    >
      <section className="flex flex-col">
        <label htmlFor="name" className="w-fit text-neutral-400">
          Name
        </label>
        <input
          name="name"
          id="name"
          type="text"
          disabled={isPending}
          className="mt-2 px-3.5 py-2.5 ring-2 rounded-lg bg-neutral-900 autofill:ring-neutral-800 text-neutral-400 ring-neutral-800 placeholder:text-neutral-700 focus:outline-none focus:ring-neutral-600 hover:ring-neutral-700"
          placeholder="Enter name"
          autoComplete="given-name"
        />
      </section>
      <section className="flex flex-col">
        <label htmlFor="email" className="w-fit text-neutral-400">
          Email
        </label>
        <input
          name="email"
          id="email"
          type="text"
          disabled={isPending}
          className="mt-2 px-3.5 py-2.5 ring-2 rounded-lg bg-neutral-900 text-neutral-400 ring-neutral-800 placeholder:text-neutral-700 focus:outline-none focus:ring-neutral-600 hover:ring-neutral-700"
          placeholder="Enter email"
          autoComplete="email"
        />
      </section>
      <section className="flex flex-col">
        <label htmlFor="message" className="w-fit text-neutral-400">
          Message
        </label>
        <textarea
          name="message"
          id="message"
          rows={4}
          disabled={isPending}
          className="mt-2 px-3.5 py-2.5 resize-none ring-2 rounded-lg bg-neutral-900 text-neutral-400 ring-neutral-800 placeholder:text-neutral-700 focus:outline-none focus:ring-neutral-600 hover:ring-neutral-700"
          placeholder="Enter message"
          autoComplete="off"
        />
      </section>

      <Button className="self-end" text="Contact" variant="animated" submit />
    </form>
  );
}

export default ContactForm;
