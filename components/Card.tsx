"use client";

interface CardProps {
  children: React.ReactNode;
  className?: string;
  bgColor?: string;
}

export default function Card({
  children,
  className,
  bgColor = "var(--color-surface)",
}: CardProps) {
  return (
    <article
      className={`
        flex flex-col
        rounded-xl
        overflow-hidden
        shadow-sm
        transition-all duration-200
        hover:-translate-y-1
        hover:shadow-md
        ${className}
      `}
      style={{ backgroundColor: bgColor }}
    >
      {children}
    </article>
  );
}