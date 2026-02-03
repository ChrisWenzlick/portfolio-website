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
        <section className={cn("hero", className)}>
            <div className="hero__container">
                {/* Left column (text) */}
                <div className="hero__content">
                    <h1 className="hero__title">{title}</h1>

                    {subtitle && (
                        <p className="hero__subtitle">{subtitle}</p>
                    )}

                    {description && (
                        <p className="hero__description">{description}</p>
                    )}

                    {ctas.length > 0 && (
                        <div className="hero__actions">
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
                    <div className="hero__media">
                        <Card
                            radius="lg"
                            shadow="md"
                            className="hero__media-card"
                        >
                            <Image
                                src={image}
                                alt=""
                                fill
                                className="object-cover"
                                priority
                            />
                        </Card>
                    </div>
                )}
            </div>
        </section>
    );
}