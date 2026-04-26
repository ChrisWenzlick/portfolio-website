import { cn } from "@/lib/utils";
import { skillMap } from "@/content/skills";
import { SkillBadge } from "components/ui/SkillBadge";
import { ProjectMeta } from "@/lib/projects";
import ProjectCardImage from "components/ui/ProjectCardImage";
import Link from "next/link";

interface ProjectListItemProps {
    project: ProjectMeta;
    imagePosition?: "left" | "right";
}

export default function ProjectListItem({
    project,
    imagePosition = "left",
}: ProjectListItemProps) {
    const isRight = imagePosition === "right";
    const firstImage = project.images[0];

    return (
        <article
            className={cn(
                "relative grid items-stretch cursor-pointer",
                "bg-(--color-surface) border border-solid border-(--color-border) rounded-lg overflow-hidden",
                "[&_h3]:text-(--color-primary) hover:[&_h3]:text-(--color-primary-hover)",
                "md:grid-cols-[1fr_1.5fr]",
                isRight && "md:grid-cols-[1.5fr_1fr]"
            )}
        >
            <Link
                href={`/projects/${project.slug}`}
                className="absolute inset-0 z-10"
                aria-label={project.title}
            />

            <div className={cn("relative min-h-52", isRight && "md:order-2")}>
                <ProjectCardImage image={firstImage} title={project.title} label={project.featured ? "Featured" : project.label} />
            </div>

            <div className={cn("py-4 px-5 flex flex-col gap-3", isRight && "md:order-1")}>
                <h3 className="text-lg font-semibold transition-colors">{project.title}</h3>

                <p className="text-sm text-(--color-text-muted)">{project.description}</p>

                {project.skillSlugs.length > 0 && (
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