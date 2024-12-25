"use client";

import { sendContactEmailAction } from "../actions";
import { useRef, useTransition } from "react";
import toast from "react-hot-toast";
import Button from "./Button";
import { noto_sans } from "../fonts";

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
          className="mt-2 py-2.5 px-3.5 rounded-lg bg-neutral-900 text-neutral-500 placeholder:text-neutral-700 focus:outline-none focus:ring-2 focus:ring-teal-500 hover:ring-2 hover:ring-teal-500/50 transition ease-in-out delay-75 duration-300 hover:scale-105 hover:-translate-y-1 active:scale-95"
          placeholder="Enter name"
          autoComplete="given-name"
        />
      </div>
      <div className="flex flex-col">
        <label htmlFor="email" className="text-neutral-500">
          Email
        </label>
        <input
          name="email"
          id="email"
          type="text"
          disabled={isPending}
          className="mt-2 py-2.5 px-3.5 rounded-lg bg-neutral-900 text-neutral-500 placeholder:text-neutral-700 focus:outline-none focus:ring-2 focus:ring-teal-500 hover:ring-2 hover:ring-teal-500/50 transition ease-in-out delay-75 duration-300 hover:scale-105 hover:-translate-y-1 active:scale-95"
          placeholder="Enter email"
          autoComplete="email"
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
          className="mt-2 py-2.5 px-3.5 rounded-lg resize-none bg-neutral-900 text-neutral-500 placeholder:text-neutral-700 focus:outline-none focus:ring-2 focus:ring-teal-500 hover:ring-2 hover:ring-teal-500/50 transition ease-in-out delay-75 duration-300 hover:scale-105 hover:-translate-y-1 active:scale-95"
          placeholder="Enter message"
          autoComplete="off"
        />
      </div>

      <Button className="self-end" text="Contact" variant="animated" submit />
    </form>
  );
}

export default ContactForm;
