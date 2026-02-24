"use client";

import Link from "next/link";
import { cn } from "@/lib/utils";
import { useState } from "react";
import DarkModeToggle from "../ui/DarkModeToggle";

const NAV_LINKS = [
    { href: "/", label: "Home" },
    { href: "/projects", label: "Projects" },
    { href: "/skills", label: "Skills" },
    { href: "/contact", label: "Contact" },
];

export default function Header({ className }: React.HTMLAttributes<HTMLElement>) {
    const [open, setOpen] = useState(false);

    return (
        <header className={cn(
            "sticky top-0 z-50 w-full border-b border-solid border-(--color-border)",
            "bg-(--color-primary)/80 backdrop-blur-sm text-(--color-text)",
            className
        )}>
            <nav className="mx-auto flex h-14 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
                {/* Brand / Logo */}
                <Link href="/" className="text-xl font-bold flex items-center justify-center rounded-(--radius-lg) h-full cursor-pointer px-4 transition-colors hover:bg-(--color-primary-contrast) hover:text-(--color-primary)">
                    CW
                </Link>

                {/* Desktop links */}
                <div className="hidden items-center gap-6 md:flex">
                    {NAV_LINKS.map(({ href, label }) => (
                        <Link key={href} href={href} className="text-sm font-medium flex items-center justify-center rounded-(--radius-lg) h-full cursor-pointer px-4 transition-colors duration-200 ease-in-out hover:bg-(--color-primary-contrast) hover:text-(--color-primary)">
                            {label}
                        </Link>
                    ))}
                    <DarkModeToggle />
                </div>

                {/* Mobile menu button */}
                <button
                    onClick={() => setOpen((prev) => !prev)}
                    className="inline-flex items-center justify-center p-2 rounded-md hover:bg-(--color-surface) md:hidden"
                >
                    <span className="sr-only">Toggle menu</span>
                    <div className="h-4 w-6 flex flex-col justify-between">
                        <span className="block h-0.5 bg-current" />
                        <span className="block h-0.5 bg-current" />
                        <span className="block h-0.5 bg-current" />
                    </div>
                </button>
            </nav>

            {/* Mobile dropdown */}
            {open && (
                <div className="border-t border-(--color-border) border-solid bg-(--color-bg) shadow-sm md:hidden">
                    <div className="px-4 py-2 flex flex-col gap-2">
                        {NAV_LINKS.map(({ href, label }) => (
                            <Link
                                key={href}
                                href={href}
                                className="block py-1 text-sm font-medium transition-colors duration-200 ease-in-out hover:text-(--color-primary)"
                                onClick={() => setOpen(false)}
                            >
                                {label}
                            </Link>
                        ))}
                        <DarkModeToggle />
                    </div>
                </div>
            )}
        </header>
    );
}