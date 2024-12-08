import Button from "./Button";

export default function ContactForm() {
    return (
        <form className="mt-6 w-full flex flex-col gap-y-2.5">
            <div className="flex flex-col gap-y-2.5 sm:grid sm:grid-cols-2 sm:gap-x-4">
                <div className="flex flex-col">
                    <label htmlFor="name" className="pl-2 text-neutral-400">Name</label>
                    <input id="name" type="text" className="mt-1 py-1.5 px-2 rounded-lg bg-neutral-800 text-neutral-400 placeholder:text-neutral-600 focus:outline-none focus:ring-1 focus:ring-orange-500" placeholder="Enter name" />
                </div>

                <div className="flex flex-col">
                    <label htmlFor="phone" className="sm:mt-0 pl-2 text-neutral-400">Phone</label>
                    <input id="phone" type="text" className="mt-1 py-1.5 px-2 rounded-lg bg-neutral-800 text-neutral-400 placeholder:text-neutral-600 focus:outline-none focus:ring-1 focus:ring-orange-500" placeholder="Enter phone" />
                </div>

            </div>
            <div className="flex flex-col">
                <label htmlFor="email" className="pl-2 text-neutral-400">Email</label>
                <input id="email" type="email" className="mt-1 py-1.5 px-2 rounded-lg bg-neutral-800 text-neutral-400 placeholder:text-neutral-600 focus:outline-none focus:ring-1 focus:ring-orange-500" placeholder="Enter email" />
            </div>
            <div className="flex flex-col">
                <label htmlFor="message" className="pl-2 text-neutral-400">Message</label>
                <textarea id="message" rows={4} className="mt-1 py-1.5 px-2 rounded-lg resize-none bg-neutral-800 text-neutral-400 placeholder:text-neutral-600 focus:outline-none focus:ring-1 focus:ring-orange-500" placeholder="Enter message" />
            </div>

            <Button className="self-end" text="Message" submit />
        </form>
    );
}
