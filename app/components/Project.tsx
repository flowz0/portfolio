import Image, { StaticImageData } from "next/image";
import { FaExternalLinkAlt, FaGithub, FaCalendarAlt } from "react-icons/fa";
import TestImage from '@/assets/test.png'
import Link from "next/link";

interface ProjectProps {
    img?: string | StaticImageData;
    title: string;
    desc: string;
    date: string;
    site?: string;
    code?: string;
    showFullDescription?: boolean;
}

export default function Project({ img = TestImage, title, desc, date, site, code, showFullDescription = false }: ProjectProps) {
    // Function to form date
    const formatDate = (dateString: string) => {
        const options: Intl.DateTimeFormatOptions = { year: 'numeric', month: 'long', day: 'numeric' };
        return new Date(dateString).toLocaleDateString(undefined, options);
    };

    // const projectId = title.toLowerCase().replace(/\s+/g, '-');

    const defaultProjectDesc = "mt-2 text-base/6 tracking-wider text-neutral-400";

    return (
        <div className='rounded-lg h-full max-w-sm bg-neutral-900 md:bg-neutral-800'>
            <Image
                src={img}
                alt={`${title} project image`}
                quality={90}
                className='object-cover h-48 w-full rounded-lg sm:h-56 sm:rounded-t-lg sm:rounded-b-none'
            />
            <div className='mt-2 flex flex-col justify-between h-full md:mt-0 md:py-3.5 md:px-3'>
                <div>
                    <h4 className='text-2xl/none text-neutral-300'>{title}</h4>
                    {showFullDescription ? (
                        <p className={`${defaultProjectDesc}`}>{desc}</p>
                    ) : (
                        <p className={`line-clamp-3 ${defaultProjectDesc}`}>{desc}</p>
                    )}
                    <p className="mt-5 flex items-center text-sm/none tracking-wide text-neutral-400">
                        <FaCalendarAlt className="mr-2" />
                        {formatDate(date)}
                    </p>
                </div>
                <div className="flex justify-between items-center">
                    <Link href="/projects">
                        <button 
                            type="button" 
                            className="mt-4 flex py-2 px-3.5 rounded-lg cursor-not-allowed bg-neutral-600 text-neutral-300 hover:bg-neutral-700"
                            disabled
                        >
                            Show details
                        </button>
                    </Link>
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
