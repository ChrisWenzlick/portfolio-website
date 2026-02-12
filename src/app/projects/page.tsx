import { ProjectsSection } from "components/layout/ProjectsSection";

export default function Home() {
    return (
        <main>
            <h1>My Projects</h1>
            <p>Here are some of the things I&apos;ve built</p>
            {/* Featured Projects */}
            <ProjectsSection />

            {/* All Projects */}
        </main>
    )
}