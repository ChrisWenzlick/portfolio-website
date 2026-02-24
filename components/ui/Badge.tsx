"use client";

import * as React from "react";
import { cn } from "@/lib/utils";

type BadgeVariant =
    "default" |
    "primary" |
    "secondary" |
    "success" |
    "warning" |
    "danger" |
    "subtle";

type BadgeSize =
    "sm" |
    "md";

export interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
    variant?: BadgeVariant;
    size?: BadgeSize;
}

export default function Badge({
    className,
    variant = "default",
    size = "sm",
    ...props
}: BadgeProps) {
    const baseStyles = 'inline-flex items-center rounded-md font-semibold leading-4 whitespace-nowrap';

    const variantStyles = {
        default: 'bg-(--color-accent) text-(--color-primary-text)',
        primary: 'bg-(--color-primary) text-(--color-primary-text)',
        secondary: 'bg-(--color-accent) text-(--color-primary-text)',
        success: 'bg-(--color-success) text-(--color-primary-text)',
        warning: 'bg-(--color-warning) text-neutral-900',
        danger: 'bg-(--color-danger) text-(--color-primary-text)',
        subtle: 'bg-(--color-surface) text-(--color-text-muted) border-2 border-solid border-(--color-border)',
    };

    const sizeStyles = {
        sm: 'text-xs py-0.5 px-2',
        md: 'text-sm py-1 px-2.5',
    };

    // Combine styles to form final Badge style
    const styleClasses = `${baseStyles} ${variantStyles[variant]} ${sizeStyles[size]}`;

    return (
        <span
            className={cn(styleClasses, className)}
            {...props}
        />
    );
}