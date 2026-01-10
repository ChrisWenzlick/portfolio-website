"use client";

import React from "react";
import Image from "next/image";
import { cn } from "@/lib/utils";
import { cva, type VariantProps } from "class-variance-authority";


// --------------------
// Variants
// --------------------
const cardStyles = cva(
  "flex flex-col bg-white text-foreground overflow-hidden", // base style
  {
    variants: {
      shadow: {
        none: "shadow-none",
        sm: "shadow-sm",
        md: "shadow",
        lg: "shadow-lg",
      },
      radius: {
        none: "rounded-none",
        sm: "rounded-sm",
        md: "rounded-md",
        lg: "rounded-lg",
        xl: "rounded-xl",
      },
      bordered: {
        true: "border border-gray-200",
        false: "",
      },
      hoverable: {
        true: "transition-shadow hover:shadow-lg",
        false: "",
      },
    },
    defaultVariants: {
      shadow: "sm",
      radius: "md",
      bordered: false,
      hoverable: false,
    },
  }
);


// --------------------
// Types
// --------------------
type CardVariantProps = VariantProps<typeof cardStyles>;
type CardProps = React.HTMLAttributes<HTMLDivElement> & CardVariantProps;


// --------------------
// Components
// --------------------
export default function Card({ className, shadow, radius, bordered, hoverable, ...props }: CardProps) {
  return (
    <div className={cn(cardStyles({ shadow, radius, bordered, hoverable }), className)}
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
    <div className="relative aspect-[16/9] w-full overflow-hidden">
      {src && (
        <>
          <Image
            src={src}
            alt={alt ?? label ?? ""}
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw,
                   (max-width: 1200px) 50vw,
                   32vw"
          />

          {/* Fade to dark at the bottom */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
        </>
      )}

      {label && (
        <span className="absolute left-3 top-3 rounded-md bg-black/70 px-2 py-1 text-xs text-white">
          {label}
        </span>
      )}
    </div>
  );
}

export function CardHeader({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={cn("p-4", className)}
      {...props}
    />
  );
}

export function CardTitle({ className, ...props }: React.HTMLAttributes<HTMLHeadingElement>) {
  return <h3 className={cn("text-lg font-semibold leading-none", className)} {...props} />;
}

export function CardDescription({ className, ...props }: React.HTMLAttributes<HTMLParagraphElement>) {
  return <p className={cn("text-sm text-muted-foreground", className)} {...props} />;
}

export function CardContent({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) {
  return <div className={cn("p-4 pt-0", className)} {...props} />;
}

export function CardFooter({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) {
  return <div className={cn("p-4 pt-0", className)} {...props} />;
}