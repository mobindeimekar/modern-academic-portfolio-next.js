export default function Button({
    onClick,
    className = "",
    type = "button",
    children,
    variant = "primary",
}) {

    const variants = {
        primary:
            "bg-primary text-black hover:shadow-glow-strong hover:bg-secondary hover:text-primary border cursor-pointer",

        secondary:
            "bg-secondary text-primary hover:shadow-glow-strong",

        ghost:
            "border border-primary hover:shadow-glow-strong text-primary hover:bg-primary hover:text-black cursor-pointer",
    };

    const baseClass =
        "px-5 py-2.5 rounded-md text-sm font-medium transition-all duration-300 flex items-center justify-center w-fit";

    return (
        <button
            type={type}
            onClick={onClick}
            className={`${baseClass} ${variants[variant]} ${className}`}
        >
            {children}
        </button>
    );
}
