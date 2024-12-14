"use client";

import { sendContactEmailAction } from "../actions";
import { useRef, useTransition } from "react";
import toast from "react-hot-toast";
import Button from "./Button";

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
      className="w-full flex flex-col gap-y-2.5"
    >
      <div className="flex flex-col">
        <label htmlFor="name" className="pl-2.5 text-neutral-400">
          Name
        </label>
        <input
          name="name"
          id="name"
          type="text"
          disabled={isPending}
          className="mt-1.5 py-2 px-2.5 rounded-lg bg-neutral-800 text-neutral-400 placeholder:text-neutral-600 focus:outline-none focus:ring-1 focus:ring-orange-500"
          placeholder="Enter name"
        />
      </div>
      <div className="flex flex-col">
        <label htmlFor="email" className="pl-2.5 text-neutral-400">
          Email
        </label>
        <input
          name="email"
          id="email"
          type="email"
          disabled={isPending}
          className="mt-1.5 py-2 px-2.5 rounded-lg bg-neutral-800 text-neutral-400 placeholder:text-neutral-600 focus:outline-none focus:ring-1 focus:ring-orange-500"
          placeholder="Enter email"
        />
      </div>
      <div className="flex flex-col">
        <label htmlFor="message" className="pl-2.5 text-neutral-400">
          Message
        </label>
        <textarea
          name="message"
          id="message"
          rows={4}
          disabled={isPending}
          className="mt-1.5 py-2 px-2.5 rounded-lg resize-none bg-neutral-800 text-neutral-400 placeholder:text-neutral-600 focus:outline-none focus:ring-1 focus:ring-orange-500"
          placeholder="Enter message"
        />
      </div>

      <Button className="self-end" text="Message" submit />
    </form>
  );
}

export default ContactForm;
