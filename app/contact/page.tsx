import ContactForm from '../components/ContactForm'
import ContactSocials from '../components/ContactSocials'
import Divider from '../components/Divider'
import Footer from '../components/Footer'

export default function page() {
    return (
        <>
            <div className="pt-16 pb-6 px-6 flex flex-col items-center bg-neutral-950">
                <h2 className="text-base/none font-light text-orange-500 sm:text-sm/none">Contact</h2>
                <h3 className="mt-4 text-4xl/none text-neutral-200 font-semibold sm:text-5xl/none">Let's Work</h3>
            </div>
            <Divider className="w-full" flipped />
            <div className="px-6 py-4 flex flex-col bg-neutral-900 sm:flex-row sm:justify-center sm:gap-x-6 sm:py-20">
                <div className='pl-2 sm:pl-0'>
                    <ContactSocials className="sm:flex-col sm:gap-y-2.5 sm:mt-6" />
                </div>
                <div className='w-full max-w-xl'>
                    <ContactForm />
                </div>
            </div>
            <Divider className="w-full" />
            <Footer />
        </>
    )
}
