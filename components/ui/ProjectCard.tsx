import Link from "next/link";
import Card, { CardHeader, CardContent, CardFooter } from "./Card";
import { cn } from "@/lib/utils";
import { skillMap } from "@/content/skills";
import { SkillBadge } from "./SkillBadge";
import { ProjectMeta } from "@/lib/projects";
import ProjectCardImage from "./ProjectCardImage";

interface ProjectCardProps {
    project: ProjectMeta;
    className?: string;
}

export default function ProjectCard({ project, className }: ProjectCardProps) {
    return (
        <Link href={`/projects/${project.slug}`} className="h-full">
            <Card
                shadow="sm"
                radius="md"
                className={cn(
                    "h-full flex flex-col bg-(--color-surface) text-(--color-text)",
                    className
                )}
                hoverable
                bordered
            >
                <ProjectCardImage image={project.images[0]} title={project.title} label={project.featured ? "Featured" : project.label} />

                <CardHeader>
                    <h3 className="text-lg font-semibold leading-tight">{project.title}</h3>
                </CardHeader>

                <CardContent>
                    <p className="text-sm text-(--color-text-muted) line-clamp-3">{project.description}</p>
                </CardContent>

                {project.skillSlugs.length > 0 && (
                    <CardFooter className="flex flex-wrap gap-2">
                        {project.skillSlugs.map((slug) => (
                            <SkillBadge
                                key={slug}
                                name={skillMap[slug].name}
                            />
                        ))}
                    </CardFooter>
                )}
            </Card>
        </Link>
    );
}