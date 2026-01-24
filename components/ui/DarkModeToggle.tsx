"use client";
import { useEffect, useState } from "react";

export default function DarkModeToggle() {
    const [isDark, setIsDark] = useState(false);

    useEffect(() => {
        const savedTheme = localStorage.getItem("theme");
        const systemPrefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;

        if (savedTheme === "dark" || (!savedTheme && systemPrefersDark)) {
            document.documentElement.classList.add("dark");
            setIsDark(true);
        }
        else {
            document.documentElement.classList.remove("dark");
            setIsDark(false);
        }
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
          className="w-10 h-10 top-20 rounded-full bg-accent-300 dark:bg-accent-800 flex items-center justify-center transition-all duration-500 hover:scale-105"
          aria-label="Toggle theme"
        >
          {/* Sun icon */}
          <span
            className={`flex items-center justify-center transition-all duration-700 transform
              ${isDark ? "scale-0 opacity-0 rotate-180" : "scale-100 opacity-100 rotate-0"}`}
          >
            ☀️
          </span>
    
          {/* Moon icon */}
          <span
            className={`flex items-center justify-center transition-all duration-700 transform
              ${isDark ? "scale-100 opacity-100 rotate-0" : "scale-0 opacity-0 -rotate-180"}`}
          >
            🌙
          </span>
        </button>
    );
}
    