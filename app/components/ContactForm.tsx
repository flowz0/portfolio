"use client";

import { sendContactEmailAction } from "../actions";
import { useRef, useTransition } from "react";
import toast from "react-hot-toast";
import Button from "./Button";
import { noto_sans } from "../fonts";

function ContactForm() {
  const formRef = useRef<HTMLFormElement>(null);

  const [isPending, startTransition] = useTransition();

  const handleSubmitContactForm = (formData: FormData) => {
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
      action={handleSubmitContactForm}
      className={`${noto_sans.className} w-full flex flex-col gap-y-3.5`}
    >
      <div className="flex flex-col">
        <label htmlFor="name" className="text-neutral-500">
          Name
        </label>
        <input
          name="name"
          id="name"
          type="text"
          disabled={isPending}
          className="mt-2 py-2.5 px-3.5 rounded-lg bg-neutral-900 text-neutral-500 placeholder:text-neutral-700 focus:outline-none focus:ring-1 focus:ring-orange-500"
          placeholder="Enter name"
          autoComplete="given-name"
          required
        />
      </div>
      <div className="flex flex-col">
        <label htmlFor="email" className="text-neutral-500">
          Email
        </label>
        <input
          name="email"
          id="email"
          type="email"
          disabled={isPending}
          className="mt-2 py-2.5 px-3.5 rounded-lg bg-neutral-900 text-neutral-500 placeholder:text-neutral-700 focus:outline-none focus:ring-1 focus:ring-orange-500"
          placeholder="Enter email"
          autoComplete="email"
          required
        />
      </div>
      <div className="flex flex-col">
        <label htmlFor="message" className="text-neutral-500">
          Message
        </label>
        <textarea
          name="message"
          id="message"
          rows={4}
          disabled={isPending}
          className="mt-2 py-2.5 px-3.5 rounded-lg resize-none bg-neutral-900 text-neutral-500 placeholder:text-neutral-700 focus:outline-none focus:ring-1 focus:ring-orange-500"
          placeholder="Enter message"
          autoComplete="off"
          required
        />
      </div>

      <Button className="self-end" text="Message" submit />
    </form>
  );
}

export default ContactForm;
