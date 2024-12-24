import ContactForm from '../components/ContactForm'
import ContactSocials from '../components/ContactSocials'
import { noto_sans, poppins } from "../fonts"

export default function page() {
    return (
        <section className="min-h-[calc(100vh-160px)] max-w-xl mx-auto px-6 pt-20 flex flex-col w-full">
            <div className="flex flex-col items-center">
                <h2 className={`${noto_sans.className} text-sm/none font-light text-orange-500`}>Contact</h2>
                <h3 className={`${poppins.className} mt-4 text-4xl/none font-semibold text-neutral-300 sm:text-5xl/none`}>Let&apos;s Work</h3>
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
