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
    const baseStyles = cn(
        'inline-flex items-center justify-center font-semibold rounded-md transition-colors duration-150 ease-in-out no-underline cursor-pointer border-0',
        'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-(--color-primary)'
    );

    const variantStyles = {
        primary: 'bg-(--color-primary) text-(--color-primary-text) hover:bg-(--color-primary-hover)',
        outline: 'bg-transparent text-(--color-primary) border-2 border-solid border-(--color-primary) hover:bg-(--color-primary)/10',
        ghost: 'bg-transparent text-(--color-primary) hover:bg-(--color-primary)/10',
    };

    const sizeStyles = {
        sm: 'h-8 px-3 text-sm',
        md: 'h-10 px-4 text-sm',
        lg: 'h-12 px-6 text-base',
    };

    // Combine styles to form final Badge style
    const styleClasses = `${baseStyles} ${variantStyles[variant]} ${sizeStyles[size]}`;

    // Render as <Link if href exists
    if (href) {
        return (
            <Link href={href} className={cn(styleClasses, className)}>
                {props.children}
            </Link>
        );
    }

    // Otherwise, render as a <button>
    return <button className={cn(styleClasses, className)} {...props} />;
}