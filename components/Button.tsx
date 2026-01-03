"use client";

import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import clsx from "clsx"

type ButtonVariant =
    "primary" |
    "secondary" |
    "ghost" |
    "destructive"

type ButtonSize =
    "sm" |
    "md" |
    "lg"

const buttonVariants: Record<ButtonVariant, string> = {
    primary:
        "bg-[var(--color-primary)] text-[var(--color-primary-text)] hover:opacity-90",
    secondary:
        "bg-[var(--color-bg)] text-[var(--color-text-primary)] hover:opacity-90",
    ghost:
        "bg-transparent text-[var(--color-text-primary)] hover:bg-[var(--color-bg)]",
    destructive:
        "bg-[var(--color-danger)] text-[var(--color-text-primary)] hover:opacity-90",
};

const buttonSizes: Record<ButtonSize, string> = {
    sm: "h-8 px-3 text-sm",
    md: "h-10 px-4 text-sm",
    lg: "h-12 px-6 text-base",
};

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: ButtonVariant
    size?: ButtonSize
    asChild?: boolean
}

export default function Button({
    className,
    variant = "primary",
    size = "md",
    asChild = false,
    ...props
}: ButtonProps) {
    const Comp = asChild ? Slot : "button"

    return (
        <Comp
            className={clsx(
                "inline-flex items-center justify-center gap-2 rounded-md font-medium transition-colors",
                "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring",
                "disabled:pointer-events-none disabled:opacity-50",
                buttonVariants[variant],
                buttonSizes[size],
                className
            )}
            {...props}
        />
    )
}