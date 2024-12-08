import Image, { StaticImageData } from "next/image";
import { FaExternalLinkAlt, FaGithub } from "react-icons/fa";
import TestImage from '@/assets/test.png'
import Link from "next/link";
import Button from "./Button";

interface ProjectProps {
    img?: string | StaticImageData;
    title: string;
    desc: string;
    site?: string;
    code?: string;
}

export default function Project({ img = TestImage, title, desc, site, code }: ProjectProps) {
    return (
        <div className='rounded-lg h-full max-w-xs bg-neutral-900 sm:max-w-sm sm:bg-neutral-800'>
            <Image
                src={img}
                alt={`${title} project image`}
                quality={90}
                className='object-cover h-56 w-full rounded-lg sm:h-56 sm:rounded-t-lg sm:rounded-b-none'
            />
            <div className='mt-2 flex flex-col justify-between h-fit sm:mt-0 sm:p-5'>
                <div>
                    <h4 className='text-3xl/8 tracking-normal text-neutral-200'>{title}</h4>
                    <p className='mt-2 text-base/6 tracking-wide text-neutral-400'>{desc}</p>
                </div>
                <div className="flex justify-between items-baseline">
                    <Button className="mt-4" text="Show Details" />
                    <div className="flex gap-x-2">
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
