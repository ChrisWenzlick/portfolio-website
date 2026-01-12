"use client";

import * as React from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { cva, type VariantProps } from "class-variance-authority";

const buttonStyles = cva(
    "inline-flex items-center justify-center font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2",
    {
        variants: {
            variant: {
                primary:
                    "bg-[var(--color-primary)] text-white hover:bg-[var(--color-primary-hover)]",
                outline:
                    "border border-[var(--color-primary)] text-[var(--color-primary)] hover:bg-[var(--color-primary)/10]",
                ghost:
                    "text-[var(--color-primary)] hover:bg-[var(--color-primary)/10]",
            },
            size: {
                sm: "h-8 px-3 text-sm",
                md: "h-10 px-4 text-sm",
                lg: "h-12 px-6 text-base",
            },
        },
        defaultVariants: {
            variant: "primary",
            size: "md",
        },
    }
);

interface ButtonProps
    extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonStyles> {
        href?: string;
}

export default function Button({
    href,
    variant,
    size,
    className,
    ...props
}: ButtonProps) {
    const classes = cn(buttonStyles({ variant, size }), className);

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