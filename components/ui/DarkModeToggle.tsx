"use client";
import { useEffect, useState } from "react";
import Moon from "components/icons/svg/moon.svg";
import Sun from "components/icons/svg/sun.svg";

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
          className="w-10 h-10 rounded-full inline-flex items-center justify-center bg-(--color-primary-contrast) transition-[transform,background-color] duration-200 ease-in-out relative hover:scale-105"
          aria-label="Toggle theme"
        >
          {/* Sun icon */}
          <Sun className="absolute flex items-center justify-center size-5 transition-all duration-700 ease-in-out text-(--primary-color) transform scale-100 rotate-0 opacity-100 dark:scale-0 dark:rotate-180 dark:opacity-0" aria-hidden />
    
          {/* Moon icon */}
          <Moon className="absolute flex items-center justify-center size-5 transition-all duration-700 ease-in-out text-(--primary-color) transform scale-0 -rotate-180 opacity-0 dark:scale-100 dark:rotate-0 dark:opacity-100" aria-hidden />
        </button>
    );
}
    