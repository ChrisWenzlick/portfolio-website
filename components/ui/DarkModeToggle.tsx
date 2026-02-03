"use client";
import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

export default function DarkModeToggle() {
    const [isDark, setIsDark] = useState(false);

    useEffect(() => {
        const savedTheme = localStorage.getItem("theme");
        const systemPrefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
        const shouldBeDark = savedTheme === "dark" || (!savedTheme && systemPrefersDark);

        document.documentElement.classList.toggle("dark", shouldBeDark);
        setIsDark(shouldBeDark);
    }, []);

    const toggleTheme = () => {
        const newTheme = isDark ? "light" : "dark";
        setIsDark(!isDark);
        localStorage.setItem("theme", newTheme);
        document.documentElement.classList.toggle("dark", !isDark);
    };
    
    return (
        <button
          onClick={toggleTheme}
          className={cn("theme-toggle", isDark && "theme-toggle--dark")}
          aria-label="Toggle theme"
        >
          {/* Sun icon */}
          <span className="theme-toggle__icon theme-toggle__icon--sun" aria-hidden>
            ☀️
          </span>
    
          {/* Moon icon */}
          <span className="theme-toggle__icon theme-toggle__icon--moon" aria-hidden>
            🌙
          </span>
        </button>
    );
}
    