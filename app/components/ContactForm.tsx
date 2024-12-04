import Button from "./Button";

export default function ContactForm() {
    return (
        <form className="px-4 mt-8 mb-4 w-full flex flex-col max-w-xl">
            <div className="sm:grid sm:grid-cols-2 sm:gap-x-6">
                <div className="flex flex-col">
                    <label htmlFor="name" className="text-neutral-300">Name</label>
                    <input id="name" type="text" className="mt-2 py-2 px-1.5 rounded bg-neutral-800 text-neutral-300 placeholder:text-neutral-500" placeholder="Enter name" />
                </div>

                <div className="flex flex-col">
                    <label htmlFor="phone" className="mt-5 sm:mt-0 text-neutral-300">Phone</label>
                    <input id="phone" type="text" className="mt-2 py-2 px-1.5 rounded bg-neutral-800 text-neutral-300 placeholder:text-neutral-500" placeholder="Enter phone" />
                </div>

            </div>
            <label htmlFor="email" className="mt-5 text-neutral-300">Email</label>
            <input id="email" type="email" className="mt-2 py-2 px-1.5 rounded bg-neutral-800 text-neutral-300 placeholder:text-neutral-500" placeholder="Enter email" />

            <label htmlFor="message" className="mt-5 text-neutral-300">Message</label>
            <textarea id="message" rows={4} className="mt-2 py-2 px-1.5 rounded resize-none bg-neutral-800 text-neutral-300 placeholder:text-neutral-500" placeholder="Enter message" />

            <Button className="mt-4 self-end" text="Message" submit />
        </form>
    );
}
