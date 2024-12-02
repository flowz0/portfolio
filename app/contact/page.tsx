import Divider from '../components/Divider'
import Footer from '../components/Footer'

export default function page() {
    return (
        <div className="pt-14 flex flex-col items-center justify-center bg-neutral-900">
            <div className="mx-4 py-4 w-full flex flex-col items-center bg-neutral-950">
                <h2 className="text-sm/none font-light mt-6 text-orange-500">Contact</h2>
                <h3 className="text-4xl/none font-semibold mt-3.5 sm:text-5xl">Let's Work</h3>
            </div>
            <Divider isFlipped className="w-full" />
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

                <button type="button" className="flex self-end mt-4 py-2 px-4 rounded bg-neutral-800 hover:bg-neutral-700">Message</button>
            </form>
            <Divider className="w-full" />
            <Footer  />
        </div>

    )
}
