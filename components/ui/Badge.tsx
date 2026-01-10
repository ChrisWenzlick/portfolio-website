"use client";

import * as React from "react";
import clsx from "clsx";

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

const badgeVariants: Record<BadgeVariant, string> = {
    default:
        "bg-[var(--color-accent)] text-[var(--color-primary-text)]",
    primary:
        "bg-[var(--color-primary)] text-[var(--color-primary-text)]",
    secondary:
        "bg-[var(--color-accent)] text-[var(--color-primary-text)]",
    success:
        "bg-[var(--color-primary)] text-[var(--color-primary-text)]",
    warning:
        "bg-[var(--color-accent)] text-[var(--color-primary-text)]",
    danger:
        "bg-[var(--color-primary)] text-[var(--color-primary-text)]",
    subtle:
        "bg-[var(--color-accent)] text-[var(--color-primary-text)]",
};

const badgeSizes: Record<BadgeSize, string> = {
    sm: "text-xs px-2 py-0.5",
    md: "text-sm px-2.5 py-1",
};

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
    return (
        <span
            className={clsx(
                "inline-flex items-center rounded-md font-medium leading-none",
                badgeVariants[variant],
                badgeSizes[size],
                className
            )}
            {...props}
        />
    );
}