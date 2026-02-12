import Link from "next/link";

interface ProjectMetaProps {
    technologies?: string[];
    repo?: string;
    live?: string;
}

export default function ProjectMeta({ technologies, repo, live }: ProjectMetaProps) {
    if (!technologies?.length && !repo && !live) return null;

    return (
        <div className="flex flex-wrap items-center gap-3">
            {technologies && technologies.length > 0 && (
                <ul className="flex flex-wrap gap-2">
                    {technologies.map((tech) => (
                        <li
                            key={tech}
                            className="rounded-md border border-[var(--color-border-subtle)] bg-[var(--color-bg-surface)] px-3 py-1 text-sx font-medium"
                        >
                            {tech}
                        </li>
                    ))}
                </ul>
            )}

            <div className="flex gap-3">
                {repo && (
                    <Link
                        href={repo}
                        target="_blank"
                        className="text-sm font-medium text-[var(--color-primary)] hover:underline"
                    >
                        View Code
                    </Link>
                )}
                {live && (
                    <Link
                        href={live}
                        target="_blank"
                        className="text-sm font-medium text-[var(--color-primary)] hover:underline"
                    >
                        Live Demo
                    </Link>
                )}
            </div>
        </div>
    );
}