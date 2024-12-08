"use client";

interface ButtonProps {
    text: string;
    submit?: boolean;
    className?: string;
    variant?: 'primary' | 'secondary';
}

export default function Button({ text, className, submit = false, variant = 'primary' }: ButtonProps) {
    const baseClass = "flex py-2 px-3.5 rounded-lg"
    const variantClasses = {
        primary: "bg-neutral-600 text-neutral-300 hover:bg-neutral-700",
        secondary: "bg-neutral-300 text-neutral-700 hover:bg-neutral-400"
    }

    return (
        <button
            type={submit ? 'submit' : 'button'}
            className={`${baseClass} ${variantClasses[variant]} ${className} `}
        >
            {text}
        </button>
    )
}
