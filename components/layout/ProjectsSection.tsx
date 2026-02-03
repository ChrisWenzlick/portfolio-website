import Link from "next/link";
import Grid from "../ui/Grid";
import ProjectCard from "../ui/ProjectCard";
import Section, { SectionHeading } from "./Section";
import { projects } from "@/content";

export function ProjectsSection() {
    return (
        <Section id="projects" className="projects-section">
            <SectionHeading>Projects</SectionHeading>
            <Grid className="projects-grid">
                {projects.map((project) => (
                    <Link
                        key={project.slug}
                        href={`/projects/${project.slug}`}
                        className="projects-grid__item"
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
            </Grid>
        </Section>
    );
}