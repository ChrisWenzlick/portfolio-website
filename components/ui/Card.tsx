"use client";

import React from "react";
import Image from "next/image";
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

export function CardMedia({
  src,
  label,
  alt,
}: {
  src?: string;
  label?: string;
  alt?: string;
}) {
  return (
    <div className="relative w-full aspect-video overflow-hidden">
      {src && (
        <>
          <Image
            src={src}
            alt={alt ?? label ?? ""}
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />

          {/* Fade to dark at the bottom */}
          <div className="absolute inset-0 bg-linear-to-t from-black/60 to-transparent" />
        </>
      )}

      {label && (
        <span className="absolute top-3 left-3 py-1 px-2 rounded-md bg-black/70 text-white text-xs">{label}</span>
      )}
    </div>
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