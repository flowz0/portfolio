import Image, { StaticImageData } from "next/image";
import { FaExternalLinkAlt, FaGithub } from "react-icons/fa";
import { Link } from "@nextui-org/link";
import TestImage from '@/assets/test.png'

interface ProjectProps {
    img?: string | StaticImageData;
    title: string;
    desc: string;
    site?: string;
    code?: string;
}

export default function Project({ img = TestImage, title, desc, site, code }: ProjectProps) {
    return (
        <div className='rounded-lg h-full max-w-xs sm:max-w-sm bg-neutral-800'>
            <Image
                src={img}
                alt={`${title} project image`}
                quality={90}
                className='object-cover h-48 w-full rounded-t-lg'
            />
            <div className='px-4 py-3.5 flex flex-col justify-between h-fit sm:px-4 sm:py-4'>
                <div>
                    <h4 className='text-2xl/none font-semibold tracking-wide'>{title}</h4>
                    <p className='mt-3 leading-6 tracking-wider text-neutral-300'>{desc}</p>
                </div>
                <div className="flex justify-between items-center mt-6">
                    <button type="button" className="flex self-end py-2 px-5 rounded bg-neutral-600 hover:bg-neutral-700">Show Details</button>
                    <div className="flex gap-x-3">
                        {site && (
                            <Link href={site} target="_blank" className="text-xl/none text-neutral-400 hover:text-orange-500">
                                <FaExternalLinkAlt />
                            </Link>
                        )}
                        {code && (
                            <Link href={code} target="_blank" className="text-xl/none text-neutral-400 hover:text-orange-500">
                                <FaGithub />
                            </Link>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
}
