import { getAllProjects } from "@/lib/projects";
import { skillMap } from "@/content/skills";
import { Skill } from "@/content/skills";
import ProjectCard from "components/ui/ProjectCard";
import ProjectListItem from "components/projects/ProjectListItem";
import ProjectFilters from "components/projects/ProjectFilters";
import ProjectPagination from "components/projects/ProjectPagination";

const PAGE_SIZE = 5;
const projects = await getAllProjects();

// Derived once at module level — all skills actually used across projects
const allSkills: Skill[] = Array.from(
    new Set(projects.flatMap((p) => p.skillSlugs))
)
    .map((slug) => skillMap[slug])
    .filter(Boolean)
    .sort((a, b) => a.name.localeCompare(b.name));

export default async function ProjectsPage({
    searchParams,
}: {
    searchParams: Promise<{
        search?: string;
        skills?: string;
        page?: string;
    }>;
}) {
    const params = await searchParams;
    const search = params.search?.toLowerCase() ?? "";
    const currentPage = Number(params.page ?? "1");

    // Resolve slug strings from URL into Skill objects once, here
    const selectedSkills: Skill[] = (params.skills?.split(",") ?? [])
        .map((slug) => skillMap[slug])
        .filter(Boolean);

    const selectedSlugs = new Set(selectedSkills.map((s) => s.slug));

    // Filter
    const filteredProjects = projects.filter((project) => {
        const matchesSearch =
            !search ||
            project.title.toLowerCase().includes(search) ||
            project.description.toLowerCase().includes(search) ||
            project.skillSlugs.some((slug) =>
                skillMap[slug]?.name.toLowerCase().includes(search)
            );

        const matchesSkills =
            selectedSlugs.size === 0 ||
            project.skillSlugs.some((slug) => selectedSlugs.has(slug));

        return matchesSearch && matchesSkills;
    });

    // Pagination
    const totalPages = Math.ceil(filteredProjects.length / PAGE_SIZE);
    const start = (currentPage - 1) * PAGE_SIZE;
    const paginatedProjects = filteredProjects.slice(start, start + PAGE_SIZE);

    const featured = projects
        .filter((p) => p.featured)
        .sort((a, b) => b.lastUpdatedDate.getTime() - a.lastUpdatedDate.getTime())
        .slice(0, 6);

    return (
        <main className="mx-auto max-w-6xl px-6 py-16 space-y-16">
            {/* Page Header */}
            <section className="space-y-4">
                <h1 className="text-4xl font-bold tracking-tight">Projects</h1>
                <p className="max-w-2xl text-center text-muted-foreground">
                    A collection of projects focused on backend systems, APIs, cloud
                    infrastructure, and maintainable architecture.
                </p>
            </section>

            {/* Featured */}
            {featured.length > 0 && (
                <section className="space-y-8">
                    <h2 className="text-2xl font-semibold">Featured Projects</h2>
                    <div className="grid gap-8 md:grid-cols-2">
                        {featured.map((project) => (
                            <ProjectCard
                                key={project.slug}
                                project={project}
                            />
                        ))}
                    </div>
                </section>
            )}

            {/* All Projects */}
            <section id="projects-list" className="space-y-8">
                <h2 className="text-2xl font-semibold">All Projects</h2>

                <ProjectFilters
                    search={search}
                    selectedSkills={selectedSkills}
                    allSkills={allSkills}
                />

                <p className="text-sm text-muted-foreground">
                    Showing {paginatedProjects.length} of {filteredProjects.length} projects
                </p>

                {filteredProjects.length === 0 ? (
                    <div className="py-16 text-center">
                        <p className="text-lg font-medium">No projects match your filters.</p>
                        <p className="mt-2 text-sm text-muted-foreground">
                            Try adjusting your search or selected skills.
                        </p>
                    </div>
                ) : (
                    <div className="space-y-8">
                        {paginatedProjects.map((project, index) => (
                            <ProjectListItem
                                key={project.slug}
                                project={project}
                                imagePosition={index % 2 === 0 ? "left" : "right"}
                            />
                        ))}
                    </div>
                )}

                <ProjectPagination
                    currentPage={currentPage}
                    totalPages={totalPages}
                    search={search}
                    selectedSkills={selectedSkills}
                />
            </section>
        </main>
    );
}