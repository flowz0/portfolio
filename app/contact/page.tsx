import ContactForm from '../components/ContactForm'
import ContactSocials from '../components/ContactSocials'
import { noto_sans, poppins } from "../fonts"

export default function page() {
    return (
        <section className="min-h-[calc(100vh-160px)] max-w-xl mx-auto px-6 pt-20 flex flex-col w-full">
            <div className="flex flex-col items-center">
                <h2 className={`${noto_sans.className} text-sm font-light bg-gradient-to-r from-cyan-500 to-teal-400 inline-block text-transparent bg-clip-text`}>Contact</h2>
                <h3 className={`${poppins.className} mt-4 text-4xl font-semibold bg-gradient-to-r from-neutral-300 to-neutral-400 inline-block text-transparent bg-clip-text sm:text-5xl`}>Let&apos;s Work</h3>
            </div>
            <div className="mt-8">
                <div className="flex justify-center">
                    <ContactSocials />
                </div>
                <div className="mt-4">
                    <ContactForm />
                </div>
            </div>
        </section> 
    )
}
