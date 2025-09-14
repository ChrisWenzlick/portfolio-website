import projects from "@/content/projects.json";
import ProjectCard from "@/components/ProjectCard";

export default function ProjectsPage() {
    return (
        <main className="max-w-5x1 mx-auto p-6">
            <h1 className="text-3x1 font-bold mb-6">Projects</h1>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {projects.map((project, index) => (
                    <ProjectCard key={index} project={project} />
                ))}
            </div>
        </main>
    );
}