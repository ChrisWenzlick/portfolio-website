import Image from "next/image";

interface ArticleImageProps {
  src: string;
  alt?: string;
  caption?: string;
  aspectRatio?: number; // width / height, default 16/9
  maxWidth?: number; // optional maximum width in px
}

export const MDXComponents = {
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