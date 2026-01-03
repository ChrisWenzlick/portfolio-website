import Image from "next/image";
import Card from "./Card"

interface ProjectCardProps {
    title: string;
    description: string;
    imageUrl?: string;
    label?: string;
    tags?: string[];
}

export default function ProjectCard({
    title,
    description,
    imageUrl,
    label,
    tags = [],
}: ProjectCardProps) {
    return (
        <Card className="flex flex-col">
            {/* Image Section */}
            {imageUrl && (
                <div className="relative h-40 w-full">
                    <Image
                        src={imageUrl}
                        alt={title}
                        fill
                        className="object-cover"
                    />

                    {/* Fade to Black */}
                    <div
                        className="
                            pointer-events-none
                            absolute inset-x-0 bottom-0 h-16
                            bg-gradient-to-t
                            from-black/60
                            to-transparent
                        "
                    />

                    {/* Optional Label Bubble */}
                    {label && (
                        <span
                            className="
                                absolute top-3 left-3
                                rounded-full
                                bg-black/70
                                px-3 py-1
                                text-sx font-medium
                                text-white
                                backdrop-blur-sm
                            "
                        >
                            {label}
                        </span>
                    )}
                </div>
            )}

            {/* Content */}
            <div className="flex flex-col gap-3 p-5">
                <h3 className="text-base font-semibold text-[var(--color-text)]">
                    {title}
                </h3>

                <p className="text-sm
                    text-[var(--color-text-muted)]
                    line-clamp-3"
                >
                    {description}
                </p>

                {/* Tags */}
                {tags.length > 0 && (
                    <div className="mt-auto flex flex-wrap gap-2 pt-2">
                        {tags.map((tag) => (
                            <span
                                key={tag}
                                className="rounded-md
                                    bg-[var(--color-border)]
                                    px-2 py-1
                                    text-xs
                                    text-[var(--color-text-muted)]"
                            >
                                {tag}
                            </span>
                        ))}
                    </div>
                )}
            </div>
        </Card>
    );
}