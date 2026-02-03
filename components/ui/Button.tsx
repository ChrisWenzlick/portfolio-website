"use client";

import * as React from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";

type ButtonVariant = "primary" | "outline" | "ghost";
type ButtonSize = "sm" | "md" | "lg";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    href?: string;
    variant?: ButtonVariant;
    size?: ButtonSize;
}

export default function Button({
    href,
    variant = "primary",
    size = "md",
    className,
    ...props
}: ButtonProps) {
    const classes = cn(
        "btn",
        `btn--${variant}`,
        `btn--${size}`,
        className
    );

    // Render as <Link if href exists
    if (href) {
        return (
            <Link href={href} className={classes}>
                {props.children}
            </Link>
        );
    }

    // Otherwise, render as a <button>
    return <button className={classes} {...props} />;
}