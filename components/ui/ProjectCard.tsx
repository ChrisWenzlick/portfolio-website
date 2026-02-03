import Card, { CardMedia, CardHeader, CardContent, CardFooter } from "./Card"
import Badge from "./Badge";
import { cn } from "@/lib/utils";

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
        <Card className={cn("project-card", className)} hoverable bordered>
            <CardMedia src={image} label={label} />

            <CardHeader>
                <h3 className="project-card__title">{title}</h3>
            </CardHeader>

            <CardContent>
                <p className="project-card__description">{description}</p>
            </CardContent>

            {skills.length > 0 && (
                <CardFooter className="project-card__footer">
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