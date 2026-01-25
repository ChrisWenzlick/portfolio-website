import Grid from "../ui/Grid";
import ProjectCard from "../ui/ProjectCard";
import Section, { SectionHeading } from "./Section";
import { projects } from "@/content";

export function ProjectsSection() {
    return (
        <Section id="projects">
            <SectionHeading>Projects</SectionHeading>
            <Grid>
                {projects.map((project) => (
                    <ProjectCard
                        key={project.slug}
                        image={project.image}
                        label={project.label}
                        title={project.title}
                        description={project.description}
                        skills={project.skills}
                    />
                ))}
            </Grid>
        </Section>
    );
}