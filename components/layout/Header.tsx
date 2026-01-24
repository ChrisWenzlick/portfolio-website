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

export default function Header({
    className,
}: React.HTMLAttributes<HTMLElement>) {
    const [open, setOpen] = useState(false);

    return (
        <header
            className={cn(
                "sticky top-0 z-50 w-full border-b bg-background/80 backdrop-blur-md text-foreground",
                className
            )}
        >
            <nav className="mx-auto flex h-14 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
                {/* Brand / Logo */}
                <Link href="/" className="text-xl font-bold">
                    CW
                </Link>

                {/* Desktop links */}
                <div className="hidden md:flex items-center gap-6">
                    {NAV_LINKS.map(({ href, label }) => (
                        <Link
                            key={href}
                            href={href}
                            className="text-sm font-medium hover:text-primary transition-colors"
                        >
                            {label}
                        </Link>
                    ))}
                    <DarkModeToggle />
                </div>

                {/* Mobile menu button */}
                <button
                    onClick={() => setOpen((prev) => !prev)}
                    className="md:hidden inline-flex items-center justify-center p-2 rounded hover:bg-muted"
                >
                    <span className="sr-only">Toggle menu</span>
                    <div className="h-4 w-6 flex flex-col justify-between">
                        <span className="block h-0.5 bg-current"></span>
                        <span className="block h-0.5 bg-current"></span>
                        <span className="block h-0.5 bg-current"></span>
                    </div>
                </button>
            </nav>

            {/* Mobile dropdown */}
            {open && (
                <div className="md:hidden border-t bg-background shadow-sm">
                    <div className="px-4 py-2 space-y-2">
                        {NAV_LINKS.map(({ href, label }) => (
                            <Link
                                key={href}
                                href={href}
                                className="block py-1 text-sm font-medium hover:text-primary transition-colors"
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