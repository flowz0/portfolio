"use client";

import { noto_sans } from "../fonts";

interface ButtonProps {
    text: string;
    submit?: boolean;
    className?: string;
    variant?: 'primary' | 'secondary' | 'outlined' | 'animated';
}

export default function Button({ text, className, submit = false, variant = 'primary' }: ButtonProps) {
    const baseClass = "flex py-2 px-3.5 rounded-lg"
    const variantClasses = {
        primary: "bg-gradient-to-r from-cyan-600 to-teal-700 text-neutral-300",
        secondary: "bg-neutral-300 text-neutral-700 hover:bg-neutral-400",
        outlined: "border-2 border-neutral-600 text-neutral-500 hover:bg-neutral-600 hover:text-neutral-400",
        animated: "bg-gradient-to-r from-cyan-500 to-teal-600 animate-background-pulse"
    }

    return (
        <button
            type={submit ? 'submit' : 'button'}
            className={`${baseClass} ${variantClasses[variant]} ${className} ${noto_sans.className} font-semibold tracking-normal transition ease-in-out delay-75 duration-300 hover:scale-105 active:scale-95`}
        >
            {text}
        </button>
    )
}
