'use client'

export default function ThemeButton() {
    <button
        onClick={() => {
            const themes = ["light", "nord", "lavender"];
            const current = document.documentElement.getAttribute("data-theme");
            const next = themes[(themes.indexOf(current) + 1) % themes.length];
            document.documentElement.setAttribute("data-theme", next);
        }}
        className="z-10 bottom-4 right-4 p-3 rounded-full bg-secondary text-primary shadow-lg"
    >
        
    </button>
}