
import { skills } from "@/content"
import { SkillBadge } from "components/ui/SkillBadge"

export default function SkillsPage() {
  const categories = Array.from(
    new Set(skills.map((skill) => skill.category))
  )

  return (
    <main className="container mx-auto px-6 py-16 space-y-16">
      <header className="space-y-4 w-full text-center">
        <h1 className="text-4xl font-bold tracking-tight">
          Skills & Technologies
        </h1>

        <p className="text-muted-foreground">
          A collection of technologies I’ve worked with across backend,
          frontend, database, and cloud environments.
        </p>
      </header>

      <div className="grid items-stretch gap-32 sm:grid-cols-2 lg:grid-cols-3">
        {categories.map((category) => (
          <div key={category} className="space-y-6">
            <h2 className="text-2xl text-center font-semibold tracking-tight">
              {category}
            </h2>

            <div className="flex flex-wrap justify-center gap-3">
              {skills
                .filter((skill) => skill.category === category)
                .map((skill) => (
                  <SkillBadge
                    key={skill.slug}
                    name={skill.name}
                    href={`/projects?skills=${skill.slug}#projects-list`}
                  />
                ))}
            </div>
          </div>
        ))}
      </div>
    </main>
  )
}