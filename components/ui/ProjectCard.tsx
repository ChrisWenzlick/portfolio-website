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
}

export default function ProjectCard({
    image,
    label,
    title,
    description,
    skillSlugs = [],
    className,
}: ProjectCardProps) {
    return (
        <Card shadow="sm" radius="md" className={cn("h-full flex flex-col bg-(--color-surface) text-(--color-text)", className)} hoverable bordered>
            <CardMedia src={image} label={label} />

            <CardHeader>
                <h3 className="text-lg font-semibold leading-tight">{title}</h3>
            </CardHeader>

            <CardContent>
                <p className="text-sm text-(--color-text-muted) line-clamp-3">{description}</p>
            </CardContent>

            {skillSlugs.length > 0 && (
                <CardFooter className="flex flex-wrap gap-2">
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