"use client";

import { noto_sans } from "../fonts";

interface ButtonProps {
    text: string;
    submit?: boolean;
    className?: string;
    variant?: 'primary' | 'secondary' | 'animated';
}

export default function Button({ text, className, submit = false, variant = 'primary' }: ButtonProps) {
    const baseClass = "flex py-2 px-3.5 rounded-lg"
    const variantClasses = {
        primary: "bg-gradient-to-r from-cyan-600 to-teal-700 text-neutral-300",
        secondary: "bg-neutral-300 text-neutral-700 hover:bg-neutral-400",
        animated: "bg-gradient-to-r from-cyan-600 to-teal-700 animate-background-pulse"
    }

    return (
        <button
            type={submit ? 'submit' : 'button'}
            className={`${baseClass} ${variantClasses[variant]} ${className} ${noto_sans.className} transition ease-in-out delay-75 duration-300 hover:scale-105 hover:-translate-y-1 active:scale-95`}
        >
            {text}
        </button>
    )
}
