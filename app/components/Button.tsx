"use client";

interface ButtonProps {
    text: string;
    submit?: boolean;
    className?: string;
}


export default function Button({ text, className, submit = false }: ButtonProps) {
    
    return (
        <button
            type={submit ? 'submit' : 'button'}
            className={`${className} flex py-2 px-5 rounded bg-neutral-600 hover:bg-neutral-700`}
        >
            {text}
        </button>
    )
}
