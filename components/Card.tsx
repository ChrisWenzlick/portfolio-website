"use client";

import * as React from "react";
import clsx from "clsx";
import Image from "next/image";

export default function Card({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div className={clsx(
      "flex flex-col overflow-hidden rounded-xl",
      "bg-[var(--color-bg-surface)] text-[var(--color-text-primary)]",
      "border border-[var(--color-border-subtle)]",
      className
    )}
    {...props}
    />
  );
}

/* Subcomponents */

export function CardMedia({
  image,
  label,
  alt,
}: {
  image?: string;
  label?: string;
  alt?: string;
}) {
  return (
    <div className="relative aspect-[16/9] w-full overflow-hidden">
      {image && (
        <>
          <Image
            src={image}
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

export function CardHeader({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={clsx("px-4 pt-4", className)}
      {...props}
    />
  );
}

export function CardContent({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
 return (
  <div
    className={clsx("px-4 pt-2 flex-1", className)}
    {...props}
  />
 );
}

export function CardFooter({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={clsx(
        "px-4 pb-4 pt-3 flex flex-wrap gap-2",
        className
      )}
      {...props}
    />
  );
}