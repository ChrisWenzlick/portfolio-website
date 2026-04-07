"use client";

import React from "react";
import { cn } from "@/lib/utils";


// --------------------
// Types
// --------------------
type CardProps = React.HTMLAttributes<HTMLDivElement> & {
  shadow?: "sm" | "md" | "lg";
  radius?: "sm" | "md" | "lg" | "xl";
  bordered?: boolean;
  hoverable?: boolean;
};


// --------------------
// Components
// --------------------
export default function Card({
  className,
  shadow,
  radius,
  bordered = false,
  hoverable = false,
  ...props
}: CardProps) {
  return (
    <div className={cn(
      "flex flex-col overflow-hidden bg-(--color-surface) text-(--color-text)",
      shadow && `shadow-${shadow}`,
      radius && `rounded-${radius}`,
      bordered && "border border-solid border-(--color-border)",
      hoverable && "transition-shadow hover:shadow-lg",
      className
    )}
    {...props}
    />
  );
}

export function CardHeader({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) {
  return <div className={cn("p-4", className)} {...props} />;
}

export function CardTitle({ className, ...props }: React.HTMLAttributes<HTMLHeadingElement>) {
  return <h3 className={cn("text-lg font-semibold leading-5 text-(--color-text)", className)} {...props} />;
}

export function CardDescription({ className, ...props }: React.HTMLAttributes<HTMLParagraphElement>) {
  return <p className={cn("text-sm text-(--color-text-muted) line-clamp-3", className)} {...props} />;
}

export function CardContent({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) {
  return <div className={cn("px-4 pb-4", className)} {...props} />;
}

export function CardFooter({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) {
  return <div className={cn("flex flex-wrap gap-2 px-4 pb-4", className)} {...props} />;
}