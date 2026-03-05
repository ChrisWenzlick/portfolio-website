
import { skills } from "@/content"
import { Icon } from "components/icons/Icon"
import Link from "next/link"

export default function SkillsPage() {
  const categories = Array.from(
    new Set(skills.map((skill) => skill.category))
  )

  return (
    <main className="container mx-auto px-6 py-16 space-y-16">
      <header className="space-y-4 max-w-3xl">
        <h1 className="text-4xl font-bold tracking-tight">
          Skills & Technologies
        </h1>

        <p className="text-muted-foreground">
          A collection of technologies I’ve worked with across backend,
          frontend, database, and cloud environments.
        </p>
      </header>

      {categories.map((category) => (
        <section key={category} className="space-y-6">
          <h2 className="text-2xl font-semibold tracking-tight">
            {category}
          </h2>

          <div className="flex flex-wrap gap-3">
            {skills
              .filter((skill) => skill.category === category)
              .map((skill) => (
                <Link
                  key={skill.slug}
                  href={`/projects?skills=${skill.slug}#projects-list`}
                  className="inline-flex items-center gap-2 rounded-md border px-4 py-2 text-sm font-medium hover:bg-muted transition-colors"
                >
                  <Icon name={skill.iconName} />
                  {skill.name}
                </Link>
              ))}
          </div>
        </section>
      ))}
    </main>
  )
}