import Image from "next/image";

interface ProjectCardImageProps {
    image?: { src: string; alt?: string };
    title: string;
    label?: string;
}

export default function ProjectCardImage({ image, title, label }: ProjectCardImageProps) {
    if (!image) {
        return (
            <div className="relative w-full min-h-52 flex items-center justify-center bg-(--color-surface-raised) border-b border-(--color-border)">
                <span className="text-sm text-(--color-text-muted)">{title}</span>
            </div>
        );
    }

    return (
        <div className="relative w-full min-h-52">
            <Image
                src={image.src}
                alt={image.alt ?? ""}
                fill
                className="object-cover"
            />
            <div className="absolute inset-0 bg-linear-to-t from-black/60 to-transparent" />
            {label && (
                <span className="absolute top-3 left-3 py-1 px-2 rounded-md bg-black/70 text-white text-xs">
                    {label}
                </span>
            )}
        </div>
    );
}