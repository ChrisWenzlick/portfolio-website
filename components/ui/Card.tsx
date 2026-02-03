"use client";

import React from "react";
import Image from "next/image";
import { cn } from "@/lib/utils";


// --------------------
// Types
// --------------------
type CardProps = React.HTMLAttributes<HTMLDivElement> & {
  shadow?: "none" | "sm" | "md" | "lg";
  radius?: "none" | "sm" | "md" | "lg" | "xl";
  bordered?: boolean;
  hoverable?: boolean;
};


// --------------------
// Components
// --------------------
export default function Card({
  className,
  shadow = "sm",
  radius = "md",
  bordered = false,
  hoverable = false,
  ...props
}: CardProps) {
  return (
    <div className={cn(
      "card",
      `card--shadow-${shadow}`,
      `card--radius-${radius}`,
      bordered && "card--bordered",
      hoverable && "card--hoverable",
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
    <div className="card-media">
      {src && (
        <>
          <Image
            src={src}
            alt={alt ?? label ?? ""}
            fill
            className="card-media__image"
            sizes="(max-width: 768px) 100vw,
                   (max-width: 1200px) 50vw,
                   32vw"
          />

          {/* Fade to dark at the bottom */}
          <div className="card-media__overlay" />
        </>
      )}

      {label && (
        <span className="card-media__label">{label}</span>
      )}
    </div>
  );
}

export function CardHeader({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) {
  return <div className={cn("card-header", className)} {...props} />;
}

export function CardTitle({ className, ...props }: React.HTMLAttributes<HTMLHeadingElement>) {
  return <h3 className={cn("card-title", className)} {...props} />;
}

export function CardDescription({ className, ...props }: React.HTMLAttributes<HTMLParagraphElement>) {
  return <p className={cn("card-description", className)} {...props} />;
}

export function CardContent({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) {
  return <div className={cn("card-content", className)} {...props} />;
}

export function CardFooter({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) {
  return <div className={cn("card-footer", className)} {...props} />;
}