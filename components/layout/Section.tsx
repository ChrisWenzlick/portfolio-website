import React from "react"
import { cn } from "@/lib/utils";

export default function Section({
    className,
    ...props
}: React.HTMLAttributes<HTMLElement>) {
    return (
        <section
            className={cn("section", className)}
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
            className={cn("section-heading", className)}
            {...props}
        />
    );
}