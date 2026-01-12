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
        <section
            className={cn(
                "min-h-[60vh] w-full flex items-center py-20",
                className
            )}
        >
            <div className="mx-auto w-full max-w-6xl px-4 grid grid-cols-1 gap-12 md:grid-cols-2">

                {/* Left column (text) */}
                <div className="flex flex-col justify-center gap-6">
                    <h1 className="text-4xl font-bold leading-tight tracking-tight md:text-5xl">
                        {title}
                    </h1>

                    {subtitle && (
                        <p className="text-xl text-[var(--color-text-secondary)] leading-relaxed">
                            I build maintainable software systems with clean architecture and modern tooling.
                        </p>
                    )}

                    {description && (
                        <p className="text-[var(--color-text-secondary)]">
                            Focused on backend, APIs, and cloud, with full-stack capability.
                        </p>
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
                            />
                        </Card>
                    </div>
                )}
            </div>
        </section>
    );
}

// interface HeroProperties {
//     imageUrl?: string;
//     className?: string;
//     children?: React.ReactNode;
// }

// export default function Hero({
//     imageUrl,
//     className="",
//     children 
// }: HeroProperties) {
//     return (
//         <section
//             className={`text-center bg-brand text-white ${className}`}
//             style={
//                 imageUrl
//                 ? {
//                   backgroundImage: `url(${imageUrl})`,
//                   backgroundSize: "cover",
//                   backgroundPosition: "center",
//                 }
//                 : undefined
//             }
//         >
//           {children}
//         </section>
//     );
// }