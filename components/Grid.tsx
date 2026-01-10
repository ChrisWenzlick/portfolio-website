import React from "react";
import { cn } from "@/lib/utils"
import { propagateServerField } from "next/dist/server/lib/render-server";

export default function Grid({
    className,
    ...props
}: React.HTMLAttributes<HTMLDivElement>) {
    return (
        <div
            className={cn(
                "grid gap-6",
                // Responsive columns
                "grid-cols-1 sm:grid-cols-2 lg:grid-cols-3",
                // Equal heights via align-stretch
                "items-stretch",
                className
            )}
            {...props}
        />
    );
}