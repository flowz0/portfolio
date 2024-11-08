export default function Button({ variant, children }) {
    const baseClasses = "px-8 py-2 rounded-md font-medium";

    const variantClasses = {
        primary: "bg-neutral-600 hover:bg-neutral-700 active:bg-neutral-600 focus:outline-none focus:ring focus:ring-sky-500",
        secondary: "bg-neutral-100 text-neutral-800 hover:bg-neutral-200 active:bg-neutral-100 focus:outline-none focus:ring focus:ring-sky-500"
    };

    return (
        <button className={`${baseClasses} ${variantClasses[variant]}`}>
            {children}
        </button>
    );
}