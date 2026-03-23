import Link from "next/link";
import ProjectCard from "../ui/ProjectCard";
import { Project, projects } from "@/content";

export function ProjectsSection() {
    return (
        <section id="projects" className="projects-section">
            <h2>Projects</h2>
            <div className="grid items-stretch sm:gap-3 sm:grid-cols-2 md:gap-6 lg:gap-8 lg:grid-cols-3">
                {projects
                    .sort(CompareByFeaturedAndUpdatedDate)
                    .slice(0, 6)
                    .map((project) =>
                (
                    <Link
                        key={project.slug}
                        href={`/projects/${project.slug}`}
                        className="block h-full"
                    >
                        <ProjectCard
                            key={project.slug}
                            image={project.image}
                            label={project.label}
                            title={project.title}
                            description={project.description}
                            skills={project.skills}
                        />
                    </Link>
                ))}
            </div>
        </section>
    );
}

function CompareByFeaturedAndUpdatedDate(a: Project, b: Project)
{
    if(b.featured != a.featured)
        return Number(b.featured) - Number(a.featured);

    return b.lastUpdatedDate.getTime() - a.lastUpdatedDate.getTime();
}