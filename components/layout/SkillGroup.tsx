import { SkillBadge } from "../ui/SkillBadge";
import { SkillGroup as SkillGroupType, skillMap } from "@/content/skills";

interface SkillGroupProps {
    group: SkillGroupType;
}

export default function SkillGroup({ group }: SkillGroupProps) {
    return (
        <div className="flex flex-col gap-3">
            <div>
                <h3 className="text-lg text-center font-semibold">{group.title}</h3>
                {group.description && (
                    <p className="text-sm text-center text-(--color-text-muted)">
                        {group.description}
                    </p>
                )}
            </div>

            <div className="flex justify-center flex-wrap gap-2">
                {group.skillSlugs.map((skillSlug) => (
                    <SkillBadge
                        key={skillSlug}
                        name={skillMap[skillSlug].name}
                        href={`/projects?skills=${skillSlug}#projects-list`}
                    />
                ))}
            </div>
        </div>
    );
}