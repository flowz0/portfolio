import { Button } from "@nextui-org/button";

export default function Contact() {
    return (
        <div className="pt-14 pb-20 px-4 bg-neutral-900">
            <div className="flex flex-col items-center">
                <h2 className="text-sm/none font-light text-orange-500">Contact</h2>
                <h3 className="text-4xl/none font-semibold mt-4">Let's Work</h3>
            </div>
            <div className="flex flex-col items-center">
                <form className="mt-8 mx-4 flex flex-col max-w-lg w-full">
                    <div className="sm:grid sm:grid-cols-2 sm:gap-x-6">
                        <div className="flex flex-col">
                            <label htmlFor="name" className="text-neutral-300">Name</label>
                            <input id="name" type="text" className="mt-2 py-2 px-1.5 rounded bg-neutral-800 placeholder:text-neutral-500" placeholder="Name" />
                        </div>

                        <div className="flex flex-col">
                            <label htmlFor="phone" className="mt-5 sm:mt-0 text-neutral-300">Phone</label>
                            <input id="phone" type="text" className="mt-2 py-2 px-1.5 rounded bg-neutral-800 placeholder:text-neutral-500" placeholder="Name" />
                        </div>

                    </div>
                    <label htmlFor="email" className="mt-5 text-neutral-300">Email</label>
                    <input id="email" type="email" className="mt-2 py-2 px-1.5 rounded bg-neutral-800 placeholder:text-neutral-500" placeholder="Name" />

                    <label htmlFor="message" className="mt-5 text-neutral-300">Message</label>
                    <textarea id="message" rows={4} className="mt-2 py-2 px-1.5 rounded resize-none bg-neutral-800 placeholder:text-neutral-500" placeholder="Message" />

                    <button type="button" className="flex self-end mt-4 py-2 px-4 rounded bg-neutral-800 hover:bg-neutral-700">Message</button>
                </form>
            </div>
        </div>
    );
}
