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
    return (
        <span
            className={cn(
                "badge",
                `badge--${variant}`,
                `badge--${size}`,
                className
            )}
            {...props}
        />
    );
}