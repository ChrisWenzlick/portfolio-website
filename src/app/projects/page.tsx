import { projects } from "@/content";
import Section, { SectionHeading } from "components/layout/Section";
import Grid from "components/ui/Grid";
import ProjectCard from "components/ui/ProjectCard";
import Link from "next/link";

export default function Home() {
    return (
        <main>
            <h1>My Projects</h1>
            <p>Here are some of the things I&apos;ve built</p>
            {/* Featured Projects */}
            <Section id="projects" className="projects-section">
                <SectionHeading>Projects</SectionHeading>
                <Grid className="projects-grid">
                    {projects
                        .filter((project) => (project.featured))
                        .map((project) => (
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

            {/* All Projects */}
        </main>
    )
}