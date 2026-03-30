import Link from "next/link";
import Image from "next/image";
import { cn } from "@/lib/utils";
import { skillMap } from "@/content/skills";
import { SkillBadge } from "components/ui/SkillBadge";
import { Project } from "@/content/projects";

interface ProjectListItemProps {
    project: Pick<Project, "slug" | "title" | "description" | "image" | "skillSlugs">;
    imagePosition?: "left" | "right";
}

export default function ProjectListItem({
    project,
    imagePosition = "left",
}: ProjectListItemProps) {
    const isRight = imagePosition === "right";

    return (
        <article
            className={cn(
                "relative grid items-stretch cursor-pointer",
                "bg-(--color-surface) border border-solid border-(--color-border) rounded-lg overflow-hidden",
                // Title color and hover state driven from article level
                "[&_h3]:text-(--color-primary) hover:[&_h3]:text-(--color-primary-hover)",
                "md:grid-cols-[1fr_1.5fr]",
                isRight && "md:grid-cols-[1.5fr_1fr]"
            )}
        >
            {/* Overlay link covers the entire article including the image */}
            <Link
                href={`/projects/${project.slug}`}
                className="absolute inset-0 z-10"
                aria-label={project.title}
            />

            {project.image && (
                <div className={cn("relative min-h-52", isRight && "md:order-2")}>
                    <Image
                        src={project.image}
                        alt=""
                        fill
                        className="object-cover"
                    />
                </div>
            )}

            <div className={cn("py-4 px-5 flex flex-col gap-3", isRight && "md:order-1")}>
                <h3 className="text-lg font-semibold transition-colors">{project.title}</h3>

                <p className="text-sm text-(--color-text-muted)">{project.description}</p>

                {project.skillSlugs && project.skillSlugs.length > 0 && (
                    // z-20 places badges above the z-10 overlay link
                    <div className="relative z-20 flex flex-wrap gap-2 mt-auto">
                        {project.skillSlugs.map((slug) => (
                            <SkillBadge
                                key={slug}
                                name={skillMap[slug].name}
                                href={`/projects?skills=${slug}#projects-list`}
                            />
                        ))}
                    </div>
                )}
            </div>
        </article>
    );
}