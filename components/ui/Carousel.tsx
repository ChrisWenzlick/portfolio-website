"use client";

import React, {
  useEffect,
  useRef,
  useState,
  ReactNode,
  useCallback,
} from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

type CarouselProps = {
  items: ReactNode[];

  aspectRatio?: number;
  maxWidth?: number;

  autoRotate?: boolean;
  autoRotateInterval?: number;

  pauseOnHover?: boolean;

  showNavBar?: boolean;
  navType?: "dots" | "thumbnails";

  radiusFactor?: number;
  navSpacing?: number;

  visibleSideCount?: number; // NEW

  className?: string;
};

export default function Carousel({
  items,
  aspectRatio = 16 / 9,
  maxWidth = 900,
  autoRotate = false,
  autoRotateInterval = 3000,
  pauseOnHover = true,
  showNavBar = true,
  navType = "dots",
  radiusFactor = 0.35,
  navSpacing = 12,
  visibleSideCount = 2,
  className = "",
}: CarouselProps) {
  const containerRef = useRef<HTMLDivElement | null>(null);

  const [width, setWidth] = useState(600);
  const [height, setHeight] = useState(340);

  // --- Ensure enough items for display ---
  const minItems = visibleSideCount * 2 + 1;
  const displayItems =
    items.length >= minItems
      ? items
      : Array.from({ length: minItems }, (_, i) => items[i % items.length]);

  const total = displayItems.length;
  const anglePerItem = 360 / total;

  const [rotation, setRotation] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  // --- Responsive ---
  useEffect(() => {
    if (!containerRef.current) return;

    const observer = new ResizeObserver(([entry]) => {
      const w = Math.min(entry.contentRect.width, maxWidth);
      setWidth(w);
      setHeight(w / aspectRatio);
    });

    observer.observe(containerRef.current);
    return () => observer.disconnect();
  }, [aspectRatio, maxWidth]);

  const radius = width * radiusFactor;

  // --- Navigation ---
  const rotateBy = useCallback(
    (steps: number) => {
      setRotation((prev) => prev + steps * anglePerItem);
    },
    [anglePerItem]
  );

  const snapToNearest = useCallback(() => {
    setRotation((prev) => {
      const snapped =
        Math.round(prev / anglePerItem) * anglePerItem;
      return snapped;
    });
  }, [anglePerItem]);

  const next = () => {
    rotateBy(-1);
    setTimeout(snapToNearest, 300);
  };

  const prev = () => {
    rotateBy(1);
    setTimeout(snapToNearest, 300);
  };

  // --- Auto rotate ---
  useEffect(() => {
    if (!autoRotate) return;
    if (pauseOnHover && isHovered) return;

    intervalRef.current = setInterval(() => {
      rotateBy(-1);
      setTimeout(snapToNearest, 300);
    }, autoRotateInterval);

    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, [autoRotate, autoRotateInterval, isHovered, pauseOnHover, rotateBy, snapToNearest]);

  // --- Pointer Drag ---
  const drag = useRef({
    startX: 0,
    lastX: 0,
    velocity: 0,
    lastTime: 0,
    dragging: false,
  });

  const onPointerDown = (e: React.PointerEvent) => {
    e.currentTarget.setPointerCapture(e.pointerId);

    drag.current = {
      startX: e.clientX,
      lastX: e.clientX,
      velocity: 0,
      lastTime: Date.now(),
      dragging: true,
    };
  };

  const onPointerMove = (e: React.PointerEvent) => {
    if (!drag.current.dragging) return;

    const now = Date.now();
    const dx = e.clientX - drag.current.lastX;
    const dt = now - drag.current.lastTime;

    const velocity = dx / dt;

    drag.current.velocity = velocity;
    drag.current.lastX = e.clientX;
    drag.current.lastTime = now;

    setRotation((prev) => prev + dx * 0.25);
  };

  const onPointerUp = (e: React.PointerEvent) => {
    e.currentTarget.releasePointerCapture(e.pointerId);

    const { velocity } = drag.current;
    drag.current.dragging = false;

    const momentum = velocity * 200;
    const steps = Math.round(momentum / 60);

    rotateBy(steps);

    // snap after motion
    setTimeout(snapToNearest, 400);
  };

  // --- Visual ---
  const getItemStyle = (index: number) => {
    const baseAngle = index * anglePerItem;
    const finalAngle = baseAngle + rotation;

    const normalized =
      ((finalAngle % 360) + 360) % 360;

    const distance = Math.min(
      Math.abs(normalized),
      Math.abs(360 - normalized)
    );

    const maxVisibleAngle =
      anglePerItem * (visibleSideCount + 0.5);

    const opacity = Math.max(
      0,
      1 - Math.pow(distance / maxVisibleAngle, 2)
    );

    const scale = 1 - Math.min(distance / 180, 1) * 0.25;

    return {
      transform: `
        rotateY(${finalAngle}deg)
        translateZ(${radius}px)
        rotateY(${-finalAngle}deg)
        scale(${scale})
      `,
      opacity,
      zIndex: Math.round(1000 - distance),
    };
  };

  const activeIndex =
    Math.round((-rotation / anglePerItem) % total + total) % total;

  // --- JSX ---
  return (
    <div ref={containerRef} className={`w-full ${className}`}>
      <div className="flex flex-col items-center w-full">
        <div
          className="relative flex items-center justify-center overflow-hidden w-full"
          style={{
            height,
            perspective: "1200px",
          }}
          onMouseEnter={() => pauseOnHover && setIsHovered(true)}
          onMouseLeave={() => pauseOnHover && setIsHovered(false)}
          onPointerDown={onPointerDown}
          onPointerMove={onPointerMove}
          onPointerUp={onPointerUp}
          onPointerLeave={onPointerUp}
        >
          {/* Left */}
          <button
            onClick={prev}
            className="absolute left-2 z-50 bg-black/30 hover:bg-black/50 text-white p-2 rounded-full"
          >
            <FaChevronLeft />
          </button>

          {/* Ring */}
          <div className="relative w-full h-full transform-3d">
            {displayItems.map((item, i) => (
              <div
                key={i}
                className="absolute inset-0 flex items-center justify-center transition-all duration-700 ease-out will-change-transform will-change-opacity select-none"
                style={getItemStyle(i)}
                draggable={false}
              >
                <div
                  className="w-[60%] h-[75%] flex items-center justify-center pointer-events-none"
                >
                  {item}
                </div>
              </div>
            ))}
          </div>

          {/* Right */}
          <button
            onClick={next}
            className="absolute right-2 z-50 bg-black/30 hover:bg-black/50 text-white p-2 rounded-full"
          >
            <FaChevronRight />
          </button>
        </div>

        {/* Nav */}
        {showNavBar && (
          <div className="flex mt-4" style={{ gap: navSpacing }}>
            {items.map((_, i) => {
              const isActive = i === activeIndex % items.length;

              return (
                <button
                  key={i}
                  onClick={() =>
                    rotateBy(activeIndex - i)
                  }
                  className={`rounded-full transition-all ${
                    isActive
                      ? "w-3 h-3 bg-white"
                      : "w-2 h-2 bg-gray-400"
                  }`}
                />
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
}