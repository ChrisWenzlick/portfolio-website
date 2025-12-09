"use client";
import Image from "next/image";

interface CardProps {
  title: string;
  description?: string;
  tags?: string[];
  imageUrl?: string;
  bgColor?: string;
  className?: string;
  children?: React.ReactNode;
}

export default function Card({
  title,
  description,
  tags = [],
  imageUrl,
  bgColor,
  className,
  children,
}: CardProps) {
  return (
    <div
      className={
        `card rounded-xl shadow-lg p-4 flex flex-col justify-end gap-3 text-[var(--color-neutral-100)] transition-all
        hover:shadow-xl ${className}`
      }
      style={
        imageUrl
        ? {
          backgroundImage: `url(${imageUrl})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }
        : undefined
      }
    >
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/40 to-transparent pointer-events-none" />

      {/* Title */}
      <h3 className="text-lg font-semibold z-10">{title}</h3>

      {/* Description (optional, scrolls vertically) */}
      {description && (
        <div className="card-description-wrapper text-sm leading-snug">
          <div className="card-description-inner">{description}</div>
          <div className="card-description-fade bg-gradient-to-t from-black to-transparent pointer-events-none"></div>
        </div>
      )}

      {/* Tags (scroll horizontally) */}
      {tags.length > 0 && (
        <div className="card-tags-wrapper">
          <div className="card-tags-inner">
            {tags.map((tag) => (
              <span
                key={tag}
                className="card-badge inline-block px-2 py-1 text-xs rounded bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-200"
              >
                {tag}
              </span>
            ))}
          </div>
          <div className="card-tags-fade"></div>
        </div>
      )}

      {/* Additional custom content */}
      {children}
    </div>
  );
}