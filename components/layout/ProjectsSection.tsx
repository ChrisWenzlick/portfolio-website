import ProjectCard from "../ui/ProjectCard";
import { ProjectMeta, getAllProjects } from "@/lib/projects";
import Button from "components/ui/Button";

const projects = await getAllProjects();

export function ProjectsSection() {
    return (
        <section id="projects" className="projects-section">
            <h2>Projects</h2>
            <div className="mb-4 grid items-stretch gap-4 sm:grid-cols-2 md:gap-6 lg:gap-8 lg:grid-cols-3">
                {projects
                    .sort(CompareByFeaturedAndUpdatedDate)
                    .slice(0, 6)
                    .map((project) =>
                (
                    <ProjectCard
                        key={project.slug}
                        project={project}
                        className="block h-full"
                    />
                ))}
            </div>
            <Button>
                View All Projects
            </Button>
        </section>
    );
}

function CompareByFeaturedAndUpdatedDate(a: ProjectMeta, b: ProjectMeta)
{
    if(b.featured != a.featured)
        return Number(b.featured) - Number(a.featured);

    return b.lastUpdatedDate.getTime() - a.lastUpdatedDate.getTime();
}