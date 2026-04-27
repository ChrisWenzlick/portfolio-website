import { skillMap } from "@/content/skills";
import { SkillBadge } from "components/ui/SkillBadge";
import Link from "next/link";

interface ProjectMetaProps {
    skillSlugs?: string[];
    repo?: string;
    live?: string;
}

export default function ProjectMeta({ skillSlugs, repo, live }: ProjectMetaProps) {
    if (!skillSlugs?.length && !repo && !live) return null;

    return (
        <div className="flex flex-col flex-wrap items-center gap-3">
            <div className="flex flex-wrap justify-center gap-2">
                {skillSlugs && skillSlugs.length > 0 && (
                    skillSlugs.map((slug) => (
                        <SkillBadge
                            key={slug}
                            name={skillMap[slug].name}
                            href={`/projects?skills=${slug}#projects-list`} />
                    ))
                )}
            </div>

            <div className="flex gap-3">
                {repo && (
                    <Link
                        href={repo}
                        target="_blank"
                        className="text-sm font-medium text-(--color-primary) hover:underline"
                    >
                        View Code
                    </Link>
                )}
                {live && (
                    <Link
                        href={live}
                        target="_blank"
                        className="text-sm font-medium text-(--color-primary) hover:underline"
                    >
                        Live Demo
                    </Link>
                )}
            </div>
        </div>
    );
}