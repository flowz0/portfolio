import Image from "next/image";
import { Button } from '@nextui-org/button';
import { FaExternalLinkAlt, FaGithub } from "react-icons/fa";
import { Link } from "@nextui-org/link";
import TestImage from '@/assets/test.png'

export default function Project() {
    return (
        <>
            <div className='rounded-lg max-w-sm bg-neutral-800'>
                <Image
                    src={TestImage}
                    alt="Project image"
                    quality={90}
                    className='object-cover h-48 w-full rounded-t-lg'
                />
                <div className='px-4 py-5 sm:px-5 sm:py-6'>
                    <h4 className='text-3xl/none font-semibold tracking-wide'>Project Name</h4>
                    <p className='mt-3 leading-7 tracking-wider'>Short description for my project. Describe what the project does.</p>
                    <div className="flex justify-between items-center mt-6">
                        <Button className="bg-neutral-300 text-neutral-950">Show Details</Button>
                        <div className="flex gap-x-4">
                            <Link href="#" target="_blank" className="text-xl/none text-neutral-400">
                                <FaExternalLinkAlt />
                            </Link>
                            <Link href="#" target="_blank" className="text-xl/none text-neutral-400">
                                <FaGithub />
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
