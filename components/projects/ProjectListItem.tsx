import Link from "next/link";
import Image from "next/image";
import Badge from "components/ui/Badge";
import { cn } from "@/lib/utils";
import { skillMap } from "@/content/skills";

interface ProjectListItemProps {
  project: {
    slug: string;
    title: string;
    description: string;
    image?: string;
    skills?: string[];
  };
  imagePosition?: "left" | "right";
}

export default function ProjectListItem({
  project,
  imagePosition = "left",
}: ProjectListItemProps) {
  return (
    <article
    className={`grid gap-6 items-stretch bg-(--color-surface) border border-solid border-(--color-border) rounded-lg overflow-hidden ${imagePosition === 'right' ? 'md:grid-cols-[1.5fr_1fr]' : 'md:grid-cols-[1fr_1.5fr]'}`}
    >
      {project.image && (
        <div className={cn(
          'relative min-h-52',
          imagePosition === 'right' ? 'md:order-2' : ""
        )}>
          <Image
            src={project.image}
            alt={project.title}
            fill
            className="object-cover"
          />
        </div>
      )}

      <div className={cn(
        "py-4 px-5 flex flex-col gap-3",
        imagePosition === 'right' ? 'md:order-1' : ""
      )}>
        <h3 className="text-lg font-semibold">
          <Link href={`/projects/${project.slug}`}>{project.title}</Link>
        </h3>

        <p className="text-sm text-(--color-text-muted)">
          {project.description}
        </p>

        {project.skills && project.skills.length > 0 && (
          <div className="flex flex-wrap gap-2 mt-auto">
            {project.skills.map((skill) => (
              <Badge key={skill} size="sm" variant="subtle">
                {skillMap[skill].name}
              </Badge>
            ))}
          </div>
        )}
      </div>
    </article>
  );
}