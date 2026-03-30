"use client"

import React, {
  useCallback,
  useEffect,
  useRef,
  useState,
  Children,
} from "react"
import useEmblaCarousel from "embla-carousel-react"
import { FaChevronLeft, FaChevronRight } from "react-icons/fa"

type ScaleCarouselProps = {
  children: React.ReactNode
  autoPlayInterval?: number
}

export default function ScaleCarousel({
  children,
  autoPlayInterval,
}: ScaleCarouselProps) {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: true,
    align: "center",
  })

  const [selectedIndex, setSelectedIndex] = useState(0)
  const [scrollSnaps, setScrollSnaps] = useState<number[]>([])

  const slideRefs = useRef<(HTMLDivElement | null)[]>([])

  const slides = Children.toArray(children)

  const scrollPrev = useCallback(() => {
    emblaApi?.scrollPrev()
  }, [emblaApi])

  const scrollNext = useCallback(() => {
    emblaApi?.scrollNext()
  }, [emblaApi])

  const scrollTo = useCallback(
    (index: number) => emblaApi?.scrollTo(index),
    [emblaApi]
  )

  const onSelect = useCallback(() => {
    if (!emblaApi) return
    setSelectedIndex(emblaApi.selectedScrollSnap())
  }, [emblaApi])

  const applyScale = useCallback(() => {
    if (!emblaApi) return

    const engine = emblaApi.internalEngine()
    const scrollProgress = emblaApi.scrollProgress()
    const snaps = emblaApi.scrollSnapList()

    snaps.forEach((snap, index) => {
      let diffToTarget = snap - scrollProgress

      if (engine.options.loop) {
        engine.slideLooper.loopPoints.forEach((loopItem) => {
          const target = loopItem.target()

          if (index === loopItem.index && target !== 0) {
            const sign = Math.sign(target)

            if (sign === -1) {
              diffToTarget = snap - (1 + scrollProgress)
            }
            if (sign === 1) {
              diffToTarget = snap + (1 - scrollProgress)
            }
          }
        })
      }

      const absDiff = Math.abs(diffToTarget)

      const scale = Math.max(0.85, 1 - absDiff * 0.5)
      const opacity = Math.max(0.5, scale)

      const slide = slideRefs.current[index]
      if (slide) {
        slide.style.transform = `scale(${scale})`
        slide.style.opacity = `${opacity}`
      }
    })
  }, [emblaApi])

  useEffect(() => {
    if (!emblaApi) return

    setScrollSnaps(emblaApi.scrollSnapList())
    onSelect()
    applyScale()

    emblaApi.on("select", onSelect)
    emblaApi.on("scroll", applyScale)
    emblaApi.on("reInit", () => {
      setScrollSnaps(emblaApi.scrollSnapList())
      applyScale()
    })
  }, [emblaApi, onSelect, applyScale])

  {/* Autoplay */}
  const[isHovered, setIsHovered] = useState(false)
  useEffect(() => {
    if (!emblaApi || !autoPlayInterval) return
    const interval = setInterval(() => {
      if (!isHovered)
        emblaApi.scrollNext()
    }, autoPlayInterval)

    return () => clearInterval(interval)
  }, [emblaApi, autoPlayInterval, isHovered])

  return (
    <div
      className="w-full max-w-6xl mx-auto"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Carousel */}
      <div className="relative">
        <div className="overflow-hidden" ref={emblaRef}>
          <div className="flex">
            {slides.map((child, index) => (
              <div
                key={index}
                className="
                  flex-[0_0_70%]
                  sm:flex-[0_0_60%]
                  md:flex-[0_0_45%]
                  lg:flex-[0_0_30%]
                  px-3 sm:px-4
                "
              >
                <div
                  ref={(el) => {
                    slideRefs.current[index] = el
                  }}
                  className="transition-transform duration-200 ease-out will-change-transform"
                >
                  {child}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Arrows */}
        <button
          onClick={scrollPrev}
          className="
            absolute left-2 sm:left-0
            top-1/2 -translate-y-1/2
            z-10 bg-white/80 hover:bg-white
            rounded-full p-2 shadow
          "
        >
          <FaChevronLeft />
        </button>

        <button
          onClick={scrollNext}
          className="
            absolute right-2 sm:right-0
            top-1/2 -translate-y-1/2
            z-10 bg-white/80 hover:bg-white
            rounded-full p-2 shadow
          "
        >
          <FaChevronRight />
        </button>
      </div>

      {/* Dots */}
      <div className="flex justify-center mt-4 gap-2">
        {scrollSnaps.map((_, index) => (
          <button
            key={index}
            onClick={() => scrollTo(index)}
            className={`cursor-pointer w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full transition ${
              index === selectedIndex
                ? "bg-black"
                : "bg-gray-300"
            }`}
          />
        ))}
      </div>
    </div>
  )
}