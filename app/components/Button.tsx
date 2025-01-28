"use client";

import { arimo } from "@/app/fonts";

interface ButtonProps {
    text: string;
    submit?: boolean;
    className?: string;
    variant?: 'primary' | 'secondary' | 'outlined' | 'animated';
}

export default function Button({ text, className, submit = false, variant = 'primary' }: ButtonProps) {
    const baseClass = "w-fit flex py-2 px-4 rounded-full"
    const variantClasses = {
        primary: "bg-teal-500 text-neutral-950 hover:bg-teal-600 active:scale-95",
        secondary: "bg-neutral-300 text-neutral-700 hover:bg-neutral-400",
        outlined: "border-0 ring-1 ring-teal-500 text-teal-500 bg-transparent hover:bg-teal-500 hover:text-neutral-950 active:scale-95",
        animated: "bg-teal-400 text-neutral-950 animate-background-pulse hover:scale-105 active:scale-95",
    }

    return (
        <button
            type={submit ? 'submit' : 'button'}
            className={`${baseClass} ${variantClasses[variant]} ${arimo.className} ${className} rounded-full font-medium leading-normal tracking-normal transition delay-100`}
        >
            {text}
        </button>
    )
}
