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
        <header className={cn("app-header", className)}>
            <nav className="app-header__inner">
                {/* Brand / Logo */}
                <Link href="/" className="app-header__brand">
                    CW
                </Link>

                {/* Desktop links */}
                <div className="app-header__nav-desktop">
                    {NAV_LINKS.map(({ href, label }) => (
                        <Link key={href} href={href} className="app-header__link">
                            {label}
                        </Link>
                    ))}
                    <DarkModeToggle />
                </div>

                {/* Mobile menu button */}
                <button
                    onClick={() => setOpen((prev) => !prev)}
                    className="app-header__menu-toggle"
                >
                    <span className="sr-only">Toggle menu</span>
                    <span className="app-header__hamburger" />
                </button>
            </nav>

            {/* Mobile dropdown */}
            {open && (
                <div className="app-header__mobile">
                    <div className="app-header__mobile-inner">
                        {NAV_LINKS.map(({ href, label }) => (
                            <Link
                                key={href}
                                href={href}
                                className="app-header__mobile-link"
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