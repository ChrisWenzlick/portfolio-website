import type { Config } from "tailwindcss";

const config: Config = {
    content: [
        "./app/**/*.{js,ts,jsx,tsx,mdx}",
        "./components/**/*.{js,ts,jsx,tsx,mdx}",
        "./content/**/*.{md,mdx,json}",
    ],
    theme: {
        extend: {
            colors: {
                brand: {
                    DEFAULT: "#2563eb", // Primary brand color
                    light: "#3b82f6",
                    dark: "#1e40af",
                },
                accent: {
                    DEFAULT: "#f59e0b", // Secondary/accent color
                    light: "#fbbf24",
                    dark: "#b45309",
                },
                neutral: {
                    50: "#fafafa",
                    100: "#f5f5f5",
                    200: "#e5e5e5",
                    300: "#d4d4d4",
                    400: "#a3a3a3",
                    500: "#737373",
                    600: "#525252",
                    700: "#404040",
                    800: "#262626",
                    900: "#171717",
                },
            },
            fontFamily: {
                sans: ["Inter", "ui-sans-serif", "system-ui"],
                serif: ["Merriweather", "ui_serif", "Georgia"],
                mono: ["Fira Code", "ui-monospace", "SFMono-Regular"],
            },
            spacing: {
                "section": "4rem", // for consistent vertical spacing
                "content": "2rem", // padding for main containers
            },
            borderRadius: {
                "x1": "1rem",
                "2x1": "1.5rem",
            },
        },
    },
    plugins: [],
};

export default config;