import { SkillBadge } from "components/ui/SkillBadge";
import Link from "next/link";

interface ProjectMetaProps {
    technologies?: string[];
    repo?: string;
    live?: string;
}

export default function ProjectMeta({ technologies, repo, live }: ProjectMetaProps) {
    if (!technologies?.length && !repo && !live) return null;

    return (
        <div className="flex flex-col flex-wrap items-center gap-3">
            <div className="flex gap-2">
                {technologies && technologies.length > 0 && (
                    technologies.map((tech) => (
                        <SkillBadge key={tech} name={tech} />
                    ))
                )}
            </div>

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