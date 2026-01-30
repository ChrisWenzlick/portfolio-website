import { notFound } from "next/navigation";
import path from "path";
import fs from "fs";

interface ProjectPageProps {
    params: { slug: string };
}

export const dynamicParams = false;

export async function generateStaticParams() {
    const dir = path.join(process.cwd(), "src/content/projects");
    const files = await fs.promises.readdir(dir);

    return files
        .filter((f) => f.endsWith(".mdx"))
        .map((f) => ({ slug: f.replace(/\.mdx$/, "") }));
}

export default async function ProjectPage({ params }: ProjectPageProps) {
    const { slug } = await params;

    try {
        const ProjectMdx = (await import(`@/content/projects/${slug}.mdx`)).default;
        const metadata = (await import(`@/content/projects/${slug}.mdx`)).metadata;

        return (
            <article className="mx-auto max-w-3xl px-4 py-12">
                <header className="mb-8">
                    <h1 className="text-3xl font-bold">{metadata.title}</h1>
                    <p className="mt-2 text-muted-foreground">
                        {metadata.summary}
                    </p>
                </header>

                {metadata.technologies && (
                    <div className="flex flex-wrap gap-2 mb-6">
                    {metadata.technologies.map((tech: string) => (
                        <span
                            key={tech}
                            className="px-2 py-1 rounded bg-gray-200 text-gray-800 text-sm"
                        >
                            {tech}
                        </span>
                    ))}
                    </div>
                )}

                <div className="prose prose-neutral dark:prose-invert max-w-none">
                    <ProjectMdx />
                </div>

                {metadata.repo && (
                    <a href={metadata.repo} target="_blank">
                        View Code
                    </a>
                )}
                {metadata.live && (
                    <a href={metadata.live} target="_blank">
                        Live Demo
                    </a>
                )}
            </article>
        );
    } catch {
        return notFound();
    }
}
