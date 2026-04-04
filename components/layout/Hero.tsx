"use client";

import Image from "next/image";
import { cn } from "@/lib/utils";
import Card from "../ui/Card";
import Button from "../ui/Button";

export interface HeroProps {
    title: string;
    subtitle?: string;
    description?: string;
    image?: string;
    ctas?: {
        label: string;
        href: string;
        variant?: "primary" | "outline" | "ghost";
    }[];
    className?: string;
}

export default function Hero({
    title,
    subtitle,
    description,
    image,
    ctas = [],
    className,
}: HeroProps) {
    return (
        <section className={cn("min-h-3/5 py-20", className)}>
            <div className="mx-auto w-full max-w-6xl px-4 grid gap-12 md:grid-cols-2">
                {/* Left column (text) */}
                <div className="flex flex-col justify-center gap-6">
                    <h1 className="text-5xl md:text-6xl font-bold tracking-tight">{title}</h1>

                    {subtitle && (
                        <p className="text-xl text-(--color-text-muted) leading-relaxed">{subtitle}</p>
                    )}

                    {description && (
                        <p className="text-(--color-text-muted)">{description}</p>
                    )}

                    {ctas.length > 0 && (
                        <div className="flex flex-wrap gap-4 pt-2">
                            {ctas.map((cta, i) => (
                                <Button
                                    key={i}
                                    href={cta.href}
                                    variant={cta.variant ?? "primary"}
                                    size="lg"
                                >
                                    {cta.label}
                                </Button>
                            ))}
                        </div>
                    )}
                </div>

                {/* Right column (image) */}
                {image && (
                    <div className="relative flex items-center justify-center">
                        <Card
                            radius="lg"
                            shadow="md"
                            className="relative aspect-square w-full max-w-sm overflow-hidden"
                        >
                            <Image
                                src={image}
                                alt=""
                                fill
                                className="object-cover"
                                priority
                                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                            />
                        </Card>
                    </div>
                )}
            </div>
        </section>
    );
}