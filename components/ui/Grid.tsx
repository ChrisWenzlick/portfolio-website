import React from "react";
import { cn } from "@/lib/utils"

interface GridProps extends React.HTMLAttributes<HTMLDivElement> {
    columns?: "auto" | "2" | "3" | "4";
    gap?: "sm" | "md" | "lg";
}

export default function Grid({
    className,
    columns = "auto",
    gap = "md",
    ...props
}: GridProps) {
    return (
        <div
            className={cn(
                "grid",
                `grid--cols-${columns}`,
                `grid--gap-${gap}`,
                className
            )}
            {...props}
        />
    );
}