"use client";

import { useEffect, useState } from "react";
import { THEMES, saveTheme, applyTheme, getSavedTheme } from "@/utils/theme";

const themePreview = {
  dark: "#00F5D4",
  light: "#ffffff",
  nord: "#2e3440",
  lavender: "#8b5cf6",
};

export default function ThemeSwitcher() {
  const [activeTheme, setActiveTheme] = useState("dark");

  // مقدار اولیه
  useEffect(() => {
    const saved = getSavedTheme();
    if (saved) {
      setActiveTheme(saved);
      applyTheme(saved);
    }
  }, []);

  const handleThemeChange = (theme) => {
    setActiveTheme(theme);
    saveTheme(theme);
    applyTheme(theme);
  };

  return (
    <div className="fixed bottom-5 right-5 z-50 p-3 rounded-xl bg-secondary/50 backdrop-blur-md shadow-lg border border-white/10">

      <div className="flex flex-col gap-3">

        <span className="text-xs font-medium text-text/70 text-center">
          تغییر تم
        </span>

        <div className="flex flex-col gap-2">

          {THEMES.map((t) => (
            <button
              key={t}
              onClick={() => handleThemeChange(t)}
              className={`w-9 h-9 rounded-full border transition-all duration-300
                ${activeTheme === t ? "scale-110 border-primary shadow-glow-soft" : "border-white/20"}
              `}
              style={{
                background: themePreview[t],
              }}
              title={t}
            />
          ))}

        </div>
      </div>

    </div>
  );
}
