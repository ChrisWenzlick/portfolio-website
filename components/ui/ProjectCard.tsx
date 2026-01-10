import Card, { CardMedia, CardHeader, CardContent, CardFooter } from "./Card"
import Badge from "./Badge";

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
        <Card className={className}>
            <CardMedia src={image} label={label} />

            <CardHeader>
                <h3 className="text-lg font-semibold leading-tight">
                    {title}
                </h3>
            </CardHeader>

            <CardContent>
                <p className="text-sm text-[var(--color-text-secondary)] line-clamp-3">
                    {description}
                </p>
            </CardContent>

            {skills.length > 0 && (
                <CardFooter className="flex flex-wrap gap-2">
                    {skills.map((skill, i) => (
                        <Badge key={i} size="sm" variant="subtle">
                            {skill}
                        </Badge>
                    ))}
                </CardFooter>
            )}
        </Card>
    );
}