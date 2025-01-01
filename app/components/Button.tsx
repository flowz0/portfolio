"use client";

import { arimo } from "@/app/fonts";

interface ButtonProps {
    text: string;
    submit?: boolean;
    className?: string;
    variant?: 'primary' | 'secondary' | 'outlined' | 'animated';
}

export default function Button({ text, className, submit = false, variant = 'primary' }: ButtonProps) {
    const baseClass = "w-fit flex py-2 px-3.5 rounded-lg"
    const variantClasses = {
        primary: "bg-gradient-to-r from-neutral-700 to-neutral-800 inline-block text-neutral-400",
        secondary: "bg-neutral-300 text-neutral-700 hover:bg-neutral-400",
        outlined: "border-0 ring-2 ring-neutral-700 text-neutral-500 hover:bg-neutral-700 hover:text-neutral-300 active:scale-95",
        animated: "bg-teal-400 text-neutral-950 animate-background-pulse hover:scale-105 active:scale-95",
    }

    return (
        <button
            type={submit ? 'submit' : 'button'}
            className={`${baseClass} ${variantClasses[variant]} ${arimo.className} ${className} font-bold leading-normal tracking-normal transition ease-in-out delay-75 duration-200`}
        >
            {text}
        </button>
    )
}
