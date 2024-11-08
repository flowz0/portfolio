"use client";

import { useState } from "react";

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    const buttonClasses = 'px-4 rounded-md font-medium text-neutral-300 hover:text-neutral-50 transition duration-300'

    const buttons = (
        <>
            <a href="#about">
                <button className={buttonClasses}>Home</button>
            </a>
            <a href="#projects">
                <button className={buttonClasses}>Projects</button>
            </a>
            <a href="#experience">
                <button className={buttonClasses}>Experience</button>
            </a>
            <a href="#contact">
                <button className={buttonClasses}>Contact</button>
            </a>
        </>
    )
    return (
        <nav className='bg-neutral-700 text-neutral-200 fixed w-full'>
            <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
                <div className='flex items-center justify-between h-16'>
                    <div className='flex flex-row w-full justify-between'>
                        <div className='text-xl font-bold'>
                            <a href="#about">
                                {"<BLF />"}
                            </a>
                        </div>
                        <div className='hidden md:block'>
                            <div className='flex ml-10 items-baseline space-x-2'>
                                {buttons}
                            </div>
                        </div>
                    </div>
                    <div className='md:hidden'>
                        <button onClick={() => { setIsOpen(!isOpen) }} type='button' className="fill-neutral-200">
                            <svg viewBox="0 0 100 50" width="28" height="28">
                                <rect width="100" height="10"></rect>
                                <rect y="30" width="100" height="10"></rect>
                                <rect y="60" width="100" height="10"></rect>
                            </svg>
                        </button>
                    </div>
                </div>
            </div>
            {
                isOpen && (
                    <div className="h-screen flex flex-col gap-y-4 md:hidden px-4 sm:px-6 py-2">
                        {buttons}
                    </div>
                )
            }
        </nav>
    )
}
