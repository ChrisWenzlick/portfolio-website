import { SkillBadge } from "../ui/SkillBadge";
import { SkillGroup as SkillGroupType } from "@/content/skills";

interface SkillGroupProps {
    group: SkillGroupType;
}

export default function SkillGroup({ group }: SkillGroupProps) {
    return (
        <div className="space-y-3">
            <div>
                <h3 className="text-lg font-semibold">{group.title}</h3>
                {group.description && (
                    <p className="text-sm text-muted-foreground">
                        {group.description}
                    </p>
                )}
            </div>

            <div className="flex flex-wrap gap-2">
                {group.skills.map((skill) => (
                    <SkillBadge
                        key={skill.name}
                        name={skill.name}
                    />
                ))}
            </div>
        </div>
    );
}