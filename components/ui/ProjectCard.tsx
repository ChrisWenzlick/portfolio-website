import Card, { CardMedia, CardHeader, CardContent, CardFooter } from "./Card"
import Badge from "./Badge";
import { cn } from "@/lib/utils";
import { skillMap } from "@/content";

interface ProjectCardProps {
    image?: string;
    label?: string;
    title: string;
    description: string;
    skills?: string[];
    className?: string;
}

export default function ProjectCard({
    image,
    label,
    title,
    description,
    skills = [],
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

            {skills.length > 0 && (
                <CardFooter className="flex flex-wrap gap-2">
                    {skills.map((skill, i) => (
                        <Badge key={i} size="sm" variant="subtle">
                            {skillMap[skill].name}
                        </Badge>
                    ))}
                </CardFooter>
            )}
        </Card>
    );
}