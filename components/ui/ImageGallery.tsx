"use client";

import Image from "next/image";
import { useRef, useState } from "react";
import { cn } from "@/lib/utils";

export interface ImageGalleryImage {
  src: string;
  alt?: string;
}

export interface ImageGalleryProps {
  images: ImageGalleryImage[];
  initialIndex?: number;
  size?: "sm" | "md" | "lg";
  enableZoom?: boolean;
  className?: string;
}

const sizeToHeight: Record<NonNullable<ImageGalleryProps["size"]>, string> = {
  sm: "h-[260px]",
  md: "h-[360px]",
  lg: "h-[480px]",
};

export default function ImageGallery({
  images,
  initialIndex = 0,
  size = "md",
  className,
}: ImageGalleryProps) {
  const [activeIndex, setActiveIndex] = useState(
    Math.min(Math.max(initialIndex, 0), images.length - 1)
  );
  const thumbnailStripRef = useRef<HTMLDivElement | null>(null);

  // Drag State
  const isDragging = useRef(false);
  const dragStartX = useRef(0);
  const scrollStartLeft = useRef(0);

  if (!images?.length) return null;

  const active = images[activeIndex];

  const scrollThumbnailsBy = (direction: "left" | "right") => {
    const el = thumbnailStripRef.current;
    if (!el) return;

    const amount = el.clientWidth * 0.8; // leave part of last/first thumbnail visible
    el.scrollBy({
      left: direction === "right" ? amount : -amount,
      behavior: "smooth",
    });
  };

  const onPointerDown = (clientX: number) => {
    const el = thumbnailStripRef.current;
    if (!el) return;
    isDragging.current = true;
    dragStartX.current = clientX;
    scrollStartLeft.current = el.scrollLeft;
  };

  const onPointerMove = (clientX: number) => {
    const el = thumbnailStripRef.current;
    
    if (!el || !isDragging.current) return;

    const dx = clientX - dragStartX.current;
    el.scrollLeft = scrollStartLeft.current - dx;
  };

  const endDrag = () => {
    isDragging.current = false;
  };

  return (
    <div className={cn("image-gallery", className)}>
      {/* Main image */}
      <div
        className={cn(
          "relative w-full overflow-hidden rounded-lg bg-[var(--color-bg-surface)]",
          sizeToHeight[size]
        )}
      >
        <Image
          src={active.src}
          alt={active.alt || ""}
          fill
          className="object-contain"
          sizes="(max-width: 768px) 100vw, 768px"
          priority
        />
      </div>

      {/* Thumbnails strip and controls */}
      {images.length > 1 && (
        <div className="mt-4 flex items-center gap-2">
          {/* Left arrow */}
          <button
            type="button"
            aria-label="Scroll thumbnails left"
            onClick={() => scrollThumbnailsBy("left")}
            className="image-gallery__thumb-arrow"
          >
            ←
          </button>

          {/* Thumbnails strip */}
          <div
            ref={thumbnailStripRef}
            className={cn(
              "image-gallery__thumb-strip",
              "relative flex gap-3 overflow-hidden px-1 py-1 select-none"
            )}
            onMouseDown={(e) => onPointerDown(e.clientX)}
            onMouseMove={(e) => onPointerMove(e.clientX)}
            onMouseUp={endDrag}
            onMouseLeave={endDrag}
            onTouchStart={(e) => onPointerDown(e.touches[0].clientX)}
            onTouchMove={(e) => onPointerMove(e.touches[0].clientX)}
            onTouchEnd={endDrag}
          >
            {images.map((img, i) => {
              const isActive = i === activeIndex;

              return (
                <button
                  key={i}
                  type="button"
                  onClick={() => setActiveIndex(i)}
                  className={cn(
                    "image-gallery__thumb",
                    "relative shrink-0 rounded-md p-1 transition",
                    isActive
                        ? "ring-2 ring-[var(--color-primary)]"
                        : "ring-1 ring-transparent hover:ring-[var(--color-border-subtle)]"
                  )}
                >
                  <div className="relative h-20 w-32 overflow-hidden rounded">
                    <Image
                      src={img.src}
                      alt={img.alt || ""}
                      fill
                      className="object-cover"
                      draggable={false}
                      sizes="128px"
                    />
                  </div>
                </button>
              );
            })}
          </div>

          {/* Right arrow */}
          <button
            type="button"
            aria-label="Scroll thumbnails right"
            onClick={() => scrollThumbnailsBy("right")}
            className="image-gallery__thumb-arrow"
          >
            →
          </button>
        </div>
      )}
    </div>
  );
}
