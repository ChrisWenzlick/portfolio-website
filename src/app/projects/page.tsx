import { projects } from "@/content";
import Section, { SectionHeading } from "components/layout/Section";
import ProjectCard from "components/ui/ProjectCard";
import Link from "next/link";

export default function Home() {
    return (
        <main>
            <h1>My Projects</h1>
            <p>Here are some of the things I&apos;ve built</p>
            {/* Featured Projects */}
            <Section id="projects" className="projects-section w-full py-4 sm:py-5 lg:py-6">
                <SectionHeading>Projects</SectionHeading>
                <div className="grid items-stretch sm:gap-3 sm:grid-cols-2 md:gap-6 lg:gap-8 lg:grid-cols-3">
                    <div>Test1</div>
                    <div>Test2</div>
                    <div>Test3</div>
                    <div>Test4</div>
                    <div>Test5</div>
                    {projects
                        .filter((project) => (project.featured))
                        .map((project) => (
                            <Link
                                key={project.slug}
                                href={`/projects/${project.slug}`}
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
            </Section>

            {/* All Projects */}
        </main>
    )
}