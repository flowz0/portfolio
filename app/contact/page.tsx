import ContactForm from '../components/ContactForm'
import ContactSocials from '../components/ContactSocials'
import Divider from '../components/Divider'
import Footer from '../components/Footer'

export default function page() {
    return (
        <div>


            <div className="pt-16 flex flex-col items-center justify-center bg-neutral-950">
                <div className="mx-4 py-4 w-full flex flex-col items-center">
                    <h2 className="text-sm/none font-light mt-6 text-orange-500">Contact</h2>
                    <h3 className="text-4xl/none font-semibold mt-3.5 sm:text-5xl">Let's Work</h3>
                </div>
                <Divider className="w-full" flipped />
                <div className="pt-6 w-full flex flex-col sm:flex-row sm:gap-x-6 items-center justify-center bg-neutral-900">
                    <div className=''>
                        <ContactForm />
                    </div>
                    <div className='self-baseline sm:pt-8'>
                        <ContactSocials className='mt-4' vertical />
                    </div>
                </div>
            </div>
            <Divider className="w-full" />
            <Footer />

        </div>
    )
}
