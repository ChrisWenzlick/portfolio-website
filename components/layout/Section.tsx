import React from "react"
import { cn } from "@/lib/utils";

export default function Section({
    className,
    ...props
}: React.HTMLAttributes<HTMLElement>) {
    return (
        <section
            className={cn(
                "w-full",
                "py-16 sm:py-20 lg:py-24",
                className
            )}
            {...props}
        />
    );
}

export function SectionHeading({
    className,
    ...props
}: React.HTMLAttributes<HTMLHeadingElement>) {
    return (
        <h2
            className={cn(
                "text-2xl sm:text-3xl font-bold tracking-tight mb-6",
                className
            )}
            {...props}
        />
    );
}