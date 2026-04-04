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
    <Link href={`/projects/${project.slug}`}>
      <article
        className={cn(
          "grid items-stretch cursor-pointer",
          "bg-(--color-surface) border border-solid border-(--color-border) rounded-lg overflow-hidden",
          "[&_h3]:text-(--color-primary) hover:[&_h3]:text-(--color-primary-hover)",
          "md:grid-cols-[1fr_1.5fr]",
          isRight && "md:grid-cols-[1.5fr_1fr]"
        )}
      >
        {project.image && (
          <div className={cn("relative min-h-52", isRight && "md:order-2")}>
            <Image
              src={project.image}
              alt=""
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            />
          </div>
        )}
        <div className={cn("py-4 px-5 flex flex-col gap-3", isRight && "md:order-1")}>
          <h3 className="text-lg font-semibold transition-colors">{project.title}</h3>
          <p className="text-sm text-(--color-text-muted)">{project.description}</p>
          {project.skillSlugs && project.skillSlugs.length > 0 && (
            <div className="flex flex-wrap gap-2 mt-auto">
              {project.skillSlugs.map((slug) => (
                <SkillBadge
                  key={slug}
                  name={skillMap[slug].name}
                />
              ))}
            </div>
          )}
        </div>
      </article>
    </Link>
  );
}