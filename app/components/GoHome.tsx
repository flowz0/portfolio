import Link from 'next/link'
import { FaCircleArrowLeft } from 'react-icons/fa6'

export default function GoHome() {
    return (
        <Link href="/" className="mt-4 self-start font-semibold text-neutral-400 hover:text-orange-500 flex gap-x-2"><FaCircleArrowLeft />Go back</Link>
    )
}
