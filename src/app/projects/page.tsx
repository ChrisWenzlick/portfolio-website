import { projects } from "@/content/projects";
import ProjectCard from "components/ui/ProjectCard";
import ProjectListItem from "components/projects/ProjectListItem";
import ProjectFilters from "components/projects/ProjectFilters";
import ProjectPagination from "components/projects/ProjectPagination";
import { skillMap } from "@/content";

interface ProjectsPageProps {
  searchParams: {
    search?: string;
    skills?: string;
    page?: string;
  };
}

const PAGE_SIZE = 5;

// Get a list of all skills across all projects
const allSkills = Array.from(
    new Set(
        projects.flatMap((project) => project.skills ?? [])
    )
).sort((a, b) => a.localeCompare(b));

export default async function ProjectsPage({
  searchParams,
}: {
  searchParams: Promise<{
    search?: string;
    skills?: string;
    page?: string;
  }>
}) {
  const params = await searchParams;
  const search = params.search?.toLowerCase() ?? "";
  const selectedSkills = params.skills
    ? params.skills.split(",")
    : [];
  const currentPage = Number(params.page ?? "1");

  // Filter
  const filteredProjects = projects.filter((project) => {
    const matchesSearch =
      !search ||
      project.title.toLowerCase().includes(search) ||
      project.description.toLowerCase().includes(search) ||
      project.skills?.some((skillSlug) =>
        skillMap[skillSlug].name
        .toLowerCase().includes(search)
      );

    const matchesSkills =
      selectedSkills.length === 0 ||
      project.skills?.some((skill) =>
        selectedSkills.includes(skill)
      );

    return matchesSearch && matchesSkills;
  });

  // Pagination
  const totalPages = Math.ceil(filteredProjects.length / PAGE_SIZE);
  const start = (currentPage - 1) * PAGE_SIZE;
  const paginatedProjects = filteredProjects.slice(
    start,
    start + PAGE_SIZE
  );

  const featured = projects.filter((p) => p.featured);

  return (
    <main className="mx-auto max-w-6xl px-6 py-16 space-y-16">
      {/* Page Header */}
      <section className="space-y-4">
        <h1 className="text-4xl font-bold tracking-tight">
          Projects
        </h1>
        <p className="max-w-2xl text-muted-foreground">
          A collection of projects focused on backend systems,
          APIs, cloud infrastructure, and maintainable
          architecture.
        </p>
      </section>

      {/* Featured */}
      {featured.length > 0 && (
        <section className="space-y-8">
          <h2 className="text-2xl font-semibold">
            Featured Projects
          </h2>

          <div className="grid gap-8 md:grid-cols-2">
            {featured.map((project) => (
              <ProjectCard
                key={project.slug}
                image={project.image}
                label={project.label}
                title={project.title}
                description={project.description}
                skills={project.skills}
              />
            ))}
          </div>
        </section>
      )}

      {/* All Projects */}
      <section id="projects-list" className="space-y-8">
        <h2 className="text-2xl font-semibold">
          All Projects
        </h2>

        <ProjectFilters
          search={search}
          selectedSkills={selectedSkills}
          allSkills={allSkills}
        />

        <p className="text-sm text-muted-foreground mb-4">
          Showing {paginatedProjects.length} of {filteredProjects.length} projects
        </p>

        {/* Projects List */}
        {filteredProjects.length === 0 ? (
          /* No projects found */
          <div className="py-16 text-center">
            <p className="text-lg font-medium">
              No projects match your filters.
            </p>

            <p className="mt-2 text-sm text-muted-foreground">
              Try adjusting your search or selected skills.
            </p>
          </div>
        ) : (
          /* List the projects */
          <div className="space-y-8">
            {paginatedProjects.map((project, index) => (
              <ProjectListItem
                key={project.slug}
                project={project}
                imagePosition={
                  index % 2 === 0 ? "left" : "right"
                }
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