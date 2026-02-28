import { projects } from "@/content/projects";
import ProjectCard from "components/ui/ProjectCard";
import ProjectListItem from "components/projects/ProjectListItem";
import ProjectFilters from "components/projects/ProjectFilters";
import ProjectPagination from "components/projects/ProjectPagination";

interface ProjectsPageProps {
  searchParams: {
    search?: string;
    skills?: string;
    page?: string;
  };
}

const PAGE_SIZE = 5;

export default function ProjectsPage({ searchParams }: ProjectsPageProps) {
  const search = searchParams.search?.toLowerCase() ?? "";
  const selectedSkills = searchParams.skills
    ? searchParams.skills.split(",")
    : [];
  const currentPage = Number(searchParams.page ?? "1");

  // Filter
  const filteredProjects = projects.filter((project) => {
    const matchesSearch =
      !search ||
      project.title.toLowerCase().includes(search) ||
      project.description.toLowerCase().includes(search) ||
      project.skills?.some((skill) =>
        skill.toLowerCase().includes(search)
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
      <section className="space-y-8">
        <h2 className="text-2xl font-semibold">
          All Projects
        </h2>

        <ProjectFilters
          search={search}
          selectedSkills={selectedSkills}
        />

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