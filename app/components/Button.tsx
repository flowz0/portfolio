"use client";

import { noto_sans } from "../fonts";

interface ButtonProps {
    text: string;
    submit?: boolean;
    className?: string;
    variant?: 'primary' | 'secondary';
}

export default function Button({ text, className, submit = false, variant = 'primary' }: ButtonProps) {
    const baseClass = "flex py-2 px-3.5 rounded-lg"
    const variantClasses = {
        primary: "bg-neutral-800 text-neutral-400 hover:bg-neutral-900",
        secondary: "bg-neutral-300 text-neutral-700 hover:bg-neutral-400"
    }

    return (
        <button
            type={submit ? 'submit' : 'button'}
            className={`${baseClass} ${variantClasses[variant]} ${className} ${noto_sans.className} active:scale-95`}
        >
            {text}
        </button>
    )
}
