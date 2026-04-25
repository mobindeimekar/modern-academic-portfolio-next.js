export const THEMES = ["dark", "light", "nord", "lavender"];

// ذخیره در لوکال‌استوریج
export function saveTheme(theme) {
    if (typeof window === "undefined") return;
    localStorage.setItem("theme", theme);
}

// گرفتن مقدار تم
export function getSavedTheme() {
    if (typeof window === "undefined") return null;
    return localStorage.getItem("theme");
}

// اعمال تم به html
export function applyTheme(theme) {
    if (typeof document === "undefined") return;
    document.documentElement.setAttribute("data-theme", theme);
}
