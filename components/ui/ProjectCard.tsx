import Link from "next/link";
import Card, { CardMedia, CardHeader, CardContent, CardFooter } from "./Card"
import { cn } from "@/lib/utils";
import { skillMap } from "@/content";
import { SkillBadge } from "./SkillBadge";

interface ProjectCardProps {
  image?: string;
  label?: string;
  title: string;
  description: string;
  skillSlugs?: string[];
  className?: string;
  slug: string; // add this
}

export default function ProjectCard({
  image,
  label,
  title,
  description,
  skillSlugs = [],
  className,
  slug, // add this
}: ProjectCardProps) {
  return (
    <Card
      shadow="sm"
      radius="md"
      className={cn("relative h-full flex flex-col bg-(--color-surface) text-(--color-text)", className)} // add relative
      hoverable
      bordered
    >
      {/* Overlay link covers the entire card */}
      <Link
        href={`/projects/${slug}`}
        className="absolute inset-0 z-10"
        aria-label={title}
      />

      <CardMedia src={image} label={label} />
      <CardHeader>
        <h3 className="text-lg font-semibold leading-tight">{title}</h3>
      </CardHeader>
      <CardContent>
        <p className="text-sm text-(--color-text-muted) line-clamp-3">{description}</p>
      </CardContent>

      {skillSlugs.length > 0 && (
        <CardFooter className="relative z-20 flex flex-wrap gap-2"> {/* add relative z-20 */}
          {skillSlugs.map((slug) => (
            <SkillBadge
              key={slug}
              name={skillMap[slug].name}
              href={`/projects?skills=${slug}#projects-list`}
            />
          ))}
        </CardFooter>
      )}
    </Card>
  );
}