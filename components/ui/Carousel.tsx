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
    slideAspectRatio?: string
    slideMaxHeight?: number
}

export default function ScaleCarousel({
    children,
    autoPlayInterval,
    slideAspectRatio,
    slideMaxHeight,
}: ScaleCarouselProps) {
    const rawSlides = Children.toArray(children)

    // --- Single element: render directly, sized to its natural dimensions ---
    if (rawSlides.length === 1) {
        return (
            <div className="w-full flex justify-center">
                <div
                    className="rounded-lg overflow-hidden shadow-md ring-1 ring-black/10"
                    style={{
                        ...(slideAspectRatio && { aspectRatio: slideAspectRatio }),
                        ...(slideMaxHeight && { maxHeight: `${slideMaxHeight}px` }),
                    }}
                >
                    {rawSlides[0]}
                </div>
            </div>
        )
    }

    // Embla's loop engine needs enough slides to fill more than the visible area.
    // Duplicate until we have at least 6, so centering and looping work reliably
    // regardless of how many real slides exist. Dots still reflect rawSlides.length.
    const MIN_SLIDES = 6
    const slides =
        rawSlides.length < MIN_SLIDES
            ? Array.from({ length: MIN_SLIDES }, (_, i) => rawSlides[i % rawSlides.length])
            : rawSlides

    return (
        <Carousel
            slides={slides}
            dotCount={rawSlides.length}
            autoPlayInterval={autoPlayInterval}
            slideAspectRatio={slideAspectRatio}
            slideMaxHeight={slideMaxHeight}
        />
    )
}

function Carousel({
    slides,
    dotCount,
    autoPlayInterval,
    slideAspectRatio,
    slideMaxHeight,
}: {
    slides: React.ReactNode[]
    dotCount: number
    autoPlayInterval?: number
    slideAspectRatio?: string
    slideMaxHeight?: number
}) {
    const [emblaRef, emblaApi] = useEmblaCarousel({
        loop: true,
        align: "center",
        slidesToScroll: 1,
    })

    const [selectedIndex, setSelectedIndex] = useState(0)
    const slideRefs = useRef<(HTMLDivElement | null)[]>([])
    const [isHovered, setIsHovered] = useState(false)

    const scrollPrev = useCallback(() => emblaApi?.scrollPrev(), [emblaApi])
    const scrollNext = useCallback(() => emblaApi?.scrollNext(), [emblaApi])

    const scrollToDot = useCallback(
        (dotIndex: number) => emblaApi?.scrollTo(dotIndex),
        [emblaApi]
    )

    const onSelect = useCallback(() => {
        if (!emblaApi) return
        setSelectedIndex(emblaApi.selectedScrollSnap() % dotCount)
    }, [emblaApi, dotCount])

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
                        if (sign === -1) diffToTarget = snap - (1 + scrollProgress)
                        if (sign === 1) diffToTarget = snap + (1 - scrollProgress)
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
        onSelect()
        applyScale()
        emblaApi.on("select", onSelect)
        emblaApi.on("scroll", applyScale)
        emblaApi.on("reInit", applyScale)
    }, [emblaApi, onSelect, applyScale])

    useEffect(() => {
        if (!emblaApi || !autoPlayInterval) return
        const interval = setInterval(() => {
            if (!isHovered) emblaApi.scrollNext()
        }, autoPlayInterval)
        return () => clearInterval(interval)
    }, [emblaApi, autoPlayInterval, isHovered])

    const slideContentStyle: React.CSSProperties = {
        ...(slideAspectRatio && { aspectRatio: slideAspectRatio }),
        ...(slideMaxHeight && { maxHeight: `${slideMaxHeight}px` }),
        ...(slideAspectRatio || slideMaxHeight ? { overflow: "hidden" } : {}),
    }

    return (
        <div
            className="w-full max-w-6xl mx-auto"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            <div className="relative">
                <div className="overflow-hidden" ref={emblaRef}>
                    <div className="flex items-center">
                        {slides.map((child, index) => (
                            <div
                                key={index}
                                className="flex-[0_0_70%] sm:flex-[0_0_60%] md:flex-[0_0_45%] lg:flex-[0_0_30%] px-3 sm:px-4"
                            >
                                <div
                                    ref={(el) => { slideRefs.current[index] = el }}
                                    className="transition-transform duration-200 ease-out will-change-transform rounded-lg overflow-hidden shadow-md ring-1 ring-black/10"
                                    style={slideContentStyle}
                                >
                                    {child}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                <button
                    onClick={scrollPrev}
                    aria-label="Previous slide"
                    className="absolute left-2 sm:left-0 top-1/2 -translate-y-1/2 z-10 bg-white/80 hover:bg-white rounded-full p-2 shadow"
                >
                    <FaChevronLeft />
                </button>

                <button
                    onClick={scrollNext}
                    aria-label="Next slide"
                    className="absolute right-2 sm:right-0 top-1/2 -translate-y-1/2 z-10 bg-white/80 hover:bg-white rounded-full p-2 shadow"
                >
                    <FaChevronRight />
                </button>
            </div>

            <div className="flex justify-center mt-4 gap-2">
                {Array.from({ length: dotCount }).map((_, index) => (
                    <button
                        key={index}
                        onClick={() => scrollToDot(index)}
                        aria-label={`Go to slide ${index + 1}`}
                        className={`cursor-pointer w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full transition ${
                            index === selectedIndex ? "bg-black" : "bg-gray-300"
                        }`}
                    />
                ))}
            </div>
        </div>
    )
}