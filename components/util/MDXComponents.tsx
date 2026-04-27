import Image from "next/image";
import type { ComponentPropsWithoutRef } from "react";
import { ResponsiveTable } from "components/ui/ResponsiveTable";

interface ArticleImageProps {
  src: string;
  alt?: string;
  caption?: string;
  aspectRatio?: number; // width / height, default 16/9
  maxWidth?: number; // optional maximum width in px
}

export const MDXComponents = {
  // Lists
  ul: ({ children }: ComponentPropsWithoutRef<"ul">) => (
    <ul className="list-disc pl-6 my-4 space-y-1">{children}</ul>
  ),
  ol: ({ children }: ComponentPropsWithoutRef<"ol">) => (
    <ol className="list-decimal pl-6 my-4 space-y-1">{children}</ol>
  ),
  li: ({ children }: ComponentPropsWithoutRef<"li">) => (
    <li className="leading-relaxed">{children}</li>
  ),

  // Tables
  table: ({ children }: ComponentPropsWithoutRef<"table">) => (
    <ResponsiveTable>{children}</ResponsiveTable>
  ),
  thead: ({ children }: ComponentPropsWithoutRef<"thead">) => (
    <thead className="bg-(--color-surface) border-b border-(--color-border)">{children}</thead>
  ),
  tr: ({ children }: ComponentPropsWithoutRef<"tr">) => (
    <tr className="border-b border-(--color-border) last:border-0">{children}</tr>
  ),
  th: ({ children }: ComponentPropsWithoutRef<"th">) => (
    <th className="px-4 py-2.5 text-left font-semibold">{children}</th>
  ),
  td: ({ children }: ComponentPropsWithoutRef<"td">) => (
    <td className="px-4 py-2.5">{children}</td>
  ),

  ArticleImage: ({
    src,
    alt = "",
    caption,
    aspectRatio = 9 / 16,
    maxWidth = 800,
  }: ArticleImageProps) => {
    // Calculate height/width ratio for Tailwind aspect class
    // Tailwind arbitrary aspect ratio expects height/width
    const hOverW = (1 / aspectRatio).toFixed(4);

    return (
      <div className="my-8 w-full flex flex-col items-center">
        <div
          className="relative w-full mx-auto rounded-lg"
          style={{
            maxWidth: `${maxWidth}px`,
            aspectRatio: hOverW, // use standard CSS property directly
          }}
        >
          <Image
            src={src}
            alt={alt}
            fill
            className="object-cover rounded-lg"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
        </div>
        {caption && (
          <p className="mt-2 text-sm text-muted-foreground text-center">
            {caption}
          </p>
        )}
      </div>
    );
  },
};